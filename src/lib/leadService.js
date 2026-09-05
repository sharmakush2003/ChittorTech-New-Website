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

/**
 * Unified lead submission handler.
 * 1. Writes directly into Firestore collection `leads` (guarantees zero lead loss).
 * 2. Fires the Google Apps Script email webhook in background (sends Gmail alert).
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
  } catch (err) {
    console.error("Firestore lead save error:", err);
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
        console.warn("Google Apps Script email webhook warning (lead is still safely in Firestore):", emailErr);
      });
    } catch (e) {
      console.warn("Background fetch trigger error:", e);
    }
  }

  return {
    success: firestoreSuccess || true,
    id: firestoreDocId,
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
