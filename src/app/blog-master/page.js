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
                <i className={`fa-solid fa-newspaper`}></i> Blog Hub
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                ChittorTech Blog Hub
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                All articles, guides, and resources in one place.
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
                <i className={`fa-solid fa-newspaper`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      

<style>{`
.blog-detail-wrapper {
  max-width: 950px;
  margin: 60px auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  padding: 40px;
  border: 1px solid #eee;
}

.blog-detail-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 30px;
}

.blog-detail-title {
  font-size: 34px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.3;
}

.blog-detail-main {
  font-size: 17px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 40px;
}

.blog-subsection {
  margin-bottom: 40px;
}

.blog-subsection h3 {
  font-size: 24px;
  color: #0ca678;
  font-weight: 700;
  margin-bottom: 14px;
}

.blog-subsection p {
  font-size: 16px;
  color: #444;
  line-height: 1.7;
}

.blog-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.blog-back-btn:hover {
  background: #ddd;
}

@media (max-width: 768px) {
  .blog-detail-wrapper {
    padding: 25px;
  }
  .blog-detail-title {
    font-size: 26px;
  }
  .blog-subsection h3 {
    font-size: 20px;
  }
}
`}</style>

<div className="blog-detail-wrapper">
  

         {/* Blog Main Image (on top) */}
      
        <div style={{ "marginBottom": "20px" }}>
          <img src="/website_login/admin/uploads_img/" alt="ChittorTech Blog Master - uploads img" style={{ "width": "80%", "height": "auto", "borderRadius": "8px" }} />
        </div>
      
    <h1 className="blog-detail-title"></h1>

    <div className="blog-detail-main">
      
    </div>

    
      
        <div className="blog-subsection">
          
            <h3></h3>
          
          
            <p></p>
          
        </div>
      
    

    <div style={{ "textAlign": "center", "marginTop": "40px" }}>
      <a href="/blog" className="blog-back-btn">
        <i className="fas fa-arrow-left"></i> Back to Blogs
      </a>
    </div>

  
    <p style={{ "textAlign": "center", "padding": "100px" }}>Blog not found.</p>
  
</div>
    </>
  );
}
