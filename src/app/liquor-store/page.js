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
                <i className={`fa-solid fa-wine-bottle`}></i> Liquor Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Liquor Store Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Compliance-ready liquor store billing with brand, batch, and excise tracking.
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
                <i className={`fa-solid fa-wine-bottle`}></i>
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

         {/* Seamless Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Seamless Inventory Management</h3>
               <p>Manage liquor stock levels, track product turnover, and avoid overstocking or stockouts with our intelligent liquor store AI Assistant Software.</p>
               <ul>
                  <li>Product Variants & Categorization</li>
                  <li>Brand-Wise Stock Management</li>
                  <li>Automated Reorders & Alerts</li>
                  <li>Warehouse Management</li>
               </ul>
            </div>
         </div>

         {/* Automated Billing & POS */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Automated Billing & POS</h3>
               <p>Experience error-free billing with V-Pay, multiple payment options, and digital invoices.</p>
               <ul>
                  <li>GST-Compliant Billing & Tax Automation</li>
                  <li>Digital Bills & Cash Register Integration</li>
                  <li>Barcode Scanning for Faster Billing</li>
                  <li>Image-Based Management</li>
               </ul>
            </div>
         </div>

         {/* Customer-Centric AI Knowledge Base & Loyalty */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Customer-Centric AI Knowledge Base & Loyalty</h3>
               <p>Enhance customer engagement and boost repeat sales with built-in AI Knowledge Base, loyalty points, discount management, and age verification features.</p>
               <ul>
                  <li>Track Customer Interactions</li>
                  <li>Birthday & Anniversary Offers</li>
                  <li>Loyalty Points & Membership Management</li>
                  <li>Age Verification Compliance</li>
               </ul>
            </div>
         </div>

         {/* Integrated Accounting & Financial Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Integrated Accounting & Financial Management</h3>
               <p>Simplify financial operations with automatic ledger updates, GST returns, and expense tracking.</p>
               <ul>
                  <li>Integrated Accounting Module</li>
                  <li>Real-Time Sales & Expense Tracking</li>
                  <li>Stock-Wise Analysis & Profit Reports</li>
                  <li>OCR for Invoice Data Extraction</li>
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
               <h2>Advanced <span>Features for Liquor Stores</span></h2>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">

                  {/* Feature 1: WhatsApp Integration */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe1.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                 <h4>WhatsApp Integration</h4>
                                 <p>Share invoices, promotions, and alerts via WhatsApp to enhance customer engagement.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 2: Purchase Management */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe2.png" alt="Purchase Management" className="img-fluid mb-3" />
                                 <h4>Purchase Management</h4>
                                 <p>Track purchase bills, supplier orders, and inventory updates efficiently.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 3: Stock-Wise Analysis */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe3.png" alt="Stock-Wise Analysis" className="img-fluid mb-3" />
                                 <h4>Stock-Wise Analysis</h4>
                                 <p>Identify fast and slow-selling products, receive low-stock alerts, and optimize orders.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 4: V-Pay Integration */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe4.png" alt="V-Pay Integration" className="img-fluid mb-3" />
                                 <h4>V-Pay Integration</h4>
                                 <p>Enable quick and secure UPI payments for customers at the billing counter.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Feature 5: E-Commerce Integration */}
                  <div className="col-md-3 col-12 mb-4">
                     <div className="boxes flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/fe5.png" alt="E-Commerce Integration" className="img-fluid mb-3" />
                                 <h4>E-Commerce Integration</h4>
                                 <p>Option to create an online liquor store with real-time stock sync.</p>
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
                  <h3>Basic Plan – Small Liquor Stores</h3>
                  <div className="price">💳 ₹4,499 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ POS & Billing</li>
                  <li>✔ Basic Inventory Management</li>
                  <li>✔ GST-Compliant Digital Invoices</li>
                  <li>✔ Barcode Generator & Label Printing</li>
                  <li>✔ Basic Sales & Stock Reports</li>
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
                  <h3> Standard Plan – Growing Liquor Stores</h3>
                  <div className="price">💳 ₹8,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ AI Knowledge Base & Customer Segmentation</li>
                  <li>✔ Loyalty Programs & Discount Management</li>
                  <li>✔ Automated Reorders & Stock Alerts</li>
                  <li>✔ Warehouse Management</li>
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
                  <h3>Premium Plan – Multi-Branch Liquor Chains</h3>
                  <div className="price">💳 Custom Pricing</div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Loyalty Programs</li>
                  <li>✔ Integrated Accounting & GST Automation</li>
                  <li>✔ Online Store Integration & Payment Gateways</li>
                  <li>✔ Dedicated Support & Advanced Reporting</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>

<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="heading-wrap">
         <h2>Top Benefits of ChittorTech <span>Liquor Store Software</span></h2>
         <p>Explore the key benefits that make liquor store management smarter and easier.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. User-Friendly AI Knowledge Base */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. User-Friendly AI Knowledge Base</h3>
               <ul>
                  <li>Monitor customers’ buying history.</li>
                  <li>Offer discounts, coupons, loyalty points, and rewards.</li>
                  <li>Store customer contact details for notifications, invoices, and promotions.</li>
               </ul>
            </div>
         </div>

         {/* 02. Smart Inventory Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Smart Inventory Management</h3>
               <ul>
                  <li>Keep real-time records of all liquor products.</li>
                  <li>Receive alerts for low stock or out-of-stock items.</li>
                  <li>Use barcode scanning for fast and accurate stock updates.</li>
                  <li>Easily transfer stock between multiple store locations.</li>
               </ul>
            </div>
         </div>

         {/* 03. Supplier & Purchase Order Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Supplier & Purchase Order Management</h3>
               <ul>
                  <li>Create and manage purchase orders efficiently.</li>
                  <li>Handle supplier tasks across various liquor brands.</li>
                  <li>Connect products with suppliers to simplify restocking.</li>
               </ul>
            </div>
         </div>

         {/* 04. Accurate Billing & Faster Checkouts */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Accurate Billing & Faster Checkouts</h3>
               <ul>
                  <li>High-speed, GST-compliant billing.</li>
                  <li>Multiple payment integrations for smooth transactions.</li>
                  <li>Barcode scanning ensures precise billing and faster service.</li>
               </ul>
            </div>
         </div>

         {/* 05. Liquor Store Regulatory Compliance */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Liquor Store Regulatory Compliance</h3>
               <ul>
                  <li>Maintain accurate audit records for simplified tax processes.</li>
                  <li>Perform compulsory age verification before billing.</li>
                  <li>Generate regular and simplified GST reports.</li>
               </ul>
            </div>
         </div>

         {/* 06. Multi-Store & Multi-Location Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Multi-Store & Multi-Location Management</h3>
               <ul>
                  <li>Manage all stores from a single centralized dashboard.</li>
                  <li>Synchronize inventory, pricing, and customer data across all branches.</li>
                  <li>Monitor reports and analytics for each location.</li>
               </ul>
            </div>
         </div>

         {/* 07. Centralized Accounting */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Centralized Accounting</h3>
               <ul>
                  <li>Consolidate financial data and accounts from all stores into a single database.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>


<section className="why-choose-sec liquor-sec">
   <div className="container">
      <div className="row align-items-center">


         <div className="col-md-12 order-md-1">
            <div className="heading-wrap text-start">
               <h2>Manage Your <span>Liquor Store Operations</span> in a Single Bottle</h2>
               <p>Our liquor store software combines advanced modules, smart automation, and seamless integrations to give you everything you need to run your business smoothly and profitably.</p>
            </div>
            <div className="expertise-wrap liquor-wrap">
               <ul>
                  <li><strong>Powerful Management Solution</strong> – Speed up billing with barcode scanning and GST-compliant invoicing.</li>
                  <li><strong>Manage Multiple Stores Anywhere, Anytime</strong> – Connect and control multiple outlets from one centralized dashboard.</li>
                  <li><strong>Organize Your Inventory and Barcodes</strong> – Maintain accurate stock levels with real-time updates and barcode tracking.</li>
                  <li><strong>Support Multiple Payment Modes</strong> – Accept payments via cash, cards, UPI, or digital wallets for customer convenience.</li>
                  <li><strong>Generate Reports & Analytics</strong> – Track sales, stock, and branch performance to improve forecasting and profitability.</li>
                  <li><strong>Launch Your Online Store</strong> – Integrate your offline and online sales to maximize your reach and revenue.</li>
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
                     <h3>65+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="" /> </figure>
                     <h3>49% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="" /> </figure>
                     <h3>53% Reduction in Manual Errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="bridal-store-sec liquor-store-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="bridal-store liquor-store">
               <h2>Why ChittorTech?</h2>
               <p>ChittorTech liquor store software offers all the features a liquor store owner needs for easy and efficient business management. From inventory and billing to multi-store management, accounting, and customer tracking, our software simplifies every aspect of running your liquor store.</p>
               
               <h2>ChittorTech: An Automated and Profitable Solution for Liquor Store Retailing</h2>
               <p>Running a liquor store comes with multiple challenges—tracking inventory, staying updated with the latest products, providing multiple payment options, and managing omni-commerce platforms. ChittorTech’ cloud-based liquor store software automates these operations, reducing manual work and simplifying store management.</p>
               <p>Investing in liquor store AI Assistant Software is now a smart decision. Our reliable, liquor-specific AI Assistant Software comes with 24/7 support and tailored features designed for liquor retail operations.</p>
               
               <button  onClick={() => { window.location.href = "/contact-us"; }} className="cta-button">Avail your free demo today!</button>
            </div>
         </div>
      </div>
   </div>
</section>


<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>How to Use ChittorTech <span>Liquor Store AI Assistant Software</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. Sign Up and Login */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your existing credentials.</li>
                  <li>Set up your liquor store profile, GST information, and payment preferences.</li>
               </ul>
            </div>
         </div>

         {/* 02. Add Products and Inventory */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Add Products and Inventory</h3>
               <ul>
                  <li>Upload all liquor items with details like SKUs, variants, prices, and stock levels.</li>
                  <li>Assign barcodes for easy billing and inventory tracking.</li>
               </ul>
            </div>
         </div>

         {/* 03. Multi-Store Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Connect multiple store locations or branches to a single dashboard.</li>
                  <li>Track stock, sales, and transfers across all stores in real time.</li>
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
                  <li>Print or email invoices to customers instantly.</li>
               </ul>
            </div>
         </div>

         {/* 05. Stock Transfer & Requests */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Stock Transfer & Requests</h3>
               <ul>
                  <li>Easily transfer inventory between stores to maintain stock levels.</li>
                  <li>Request stock from other branches as needed.</li>
               </ul>
            </div>
         </div>

         {/* 06. Supplier & Purchase Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Supplier & Purchase Management</h3>
               <ul>
                  <li>Create and track purchase orders for suppliers.</li>
                  <li>Update inventory automatically upon receiving stock.</li>
                  <li>Manage supplier relationships efficiently.</li>
               </ul>
            </div>
         </div>

         {/* 07. Customer Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Customer Management</h3>
               <ul>
                  <li>Maintain a unified database of all customers across stores and online channels.</li>
                  <li>Track purchase history, send promotions, and manage loyalty programs.</li>
               </ul>
            </div>
         </div>

         {/* 08. Regulatory Compliance */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Regulatory Compliance</h3>
               <ul>
                  <li>Perform compulsory age verification before billing.</li>
                  <li>Maintain accurate audit records for taxes and GST reporting.</li>
               </ul>
            </div>
         </div>

         {/* 09. Reporting and Analytics */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>09. Reporting and Analytics</h3>
               <ul>
                  <li>Access detailed sales, inventory, and financial reports.</li>
                  <li>Monitor trends to make data-driven business decisions.</li>
               </ul>
            </div>
         </div>

         {/* 10. Online Store Integration */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>10. Online Store Integration</h3>
               <ul>
                  <li>Sync inventory with your e-commerce website or marketplace.</li>
                  <li>Manage online and offline sales from a single platform.</li>
               </ul>
            </div>
         </div>

         {/* 11. Cloud Access Anywhere */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>11. Cloud Access Anywhere</h3>
               <ul>
                  <li>Access your dashboard and data anytime, anywhere.</li>
                  <li>Manage your liquor store remotely with secure cloud-based access.</li>
               </ul>
            </div>
         </div>

         {/* 12. Support & Assistance */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>12. Support & Assistance</h3>
               <ul>
                  <li>Contact ChittorTech experts for guidance, training, or troubleshooting.</li>
                  <li>Use free demos to explore all features before full implementation.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>





{/* FAQ template section */}
<section className="faq-template">
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
                           1. What is ChittorTech Liquor Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A1. A cloud-based Management and AI & IT Solutions solution designed to manage billing, inventory, AI Knowledge Base, GST compliance, loyalty programs, and multi-store operations for liquor shops.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it manage multiple store locations?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A2. Yes, the Premium Plan allows centralized multi-store management with unified dashboards.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Is GST-compliant billing supported?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A3. Absolutely. Generate GST invoices, automated tax calculations, and E-Way bills for legal compliance.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I track inventory efficiently?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A4. Yes, with real-time stock monitoring, automated reorders, and brand-wise stock tracking.
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
                           A5. Yes. Accept UPI, debit/credit cards, digital wallets, and cash payments.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I run loyalty and discount programs?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A6. Yes, the software includes loyalty points, membership management, and discount offers.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it have WhatsApp integration?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A7. Yes, you can send bills, offers, and notifications directly to customers via WhatsApp.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I analyze sales and stock reports?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A8. Yes, access 150+ detailed reports covering sales, stock, profits, and customer behavior.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Does it include age verification for customers?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A9. Yes, the software has built-in age verification to prevent underage sales.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can I customize this software for my liquor store?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A10. Yes. ChittorTech provides full customization for Management, inventory management, multi-location operations, and AI Knowledge Base modules.
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
