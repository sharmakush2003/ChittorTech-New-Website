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
                <i className={`fa-solid fa-car-side`}></i> Toy Store POS
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Toy Store POS & Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Age-category inventory, fast billing, and supplier management for toy retailers.
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
                <i className={`fa-solid fa-car-side`}></i>
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

         {/* Advanced Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Advanced Inventory Management</h3>
               <p>Monitor fast-selling, slow-selling, and non-selling products in real-time and automate stock replenishments for uninterrupted operations.</p>
               <ul>
                  <li>Low Stock Alerts & Auto-Reorders</li>
                  <li>Multi-location stock management</li>
                  <li>Product categorization (sports type, equipment, wearables, age group)</li>
                  <li>Barcode & Label Generator</li>
               </ul>
            </div>
         </div>

         {/* Data Analytics & Reporting */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Data Analytics & Reporting</h3>
               <p>Make data-driven decisions with actionable insights and interactive dashboards.</p>
               <ul>
                  <li>Centralized sales monitoring</li>
                  <li>Detailed performance reports</li>
                  <li>Best and least-selling product analysis</li>
                  <li>Demand forecasting</li>
               </ul>
            </div>
         </div>

         {/* User-Friendly AI Knowledge Base */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3> User-Friendly AI Knowledge Base</h3>
               <p>Enhance customer relationships and drive loyalty with AI Knowledge Base tools and engagement features.</p>
               <ul>
                  <li>Customer segmentation (VIP, Regular, Lost, Risk)</li>
                  <li>Loyalty points and discounts management</li>
                  <li>Feedback and review collection</li>
                  <li>WhatsApp integration for direct communication</li>
               </ul>
            </div>
         </div>

         {/* Easy & Paperless Billing */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Easy & Paperless Billing</h3>
               <p>Provide fast, accurate, and error-free billing for a seamless checkout experience.</p>
               <ul>
                  <li>GST-compliant invoices</li>
                  <li>UPI and QR code payment integration</li>
                  <li>Image-based POS for fast product selection</li>
                  <li>Mobile invoice sharing via WhatsApp</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>

<section className="manufacturing-key section-bg ">
   <div className="container">
      <div className="heading-wrap">
         <h2>ChittorTech: <span>Toy Store POS System</span></h2>
         <p>Tailored Features for Toy & Comic Store Businesses. Run a successful toy store with features that boost efficiency, productivity, and customer satisfaction.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. Swift Toy Store POS */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Swift Toy Store POS</h3>
               <ul>
                  <li>Fast barcode scanning for toys and games with automated GST calculations.</li>
                  <li>Supports multiple payment gateways for smooth transactions.</li>
                  <li>Digital Bills: Send bills digitally via SMS.</li>
                  <li>Collect customer feedback and reviews through automated SMS links.</li>
               </ul>
            </div>
         </div>

         {/* 02. Multiple Payment Options */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Multiple Payment Options</h3>
               <ul>
                  <li>Accept payments via cash, UPI, digital wallets, or credit/debit cards.</li>
                  <li>No Queue Billing: Super-fast billing ensures no waiting lines, increasing speed and accuracy.</li>
               </ul>
            </div>
         </div>

         {/* 03. Smart Toy Inventory Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Smart Toy Inventory Management</h3>
               <ul>
                  <li>Real-time tracking for all toys, comics, and hobby items.</li>
                  <li>Easy product grouping and categorization.</li>
                  <li>Automated Reordering: Insights into fast-moving and slow-moving toys.</li>
                  <li>Automatically reorder popular items to prevent stockouts.</li>
               </ul>
            </div>
         </div>

         {/* 04. Product & Brand Categorization */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Product & Brand Categorization</h3>
               <ul>
                  <li>Organize by category (Action Figures, Board Games, Educational Toys) and age group (Toddlers, Kids, Teens).</li>
                  <li>Track inventory brand-wise (Funskool, Lego, Hotwheels, Barbie).</li>
               </ul>
            </div>
         </div>

         {/* 05. Supplier Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Supplier Management</h3>
               <ul>
                  <li>Maintain complete supplier records: contact info, transactions, contracts, and documents.</li>
               </ul>
            </div>
         </div>

         {/* 06. Omnichannel E-commerce */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Omnichannel E-commerce</h3>
               <ul>
                  <li>Sell online via your custom toy store or integrate with Shopify/WooCommerce.</li>
                  <li>Sync online and offline inventory for seamless management.</li>
               </ul>
            </div>
         </div>

         {/* 07. Discount & Label Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Discount & Label Management</h3>
               <ul>
                  <li>Apply flat or percentage-based discounts automatically.</li>
                  <li>Generate labels and barcodes for easy inventory tracking.</li>
               </ul>
            </div>
         </div>

         {/* 08. Customer Segmentation & Loyalty Programs */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Customer Segmentation & Loyalty Programs</h3>
               <ul>
                  <li>Target VIP, risk, lost, or regular customers with segmentation features.</li>
                  <li>Add or redeem loyalty and membership points during billing.</li>
               </ul>
            </div>
         </div>

         {/* 09. Warehouse Management & Stock Verification */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>09. Warehouse Management & Stock Verification</h3>
               <ul>
                  <li>Efficient warehouse operations with batch management.</li>
                  <li>App-based stock audits for compliance.</li>
               </ul>
            </div>
         </div>

         {/* 10. Inbuilt Accounting & Financial Reporting */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>10. Inbuilt Accounting & Financial Reporting</h3>
               <ul>
                  <li>Balance sheets, P&L statements, cash flow reports, GST returns, and e-invoicing.</li>
               </ul>
            </div>
         </div>

         {/* 11. Product-wise Remarks & Event Reminders */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>11. Product-wise Remarks & Event Reminders</h3>
               <ul>
                  <li>Update toy-specific notes like choking hazards or precautions.</li>
                  <li>Set reminders for customer birthdays and re-purchases.</li>
               </ul>
            </div>
         </div>

         {/* 12. WhatsApp Promotions & Demand Forecasting */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>12. WhatsApp Promotions & Demand Forecasting</h3>
               <ul>
                  <li>Promote new arrivals and offers on WhatsApp.</li>
                  <li>Forecast toy demand based on seasonal trends and sales analysis.</li>
               </ul>
            </div>
         </div>

         {/* 13. E-way Bills & Cash Register Tracking */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>13. E-way Bills & Cash Register Tracking</h3>
               <ul>
                  <li>Full compliance for bulk deliveries with E-way bill integration.</li>
                  <li>Track all cash transactions centrally.</li>
               </ul>
            </div>
         </div>

         {/* 14. mPOS & Real-time Reports */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>14. mPOS & Real-time Reports</h3>
               <ul>
                  <li>Mobile POS allows billing anywhere in the store.</li>
                  <li>Access over 150+ MIS reports for actionable insights.</li>
               </ul>
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
                  <h3>Basic Plan – Small Sports Shops</h3>
                  <div className="price">💳 ₹8,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ POS & Billing System</li>
                  <li>✔ Inventory Management with Alerts</li>
                  <li>✔ Basic AI Knowledge Base & Customer Segmentation</li>
                  <li>✔ GST-Compliant Invoices</li>
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
                  <h3>Standard Plan – Medium Retailers</h3>
                  <div className="price">💳 ₹16,999 <span>/month</span></div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-location Inventory Management</li>
                  <li>✔ Image-Based POS</li>
                  <li>✔ Loyalty Programs & Promotions</li>
                  <li>✔ Advanced Reporting & Analytics</li>
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
                  <h3>Premium Plan – Large Sports Store Networks</h3>
                  <div className="price">💳 Custom Pricing</div>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Omnichannel E-commerce Integration</li>
                  <li>✔ Demand Forecasting & Auto-Reorders</li>
                  <li>✔ Centralized Dashboard for Multi-Store Operations</li>
                  <li>✔ V-Pay & Instant UPI Transactions</li>
                  <li>✔ Dedicated Support & Custom Features</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>

<section className="manufacturing-key section-bg">
   <div className="container">
      <div className="heading-wrap">
         <h2>Top Benefits of <span>Chittortech Toy Store AI Assistant Software</span></h2>
         <p>Boost your toy store efficiency, productivity, and customer satisfaction with tailored features for toy, comic, and hobby businesses.</p>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. Toy Business Intelligence */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Toy Business Intelligence</h3>
               <ul>
                  <li>Access over 150 MIS reports to analyze toy store operations.</li>
                  <li>Customizable reports tailored to your toy store needs.</li>
                  <li>Dashboard visualization of key toy business metrics.</li>
                  <li>Make data-driven decisions based on toy market trends.</li>
               </ul>
            </div>
         </div>

         {/* 02. Faster & Error-free Billing */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Faster & Error-free Billing</h3>
               <ul>
                  <li>High-speed billing counters for little shoppers and parents.</li>
                  <li>Automated GST calculations for error-free billing.</li>
                  <li>Barcode scanning for quicker checkouts.</li>
                  <li>Multiple payment options for smooth customer experience.</li>
               </ul>
            </div>
         </div>

         {/* 03. Intelligent Inventory Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Intelligent Inventory Management</h3>
               <ul>
                  <li>Real-time monitoring of stock levels for toys, games, and SKUs.</li>
                  <li>Auto-reorder system to prevent stockouts of popular items.</li>
                  <li>Identify fast-moving and slow-moving products.</li>
                  <li>Organize toys into relevant categories for easy inventory management.</li>
               </ul>
            </div>
         </div>

         {/* 04. Toy Store Compliance Made Easy */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Toy Store Compliance Made Easy</h3>
               <ul>
                  <li>Up-to-date GST calculations for toys and games.</li>
                  <li>Simplified GST report generation.</li>
                  <li>Digital records for tax audits.</li>
                  <li>HSN code categorization for toy products.</li>
               </ul>
            </div>
         </div>

         {/* 05. Robust Supplier Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Robust Supplier Management</h3>
               <ul>
                  <li>Efficiently manage supplier relationships and contracts.</li>
                  <li>Centralized supplier contact database for all stores.</li>
                  <li>Visualize daily brand-wise and category-wise supplier activity.</li>
                  <li>Supplier-product mapping for faster procurement.</li>
               </ul>
            </div>
         </div>

         {/* 06. Playtime Financial Reporting */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Playtime Financial Reporting</h3>
               <ul>
                  <li>Detailed financial insights for toy store operations.</li>
                  <li>Profit margin calculations for every toy and game.</li>
                  <li>Cash flow analysis and forecasting for better planning.</li>
                  <li>Real-time Profit & Loss reports.</li>
               </ul>
            </div>
         </div>

         {/* 07. Multi-Store Toy Empire Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Multi-Store Toy Empire Management</h3>
               <ul>
                  <li>Unified system for multiple toy, comic, or hobby stores.</li>
                  <li>Synchronized inventory across all locations.</li>
                  <li>Consolidated reporting for your entire toy business empire.</li>
                  <li>Easy stock transfers between stores.</li>
               </ul>
            </div>
         </div>

         {/* 08. Easy Online Toy Store Setup */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Easy Online Toy Store Setup</h3>
               <ul>
                  <li>Hassle-free creation of a custom online toy store.</li>
                  <li>Synchronize inventory between physical and online stores.</li>
                  <li>Streamlined online order and delivery management.</li>
                  <li>Unified view of in-store and online sales.</li>
               </ul>
            </div>
         </div>

         {/* 09. Happy Little Customers */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>09. Happy Little Customers</h3>
               <ul>
                  <li>Track customer preferences for toys and games.</li>
                  <li>Customer segmentation for targeted marketing.</li>
                  <li>Reward systems with points and memberships.</li>
                  <li>Create vouchers and coupons for special promotions.</li>
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
                  <img src="/assets/images/img279.jpg" alt="Complete Toy Store Management" />
               </figure>
            </div>
         </div>

         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>Complete <span>Toy Store Management</span></h2>
               <p>Our Toy Store POS system covers everything from AI Support Chatbot to inventory, online store integration, and reporting:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS solution</li>
                  <li>Manage multiple stores anywhere, anytime</li>
                  <li>Inventory and barcode management</li>
                  <li>Multiple payment modes</li>
                  <li>Reports for forecasting and analytics</li>
                  <li>Launch online store easily</li>
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
               <h2> Impact for Your  <span>Business</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="" /> </figure>
                     <h3>4X Revenue growth rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="" /> </figure>
                     <h3>120+ Billing hours saved/month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="" /> </figure>
                     <h3>90% Faster processing time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="" /> </figure>
                     <h3>99% Decrease in manual errors</h3>
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
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img280.jpg" alt="Why use Chittortech Toy Store AI Assistant Software" />
               </figure>
            </div>
         </div>

         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2>Why use <span>Chittortech Toy Store AI Assistant Software?</span></h2>
               <p>Our all-in-one AI Assistant Software helps toy stores manage billing, inventory, multi-store operations, online sales, and reporting seamlessly:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>All-in-One Solution – From billing to inventory, multi-store management, online integration, and reporting, everything is handled in one centralized system.</li>
                  <li>Time-Saving – Automates repetitive tasks like billing, stock updates, and GST calculations, saving hours of manual work every day.</li>
                  <li>Error Reduction – Barcode scanning, automated GST, and inventory sync reduce human errors drastically.</li>
                  <li>Customer Engagement – Track customer preferences, manage loyalty points, and send promotions to build stronger relationships with buyers.</li>
                  <li>Multi-Store Management – Centralized dashboard allows managing multiple stores efficiently, including stock transfers and unified reporting.</li>
                  <li>Data-Driven Decisions – Access 150+ MIS reports and analytics to forecast demand, monitor sales, and optimize operations.</li>
                  <li>Online & Offline Integration – Sync physical store inventory with your online store to sell more without confusion.</li>
                  <li>Financial Control – Inbuilt accounting, profit/loss reports, GST filing, and e-invoicing give full control over finances.</li>
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
               <h2>ChittorTech: A TRUSTED TOY STORE MANAGEMENT SOFTWARE</h2>
               <p>The toy shop is a fun-filled, bright, colorful, and lively retail store. Kids feel amazed and thrilled while parents love to see the smiles on their kid's faces when they visit toy stores. Behind these toy displays, toy store owners work hard to manage inventory, displays, billing, accounts, suppliers, customer relations, and many other activities that can sometimes overwhelm even the most seasoned toy retailers.</p>
               <p>This is where ChittorTech’ toy store software becomes the perfect sidekick. The software handles everything from tracking best-selling toys to managing suppliers and customer relationships. It is a single solution for all challenges toy retailers face. From automated ordering for holidays or seasonal events to filing GST returns, the software helps retailers run their toy stores smartly and profitably.</p>
            </div>
         </div>
      </div>
   </div>
</section>




<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
         <h2>How to Use Toy Store AI Assistant Software: <span>Step-by-Step Guide for Efficient Store Management</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

         {/* 01. Login & Dashboard Overview */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>01. Login & Dashboard Overview</h3>
               <ul>
                  <li>Log in with your credentials.</li>
                  <li>The dashboard shows real-time sales, inventory levels, alerts, and MIS reports.</li>
                  <li>Customize the dashboard to see your most important metrics at a glance.</li>
               </ul>
            </div>
         </div>

         {/* 02. Add / Manage Inventory */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>02. Add / Manage Inventory</h3>
               <ul>
                  <li>Go to Inventory → Add New Product.</li>
                  <li>Enter toy details: name, SKU, category, age group, brand, and barcode.</li>
                  <li>Set pricing, GST, discounts, and stock levels.</li>
                  <li>Enable auto-reorder for fast-selling items.</li>
                  <li>For multi-store setups, sync inventory across all locations.</li>
               </ul>
            </div>
         </div>

         {/* 03. Billing / POS */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>03. Billing / POS</h3>
               <ul>
                  <li>Open POS → New Sale.</li>
                  <li>Scan toy barcode or search by name/SKU.</li>
                  <li>Add quantity and apply discounts if needed.</li>
                  <li>Select payment method: cash, UPI, card, or digital wallets.</li>
                  <li>Generate digital or printed bills instantly.</li>
                  <li>Loyalty points are automatically added or redeemed if applicable.</li>
               </ul>
            </div>
         </div>

         {/* 04. Manage Suppliers & Purchases */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>04. Manage Suppliers & Purchases</h3>
               <ul>
                  <li>Go to Suppliers → Add / Manage Supplier.</li>
                  <li>Track supplier contact info, purchase history, and contracts.</li>
                  <li>Generate purchase orders directly from low-stock alerts.</li>
                  <li>Map products to suppliers for easy reordering.</li>
               </ul>
            </div>
         </div>

         {/* 05. Customer Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>05. Customer Management</h3>
               <ul>
                  <li>Use the Unified Customer Database to track all customer info.</li>
                  <li>Record purchase history, preferences, loyalty points, and contact info.</li>
                  <li>Segment customers for targeted promotions or WhatsApp/SMS campaigns.</li>
               </ul>
            </div>
         </div>

         {/* 06. Multi-Store Management */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>06. Multi-Store Management</h3>
               <ul>
                  <li>Use the Central Dashboard to monitor all store locations.</li>
                  <li>Transfer stock between stores via Stock Transfer & Request.</li>
                  <li>Consolidate sales, inventory, and accounting data in one place.</li>
               </ul>
            </div>
         </div>

         {/* 07. Financial & Accounting */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>07. Financial & Accounting</h3>
               <ul>
                  <li>Access inbuilt accounting modules: P&L statements, cash flow, balance sheets.</li>
                  <li>File GST returns and generate E-invoices directly from the system.</li>
                  <li>Track daily, weekly, or monthly revenue and profitability per product or category.</li>
               </ul>
            </div>
         </div>

         {/* 08. Online Store & E-Commerce */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>08. Online Store & E-Commerce</h3>
               <ul>
                  <li>Sync physical store inventory with your online store (Shopify/WooCommerce).</li>
                  <li>Track online orders, manage deliveries, and update stock in real-time.</li>
               </ul>
            </div>
         </div>

         {/* 09. Reports & Analytics */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>09. Reports & Analytics</h3>
               <ul>
                  <li>Go to Reports → MIS / Analytics.</li>
                  <li>Access over 150+ pre-built reports.</li>
                  <li>Analyze sales trends, customer behavior, best-selling toys, slow movers, and forecast demand.</li>
               </ul>
            </div>
         </div>

         {/* 10. Promotions & Loyalty */}
         <div className="col-lg-4 col-md-6">
            <div className="key-box">
               <h3>10. Promotions & Loyalty</h3>
               <ul>
                  <li>Create vouchers, discounts, and loyalty campaigns.</li>
                  <li>Send promotional messages via SMS or WhatsApp to segmented customers.</li>
                  <li>Track redemption and engagement for each campaign.</li>
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
                           1. What is ChittorTech Sports Shop AI Assistant Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A1. A cloud-based AI Assistant Software for sports stores that centralizes billing, inventory, AI Knowledge Base, e-commerce, and financial reporting.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it handle multi-location inventory?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A2. Yes, it supports real-time stock updates, multi-location inventory, and automated reorders.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Does it generate GST-compliant invoices?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A3. Yes, all transactions are GST-compliant with automated tax calculations and digital invoices.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I offer online sales through the software?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A4. Yes, integrate with Shopify or WooCommerce to sync inventory and sell online.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support UPI and QR code payments?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A5. Absolutely. The software includes V-Pay, UPI integration, and multiple payment gateway options.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I manage customer loyalty programs?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A6. Yes, track loyalty points, membership, discounts, and targeted promotions.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it provide analytics and demand forecasting?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A7. Yes, access interactive dashboards, sales trends, best/least-selling products, and demand forecasts.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can invoices be shared digitally?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A8. Yes, send mobile invoices via WhatsApp or SMS for a paperless experience.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Is the software compatible with multiple devices?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A9. Yes, fully cloud-based and hardware-independent, accessible from any device.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can the software be customized for specific sports stores?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A10. Yes, ChittorTech offers full customization for POS, inventory, AI Knowledge Base, and e-commerce modules.
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
