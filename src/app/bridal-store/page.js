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
      <section style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #7c2d12 45%, #a16207 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(253,224,71,0.12) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-crown`}></i> Bridal & Luxury Retail
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Bridal & Luxury Fashion Store Management Suite
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Transform every bride's journey into a personalised white-glove experience — from the first consultation to final delivery — while tracking collections, alteration timelines, and advance deposits with precision.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Request a Demo
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Connect With Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className={`fa-solid fa-crown`}></i>
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

    {/* Modern AI-Powered Bridal Management */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Modern AI-Powered Bridal Management</h3>
            <p>
                Streamline billing, checkouts, and inventory management with an all-in-one
                AI-driven solution built specifically for bridal stores.
            </p>
        </div>
    </div>

    {/* Smart Invoicing & Payments */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Smart Invoicing &amp; Payments</h3>
            <ul>
                <li>Generate sales invoices instantly</li>
                <li>Accept multiple payment methods, including UPI</li>
                <li>Integrated payment gateway for seamless transactions</li>
            </ul>
        </div>
    </div>

    {/* Effortless Bridal Inventory Management */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Effortless Bridal Inventory Management</h3>
            <ul>
                <li>Organize products by type, size, color, designer, or collection</li>
                <li>Automated restocking and trend tracking</li>
                <li>Barcode generation and stock audits made simple</li>
            </ul>
        </div>
    </div>

    {/* Omnichannel Store Management */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Omnichannel Store Management</h3>
            <ul>
                <li>Sell online and offline with ease</li>
                <li>Quick integration with Shopify &amp; WooCommerce</li>
                <li>Hassle-free payment gateway setup</li>
            </ul>
        </div>
    </div>

    {/* Peak Season Billing */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Peak Season Billing Made Easy</h3>
            <ul>
                <li>One-click billing with print, SMS, or WhatsApp invoice options</li>
                <li>Inbuilt accounting keeps P&amp;L, ledgers, and bookkeeping accurate</li>
                <li>Manage collections by category and season effortlessly</li>
            </ul>
        </div>
    </div>

    {/* Boost Sales & Customer Engagement */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Boost Sales &amp; Customer Engagement</h3>
            <ul>
                <li>Track best-selling bridal outfits and automate restocking</li>
                <li>Run offers, seasonal discounts, and bundle promotions</li>
                <li>Connect with customers via WhatsApp for invoices and promotions</li>
            </ul>
        </div>
    </div>

    {/* Advanced Store Features */}
    <div className="col-lg-4 col-md-6">
        <div className="key-box">
            <h3>Advanced Store Features</h3>
            <ul>
                <li>GST-compliant invoicing and proformas</li>
                <li>Multiple billing counters for faster checkouts</li>
                <li>Returns and exchange management with auto inventory updates</li>
                <li>Real-time stock verification across all outlets</li>
                <li>150+ MIS reports for sales, stock, and customer insights</li>
            </ul>
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
                              <img src="/assets/images/bridal.png" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                 <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>Manage Your Bridal Store Network <span>Effortlessly</span></h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>One Customer Hub</strong><br />
                Keep all customer details in a single, synchronized system for every branch.
            </li>
            <li>
                <strong>Smooth Inventory Movement</strong><br />
                Transfer products between stores quickly and track requests without hassle.
            </li>
            <li>
                <strong>Unified Reports &amp; Analytics</strong><br />
                Get a complete overview of sales, stock, and performance from all outlets in one dashboard.
            </li>
            <li>
                <strong>Live Stock Monitoring</strong><br />
                Track bridal inventory across every location in real-time for better planning and control.
            </li>
        </ul>
    </div>
</div>

              </div>
          </div>
      </section>

      <section className="why-choose-sec bridal-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-5 order-md-2">
                       <div className="expertise-img text-end">
                           <figure>
                              <img src="/assets/images/ux1.png" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                 <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>Advanced Bridal Management Platform</h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>Operate Multiple Stores Effortlessly</strong><br />
               Access and manage all your stores from anywhere, at any time.
            </li>
            <li>
                <strong>Smart Inventory &amp; Barcode System</strong><br />
                Organize products, generate barcodes, and keep stock up-to-date automatically.
            </li>
            <li>
                <strong>Flexible Payment Options</strong><br />
                Support for multiple payment methods, including UPI and digital wallets.
            </li>
            <li>
                <strong>Insightful Reports &amp; Analytics</strong><br />
                Get actionable data to forecast sales and optimize your business performance.
            </li>
            <li>
                <strong>Seamless Online Store Launch</strong><br />
                Set up your e-commerce store quickly and connect with customers worldwide.
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
                   <div className="col-md-6">
                       <div className="clothing-stores-text">
                           <h2>Benefits of ChittorTech Bridal Software</h2>
                           <ul>
                              <li><strong> User-Friendly:</strong> Easy to learn and operate.</li>
                              <li><strong> Affordable:</strong> Competitive pricing for bridal store solutions.</li>
                              <li><strong> Cloud-Based:</strong> Access your data from any device, anywhere.</li>
                              <li><strong> Multi-Featured:</strong> Combines Management, inventory, accounting, and invoicing.</li>
                              <li><strong> Quick Support Team:</strong> Assistance whenever needed.</li>
                              <li><strong> Data-Driven Insights:</strong> Optimize stocks, pricing, and collections.</li>
                              <li><strong> Tailored for Bridal Stores:</strong> Designed for wedding wear retail operations.</li>
                              <li><strong> Highly Rated:</strong> 4.8* on Google reviews by satisfied customers.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/Competitive-pricing.png" />
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
                     <h2> Seamless   <span>Integrations</span> </h2>
                  </div>
                  <div className="why-choose-grid">
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core1.png" /> </figure>
                        <p>E-commerce Platforms</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core2.png" /> </figure>
                        <p>Communication & Marketing</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core3.png" /> </figure>
                        <p>Payment Solutions</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core4.png" /> </figure>
                        <p>Business Applications</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core5.png" /> </figure>
                        <p> Shipping & Logistics</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/core6.png" /> </figure>
                        <p> E-Invoicing & Compliance</p>
                     </div>
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
                      <h2>Thousands merchants trust ChittorTech</h2>
                      <p>Schedule a Free Demo Today and streamline your bridal store operations with ease.</p>
                      <h5>ChittorTech – Simplifying Bridal & Garment Store Management</h5>
                   </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Handle multiple branches */}
      <section className="multiple-branches-sec pt-60 ">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2> All-in-One Management Solution for Bridal, <br /> <span>Garment, and Fashion Stores</span> </h2>
                     <p>Running a bridal or fashion store can be overwhelming. From assisting customers with a wide variety of bridal and fashion outfits to managing billing and offering multiple payment options, every step requires precision and efficiency. Outdated systems slow down your operations — ChittorTech is here to change that!</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Handle multiple branches */}

      {/* industry new-cards section start here */}
      <section className="industry new-cards">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2>How to Use Customer Management in Bridal Store Software</h2>
                  </div>

                  <div className="desktop-industries">
                     <div className="row justify-content-center">

                        {/* 1. Add Customer Profiles */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b1.png" alt="Customer Profiles" className="img-fluid mb-3" />
                                       <h4>Add Customer Profiles</h4>
                                       <ul>
                                          <li>Enter customer details such as name, contact number, email, wedding date, preferences, and bridal requirements.</li>
                                          <li>Option to add notes about specific style or size preferences.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 2. Segment Customers */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b2.png" alt="Segment Customers" className="img-fluid mb-3" />
                                       <h4>Segment Customers</h4>
                                       <ul>
                                          <li>Group customers based on wedding date, type of bridal outfits, or preferences.</li>
                                          <li>Enables targeted promotions, offers, and personalized service.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 3. Track Customer Interactions */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b3.png" alt="Track Interactions" className="img-fluid mb-3" />
                                       <h4>Track Customer Interactions</h4>
                                       <ul>
                                          <li>Record every interaction including visits, fittings, calls, and emails.</li>
                                          <li>Helps staff provide a seamless and personalized shopping experience.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 4. Manage Appointments and Fittings */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b4.png" alt="Manage Appointments" className="img-fluid mb-3" />
                                       <h4>Manage Appointments & Fittings</h4>
                                       <ul>
                                          <li>Schedule bridal consultations, fittings, and delivery dates.</li>
                                          <li>Automated reminders via SMS or WhatsApp to reduce no-shows.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 5. Purchase History */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b5.png" alt="Purchase History" className="img-fluid mb-3" />
                                       <h4>Purchase History</h4>
                                       <ul>
                                          <li>Keep a record of all past purchases and orders for each customer.</li>
                                          <li>Allows personalized suggestions for accessories, lehengas, gowns, or jewelry.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 6. Loyalty & Membership Programs */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b6.png" alt="Loyalty Program" className="img-fluid mb-3" />
                                       <h4>Loyalty & Membership Programs</h4>
                                       <ul>
                                          <li>Reward regular customers with points, discounts, or special bridal offers.</li>
                                          <li>Encourage repeat visits and referrals.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 7. Send Offers & Notifications */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b7.png" alt="Send Offers" className="img-fluid mb-3" />
                                       <h4>Send Offers & Notifications</h4>
                                       <ul>
                                          <li>Share promotions, seasonal sales, and new collection updates via SMS, email, or WhatsApp.</li>
                                          <li>Improves customer engagement and retention.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 8. Generate Invoices & Receipts */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b8.png" alt="Invoices" className="img-fluid mb-3" />
                                       <h4>Generate Invoices & Receipts</h4>
                                       <ul>
                                          <li>Quickly generate GST-compliant bills for purchases.</li>
                                          <li>Send invoices digitally via WhatsApp or email for convenience.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 9. Analytics & Reports */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/b9.png" alt="Analytics Reports" className="img-fluid mb-3" />
                                       <h4>Analytics & Reports</h4>
                                       <ul>
                                          <li>View customer behavior, popular products, and trends.</li>
                                          <li>Identify VIP customers and prioritize service for high-value clients.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* industry new-cards section end here */}
      
      
      {/*  faq template section */}
      <section className="faq-template">
       <div className="container">
           <div className="heading-wrap text-center">
               <h2> FAQ – Bridal Store Customer  <span>Management Software</span> </h2>
           </div>
           <div className="row">
               <div className="col-md-12">
                   <div className="faq-section">
                       <div className="accordion" id="faqAccordion">
                           {/* FAQ 1 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       What is Bridal Store Software?
                                   </button>
                               </h2>
                               <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Bridal Store Software is a cloud-based solution designed to simplify bridal store operations, including customer management, inventory, billing, appointments, and analytics. It helps store owners provide a seamless shopping experience for brides-to-be.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 2 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingTwo">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       How can I add and manage customer information?
                                   </button>
                               </h2>
                               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       You can add customer profiles including name, contact details, wedding date, preferences, and order history. The software allows you to edit, update, and categorize customer data for better service.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 3 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingThree">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Can I track customer interactions and appointments?
                                   </button>
                               </h2>
                               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Yes! The software lets you track visits, fittings, calls, and emails. You can also schedule appointments and send automated reminders via SMS or WhatsApp.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 4 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingFour">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       How do I segment my customers?
                                   </button>
                               </h2>
                               <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Customers can be segmented by wedding date, type of outfit, preferences, or VIP status. This helps in targeted marketing, personalized services, and loyalty programs.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 5 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingFive">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                       Can I maintain purchase history for each customer?
                                   </button>
                               </h2>
                               <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Absolutely! Every purchase and order is recorded. This helps in suggesting matching accessories, gowns, or bridal jewelry and creating a personalized experience.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 6 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingSix">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       Does the software support loyalty programs?
                                   </button>
                               </h2>
                               <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Yes. You can create membership plans, reward points, and exclusive offers for regular customers to boost engagement and retention.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 7 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingSeven">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                       How can I send offers, updates, and invoices to customers?
                                   </button>
                               </h2>
                               <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       The software supports SMS, email, and WhatsApp integration. You can send promotional offers, reminders, and digital invoices directly to customers.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 8 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingEight">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                       Can I track customer analytics and reports?
                                   </button>
                               </h2>
                               <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Yes. Access reports to see purchase patterns, popular products, and high-value clients. Use this data to improve sales strategies and customer satisfaction.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 9 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingNine">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                       Is the software easy for staff to use?
                                   </button>
                               </h2>
                               <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Yes. The user-friendly interface allows staff to manage customers, appointments, billing, and inventory quickly without technical difficulties.
                                   </div>
                               </div>
                           </div>
                           {/* FAQ 10 */}
                           <div className="accordion-item">
                               <h2 className="accordion-header" id="headingTen">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                       Can this software handle multiple branches?
                                   </button>
                               </h2>
                               <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                                   data-bs-parent="#faqAccordion">
                                   <div className="accordion-body">
                                       Yes. All customer information is centralized, allowing you to manage multiple bridal store branches from one dashboard seamlessly.
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
