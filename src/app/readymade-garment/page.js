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
                <i className={`fa-solid fa-shirt`}></i> Garment AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Readymade Garment AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage styles, sizes, SKUs, and multi-brand inventory for garment retailers.
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
      
      {/* inner banner section start here  */}
      
      {/* inner banner section end here  */}

      <section className="manufacturing-key section-bg">
            <div className="container">
              <div className="row justify-content-center gy-4">

    {/* Next-Gen Garment Billing Management */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>Next-Gen Garment Billing Management</h3>
            <p>
                Checkout becomes quick and hassle-free with a smart Management system that automates billing
                and supports secure digital payments for garment retailers.
            </p>
            <ul>
                <li>Intelligent sales invoice creation</li>
                <li>Support for cash, card, and digital payments</li>
                <li>Built-in UPI payment connectivity</li>
            </ul>
        </div>
    </div>

    {/* Intelligent Apparel Stock Control */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>Intelligent Apparel Stock Control</h3>
            <p>
                Easily organize and track garments by style, size, shade, and brand while keeping
                inventory updated in real time.
            </p>
            <ul>
                <li>Advanced product variation handling</li>
                <li>Barcode and price label creation</li>
                <li>Accurate stock checking and reconciliation</li>
            </ul>
        </div>
    </div>

    {/* Unified Online & In-Store Selling */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>Unified Online &amp; In-Store Selling</h3>
            <p>
                Manage physical outlets and online sales from a single dashboard with smooth
                omnichannel operations.
            </p>
            <ul>
                <li>Quick launch of online garment stores</li>
                <li>Direct integration with leading e-commerce platforms</li>
                <li>Safe and reliable payment processing</li>
            </ul>
        </div>
    </div>

</div>

            </div>
        </section>

      <section className="bridal-store-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>Why Choose ChittorTech?</h2>
                      <p>India’s Best Cloud-Based Garment Software trusted by retailers nationwide. Whether it’s billing, inventory, GST compliance, or multi-branch operations, our solution simplifies it all.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="why-choose-sec bridal-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 order-md-2">
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img206.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                 <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>Feature <span>Highlights</span></h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>Instant Checkout</strong> – Create bills in seconds and send them directly via SMS or WhatsApp.
            </li>
            <li>
                <strong>Built-in Financials</strong> – Auto-generated ledgers, profit &amp; loss statements, and balance summaries.
            </li>
            <li>
                <strong>Apparel Inventory Control</strong> – Structured stock tracking for men’s, women’s, kids’, seasonal, sports, casual, and occasion wear.
            </li>
            <li>
                <strong>Sales Performance Insights</strong> – Identify fast-moving items and enable automatic replenishment.
            </li>
            <li>
                <strong>Promotion Management</strong> – Create and manage festive and seasonal discount offers with ease.
            </li>
            <li>
                <strong>Style-Based Organization</strong> – Clear slow-moving stock faster and improve margins.
            </li>
            <li>
                <strong>Customer Communication Tools</strong> – Engage shoppers instantly through WhatsApp integration.
            </li>
            <li>
                <strong>GST-Ready Billing</strong> – Issue fully compliant tax invoices without manual effort.
            </li>
            <li>
                <strong>Multi-Terminal Billing</strong> – Operate multiple checkout counters smoothly without delays.
            </li>
            <li>
                <strong>Easy Returns &amp; Exchanges</strong> – Process refunds and swaps with real-time inventory updates.
            </li>
            <li>
                <strong>Live Stock Audits</strong> – Verify inventory instantly using mobile Management devices.
            </li>
            <li>
                <strong>Advanced Business Reports</strong> – Get access to 150+ detailed MIS and analytical reports.
            </li>
        </ul>
    </div>
</div>

              </div>
          </div>
      </section>

      {/* Clothing Stores section start here */}
      <section className="clothing-stores-sec">
           <div className="container">
                <div className="row align-items-center">
                   <div className="col-md-6 order-md-2">
                       <div className="clothing-stores-text">
                          <h2> Multi-Store &  <span>Multi-Branch Management</span> </h2>
                          <p>Handle multiple outlets from one centralized dashboard.</p>
                           <ul>
                              <li>Single Customer Database across all branches</li>
                              <li>Stock Transfer & Requests between stores</li>
                              <li>Centralized Reporting & Analytics</li>
                              <li>Real-Time Inventory Control</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-6 order-md-1">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img207.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      {/* Clothing Stores section start here */}
      <section className="clothing-stores-sec">
           <div className="container">
                <div className="row align-items-center">
                   <div className="col-md-6">
    <div className="clothing-stores-text">
        <h4>One Complete Garment Solution for Your Business</h4>
        <p>
            Our apparel management system is built to handle every operational need of modern garment
            stores and retail chains.
        </p>
        <ul>
            <li>High-performance Management for fast billing</li>
            <li>Centralized control of multiple outlets from any location</li>
            <li>Smart stock tracking with barcode support</li>
            <li>Flexible payment acceptance options</li>
            <li>Intelligent reports with sales insights and predictions</li>
            <li>Easy setup and management of online selling channels</li>
        </ul>
    </div>
</div>

                   <div className="col-md-6">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img208.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/* Clothing Stores section end here */}

      <section className="choose-chittortech-sec core-features-sec">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2> Handle Multiple <span>Branches</span> </h2>
                     <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet.</p>
                  </div>
                  <div className="why-choose-grid">
                     <div className="grid-item">
                        <h3>🔄 Stock Transfer & Request</h3>
                        <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
                     </div>
                     <div className="grid-item">
                        <h3> 📊 Central Reporting & Analytics</h3>
                        <p>Get real-time, consolidated reports on a single dashboard. Track sales, stock, and performance across all your garment stores for better decision-making.</p>
                     </div>
                     <div className="grid-item">
                        <h3>🌐 Centralized Management</h3>
                        <p>Control every branch of your garment store chain from one platform. Manage billing, sales, inventory, and operations in a unified system.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="choose-chittortech-sec core-features-sec">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2>Measurable Success with ChittorTech</h2>
                  </div>
                  <div className="why-choose-grid">
                     <div className="grid-item">
                        <p>📈 <br /> Up to 4× increase in business revenue</p>
                     </div>
                     <div className="grid-item">
                        <p>⏳<br />Save more than 120 billing hours every month</p>
                     </div>
                     <div className="grid-item">
                        <p>⚡<br /> Process transactions 90% faster than traditional systems</p>
                     </div>
                     <div className="grid-item">
                        <p>✅ <br />Achieve 99% accuracy by eliminating manual mistakes</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="why-choose-sec bridal-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 order-md-2">
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img209.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-7 order-md-1">
                      <div className="heading-wrap text-start">
                          <h2> Why ChittorTech is   <span>the Best for You</span> </h2>
                       </div>
                       <div className="expertise-wrap bridal-wrap">
                           <ul>
                              <li><strong>User-Friendly Interface –</strong> Easy to learn & use.</li>
                              <li><strong>Affordable Pricing –</strong> Smart solutions at the best price.</li>
                              <li><strong>12K+ Satisfied Clients –</strong> Trusted by garment retailers across India.</li>
                              <li><strong>Cloud-Based Access –</strong> Use anytime, anywhere on mobile, tablet, or desktop.</li>
                              <li><strong>4.8★ Google Rating –</strong> High customer satisfaction.</li>
                              <li><strong>Tailored Customization –</strong> Personalized as per your store needs.</li>
                              <li><strong>Quick Support Team –</strong> Always ready to assist you.</li>
                              <li><strong>Multi-Featured Platform –</strong> POS, Inventory, Accounting, and more in one software.</li>
                              <li><strong>Data-Driven Insights –</strong> Smarter decisions with advanced analytics.</li>
                              <li><strong>Expert Implementation Team –</strong> Hassle-free onboarding and training.</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>



      <section className="clothing-stores-sec software-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7 order-md-2">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Why Choose ChittorTech Garment Software?</h2>
                           <ul>
                              <li>Smart billing with GST-compliant invoices</li>
                              <li>Inventory control with tracking by size, color, and pattern</li>
                              <li>Multi-branch AI & IT Solutions to manage all outlets from a single dashboard</li>
                              <li>Online and offline integration with Shopify and WooCommerce</li>
                              <li>Data insights and MIS reports for better forecasting</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5 order-md-1">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img210.jpg" />
                           </figure>
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
                           <h2>Benefits of Using Garment AI & IT Solutions</h2>
                           <ul>
                              <li>For business owners: save 120+ hours monthly, get real-time profit & loss insights, and manage all outlets centrally.</li>
                              <li>For staff: simple Management interface, 99% fewer manual errors, and 90% faster billing.</li>
                              <li>For customers: faster checkouts, instant invoices on WhatsApp, and attractive loyalty programs.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img211.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      


      <section className="clothing-stores-sec software-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7 order-md-2">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>How to Attract More Customers with Garment Software</h2>
                           <ul>
                              <li>Analyze customer buying trends and stock what sells best.</li>
                              <li>Run targeted promotions and discounts on slow-moving items.</li>
                              <li>Send offers and updates with WhatsApp integration.</li>
                              <li>Sell both online and offline for maximum reach.</li>
                              <li>Reward loyal customers with points and discounts.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5 order-md-1">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img212.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="bridal-store-sec pt-60 pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>Store Management with Chittortech AI & IT Solutions</h2>
                      <p>Our AI & IT Solutions is designed for garment retailers with features like centralized inventory control, stock transfers, category-wise organization (men, women, kids, party wear, seasonal), real-time reporting with 150+ MIS reports, and cloud-based access to run your business from anywhere.</p>
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
                           <h2>Guidelines for Garment Retailers Using AI & IT Solutions</h2>
                           <ul>
                              <li>Update inventory daily for accuracy.</li>
                              <li>Use barcode billing to avoid errors.</li>
                              <li>Check real-time sales reports before reordering.</li>
                              <li>Train staff to use Management for faster service.</li>
                              <li>Use the customer database for loyalty programs and promotions.</li>
                              <li>Expand with online and offline selling for more revenue.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img213.jpg" />
                           </figure>
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
                        <div className="phone-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h2>Grow Your Garment Business Today</h2>
                        <p>Book a free demo with ChittorTech – India’s best cloud-based garment AI & IT Solutions. Smart, simple, and affordable – everything your garment store needs to grow faster and sell smarter.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button">Contact us now to get started!</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="pricing-section py-5">
        <div className="container">
         <div className="heading-wrap">
            <h2>Pricing Plans – Choose What Fits Your <span>Garment Store Best</span> </h2>
            <p>Our garment AI & IT Solutions is designed to grow with your business. Whether you own a single shop or manage a chain of outlets, we have a plan that suits your needs.</p>
         </div>
            <div className="row justify-content-center">
              {/* Basic Plan */}
              <div className="col-md-4 mb-4">
                <div className="pricing-card basic">
                  <div className="pricing-header">
                    <div className="plan-icon-wrap bg-success">
                      <i className="bi bi-bag-check"></i>
                    </div>
                    <h3>Basic Plan</h3>
                    <p>Perfect for small garment stores just starting out.</p>
                  </div>
                  <ul className="pricing-features">
                    <li>✔ Smart billing with GST invoices</li>
                    <li>✔ Basic inventory management</li>
                    <li>✔ Single-store access</li>
                    <li>✔ 50+ MIS reports</li>
                    <li>✔ Free WhatsApp invoice sharing</li>
                    <li>✔ Email support</li>
                    <li>👉 Best for single-location garment shops.</li>
                  </ul>
                  <div className="price">₹999 <span>/month</span></div>
                  <div className="price-alt">₹9,999 /year</div>
                  <a href="#" className="btn btn-success mt-3">Get Started</a>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="col-md-4 mb-4">
                <div className="pricing-card standard">
                  <div className="pricing-header">
                    <div className="plan-icon-wrap bg-warning">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <h3>Standard Plan</h3>
                    <p>Ideal for growing garment retailers with multiple product categories.</p>
                  </div>
                  <ul className="pricing-features">
                    <li>✔ Everything in Basic, plus:</li>
                    <li>✔ Multi-store management (up to 3 outlets)</li>
                    <li>✔ Centralized inventory control</li>
                    <li>✔ Barcode & label generator</li>
                    <li>✔ Stock transfer between outlets</li>
                    <li>✔ 100+ MIS reports & analytics</li>
                    <li>✔ WhatsApp customer engagement tools</li>
                    <li>✔ Priority email + chat support</li>
                    <li>👉 Best for mid-size garment retailers with 2–3 stores.</li>
                  </ul>
                  <div className="price">₹1,999 <span>/month</span></div>
                  <div className="price-alt">₹19,999 /year</div>
                  <a href="#" className="btn btn-warning mt-3 text-dark">Get Started</a>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="col-md-4 mb-4">
                <div className="pricing-card premium">
                  <div className="pricing-header">
                    <div className="plan-icon-wrap bg-danger">
                      <i className="bi bi-building-gear"></i>
                    </div>
                    <h3>Premium Plan</h3>
                    <p>Built for large apparel chains and enterprises.</p>
                  </div>
                  <ul className="pricing-features">
                    <li>✔ Everything in Standard, plus:</li>
                    <li>✔ Unlimited outlets & branches</li>
                    <li>✔ AI & IT Solutions-level accounting & reporting</li>
                    <li>✔ Customer loyalty & promotions module</li>
                    <li>✔ Shopify & WooCommerce integration</li>
                    <li>✔ Advanced stock verification with mPOS</li>
                    <li>✔ 150+ MIS reports & predictive analytics</li>
                    <li>✔ Dedicated account manager & 24/7 support</li>
                    <li>✔ Custom feature implementation on request</li>
                    <li>👉 Best for large apparel chains & franchise stores.</li>
                  </ul>
                  <div className="price">₹2,999 <span>/month</span></div>
                  <div className="price-alt">₹29,999 /year</div>
                  <a href="#" className="btn btn-danger mt-3">Get Started</a>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> All Plans <span> Include:  </span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <h3>Cloud-based access (use anytime, anywhere)</h3>
                             </li>
                             <li>
                                <h3>Secure data backup</h3>
                             </li>
                             <li>
                                <h3>Easy-to-use Management system</h3>
                             </li>
                             <li>
                                <h3>Free onboarding & training sessions</h3>
                             </li>
                             <li>
                                <h3>Regular software updates</h3>
                             </li>
                          </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      
      {/*  faq template section */}
      <section className="faq-template">
        <div className="container">
          <div className="heading-wrap text-center">
            <h2> Frequently Asked <span>Questions (FAQs)</span> </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="faq-section">
                <div className="accordion" id="faqAccordion">
                  
                  {/* FAQ 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading11">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                        What is ChittorTech Garment Software?
                      </button>
                    </h2>
                    <div id="collapse11" className="accordion-collapse collapse show" aria-labelledby="heading11"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        It is an all-in-one cloud-based software designed for garment retailers to manage billing, inventory, GST compliance, online sales, and multi-store AI & IT Solutions operations.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading12">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                        Who can use this software?
                      </button>
                    </h2>
                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Our software is perfect for small garment shops, boutiques, mid-size retailers, and large apparel chains with multiple outlets.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading13">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        Can I manage multiple garment stores with this software?
                      </button>
                    </h2>
                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes! With our AI & IT Solutions features, you can manage multiple outlets, transfer stock between branches, and access a centralized customer database.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading14">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                        Do I need special hardware to run the software?
                      </button>
                    </h2>
                    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        No. It works on desktops, laptops, tablets, and even mobiles. You can use existing devices with internet access.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading15">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                        Is the billing system GST-compliant?
                      </button>
                    </h2>
                    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes. Our garment billing software generates GST-compliant invoices, proformas, and supports CGST/SGST automatically.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading16">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                        Can I also sell online using this software?
                      </button>
                    </h2>
                    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Absolutely. Our software integrates with Shopify and WooCommerce, making it easy to launch and manage your online garment store alongside your retail store.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading17">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                        How does it help in attracting customers?
                      </button>
                    </h2>
                    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        You can send invoices and offers via WhatsApp, run promotions, track best-selling apparel, and set up customer loyalty programs to keep buyers coming back.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading18">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                        What kind of reports will I get?
                      </button>
                    </h2>
                    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        You’ll get 150+ MIS reports including sales trends, profit & loss, top-selling products, stock levels, and predictive analytics to make better business decisions.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading19">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                        Is customer support available if I face issues?
                      </button>
                    </h2>
                    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes. We provide quick support through chat, email, and phone. Premium customers also get a dedicated account manager for priority support.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading20">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                        How do I get started?
                      </button>
                    </h2>
                    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20"
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Simply contact us for a free demo. Our team will set up the software, provide onboarding and training, and customize it as per your garment store’s needs.
                      </div>
                    </div>
                  </div>

                </div>{/* /accordion */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq template section */}
    </>
  );
}
