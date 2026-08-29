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
                <i className={`fa-solid fa-pills`}></i> Pharma AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Pharma Distribution AI & IT Solutions & AI Assistant Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Batch tracking, expiry alerts, GST billing, and supplier management for pharma.
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
                <i className={`fa-solid fa-pills`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
        
{/* header */}
<section className="seo-services-sec manufacturers-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="seo-services">
               <div className="heading-wrap text-start">
                  <h2>Best AI & IT Solutions for Pharma Manufacturers <span>Industry in India</span></h2>
                  <p>The pharmaceutical sector is one of the most dynamic and highly regulated industries in India, especially in India. Pharma manufacturers here must comply with strict guidelines while managing complex processes such as <b>R&D, production, distribution, and quality control</b>.</p>
                  <p><b>ChittorTech</b> offers the best AI & IT Solutions for pharma manufacturers in India, helping businesses <b>optimize efficiency, ensure compliance, and scale operations seamlessly</b>.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img281.jpg" alt="Pharma Manufacture" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img282.jpg" alt="Pharma AI Manufacturing Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Pharma Manufacturers in India</span> Need AI & IT Solutions</h2>
               <p>Pharma manufacturing is different from other industries. It requires:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>✔ Strict regulatory compliance (FDA, WHO, GMP standards)</li>
                  <li>✔ Batch tracking & traceability</li>
                  <li>✔ Quality assurance at every stage</li>
                  <li>✔ Supply chain & inventory management</li>
                  <li>✔ Research & Development management</li>
                  <li>✔ Integration with sales, distribution, and finance</li>
               </ul>
               <p>Our AI & IT Solutions is specially designed to meet these challenges and streamline every aspect of pharmaceutical manufacturing.</p>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>ChittorTech for Pharma Manufacturers</span></h2>
      </div>
      <div className="row justify-content-center gy-4">
         {/* 1. Regulatory Compliance */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Regulatory Compliance</h3>
               <ul>
                  <li>✔ Ensure compliance with GMP, FDA, WHO guidelines</li>
                  <li>✔ Automated audit trails for complete transparency</li>
               </ul>
            </div>
         </div>
         {/* 2. Batch & Formula Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Batch &amp; Formula Management</h3>
               <ul>
                  <li>✔ Create, manage, and track formulas</li>
                  <li>✔ Complete batch-wise tracking from raw material to final product</li>
               </ul>
            </div>
         </div>
         {/* 3. Quality Control (QC) & Assurance (QA) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Quality Control (QC) &amp; Assurance (QA)</h3>
               <ul>
                  <li>✔ Integrated QC modules</li>
                  <li>✔ Automated quality checks at every stage</li>
               </ul>
            </div>
         </div>
         {/* 4. Production Planning & Scheduling */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Production Planning &amp; Scheduling</h3>
               <ul>
                  <li>✔ Efficient production cycle planning</li>
                  <li>✔ Reduce wastage and improve productivity</li>
               </ul>
            </div>
         </div>
         {/* 5. Inventory & Supply Chain Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Inventory &amp; Supply Chain Management</h3>
               <ul>
                  <li>✔ Real-time inventory tracking</li>
                  <li>✔ Vendor management and automated procurement</li>
               </ul>
            </div>
         </div>
         {/* 6. R&D Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>R&amp;D Management</h3>
               <ul>
                  <li>✔ Track drug development cycles</li>
                  <li>✔ Manage trials, formulations, and test results</li>
               </ul>
            </div>
         </div>
         {/* 7. Sales, Distribution & AI Knowledge Base */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Sales, Distribution &amp; AI Knowledge Base</h3>
               <ul>
                  <li>✔ Integrated sales order management</li>
                  <li>✔ Distributor and retailer management</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="choose-chittortech-sec core-features-sec textile-manufacturers-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap">
               <h2>Benefits of <span>AI & IT Solutions for Pharma Manufacturers in India</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Compliance Ready" /></figure>
                  <h3>100% Compliance Ready</h3>
                  <p> Stay audit-ready always with GMP, FDA, and WHO standards.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Production Efficiency" /></figure>
                  <h3>Improved Production Efficiency</h3>
                  <p> Optimize batch production cycles and streamline workflows.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Quality Standards" /></figure>
                  <h3>Enhanced Quality Standards</h3>
                  <p> No compromise on QC/QA at any stage of manufacturing.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Data Security" /></figure>
                  <h3>Data Security & Accuracy</h3>
                  <p> Secure cloud-based AI & IT Solutions system with precise data management.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p> Grow seamlessly across multiple plants and production lines.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Cost Control" /></figure>
                  <h3>Cost Control</h3>
                  <p> Reduce wastage and improve ROI across operations.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h4>Why Choose <span>ChittorTech for Pharma Manufacturing?</span></h4>
               <ul>
                  <li><strong>Industry-Specific Expertise –</strong> Designed specifically for pharma manufacturers.</li>
                  <li><strong>Trusted in India –</strong> Strong client base across pharmaceutical companies.</li>
                  <li><strong>Customizable AI & IT Solutions Modules –</strong> Tailored to meet unique pharma industry requirements.</li>
                  <li><strong>24/7 Support –</strong> Dedicated local support team for seamless operations.</li>
                  <li><strong>Scalable Solutions –</strong> Suitable for startups to large pharma companies.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img283.jpg" alt="Pharma AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
