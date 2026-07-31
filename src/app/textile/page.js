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
                <i className={`fa-solid fa-industry`}></i> Textile AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Textile AI & IT Solutions & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                From yarn to finished fabric — complete textile AI & IT Solutions with production tracking.
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
                <i className={`fa-solid fa-industry`}></i>
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
                          <h1>Best AI & IT Solutions for Textile Manufacturers  <span>Industry in India</span> </h1>
                          <p>The <b>textile manufacturing industry in India</b> is a thriving ecosystem, ranging from traditional artisanal weaving to large-scale garment exports. Jaipur, with its globally admired block prints and handcrafted textiles, and Delhi NCR, with its industrial garment clusters, form the backbone of North India’s textile supply chain.</p>

                          <p>Yet, with opportunity comes complexity. Textile businesses here face challenges in <b> inventory control, order fulfillment, production scheduling, supplier management, and quality compliance.</b> Traditional manual systems or generic AI & IT Solutions solutions often fail to meet the unique needs of textile operations.</p>

                          <p>This is why adopting the <b> best AI & IT Solutions for Textile Manufacturers Industry in India </b> has become a necessity. With <b> ChittorTech,</b> textile businesses can gain end-to-end control—from raw fabric procurement to the final stitched product—delivered through a system built specifically for textile manufacturers.</p>

                          <p>Our AI & IT Solutions doesn’t just automate processes, it <b> empowers businesses to reduce waste, increase efficiency, and scale sustainably,</b> making it the first choice for textile manufacturers in the region.</p>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img manufacturers-img">
                           <figure>
                               <img src="/assets/images/Textile-Manfacture.png" alt="Textile Manfacture" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>Why India  <span>Need a Tailored Textile AI & IT Solutions</span> </h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="key-box ">
                            <div className="key-img">
                                <img src="/assets/images/Intelligent.png" className="img-fluid" alt="intelligent decision making" />
                            </div>
                            <h3>Textile Industry Landscape</h3>
                            <ul>
                               <li> <b>Jaipur:</b> Globally recognized for artisanal block printing, tie-dye, and handcrafted fabrics. Export-driven but still rooted in traditional production methods.</li>
                               <li> <b>Delhi NCR:</b> Hub for large garment factories, fast-fashion suppliers, and exporters serving global brands. Speed and precision are critical.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="key-box">
                            <div className="key-img">
                                <img src="/assets/images/Efficient.png" className="img-fluid" alt="Efficient Processes" />
                            </div>
                            <h3>Common Challenges in the Region</h3>
                            <ul>
                               <li> Complex supplier networks and varied raw materials.</li>
                               <li> Need for strict quality assurance and international compliance.</li>
                               <li> Inventory scattered across multiple units and warehouses.</li>
                               <li> Delays in production due to manual documentation.</li>
                               <li> Balancing artisanal craftsmanship with modern manufacturing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="key-box">
                            <div className="key-img">
                                <img src="/assets/images/Integrated.png" className="img-fluid" alt="Integrated Module" />
                            </div>
                            <h3>Textile Industry Landscape</h3>
                            <ul>
                               <li> Textile-focused, not a generic AI & IT Solutions.</li>
                               <li> Supported by local implementation teams in Jaipur and NCR</li>
                               <li> Scalable for SMEs as well as export giants. </li>
                               <li> Proven to deliver ROI through waste reduction and efficiency gains. ChittorTech checks all these boxes and more.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section className="ai-solutions-features-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>Core AI & IT Solutions Features for <span>Textile Manufacturers </span> </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp1.png" /> </figure>
                         <h3>End-to-End Fabric Tracking</h3>
                         <p>From greige (raw fabric) to finished garment, track every stage with full traceability and zero leakages.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp2.png" /> </figure>
                         <h3>Advanced Inventory Management </h3>
                         <p>Lot-wise tracking, rejection monitoring, and real-time stock updates reduce wastage.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp3.png" /> </figure>
                         <h3>Supplier & Procurement Integration </h3>
                         <p>Streamlined purchase orders, delivery updates, and approval workflows minimize delays.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp4.png" /> </figure>
                         <h3>GRN (Goods Received Note) Management</h3>
                         <p> Digitally verify goods received, calculate weight loss, and record rejections with accuracy.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp5.png" /> </figure>
                         <h3>Production Program Management </h3>
                         <p>Allocate lots, calculate costs per unit, and track progress against deadlines.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp6.png" /> </figure>
                         <h3>Automated Challans & Invoices</h3>
                         <p>Reduce billing errors with one-click generation of challans and invoices.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp7.png" /> </figure>
                         <h3>Real-time Dashboards & Reporting</h3>
                         <p>Interactive dashboards provide visibility into orders, production, and lead times.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp8.png" /> </figure>
                         <h3>Forecasting & Demand Planning</h3>
                         <p>Use past sales data to predict demand for fabrics, colors, and styles.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp9.png" /> </figure>
                         <h3>Style & Material Master Data </h3>
                         <p>Centralized database for styles, measurement charts, pricing, and variants.</p>
                      </div>
                   </div>
                   <div className="col-md-3">
                      <div className="ai-solutions-features-box">
                         <figure> <img src="/assets/images/erp10.png" /> </figure>
                         <h3>Result </h3>
                         <p>With these modules, ChittorTech has proven itself as the best AI & IT Solutions for Textile Manufacturers Industry in India.</p>
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
                     <h2> Benefits of Chittortech AI & IT Solutions for  <span>Textile Manufacturers </span> </h2>
                  </div>
                  <div className="why-choose-grid textile-manufacturers-wrap">
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma1.png" /> </figure>
                        <h3>Operational Efficiency</h3>
                        <p>Digitize manual workflows, eliminate duplication, and increase speed.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma2.png" /> </figure>
                        <h3>Cost Savings & Waste Reduction</h3>
                        <p> Accurate rejection management prevents raw material losses.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma3.png" /> </figure>
                        <h3>Improved Quality Control</h3>
                        <p>Traceability and audit trails ensure compliance with export standards.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma4.png" /> </figure>
                        <h3>Faster Delivery Cycles</h3>
                        <p>Automated documentation and streamlined production reduce lead times.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma5.png" /> </figure>
                        <h3>Scalability</h3>
                        <p> Adaptable for small handloom workshops in Jaipur and large exporters in NCR.</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/ma6.png" /> </figure>
                        <h3>Data-driven Decisions</h3>
                        <p> Dashboards and analytics provide clear visibility to make smarter decisions. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="case-studies-section">
         <div className="container">
             <div className="row">
                <div className="col-md-12">
                       <div className="heading-wrap">
                         <h2>Case Studies & <span>Testimonials</span> </h2>
                      </div>

                       <div className="case-studies-container">
                           {/* Case Study 1 */}
                           <div className="case-study-card">
                               <h3>Jaipur Handloom Exporter</h3>
                               <p><strong>Problem:</strong> Inventory mismanagement caused delays and stock shortages.</p>
                               <p><strong>Solution:</strong> Implemented Chittortech AI & IT Solutions with inventory & GRN module.</p>
                               <p><strong>Result:</strong> Reduced material waste by 20%, on-time exports improved by 30%.</p>
                           </div>

                           {/* Case Study 2 */}
                           <div className="case-study-card">
                               <h3>Delhi NCR Garment Manufacturer</h3>
                               <p><strong>Problem:</strong> Manual billing and challan duplication caused errors.</p>
                               <p><strong>Solution:</strong> Automated invoicing & challan module in Chittortech AI & IT Solutions.</p>
                               <p><strong>Result:</strong> 40% fewer errors, faster payments, better client satisfaction.</p>
                           </div>
                       </div>

                       {/* Testimonial */}
                       <div className="testimonial">
                           <p>“After implementing ChittorTech, our production planning became smoother and we saved significant costs. Truly the best AI & IT Solutions for Textile Manufacturers Industry in India.”</p>
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
                           <h4>Why Choose ChittorTech?</h4>
                           <ul>
                              <li><strong>Specialized for Textile Industry –</strong> Unlike generic ERPs, ours is tailored to textile workflows</li>
                              <li><strong>Local Presence – </strong>Support teams in India for faster onboarding.</li>
                              <li><strong>Advanced Features –</strong> From greige-to-glamour tracking to forecasting.</li>
                              <li><strong>Proven ROI –</strong> Businesses report 20–40% improvements in efficiency.</li>
                              <li><strong>Competitive Edge –</strong> Outperforms general ERPs like Tally or Oracle for textile use cases.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/industry1.png" />
                           </figure>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/industry2.png" />
                           </figure>
                       </div>
                   </div>
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Implementation Roadmap</h2>
                           <ul>
                              <li><strong>Consultation : </strong> Map current processes and identify gaps.</li>
                              <li><strong>Customization : </strong>Configure AI & IT Solutions modules for textile operations.</li>
                              <li><strong>Training : </strong> Provide role-based training for staff.</li>
                              <li><strong>Go-Live :  </strong> Deploy AI & IT Solutions with real-time monitoring.</li>
                              <li><strong>Ongoing Support : </strong> Local teams provide updates and troubleshooting.</li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <h2>Conclusion & Call-to-Action</h2>
                        <p>The textile sector in India is evolving rapidly, and only those who adapt digital solutions will thrive. The best AI & IT Solutions for Textile Manufacturers Industry in India is not a luxury—it’s a necessity for survival and growth.</p>
                        <p>With ChittorTech, you gain a trusted partner who understands textile manufacturing inside-out, offering solutions that cut costs, save time, and improve quality.</p>
                      <button className="cta-button" onClick={() => { window.location.href = "/contact-us"; }}>
  Book a Free Demo
</button>

                     </div>
                 </div>
             </div>
         </div>
      </section>
    </>
  );
}
