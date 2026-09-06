"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  subscribeToLeads,
  updateLeadStatus,
  updateLeadNotes,
  deleteLead,
} from "@/lib/leadService";

const SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL &&
  !process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL.includes("AKfycbzpTM2VcC")
    ? process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
    : "https://script.google.com/macros/s/AKfycbzqxCCQ-V3XJvM8CRj7DQkC5d0ivAkYbY2OJ8_11WnOjauVFaIHmigCfeHUdHknRV5v/exec";

export default function AdminLeadsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // 2FA state
  const [step, setStep] = useState("login"); // "login" | "otp" | "forgot"
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const otpRefs = useRef([]);

  // Forgot Key state
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryLoading, setRecoveryLoading] = useState(false);
  const [recoveryError, setRecoveryError] = useState("");
  const [recoverySuccess, setRecoverySuccess] = useState(false);

  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Live IST Clock (HH:MM:SS) and Date
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      try {
        const timeFormatter = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        const dateFormatter = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        setCurrentTime(timeFormatter.format(now));
        setCurrentDate(dateFormatter.format(now));
      } catch {
        setCurrentTime(now.toLocaleTimeString());
        setCurrentDate(now.toDateString());
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // OTP resend cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState(null);
  const [leadNotes, setLeadNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);

  // Check auth from session: tab close terminates sessionStorage, but reload preserves it
  useEffect(() => {
    try {
      const authSession = sessionStorage.getItem("chittortech_admin_auth");
      if (authSession === "true" || (authSession && authSession.length > 5)) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.warn("Session check error:", e);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  // Step 1: Validate Access Key & Captcha, then trigger server-side 2FA OTP
  // (Zero OTP or email leakage in client inspect / console / network)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setLoginError("Verification code (CAPTCHA) is incorrect. Please try again.");
      generateCaptcha();
      setLoginLoading(false);
      return;
    }

    const correctKey = process.env.NEXT_PUBLIC_ADMIN_ACCESS_KEY || "255856";
    if (passcode.trim() === correctKey) {
      try {
        if (SCRIPT_URL) {
          await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify({
              action: "admin_request_otp",
              authGate: "CT_ADMIN_GATEWAY_2026",
            }),
          });
        }
        setStep("otp");
        setResendCooldown(30);
        setLoginLoading(false);
        setTimeout(() => otpRefs.current[0]?.focus(), 150);
      } catch (err) {
        setStep("otp");
        setResendCooldown(30);
        setLoginLoading(false);
        setTimeout(() => otpRefs.current[0]?.focus(), 150);
      }
    } else {
      setLoginError("Incorrect access key. Please verify your credentials.");
      generateCaptcha();
      setLoginLoading(false);
    }
  };

  // Recover Master Key handler
  const handleRecoverKey = async (e) => {
    e.preventDefault();
    setRecoveryLoading(true);
    setRecoveryError("");
    setRecoverySuccess(false);

    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setRecoveryError("Verification code (CAPTCHA) is incorrect. Please try again.");
      generateCaptcha();
      setRecoveryLoading(false);
      return;
    }

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "admin_recover_key",
          email: recoveryEmail.trim(),
        }),
      });
      const data = await res.json();
      if (data && data.status === "success") {
        setRecoverySuccess(true);
        setRecoveryError("");
      } else {
        setRecoveryError(data?.msg || "Unauthorized email. Key recovery is restricted to registered admins.");
        generateCaptcha();
      }
    } catch (err) {
      setRecoveryError("Recovery request failed. Please check your connection.");
    } finally {
      setRecoveryLoading(false);
    }
  };

  // Step 2: 2FA OTP Digits handlers
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);
    setOtpError("");
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setOtpDigits(pasted.split(""));
      otpRefs.current[5]?.focus();
    }
  };

  // Validate OTP securely via Google Apps Script (Zero client-side OTP storage)
  const handleVerifyOtp = async () => {
    const code = otpDigits.join("");
    if (code.length < 6) {
      setOtpError("Please enter the complete 6-digit verification code.");
      return;
    }
    setOtpLoading(true);
    setOtpError("");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "admin_verify_otp",
          enteredOtp: code,
        }),
      });

      const data = await res.json();
      if (data && data.verified === true) {
        setOtpSuccess(true);
        sessionStorage.setItem("chittortech_admin_auth", data.token || "true");
        setTimeout(() => {
          setIsAuthenticated(true);
          setOtpLoading(false);
        }, 700);
      } else {
        setOtpError(data?.msg || "Incorrect verification code. Please check your email and try again.");
        setOtpDigits(["", "", "", "", "", ""]);
        setOtpLoading(false);
        otpRefs.current[0]?.focus();
      }
    } catch (err) {
      setOtpError("Verification failed. Please check your connection and try again.");
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setResendCooldown(30);
    setOtpError("");
    setOtpDigits(["", "", "", "", "", ""]);

    if (SCRIPT_URL) {
      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({
            action: "admin_request_otp",
            authGate: "CT_ADMIN_GATEWAY_2026",
          }),
        });
      } catch (err) {
        // Silently handled
      }
    }
    otpRefs.current[0]?.focus();
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem("chittortech_admin_auth");
      sessionStorage.clear();
    } catch (e) {
      console.warn("Storage clear error:", e);
    }
    setIsAuthenticated(false);
    setStep("login");
    setPasscode("");
    setOtpDigits(["", "", "", "", "", ""]);
    setOtpError("");
    setLoginError("");
    generateCaptcha();
  };

  // Real-time Firestore subscription
  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);

    const unsubscribe = subscribeToLeads(
      (data) => {
        setLeads(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Leads subscription error:", err);
        setError("Failed to load leads from Firestore. Please verify Firestore rules.");
        setLoading(false);
      }
    );

    return () => unsubscribe && unsubscribe();
  }, [isAuthenticated]);

  // Sync selected lead notes
  useEffect(() => {
    if (selectedLead) {
      setLeadNotes(selectedLead.notes || "");
    }
  }, [selectedLead]);

  // Handle status update
  const handleStatusChange = async (leadId, newStatus) => {
    try {
      await updateLeadStatus(leadId, newStatus);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  // Handle save notes
  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setSavingNotes(true);
    await updateLeadNotes(selectedLead.id, leadNotes);
    setSelectedLead((prev) => ({ ...prev, notes: leadNotes }));
    setSavingNotes(false);
  };

  // Handle delete
  const handleDelete = async (leadId, name) => {
    if (window.confirm(`Are you sure you want to delete the lead for "${name || 'this inquiry'}"?`)) {
      await deleteLead(leadId);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead(null);
      }
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => (l.status || "new") === "new").length;
    const contacted = leads.filter((l) => l.status === "contacted").length;
    const converted = leads.filter((l) => l.status === "converted").length;
    return { total, newCount, contacted, converted };
  }, [leads]);

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Status filter
      if (statusFilter !== "all" && (lead.status || "new") !== statusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = lead.name?.toLowerCase().includes(q);
        const matchContact = lead.contact?.toLowerCase().includes(q);
        const matchEmail = lead.email?.toLowerCase().includes(q);
        const matchCompany = lead.company?.toLowerCase().includes(q);
        const matchLocation = lead.location?.toLowerCase().includes(q);
        const matchMessage = lead.message?.toLowerCase().includes(q);
        return matchName || matchContact || matchEmail || matchCompany || matchLocation || matchMessage;
      }
      return true;
    });
  }, [leads, statusFilter, searchQuery]);

  // Export CSV
  const handleExportCSV = () => {
    if (filteredLeads.length === 0) return;

    const headers = ["ID", "Date", "Name", "Contact", "Email", "Company", "Industry", "Location", "Status", "Source", "Message", "Notes"];
    const rows = filteredLeads.map((l) => {
      const dateStr = l.createdDate ? new Date(l.createdDate).toLocaleString("en-IN") : "";
      return [
        `"${l.id}"`,
        `"${dateStr}"`,
        `"${(l.name || "").replace(/"/g, '""')}"`,
        `"${(l.contact || "").replace(/"/g, '""')}"`,
        `"${(l.email || "").replace(/"/g, '""')}"`,
        `"${(l.company || "").replace(/"/g, '""')}"`,
        `"${(l.industry || "").replace(/"/g, '""')}"`,
        `"${(l.location || "").replace(/"/g, '""')}"`,
        `"${l.status || "new"}"`,
        `"${(l.source || "").replace(/"/g, '""')}"`,
        `"${(l.message || "").replace(/"/g, '""')}"`,
        `"${(l.notes || "").replace(/"/g, '""')}"`,
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `chittortech_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Phone helper
  const cleanPhoneForWhatsApp = (raw) => {
    if (!raw) return "";
    let cleaned = raw.replace(/[^0-9]/g, "");
    if (cleaned.length === 10) cleaned = "91" + cleaned;
    return cleaned;
  };

  // Status badge styling
  const renderStatusBadge = (status) => {
    const s = status || "new";
    const styles = {
      new: { bg: "rgba(245, 158, 11, 0.12)", text: "#fbbf24", border: "rgba(245, 158, 11, 0.3)", label: "New Lead", dot: "#f59e0b" },
      contacted: { bg: "rgba(99, 102, 241, 0.14)", text: "#818cf8", border: "rgba(99, 102, 241, 0.3)", label: "Contacted", dot: "#6366f1" },
      qualified: { bg: "rgba(168, 85, 247, 0.14)", text: "#c084fc", border: "rgba(168, 85, 247, 0.3)", label: "Qualified", dot: "#a855f7" },
      converted: { bg: "rgba(34, 197, 94, 0.14)", text: "#4ade80", border: "rgba(34, 197, 94, 0.3)", label: "Converted", dot: "#22c55e" },
      lost: { bg: "rgba(148, 163, 184, 0.12)", text: "#94a3b8", border: "rgba(148, 163, 184, 0.25)", label: "Lost / Closed", dot: "#94a3b8" },
    };
    const current = styles[s] || styles.new;
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: "999px",
          backgroundColor: current.bg,
          color: current.text,
          border: `1px solid ${current.border}`,
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.2px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: current.dot,
            boxShadow: `0 0 8px ${current.dot}`,
          }}
        />
        {current.label}
      </span>
    );
  };

  // Checking active session (preserves dashboard on reload, forces login on tab close)
  if (isCheckingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #0f172a 0%, #030712 100%)",
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "140px",
              height: "140px",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/favicon.png"
            alt="ChittorTech"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              marginBottom: "20px",
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
              position: "relative",
            }}
          />
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(255, 255, 255, 0.1)",
              borderTopColor: "#38bdf8",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 16px",
            }}
          />
          <p style={{ color: "#f8fafc", fontSize: "0.95rem", fontWeight: 700, margin: "0 0 6px 0", letterSpacing: "-0.2px" }}>
            Verifying Admin Session
          </p>
          <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>
            ChittorTech™ Secure Enclave
          </p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // If not authenticated, show clean login & 2FA design matching Affiliate Marketing App
  // If not authenticated, show clean 2-column split-screen layout:
  // Left: Colorful ChittorTech Enterprise CRM Data & Showcase (Rich, lively & "bhara-bhara")
  // Right: Clean, executive-grade secure login & 2FA functionality
  if (!isAuthenticated) {
    return (
      <div className="ct-admin-split-container" style={loginStyles.container}>
        {/* LEFT COLUMN: Colorful ChittorTech Showcase & Live Data (Rich & Comprehensive) */}
        <div className="ct-admin-showcase-col" style={loginStyles.showcaseCol}>
          {/* Top Brand Header, Live IST Clock & Badges */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                  padding: "2px",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/favicon.png"
                  alt="ChittorTech Logo"
                  style={{ width: "30px", height: "30px", borderRadius: "8px" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.4px", lineHeight: "1.2" }}>
                  ChittorTech<span style={{ color: "#2563eb" }}>™</span> CRM
                </div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Enterprise Pipeline Operations
                </div>
              </div>
            </div>

            {/* Enterprise Security Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(37, 99, 235, 0.08)",
                  color: "#1d4ed8",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: "20px",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  letterSpacing: "0.5px",
                }}
              >
                <i className="fas fa-shield-alt" style={{ fontSize: "10px" }}></i>
                ENTERPRISE CONSOLE
              </div>
            </div>
          </div>

          {/* Center Content: Rich Headline & Comprehensive Data Widgets */}
          <div style={{ margin: "clamp(6px, 1.2vh, 12px) 0", flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: "clamp(6px, 1vh, 10px)" }}>
              <h2
                style={{
                  fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: "1.25",
                  letterSpacing: "-0.5px",
                  margin: "0 0 4px 0",
                }}
              >
                Command Center for Customer Growth &amp; Pipeline.
              </h2>
              <p style={{ color: "#64748b", fontSize: "clamp(0.74rem, 0.85vw, 0.82rem)", lineHeight: "1.4", margin: 0 }}>
                Unified real-time multichannel ecosystem streaming customer inquiries from Web Forms, WhatsApp, Custom Software, and Marketing Campaigns.
              </p>
            </div>

            {/* 4 Colorful Data Metric Cards (2x2 Grid) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "clamp(6px, 1vh, 10px)" }}>
              {/* Card 1: Total Inquiries (Blue) */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #bfdbfe",
                  borderRadius: "12px",
                  padding: "clamp(7px, 1vh, 10px) 12px",
                  boxShadow: "0 2px 6px rgba(37,99,235,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "3.5px", height: "100%", background: "#2563eb" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span style={{ fontSize: "0.66rem", fontWeight: 700, color: "#1e40af", textTransform: "uppercase", letterSpacing: "0.4px" }}>Total Inquiries</span>
                  <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-users" style={{ fontSize: "10px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "clamp(1.15rem, 1.35vw, 1.35rem)", fontWeight: 800, color: "#0f172a", lineHeight: "1.1", marginBottom: "2px" }}>
                  2,840+
                </div>
                <div style={{ fontSize: "0.66rem", color: "#16a34a", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                  <i className="fas fa-arrow-up" style={{ fontSize: "8px" }}></i> 38.4% MoM Growth
                </div>
              </div>

              {/* Card 2: Deal Pipeline (Emerald) */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #a7f3d0",
                  borderRadius: "12px",
                  padding: "clamp(7px, 1vh, 10px) 12px",
                  boxShadow: "0 2px 6px rgba(16,185,129,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "3.5px", height: "100%", background: "#10b981" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span style={{ fontSize: "0.66rem", fontWeight: 700, color: "#065f46", textTransform: "uppercase", letterSpacing: "0.4px" }}>Pipeline Volume</span>
                  <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#ecfdf5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-chart-line" style={{ fontSize: "10px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "clamp(1.15rem, 1.35vw, 1.35rem)", fontWeight: 800, color: "#0f172a", lineHeight: "1.1", marginBottom: "2px" }}>
                  ₹4.82 Cr+
                </div>
                <div style={{ fontSize: "0.66rem", color: "#059669", fontWeight: 700 }}>
                  Active High-Intent Deals
                </div>
              </div>

              {/* Card 3: Speed-to-Lead (Purple) */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #ddd6fe",
                  borderRadius: "12px",
                  padding: "clamp(7px, 1vh, 10px) 12px",
                  boxShadow: "0 2px 6px rgba(124,58,237,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "3.5px", height: "100%", background: "#7c3aed" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span style={{ fontSize: "0.66rem", fontWeight: 700, color: "#5b21b6", textTransform: "uppercase", letterSpacing: "0.4px" }}>Response Velocity</span>
                  <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-bolt" style={{ fontSize: "10px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "clamp(1.15rem, 1.35vw, 1.35rem)", fontWeight: 800, color: "#0f172a", lineHeight: "1.1", marginBottom: "2px" }}>
                  &lt; 12 Mins
                </div>
                <div style={{ fontSize: "0.66rem", color: "#7c3aed", fontWeight: 700 }}>
                  WhatsApp Auto-Routing
                </div>
              </div>

              {/* Card 4: Conversion Ratio (Amber) */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #fed7aa",
                  borderRadius: "12px",
                  padding: "clamp(7px, 1vh, 10px) 12px",
                  boxShadow: "0 2px 6px rgba(245,158,11,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "3.5px", height: "100%", background: "#f59e0b" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span style={{ fontSize: "0.66rem", fontWeight: 700, color: "#9a3412", textTransform: "uppercase", letterSpacing: "0.4px" }}>Win Conversion</span>
                  <span style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#fff7ed", color: "#ea580c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-check-double" style={{ fontSize: "10px" }}></i>
                  </span>
                </div>
                <div style={{ fontSize: "clamp(1.15rem, 1.35vw, 1.35rem)", fontWeight: 800, color: "#0f172a", lineHeight: "1.1", marginBottom: "2px" }}>
                  84.6%
                </div>
                <div style={{ fontSize: "0.66rem", color: "#c2410c", fontWeight: 700 }}>
                  Qualified Deals Won
                </div>
              </div>
            </div>

            {/* ENTERPRISE CRM WORKFLOW ENGINE (Clean, Modern & Prestigious) */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "clamp(8px, 1.2vh, 12px) 14px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                marginBottom: "clamp(6px, 1vh, 10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#1e293b", textTransform: "uppercase", letterSpacing: "0.6px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <i className="fas fa-layer-group" style={{ color: "#2563eb", fontSize: "11px" }}></i>
                  Enterprise CRM Pipeline Automation
                </span>
                <span style={{ fontSize: "0.65rem", color: "#059669", fontWeight: 700, backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "2px 7px", borderRadius: "4px" }}>
                  ✓ Sub-15m Routing
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {/* Module 1 */}
                <div style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "10px", padding: "8px 10px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
                    <i className="fas fa-bolt" style={{ fontSize: "11px" }}></i>
                  </div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#0f172a", marginBottom: "2px" }}>Instant Auto-Push</div>
                  <div style={{ fontSize: "0.65rem", color: "#64748b", lineHeight: "1.3" }}>Real-time alerts to WhatsApp &amp; sales desks</div>
                </div>

                {/* Module 2 */}
                <div style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "10px", padding: "8px 10px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
                    <i className="fas fa-filter" style={{ fontSize: "11px" }}></i>
                  </div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#0f172a", marginBottom: "2px" }}>Smart Qualifying</div>
                  <div style={{ fontSize: "0.65rem", color: "#64748b", lineHeight: "1.3" }}>Lead scoring &amp; automated stage progression</div>
                </div>

                {/* Module 3 */}
                <div style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9", borderRadius: "10px", padding: "8px 10px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", backgroundColor: "#f5f3ff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5px" }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: "11px" }}></i>
                  </div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#0f172a", marginBottom: "2px" }}>Zero-Trust Enclave</div>
                  <div style={{ fontSize: "0.65rem", color: "#64748b", lineHeight: "1.3" }}>256-bit encryption &amp; audit access logging</div>
                </div>
              </div>
            </div>

            {/* Visual Multi-Channel Lead Distribution Progress Bar Widget */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "clamp(7px, 1vh, 10px) 12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                marginBottom: "clamp(6px, 1vh, 10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  <i className="fas fa-chart-pie" style={{ color: "#2563eb", marginRight: "5px" }}></i>
                  Multi-Channel Inbound Mix
                </span>
                <span style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 600 }}>Active Channels</span>
              </div>
              {/* Segmented Color Bar */}
              <div style={{ width: "100%", height: "6px", borderRadius: "3px", display: "flex", overflow: "hidden", marginBottom: "5px", background: "#f1f5f9" }}>
                <div style={{ width: "42%", background: "#2563eb" }} title="Web Portals: 42%" />
                <div style={{ width: "36%", background: "#10b981" }} title="WhatsApp: 36%" />
                <div style={{ width: "14%", background: "#8b5cf6" }} title="Custom Software: 14%" />
                <div style={{ width: "8%", background: "#f59e0b" }} title="Direct / Inbound: 8%" />
              </div>
              {/* Channel Legends */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.66rem", color: "#475569", fontWeight: 600, flexWrap: "wrap", gap: "4px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }} /> Web (42%)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} /> WhatsApp (36%)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8b5cf6" }} /> Software (14%)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} /> Direct (8%)
                </span>
              </div>
            </div>
          </div>

          {/* Simple Bottom Brand Line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "clamp(8px, 1.2vh, 12px)", flexShrink: 0, color: "#94a3b8", fontSize: "clamp(0.7rem, 0.78vw, 0.76rem)", fontWeight: 500 }}>
            <span>© {new Date().getFullYear()} ChittorTech™. All rights reserved.</span>
            <span>Enterprise Pipeline Console</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Authentic Executive Admin Sign In Card (50% Width & Matching Height) */}
        <div className="ct-admin-panel-col" style={loginStyles.panelCol}>
          {/* Top Security Status Bar with Live IST Clock & Live Sync */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
              <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.2px" }}>
                ChittorTech™ Enclave Gateway
              </span>
            </div>

            {/* LIVE IST CLOCK & STATUS WIDGET */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {/* Live IST Clock (HH:MM:SS) + Date Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  backgroundColor: "#ffffff",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "10px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                <i className="far fa-clock" style={{ color: "#2563eb", fontSize: "12px" }}></i>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    fontFamily: "monospace",
                    letterSpacing: "0.5px",
                  }}
                >
                  {currentTime || "--:--:--"}
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    color: "#1d4ed8",
                    backgroundColor: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    borderRadius: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  IST
                </span>
                <span style={{ width: "1px", height: "13px", backgroundColor: "#cbd5e1" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#475569", whiteSpace: "nowrap" }}>
                  {currentDate || ""}
                </span>
              </div>

              {/* Live Sync Active Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(34, 197, 94, 0.12)",
                  color: "#166534",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                Live Sync
              </div>
            </div>
          </div>

          <div style={loginStyles.card}>

            {/* Header */}
            <div style={loginStyles.header}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "8px" }}>
                <div style={loginStyles.logoContainer}>
                  <img src="/favicon.png" alt="ChittorTech Logo" style={loginStyles.logo} />
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(37, 99, 235, 0.08)",
                    color: "#2563eb",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    border: "1px solid rgba(37, 99, 235, 0.2)",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 5px #22c55e" }} />
                  RESTRICTED ENCLAVE
                </span>
              </div>
              <h1 style={loginStyles.title}>
                {step === "otp" ? "Security Verification" : step === "forgot" ? "Master Key Recovery" : "Executive Sign In"}
              </h1>
              <p style={{ color: "#64748b", fontSize: "0.78rem", margin: "3px 0 0 0", lineHeight: "1.4" }}>
                {step === "otp"
                  ? "Enter the 6-digit cryptographic verification token dispatched to your device."
                  : step === "forgot"
                  ? "Enter registered administrator email address to receive your master access key."
                  : "Enter authorized master credentials to access the CRM console."}
              </p>
            </div>

            {/* STEP 1: LOGIN FORM */}
            {step === "login" && (
              <form onSubmit={handleLogin} style={loginStyles.form}>
                {/* Security Alert Banner */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    fontSize: "0.74rem",
                    color: "#166534",
                    fontWeight: 500,
                  }}
                >
                  <i className="fas fa-shield-alt" style={{ color: "#16a34a", fontSize: "12px", flexShrink: 0 }}></i>
                  <span>End-to-End Encrypted Session with Dual 2FA Verification.</span>
                </div>

                {loginError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{loginError}</span>
                  </div>
                )}

                {/* Access Key */}
                <div style={loginStyles.inputGroup}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label htmlFor="passcode" style={loginStyles.label}>Admin Access Key</label>
                    <button
                      type="button"
                      onClick={() => {
                        setStep("forgot");
                        setRecoveryError("");
                        setRecoverySuccess(false);
                        setRecoveryEmail("");
                        generateCaptcha();
                      }}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#2563eb",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Forgot Key?
                    </button>
                  </div>
                  <div style={loginStyles.inputWrapper}>
                    <i className="fas fa-key" style={loginStyles.inputIcon}></i>
                    <input
                      id="passcode"
                      type={showPassword ? "text" : "password"}
                      required
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                        setLoginError("");
                      }}
                      placeholder="Enter master access key..."
                      style={{ ...loginStyles.input, paddingRight: "40px" }}
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={loginStyles.eyeButton}
                      title={showPassword ? "Hide key" : "Show key"}
                    >
                      <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} style={{ fontSize: "13px" }}></i>
                    </button>
                  </div>
                </div>

                {/* Security Verification (CAPTCHA) */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="captcha" style={loginStyles.label}>Human Verification</label>
                  <div style={loginStyles.captchaRow}>
                    <div style={loginStyles.captchaBox}>{captchaCode}</div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      style={loginStyles.refreshButton}
                      title="Refresh Captcha"
                    >
                      <i className="fas fa-sync-alt" style={{ fontSize: "13px" }}></i>
                    </button>
                    <input
                      id="captcha"
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter code"
                      style={{ ...loginStyles.input, flex: 1, paddingLeft: "12px" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  style={{
                    ...loginStyles.submitButton,
                    ...(loginLoading ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {loginLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      Proceed to 2FA Authentication <i className="fas fa-arrow-right" style={{ fontSize: "12px" }}></i>
                    </span>
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #f1f5f9" }}>
                  <button
                    type="button"
                    id="forgot-admin-access-key-btn"
                    onClick={() => {
                      setStep("forgot");
                      setRecoveryError("");
                      setRecoverySuccess(false);
                      setRecoveryEmail("");
                      generateCaptcha();
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#2563eb",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "4px 8px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      borderRadius: "6px",
                    }}
                  >
                    <i className="fas fa-unlock-alt" style={{ fontSize: "11px", color: "#2563eb" }}></i>
                    <span>Forgot Admin Access Key?</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: 2FA OTP VERIFICATION */}
            {step === "otp" && (
              <div style={loginStyles.form}>
                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <div style={loginStyles.otpIconWrap}>
                    <i className="fas fa-shield-alt" style={{ color: "#10b981", fontSize: "28px" }}></i>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <p style={loginStyles.otpTitle}>Security Verification</p>
                  <p style={loginStyles.otpSub}>
                    A 6-digit one-time passcode has been dispatched to authorized administrator devices.
                  </p>
                </div>

                {otpError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{otpError}</span>
                  </div>
                )}
                {otpSuccess && (
                  <div style={loginStyles.successAlert}>
                    <i className="fas fa-check-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>Verified! Redirecting to dashboard...</span>
                  </div>
                )}

                {/* 6 OTP Digit Inputs */}
                <div style={loginStyles.otpRow} onPaste={handleOtpPaste}>
                  {otpDigits.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { otpRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      style={{
                        ...loginStyles.otpDigitInput,
                        ...(digit ? loginStyles.otpDigitFilled : {}),
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={otpLoading || otpSuccess || otpDigits.join("").length < 6}
                  style={{
                    ...loginStyles.submitButton,
                    ...(otpLoading || otpSuccess || otpDigits.join("").length < 6 ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {otpLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : otpSuccess ? (
                    "Verified ✓"
                  ) : (
                    "Verify & Access Dashboard"
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "4px" }}>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendCooldown > 0}
                    style={loginStyles.resendButton}
                  >
                    {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : "Resend verification code"}
                  </button>
                  <br />
                  <button
                    type="button"
                    onClick={() => {
                      setStep("login");
                      setOtpDigits(["", "", "", "", "", ""]);
                      setOtpError("");
                      generateCaptcha();
                    }}
                    style={{ ...loginStyles.resendButton, color: "#94a3b8", marginTop: "6px" }}
                  >
                    ← Back to login
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FORGOT KEY RECOVERY */}
            {step === "forgot" && (
              <form onSubmit={handleRecoverKey} style={loginStyles.form}>
                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <div style={{ ...loginStyles.otpIconWrap, background: "#eff6ff" }}>
                    <i className="fas fa-key" style={{ color: "#2563eb", fontSize: "24px" }}></i>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "4px" }}>
                  <p style={loginStyles.otpTitle}>Recover Admin Access Key</p>
                  <p style={loginStyles.otpSub}>
                    Enter your registered administrator email address. Your Master Access Key will be dispatched directly to your inbox.
                  </p>
                </div>

                {recoveryError && (
                  <div style={loginStyles.errorAlert}>
                    <i className="fas fa-exclamation-circle" style={{ flexShrink: 0, fontSize: "14px" }}></i>
                    <span>{recoveryError}</span>
                  </div>
                )}
                {recoverySuccess && (
                  <div style={{ ...loginStyles.successAlert, display: "block", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <i className="fas fa-check-circle" style={{ flexShrink: 0, fontSize: "15px" }}></i>
                      <strong style={{ fontSize: "13px" }}>Master Access Key Dispatched!</strong>
                    </div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#166534", lineHeight: "1.4" }}>
                      Please check your registered inbox (including Spam / Updates) for your key, then return to sign in.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStep("login");
                        setRecoveryError("");
                        setRecoverySuccess(false);
                        setRecoveryEmail("");
                        generateCaptcha();
                      }}
                      style={{
                        background: "#16a34a",
                        color: "#ffffff",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Return to Login →
                    </button>
                  </div>
                )}

                {/* Admin Email */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="recoveryEmail" style={loginStyles.label}>Administrator Email</label>
                  <div style={loginStyles.inputWrapper}>
                    <i className="fas fa-envelope" style={loginStyles.inputIcon}></i>
                    <input
                      id="recoveryEmail"
                      type="email"
                      required
                      value={recoveryEmail}
                      onChange={(e) => {
                        setRecoveryEmail(e.target.value);
                        setRecoveryError("");
                      }}
                      placeholder="Enter registered admin email"
                      style={{ ...loginStyles.input, paddingLeft: "40px" }}
                      autoFocus
                    />
                  </div>
                </div>

                {/* Security Verification (CAPTCHA) */}
                <div style={loginStyles.inputGroup}>
                  <label htmlFor="recoveryCaptcha" style={loginStyles.label}>Human Verification</label>
                  <div style={loginStyles.captchaRow}>
                    <div style={loginStyles.captchaBox}>{captchaCode}</div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      style={loginStyles.refreshButton}
                      title="Refresh Captcha"
                    >
                      <i className="fas fa-sync-alt" style={{ fontSize: "13px" }}></i>
                    </button>
                    <input
                      id="recoveryCaptcha"
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Enter code"
                      style={{ ...loginStyles.input, flex: 1, paddingLeft: "12px" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={recoveryLoading}
                  style={{
                    ...loginStyles.submitButton,
                    ...(recoveryLoading ? loginStyles.submitButtonDisabled : {}),
                  }}
                >
                  {recoveryLoading ? (
                    <span style={loginStyles.spinner} />
                  ) : (
                    "Send Master Key"
                  )}
                </button>

                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setStep("login");
                      setRecoveryError("");
                      setRecoverySuccess(false);
                      generateCaptcha();
                    }}
                    style={{ ...loginStyles.resendButton, color: "#94a3b8" }}
                  >
                    ← Back to login
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Simple Bottom Brand Line */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: "clamp(8px, 1.2vh, 12px)", flexShrink: 0, color: "#94a3b8", fontSize: "clamp(0.7rem, 0.78vw, 0.76rem)", fontWeight: 500 }}>
            <span>Protected &amp; Managed by ChittorTech™</span>
            <span>Official Admin Gateway</span>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          .ct-admin-showcase-col {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            flex: 1 1 50% !important;
            width: 50% !important;
            max-width: 50% !important;
            box-sizing: border-box !important;
          }
          .ct-admin-panel-col {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            flex: 1 1 50% !important;
            width: 50% !important;
            max-width: 50% !important;
            box-sizing: border-box !important;
          }
          .ct-admin-showcase-col::-webkit-scrollbar,
          .ct-admin-panel-col::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 992px) {
            .ct-admin-split-container {
              flex-direction: column !important;
              overflow-y: auto !important;
              height: auto !important;
              min-height: 100vh !important;
              max-height: none !important;
            }
            .ct-admin-showcase-col {
              display: none !important;
            }
            .ct-admin-panel-col {
              flex: 1 1 100% !important;
              width: 100% !important;
              max-width: 100% !important;
              min-height: 100vh !important;
              padding: 24px 16px !important;
            }
            .ct-badge-hide-mobile {
              display: none !important;
            }
          }
          @media (max-height: 720px) {
            .ct-badge-hide-mobile {
              display: none !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: "60px",
      }}
    >
      {/* Top Navbar */}
      <nav
        id="admin-top-nav"
        style={{
          background: "#0f172a",
          borderBottom: "1px solid #1e293b",
          color: "#ffffff",
          padding: "14px 32px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/favicon.png"
                alt="ChittorTech"
                style={{ width: "32px", height: "32px", borderRadius: "8px" }}
              />
              <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.3px" }}>
                ChittorTech<span style={{ color: "#38bdf8" }}>™</span> CRM
              </span>
            </Link>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(34, 197, 94, 0.15)",
                color: "#4ade80",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "20px",
                border: "1px solid rgba(34, 197, 94, 0.3)",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
              Live Firestore Sync
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="https://chittor-tech-certificate-generator-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#ffffff",
                padding: "7px 14px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(217, 119, 6, 0.35)",
                transition: "transform 0.15s ease",
              }}
            >
              <i className="fas fa-award"></i> Generate Certificate
            </a>
            <Link
              href="/"
              target="_blank"
              style={{
                color: "#94a3b8",
                fontSize: "0.85rem",
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <i className="fas fa-external-link-alt"></i> View Website
            </Link>
            <button
              onClick={handleLogout}
              title="Logout from Admin Dashboard"
              style={{
                background: "#dc2626",
                border: "none",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 2px 8px rgba(220, 38, 38, 0.35)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#b91c1c")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#dc2626")}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px 24px" }}>
        {/* Title Bar & Stats */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "24px" }}>
            <div>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: "-0.5px" }}>
                Lead Inquiries &amp; Pipeline
              </h1>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>
                All leads received via Website Popups, Demo Requests, Chatbot, and Contact Forms.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                onClick={handleExportCSV}
                disabled={filteredLeads.length === 0}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  border: "1.5px solid #e2e8f0",
                  color: "#1e293b",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  cursor: filteredLeads.length === 0 ? "not-allowed" : "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                }}
              >
                <i className="fas fa-file-excel" style={{ color: "#16a34a" }}></i>
                Export to CSV
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            {/* Total Leads */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #3b82f6, #6366f1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Total Inquiries</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #eff6ff, #dbeafe)", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(37,99,235,0.15)" }}>
                  <i className="fas fa-inbox"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#0f172a", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.total}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#2563eb", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563eb" }}></span>
                Live Database Stream
              </div>
            </div>

            {/* New / Action Required */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #fffbeb 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #fde68a",
                boxShadow: "0 4px 16px rgba(245,158,11,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #f59e0b, #ea580c)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#854d0e", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>New (Action Required)</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(217,119,6,0.18)" }}>
                  <i className="fas fa-bell"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#a16207", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.newCount}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#d97706", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", animation: "pulse 1.5s infinite" }}></span>
                Pending Review
              </div>
            </div>

            {/* Contacted */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #e0e7ff",
                boxShadow: "0 4px 16px rgba(99,102,241,0.05)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #8b5cf6, #6366f1)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#4338ca", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Contacted Pipeline</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #ede9fe, #ddd6fe)", color: "#6d28d9", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(109,40,217,0.15)" }}>
                  <i className="fas fa-phone-alt"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#4338ca", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.contacted}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#6d28d9", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8b5cf6" }}></span>
                Discussions in Progress
              </div>
            </div>

            {/* Converted */}
            <div
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%)",
                padding: "22px 20px",
                borderRadius: "18px",
                border: "1px solid #bbf7d0",
                boxShadow: "0 4px 16px rgba(34,197,94,0.06)",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #059669)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#166534", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px" }}>Converted Deals</span>
                <span style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #dcfce7, #bbf7d0)", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(22,101,52,0.15)" }}>
                  <i className="fas fa-check-double"></i>
                </span>
              </div>
              <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#15803d", marginTop: "10px", letterSpacing: "-0.5px" }}>
                {stats.converted}
              </div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#16a34a", fontWeight: 600 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }}></span>
                Closed Revenue Deals
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            background: "#ffffff",
            padding: "16px 20px",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Status Tabs */}
          <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
            {[
              { key: "all", label: "All Leads" },
              { key: "new", label: `New (${stats.newCount})` },
              { key: "contacted", label: "Contacted" },
              { key: "qualified", label: "Qualified" },
              { key: "converted", label: "Converted" },
              { key: "lost", label: "Closed / Lost" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: statusFilter === tab.key ? "#2563eb" : "#f1f5f9",
                  color: statusFilter === tab.key ? "#ffffff" : "#475569",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "280px", flex: "1", maxWidth: "420px" }}>
            <i
              className="fas fa-search"
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
                fontSize: "0.85rem",
              }}
            ></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, phone, company, message..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 36px",
                borderRadius: "10px",
                border: "1.5px solid #cbd5e1",
                fontSize: "0.86rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Content Area: Table + Details Drawer */}
        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", padding: "16px", borderRadius: "12px", marginBottom: "20px" }}>
            <i className="fas fa-exclamation-triangle" style={{ marginRight: "8px" }}></i>
            {error}
          </div>
        )}

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          {/* Main Table */}
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
            }}
          >
            {loading ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
                <i className="fas fa-spinner fa-spin" style={{ fontSize: "1.8rem", color: "#2563eb", marginBottom: "12px" }}></i>
                <div>Loading real-time leads from Firestore...</div>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div style={{ padding: "60px 20px", textAlign: "center", color: "#64748b" }}>
                <i className="fas fa-folder-open" style={{ fontSize: "2.4rem", color: "#cbd5e1", marginBottom: "14px" }}></i>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", marginBottom: "6px" }}>No Leads Found</h3>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", maxWidth: "340px", margin: "0 auto" }}>
                  {searchQuery || statusFilter !== "all"
                    ? "Try adjusting your search query or status filter."
                    : "New leads submitted via any form on your site will automatically show up here in real time."}
                </p>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.86rem" }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", color: "#475569", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      <th style={{ padding: "14px 18px" }}>Customer / Contact</th>
                      <th style={{ padding: "14px 18px" }}>Business / Industry</th>
                      <th style={{ padding: "14px 18px" }}>Location</th>
                      <th style={{ padding: "14px 18px" }}>Date &amp; Source</th>
                      <th style={{ padding: "14px 18px" }}>Status</th>
                      <th style={{ padding: "14px 18px", textAlign: "right" }}>Quick Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => {
                      const waPhone = cleanPhoneForWhatsApp(lead.contact);
                      const isSelected = selectedLead?.id === lead.id;
                      const dateDisplay = lead.createdDate
                        ? new Date(lead.createdDate).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Just now";

                      return (
                        <tr
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          style={{
                            borderBottom: "1px solid #f1f5f9",
                            cursor: "pointer",
                            background: isSelected ? "#eff6ff" : "transparent",
                            transition: "background 0.15s ease",
                          }}
                        >
                          {/* Name & Contact */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.92rem", marginBottom: "2px" }}>
                              {lead.name || "Anonymous Lead"}
                            </div>
                            <div style={{ color: "#2563eb", fontWeight: 600, fontSize: "0.82rem" }}>
                              {lead.contact || "No phone"}
                            </div>
                            {lead.email && (
                              <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{lead.email}</div>
                            )}
                          </td>

                          {/* Business */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ fontWeight: 600, color: "#1e293b" }}>{lead.company || lead.firm || "Individual"}</div>
                            <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{lead.industry || lead.service || "General Inquiry"}</div>
                          </td>

                          {/* Location */}
                          <td style={{ padding: "14px 18px", color: "#475569" }}>
                            {lead.location || "Not specified"}
                          </td>

                          {/* Date & Source */}
                          <td style={{ padding: "14px 18px" }}>
                            <div style={{ color: "#0f172a", fontWeight: 500 }}>{dateDisplay}</div>
                            <div style={{ color: "#94a3b8", fontSize: "0.75rem", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {lead.source || "Website"}
                            </div>
                          </td>

                          {/* Status Dropdown */}
                          <td style={{ padding: "14px 18px" }} onClick={(e) => e.stopPropagation()}>
                            <select
                              value={lead.status || "new"}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              style={{
                                padding: "6px 10px",
                                borderRadius: "8px",
                                border: "1.5px solid #cbd5e1",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                background: "#ffffff",
                                cursor: "pointer",
                                outline: "none",
                              }}
                            >
                              <option value="new">🟡 New</option>
                              <option value="contacted">🔵 Contacted</option>
                              <option value="qualified">🟣 Qualified</option>
                              <option value="converted">🟢 Converted</option>
                              <option value="lost">⚪ Lost</option>
                            </select>
                          </td>

                          {/* Quick Action Buttons */}
                          <td style={{ padding: "14px 18px", textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                            <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                              {waPhone && (
                                <a
                                  href={`https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello ${lead.name || ""}, thank you for contacting ChittorTech! How can we assist you with your project?`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Chat on WhatsApp"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#22c55e",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                  }}
                                >
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              )}
                              {lead.contact && (
                                <a
                                  href={`tel:${lead.contact.replace(/\s+/g, "")}`}
                                  title="Call Phone"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#2563eb",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                  }}
                                >
                                  <i className="fas fa-phone"></i>
                                </a>
                              )}
                              {lead.email && (
                                <a
                                  href={`mailto:${lead.email}?subject=ChittorTech Consultation`}
                                  title="Send Email"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "8px",
                                    background: "#64748b",
                                    color: "#ffffff",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                  }}
                                >
                                  <i className="fas fa-envelope"></i>
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Lead Details Drawer (Right Side) */}
          {selectedLead && (
            <div
              style={{
                width: "380px",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                padding: "24px",
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
                position: "sticky",
                top: "84px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }}>
                    {selectedLead.name || "Lead Details"}
                  </h3>
                  <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    ID: <span style={{ fontFamily: "monospace" }}>{selectedLead.id.slice(0, 10)}...</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    fontSize: "1rem",
                    padding: "4px",
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div style={{ marginBottom: "16px" }}>
                {renderStatusBadge(selectedLead.status)}
              </div>

              {/* Contact Information */}
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
                  Contact Information
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-phone-alt" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span style={{ fontWeight: 600 }}>{selectedLead.contact || "N/A"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-envelope" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span>{selectedLead.email || "N/A"}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1e293b" }}>
                    <i className="fas fa-map-marker-alt" style={{ color: "#2563eb", width: "16px" }}></i>
                    <span>{selectedLead.location || "N/A"}</span>
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "8px" }}>
                  Inquiry Details
                </div>
                <div style={{ fontSize: "0.84rem", color: "#334155", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div><strong>Company:</strong> {selectedLead.company || "N/A"}</div>
                  <div><strong>Industry:</strong> {selectedLead.industry || "N/A"}</div>
                  <div><strong>Source:</strong> {selectedLead.source || "Website Form"}</div>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
                  Message / Requirements
                </div>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "12px",
                    fontSize: "0.85rem",
                    color: "#1e293b",
                    lineHeight: "1.5",
                    maxHeight: "120px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {selectedLead.message || "No message provided."}
                </div>
              </div>

              {/* Internal Notes */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "6px" }}>
                  Internal Follow-up Notes
                </div>
                <textarea
                  value={leadNotes}
                  onChange={(e) => setLeadNotes(e.target.value)}
                  placeholder="Add notes: e.g. Called client, requested proposal for ERP software..."
                  rows={3}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    padding: "10px",
                    fontSize: "0.82rem",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={handleSaveNotes}
                  disabled={savingNotes}
                  style={{
                    marginTop: "6px",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "8px",
                    background: "#0f172a",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {savingNotes ? "Saving Notes..." : "Save Internal Note"}
                </button>
              </div>

              {/* Delete / Spam */}
              <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => handleDelete(selectedLead.id, selectedLead.name)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ef4444",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Delete Lead
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const loginStyles = {
  container: {
    position: "fixed",
    inset: 0,
    zIndex: 9999999,
    width: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
    backgroundColor: "#ffffff",
    fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
    overflow: "hidden",
  },
  showcaseCol: {
    flex: "1 1 50%",
    width: "50%",
    maxWidth: "50%",
    backgroundColor: "#ffffff",
    borderRight: "2px solid #cbd5e1",
    boxShadow: "6px 0 24px -4px rgba(15, 23, 42, 0.07)",
    padding: "clamp(16px, 2.4vh, 28px) clamp(22px, 3vw, 42px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    position: "relative",
    overflowY: "auto",
    zIndex: 2,
  },
  panelCol: {
    flex: "1 1 50%",
    width: "50%",
    maxWidth: "50%",
    backgroundColor: "#ffffff",
    padding: "clamp(16px, 2.4vh, 28px) clamp(22px, 3vw, 42px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    overflowY: "auto",
    position: "relative",
  },
  card: {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "0",
    padding: "clamp(10px, 1.5vh, 18px) 0",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(10px, 1.4vh, 14px)",
    margin: "auto",
    boxShadow: "none",
    boxSizing: "border-box",
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  logoContainer: {
    width: "38px",
    height: "38px",
    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
    border: "1px solid #bfdbfe",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(37, 99, 235, 0.12)",
  },
  logo: { width: "24px", height: "24px", objectFit: "contain" },
  title: {
    fontSize: "clamp(19px, 2vw, 23px)",
    fontWeight: "800",
    color: "#0f172a",
    margin: "0 0 2px 0",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    fontSize: "9px",
    fontWeight: "800",
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    border: "1px solid #dbeafe",
    padding: "2px 8px",
    borderRadius: "20px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
  },
  form: { display: "flex", flexDirection: "column", gap: "clamp(8px, 1.1vh, 11px)" },
  errorAlert: {
    backgroundColor: "#fef2f2",
    border: "1px solid #fee2e2",
    borderRadius: "10px",
    padding: "9px 12px",
    color: "#991b1b",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    lineHeight: "1.4",
  },
  inputGroup: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontSize: "12px", fontWeight: "700", color: "#1e293b", paddingLeft: "2px" },
  captchaRow: { display: "flex", alignItems: "center", gap: "8px" },
  captchaBox: {
    backgroundColor: "#f1f5f9",
    border: "1.5px dashed #94a3b8",
    borderRadius: "10px",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "14px",
    paddingRight: "14px",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "4px",
    fontFamily: "monospace",
    color: "#0f172a",
    textDecoration: "line-through",
    userSelect: "none",
    fontStyle: "italic",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
  },
  refreshButton: {
    backgroundColor: "#f8fafc",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#475569",
    cursor: "pointer",
    flexShrink: 0,
    outline: "none",
    transition: "all 0.15s ease",
  },
  inputWrapper: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "14px", color: "#2563eb", pointerEvents: "none", fontSize: "13px" },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    border: "1.5px solid #cbd5e1",
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "38px",
    paddingRight: "14px",
    color: "#0f172a",
    fontSize: "13px",
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  eyeButton: {
    position: "absolute",
    right: "10px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    outline: "none",
  },
  submitButton: {
    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
    border: "none",
    borderRadius: "10px",
    paddingTop: "11px",
    paddingBottom: "11px",
    paddingLeft: "16px",
    paddingRight: "16px",
    color: "#ffffff",
    fontSize: "13.5px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4px",
    fontFamily: "inherit",
    boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
  },
  submitButtonDisabled: {
    background: "#94a3b8",
    color: "#ffffff",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  spinner: {
    width: "18px",
    height: "18px",
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#ffffff",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
    display: "inline-block",
  },
  footer: { textAlign: "center", borderTop: "1px solid #f1f5f9", paddingTop: "10px", marginTop: "2px" },
  footerText: { fontSize: "10px", color: "#94a3b8", margin: "0 0 2px 0", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px" },
  footerSubText: { fontSize: "9.5px", color: "#64748b", margin: 0, fontWeight: "500" },
  // 2FA OTP specific styles
  successAlert: {
    backgroundColor: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "10px",
    paddingTop: "9px",
    paddingBottom: "9px",
    paddingLeft: "12px",
    paddingRight: "12px",
    color: "#065f46",
    fontSize: "12px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  otpIconWrap: {
    width: "50px",
    height: "50px",
    backgroundColor: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 6px",
    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)",
  },
  otpTitle: { fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 3px 0" },
  otpSub: { fontSize: "12px", color: "#64748b", margin: "0 0 12px 0", lineHeight: "1.4" },
  otpRow: { display: "flex", gap: "8px", justifyContent: "center", marginBottom: "12px" },
  otpDigitInput: {
    width: "42px",
    height: "48px",
    textAlign: "center",
    fontSize: "19px",
    fontWeight: "800",
    backgroundColor: "#ffffff",
    border: "2px solid #cbd5e1",
    borderRadius: "10px",
    color: "#0f172a",
    outline: "none",
    fontFamily: "monospace",
    transition: "all 0.15s ease",
  },
  otpDigitFilled: {
    border: "2px solid #2563eb",
    backgroundColor: "#eff6ff",
  },
  resendButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    color: "#2563eb",
    fontWeight: "600",
    padding: "3px 0",
  },
};

