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
                <i className={`fa-solid fa-book-open`}></i> Bookstore Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Book Store Billing & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                ISBN-level inventory, fast billing, and supplier management for bookstores.
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
                <i className={`fa-solid fa-book-open`}></i>
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

   {/* Accurate Book Inventory Control */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Accurate Book Inventory Control</h3>
         <p>Keep shelves stocked at all times with real-time book tracking and smart alerts for fast-moving and slow-selling titles.</p>
         <ul>
            <li>Detailed stock tracking with reports</li>
            <li>Barcode and price label creation</li>
            <li>Automatic replenishment for top-selling books</li>
         </ul>
      </div>
   </div>

   {/* Smooth & Reliable Billing Experience */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Smooth & Reliable Billing Experience</h3>
         <p>Create tax-ready invoices instantly, send them digitally, and offer flexible payment options for every customer.</p>
         <ul>
            <li>High-accuracy billing with zero errors</li>
            <li>Share invoices directly on mobile devices</li>
            <li>Support for UPI, cards, and digital payments</li>
         </ul>
      </div>
   </div>

   {/* Intelligent Customer Management */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Intelligent Customer Management</h3>
         <p>Build stronger relationships with readers using a smart AI Knowledge Base system that manages customer details, rewards, and promotions in one place.</p>
         <ul>
            <li>Loyalty and reward point tracking</li>
            <li>Centralized customer records</li>
            <li>Easy control of discounts and offers</li>
         </ul>
      </div>
   </div>

   {/* Online Store & Unified Sales Channels */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Online Store & Unified Sales Channels</h3>
         <p>Sell books online with ease by launching your own store or connecting with popular e-commerce platforms—while keeping inventory updated everywhere.</p>
         <ul>
            <li>Personalized online bookstore setup</li>
            <li>Real-time sync between online and in-store stock</li>
            <li>Secure multi-payment support</li>
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
               <h2>Feature-Packed Software for Modern Bookstores</h2>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">
                  {/* 1. Add Customer Profiles */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok1.png" alt="Customer Profiles" className="img-fluid mb-3" />
                                <h4>Customer & POS Management</h4>
<ul>
   <li>Intelligent Management with built-in payment gateway support</li>
   <li>Mobile Management for book fairs, pop-ups, and exhibitions</li>
   <li>Smart customer segmentation and interaction tracking</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 2. Segment Customers */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok2.png" alt="Segment Customers" className="img-fluid mb-3" />
                                <h4>Billing & Checkout</h4>
<ul>
   <li>Quick GST-ready invoice generation</li>
   <li>Smooth handling of multiple billing counters</li>
   <li>Complete billing history and transaction records</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 3. Track Customer Interactions */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok3.png" alt="Track Interactions" className="img-fluid mb-3" />
                                <h4>Advanced Inventory Control</h4>
<ul>
   <li>Track books by author, genre, publisher, price, and edition</li>
   <li>Automatic replenishment for fast-moving titles</li>
   <li>Real-time inventory monitoring</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 4. Manage Appointments and Fittings */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok4.png" alt="Manage Appointments" className="img-fluid mb-3" />
                                <h4>Centralized Accounting</h4>
<ul>
   <li>Unified accounting for all branches</li>
   <li>Auto-managed profit & loss, ledgers, and financial summaries</li>
   <li>Purchase and sales history tracking</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 5. Purchase History */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok5.png" alt="Purchase History" className="img-fluid mb-3" />
                                <h4>Barcode & Label Management</h4>
<ul>
   <li>Create ISBN-based EAN-13 and UPC barcodes</li>
   <li>Print labels for book variants and editions</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 6. Loyalty & Membership Programs */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok6.png" alt="Loyalty Program" className="img-fluid mb-3" />
                                <h4>Customer Loyalty & Engagement</h4>
<ul>
   <li>Loyalty points and membership programs</li>
   <li>Personalized offers and promotional campaigns</li>
   <li>Customer feedback and review collection</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 7. Send Offers & Notifications */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok7.png" alt="Send Offers" className="img-fluid mb-3" />
                               <h4>Online Store & Omnichannel Sales</h4>
<ul>
   <li>Launch an online bookstore with Chittortech or connect to Shopify / WooCommerce</li>
   <li>Sync online and offline inventory automatically</li>
   <li>Support for multiple digital payment options</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 8. Generate Invoices & Receipts */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok8.png" alt="Invoices" className="img-fluid mb-3" />
                                 <h4>Tax & Compliance</h4>
<ul>
   <li>Automatic tax calculations</li>
   <li>GST reporting and return readiness</li>
   <li>Fully compliant invoice management</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 9. Analytics & Reports */}
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok9.png" alt="Analytics Reports" className="img-fluid mb-3" />
                                <h4>Reports & Business Insights</h4>
<ul>
   <li>Access 150+ MIS and analytical reports</li>
   <li>Interactive dashboards for smarter business decisions</li>
   <li>Stock audits and verification through mobile app</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ok10.png" alt="Analytics Reports" className="img-fluid mb-3" />
                               <h4>Customer Communication</h4>
<ul>
   <li>WhatsApp integration for offers, updates, and new arrivals</li>
   <li>Instant broadcast of bestsellers and promotions</li>
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
<section className="choose-chittortech-sec core-features-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="why-choose-grid">
               <div className="grid-item">
                  <h3>🏬 Handle Multiple Branches</h3>
                  <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet.</p>
               </div>
               <div className="grid-item">
                  <h3>🔄 Stock Transfer &amp; Request</h3>
                  <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
               </div>
               <div className="grid-item">
                  <h3>📊 Central Reporting &amp; Analytics</h3>
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
<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 order-md-2">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img219.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7 order-md-1">
   <div className="heading-wrap text-start">
      <h2>One Smart Platform for Every Stage of <span>Your Bookstore Business</span></h2>
      <p>
         Our all-in-one bookstore management system is designed to keep your operations
         smooth, organized, and profitable—both in-store and online.
      </p>
   </div>
   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>High-performance Management for fast and accurate billing</li>
         <li>Centralized control of multiple bookstore locations from anywhere</li>
         <li>Intelligent stock tracking with barcode support</li>
         <li>Flexible payment options for seamless checkout</li>
         <li>Insightful reports to guide planning and business decisions</li>
         <li>Easy setup and management of your online bookstore</li>
      </ul>
   </div>
</div>

      </div>
   </div>
</section>
<section className="industry new-cards pt-60">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="heading-wrap">
               <h2>How to Use ChittorTech for Your Bookstore</h2>
               <p>Our AI & IT Solutions for bookstores is designed to be simple, efficient, and practical so you can focus on serving readers while we handle the backend.</p>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">
                  {/* 1. Initial Setup */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to1.png" alt="Customer Profiles" className="img-fluid mb-3" />
                                 <h4>1. Initial Setup</h4>
                                 <ul className="mb20">
                                    <li>Enter bookstore details (branch, GST, staff login).</li>
                                    <li>Upload your catalog of books with ISBN, author, genre, publisher, edition, and price.</li>
                                    <li>Add stock levels and barcode data.</li>
                                 </ul>
                                 <p>👉 Example: Import your entire “Fiction” and “Educational” book catalog to the system at once.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 2. Billing & Checkout */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to2.png" alt="Segment Customers" className="img-fluid mb-3" />
                                 <h4>2. Billing & Checkout</h4>
                                 <ul className="mb20">
                                    <li>Scan product barcode or select garment from catalog.</li>
                                    <li>Add to bill and choose payment mode (Cash, Card, UPI, Wallet, etc.).</li>
                                    <li>Print bill OR share instantly via SMS/WhatsApp.</li>
                                    <li>Generate GST-compliant invoice automatically.</li>
                                 </ul>
                                 <p>👉 Example: A customer buys 2 shirts and 1 trouser → You scan, select UPI payment, and send the bill on WhatsApp in seconds.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 3. Inventory Management */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to3.png" alt="Track Interactions" className="img-fluid mb-3" />
                                 <h4>3. Inventory Management</h4>
                                 <ul className="mb20">
                                    <li>Track garment stock by brand, size, color, style, or category.</li>
                                    <li>Set minimum stock alerts for fast-moving items.</li>
                                    <li>Automate reorders for best-selling apparel.</li>
                                    <li>Use stock transfer between branches when needed.</li>
                                 </ul>
                                 <p>👉 Example: If Store A has extra jeans and Store B is out of stock → transfer stock in AI & IT Solutions with one click.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 4. Customer Management */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to4.png" alt="Manage Appointments" className="img-fluid mb-3" />
                                 <h4>4. Customer Management</h4>
                                 <ul className="mb20">
                                    <li>Maintain a single customer database across branches.</li>
                                    <li>Store purchase history & preferences.</li>
                                    <li>Send offers, discounts, and promotions via WhatsApp or SMS.</li>
                                    <li>Run loyalty programs and reward repeat customers.</li>
                                 </ul>
                                 <p>👉 Example: Send a 10% discount coupon to all customers who bought festive wear last Diwali.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 5. Accounting & Finance */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to5.png" alt="Purchase History" className="img-fluid mb-3" />
                                 <h4>5. Accounting & Finance</h4>
                                 <ul className="mb20">
                                    <li>Manage P&L, balance sheet, ledgers inbuilt into the software.</li>
                                    <li>Track daily sales, expenses, and profit margins.</li>
                                    <li>Export financial reports for GST filing and audits.</li>
                                 </ul>
                                 <p>👉 Example: At month-end, download GST report and directly use it for tax filing.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 6. Analytics & Reports */}
                  <div className="col-lg-4 col-md-6 col-6">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/to6.png" alt="Purchase History" className="img-fluid mb-3" />
                                 <h4>6. Analytics & Reports</h4>
                                 <ul className="mb20">
                                    <li>Access 150+ MIS reports for sales, stock, and customer insights.</li>
                                    <li>Identify best-selling styles & slow-moving products.</li>
                                    <li>Improve forecasting & purchase planning.</li>
                                 </ul>
                                 <p>👉 Example: AI & IT Solutions shows “Blue Denim Jeans” sold 120 units last month → reorder in advance to avoid stockouts.</p>
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
<section className="pricing-section py-5">
   <div className="container">
      <div className="heading-wrap text-center">
         <h2>Pricing & Plans – Choose Your <span>Bookstore Software Plan</span></h2>
         <p>Smart, simple, and affordable – pay only for what your bookstore needs.</p>
      </div>
      <div className="row justify-content-center">
         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-book"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>For small bookstores starting their digital journey.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Smart AI Support Chatbot (GST-Ready)</li>
                  <li>✔ Basic Inventory Management (ISBN, Genre, Author)</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ WhatsApp / SMS Billing</li>
                  <li>✔ Single Store Setup</li>
                  <li>✔ Basic Reports & Analytics</li>
                  <li>👉 Ideal for single-location bookstores.</li>
               </ul>
               <div className="price">₹1,999 <span>/month</span></div>
            </div>
         </div>
         {/* Standard Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card standard">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-primary">
                     <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Standard Plan</h3>
                  <p>For growing bookstores managing multiple categories & customers.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-Payment Modes (UPI, Cards, Wallets)</li>
                  <li>✔ Central Accounting & Ledger</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Discounts & Offers Management</li>
                  <li>✔ 150+ Advanced Reports & Analytics</li>
                  <li>✔ Shopify & WooCommerce Integration</li>
                  <li>👉 Perfect for expanding bookstores.</li>
               </ul>
               <div className="price">₹4,999 <span>/month</span></div>
            </div>
         </div>
         {/* Premium Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card premium">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                     <i className="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan</h3>
                  <p>The ultimate AI & IT Solutions solution for multi-store bookstore chains.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store AI & IT Solutions Dashboard</li>
                  <li>✔ Centralized Customer Database</li>
                  <li>✔ Stock Transfer & Inter-Branch Requests</li>
                  <li>✔ Warehouse Management & Restocking Alerts</li>
                  <li>✔ mPOS for Mobile & Exhibition Sales</li>
                  <li>✔ Dedicated Account Manager & 24/7 Priority Support</li>
                  <li>👉 Schedule a Free Demo to find the best plan for your bookstore.</li>
               </ul>
               <div className="price">Custom Pricing</div>
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
               <h2>ChittorTech – Scripting Real-Life Success Stories for Bookstore Retailers</h2>
               <p>We built ChittorTech to reduce your in-store workload, give you a platform for online sales, and help you keep customers falling in love with your bookstore!</p>
               <p>We understand that running a bookstore is no easy task. From arranging bookshelves, managing book records, handling daily sales, and maintaining rental registers to ordering new bestsellers, sending customer offers, tracking accounts, and filing GST returns — a bookstore has a lot to juggle</p>
            </div>
         </div>
      </div>
   </div>
</section>
{/*  faq template section */}
<section className="faq-template py-5">
   <div className="container">
      <div className="heading-wrap text-center">
         <h2> Frequently Asked Questions <span> (FAQ) </span> </h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">
                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What is ChittorTech Bookstore Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           It’s a cloud-based AI & IT Solutions & AI Assistant Software designed for bookstores to manage billing, inventory, AI Knowledge Base, multi-branch operations, and online sales — all in one place.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Is it user-friendly?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes. Chittortech is intuitive and easy to use, with quick onboarding and free staff training to help your bookstore get started smoothly.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I manage multiple bookstore branches?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes. With the Premium Plan, you can manage multiple branches, transfer stock between locations, access centralized reports, and maintain a unified customer database.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Is it GST-compliant?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely. All invoices are GST-ready, supporting automatic GST calculations, E-Invoicing, and seamless tax filing for your bookstore.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Can I sell books online using this software?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes. Chittortech integrates with Shopify and WooCommerce, or you can use its custom e-commerce platform to sync online and offline bookstore inventory in real time.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Does it support mobile Management (mPOS)?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes. You can run transactions on mobile devices at exhibitions, pop-up bookstores, or events using Chittortech’s mPOS functionality.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        How can it help me increase customer retention?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Chittortech helps retain customers through loyalty points, personalized offers, membership programs, and automated WhatsApp marketing campaigns.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What kind of reports can I generate?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           You’ll get 150+ reports including sales trends, top-selling books, stock alerts, profit & loss statements, and consolidated multi-branch analytics.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can I customize the software for my bookstore?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes. You can customize billing formats, promotions, loyalty programs, and inventory settings to perfectly match your bookstore’s workflow.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        What support is provided if I face issues?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           We offer 24/7 support via chat, email, and phone. Premium clients get priority service with a dedicated account manager to resolve issues quickly.
                        </div>
                     </div>
                  </div>
               </div>
               {/* /accordion */}
            </div>
         </div>
      </div>
   </div>
</section>
{/* faq template section */}
    </>
  );
}
