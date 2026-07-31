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
                <i className={`fa-solid fa-shop`}></i> Minimart POS
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Minimart POS & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Perfect for small-to-mid-sized marts — fast billing, smart inventory, easy reporting.
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
                <i className={`fa-solid fa-shop`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
   
{/* header */}
{/* inner banner section start here  */}

{/* inner banner section end here  */}
<section className="manufacturing-key section-bg py-5">
   <div className="container">
      <div className="row justify-content-center gy-4">
         {/* Fast & Hassle-Free Billing */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Fast & Hassle-Free Billing</h3>
               <p>Generate bills instantly with a high-speed POS system. Accept multiple payment modes and stay GST-compliant for smooth checkouts.</p>
               <ul>
                  <li>GST-compliant invoicing</li>
                  <li>Cash, card, and UPI payment support</li>
                  <li>Image-based POS for quick product identification</li>
                  <li>E-invoicing & digital bill sharing</li>
               </ul>
            </div>
         </div>
         {/* Smart Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Smart Inventory Management</h3>
               <p>Keep your store organized and avoid stock issues with real-time inventory tracking and automated alerts.</p>
               <ul>
                  <li>Barcode & label generation (EAN13 supported)</li>
                  <li>Categorize products by type, brand, and variant</li>
                  <li>Automated stock notifications & reorder alerts</li>
                  <li>OCR invoice scanning for accurate data entry</li>
               </ul>
            </div>
         </div>
         {/* Advanced AI Knowledge Base & Customer Engagement */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Advanced AI Knowledge Base & Customer Engagement</h3>
               <p>Build stronger relationships and boost loyalty with integrated AI Knowledge Base and promotional tools.</p>
               <ul>
                  <li>Loyalty points & redeemable rewards</li>
                  <li>Bulk WhatsApp promotions & notifications</li>
                  <li>Customer segmentation & behavior analysis</li>
                  <li>Personalized offers and birthday greetings</li>
               </ul>
            </div>
         </div>
         {/* Omnichannel Store Integration */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Omnichannel Store Integration</h3>
               <p>Manage both physical and online stores seamlessly with cloud-based features.</p>
               <ul>
                  <li>Sync inventory across online & offline stores</li>
                  <li>Handle home delivery and pickup orders efficiently</li>
                  <li>Multiple online payment options</li>
                  <li>Fully integrated e-commerce platform</li>
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
               <h2>Easily oversee all your minimart locations with our centralized billing software for  <span>efficient management across the board.</span> </h2>
               <p>Try our feature-rich Minimart software to tackle the challenges of modern minimart stores.</p>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">
                  {/* Feature 1: OCR */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/b2.png" alt="OCR" className="img-fluid mb-3" />
                                 <h4>OCR</h4>
                                 <p>ChittorTech’ OCR scans invoices, precisely extracts data, and reduces manual data entry for minimart store owners.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 2: Multiple Payment Gateways */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe1.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                                 <h4>Multiple Payment Gateways</h4>
                                 <p>Offer customers multiple payment options including cash, card, UPI, and digital wallets.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 3: Inventory Management */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe2.png" alt="Inventory Management" className="img-fluid mb-3" />
                                 <h4>Inventory Management</h4>
                                 <p>Track stocks accurately, categorize products and subproducts, and simplify your inventory operations.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 4: V-Pay */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe3.png" alt="V-Pay" className="img-fluid mb-3" />
                                 <h4>V-Pay</h4>
                                 <p>Simplify payments with instant QR codes for quick and hassle-free cashless transactions.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 5: Label/Barcode Generator */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe4.png" alt="Label/Barcode Generator" className="img-fluid mb-3" />
                                 <h4>Label/Barcode Generator</h4>
                                 <p>Generate labels and barcodes (EAN13) to streamline billing and speed up checkouts.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 6: WhatsApp Integration */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe5.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                 <h4>WhatsApp Integration</h4>
                                 <p>Stay connected with customers by sending updates, promotions, and reminders directly to their devices.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 7: Online Store */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe6.png" alt="Online Store" className="img-fluid mb-3" />
                                 <h4>Online Store</h4>
                                 <p>Enable omnichannel sales with an online store, letting customers purchase your products from anywhere.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 8: Loyalty/Membership Points */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe7.png" alt="Loyalty/Membership Points" className="img-fluid mb-3" />
                                 <h4>Loyalty/Membership Points</h4>
                                 <p>Reward loyal customers with points and memberships to boost retention and brand loyalty.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 9: Image-Based POS */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe8.png" alt="Image-Based POS" className="img-fluid mb-3" />
                                 <h4>Image-Based POS</h4>
                                 <p>Quickly identify products for faster checkouts with an intuitive image-based POS system.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 10: GST-Compliant Billing */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe9.png" alt="GST-Compliant Billing" className="img-fluid mb-3" />
                                 <h4>GST-Compliant Billing</h4>
                                 <p>Ensure all bills comply with GST regulations and streamline tax filing for your minimart.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 11: E-Invoicing */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe10.png" alt="E-Invoicing" className="img-fluid mb-3" />
                                 <h4>E-Invoicing</h4>
                                 <p>Share bills instantly via mobile or WhatsApp for convenient customer record-keeping.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 12: Advanced POS System */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe11.png" alt="Advanced POS System" className="img-fluid mb-3" />
                                 <h4>Advanced POS System</h4>
                                 <p>Handle all transactions effortlessly with our advanced POS, supporting multiple payment options.</p>
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
         <h2>Experience Now</h2>
      </div>
      <div className="row justify-content-center">
         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Minimarts</h3>
                  <p>Automated Billing & POS for small shops.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Automated Billing & POS</li>
                  <li>✔ Real-time Inventory Management</li>
                  <li>✔ GST-Compliant Invoices</li>
                  <li>✔ Low Stock Alerts</li>
               </ul>
               <div className="price">₹4,999 <span>/month</span></div>
            </div>
         </div>
         {/* Standard Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card standard">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-primary">
                     <i className="bi bi-cart4"></i>
                  </div>
                  <h3>Standard Plan – Medium Minimarts</h3>
                  <p>Everything in Basic, plus advanced features for medium stores.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Loyalty & Membership Points</li>
                  <li>✔ WhatsApp Integration</li>
                  <li>✔ Advanced Reporting & Analytics</li>
               </ul>
               <div className="price">₹9,999 <span>/month</span></div>
            </div>
         </div>
         {/* Premium Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card premium">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                     <i className="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Large Minimart Chains</h3>
                  <p>The ultimate solution for multi-branch stores.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Branch Management</li>
                  <li>✔ Omnichannel Online Store Integration</li>
                  <li>✔ OCR Invoice Scanning</li>
                  <li>✔ Dedicated Support & Custom Features</li>
               </ul>
               <div className="price">Custom Pricing</div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-12 col-9">
            <div className="heading-wrap text-center">
               <h2> Multiple Minimart Management</h2>
                
            </div>
         </div>
      </div>
      <div className="row justify-content-center gy-4">
         {/* Step 1 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>Unified Customer Database</h3>
               <p>Maintain a single customer database with all details in one place, including store locations and purchase history.</p>
            </div>
         </div>
         {/* Step 3 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>Seamless Stock Transfer & Requests</h3>
               <p>Easily request and transfer products between stores to maintain stock levels and meet customer demands in real-time.</p>
            </div>
         </div>
         {/* Step 4 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>Centralized Reporting & Analytics</h3>
               <p>View reports and analytics from all minimart stores on a single, consolidated dashboard for smarter business decisions.</p>
            </div>
         </div>
         {/* Step 5 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>Centralized Management</h3>
               <p>Manage all your minimart branches seamlessly from one centralized platform.</p>
            </div>
         </div>
         {/* Step 6 */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>Simplified Store Management</h3>
               <p>Operate multiple minimart stores efficiently using POS systems designed specifically for minimart operations</p>
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
                  <img src="/assets/images/img260.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2>One Smart POS for Every Minimart Requirement
Powerful tools to <span> improve efficiency, control inventory, and drive data-backed growth.</span> </h2>
               <p>ChittorTech’ Minimart AI Assistant Software provides everything needed to enhance store operations and make data-driven decisions:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS solution</li>
                  <li>Manage multiple stores anytime, anywhere</li>
                  <li>Inventory & barcode management</li>
                  <li>Multiple payment modes</li>
                  <li>Advanced reporting & analytics</li>
                  <li>Online store integration</li>
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
               <h2> Key  <span>Benefits</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="" /> </figure>
                     <h3>Revenue Growth: 2X increase in store efficiency</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="" /> </figure>
                     <h3>Time Savings: 60+ billing hours saved/month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="" /> </figure>
                     <h3>Faster Processing: 45% faster operations</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="" /> </figure>
                     <h3>Reduced Errors: 49% decrease in manual mistakes</h3>
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
                  <img src="/assets/images/img259.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2> Why Choose Chittortech  <span>Soft Solutions?</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Rated 4.8+ on Google:</strong> Highly trusted by 2K+ reviews</li>
                  <li><strong>Multi-Featured:</strong> Integrates POS with inventory, accounting, invoicing, and more</li>
                  <li><strong>Training & Implementation:</strong> Free guidance to ensure smooth software adoption</li>
                  <li><strong>Cloud-Based Access:</strong> Manage your minimart from anywhere, anytime</li>
                  <li><strong>User-Friendly Interface:</strong> Intuitive and visually appealing</li>
                  <li><strong>Device Compatibility:</strong> Works on tablets, mobiles, desktops, and laptops</li>
                  <li><strong>Data-Driven Insights:</strong> 150+ MIS reports for smarter business strategies</li>
                  <li><strong>Affordable Solutions:</strong> Competitive pricing with exclusive features</li>
                  <li><strong>Dedicated Support:</strong> 24/7 assistance via calls and email</li>
               </ul>
               <p>Join over Thousands satisfied clients who trust ChittorTech for efficient minimart management.</p>
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
               <h2>ChittorTech: Boost Your Minimart’s Profitability with Smarter Billing AI Assistant Software</h2>
               <p>A minimart is a compact supermarket selling groceries, snacks, personal care items, and other daily essentials. Managing day-to-day operations can be challenging, especially when it comes to ensuring fast, accurate billing and smooth store management.</p>
               <p>This is where ChittorTech’ POS system for minimarts helps store owners. Our software makes it easier to manage supply chain, accounting, billing, customer service, and online inventory—all from a single platform.</p>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>How to Use Chittortech <span>Minimart AI Assistant Software</span></h2>
         <p>Our Minimart AI Assistant Software is designed to be easy, fast, and intuitive for store owners. Follow these simple steps to get started:</p>
      </div>
      <div className="row justify-content-center gy-4">
         {/* 01. Login & Setup */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Login & Setup</h3>
               <ul>
                  <li>Open the software on your desktop, tablet, or mobile.</li>
                  <li>Enter your store’s username & password.</li>
                  <li>Add store details (store name, GST number, logo, etc.).</li>
                  <li>Tip: If you have multiple branches, connect them during setup for centralized management.</li>
               </ul>
            </div>
         </div>
         {/* 02. Add Products & Inventory */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Add Products & Inventory</h3>
               <ul>
                  <li>Go to the Inventory Module.</li>
                  <li>Add products with details like name, category, brand, purchase price, selling price, and stock quantity.</li>
                  <li>Generate barcodes/labels for each product using the barcode generator.</li>
                  <li>Example: Add "Amul Butter – 500g" with stock quantity 50, set selling price ₹250, and generate barcode.</li>
               </ul>
            </div>
         </div>
         {/* 03. Billing & Checkout */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Billing & Checkout</h3>
               <ul>
                  <li>Scan product barcodes or use image-based POS for quick product identification.</li>
                  <li>The system automatically applies GST & discounts.</li>
                  <li>Accept payments via cash, UPI, card, or wallets.</li>
                  <li>Share bills via print, SMS, or WhatsApp.</li>
                  <li>Example: A customer buys 2 dairy products and pays via UPI → Generate invoice → Send e-bill to WhatsApp.</li>
               </ul>
            </div>
         </div>
         {/* 04. Manage Customers */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Manage Customers</h3>
               <ul>
                  <li>Store customer details in the Customer Database.</li>
                  <li>Launch loyalty programs (points, discounts, memberships).</li>
                  <li>Send promotional offers, new arrivals, and reminders via WhatsApp integration.</li>
                  <li>Example: Add customer “Rahul Sharma” with phone number → System tracks his purchase history → Send him a “20% OFF on snacks” offer via WhatsApp.</li>
               </ul>
            </div>
         </div>
         {/* 05. Stock Replenishment & Transfers */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Stock Replenishment & Transfers</h3>
               <ul>
                  <li>Get low-stock alerts for fast-moving products.</li>
                  <li>Place reorders directly from suppliers.</li>
                  <li>For multiple branches, request or transfer stock between stores.</li>
               </ul>
            </div>
         </div>
         {/* 06. Reports & Analytics */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Reports & Analytics</h3>
               <ul>
                  <li>Access 150+ MIS reports for sales, expenses, inventory, and customer behavior.</li>
                  <li>Use dashboards & graphs to analyze performance.</li>
                  <li>Forecast demand for upcoming festive or seasonal sales.</li>
                  <li>Example: Check daily sales report → See that snacks & cold drinks sold the most → Plan bulk purchase for next week.</li>
               </ul>
            </div>
         </div>
         {/* 07. Online Store Integration */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Online Store Integration</h3>
               <ul>
                  <li>Connect your minimart to an online store.</li>
                  <li>Sync inventory between offline & online sales.</li>
                  <li>Manage orders, deliveries, and returns from one platform.</li>
               </ul>
            </div>
         </div>
         {/* 08. Continuous Support */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Continuous Support</h3>
               <ul>
                  <li>Get 24/7 expert support for setup, training, and troubleshooting.</li>
                  <li>Free updates & training provided.</li>
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
                        What is ChittorTech Minimart Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A cloud-based POS and inventory system to manage billing, stock, AI Knowledge Base, accounting, and online orders for Minimart stores.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Does it support GST-compliant billing?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, all bills are GST-compliant, and you can directly file GST returns from the system.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I manage loyalty programs and promotions?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely! The software allows loyalty points, membership rewards, and WhatsApp promotions for customer retention.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Can I create an online Minimart store?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the omnichannel feature allows you to run an online store with inventory synchronization.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Does it support multiple payment methods?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, customers can pay via cash, card, UPI, V-Pay QR codes, or other integrated gateways.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Can I track fast and slow-selling items?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software provides stock alerts and analytics for better inventory planning.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Is the software suitable for multi-branch Minimarts?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the Premium Plan includes multi-branch management with centralized monitoring.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        Does it have mobile POS capabilities?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the system supports mobile POS, allowing staff to bill anywhere in the store.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can I automate stock reorders?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, it has automated reordering and notifications to avoid out-of-stock situations.
                        </div>
                     </div>
                  </div>
                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        Is the software customizable for my Minimart?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, ChittorTech offers full customization for POS, AI Knowledge Base, inventory, accounting, and e-commerce integration.
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
