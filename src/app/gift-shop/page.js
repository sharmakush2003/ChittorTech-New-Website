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
                <i className={`fa-solid fa-gift`}></i> Gift Shop Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Gift Shop Billing & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage unique SKUs, seasonal inventory, and customer gifting with ease.
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
                <i className={`fa-solid fa-gift`}></i>
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
         {/* Fast & Hassle-Free Billing */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Automated Stock Management</h3>
               <p>Stay on top of fast-selling products, track inventory in real-time, and avoid stockouts even during festive seasons.</p>
               <ul>
                  <li>Barcode & Label Generator</li>
                  <li>Product Images for Stock Catalog</li>
                  <li>Multi-Price Management</li>
                  <li>Real-Time Stock Alerts</li>
               </ul>
            </div>
         </div>
         {/* Smart Inventory Management */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3>Customer-Centric AI Knowledge Base</h3>
               <p>Build a loyal customer base with AI Knowledge Base features, customer segmentation, and personalized engagement tools.</p>
               <ul>
                     <li>Customer Profiles & Segmentation</li>
                     <li>Gift Vouchers & Loyalty Points</li>
                     <li>Birthday/Anniversary Promotions</li>

               </ul>
            </div>
         </div>
         {/* Advanced AI Knowledge Base & Customer Engagement */}
         <div className="col-md-4 col-sm-6">
            <div className="key-box">
               <h3> Paperless Billing</h3>
               <p>Generate digital invoices, manage discounts, offers, and loyalty points while ensuring GST compliance. Accept multiple payment methods including UPI and card payments.</p>
               <ul>
                  <li>Digital Invoices on WhatsApp</li>
                  <li>Error-Free GST-Compliant Billing</li>
                  <li>Modern mPOS</li>
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
               <h2>Feature-Rich Gift  <span>Shop Software</span> </h2>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">
                  {/* Feature 1: OCR */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe1.png" alt="OCR" className="img-fluid mb-3" />
                                 <h4>Point of Sale (POS) System</h4>
                                 <p>Accept multiple payment modes, integrate mobile Management, and accelerate checkout processes.</p>
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
                                 <img src="/assets/images/fe2.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                                 <h4>Stock Management</h4>
                                 <p>Manage in-store and warehouse inventory, track stock levels, and automate reorder alerts.</p>
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
                                 <img src="/assets/images/fe3.png" alt="Inventory Management" className="img-fluid mb-3" />
                                 <h4>Billing & Invoice Management</h4>
                                 <p>Create GST-compliant invoices with discounts, offers, and loyalty point integration.</p>
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
                                 <img src="/assets/images/fe4.png" alt="V-Pay" className="img-fluid mb-3" />
                                 <h4>Card Swipe & UPI Integration</h4>
                                 <p>Enable payments via cards, UPI, or wallets for faster, hassle-free checkouts.</p>
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
                                 <h4>Label & Barcode Generator</h4>
                                 <p>Generate barcodes and labels for products to simplify billing and inventory tracking.</p>
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
                                 <p>Send invoices, promotions, and event reminders directly to customers’ WhatsApp.</p>
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
                                 <h4>Loyalty & Membership Points</h4>
                                 <p>Run loyalty campaigns, reward repeat customers, and track memberships.</p>
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
                                 <h4>Event Reminders</h4>
                                 <p>Send reminders for birthdays, anniversaries, or other special occasions to boost repeat sales.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 9: Image-Based Management */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe8.png" alt="Image-Based Management" className="img-fluid mb-3" />
                                 <h4>Offers & Discount Management</h4>
                                 <p>Easily create promotional vouchers, coupon codes, and seasonal discounts.</p>
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
                                 <h4>Reporting & Analytics</h4>
                                 <p>Access 150+ reports, view analytics for sales, stock, and customer behavior on an interactive dashboard.</p>
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
                                 <h4>Customer Feedback & Reviews</h4>
                                 <p>Collect feedback and ratings directly from invoices to improve service.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Feature 12: Advanced Management System */}
                  <div className="col-md-4 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe11.png" alt="Advanced Management System" className="img-fluid mb-3" />
                                 <h4>Online Store Management</h4>
                                 <p>Create an online gift store or integrate with Shopify and WooCommerce for omnichannel sales.</p>
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
         <h2>💰 Pricing &amp; Plans</h2>
      </div>
      <div className="row justify-content-center">
         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-shop"></i>
                  </div>
                  <h3> Basic Plan – Small Gift Shops</h3>
                  <div className="price">💳 ₹2,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Smart Billing &amp; Billing</li>
                  <li>✔ Basic Inventory Management &amp; Stock Alerts</li>
                  <li>✔ Digital GST-Compliant Invoices</li>
                  <li>✔ WhatsApp Notifications</li>
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
                  <h3> Standard Plan – Growing Gift Shops</h3>
                  <div className="price">💳 ₹5,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Customer Segmentation &amp; AI Knowledge Base Features</li>
                  <li>✔ Loyalty &amp; Membership Management</li>
                  <li>✔ Multi-Price &amp; Barcode Management</li>
                  <li>✔ Online Store Integration</li>
                  <li>✔ Advanced Reports &amp; Analytics</li>
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
                  <h3> Premium Plan – Multi-Branch &amp; Franchise Owners</h3>
                  <div className="price">💳 Custom Pricing</div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database &amp; Event Reminders</li>
                  <li>✔ Centralized Accounting &amp; Stock Control</li>
                  <li>✔ Advanced Analytics &amp; Dedicated Support</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="row justify-content-center gy-4">
         {/* Fast & Hassle-Free Billing */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Handle Multiple Branches</h3>
               <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet</p>
            </div>
         </div>
         {/* Smart Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Stock Transfer & Request</h3>
               <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
            </div>
         </div>
         {/* Advanced AI Knowledge Base & Customer Engagement */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Central Reporting & Analytics</h3>
               <p>Get real-time, consolidated reports on a single dashboard. Track sales, stock, and performance across all your garment stores for better decision-making.</p>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> Centralized Managemen</h3>
               <p>Control every branch of your garment store chain from one platform. Manage billing, sales, inventory, and operations in a unified system.</p>
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
                  <img src="/assets/images/img263.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Complete Store Management from Management to Inventory: Everything  <span>Covered in One Solution</span> </h2>
               <p>Our integrated Gift Shop AI Support Chatbot software from ChittorTech has everything your store needs to run smoothly and efficiently.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful Management Solution</li>
                  <li>Manage Multiple Stores Anywhere, Anytime</li>
                  <li>Organize Your Inventory and Barcodes</li>
                  <li>Support Multiple Payment Modes</li>
                  <li>Generate Reports to Improve Forecasting and Analytics</li>
                  <li>Launch Your Online Store Easily</li>
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
                     <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Gift Shop - platforms1" /> </figure>
                     <h3>4X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Gift Shop - platforms2" /> </figure>
                     <h3>120+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Gift Shop - platforms3" /> </figure>
                     <h3>90% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Gift Shop - platforms4" /> </figure>
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
                  <img src="/assets/images/img264.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2> Why ChittorTech? <span>Solutions?</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Client Satisfaction :</strong> Our customers are our brand ambassadors. Thousands of happy clients trust us for top-end services.</li>

                  <li><strong>Prompt Support :</strong> Experience superb customer service with our dedicated support team.</li>

                  <li><strong>Training & Implementation :</strong> Get full training to operate the software like a pro, with smooth implementation at no extra cost.</li>

                  <li><strong>Cloud-Based Gift-Store Software :</strong> Access your store dashboard anytime, anywhere with secure cloud data storage.</li>

                  <li><strong>Proven Experience :</strong> Benefit from years of expertise in engineering software solutions for retail businesses.</li>

                  <li><strong>User-Friendly Design :</strong> Our solutions follow an “anyone can use” philosophy, making them simple and intuitive.</li>

                  <li><strong>Affordable & Feature-Rich :</strong> Get the most comprehensive gift-store software at competitive prices.</li>
               </ul>
               <p> <strong>Grow your retail business now with ChittorTech!</strong> </p>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="manufacturing-key section-bg ">
   <div className="container">
      <div className="heading-wrap">
         <h2>How to Use ChittorTech <span>Gift Shop Software</span></h2>
      </div>
         <div className="row justify-content-center gy-4">
            {/* 01. Sign Up and Login */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>01. Sign Up and Login</h3>
                  <ul>
                     <li>Create an account with ChittorTech or log in if you already have one.</li>
                     <li>Set up your gift shop details, including store information, GST, and payment preferences.</li>
                  </ul>
               </div>
            </div>

            {/* 02. Add Products and Inventory */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>02. Add Products and Inventory</h3>
                  <ul>
                     <li>Upload all your gift items with details like SKU, price, and stock quantity.</li>
                     <li>Assign barcodes to products for easy tracking and faster billing.</li>
                  </ul>
               </div>
            </div>

            {/* 03. Manage Multiple Stores (Optional) */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>03. Manage Multiple Stores (Optional)</h3>
                  <ul>
                     <li>Connect multiple store locations in a single dashboard.</li>
                     <li>Track stock levels, sales, and transfers across stores in real time.</li>
                  </ul>
               </div>
            </div>

            {/* 04. Billing and Management */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>04. Billing and Management</h3>
                  <ul>
                     <li>Scan product barcodes to generate bills quickly.</li>
                     <li>Accept multiple payment modes (cash, card, UPI).</li>
                     <li>Print invoices or send them digitally to customers.</li>
                  </ul>
               </div>
            </div>

            {/* 05. Purchase and Vendor Management */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>05. Purchase and Vendor Management</h3>
                  <ul>
                     <li>Create purchase orders for suppliers.</li>
                     <li>Track deliveries and update stock automatically.</li>
                     <li>Monitor vendor performance to ensure timely restocking.</li>
                  </ul>
               </div>
            </div>

            {/* 06. Customer Management */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>06. Customer Management</h3>
                  <ul>
                     <li>Maintain customer records for repeat business.</li>
                     <li>Send automated purchase reminders or offers.</li>
                  </ul>
               </div>
            </div>

            {/* 07. Reporting and Analytics */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>07. Reporting and Analytics</h3>
                  <ul>
                     <li>Access sales reports, inventory summaries, and profit/loss statements.</li>
                     <li>Analyze trends to identify top-selling products and improve decisions.</li>
                  </ul>
               </div>
            </div>

            {/* 08. Online Store Integration */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>08. Online Store Integration</h3>
                  <ul>
                     <li>Launch your online store with synced inventory.</li>
                     <li>Expand your reach to customers beyond your physical store.</li>
                  </ul>
               </div>
            </div>

            {/* 09. Cloud Access Anywhere */}
            <div className="col-lg-4 col-md-6">
               <div className="key-box">
                  <h3>09. Cloud Access Anywhere</h3>
                  <ul>
                     <li>Manage your shop from anywhere using cloud-based access.</li>
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
                     <li>Use free demos and training sessions to get started confidently.</li>
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
               <h2>ChittorTech: A ‘Special Present’ for Smarter and Profitable Gift Store Retailing</h2>
               <p>We created ChittorTech to simplify your gift shop operations, reduce work-related worries, and keep your customers delighted!</p>
               <p>Gift shops are special places where people come to choose ‘happiness’ for their loved ones. Every gift item is priceless to your customers, and so should be their shopping experience—from browsing to checkout.</p>
               <p>ChittorTech frees gift shop owners from the hassle of managing inventory, accounts, billing, and returns, allowing you to focus entirely on catering to your customer’s needs and preferences. Showcase the best products, and leave the workflows and operations to us.</p>
               <p>From managing your online store to keeping your physical store customer-ready, ChittorTech provides all the features you need to run your gift shop like a pro.</p>
               <p>Eliminate all operational issues with our all-in-one gift store solution and give your customers an exceptional shopping experience.</p>
               <p>Our implementation team is always ready to assist with any queries or concerns you might have.</p>
               <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Avail your free demo today!</button>
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
                           1. What is ChittorTech Gift Shop Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A1. A cloud-based Billing &amp; AI & IT Solutions solution to manage billing, inventory, AI Knowledge Base, loyalty, and e-commerce for gift shops.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it track fast-selling products and stock alerts?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A2. Yes. The software provides real-time stock alerts and inventory tracking for top-selling products.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Is GST-compliant billing available?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A3. Yes. The software generates error-free GST-compliant invoices with integrated discounts and loyalty points.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage multiple branches with this software?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A4. Yes, the Premium Plan offers centralized multi-branch management.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support loyalty programs and membership points?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A5. Yes. You can run loyalty campaigns, reward repeat customers, and manage memberships.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I send invoices and promotions via WhatsApp?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A6. Absolutely. The software has WhatsApp integration for sending bills, discounts, and event reminders.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Can I create an online store with this software?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A7. Yes. You can create a custom online store or integrate with Shopify/WooCommerce.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Does it include reporting and analytics?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A8. Yes. Access 150+ reports on sales, inventory, customer behavior, and financials from an interactive dashboard.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can it manage event-based promotions and reminders?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A9. Yes. The software can send birthday, anniversary, and event-based reminders to customers.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can the software be customized for my gift shop?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A10. Yes. ChittorTech offers full customization for Management, inventory, AI Knowledge Base, e-commerce, and multi-branch features.
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
