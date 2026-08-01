"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", trustName: "", roomType: "AC Deluxe Room", checkIn: "", checkOut: "", guests: 2 });
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmittedBooking({ ...bookingForm, id: "DS-" + Math.floor(1000 + Math.random() * 9000), status: "Pending Trustee Approval" });
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .ds-hero { background: linear-gradient(135deg, #1b2e4b 0%, #291fbc 50%, #06b6d4 100%); padding: 95px 0 75px; color: #fff; position: relative; overflow: hidden; }
        .ds-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; }
        .ds-feature-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(41,31,188,0.04); }
        .ds-feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(41,31,188,0.12); border-color: rgba(41,31,188,0.3); }
        .ds-icon-box { width: 56px; height: 56px; border-radius: 14px; background: rgba(41,31,188,0.08); color: #291fbc; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 18px; }
        .admin-demo-box { background: #0f172a; color: #fff; border-radius: 24px; padding: 36px; border: 1px solid rgba(255,255,255,0.12); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .status-badge-pending { background: #f59e0b; color: #fff; padding: 5px 14px; border-radius: 50px; font-size: 0.78rem; font-weight: 800; }
        .status-badge-approved { background: #10b981; color: #fff; padding: 5px 14px; border-radius: 50px; font-size: 0.78rem; font-weight: 800; }
      `}</style>

      {/* Unique Hero for Dharamshala Management System */}
      <section className="ds-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="ds-badge">
                <i className="fa-solid fa-gopuram"></i> Dharamshala &amp; Trust Automation
              </span>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "18px" }}>
                Dharamshala Management &amp; Donation Billing System
              </h1>
              <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: "650px", marginBottom: "32px" }}>
                Purpose-built software for Dharamshalas, Yatri Niwas, Trust Accommodations, and Ashrams across India. Manage online room bookings, pilgrim Aadhaar check-ins, trust donation receipts, 80G tax certificates, and real-time Trustee Admin notifications.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#dharamshala-live-booking" className="ct-btn ct-btn-primary ct-btn-lg">
                  <i className="fa-solid fa-calendar-plus"></i> Online Room Booking Demo
                </a>
                <button className="ct-btn ct-btn-ghost" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-file-invoice"></i> Request Trust Billing Demo
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.5)" }}>
                <i className="fa-solid fa-gopuram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dharamshala Specific Statistics */}
      <section style={{ background: "#f8fafc", padding: "40px 0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { val: "350+", lbl: "Dharamshalas & Ashrams Digitized" },
              { val: "100%", lbl: "Police Yatri Register Compliance" },
              { val: "80G", lbl: "Tax Exemption Donation Receipts" },
              { val: "24/7", lbl: "Online Pilgrim Room Booking" }
            ].map((stat) => (
              <div key={stat.lbl} className="col-6 col-md-3">
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#291fbc", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.val}</div>
                <div style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Dharamshala System Features */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(41,31,188,0.08)", color: "#291fbc", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Tailored Trust &amp; Yatri Features
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Designed Exclusively for Dharamshalas &amp; Religious Trusts
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-mobile-screen-button", title: "Online Devotee Room Booking", desc: "Allows yatris to book rooms online in advance. Sends real-time notifications to Dharamshala manager for instant approval." },
              { icon: "fa-id-card", title: "Pilgrim Aadhaar & ID Scan Register", desc: "Automated Aadhaar/Voter ID scanning with photo capture for instant Police Yatri Register reporting and security compliance." },
              { icon: "fa-hand-holding-heart", title: "Donation & 80G Tax Receipts", desc: "Issue separate receipts for room tariffs and charitable trust donations with 80G tax exemption numbers automatically generated." },
              { icon: "fa-layer-group", title: "Room & Hall Booking Management", desc: "Manage room categories (AC, Non-AC, Family Suites) alongside Marriage Halls, Satsang Mandaps, and Bhojanalayas." },
              { icon: "fa-bell", title: "Real-Time Trustee Admin Alerts", desc: "Trustees receive real-time mobile & desktop notifications whenever new room booking requests or high-value donations arrive." },
              { icon: "fa-chart-column", title: "Trust Audit & Accounting Ledger", desc: "Transparent accounting reports, cash counter balance tracking, daily collection reports, and annual trust audit compliance." }
            ].map((f) => (
              <div key={f.title} className="col-md-4">
                <div className="ds-feature-card h-100">
                  <div className="ds-icon-box"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{f.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Online Booking & Trustee Approval Flow */}
      <section id="dharamshala-live-booking" style={{ background: "#f8fafc", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(41,31,188,0.08)", color: "#291fbc", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Live Workflow Demonstration
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Online Devotee Booking &amp; Admin Real-Time Approval
            </h2>
            <p style={{ color: "#64748b", maxWidth: "620px", margin: "10px auto 0" }}>
              Test how yatris book rooms online and see how notifications immediately arrive in the Dharamshala Trustee Admin Panel.
            </p>
          </div>

          <div className="row g-5 align-items-stretch">
            {/* Devotee Online Booking Form */}
            <div className="col-lg-6">
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#291fbc", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>Online Devotee Room Booking Form</h4>
                </div>
                <form onSubmit={handleBookingSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">DEVOTEE / YATRI NAME</label>
                    <input type="text" className="form-control" placeholder="e.g. Shri Rajesh Kumar" required value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">MOBILE NUMBER</label>
                    <input type="text" className="form-control" placeholder="+91 7597451057" required value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} />
                  </div>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">ROOM TYPE</label>
                      <select className="form-select" value={bookingForm.roomType} onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}>
                        <option value="AC Deluxe Room">AC Deluxe Room</option>
                        <option value="Non-AC Standard Room">Non-AC Standard Room</option>
                        <option value="Family Hall (10 Bed)">Family Hall (10 Bed)</option>
                        <option value="Yatri Dormitory Bed">Yatri Dormitory Bed</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">GUESTS</label>
                      <input type="number" className="form-control" min="1" max="10" value={bookingForm.guests} onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })} />
                    </div>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-IN</label>
                      <input type="date" className="form-control" required value={bookingForm.checkIn} onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })} />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-OUT</label>
                      <input type="date" className="form-control" required value={bookingForm.checkOut} onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit" className="ct-btn ct-btn-primary w-100 justify-content-center">
                    <i className="fa-solid fa-paper-plane"></i> Submit Online Room Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Trustee Admin Real-Time Panel */}
            <div className="col-lg-6">
              <div className="admin-demo-box h-100">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#06b6d4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>2</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>Trustee Admin Panel Real-Time Screen</h4>
                </div>

                {!submittedBooking ? (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.6)" }}>
                    <i className="fa-solid fa-bell-slash" style={{ fontSize: "3.5rem", marginBottom: "16px", display: "block", color: "rgba(255,255,255,0.3)" }}></i>
                    <p style={{ margin: 0 }}>No booking requests pending. Fill the left form to trigger a real-time notification to the Trustee Admin Panel!</p>
                  </div>
                ) : (
                  <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "18px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#06b6d4", textTransform: "uppercase", fontWeight: 700 }}>REAL-TIME NOTIFICATION RECEIVED</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Token: {submittedBooking.id}</h5>
                      </div>
                      <span className={submittedBooking.status === "Approved & Confirmed" ? "status-badge-approved" : "status-badge-pending"}>
                        {submittedBooking.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                      <div><strong>Pilgrim Name:</strong> {submittedBooking.name}</div>
                      <div><strong>Mobile:</strong> {submittedBooking.phone}</div>
                      <div><strong>Room Type:</strong> {submittedBooking.roomType}</div>
                      <div><strong>Guests:</strong> {submittedBooking.guests} Person(s)</div>
                      <div><strong>Check-In:</strong> {submittedBooking.checkIn || "Today"}</div>
                      <div><strong>Check-Out:</strong> {submittedBooking.checkOut || "Tomorrow"}</div>
                    </div>

                    {submittedBooking.status !== "Approved & Confirmed" ? (
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => setSubmittedBooking({ ...submittedBooking, status: "Approved & Confirmed" })}
                          className="btn btn-success btn-sm fw-bold px-3 py-2"
                        >
                          <i className="fa-solid fa-check-circle me-1"></i> Approve &amp; Assign Room Real-Time
                        </button>
                        <button onClick={() => setSubmittedBooking(null)} className="btn btn-outline-light btn-sm px-3 py-2">
                          Dismiss
                        </button>
                      </div>
                    ) : (
                      <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: "12px", padding: "14px", textAlign: "center", fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-2"></i> Room Approved by Trustee! Confirmation Slip Sent via WhatsApp to {submittedBooking.phone}.
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
          <div style={{ background: "linear-gradient(135deg, #1b2e4b 0%, #291fbc 60%, #06b6d4 100%)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: "14px" }}>Digitize Your Dharamshala &amp; Trust Management</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Get a custom Dharamshala software solution with online room booking, donation receipts, and real-time admin notification approval.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#291fbc", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check"></i> Book Free Trust Demo
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
