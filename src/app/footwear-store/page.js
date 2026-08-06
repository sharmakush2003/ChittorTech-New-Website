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
      <section style={{ background: 'linear-gradient(135deg, #0c1a2e 0%, #92400e 55%, #b45309 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-socks`}></i> Footwear & Shoe Retail Tech
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Shoe Store & Footwear Chain Billing Platform
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Step into smarter operations — manage size-wise inventory, brand-level pricing, multi-outlet stock transfers, and GST billing for your footwear business all from a single platform.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Start Free Trial
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Speak to an Expert
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className={`fa-solid fa-socks`}></i>
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
                     <div className="heading-wrap">
                         <h2>Purpose-Built Footwear Management Tools by <span>ChittorTech</span></h2>
                     </div>
               <div className="row justify-content-center gy-4">
                   {/* Fast Checkout & GST Billing */}
                   <div className="col-md-4 col-sm-6">
                       <div className="key-box">
                           <h3>Rapid Checkout & GST Billing</h3>
                           <p>Process walk-in customers in seconds with ChittorTech's barcode-scan billing, automated GST calculation, and instant multi-mode payment collection.</p>
                           <ul>
                              <li>One-scan barcode invoicing</li>
                              <li>UPI, card & cash payment modes</li>
                              <li>Auto CGST/SGST split on bills</li>
                           </ul>
                       </div>
                   </div>

                   {/* Size-Pair Inventory Engine */}
                   <div className="col-md-4 col-sm-6">
                       <div className="key-box">
                           <h3>Size-Pair Inventory Engine</h3>
                           <p>Track your stock by brand, article number, size (UK 4–13), color, and material. Know exactly how many pairs of each SKU remain across every outlet.</p>
                           <ul>
                              <li>Article-wise & brand-wise stock view</li>
                              <li>Pair-level barcode & label printing</li>
                              <li>Low-pair alert & auto reorder</li>
                           </ul>
                       </div>
                   </div>

                   {/* Online + Walk-In Retail */}
                   <div className="col-md-4 col-sm-6">
                       <div className="key-box">
                           <h3>Walk-In & Online Channel Sync</h3>
                           <p>Sell footwear in your store and on your website simultaneously. ChittorTech keeps inventory synced across both channels so you never oversell a pair.</p>
                           <ul>
                              <li>Live stock sync across channels</li>
                              <li>E-commerce store integration</li>
                              <li>Unified order & return management</li>
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
                       <div className="expertise-img text-start">
                           <figure>
                              <img src="/assets/images/img215.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-7 order-md-1">
                      <div className="heading-wrap text-start">
                          <h2>Key  <span>Features</span> </h2>
                       </div>
                       <div className="expertise-wrap bridal-wrap">
                           <ul>
                              <li> <strong>Effortless Billing :</strong> Create invoices with a few clicks and share them instantly via SMS, WhatsApp, or print.</li>

                              <li> <strong>Inbuilt Accounting Modules :</strong> Keep your balance sheet, P&L, ledgers, and bookkeeping accurate with integrated accounting tools.</li>

                              <li> <strong>Organized Clothing Stock :</strong> Categorize and manage stock for Men, Women, Kids or by season (Winter, Summer) and style (Sports, Casual, Party).</li>

                              <li> <strong>Best-Selling Apparel Insights :</strong> Track top-selling products by brand, style, and color, and automate restocking for bestsellers.</li>
                              <li> <strong>Offers & Discount Management :</strong> Easily manage brand promotions, seasonal discounts, and loyalty offers.</li>

                              <li> <strong>Style-Wise Sorting :</strong> Know which designs are trending and discontinue outdated stock with style-based sorting.</li>

                              <li> <strong>WhatsApp Integration  :</strong> Engage with customers directly via WhatsApp for invoices, updates, and promotions.</li>

                              <li> <strong>GST-Ready Billing :</strong> Generate GST-compliant invoices with automated CGST and SGST calculations.</li>

                              <li> <strong>Multi-Counter Billing :</strong> Run multiple billing counters without long queues or delays.</li>

                              <li> <strong>Returns & Exchanges :</strong> Process returns and exchanges seamlessly with instant inventory updates.</li>

                              <li> <strong>Stock Verification :</strong> Verify inventory in real time with our mPOS-enabled stock verification feature.</li>

                              
                              <li> <strong>Real-Time Reports : Get access to 150+ MIS reports and actionable insights to make smarter business decisions.</strong></li>

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
                        <h2>Start Managing Your Business the Smarter Way – Without Overpaying</h2>
                        <p>A powerful, easy-to-use, and cost-effective solution designed to help your garment business operate efficiently and scale with confidence.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button"> Select the Plan That Fits You</button>
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
                          <h2> Manage Multiple Garment Store <span>Branches with Ease</span> </h2>
                          <p>Operate all your clothing outlet branches, stock, and customer data from one centralized dashboard.</p>
                           <ul>
                              <li><strong>Single Customer Database –</strong> Manage customer details across all locations in one place.</li>
                              <li><strong>Stock Transfer & Requests –</strong> Seamlessly move inventory between branches with minimal effort.</li>
                              <li><strong>Centralized Reporting & Analytics –</strong> Get consolidated business reports for all stores in real-time.</li>
                              <li><strong>Centralized Management –</strong> Control billing, sales, and operations of multiple outlets from one platform.</li>
                              <li><strong>Centralized Inventory Control –</strong> Access complete stock visibility across all branches instantly.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-6 order-md-1">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img216.jpg" />
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
    <h2>One Complete Software for Every Garment Store Operation</h2>
    <p>
        ChittorTech delivers an all-in-one garment Management and management system that brings every
        daily task—sales, stock, payments, and online selling—onto one smart platform.
    </p>
    <ul>
        <li>High-speed Management for smooth and accurate billing</li>
        <li>Centralized control of multiple outlets from any location</li>
        <li>Real-time inventory tracking with barcode support</li>
        <li>Support for all major payment options</li>
        <li>Intelligent reports with sales trends and future insights</li>
        <li>Fast and easy setup for online garment stores</li>
    </ul>
</div>

                   </div>
                   <div className="col-md-6">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img217.jpg" />
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
                  <div className="why-choose-grid">
                     <div className="grid-item">
                        <h3>🏬 Handle Multiple Branches</h3>
                        <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet.</p>
                     </div>
                     <div className="grid-item">
                        <h3>🔄 Stock Transfer & Request</h3>
                        <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
                     </div>
                     <div className="grid-item">
                        <h3>📊 Central Reporting & Analytics</h3>
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

     
      <section className="bridal-store-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>ChittorTech that Simplify Garment Store Management</h2>
                      <h5>An All-Inclusive Management Solution for Readymade Garment, Clothing & Fashion Stores</h5>
                      <p>Running a readymade garment or clothing store can be hectic. You’re constantly assisting customers, showcasing multiple garment options, generating bills, and offering different payment modes for a smooth checkout. Slow processes and outdated systems simply don’t work for modern apparel businesses.</p>
                      <p>What you need is a solution that keeps everything organized, speeds up billing, manages inventory, and ensures seamless operations. You need ChittorTech!</p>
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
                     <h2>How to Use ChittorTech Garment AI & IT Solutions</h2>
                     <p>Our AI & IT Solutions is designed to be user-friendly, fast, and practical for garment and apparel store owners. Here’s how you can use it effectively:</p>
                  </div>

                  <div className="desktop-industries">
                     <div className="row justify-content-center">

                        {/* 1. Add Customer Profiles */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/me1.png" alt="Customer Profiles" className="img-fluid mb-3" />
                                       <h4>1. Setup & Onboarding</h4>
                                       <ul className="mb20">
                                          <li>Install the software on your system or access it via cloud login.</li>
                                          <li>Add your store details (name, GST info, branch details).</li>
                                          <li>Import or enter your product catalog (with brand, size, color, style, price).</li>
                                          <li>Set up billing counters and user access for staff.</li>
                                       </ul>
                                       <p>👉 Example: If you own 3 apparel outlets, you can create all 3 branches in one dashboard and manage them centrally.</p>
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
                                       <img src="/assets/images/me2.png" alt="Segment Customers" className="img-fluid mb-3" />
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

                        {/* 3. Track Customer Interactions */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/me3.png" alt="Track Interactions" className="img-fluid mb-3" />
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

                        {/* 4. Manage Appointments and Fittings */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/me4.png" alt="Manage Appointments" className="img-fluid mb-3" />
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

                        {/* 5. Purchase History */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/me5.png" alt="Purchase History" className="img-fluid mb-3" />
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

                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/me6.png" alt="Purchase History" className="img-fluid mb-3" />
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

      <section className="clothing-stores-sec software-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-7 order-md-2">
                       <div className="clothing-stores-text software-wrap specialized-box">
                           <h2>Benefits for Customers Using AI & IT Solutions</h2>
                           <ul>
                              <li>Save time with faster billing.</li>
                              <li>Reduce manual errors.</li>
                              <li>Improve customer experience with smooth checkout & WhatsApp billing.</li>
                              <li>Increase sales by tracking top-selling apparel.</li>
                              <li>Get real-time visibility across all store branches.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5 order-md-1">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img104.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="pricing-section py-5">
        <div className="container">
          <div className="heading-wrap text-center">
            <h2>Pricing Plans – Choose What Fits Your <span>Footwear Store Best</span></h2>
            <p>Our footwear AI & IT Solutions is designed to scale with your business. Whether you run a single shop or manage a multi-store chain, we have a plan tailored to your needs.</p>
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
                  <p>Ideal for small footwear shops looking for essential tools.</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Smart AI Support Chatbot (GST-Compliant)</li>
                  <li>✔ Single Store Setup</li>
                  <li>✔ Manage Basic Inventory (Size, Color, Category)</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ WhatsApp / SMS Billing</li>
                  <li>✔ Basic Reports & Analytics</li>
                  <li>👉 Best for single-location footwear stores starting out.</li>
                </ul>
                <div className="price">₹1,999 <span>/month</span></div>
                <div className="price-alt">₹19,999 /year</div>
                <a href="#" className="btn btn-success mt-3">Get Started</a>
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
                  <p>Perfect for growing footwear retailers managing multiple categories.</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-Payment Modes (UPI, Cards, Wallets)</li>
                  <li>✔ Inbuilt Accounting Module (P&L, Balance Sheet, Ledgers)</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Offers & Discount Management</li>
                  <li>✔ WhatsApp Promotions & Customer Engagement</li>
                  <li>✔ 150+ Advanced Reports & Analytics</li>
                  <li>✔ Shopify & WooCommerce Integration</li>
                  <li>👉 Best for mid-sized footwear retailers expanding their reach.</li>
                </ul>
                <div className="price">₹4,999 <span>/month</span></div>
                <div className="price-alt">₹49,999 /year</div>
                <a href="#" className="btn btn-primary mt-3">Get Started</a>
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
                  <p>The ultimate AI & IT Solutions solution for multi-store chains and franchises.</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store Centralized AI & IT Solutions Dashboard</li>
                  <li>✔ Centralized Customer Database</li>
                  <li>✔ Stock Transfer & Inter-Branch Requests</li>
                  <li>✔ Warehouse & Real-Time Stock Management</li>
                  <li>✔ mPOS for Exhibitions, Fairs & Mobile Sales</li>
                  <li>✔ Advanced Analytics & Sales Forecasting</li>
                  <li>✔ Dedicated Account Manager & 24/7 Priority Support</li>
                  <li>👉 Ideal for large footwear chains & franchise networks.</li>
                </ul>
                <div className="price">Custom Pricing</div>
                <div className="price-alt">Contact Sales for Quote</div>
                <a href="#" className="btn btn-danger mt-3">Contact Sales</a>
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
                  What is ChittorTech Footwear Software?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  It’s a cloud-based AI & IT Solutions and AI Assistant Software designed for footwear retailers to manage billing, inventory, AI Knowledge Base, multi-store operations, and online sales efficiently.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Do I need technical skills to use this software?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  No. The software is user-friendly and intuitive, with quick onboarding and free staff training to get you started smoothly.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Can I manage multiple footwear stores from one system?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes. With the Premium Plan, you can manage multiple branches, transfer stock, access centralized reports, and maintain a unified customer database.
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
                  Absolutely. All invoices are GST-ready, supporting CGST/SGST calculations, E-Invoicing, and seamless tax filing.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  Can I sell online using this software?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes. Chittortech integrates with Shopify and WooCommerce, enabling real-time inventory sync between your retail and online footwear stores.
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  Does it work on mobiles and tablets?
                </button>
              </h2>
              <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes. It runs seamlessly on desktops, laptops, tablets, and mobiles. You can even use mPOS for mobile billing during exhibitions or fairs.
                </div>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading7">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                  How can it help me attract more customers?
                </button>
              </h2>
              <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Through loyalty programs, membership points, targeted discounts, and WhatsApp marketing campaigns, you can retain existing customers and bring in new buyers.
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
                  You’ll get 150+ detailed reports including sales trends, top-selling footwear, stock levels, profit & loss statements, and consolidated multi-store analytics.
                </div>
              </div>
            </div>

            {/* FAQ 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading9">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                  Can I customize the software for my store?
                </button>
              </h2>
              <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes. Chittortech allows customization of billing formats, loyalty schemes, and inventory settings to perfectly match your store’s workflow.
                </div>
              </div>
            </div>

            {/* FAQ 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading10">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                  What support is available if I face issues?
                </button>
              </h2>
              <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We offer 24/7 customer support through chat, email, and phone. Premium customers receive priority service with a dedicated account manager.
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
