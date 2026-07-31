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
                <i className={`fa-solid fa-cash-register`}></i> AI Support Chatbot
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                AI Support Chatbots & Conversational Agents
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                24/7 automated customer support, lead qualification, and instant Q&A powered by custom AI.
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
                <i className={`fa-solid fa-cash-register`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
           
    {/* header */}
      
     

      {/* Solutions Holds section start here */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6 order-md-2">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img110.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6 order-md-1">
                      <div className="heading-wrap text-start mobile-a pro-list">
                          <h2>Addressing Every Retail Challenge with a Powerful <span>  AI Assistant Software</span> </h2>
                       </div>
                       <div className="expertise-wrap pro-list">
                           <h5>Common Retail Challenges We Solve</h5>
                           <ul>
                                 <li><strong>Billing & Payment Management</strong> <br />Slow checkout processes, billing errors, GST invoice mismatches, limited payment options, and frequent POS failures can frustrate both customers and staff. Traditional or manual billing methods often increase counter delays and reduce service efficiency.
A cloud-based AI Support Chatbot system ensures faster transactions, multiple payment integrations, and smooth, error-free billing operations.
</li>
                                 <li><strong>Accounting & Tax Compliance</strong> <br />Recording daily sales, managing expenses, preparing financial statements, and meeting GST compliance requirements can be complex and time-consuming. Without automation, accounting inaccuracies and compliance risks increase.
An integrated retail POS accounting solution automatically records transactions, simplifies tax calculations, and supports accurate GST reporting.
</li>
                                 <li><strong>Inventory Control & Stock Visibility</strong> <br /> Managing large product catalogs, multiple suppliers, and varying stock levels is a major challenge for growing retail stores. Issues like overstocking, dead stock, or sudden stockouts can impact profitability.
An intelligent POS inventory management system provides real-time stock updates, automated alerts, and efficient supplier tracking.
</li>
                                 <li><strong>Reports, Analytics & Business Insights</strong> <br />Retailers often struggle to generate meaningful insights from sales data, customer behavior, supplier performance, or inventory trends. Lack of accurate reports can slow business growth and planning.
A retail AI Assistant Software with advanced reporting and analytics delivers clear, actionable insights to support smarter business decisions.
</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      {/* Solutions Holds section start here */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img111.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a pro-list">
                          <h2>ChittorTech – Built to Match Your     <span>Retail Business Requirements</span> </h2>
                       </div>
                       <div className="expertise-wrap pro-list">
                           <h5>A Complete POS Solution for Every Retail Challenge</h5>
                           <ul>
                                <li><strong>Smooth & Effortless Billing</strong> <br />ChittorTech offers a powerful AI Support Chatbot software designed for retailers, SMEs, and wholesalers. Generate GST-compliant invoices, accept multiple payment modes, and ensure fast, stable billing that keeps checkout lines moving without interruptions.</li>

                                <li><strong>Advanced Inventory Management</strong>  <br />Our intelligent inventory management system helps you manage multiple products, variants, suppliers, and warehouse locations with ease. Real-time stock tracking and automated reports help you avoid stock shortages as well as excess inventory.</li>

                                <li><strong>Accurate Accounting & Compliance</strong>  <br /> With built-in accounting automation, every sale is recorded instantly. Generate detailed financial statements including P&L reports, balance sheets, and ensure smooth GST return filing and annual tax compliance—all without manual errors.</li>

                                <li><strong>Live Analytics & Business Reports</strong>  <br />Access structured, real-time reports covering customers, inventory movement, suppliers, sales trends, and demand forecasting. With 150+ customizable reports, ChittorTech empowers you to make smarter, data-backed business decisions.</li>

                               
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      <section id="features" className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>Simple & Powerful AI Support Chatbot <span>Software Features</span> </h2>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-3 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/fast1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>	Quick Checkout System</h4>
                                          <p>Speed up billing with a smooth and structured checkout flow.</p>
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
                                          <img src="/assets/images/fast2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>	Built-In Accounting</h4>
                                          <p> Automatic accounting updates linked with every transaction.</p>
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
                                          <img src="/assets/images/fast3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4>	Hassle-Free Returns & Exchanges</h4>
                                          <p>Manage product returns and replacements effortlessly.</p>
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
                                          <img src="/assets/images/fast4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4>Smart Product Organization</h4>
                                          <p> Sort and manage items by category, style, or variant.</p>
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
                                          <img src="/assets/images/fast5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>	Multiple Payment Options</h4>
                                          <p> Accept cash, cards, UPI, and digital wallets.</p>
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
                                          <img src="/assets/images/fast6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Offers & Discount Controls</h4>
                                          <p>Create and apply flexible pricing rules and promotions.</p>
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
                                          <img src="/assets/images/fast7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                          <h4>	Multi-Counter Billing</h4>
                                          <p>Handle high customer volume with multiple billing desks.</p>
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
                                          <img src="/assets/images/fast8.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                            	Weight-Based Billing Support
                                          </h4>
                                          <p>Auto-calculate prices using integrated weighing scales.</p>
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
                                          <img src="/assets/images/fast9.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Cash Drawer Integration
                                          </h4>
                                          <p> Enable secure and smooth cash handling at checkout.</p>
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
                                          <img src="/assets/images/fast10.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                             	GST-Ready Billing & E-Invoicing
                                          </h4>
                                          <p>Generate compliant GST invoices, e-invoices, and e-way bills.</p>
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
                                          <img src="/assets/images/fast11.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	WhatsApp Invoice Sharing
                                          </h4>
                                          <p>Send digital bills directly to customers instantly.</p>
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
                                          <img src="/assets/images/fast12.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                          	Customer Feedback Collection
                                          </h4>
                                          <p> Capture feedback digitally at the point of sale.</p>
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
                                          <img src="/assets/images/fast13.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Online & In-Store Order Management
                                          </h4>
                                          <p>Manage all orders from one centralized system.</p>
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
                                          <img src="/assets/images/fast14.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Custom Invoices & Payment Alerts
                                          </h4>
                                          <p>Personalize billing formats and automate reminders.</p>
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
                                          <img src="/assets/images/fast15.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                            Mobile POS & Self-Checkout
                                          </h4>
                                          <p>Support handheld billing and self-service kiosks.</p>
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
                                          <img src="/assets/images/fast16.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Payment Gateway Integration
                                          </h4>
                                          <p>Connect with secure gateways for online transactions.</p>
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
                                          <img src="/assets/images/fast17.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Barcode & Image-Based Billing
                                          </h4>
                                          <p>Reduce errors with quick scanning and visual product selection.</p>
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
                                          <img src="/assets/images/fast18.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                          <h4>
                                           	Customer History & Credit Notes
                                          </h4>
                                          <p>Track purchases and manage refunds smoothly.</p>
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

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-12">
                          <div className="clothing-stores-text">
                              <h2 className="text-center">How ChittorTech POS Simplifies Your Retail Operations</h2>
                              <p>ChittorTech POS brings all your store activities into one smart system—covering billing, stock control, accounts, customer management, and online sales.</p>
                              <div className="ai-solutions-item-wrap inventory-wrap">
                                 <div className="ai-solutions-item">
                                     <h4>1. Create Tax-Ready Invoices</h4>
                                     <p>Generate accurate GST-compliant bills instantly with support for multiple payment methods.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>2. Control Stock in Real Time</h4>
                                     <p> Add products using scanners, receive low-stock notifications, and maintain optimal inventory levels.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>3. Automate Accounting Tasks</h4>
                                     <p>Sales data flows directly into accounts, automatically updating financial statements and reports.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>4. Build Strong Customer Relationships</h4>
                                     <p> Store customer details, track buying patterns, and manage loyalty rewards with ease.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>5.Handle Orders Seamlessly</h4>
                                     <p>Manage both walk-in and online orders from a single dashboard.</p>
                                 </div>
                                 <div className="ai-solutions-item">
                                     <h4>6.Track Performance with Live Reports</h4>
                                     <p>Access 150+ real-time reports to monitor sales, inventory, and overall business performance.</p>
                                 </div>
                             </div>
                          </div>
                      </div>
                  </div></div></section>

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="clothing-stores-text">
                              <h2>Key Advantages of ChittorTech POS</h2>
                              <ul>
                                 <li><strong>	Cloud-Powered Access:</strong> Manage your store operations securely from any location, at any time.</li>
                                 <li><strong>	Device-Friendly System:</strong> Runs smoothly on desktops, laptops, tablets, and POS terminals without hardware restrictions.</li>
                                 <li><strong>	Secure Data Protection:</strong>Your business data is safely stored in the cloud with zero risk of loss.</li>
                                 <li><strong>	Responsive Support Team:</strong> Get fast and reliable assistance whenever you need help.</li>
                                 <li><strong>	Easy Third-Party Integration:</strong>Connect effortlessly with payment services, delivery partners, and business tools.</li>
                              </ul>
                              <strong>Trusted by thousands of users – India’s most reliable retail AI Assistant Software.</strong>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img112.jpg" />
                              </figure>
                          </div>
                      </div>
                  </div>
               </div>
           
      </section>

      


      <section className="bridal-store-sec  pb-60">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                   <div className="bridal-store">
                      <h2>One of India’s Easiest AI Support Chatbot Solutions to Use</h2>
                      <p>ChittorTech delivers a cloud-powered POS system built for retail stores, supermarkets, and restaurants. From billing and stock control to customer management, accounting, and online order handling—everything runs smoothly from a single platform.</p>
                      <h5>Discover a simpler, smarter way to manage your business. Book a demo today. </h5>
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
                           <h2>Fast, Smart & Next-Gen Billing Experience</h2>
                           <ul>
                              <li><strong>	High-Speed Checkout –  </strong> Enable smooth and structured billing for quicker transactions at the counter.</li>

                              <li><strong>	Easy Returns & Exchanges– </strong> Manage refunds and replacements accurately with automated tracking.</li>

                              <li><strong>	GST-Ready Invoicing –</strong> Create tax-compliant bills with precise item-level GST calculations.</li>

                              <li><strong>	Custom Billing Formats – </strong> Design invoices, quotations, and estimates—and convert them into bills instantly.</li>

                              <li><strong>	Print & Digital Invoicing – </strong> Print bills in multiple formats and generate government-compliant e-invoices with ease.</li>

                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img113.jpg" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="clothing-stores-sec software-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="clothing-stores-img">
                        <figure>
                           <img src="/assets/images/img114.jpg" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="clothing-stores-text software-wrap specialized-box">
                        <h2>Customer-Centric POS Features</h2>
                        <ul>
                           <li><strong>	Rewards & Membership Management–</strong> Create, track, and manage loyalty programs to encourage repeat purchases.</li>

                           <li><strong>	Instant WhatsApp Billing–</strong> Share digital invoices and updates with customers instantly via WhatsApp.</li>

                           <li><strong>	Live Customer Feedback Collection –</strong> Capture feedback in real time to improve service quality and store experience.</li>

                           <li><strong>	Complete Customer Profiles –</strong> View visit history, recent purchases, favorite products, and reward balances to build stronger customer relationships.</li>
                        </ul>
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
                           <h2>Flexible Payment & Billing Capabilities</h2>
                           <ul>
                              <li><strong>	All Popular Payment Options –</strong> Accept cash, cards, UPI, digital wallets, and other digital payment methods.</li>

                              <li><strong>	Secure Payment Gateway Connectivity –</strong> Process online payments safely through trusted gateway integrations.</li>

                              <li><strong>	Payment-Wise Sales Tracking –</strong> View detailed sales reports by cash, card, UPI, and wallet transactions.</li>

                              <li><strong>	Smart Discounts & Bill Rounding –</strong> Apply flat or percentage discounts and automate bill round-off rules.</li>

                              <li><strong>	Automated Cash Drawer Management –</strong> Track cash flow accurately with integrated drawer control and reporting.</li>

                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img115.png" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section className="clothing-stores-sec software-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="clothing-stores-img">
                        <figure>
                           <img src="/assets/images/img116.jpg" />
                        </figure>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="clothing-stores-text software-wrap specialized-box">
                        <h2>Advanced Payment & Billing Flexibility</h2>
                        <ul>
                           <li><strong>	Wide Payment Acceptance–</strong>Receive payments through cash, cards, UPI, wallets, and other digital options.</li>

                           <li><strong>	Safe Payment Gateway Links –</strong>Enable secure online transactions using multiple integrated gateways.</li>

                           <li><strong>	Payment-Type Sales Insights –</strong> View clear sales breakdowns by cash, card, UPI, and wallet modes.</li>

                           <li><strong>	Dynamic Discounts & Bill Rounding –</strong> Apply flat or percentage offers and automate rounding as per store policy.</li>

                           <li><strong>	Smart Cash Handling System–</strong> Track cash balances and manage drawer activity seamlessly.</li>

                         
                        </ul>
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
                           <h2>Inventory Control & Actionable Business Insights</h2>
                           <ul>
                              <li><strong>	Advanced Stock Management–</strong> Handle large product catalogs, suppliers, and multiple storage locations with real-time stock alerts.</li>

                              <li><strong>	Smart Reports & Live Analytics–</strong>Track orders, payments, customers, inventory movement, and sales using flexible filters for deeper insights.</li>

                              <li><strong>	Credit Notes & Refund Handling–</strong> Process returns and refunds smoothly with compliant credit note management.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img117.jpg" />
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
                        <div className="heading-wrap ">
                            <h2>Core Features of Chittortech<span>Solutions AI Assistant Software</span> </h2>
                            <p>ChittorTech is an all-in-one POS platform built to handle complete retail operations—from billing and inventory to AI Knowledge Base, accounting, and analytics—through a single, unified system.</p>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center  gy-4">
                   {/* Simplified GST Compliance */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Powerful Customer Relationship Management</h3>
                           <p>Engage customers beyond the checkout counter with a smart AI Knowledge Base designed for retail growth:</p>
                          <ul>
    <li>Monitor buying patterns and customer preferences</li>
    <li>Improve repeat purchases and customer loyalty</li>
    <li>Enhance store ratings and customer feedback</li>
</ul>

                       </div>
                   </div>

                   {/* Real-Time Financial Reporting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>High-Speed & Accurate Billing</h3>
                           <p>Increase counter efficiency with modern billing tools:</p>
                           <ul>
    <li>Fast product lookup using smart search and shortcuts</li>
    <li>Barcode-enabled billing for error-free transactions</li>
    <li>Mobile POS for on-the-go billing</li>
    <li>GST-compliant invoices generated instantly</li>
</ul>

                       </div>
                   </div>

                   {/* Centralized Multi-Store Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Simple & Intuitive User Experience</h3>
                           <p>Designed for ease of use, the system offers smooth navigation and clear workflows—helping store staff and owners manage operations without training complexity.</p>
                       </div>
                   </div>

                   {/* Advanced Inventory Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Smart Business Reports & Insights</h3>
                           <p>Make data-driven decisions using real-time analytics:</p>
                        <ul>
    <li>Identify top-selling products and sales trends</li>
    <li>Understand customer demand patterns</li>
    <li>Access detailed reports to improve profitability</li>
</ul>

                       </div>
                   </div>

                   {/* Integrated Payment and Invoice Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Centralized Multi-Store Management</h3>
                           <p>Run multiple outlets effortlessly from one dashboard:</p>
                          <ul>
    <li>Unified inventory and sales visibility</li>
    <li>Central control over orders and store performance</li>
</ul>

                       </div>
                   </div>

                   {/* Mobile and Cloud-Based Access */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Mobile POS (mPOS) Capabilities</h3>
                           <p>Enable flexible billing using mobile devices:</p>
                           <ul>
    <li>Barcode scanning for faster checkouts</li>
    <li>Ideal for retail stores and restaurants</li>
</ul>

                       </div>
                   </div>

                   {/* Tally and Other Integrations */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Detailed Billing & Financial Reports</h3>
                           <ul>
    <li>Credit note summaries</li>
    <li>Amount-based billing reports</li>
    <li>Invoice registers</li>
    <li>Customer dues and outstanding balances</li>
    <li>Department-wise billing analysis</li>
</ul>

                       </div></div></div></div></section>

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Integration   <span>Partners</span> </h2>
                          <p>Seamless integration with:</p>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/platforms1.png" alt="" /> </figure>
                                <h3>E-commerce Platforms</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms2.png" alt="" /> </figure>
                                <h3>Communication & Marketing Tools</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms3.png" alt="" /> </figure>
                                <h3>Payment Solutions</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms4.png" alt="" /> </figure>
                                <h3>Business Applications</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms5.png" alt="" /> </figure>
                                <h3>Shipping & Logistics</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/platforms6.png" alt="" /> </figure>
                                <h3>E-Invoicing & Compliance platforms</h3>
                             </li>
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
                     <h2> Centralized Insights & Smart  <span> Alerts</span> </h2>
                  </div>
                  <div className="why-choose-grid textile-manufacturers-wrap">
                     <div className="grid-item">
                        <p>	Receive instant alerts on sales performance, stock levels, and product movement</p>
                     </div>
                     <div className="grid-item">
                        <p>	Monitor all stores and branches from a single, unified dashboard</p>
                     </div>
                     <div className="grid-item">
                        <p>	Use real-time data insights to scale your retail operations faster and smarter</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img118.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start mobile-a pro-list">
                          <h2>Real-Time Insights with Chittortech  <span>Soft Solutions AI Assistant Software</span> </h2>
                          <p>ChittorTech POS lets you monitor sales, inventory, and product performance instantly from a centralized dashboard. Receive timely alerts and detailed reports across all your stores and branches, helping you scale your retail business faster and smarter.</p>
                       </div>
                       <div className="expertise-wrap pro-list">
                           <h5>Why Choose ChittorTech POS?</h5>
                          <ul>
    <li>
        <strong>Multi-Store Management Anytime, Anywhere</strong><br />
        Control operations, track performance, and manage all branches from a single platform.
    </li>
    <li>
        <strong>Accurate Inventory & Barcode Tracking</strong><br />
        Keep stock levels updated and monitor product details with precision.
    </li>
    <li>
        <strong>Flexible Payment Handling</strong><br />
        Accept cash, cards, UPI, and digital payments seamlessly.
    </li>
    <li>
        <strong>Advanced Reporting & Analytics</strong><br />
        Access insightful sales and inventory reports to forecast trends and make data-driven decisions.
    </li>
    <li>
        <strong>Integrated Online Store</strong><br />
        Expand your reach with an e-commerce platform directly connected to your POS.
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
                          <h2> Business  <span>Impact:</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/41.png" alt="" /> </figure>
                                <h3>4X Revenue Growth Rate</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/42.png" alt="" /> </figure>
                                <h3>120+ Billing Hours Saved Per Month</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/43.png" alt="" /> </figure>
                                <h3>90% Faster Processing Time</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/43.png" alt="" /> </figure>
                                <h3>99% Decrease in Manual Errors</h3>
                             </li>
                          </ul>
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
    <h2>Why ChittorTech is India’s Top AI Support Chatbot Software</h2>
    <ul>
        <li>
            <strong>Seamless Integration</strong><br />
            Connect effortlessly with payment gateways, logistics partners, and other business tools for smooth, end-to-end operations.
        </li>
        <li>
            <strong>Anytime, Anywhere Access</strong><br />
            Manage your retail business from multiple devices, wherever you are, without restrictions.
        </li>
        <li>
            <strong>Expert Implementation & Support</strong><br />
            Our team guides you throughout setup and training, ensuring a hassle-free adoption of the software.
        </li>
        <li>
            <strong>Cloud-Based Efficiency</strong><br />
            Reduce errors, automate workflows, and maintain accurate inventory with secure cloud technology.
        </li>
        <li>
            <strong>Hardware-Free Operation</strong><br />
            Operate your POS system on any device—no specific hardware required.
        </li>
        <li>
            <strong>Reliable Data Security</strong><br />
            All your business information is safely stored in the cloud, eliminating the risk of data loss.
        </li>
        <li>
            <strong>Rapid Customer Support</strong><br />
            Receive timely assistance from our dedicated support team whenever you need help.
        </li>
        <li>
            <strong>Trusted by Retailers Across India</strong><br />
            Chosen by thousands of businesses, ChittorTech helps retailers manage billing, inventory, AI Knowledge Base, accounting, and more—making it one of India’s most trusted AI Assistant Software solutions.
        </li>
    </ul>
</div>

                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img119.png" />
                           </figure>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img120.jpg" />
                           </figure>
                       </div>
                   </div>
                   <div className="col-md-7">
                       <div className="clothing-stores-text software-wrap specialized-box">
    <h2>Step Into the Future of Retail with ChittorTech</h2>
    <p>
        Looking for an affordable, feature-packed AI Assistant Software built to simplify your retail business?
        ChittorTech delivers:
    </p>
    <ul>
        <li>
            <strong>Automated Billing</strong> – Replace manual processes with fast, accurate checkout.
        </li>
        <li>
            <strong>Barcode & Quick Scan Support</strong> – Speed up transactions and reduce errors.
        </li>
        <li>
            <strong>Comprehensive Inventory Management</strong> – Track products across multiple branches effortlessly.
        </li>
        <li>
            <strong>Seamless E-Commerce Integration</strong> – Manage online and offline orders from a single platform.
        </li>
        <li>
            <strong>GST Compliance & Financial Reporting</strong> – Simplify taxes and generate accurate reports instantly.
        </li>
    </ul>
    <p>
        Boost customer satisfaction, streamline store operations, and drive business growth with
        <strong>ChittorTech POS.</strong>
    </p>
</div>

                   </div>
               </div>
           </div>
      </section>

      <section className="faq-template">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                          <div className="heading-wrap text-center">
                              <h2>FAQs </h2>
                          </div>
                          <div className="accordion" id="faqAccordion">

                              {/* GST FAQ 1 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          What is AI Assistant Software?
                                      </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show"
                                      aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          AI Assistant Software (Point of Sale) is an application that provides businesses with billing, payment, inventory, AI Knowledge Base, and accounting solutions.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 2 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          How does AI Assistant Software work?
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse"
                                      aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          It allows you to generate bills, accept payments through integrated gateways, manage inventory, track customer interactions, and create financial reports.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 3 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          What are the benefits of ChittorTech AI Assistant Software?
                                      </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse"
                                      aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Boost efficiency, streamline operations, manage multiple stores, enhance customer experience, and maintain GST compliance.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 4 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                           Why choose ChittorTech over other POS providers?
                                      </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse"
                                      aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Cloud-based, easy-to-use, scalable, hardware-independent, and supported by a dedicated team of experts.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 5 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          Can I manage multiple stores with this AI Assistant Software?
                                      </button>
                                  </h2>
                                  <div id="collapseFive" className="accordion-collapse collapse"
                                      aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, multi-location management is included with centralized reporting.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 6 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                         Does ChittorTech AI Assistant Software accept different payment methods?
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse"
                                      aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, it supports cash, card, UPI, wallets, and more.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 7 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSeven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          Is it GST-compliant?
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" className="accordion-collapse collapse"
                                      aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes, our AI Assistant Software ensures all billing is GST-compliant.
                                      </div>
                                  </div>
                              </div>

                              {/* GST FAQ 8 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingEight">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                         Do you provide technical assistance after implementation?
                                      </button>
                                  </h2>
                                  <div id="collapseEight" className="accordion-collapse collapse"
                                      aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Absolutely. Our support team is available to help whenever you need assistance.
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
