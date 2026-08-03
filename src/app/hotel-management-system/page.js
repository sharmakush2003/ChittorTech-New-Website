"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [hotelBooking, setHotelBooking] = useState({ guestName: "", phone: "", roomType: "Executive Deluxe Suite", checkIn: "", checkOut: "" });
  const [adminAlert, setAdminAlert] = useState(null);

  const handleHotelBooking = (e) => {
    e.preventDefault();
    setAdminAlert({ ...hotelBooking, id: "HTL-" + Math.floor(10000 + Math.random() * 90000), status: "Pending Manager Approval" });
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .htl-hero-sec { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #291fbc 100%); padding: 95px 0 75px; color: #fff; position: relative; overflow: hidden; }
        .htl-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; }
        .htl-feature-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .htl-feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(41,31,188,0.14); border-color: rgba(41,31,188,0.3); }
        .htl-icon-circle { width: 56px; height: 56px; border-radius: 14px; background: rgba(41,31,188,0.08); color: #291fbc; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 18px; }
        .admin-alert-box { background: #1e1b4b; color: #fff; border-radius: 24px; padding: 36px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
      `}</style>

      {/* Unique Enterprise Hotel Hero */}
      <section className="htl-hero-sec">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="htl-pill">
                <i className="fa-solid fa-hotel"></i> Enterprise Hotel PMS &amp; Software
              </span>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "18px" }}>
                Next-Gen Hotel Management System
              </h1>
              <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: "650px", marginBottom: "32px" }}>
                All-in-one Cloud Property Management System (PMS) for luxury hotels, boutique stays, and hotel chains. Features direct website booking engines, real-time Manager Admin push notifications, restaurant Management (KOT), housekeeping grids, and channel manager sync.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#hotel-live-approval-demo" className="ct-btn ct-btn-primary ct-btn-lg">
                  <i className="fa-solid fa-calendar-check"></i> Try Live Booking Engine
                </a>
                <button className="ct-btn ct-btn-ghost" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-desktop"></i> Request Full Hotel Software Demo
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.5)" }}>
                <i className="fa-solid fa-hotel"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Metrics Bar */}
      <section style={{ background: "#f8fafc", padding: "40px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { val: "500+", label: "Hotels & Stays Automated" },
              { val: "0%", label: "Commission Direct Web Bookings" },
              { val: "100%", label: "Real-Time OTA & Channel Sync" },
              { val: "30%", label: "Average RevPAR Increase" }
            ].map((stat) => (
              <div key={stat.label} className="col-6 col-md-3">
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#291fbc", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.val}</div>
                <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Features Grid */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(41,31,188,0.08)", color: "#291fbc", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Enterprise Hotel Software Capabilities
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Complete Front Desk, Restaurant &amp; Night Audit Suite
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-globe", title: "Direct Commission-Free Booking Engine", desc: "Guests book directly on your hotel website with live room rate selection, instant booking confirmation, and payment gateway integration." },
              { icon: "fa-bell", title: "Instant Manager Admin Push Alerts", desc: "Real-time alerts sent to the Manager Admin Panel on desktop and mobile as soon as a guest submits an online booking request." },
              { icon: "fa-circle-check", title: "Real-Time Admin Room Approval", desc: "Hotel managers can review guest details, check-in dates, special requests, and approve or reassign rooms instantly in real-time." },
              { icon: "fa-utensils", title: "Restaurant Billing & KOT Integration", desc: "Integrated Kitchen Order Tickets (KOT) and room service Management that post food bills directly to guest room folios upon checkout." },
              { icon: "fa-broom", title: "Housekeeping & Room Status Grid", desc: "Live color-coded room status tracking (Clean, Out of Order, Dirty, Occupied) updated instantly across staff mobile devices." },
              { icon: "fa-chart-pie", title: "Night Audit & RevPAR Reports", desc: "Automated daily night audit, GSTR-1 tax filings, occupancy percentage heatmaps, and financial revenue management analytics." }
            ].map((f) => (
              <div key={f.title} className="col-md-4">
                <div className="htl-feature-card h-100">
                  <div className="htl-icon-circle"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{f.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Hotel Booking & Manager Approval Demo */}
      <section id="hotel-live-approval-demo" style={{ background: "#f8fafc", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(41,31,188,0.08)", color: "#291fbc", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Live Workflow Demonstration
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Online Hotel Booking &amp; Manager Real-Time Approval
            </h2>
            <p style={{ color: "#64748b", maxWidth: "620px", margin: "10px auto 0" }}>
              Test how guests book rooms online and see how notifications instantly pop up on the Hotel Manager Admin Panel.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Guest Booking Form */}
            <div className="col-lg-6">
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#291fbc", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>Guest Online Room Booking Engine</h4>
                </div>
                <form onSubmit={handleHotelBooking}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">GUEST FULL NAME</label>
                    <input type="text" className="form-control" placeholder="e.g. Vikramaditya Singh" required value={hotelBooking.guestName} onChange={(e) => setHotelBooking({ ...hotelBooking, guestName: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">MOBILE NUMBER</label>
                    <input type="text" className="form-control" placeholder="+91 7597451057" required value={hotelBooking.phone} onChange={(e) => setHotelBooking({ ...hotelBooking, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">SUITE / ROOM TYPE</label>
                    <select className="form-select" value={hotelBooking.roomType} onChange={(e) => setHotelBooking({ ...hotelBooking, roomType: e.target.value })}>
                      <option value="Executive Deluxe Suite">Executive Deluxe Suite</option>
                      <option value="Presidential Suite">Presidential Suite</option>
                      <option value="Royal Heritage Room">Royal Heritage Room</option>
                      <option value="Standard Twin Bed Room">Standard Twin Bed Room</option>
                    </select>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-IN DATE</label>
                      <input type="date" className="form-control" required value={hotelBooking.checkIn} onChange={(e) => setHotelBooking({ ...hotelBooking, checkIn: e.target.value })} />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-OUT DATE</label>
                      <input type="date" className="form-control" required value={hotelBooking.checkOut} onChange={(e) => setHotelBooking({ ...hotelBooking, checkOut: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit" className="ct-btn ct-btn-primary w-100 justify-content-center">
                    <i className="fa-solid fa-paper-plane"></i> Submit Hotel Room Reservation
                  </button>
                </form>
              </div>
            </div>

            {/* Manager Admin Real-Time Panel */}
            <div className="col-lg-6">
              <div className="admin-alert-box h-100">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#06b6d4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>2</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>Hotel Manager Admin Panel Live Screen</h4>
                </div>

                {!adminAlert ? (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.6)" }}>
                    <i className="fa-solid fa-bell" style={{ fontSize: "3.5rem", marginBottom: "16px", display: "block", color: "rgba(255,255,255,0.3)" }}></i>
                    <p style={{ margin: 0 }}>No pending reservations. Submit a booking from the left form to see a real-time notification alert here!</p>
                  </div>
                ) : (
                  <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "18px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#06b6d4", textTransform: "uppercase", fontWeight: 700 }}>NEW ONLINE RESERVATION RECEIVED</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Booking ID: {adminAlert.id}</h5>
                      </div>
                      <span style={{ background: adminAlert.status === "Approved & Room Assigned" ? "#10b981" : "#f59e0b", color: "#fff", padding: "5px 14px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>
                        {adminAlert.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                      <div><strong>Guest:</strong> {adminAlert.guestName}</div>
                      <div><strong>Phone:</strong> {adminAlert.phone}</div>
                      <div><strong>Suite Type:</strong> {adminAlert.roomType}</div>
                      <div><strong>Check-In:</strong> {adminAlert.checkIn || "Today"}</div>
                      <div><strong>Check-Out:</strong> {adminAlert.checkOut || "Tomorrow"}</div>
                    </div>

                    {adminAlert.status !== "Approved & Room Assigned" ? (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setAdminAlert({ ...adminAlert, status: "Approved & Room Assigned" })}
                          className="btn btn-success btn-sm fw-bold px-3 py-2"
                        >
                          <i className="fa-solid fa-check-double me-1"></i> Approve Booking Real-Time
                        </button>
                        <button onClick={() => setAdminAlert(null)} className="btn btn-outline-light btn-sm px-3 py-2">
                          Dismiss
                        </button>
                      </div>
                    ) : (
                      <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: "12px", padding: "14px", textAlign: "center", fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-2"></i> Room Approved by Manager! Confirmation &amp; Door Pass Sent to {adminAlert.phone}.
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
          <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #291fbc 100%)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: "14px" }}>Transform Your Hotel Operations &amp; Direct Bookings</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Automate your hotel front desk, restaurant Management, and real-time manager approval notifications with ChittorTech Hotel Management Software.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#291fbc", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check"></i> Book Free Hotel Demo
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
