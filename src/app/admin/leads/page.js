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
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzqxCCQ-V3XJvM8CRj7DQkC5d0ivAkYbY2OJ8_11WnOjauVFaIHmigCfeHUdHknRV5v/exec";

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
      new: { bg: "#fef3c7", text: "#92400e", label: "New Lead", dot: "#f59e0b" },
      contacted: { bg: "#e0e7ff", text: "#3730a3", label: "Contacted", dot: "#6366f1" },
      qualified: { bg: "#ede9fe", text: "#5b21b6", label: "Qualified", dot: "#8b5cf6" },
      converted: { bg: "#dcfce7", text: "#166534", label: "Converted", dot: "#22c55e" },
      lost: { bg: "#f1f5f9", text: "#475569", label: "Lost / Closed", dot: "#94a3b8" },
    };
    const current = styles[s] || styles.new;
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 10px",
          borderRadius: "20px",
          backgroundColor: current.bg,
          color: current.text,
          fontSize: "0.76rem",
          fontWeight: 700,
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: current.dot,
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
          background: "#ffffff",
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/favicon.png"
            alt="ChittorTech"
            style={{ width: "48px", height: "48px", borderRadius: "12px", marginBottom: "16px" }}
          />
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "3px solid #e2e8f0",
              borderTopColor: "#2563eb",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 12px",
            }}
          />
          <p style={{ color: "#64748b", fontSize: "0.88rem", fontWeight: 600, margin: 0 }}>
            Verifying Admin Session...
          </p>
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // If not authenticated, show clean login & 2FA design matching Affiliate Marketing App
  if (!isAuthenticated) {
    return (
      <div style={loginStyles.container}>
        <div style={loginStyles.card}>
          {/* Header */}
          <div style={loginStyles.header}>
            <div style={loginStyles.logoContainer}>
              <img src="/favicon.png" alt="ChittorTech Logo" style={loginStyles.logo} />
            </div>
            <h1 style={loginStyles.title}>ChittorTech</h1>
            <span style={loginStyles.subtitle}>
              {step === "otp" ? "2FA VERIFICATION" : step === "forgot" ? "KEY RECOVERY" : "ADMIN CRM PORTAL"}
            </span>
          </div>

          {/* STEP 1: LOGIN FORM */}
          {step === "login" && (
            <form onSubmit={handleLogin} style={loginStyles.form}>
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
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Forgot Key?
                  </button>
                </div>
                <div style={loginStyles.inputWrapper}>
                  <i className="fas fa-lock" style={loginStyles.inputIcon}></i>
                  <input
                    id="passcode"
                    type={showPassword ? "text" : "password"}
                    required
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setLoginError("");
                    }}
                    placeholder="••••••••"
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
                <label htmlFor="captcha" style={loginStyles.label}>Security Verification</label>
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
                  "Proceed to 2FA"
                )}
              </button>

              <div style={{ textAlign: "center", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
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
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "6px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    borderRadius: "6px",
                  }}
                >
                  <i className="fas fa-key" style={{ fontSize: "12px", color: "#2563eb" }}></i>
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
                <label htmlFor="recoveryCaptcha" style={loginStyles.label}>Security Verification</label>
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

          <div style={loginStyles.footer}>
            <p style={loginStyles.footerText}>Secure Admin Access Panel</p>
            <p style={loginStyles.footerSubText}>
              Managed &amp; protected by{" "}
              <span style={{ color: "#2563eb", fontWeight: "600" }}>ChittorTech</span>
            </p>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {/* Total */}
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#64748b", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Total Leads</span>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f0fdf4", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-inbox"></i>
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: "10px" }}>
                {stats.total}
              </div>
            </div>

            {/* New / Action Required */}
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #fef08a", boxShadow: "0 2px 8px rgba(234,179,8,0.08)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#854d0e", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>New (Action Required)</span>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#fef9c3", color: "#ca8a04", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-bell"></i>
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#a16207", marginTop: "10px" }}>
                {stats.newCount}
              </div>
            </div>

            {/* Contacted */}
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#64748b", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Contacted</span>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#e0e7ff", color: "#4338ca", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-phone-alt"></i>
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: "10px" }}>
                {stats.contacted}
              </div>
            </div>

            {/* Converted */}
            <div style={{ background: "#ffffff", padding: "20px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#64748b", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Converted Deals</span>
                <span style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-check-double"></i>
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#15803d", marginTop: "10px" }}>
                {stats.converted}
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    padding: "20px",
    overflowY: "auto",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "36px 30px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    margin: "auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  logoContainer: {
    width: "56px",
    height: "56px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
  },
  logo: { width: "32px", height: "32px", objectFit: "contain" },
  title: { fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: "0 0 2px 0", letterSpacing: "-0.03em" },
  subtitle: { fontSize: "10px", fontWeight: "800", color: "#2563eb", letterSpacing: "2.5px", textTransform: "uppercase" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  errorAlert: {
    background: "#fef2f2",
    border: "1px solid #fee2e2",
    borderRadius: "10px",
    padding: "10px 14px",
    color: "#991b1b",
    fontSize: "12.5px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    lineHeight: "1.4",
  },
  inputGroup: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#475569", paddingLeft: "2px" },
  captchaRow: { display: "flex", alignItems: "center", gap: "8px" },
  captchaBox: {
    background: "#f1f5f9",
    border: "1px dashed #cbd5e1",
    borderRadius: "10px",
    padding: "10px 16px",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "4px",
    fontFamily: "monospace",
    color: "#0f172a",
    textDecoration: "line-through",
    userSelect: "none",
    fontStyle: "italic",
    backgroundImage: "radial-gradient(circle, #e2e8f0 10%, transparent 11%), radial-gradient(circle, #e2e8f0 10%, transparent 11%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px",
  },
  refreshButton: {
    background: "#ffffff",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    cursor: "pointer",
    flexShrink: 0,
    outline: "none",
  },
  inputWrapper: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "12px", color: "#94a3b8", pointerEvents: "none" },
  input: {
    width: "100%",
    background: "#ffffff",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    padding: "10px 12px 10px 38px",
    color: "#0f172a",
    fontSize: "13.5px",
    outline: "none",
    transition: "all 0.15s ease",
    fontFamily: "inherit",
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
    background: "#0f172a",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6px",
    fontFamily: "inherit",
  },
  submitButtonDisabled: { background: "#94a3b8", cursor: "not-allowed" },
  spinner: {
    width: "18px",
    height: "18px",
    border: "2px solid rgba(255,255,255,0.2)",
    borderTopColor: "#ffffff",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
    display: "inline-block",
  },
  footer: { textAlign: "center", borderTop: "1px solid #f1f5f9", paddingTop: "16px" },
  footerText: { fontSize: "10px", color: "#94a3b8", margin: "0 0 2px 0", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px" },
  footerSubText: { fontSize: "9.5px", color: "#64748b", margin: 0, fontWeight: "500" },
  // 2FA OTP specific styles
  successAlert: {
    background: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "10px",
    padding: "10px 14px",
    color: "#065f46",
    fontSize: "12.5px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  otpIconWrap: {
    width: "56px",
    height: "56px",
    background: "#ecfdf5",
    border: "1px solid #d1fae5",
    borderRadius: "16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px",
  },
  otpTitle: { fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 4px 0" },
  otpSub: { fontSize: "12.5px", color: "#64748b", margin: "0 0 16px 0", lineHeight: "1.5" },
  otpRow: { display: "flex", gap: "8px", justifyContent: "center", marginBottom: "16px" },
  otpDigitInput: {
    width: "42px",
    height: "50px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "800",
    background: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    color: "#0f172a",
    outline: "none",
    fontFamily: "monospace",
    transition: "all 0.15s ease",
  },
  otpDigitFilled: { border: "2px solid #2563eb", background: "#eff6ff" },
  resendButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    color: "#2563eb",
    fontWeight: "600",
    padding: "4px 0",
  },
};

