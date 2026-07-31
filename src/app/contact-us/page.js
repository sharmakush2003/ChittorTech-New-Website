"use client";
import React from "react";
import "../../../public/assets/css/premium-products.css";


export default function Page() {
  return (
    <>

      <style>{`
        /* ChittorTech Design System — Inner Page Overrides */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        
        /* Section spacing */
        section { position: relative; }
        
        /* Upgrade existing button styles */
        .schedule-btn, .btn-hero-primary, a.schedule-btn {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 12px 28px !important;
          background: linear-gradient(135deg, #291fbc, #3b82f6) !important;
          color: #fff !important;
          border-radius: 10px !important;
          font-weight: 700 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 0.95rem !important;
          border: none !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3) !important;
        }
        .schedule-btn:hover, a.schedule-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(41,31,188,0.4) !important;
          color: #fff !important;
        }

        /* Upgrade section titles */
        .section-title, .main-title, .sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 800 !important;
          color: #1e1b4b !important;
        }

        /* Upgrade cards */
        .feature-card, .item-wrap, .why-item, .benfit-item {
          transition: all 0.3s ease !important;
          border-radius: 16px !important;
        }
        .feature-card:hover, .item-wrap:hover, .why-item:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 50px rgba(41,31,188,0.1) !important;
        }

        /* Upgrade CTA sections */
        .cta-sec, .cta-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%) !important;
        }
        
        /* Breadcrumb modernization */
        .breadcrumb-item.active { color: #06b6d4 !important; }
        
        /* FAQ accordion */
        .accordion-button:not(.collapsed) {
          color: #291fbc !important;
          background-color: rgba(41,31,188,0.05) !important;
          box-shadow: none !important;
        }
        .accordion-button:focus { box-shadow: 0 0 0 3px rgba(41,31,188,0.2) !important; }
        
        /* Tab modernization */
        .nav-tabs .nav-link.active {
          color: #291fbc !important;
          border-bottom-color: #291fbc !important;
        }
      `}</style>

      {/* ── Modern Inner Page Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-envelope`}></i> Contact Us
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Get in Touch with ChittorTech
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Have questions? Book a free demo or reach out — our team responds within 2 hours.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Book Free Demo
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className={`fa-solid fa-envelope`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      



<section className="contact-section-new" style={{ "paddingTop": "60px", "paddingBottom": "80px", "background": "#f8f9fa" }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">

        {/* Contact Form */}
        <div className="contact-form-premium animate__animated animate__fadeInUp mb-5" style={{ "boxShadow": "0 15px 35px rgba(0,0,0,0.05)", "background": "#fff", "padding": "40px", "borderRadius": "20px" }}>
          <div className="form-header mb-4 text-center">
            <h3 className="fw-bold text-dark mb-1">Send a Message</h3>
            <p className="text-muted small">Required fields are marked with *</p>
          </div>
          
          <form action="" method="post" className="row g-3">
            <div className="col-md-6">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">FULL NAME*</label>
                <div className="input-with-icon">
                  <i className="fas fa-user"></i>
                  <input type="text" name="name" className="form-control" placeholder="John Doe" required />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">MOBILE NUMBER*</label>
                <div className="input-with-icon">
                  <i className="fas fa-phone"></i>
                  <input type="text" name="mobile" className="form-control" placeholder="+91 0000000000" required />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">EMAIL ADDRESS*</label>
                <div className="input-with-icon">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" className="form-control" placeholder="example@email.com" required />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">INDUSTRY TYPE*</label>
                <div className="input-with-icon">
                  <i className="fas fa-industry"></i>
                  <select name="industry" className="form-select" required>
                    <option value="">Select Industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Trading">Trading</option>
                    <option value="Retail">Retail</option>
                    <option value="Services">Services</option>
                    <option value="Any other">Any other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">CITY / LOCATION*</label>
                <div className="input-group" style={{ "borderRadius": "10px", "overflow": "hidden", "border": "1px solid #e2e8f0", "background": "#f8fafc" }}>
                  <span className="input-group-text" style={{ "background": "transparent", "border": "none", "paddingLeft": "15px", "paddingRight": "15px", "color": "#94a3b8" }}><i className="fas fa-map-marker-alt"></i></span>
                  <input type="text" id="contactLocation" name="location" className="form-control" placeholder="Enter City" required style={{ "border": "none", "background": "transparent", "height": "50px", "fontSize": "0.95rem", "color": "#334155", "boxShadow": "none" }} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="premium-input-group">
                <label className="form-label fw-bold small text-muted">MESSAGE / REQUIREMENTS</label>
                <textarea name="remark" className="form-control" placeholder="Tell us more about your needs..." style={{ "height": "120px", "paddingLeft": "15px" }}></textarea>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button type="submit" className="premium-submit-btn" style={{ "padding": "12px 30px", "fontWeight": "bold" }}>
                Send Message <i className="fas fa-paper-plane ms-2"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-wrap mt-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="info-card flex-column text-center h-100 animate__animated animate__fadeInUp" style={{ "borderTop": "5px solid #0d6efd", "paddingTop": "30px" }}>
                <div className="info-icon mx-auto mb-3"><i className="fas fa-envelope"></i></div>
                <div className="info-content">
                  <h5>Email Support</h5>
                  <a href="mailto:sales.chittortech@chittortechcrm.in" className="fw-bold text-dark">sales.chittortech@chittortechcrm.in</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card flex-column text-center h-100 animate__animated animate__fadeInUp animate__delay-1s" style={{ "borderTop": "5px solid #f6a623", "paddingTop": "30px" }}>
                <div className="info-icon mx-auto mb-3" style={{ "background": "#f6a623" }}><i className="fas fa-phone-alt"></i></div>
                <div className="info-content">
                  <h5>Phone Number</h5>
                  <a href="tel:+917425016636" className="fw-bold text-dark">+91 7425016636</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card flex-column text-center h-100 animate__animated animate__fadeInUp animate__delay-2s" style={{ "borderTop": "5px solid #28a745", "paddingTop": "30px" }}>
                <div className="info-icon mx-auto mb-3" style={{ "background": "#28a745" }}><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-content">
                  <h5>Our Presence</h5>
                  <p className="mb-2 text-dark"><i className="fas fa-building me-2 text-muted"></i><strong>Noida Office:</strong><br />Knowledge Park V, Sector 12</p>
                  <p className="mb-0 text-dark"><i className="fas fa-building me-2 text-muted"></i><strong>Jaipur Office:</strong><br />Akash Ganga, Civil Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* Google Map */}
<section className="map-section-new">
  <div className="container-fluid p-0">
    <div className="map-container" style={{ "filter": "contrast(1.1)", "borderTop": "1px solid #ddd" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.406080940807!2d77.49122037533094!3d28.471275991249226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea3b2b2e79e5%3A0x6cf42936c9e132c!2sKnowledge%20Park%20V%2C%20Sector%2012%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1739851234567!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ "border": "0" }}
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
</section>

<style>{`
  .info-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .info-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  .info-icon {
    width: 55px;
    height: 55px;
    background: #0d6efd;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }
  .info-content h5 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 3px;
  }
  .info-content a, .info-content p {
    color: #5d6d7e;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .contact-form-premium {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
    border: 1px solid #edf2f7;
  }

  .premium-input-group {
    margin-bottom: 5px;
  }
  .input-with-icon {
    position: relative;
  }
  .input-with-icon > i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 14px;
  }
  .input-with-icon .form-control, .input-with-icon .form-select {
    padding-left: 45px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 0.95rem;
    color: #334155;
  }
  .input-with-icon .form-control:focus {
    background: white;
    border-color: #0d6efd;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
  }
  .form-label {
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  
  .premium-submit-btn {
    background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);
    color: white;
    border: none;
    padding: 16px 60px;
    border-radius: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s;
    box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
  }
  .premium-submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(13, 110, 253, 0.3);
    color: white;
  }

  /* Inline button styles are natively styled by Bootstrap 5 */

  @media (max-width: 991px) {
    .premium-contact-hero {
      padding: 100px 0 80px;
    }
    .contact-form-premium {
      padding: 30px 20px;
    }
  }
`}</style>
    </>
  );
}
