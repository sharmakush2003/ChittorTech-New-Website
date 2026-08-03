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
                <i className={`fa-solid fa-hammer`}></i> Hardware Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Hardware & Shopping Store Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Comprehensive Management for hardware and home improvement retail stores.
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
                <i className={`fa-solid fa-hammer`}></i>
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

   {/* Smart Inventory Control */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Smart Inventory Control</h3>
         <p>Effortlessly manage hardware and sanitaryware stock using AI-driven inventory tracking and automation.</p>
         <ul>
            <li>Barcode & label generation for quick identification</li>
            <li>AI-powered auto reorders to prevent stockouts</li>
            <li>Product variant & category organization</li>
            <li>Multi-location warehouse & godown management</li>
         </ul>
      </div>
   </div>

   {/* High-Speed AI AI Support Chatbot */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>High-Speed AI AI Support Chatbot</h3>
         <p>Experience fast, accurate checkout with an image-based Management built for modern hardware stores.</p>
         <ul>
            <li>GST-compliant, error-free billing</li>
            <li>Accept UPI, cards, wallets & cash</li>
            <li>Customizable invoices & mobile Management (mPOS)</li>
         </ul>
      </div>
   </div>

   {/* AI-Enabled E-Commerce Integration */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI-Enabled E-Commerce Integration</h3>
         <p>Expand your hardware business online with seamless omnichannel selling and live inventory sync.</p>
         <ul>
            <li>Custom online hardware store setup</li>
            <li>Real-time stock sync (online & offline)</li>
            <li>Secure payment gateway integrations</li>
         </ul>
      </div>
   </div>

   {/* Automated GST & Financial Management */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Automated GST & Financial Management</h3>
         <p>Handle accounting, GST compliance, and financial reporting effortlessly across all branches.</p>
         <ul>
            <li>Auto-generated balance sheet & P&L</li>
            <li>GST return filing & tax compliance</li>
            <li>Centralized expense & cash flow tracking</li>
         </ul>
      </div>
   </div>

</div>

   </div>
</section>

<section className="industry new-cards">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap">
               <h2>No. 1 AI-Powered Hardware & Shopping Store Software</h2>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">

                  {/* Feature 1: Faster Billing */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe1.png" alt="Faster Billing" className="img-fluid mb-3" />
                                 <h4>Fast AI Billing</h4>
<ul>
   <li>Swift and hassle-free checkout</li>
   <li>GST-compliant billing for in-store and online sales</li>
   <li>Accept UPI, cards, wallets, and cash</li>
   <li>Accurate, error-free invoicing powered by AI</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 2: Multiple Payment Options */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe2.png" alt="Multiple Payment Options" className="img-fluid mb-3" />
                                <h4>Smart Inventory & Supply Chain</h4>
<ul>
   <li>AI inventory tracking with real-time stock updates</li>
   <li>Centralized warehouse and multi-location stock management</li>
   <li>Automated purchase orders, supplier management, and reorders</li>
   <li>Track fast- and slow-selling products to optimize stock</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 3: Inventory Monitoring */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe3.png" alt="Inventory Monitoring" className="img-fluid mb-3" />
                                 <h4>AI Accounting & Finance</h4>
<ul>
   <li>Integrated ledger, profit & loss, and expense management</li>
   <li>Automated GST reporting and E-Way bill generation</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 4: Supply Chain Management */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe4.png" alt="Supply Chain Management" className="img-fluid mb-3" />
                                <h4>Labeling & Barcodes</h4>
<ul>
   <li>Generate AI-powered barcodes and labels for quick scanning</li>
   <li>Accurate stock tracking with automated identification</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 5: Warehouse Management */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe5.png" alt="Warehouse Management" className="img-fluid mb-3" />
                               <h4>Insights & Analytics</h4>
<ul>
   <li>150+ AI-driven reports on sales trends, inventory, and customer behavior</li>
   <li>AI notifications for low stock, pending orders, and supplier updates</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 6: Purchase Management */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe6.png" alt="Purchase Management" className="img-fluid mb-3" />
                                 <h4>Customer Engagement</h4>
<ul>
   <li>AI-based customer segmentation and targeted marketing</li>
   <li>Loyalty programs, rewards, and membership benefits</li>
   <li>Personalized promotions and festive offers</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 7: Integrated Accounting */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe7.png" alt="Integrated Accounting" className="img-fluid mb-3" />
                                <h4>Mobile & mPOS</h4>
<ul>
   <li>On-the-go mobile billing, stock verification, and barcode scanning</li>
   <li>Fully AI-integrated Management system for smooth operations anywhere</li>
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

<section className="pricing-section py-5 pt0">
   <div className="container">
      <div className="heading-wrap text-center">
         <h2>Pricing & Plans</h2>
      </div>
      <div className="row justify-content-center">

         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Hardware Stores</h3>
                  <div className="price">💳 ₹3,499 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Smart Billing & Billing</li>
                  <li>✔ Basic Inventory Management & Stock Alerts</li>
                  <li>✔ Digital GST-Compliant Invoices</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Basic Reports</li>
               </ul>
            </div>
         </div>

         {/* Standard Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card standard">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-primary">
                     <i className="bi bi-cart4"></i>
                  </div>
                  <h3>Standard Plan – Growing Hardware Stores</h3>
                  <div className="price">💳 ₹6,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Customer Segmentation & AI Knowledge Base</li>
                  <li>✔ Loyalty & Membership Programs</li>
                  <li>✔ Multi-Location Stock Management</li>
                  <li>✔ Custom Online Store Integration</li>
                  <li>✔ Advanced Reports & Analytics</li>
               </ul>
            </div>
         </div>

         {/* Premium Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card premium">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                     <i className="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Multi-Branch & Franchise Owners</h3>
                  <div className="price">💳 Custom Pricing</div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Event Alerts</li>
                  <li>✔ Centralized Accounting & Stock Control</li>
                  <li>✔ E-commerce & Payment Gateway Integrations</li>
                  <li>✔ Dedicated Support & Advanced Analytics</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>


<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center gy-4">

   {/* Unified Branch Control */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>🏬 Unified Branch Control</h3>
         <p>
            Manage all garment and apparel outlets from a single AI-powered dashboard.
            Track sales, inventory, and customer data seamlessly across every store.
         </p>
      </div>
   </div>

   {/* Smart Stock Transfer & Requests */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>📦 Smart Stock Transfer & Requests</h3>
         <p>
            AI-driven stock movement between branches in real time.
            Ensure optimal inventory availability and prevent stock shortages.
         </p>
      </div>
   </div>

   {/* Centralized Analytics & Reporting */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>📊 Centralized Analytics & Reporting</h3>
         <p>
            Access consolidated reports for sales, inventory, and branch performance.
            AI insights enable smarter decisions and operational efficiency.
         </p>
      </div>
   </div>

   {/* Complete Central Management */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>⚡ Complete Central Management</h3>
         <p>
            Control billing, sales, inventory, and operations from one AI-powered platform.
            Standardize pricing, promotions, and workflows across all stores effortlessly.
         </p>
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
                  <img src="/assets/images/img266.jpg" alt="Multi-Store Hardware Retail Management" />
               </figure>
            </div>
         </div>

        <div className="col-md-7 order-md-1">
   <div className="heading-wrap text-start">
      <h2>AI-Powered Multi-Store <span>Hardware & Retail Management</span></h2>
      <p>One intelligent platform to control operations, inventory, billing, and insights across all hardware store locations.</p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>🏬 Centralized Store Control –</strong>
            Manage all hardware outlets from a single AI-powered dashboard. Track sales, inventory, billing, and customer data effortlessly across every location.
         </li>

         <li>
            <strong>📦 Smart Stock Transfers & Requests –</strong>
            AI-driven real-time stock movement between stores and warehouses ensures continuous product availability and prevents shortages.
         </li>

         <li>
            <strong>📊 Advanced Reporting & Analytics –</strong>
            Consolidate data from all branches into one dashboard. Use AI-powered insights to make faster, smarter, data-driven decisions.
         </li>

         <li>
            <strong>⚡ Streamlined Store Operations –</strong>
            Centralized SKU and pricing management for all outlets from a single Management system.
         </li>

         <li>
            <strong>📦 Efficient Inventory Control –</strong>
            Track inventory in real time across all locations and eliminate manual audits, errors, and guesswork.
         </li>
      </ul>
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
               <h2> Key    <span>Benefits</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="" /> </figure>
                     <h3>4X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="" /> </figure>
                     <h3>120+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="" /> </figure>
                     <h3>90% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="" /> </figure>
                     <h3>99% Reduction in Manual Errors</h3>
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

         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img267.jpg" alt="Hardware Store Management Software" />
               </figure>
            </div>
         </div>

        <div className="col-md-7">
   <div className="heading-wrap text-start">
      <h2>AI-Powered Hardware Store Management: <span>From A to Z</span></h2>
      <p>
         A complete, intelligent hardware store management system that handles billing, inventory, analytics,
         and online selling — all from one powerful AI-driven platform.
      </p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>⚡ Smart Billing & Billing –</strong>
            Fast, accurate, AI-powered billing for all hardware products with support for UPI, cards, wallets, and cash.
         </li>

         <li>
            <strong>🏬 Multi-Store Control –</strong>
            Manage all outlets anytime, anywhere from a single AI-powered dashboard. Track sales, inventory,
            and customer data seamlessly across locations.
         </li>

         <li>
            <strong>📦 Intelligent Inventory & Barcode Management –</strong>
            Organize SKUs, categories, and barcodes efficiently with AI alerts for low stock and automated
            reorder suggestions.
         </li>

         <li>
            <strong>📊 Advanced Analytics & Reporting –</strong>
            Gain AI-powered insights into sales trends, stock movement, and customer behavior.
            Generate actionable reports to improve forecasting and profitability.
         </li>

         <li>
            <strong>🌐 Online Store Integration –</strong>
            Launch a custom e-commerce store synced with your inventory.
            Manage online orders, payments, and deliveries effortlessly.
         </li>
      </ul>
   </div>
</div>


      </div>
   </div>
</section>

<section className="bridal-store-sec hardware-store-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="bridal-store hardware-store">
               <h2>ChittorTech: A Smart Software for Your Hardware Store’s Success</h2>
               <p>Hardware stores face unique challenges such as managing multiple variants of similar products, tracking SKUs across locations, warehouses, and godowns, and coordinating with multiple suppliers. Add to that workflows like accounting, AI Knowledge Base, promotions, discount management, and online store operations—it becomes overwhelming if handled manually.</p>
               <p>ChittorTech hardware store billing software provides customized features, strategic modules, and add-ons to tackle all these challenges efficiently.</p>
               <p>Unlike generic solutions, ChittorTech is specifically designed for hardware stores, offering tailored tools and smart features that cover every aspect of your retail operations.</p>
               <p>Stay organized, reduce errors, and grow your hardware store business with confidence.</p>
               <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Avail your free demo today!</button>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>How to Use ChittorTech <span>Hardware Store Software</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. Sign Up and Login */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your existing credentials.</li>
                  <li>Set up your hardware store profile, GST details, and payment preferences.</li>
               </ul>
            </div>
         </div>

         {/* 02. Add Products and Inventory */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Add Products and Inventory</h3>
               <ul>
                  <li>Upload all hardware items with details like SKUs, variants, prices, and stock levels.</li>
                  <li>Assign barcodes to simplify billing and inventory tracking.</li>
               </ul>
            </div>
         </div>

         {/* 03. Multi-Store Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Connect multiple store locations, warehouses, and godowns in a single dashboard.</li>
                  <li>Track stock, sales, and transfers across all locations in real time.</li>
               </ul>
            </div>
         </div>

         {/* 04. Billing and Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Billing and Management</h3>
               <ul>
                  <li>Scan product barcodes for fast billing.</li>
                  <li>Accept multiple payment modes (cash, card, UPI).</li>
                  <li>Print or email invoices to customers.</li>
               </ul>
            </div>
         </div>

         {/* 05. Purchase and Supplier Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Purchase and Supplier Management</h3>
               <ul>
                  <li>Create and track purchase orders for suppliers.</li>
                  <li>Update inventory automatically upon receiving stock.</li>
                  <li>Monitor supplier performance for timely deliveries.</li>
               </ul>
            </div>
         </div>

         {/* 06. Customer Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Customer Management</h3>
               <ul>
                  <li>Maintain a unified database of all customers.</li>
                  <li>Track purchase history, send promotional messages, and manage loyalty programs.</li>
               </ul>
            </div>
         </div>

         {/* 07. Reporting and Analytics */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Reporting and Analytics</h3>
               <ul>
                  <li>Access sales reports, inventory summaries, and profit/loss statements.</li>
                  <li>Make informed decisions based on branch-wise or product-wise analytics.</li>
               </ul>
            </div>
         </div>

         {/* 08. Online Store Integration */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Online Store Integration</h3>
               <ul>
                  <li>Sync inventory with your online store.</li>
                  <li>Manage online and offline sales from a single dashboard.</li>
               </ul>
            </div>
         </div>

         {/* 09. Cloud Access Anywhere */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>09. Cloud Access Anywhere</h3>
               <ul>
                  <li>Manage your business remotely using cloud-based access.</li>
                  <li>Securely access your data 24/7 on any device.</li>
               </ul>
            </div>
         </div>

         {/* 10. Support & Assistance */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>10. Support &amp; Assistance</h3>
               <ul>
                  <li>Reach out to ChittorTech experts for guidance or troubleshooting.</li>
                  <li>Use free demos and training sessions to get started quickly.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>




{/* FAQ template section */}
<section className="faq-template py-5">
   <div className="container">
      <div className="heading-wrap text-center mb-4">
         <h2>Frequently Asked <span>Questions (FAQ)</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                           1. What is ChittorTech Hardware Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A1. A cloud-based Billing &amp; AI & IT Solutions solution to manage billing, inventory, AI Knowledge Base, GST compliance, and e-commerce for hardware stores.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it handle multiple store locations?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A2. Yes, the Premium Plan allows centralized management of multiple stores or franchises.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Does it support GST-compliant billing?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A3. Yes. The software generates error-free GST invoices and supports E-Way bill integration.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage inventory and stock alerts efficiently?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A4. Absolutely. It offers real-time stock monitoring, alerts for fast/slow-selling products, and auto-reordering.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support multiple payment modes?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A5. Yes. Accept payments via UPI, credit/debit cards, digital wallets, and cash.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I sell products online with this software?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A6. Yes. Create a custom online store and sync inventory with offline and online sales.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it include reporting and analytics?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A7. Yes. Access 150+ reports covering sales, inventory, purchases, and customer insights.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I manage suppliers and purchase orders?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A8. Yes. Track purchase orders, suppliers, payments, and supply chain effectively.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can I run offers, discounts, and loyalty programs?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A9. Yes. The software includes promotions, festive discounts, and customer rewards.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is this software customizable for my hardware store?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A10. Yes. ChittorTech provides full customization for Management, inventory, AI Knowledge Base, multi-location, and e-commerce modules.
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </div>
</section>



{/* faq template section */}
    </>
  );
}
