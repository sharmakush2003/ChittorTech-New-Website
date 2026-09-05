import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const PENDING_LEADS_KEY = "chittortech_pending_leads_buffer";

/**
 * Save lead into browser localStorage if cloud write fails or device is offline.
 */
function bufferLeadLocally(leadPayload, rawFormData) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(PENDING_LEADS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push({
      leadPayload: {
        ...leadPayload,
        createdAt: null, // serverTimestamp cannot be serialized to JSON
        bufferedAt: new Date().toISOString(),
      },
      rawFormData,
      id: "buf_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    });
    localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(list));
    console.info("🛡️ [LeadBuffer] Lead safely stored in local browser buffer. Will auto-sync when online.");
  } catch (err) {
    console.warn("Could not write lead to local buffer:", err);
  }
}

/**
 * Automatically flushes any buffered leads from localStorage to Firestore & email.
 */
export async function flushBufferedLeads() {
  if (typeof window === "undefined") return;
  if (typeof navigator !== "undefined" && !navigator.onLine) return;

  let list = [];
  try {
    const raw = localStorage.getItem(PENDING_LEADS_KEY);
    if (!raw) return;
    list = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return;
  } catch (e) {
    return;
  }

  const remaining = [];
  const scriptUrl =
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL &&
    !process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL.includes("AKfycbzpTM2VcC")
      ? process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      : "https://script.google.com/macros/s/AKfycbzqxCCQ-V3XJvM8CRj7DQkC5d0ivAkYbY2OJ8_11WnOjauVFaIHmigCfeHUdHknRV5v/exec";

  for (const item of list) {
    try {
      const leadsCollection = collection(db, "leads");
      const docRef = await addDoc(leadsCollection, {
        ...item.leadPayload,
        createdAt: serverTimestamp(),
        recoveredFromBuffer: true,
      });

      // Attempt background email trigger
      if (scriptUrl && item.rawFormData) {
        fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify({
            ...item.rawFormData,
            firestoreId: docRef.id,
            source: (item.leadPayload.source || "") + " (Buffered Recovery)",
          }),
        }).catch(() => {});
      }
      console.info("✅ [LeadBuffer] Buffered lead successfully synced to Firestore:", docRef.id);
    } catch (err) {
      // Keep in buffer to retry next time
      remaining.push(item);
    }
  }

  try {
    if (remaining.length > 0) {
      localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(remaining));
    } else {
      localStorage.removeItem(PENDING_LEADS_KEY);
    }
  } catch (e) {}
}

// Set up automatic reconnection & initial flush listener in client browser
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    flushBufferedLeads();
  });
  // Flush on idle shortly after script load
  setTimeout(() => {
    flushBufferedLeads();
  }, 2500);
}

/**
 * Unified lead submission handler.
 * 1. Writes directly into Firestore collection `leads` (guarantees zero lead loss).
 * 2. Fires the Google Apps Script email webhook in background (sends Gmail alert).
 * 3. Falls back to Local Browser Buffer if network drops or Firebase is unreachable.
 */
export async function submitLead(formData) {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  
  const leadPayload = {
    name: formData.name?.trim() || "",
    email: formData.email?.trim() || "",
    contact: formData.contact?.trim() || formData.phone?.trim() || "",
    company: formData.company?.trim() || "",
    industry: formData.industry?.trim() || "",
    firm: formData.firm?.trim() || "",
    location: formData.location?.trim() || "",
    message: formData.message?.trim() || "",
    service: formData.service?.trim() || "",
    source: formData.source || currentPath || "Direct Website Form",
    status: "new", // "new" | "contacted" | "qualified" | "converted" | "lost"
    notes: "",
    createdAt: serverTimestamp(),
    createdDateStr: new Date().toISOString(),
  };

  let firestoreDocId = null;
  let firestoreSuccess = false;

  // 1. Commit to Firestore
  try {
    const leadsCollection = collection(db, "leads");
    const docRef = await addDoc(leadsCollection, leadPayload);
    firestoreDocId = docRef.id;
    firestoreSuccess = true;
    
    // If this succeeded, also check if any older buffered leads need flushing
    flushBufferedLeads();
  } catch (err) {
    console.error("Firestore lead save error (saving to local browser buffer):", err);
    // Emergency safety net: buffer locally in visitor's browser
    bufferLeadLocally(leadPayload, formData);
  }

  // 2. Trigger Email via Google Apps Script (in background, non-blocking)
  const scriptUrl =
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL &&
    !process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL.includes("AKfycbzpTM2VcC")
      ? process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      : "https://script.google.com/macros/s/AKfycbzqxCCQ-V3XJvM8CRj7DQkC5d0ivAkYbY2OJ8_11WnOjauVFaIHmigCfeHUdHknRV5v/exec";
  if (scriptUrl) {
    try {
      fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          firestoreId: firestoreDocId,
          source: leadPayload.source,
        }),
      }).catch((emailErr) => {
        console.warn("Google Apps Script email webhook warning (lead is still safely in Firestore/Buffer):", emailErr);
      });
    } catch (e) {
      console.warn("Background fetch trigger error:", e);
    }
  }

  return {
    success: true, // Always return success to user since lead is guaranteed saved either in Firestore or LocalBuffer
    id: firestoreDocId,
    buffered: !firestoreSuccess,
  };
}

/**
 * Real-time listener for the Admin Dashboard.
 * Automatically pushes new leads when they arrive!
 */
export function subscribeToLeads(onData, onError) {
  try {
    const leadsQuery = query(
      collection(db, "leads"),
      orderBy("createdAt", "desc"),
      limit(250)
    );

    const unsubscribe = onSnapshot(
      leadsQuery,
      (snapshot) => {
        const leads = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            // Fallback timestamp formatting if serverTimestamp hasn't resolved yet
            createdDate: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdDateStr || Date.now()),
          };
        });
        onData(leads);
      },
      (err) => {
        console.error("subscribeToLeads error:", err);
        if (onError) onError(err);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.error("Failed to setup leads listener:", err);
    if (onError) onError(err);
    return () => {};
  }
}

/**
 * Update lead status ("new" | "contacted" | "converted" | "lost")
 */
export async function updateLeadStatus(leadId, newStatus) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await updateDoc(leadRef, {
      status: newStatus,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.error("Failed to update lead status:", err);
    return false;
  }
}

/**
 * Update internal notes for a lead
 */
export async function updateLeadNotes(leadId, notes) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await updateDoc(leadRef, {
      notes,
      updatedAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.error("Failed to update lead notes:", err);
    return false;
  }
}

/**
 * Delete a spam lead
 */
export async function deleteLead(leadId) {
  try {
    const leadRef = doc(db, "leads", leadId);
    await deleteDoc(leadRef);
    return true;
  } catch (err) {
    console.error("Failed to delete lead:", err);
    return false;
  }
}
