"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [guestReq, setGuestReq] = useState({ name: "", phone: "", property: "Grand Heritage Resort", roomType: "Presidential Suite", date: "" });
  const [portalAlert, setPortalAlert] = useState(null);

  const handlePortalSubmit = (e) => {
    e.preventDefault();
    setPortalAlert({ ...guestReq, id: "HUB-" + Math.floor(10000 + Math.random() * 90000), status: "Real-Time Notification Pushed" });
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .prt-hero { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%); padding: 95px 0 75px; color: #fff; position: relative; overflow: hidden; }
        .prt-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; }
        .prt-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .prt-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(67,56,202,0.15); border-color: #4338ca; }
        .prt-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(67,56,202,0.1); color: #4338ca; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 18px; }
        .prt-admin-hub { background: #1e1b4b; color: #fff; border-radius: 24px; padding: 36px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 20px 40px rgba(0,0,0,0.35); }
      `}</style>

      {/* Unique Portal Hero */}
      <section className="prt-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="prt-badge">
                <i className="fa-solid fa-bell"></i> Centralized Admin Control Hub
              </span>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "18px" }}>
                Online Booking &amp; Real-Time Admin Approval Portal
              </h1>
              <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: "650px", marginBottom: "32px" }}>
                Centralized real-time notification engine for multi-property hotels, resorts, and Dharamshalas. Receive instant web &amp; mobile booking alerts, review guest credentials, and approve room allocations in real time.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#portal-live-demo" className="ct-btn ct-btn-primary ct-btn-lg" style={{ background: "#4338ca", borderColor: "#4338ca" }}>
                  <i className="fa-solid fa-desktop"></i> Try Live Admin Portal Demo
                </a>
                <button className="ct-btn ct-btn-ghost" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-sliders"></i> Request Admin Hub Specs
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.5)" }}>
                <i className="fa-solid fa-bell"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal System Architecture Features */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(67,56,202,0.1)", color: "#4338ca", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Enterprise Admin Hub Architecture
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Instant Multi-Property Control &amp; Real-Time Approval Engine
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-tower-cell", title: "Instant Web & Mobile Push Alerts", desc: "WebSocket and Firebase integration delivers sub-second push notifications to admin smartphones, tablets, and desktop dashboards." },
              { icon: "fa-building-user", title: "Multi-Property Master Dashboard", desc: "Manage Dharamshalas, Hotels, Resorts, and Guest Houses from one unified master admin login with multi-tier permissions." },
              { icon: "fa-circle-check", title: "1-Click Real-Time Room Approval", desc: "Admins inspect guest ID proofs, check-in dates, advance deposits, and approve or decline room requests in 1-click." },
              { icon: "fa-map-location-dot", title: "Live Occupancy Heatmap & Grid", desc: "Visual color-coded grid map displaying live occupied, reserved, vacant, and under-maintenance rooms across all properties." },
              { icon: "fa-shield-halved", title: "Role-Based Staff Access & Audit", desc: "Assign custom permissions to Front Desk Staff, Cashiers, Trustees, and Managers with complete action audit logs." },
              { icon: "fa-comments-dollar", title: "WhatsApp & SMS Auto Confirmation", desc: "Trigger automated WhatsApp booking vouchers, Google Map directions, and QR check-in codes upon admin room approval." }
            ].map((f) => (
              <div key={f.title} className="col-md-4">
                <div className="prt-card h-100">
                  <div className="prt-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{f.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Portal Demo */}
      <section id="portal-live-demo" style={{ background: "#f8fafc", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(67,56,202,0.1)", color: "#4338ca", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Live System Demonstration
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Guest Booking &amp; Master Admin Real-Time Approval Hub
            </h2>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Left: Guest Booking Engine */}
            <div className="col-lg-6">
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#4338ca", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>Online Guest Booking Portal</h4>
                </div>
                <form onSubmit={handlePortalSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">GUEST NAME</label>
                    <input type="text" className="form-control" placeholder="e.g. Radhika Merchant" required value={guestReq.name} onChange={(e) => setGuestReq({ ...guestReq, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">PHONE NUMBER</label>
                    <input type="text" className="form-control" placeholder="+91 7597451057" required value={guestReq.phone} onChange={(e) => setGuestReq({ ...guestReq, phone: e.target.value })} />
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">SELECT PROPERTY</label>
                      <select className="form-select" value={guestReq.property} onChange={(e) => setGuestReq({ ...guestReq, property: e.target.value })}>
                        <option value="Grand Heritage Resort">Grand Heritage Resort</option>
                        <option value="Shri Krishna Dharamshala">Shri Krishna Dharamshala</option>
                        <option value="City Center Hotel">City Center Hotel</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">ROOM TYPE</label>
                      <input type="text" className="form-control" required value={guestReq.roomType} onChange={(e) => setGuestReq({ ...guestReq, roomType: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label small fw-bold text-muted">CHECK-IN DATE</label>
                    <input type="date" className="form-control" required value={guestReq.date} onChange={(e) => setGuestReq({ ...guestReq, date: e.target.value })} />
                  </div>
                  <button type="submit" className="ct-btn ct-btn-primary w-100 justify-content-center" style={{ background: "#4338ca", borderColor: "#4338ca" }}>
                    <i className="fa-solid fa-paper-plane"></i> Submit Booking to Admin Portal
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Master Admin Hub Notification Screen */}
            <div className="col-lg-6">
              <div className="prt-admin-hub h-100">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#06b6d4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>2</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>Master Admin Portal Real-Time View</h4>
                </div>

                {!portalAlert ? (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.6)" }}>
                    <i className="fa-solid fa-bell-slash" style={{ fontSize: "3.5rem", marginBottom: "16px", display: "block", color: "rgba(255,255,255,0.3)" }}></i>
                    <p style={{ margin: 0 }}>No pending booking alerts. Submit a guest booking from the left to test real-time Master Admin alerts!</p>
                  </div>
                ) : (
                  <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "18px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#06b6d4", textTransform: "uppercase", fontWeight: 700 }}>LIVE MASTER PUSH NOTIFICATION</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Ref: {portalAlert.id}</h5>
                      </div>
                      <span style={{ background: portalAlert.status === "Approved & Confirmed" ? "#10b981" : "#f59e0b", color: "#fff", padding: "5px 14px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>
                        {portalAlert.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                      <div><strong>Property:</strong> {portalAlert.property}</div>
                      <div><strong>Guest:</strong> {portalAlert.name}</div>
                      <div><strong>Phone:</strong> {portalAlert.phone}</div>
                      <div><strong>Room:</strong> {portalAlert.roomType}</div>
                    </div>

                    {portalAlert.status !== "Approved & Confirmed" ? (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setPortalAlert({ ...portalAlert, status: "Approved & Confirmed" })}
                          className="btn btn-success btn-sm fw-bold px-3 py-2"
                        >
                          <i className="fa-solid fa-check-circle me-1"></i> Approve Booking Real-Time
                        </button>
                        <button onClick={() => setPortalAlert(null)} className="btn btn-outline-light btn-sm px-3 py-2">
                          Dismiss
                        </button>
                      </div>
                    ) : (
                      <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: "12px", padding: "14px", textAlign: "center", fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-2"></i> Booking Approved by Master Admin! Live Grid Updated &amp; Voucher Issued to {portalAlert.phone}.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: "14px" }}>Deploy Your Real-Time Admin Approval Portal</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Unify your online guest bookings, push notifications, and admin room approvals into one seamless system.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#1e1b4b", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check"></i> Schedule Admin Portal Demo
              </button>
              <a href="tel:+917597451057" className="ct-btn ct-btn-ghost ct-btn-lg">
                <i className="fa-solid fa-phone"></i> Call Sales: +91 7597451057
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
