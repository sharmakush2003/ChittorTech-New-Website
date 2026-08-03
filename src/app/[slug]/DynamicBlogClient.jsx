"use client";

import React, { useState } from "react";

export default function DynamicBlogClient({ slug, cleanTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    firm: "",
    contact: "",
    location: "",
    message: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "danger"
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.contact || !formData.location) {
      setStatusType("danger");
      setStatusMsg("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    const submissionPayload = { 
      ...formData,
      message: `[SEO LANDING PAGE: ${cleanTitle}] ` + (formData.message || "")
    };

    // 1. Instant feedback to user
    setStatusType("success");
    setStatusMsg("Thank you! We will contact you soon with a custom demo.");
    
    // 2. Clear form fields
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      firm: "",
      contact: "",
      location: "",
      message: "",
    });

    // 3. Send payload in background
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify(submissionPayload),
        }).catch((err) => {
          console.error("Background lead submission fetch failed:", err);
        });
      } catch (err) {
        console.error("Background lead submission error:", err);
      }
    }

    setSubmitting(false);
  };

  return (
    <div className="dy-page-wrap">
      <style>{`
        .dy-page-wrap {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          color: #1e293b;
          background: #ffffff;
          overflow-x: hidden;
        }
        .dy-page-wrap h1, 
        .dy-page-wrap h2, 
        .dy-page-wrap h3, 
        .dy-page-wrap h4 {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
        }

        /* Hero */
        .dy-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #1e293b 100%);
          padding: 100px 0 80px;
          position: relative;
          color: #ffffff !important;
          overflow: hidden;
        }
        .dy-hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
        }
        .dy-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #38bdf8 !important;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 24px;
        }
        .dy-hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #ffffff !important;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .dy-hero-desc {
          font-size: 1.08rem;
          color: #cbd5e1 !important;
          line-height: 1.7;
          max-width: 700px;
          margin-bottom: 0;
        }

        /* Section */
        .dy-section {
          padding: 80px 0;
        }
        .dy-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
          height: 100%;
        }

        /* Form Card */
        .dy-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
          position: sticky;
          top: 100px;
        }
        .dy-form-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .dy-form-subtitle {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 24px;
        }
        .dy-input-group {
          margin-bottom: 12px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        .dy-input-group:focus-within {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }
        .dy-input-icon {
          color: #3b82f6;
          padding-left: 14px;
          padding-right: 10px;
          font-size: 0.9rem;
        }
        .dy-form-card .form-control,
        .dy-form-card .form-select {
          border: none;
          padding: 11px 14px 11px 0;
          font-size: 0.86rem;
          font-weight: 500;
          background: transparent;
          color: #0f172a;
          box-shadow: none !important;
        }
        .dy-form-card .form-control::placeholder {
          color: #94a3b8;
        }
        .dy-btn {
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border: none;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .dy-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(37, 99, 235, 0.45);
        }

        /* Bullet List */
        .dy-bullets {
          list-style: none;
          padding: 0;
          margin: 24px 0;
        }
        .dy-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 0.96rem;
          line-height: 1.5;
        }
        .dy-bullet-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .dy-alert {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.84rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
      `}</style>

      {/* Hero */}
      <section className="dy-hero">
        <div className="container">
          <div className="dy-hero-badge">
            <i className="fas fa-sparkles"></i>
            <span>ChittorTech Solutions &amp; Guides</span>
          </div>
          <h1 className="dy-hero-title">{cleanTitle}</h1>
          <p className="dy-hero-desc">
            Explore secure, cloud-based workflow automation, GST-compliant billing, inventory management, and custom enterprise AI solutions tailored to boost business growth.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="dy-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f172a", marginBottom: "20px" }}>
                Enterprise Business Automation by ChittorTech
              </h2>
              <p style={{ fontSize: "1.02rem", color: "#475569", lineHeight: "1.8", marginBottom: "24px" }}>
                Whether you need scalable cloud-based ERP systems, multi-store retail billing, automated manufacturing planning, or bilingual AI chatbots for customer support — ChittorTech delivers custom technology integrations that eliminate operational delays and improve efficiency.
              </p>

              <div className="dy-card mb-4">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>
                  Key Capabilities included:
                </h3>
                <ul className="dy-bullets">
                  <li>
                    <div className="dy-bullet-icon"><i className="fas fa-check"></i></div>
                    <span><strong>BOM &amp; Production Management:</strong> Automate raw material tracking, production routing, and real-time inventory updates for factories.</span>
                  </li>
                  <li>
                    <div className="dy-bullet-icon"><i className="fas fa-check"></i></div>
                    <span><strong>GST-Compliant Counter Billing:</strong> Fast barcode checkout, instant receipt printing, tax calculations, and 80G trust certifications.</span>
                  </li>
                  <li>
                    <div className="dy-bullet-icon"><i className="fas fa-check"></i></div>
                    <span><strong>Multi-Location Sync:</strong> Centrally manage sales, stock, and staff across multiple branches or retail counters.</span>
                  </li>
                  <li>
                    <div className="dy-bullet-icon"><i className="fas fa-check"></i></div>
                    <span><strong>Bilingual AI support:</strong> AI-powered WhatsApp bots and online chatbots trained on your business database to handle inquiries.</span>
                  </li>
                </ul>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginTop: "40px", marginBottom: "16px" }}>
                Why Indian Enterprises Trust ChittorTech
              </h2>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: "1.75" }}>
                Inspired by the resilience and strength of Chittorgarh, we design software architectures that help business owners maintain complete visibility over their processes. With private cloud hosting, end-to-end security compliance, and dedicated technical maintenance, ChittorTech is your trusted development team.
              </p>
            </div>

            {/* Sticky Form */}
            <div className="col-lg-5">
              <div className="dy-form-card">
                <h3 className="dy-form-title">Request a Free Demo</h3>
                <p className="dy-form-subtitle">Receive a customized demonstration and expert trial consultation.</p>

                {statusMsg && (
                  <div className="dy-alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <span>{statusMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-user"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-envelope"></i></span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-phone"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="contact"
                      placeholder="Phone / WhatsApp*"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-map-marker-alt"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="Location (City/State)*"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="dy-input-group">
                    <span className="dy-input-icon"><i className="fas fa-industry"></i></span>
                    <select
                      className="form-select"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="">Select Industry</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail & Kirana">Retail &amp; Kirana</option>
                      <option value="Textile & Garment">Textile &amp; Garment</option>
                      <option value="Hospitality & Hotels">Hospitality &amp; Hotels</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>

                  <div className="dy-input-group" style={{ alignItems: "flex-start", padding: "6px" }}>
                    <span className="dy-input-icon" style={{ marginTop: "8px" }}><i className="fas fa-comment-dots"></i></span>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Specific Requirements (Optional)"
                      rows="2"
                      style={{ border: "none", resize: "none", width: "100%", outline: "none", fontSize: "0.86rem", fontWeight: "500", background: "transparent" }}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="dy-btn" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Inquiry & Request Demo"}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
