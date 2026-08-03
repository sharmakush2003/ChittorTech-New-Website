"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  const [resortBooking, setResortBooking] = useState({ name: "", phone: "", cottageType: "Private Pool Villa", checkIn: "", duration: "2 Nights" });
  const [resortAlert, setResortAlert] = useState(null);

  const handleResortBooking = (e) => {
    e.preventDefault();
    setResortAlert({ ...resortBooking, id: "RST-" + Math.floor(1000 + Math.random() * 9000), status: "Pending Manager Approval" });
  };

  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .rst-hero { background: linear-gradient(135deg, #065f46 0%, #0d9488 50%, #1e1b4b 100%); padding: 95px 0 75px; color: #fff; position: relative; overflow: hidden; }
        .rst-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; }
        .rst-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .rst-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(13,148,136,0.15); border-color: #0d9488; }
        .rst-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(13,148,136,0.1); color: #0d9488; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 18px; }
        .rst-admin-box { background: #064e3b; color: #fff; border-radius: 24px; padding: 36px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
      `}</style>

      {/* Unique Resort Hero */}
      <section className="rst-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="rst-badge">
                <i className="fa-solid fa-tree-city"></i> Resort &amp; Guest House Tech
              </span>
              <h1 style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.3rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "18px" }}>
                Resort &amp; Guest House Management Software
              </h1>
              <p style={{ fontSize: "1.08rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: "650px", marginBottom: "32px" }}>
                Tailored software for eco-resorts, luxury villas, wellness retreats, and company guest houses. Manage cottage availability, outdoor activity packages, restaurant/bar Management, and real-time Admin Panel booking approvals.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#resort-live-demo" className="ct-btn ct-btn-primary ct-btn-lg" style={{ background: "#0d9488", borderColor: "#0d9488" }}>
                  <i className="fa-solid fa-calendar-check"></i> Try Villa Booking Engine
                </a>
                <button className="ct-btn ct-btn-ghost" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-spa"></i> Request Resort Demo
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6rem", color: "rgba(255,255,255,0.5)" }}>
                <i className="fa-solid fa-tree-city"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Features */}
      <section style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(13,148,136,0.1)", color: "#0d9488", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Luxury Hospitality Suite
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              End-to-End Resort, Cottage &amp; Retreat Automation
            </h2>
          </div>
          <div className="row g-4">
            {[
              { icon: "fa-house-chimney-window", title: "Cottage & Villa Inventory Engine", desc: "Manage multi-property layouts, private pool villas, tents, and cottages with real-time room availability grids." },
              { icon: "fa-bell", title: "Instant Admin Real-Time Notifications", desc: "Every online cottage reservation sends instant alerts to resort managers for real-time room lock and guest approval." },
              { icon: "fa-person-hiking", title: "Activity & Spa Booking Management", desc: "Schedule safari tours, spa packages, bonfire nights, and adventure activities linked directly to the guest invoice." },
              { icon: "fa-utensils", title: "Poolside Bar & Dining Management", desc: "Integrated food & beverage billing with wireless tablet ordering for poolside bars, beach cafes, and room service." },
              { icon: "fa-people-group", title: "Group Event & Wedding Packages", desc: "Manage group check-ins, banquet halls, corporate retreats, and destination wedding billing seamlessly." },
              { icon: "fa-file-certificate", title: "GST & Foreign Guest C-Form Reports", desc: "Automated police C-Form generation for foreign tourists, tax invoices, and multi-currency billing support." }
            ].map((f) => (
              <div key={f.title} className="col-md-4">
                <div className="rst-card h-100">
                  <div className="rst-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e1b4b", marginBottom: "10px" }}>{f.title}</h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Resort Booking & Admin Demo */}
      <section id="resort-live-demo" style={{ background: "#f8fafc", padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ background: "rgba(13,148,136,0.1)", color: "#0d9488", fontSize: "0.8rem", fontWeight: 700, padding: "6px 16px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Interactive System Demo
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#1e1b4b", marginTop: "12px" }}>
              Resort Online Booking &amp; Admin Real-Time Approval
            </h2>
          </div>

          <div className="row g-5 align-items-stretch">
            <div className="col-lg-6">
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0d9488", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>1</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e1b4b", margin: 0 }}>Resort Online Villa Booking Form</h4>
                </div>
                <form onSubmit={handleResortBooking}>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">GUEST FULL NAME</label>
                    <input type="text" className="form-control" placeholder="e.g. Maharana Pratap" required value={resortBooking.name} onChange={(e) => setResortBooking({ ...resortBooking, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">MOBILE NUMBER</label>
                    <input type="text" className="form-control" placeholder="+91 7597451057" required value={resortBooking.phone} onChange={(e) => setResortBooking({ ...resortBooking, phone: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-muted">COTTAGE / VILLA TYPE</label>
                    <select className="form-select" value={resortBooking.cottageType} onChange={(e) => setResortBooking({ ...resortBooking, cottageType: e.target.value })}>
                      <option value="Private Pool Villa">Private Pool Villa</option>
                      <option value="Luxury Safari Tent">Luxury Safari Tent</option>
                      <option value="Lake View Cottage">Lake View Cottage</option>
                      <option value="Executive Suite">Executive Suite</option>
                    </select>
                  </div>
                  <div className="row g-2 mb-4">
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">CHECK-IN</label>
                      <input type="date" className="form-control" required value={resortBooking.checkIn} onChange={(e) => setResortBooking({ ...resortBooking, checkIn: e.target.value })} />
                    </div>
                    <div className="col-6">
                      <label className="form-label small fw-bold text-muted">PACKAGE DURATION</label>
                      <select className="form-select" value={resortBooking.duration} onChange={(e) => setResortBooking({ ...resortBooking, duration: e.target.value })}>
                        <option value="2 Nights">2 Nights Weekend Package</option>
                        <option value="3 Nights">3 Nights Leisure Package</option>
                        <option value="5 Nights">5 Nights Luxury Stay</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="ct-btn ct-btn-primary w-100 justify-content-center" style={{ background: "#0d9488", borderColor: "#0d9488" }}>
                    <i className="fa-solid fa-paper-plane"></i> Book Resort Villa Online
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rst-admin-box h-100">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0d9488", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>2</div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", margin: 0 }}>Resort Admin Live Panel Screen</h4>
                </div>

                {!resortAlert ? (
                  <div style={{ textAlign: "center", padding: "60px 20px", color: "rgba(255,255,255,0.6)" }}>
                    <i className="fa-solid fa-bell-slash" style={{ fontSize: "3.5rem", marginBottom: "16px", display: "block", color: "rgba(255,255,255,0.3)" }}></i>
                    <p style={{ margin: 0 }}>No new villa bookings pending. Fill out the form to trigger a real-time notification to the Resort Admin Panel!</p>
                  </div>
                ) : (
                  <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "18px", padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#0d9488", textTransform: "uppercase", fontWeight: 700 }}>NEW VILLA RESERVATION</span>
                        <h5 style={{ color: "#fff", margin: "4px 0 0", fontWeight: 800 }}>Booking Token: {resortAlert.id}</h5>
                      </div>
                      <span style={{ background: resortAlert.status === "Approved & Villa Reserved" ? "#10b981" : "#f59e0b", color: "#fff", padding: "5px 14px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 800 }}>
                        {resortAlert.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                      <div><strong>Guest:</strong> {resortAlert.name}</div>
                      <div><strong>Phone:</strong> {resortAlert.phone}</div>
                      <div><strong>Villa:</strong> {resortAlert.cottageType}</div>
                      <div><strong>Package:</strong> {resortAlert.duration}</div>
                    </div>

                    {resortAlert.status !== "Approved & Villa Reserved" ? (
                      <button
                        onClick={() => setResortAlert({ ...resortAlert, status: "Approved & Villa Reserved" })}
                        className="btn btn-success btn-sm fw-bold px-3 py-2"
                      >
                        <i className="fa-solid fa-check-circle me-1"></i> Approve Villa Real-Time
                      </button>
                    ) : (
                      <div style={{ background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: "12px", padding: "14px", textAlign: "center", fontWeight: 700 }}>
                        <i className="fa-solid fa-circle-check me-2"></i> Villa Reserved by Resort Manager! Guest Confirmation Sent to {resortAlert.phone}.
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
          <div style={{ background: "linear-gradient(135deg, #065f46 0%, #0d9488 60%, #1e1b4b 100%)", borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: "14px" }}>Upgrade Your Resort &amp; Guest House Software</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Automate villa bookings, guest experiences, and real-time manager approvals with ChittorTech Resort Software.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="ct-btn ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#fff", color: "#065f46", fontWeight: 800 }}>
                <i className="fa-solid fa-calendar-check"></i> Book Free Resort Demo
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
