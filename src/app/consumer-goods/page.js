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
                <i className={`fa-solid fa-boxes-stacked`}></i> FMCG AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Consumer Goods AI & IT Solutions & Distribution Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage FMCG distribution, secondary sales, and retailer management.
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
                <i className={`fa-solid fa-boxes-stacked`}></i>
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
                  <h1>Best AI & IT Solutions for Consumer Goods Manufacturers <span>Industry in India</span></h1>
                  <p>The Consumer Goods industry is one of the fastest-growing sectors in India, especially in regions like India, where manufacturing and distribution hubs play a crucial role in meeting market demand. Managing this industry involves complex operations such as <b>production planning, inventory control, supply chain management, order processing, and customer relationship management</b>. Without a robust digital solution, businesses often face challenges like delays, high costs, and inefficient workflows.</p>
                  <p><b>ChittorTech</b> is designed for Consumer Goods manufacturers in India, simplifying end-to-end business operations and helping manufacturers, wholesalers, and distributors <b>achieve higher efficiency, compliance, and profitability</b>.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img284.jpg" alt="Consumer Goods Manufacture" />
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
                  <img src="/assets/images/img285.jpg" alt="Consumer Goods AI Manufacturing Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Consumer Goods Manufacturers</span> Need AI & IT Solutions?</h2>
               <p>The Consumer Goods sector includes everything from FMCG, packaged food, personal care, household products, and daily essentials. With increasing competition and customer expectations, companies must adopt digital transformation tools to remain competitive.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li> Managing multiple SKUs and product variants</li>
                  <li> Balancing production with fluctuating market demand</li>
                  <li> Monitoring shelf life and expiry dates</li>
                  <li> Tracking supply chain and logistics in real time</li>
                  <li> Maintaining compliance with industry regulations</li>
               </ul>
               <p>Our AI & IT Solutions in India addresses all these challenges with advanced automation and intelligent insights.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>Key Features of <span>ChittorTech for Consumer Goods Industry</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Inventory & Warehouse Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Inventory &amp; Warehouse Management</h3>
               <ul>
                  <li> Real-time stock updates for multiple locations</li>
                  <li> Expiry and batch tracking for perishable goods</li>
                  <li> Barcode and QR-based product tracking</li>
               </ul>
            </div>
         </div>

         {/* 2. Production Planning & Control */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Production Planning &amp; Control</h3>
               <ul>
                  <li> Optimized production scheduling</li>
                  <li> Demand forecasting to avoid overproduction/shortages</li>
                  <li> Integration with machinery for smart manufacturing</li>
               </ul>
            </div>
         </div>

         {/* 3. Sales & Distribution Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Sales &amp; Distribution Management</h3>
               <ul>
                  <li> Multi-channel order management (retail, wholesale, e-commerce)</li>
                  <li> Route optimization for timely deliveries</li>
                  <li> Automated invoicing and GST compliance</li>
               </ul>
            </div>
         </div>

         {/* 4. Quality & Compliance Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Quality &amp; Compliance Management</h3>
               <ul>
                  <li> Ensures adherence to FSSAI, ISO, and government standards</li>
                  <li> Automated quality checks at every stage</li>
               </ul>
            </div>
         </div>

         {/* 5. Finance & Accounting */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Finance &amp; Accounting</h3>
               <ul>
                  <li> Integrated GST billing, tax filing, and financial reporting</li>
                  <li> Real-time profit and cost tracking</li>
               </ul>
            </div>
         </div>

         {/* 6. Customer Relationship Management (AI Knowledge Base) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Customer Relationship Management (AI Knowledge Base)</h3>
               <ul>
                  <li> Track customer orders and preferences</li>
                  <li> Personalized offers and loyalty management</li>
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
               <h2>Benefits of Using <span>ChittorTech for Consumer Goods Manufacturers</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Enhanced Efficiency" /></figure>
                  <h3>Enhanced Efficiency</h3>
                  <p>Automate processes to reduce manual work.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Faster Decision Making" /></figure>
                  <h3>Faster Decision Making</h3>
                  <p>Real-time, data-driven insights for informed decisions.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Lower Operational Costs" /></figure>
                  <h3>Lower Operational Costs</h3>
                  <p>Optimize resources and cut wastage across operations.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Improved Customer Satisfaction" /></figure>
                  <h3>Improved Customer Satisfaction</h3>
                  <p>Ensure timely deliveries and consistent product quality.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p>Adaptable to small, medium, or large enterprises.</p>
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
               <h4>Why Choose <span>ChittorTech in India?</span></h4>
               <ul>
                  <li><strong>Local Expertise –</strong> Specialized in Consumer Goods AI & IT Solutions implementation.</li>
                  <li><strong>Affordable AI & IT Solutions Solutions –</strong> Tailored for manufacturers, distributors, and retailers.</li>
                  <li><strong>24/7 Support & Training –</strong> Seamless adoption with expert guidance.</li>
                  <li><strong>Proven Success –</strong> Trusted by businesses across India.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Consumer Goods AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}
