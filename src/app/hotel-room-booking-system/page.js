"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [guestBooking, setGuestBooking] = useState({ name: "", phone: "", roomType: "Premier Sea/City View Suite", checkIn: "", nights: 2 });
  const [bookingAlert, setBookingAlert] = useState(null);

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingAlert({ ...guestBooking, id: "RBE-" + Math.floor(1000 + Math.random() * 9000), status: "Real-Time Admin Alert Sent" });
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .rbe-hero { background: linear-gradient(135deg, #0e7490 0%, #291fbc 60%, #1e1b4b 100%); padding: 95px 0 75px; color: #fff; position: relative; overflow: hidden; }
        .rbe-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; }
        .rbe-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .rbe-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(6,182,212,0.15); border-color: #06b6d4; }
        .rbe-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(6,182,212,0.1); color: #0e7490; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 18px; }
        .rbe-admin-box { background: #082f49; color: #fff; border-radius: 24px; padding: 36px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      `}</style>

      {/* Hero */}
      <section className="rbe-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="rbe-badge">
                <i className="fa-solid fa-bed"></i> Booking Engine &amp; Channel Sync
              </span>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "18px" }}>
                Hotel Room Booking System &amp; Engine
              </h1>
              <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: "650px", marginBottom: "32px" }}>
                Drive 100% commission-free direct hotel room bookings from your website and social media. Every booking triggers an instant push alert to your Admin Panel for real-time room lock and instant manager approval.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#rbe-live-demo" className="ct-btn ct-btn-primary ct-btn-lg">
                  <i className="fa-solid fa-laptop"></i> Test Direct Booking Engine
                </a>
                <button className="ct-btn ct-btn-ghost" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-sliders"></i> Request Channel Manager Demo
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.5)" }}>
                <i className="fa-solid fa-bed"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(6,182,212,0.1)", color: "#0e7490", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Direct Booking Engine Power
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Turn Website Visitors into Direct Paying Hotel Guests
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-money-bill-trend-up", title: "0% Commission Direct Web Sales", desc: "Keep 100% of your room revenue by accepting direct reservations on your website instead of paying 18–25% OTA commissions." },
              { icon: "fa-bell", title: "Instant Push Alerts to Admin Panel", desc: "Whenever a guest confirms a room online, real-time push alerts notify front desk managers instantly on PC and mobile." },
              { icon: "fa-lock", title: "Real-Time Room Lock & Approval", desc: "Admins can view guest details, confirm advance deposit payments, and lock room inventory across all channels in 1-click." },
              { icon: "fa-arrows-rotate", title: "2-Way OTA Channel Manager Sync", desc: "Instantly update room rates and availability across Agoda, Booking.com, MakeMyTrip, and Expedia to eliminate double-booking." },
              { icon: "fa-tags", title: "Dynamic Seasonal Pricing Engine", desc: "Set automatic surge pricing for weekends, festivals, and high-demand dates with rule-based tariff automation." },
              { icon: "fa-comments", title: "Automated WhatsApp Confirmation", desc: "Sends instant booking voucher, Google Map direction link, and check-in instructions directly to guest WhatsApp." }
            ].map((f) => (
              <div key={f.title} className="col-md-4">
                <div className="rbe-card h-100">
                  <div className="rbe-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{f.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking & Admin Panel Flow */}
      <section id="rbe-live-demo" style={{ background: "#f8fafc", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(6,182,212,0.1)", color: "#0e7490", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Live System Demonstration
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Direct Room Booking &amp; Admin Real-Time Approval
            </h2>
          </div>

          <div className="row g-5 align-items-stretch">
            <div className="col-lg-6">
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0e7490", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>Direct Room Booking Form</h4>
                </div>
                <form onSubmit={handleBooking}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">GUEST FULL NAME</label>
                    <input type="text" className="form-control" placeholder="e.g. Siddharth Verma" required value={guestBooking.name} onChange={(e) => setGuestBooking({ ...guestBooking, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">PHONE NUMBER</label>
                    <input type="text" className="form-control" placeholder="+91 7597451057" required value={guestBooking.phone} onChange={(e) => setGuestBooking({ ...guestBooking, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">SELECT ROOM CATEGORY</label>
                    <select className="form-select" value={guestBooking.roomType} onChange={(e) => setGuestBooking({ ...guestBooking, roomType: e.target.value })}>
                      <option value="Premier Sea/City View Suite">Premier Sea/City View Suite</option>
                      <option value="Executive AC Room">Executive AC Room</option>
                      <option value="Deluxe Family Suite">Deluxe Family Suite</option>
                    </select>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-IN DATE</label>
                      <input type="date" className="form-control" required value={guestBooking.checkIn} onChange={(e) => setGuestBooking({ ...guestBooking, checkIn: e.target.value })} />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">STAY DURATION</label>
                      <select className="form-select" value={guestBooking.nights} onChange={(e) => setGuestBooking({ ...guestBooking, nights: e.target.value })}>
                        <option value="1">1 Night</option>
                        <option value="2">2 Nights</option>
                        <option value="3">3 Nights</option>
                        <option value="5">5+ Nights</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="ct-btn ct-btn-primary w-100 justify-content-center">
                    <i className="fa-solid fa-bolt"></i> Book Direct Room Online
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbe-admin-box h-100">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#06b6d4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>2</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>Admin Panel Real-Time Approval Screen</h4>
                </div>

                {!bookingAlert ? (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.6)" }}>
                    <i className="fa-solid fa-bell" style={{ fontSize: "3.5rem", marginBottom: "16px", display: "block", color: "rgba(255,255,255,0.3)" }}></i>
                    <p style={{ margin: 0 }}>No pending bookings. Submit a direct booking on the left to see instant Admin Panel alerts!</p>
                  </div>
                ) : (
                  <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "18px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#06b6d4", textTransform: "uppercase", fontWeight: 700 }}>DIRECT WEB BOOKING RECEIVED</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Engine ID: {bookingAlert.id}</h5>
                      </div>
                      <span style={{ background: bookingAlert.status === "Approved & Confirmed" ? "#10b981" : "#06b6d4", color: "#fff", padding: "5px 14px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>
                        {bookingAlert.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                      <div><strong>Guest:</strong> {bookingAlert.name}</div>
                      <div><strong>Phone:</strong> {bookingAlert.phone}</div>
                      <div><strong>Room:</strong> {bookingAlert.roomType}</div>
                      <div><strong>Nights:</strong> {bookingAlert.nights} Night(s)</div>
                    </div>

                    {bookingAlert.status !== "Approved & Confirmed" ? (
                      <button
                        onClick={() => setBookingAlert({ ...bookingAlert, status: "Approved & Confirmed" })}
                        className="btn btn-success btn-sm fw-bold px-3 py-2"
                      >
                        <i className="fa-solid fa-check-circle me-1"></i> Approve Room Booking Real-Time
                      </button>
                    ) : (
                      <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: "12px", padding: "14px", textAlign: "center", fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-2"></i> Room Approved! OTA Channels Synchronized &amp; WhatsApp Sent to {bookingAlert.phone}.
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
          <div style={{ background: "linear-gradient(135deg, #0e7490 0%, #291fbc 60%, #1e1b4b 100%)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: "14px" }}>Start Driving Direct Hotel Bookings Today</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Eliminate third-party OTA commissions with ChittorTech's direct booking engine &amp; real-time admin portal.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#291fbc", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check"></i> Schedule Booking Engine Demo
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
