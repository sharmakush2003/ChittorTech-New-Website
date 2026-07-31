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
                <i className={`fa-solid fa-shirt`}></i> Garments AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Garments AI & IT Solutions & Billing Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Handle garment manufacturing, distribution, and retail billing in one platform.
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
                <i className={`fa-solid fa-shirt`}></i>
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
                  <h1>Best AI & IT Solutions for Garment Manufacturers <span>Industry in India</span></h1>
                  <p>In today’s competitive fashion and apparel landscape, garment manufacturers face ever-growing challenges—managing complex production processes, controlling costs, meeting strict deadlines, and delivering high-quality garments. To stay ahead in this fast-moving industry, adopting a powerful AI & IT Solutions system is no longer an option, but a necessity.</p>
                  <p><b>ChittorTech</b> is designed specifically for garment manufacturers in India, ensuring smooth handling of everything—from raw material procurement, inventory, cutting, stitching, quality control, packaging, to final delivery—helping garment businesses <b>maximize efficiency, compliance, and profitability</b>.</p>
               </div>
            </div>
         </div>
         <div className="col-md-6">
            <div className="seo-services-img manufacturers-img">
               <figure>
                  <img src="/assets/images/img286.jpg" alt="Garment Manufacture" />
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
                  <img src="/assets/images/img287.jpg" alt="Garment AI Manufacturing Solutions" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Why <span>Garment Manufacturers</span> Need AI & IT Solutions?</h2>
               <p>The garment industry operates differently from other manufacturing sectors. High volumes, frequent style changes, seasonal demand, labor dependency, and complex supply chains require a specialized AI & IT Solutions system. Here’s why:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>SKU Management</strong> – Handle multiple sizes, colors, and designs with ease.</li>
                  <li><strong>Real-Time Inventory Tracking</strong> – Track fabrics, trims, and finished goods efficiently.</li>
                  <li><strong>Production Planning</strong> – Optimize cutting, stitching, and finishing processes.</li>
                  <li><strong>Order Management</strong> – Manage bulk and custom orders seamlessly.</li>
                  <li><strong>Costing & Profitability Analysis</strong> – Get accurate per-piece costing and margin insights.</li>
                  <li><strong>Supply Chain Control</strong> – Monitor vendors, suppliers, logistics, and distributors.</li>
                  <li><strong>Compliance & Certifications</strong> – Ensure production meets international standards.</li>
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
         <h2>Key Features of <span>ChittorTech’ Garment AI & IT Solutions</span></h2>
         <p>Our AI & IT Solutions is tailor-made for garment manufacturers in India, addressing real challenges faced by the apparel industry:</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 1. Fabric & Material Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Fabric &amp; Material Management</h3>
               <ul>
                  <li> Track fabric rolls, trims, and accessories</li>
                  <li> Automated inventory alerts for stock shortages</li>
                  <li> Batch-wise fabric issue and consumption tracking</li>
               </ul>
            </div>
         </div>

         {/* 2. Cutting & Stitching Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Cutting &amp; Stitching Management</h3>
               <ul>
                  <li> Optimize cutting plans to reduce wastage</li>
                  <li> Assign and monitor stitching orders line-wise</li>
                  <li> Track per-operator productivity and efficiency</li>
               </ul>
            </div>
         </div>

         {/* 3. Style & Size Matrix */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Style &amp; Size Matrix</h3>
               <ul>
                  <li> Manage multiple sizes (S, M, L, XL, XXL, etc.) and colors</li>
                  <li> SKU generation for each style variation</li>
                  <li> Simplify order processing with automated style allocation</li>
               </ul>
            </div>
         </div>

         {/* 4. Production Planning & Scheduling */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Production Planning &amp; Scheduling</h3>
               <ul>
                  <li> Plan based on seasonal demand and customer deadlines</li>
                  <li> Assign resources to maximize machine and manpower usage</li>
                  <li> Monitor WIP (Work in Progress) across all stages</li>
               </ul>
            </div>
         </div>

         {/* 5. Quality Control (QC) */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Quality Control (QC)</h3>
               <ul>
                  <li> Define QC checkpoints—fabric inspection, stitching, finishing</li>
                  <li> Reject/accept reports for defect tracking</li>
                  <li> Ensure adherence to international quality standards</li>
               </ul>
            </div>
         </div>

         {/* 6. Order & Buyer Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Order &amp; Buyer Management</h3>
               <ul>
                  <li> Track buyer-specific requirements and compliance</li>
                  <li> Manage export/import documentation</li>
                  <li> Generate detailed order status reports</li>
               </ul>
            </div>
         </div>

         {/* 7. Costing & Profitability Analysis */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Costing &amp; Profitability Analysis</h3>
               <ul>
                  <li> Automated per-piece costing based on fabric, labor, trims, and overheads</li>
                  <li> Monitor wastage costs</li>
                  <li> Real-time profitability dashboards</li>
               </ul>
            </div>
         </div>

         {/* 8. HR & Payroll Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>HR &amp; Payroll Management</h3>
               <ul>
                  <li> Attendance & shift scheduling</li>
                  <li> Piece-rate and hourly wage management</li>
                  <li> Integrated payroll processing</li>
               </ul>
            </div>
         </div>

         {/* 9. Supply Chain & Distribution */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Supply Chain &amp; Distribution</h3>
               <ul>
                  <li> Vendor management for fabrics and accessories</li>
                  <li> Logistics and shipment tracking</li>
                  <li> Distribution to domestic and international buyers</li>
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
               <h2>Benefits of Using <span>Our AI & IT Solutions for Garment Manufacturers</span></h2>
            </div>
            <div className="why-choose-grid textile-manufacturers-wrap">
               <div className="grid-item">
                  <figure><img src="/assets/images/ma1.png" alt="Faster Time-to-Market" /></figure>
                  <h3>Faster Time-to-Market</h3>
                  <p>Streamlined processes reduce delays.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma2.png" alt="Reduced Wastage" /></figure>
                  <h3>Reduced Wastage</h3>
                  <p>Optimized cutting and material planning save costs.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma3.png" alt="Higher Productivity" /></figure>
                  <h3>Higher Productivity</h3>
                  <p>Real-time tracking increases operator efficiency.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma4.png" alt="Improved Buyer Relationships" /></figure>
                  <h3>Improved Buyer Relationships</h3>
                  <p>Timely deliveries and transparency boost trust.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma5.png" alt="Better Compliance" /></figure>
                  <h3>Better Compliance</h3>
                  <p>Ensure smooth audits and certifications.</p>
               </div>
               <div className="grid-item">
                  <figure><img src="/assets/images/ma6.png" alt="Scalability" /></figure>
                  <h3>Scalability</h3>
                  <p>Handle both domestic and export orders with ease.</p>
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
               <h4>Why Choose <span>ChittorTech for Garment AI & IT Solutions in India?</span></h4>
               <ul>
                  <li><strong>Industry Expertise –</strong> We specialize in AI & IT Solutions for apparel and garments.</li>
                  <li><strong>Customized Solutions –</strong> Tailored to small, medium, and large manufacturers.</li>
                  <li><strong>Local Support –</strong> Dedicated teams in India.</li>
                  <li><strong>User-Friendly Interface –</strong> Simple, intuitive, and easy for workers to adopt.</li>
                  <li><strong>Proven Results –</strong> Trusted by leading garment exporters and manufacturers.</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/industry1.png" alt="Garment AI & IT Solutions Solutions" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="case-studies-section pb-60">
 <div className="container">
     <div className="row">
        <div className="col-md-12">
               <div className="heading-wrap">
                 <h2>Case Example – AI & IT Solutions Implementation in a  <span>Jaipur Garment Factory</span> </h2>
              </div>

               <div className="case-studies-container">
                   {/* Case Study 1 */}
                   <div className="case-study-card">
                       <h3>Challenges Faced:</h3>
                       <p>Fabric wastage up to 12%</p>
                       <p>Delayed shipments by 10–15 days.</p>
                       <p>Manual errors in SKU management</p>
                   </div>

                   {/* Case Study 2 */}
                   <div className="case-study-card">
                       <h3>Results After AI & IT Solutions Implementation:</h3>
                       <p>Fabric wastage reduced to 3%</p>
                       <p>On-time delivery improved by 95%</p>
                       <p>Order accuracy reached 99%</p>
                   </div>
               </div>

        </div>
     </div>
 </div>
</section>
    </>
  );
}
