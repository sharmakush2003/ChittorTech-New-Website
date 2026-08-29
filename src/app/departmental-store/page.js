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
                <i className={`fa-solid fa-store`}></i> Departmental Store
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Departmental Store Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage every department with centralized billing, stock, and reporting.
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
                <i className={`fa-solid fa-store`}></i>
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
         {/* Efficient Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Hassle-Free Inventory Management</h3>
               <p>Easily manage your store’s inventory with automated restocking, stock audits, and barcode generation. Stay on top of your stock levels and never run out of essential items.</p>
               <ul>
                  <li>Supply chain management</li>
                  <li>Product categorization</li>
                  <li>Stock alerts</li>
               </ul>
            </div>
         </div>
         {/* No-Hassle Billing */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Efficient Cashier Counters</h3>
               <p>Streamline billing at multiple counters with smart Management systems, GST-compliant invoices, and integrated payment gateways for a smooth checkout experience.</p>
               <ul>
                  <li>Smart Management</li>
                  <li>GST-integrated billing</li>
                  <li>Mobile invoice sharing</li>
               </ul>
            </div>
         </div>
         {/* Customer-Centric AI Knowledge Base */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Customer Engagement with Smart AI Knowledge Base</h3>
               <p>Enhance customer loyalty with integrated AI Knowledge Base features such as loyalty points, membership management, birthday wishes, and feedback collection.</p>
               <ul>
                  <li>Customer segmentation</li>
                  <li>Discount vouchers and coupons</li>
                  <li>Loyalty points management</li>
               </ul>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Omnichannel E-Commerce</h3>
               <p>Expand your store’s reach online. Build and manage your online store with seamless inventory synchronization, Shopify/WooCommerce integration, and integrated payment gateways.</p>
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
               <h2>Key Features for Departmental  <span>Store Success</span> </h2>
            </div>
            <div className="desktop-industries">
            <div className="row justify-content-center">
                 {/* Feature 1 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss1.png" alt="Faster Billing" className="img-fluid mb-3" />
                           <h4>Supply Chain Management</h4>
                           <p>Manage inventory flow efficiently from suppliers to warehouses and retail outlets.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 2 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss2.png" alt="SMS Bills & Offers" className="img-fluid mb-3" />
                           <h4>Warehouse Management</h4>
                           <p>Control warehouse goods, layouts, and inventory distribution with built-in tools.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 3 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss3.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                           <h4>Purchase Management</h4>
                           <p>Generate and process purchase orders quickly, reducing manual effort and errors.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 4 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss4.png" alt="Stock Tracking" className="img-fluid mb-3" />
                           <h4>Fast and Slow Selling Stock Analysis</h4>
                           <ul>
                             <li>Track high- and low-selling products to optimize inventory levels.</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 5 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss5.png" alt="Inventory Management" className="img-fluid mb-3" />
                           <h4>Stock Management</h4>
                           <p>Organize inventory by category, type, or brand for easy tracking and retrieval.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 6 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss6.png" alt="Stock Verification" className="img-fluid mb-3" />
                           <h4>Stock Verification</h4>
                           <p>Conduct regular audits to reconcile actual stock with digital records.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 7 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss7.png" alt="Automated Reorders" className="img-fluid mb-3" />
                           <h4>Stock-Wise Analysis</h4>
                           <p>Gain insights into sales trends and product performance.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 8 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss8.png" alt="Alerts & Notifications" className="img-fluid mb-3" />
                           <h4>Label and Barcode Generator</h4>
                           <p>Generate professional labels and barcodes for efficient product tracking and billing.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 9 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss9.png" alt="Warehouse & Godown Management" className="img-fluid mb-3" />
                           <h4>Stock Alerts and Notifications</h4>
                           <p>Receive automatic notifications when inventory is low to ensure timely restocking.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 10 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss10.png" alt="Intelligent Management" className="img-fluid mb-3" />
                           <h4>Expense Management</h4>
                           <p>Track store expenses throughout the year with detailed financial records.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 11 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss11.png" alt="Discount & Loyalty Management" className="img-fluid mb-3" />
                           <h4>Point of Sale (POS) System</h4>
                           <p>Accept multiple payment methods, including cash, cards, UPI, and mobile wallets.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 12 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss12.png" alt="Offers & Promotions Management" className="img-fluid mb-3" />
                           <h4>Reporting and Analytics</h4>
                           <p>Access comprehensive reports to make informed business decisions.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 13 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss13.png" alt="Weigh Scale Integration" className="img-fluid mb-3" />
                           <h4>GST-Compliant Billing</h4>
                           <p>Automatically calculate taxes and simplify financial compliance.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 14 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss14.png" alt="Barcode & Label Generator" className="img-fluid mb-3" />
                           <h4>Multiple Billing Counters</h4>
                           <p>Serve customers quickly and efficiently without long queues.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 15 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss15.png" alt="Cash Register & Accounting" className="img-fluid mb-3" />
                           <h4>Mobile Invoice Sharing</h4>
                           <p>Send bills directly to customers’ mobile devices via SMS for easy access.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 16 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss16.png" alt="mPOS & Mobile Management" className="img-fluid mb-3" />
                           <h4>E-Way Bill Generation</h4>
                            <p>Generate electronic waybills for smooth and compliant goods movement.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 17 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss17.png" alt="Omnichannel E-Commerce" className="img-fluid mb-3" />
                           <h4>Financial Management</h4>
                           <p>Monitor transactions, cash flows, and overall financial health.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 18 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss18.png" alt="Bookkeeping & Reports" className="img-fluid mb-3" />
                           <h4>GST-Integrated Accounting</h4>
                           <p>Maintain accurate accounting records for hassle-free tax filing.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss19.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>WhatsApp Integration</h4>
                           <p>Send updates, reminders, and promotions directly to your customers’ phones.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss20.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>Returns and Exchanges</h4>
                           <p>Process returns or exchanges instantly while updating inventory in real-time.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss21.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>Online Departmental Store</h4>
                           <p>Create a custom online store for customers to browse and purchase products.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss22.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>AI Knowledge Base</h4>
                           <p>Maintain a unified customer database for personalized engagement.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss23.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>Offers and Discount Management</h4>
                           <p>Manage promotions, coupons, and special offers efficiently.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss24.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>Loyalty and Membership Points</h4>
                           <p>Reward repeat customers with points or membership incentives to boost retention.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ss25.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                           <h4>Experience the Difference</h4>
                           <p>Run your departmental store efficiently, grow sales, and enhance customer satisfaction with ChittorTech’ cloud-based software.</p>
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

<section className="cta-section">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="cta-box">
               <h2>Everything your business needs to scale faster, work smarter, and run smoother.</h2>
               <p>Smart, simple, and affordable—everything your business needs to grow faster and run smoothly.</p>
               <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Choose Your Plan</button>
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
                  <img src="/assets/images/img244.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Hassle-Free  <span>Multi-Store Management</span> </h2>
               <p>Oversee all your departmental store locations with centralized inventory, reporting, and management systems.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Single Customer Database :</strong> Keep customer information consistent and accessible across all locations for unified and personalized service.</li>

                  <li><strong>Seamless Stock Transfers :</strong> Easily transfer goods between stores to balance stock levels and meet customer demand efficiently.</li>

                  <li><strong>Central Reporting & Analytics :</strong> Gain comprehensive insights into sales performance, inventory trends, and customer behavior across all locations.</li>

                  <li><strong>Centralized Management :</strong> Streamline oversight and control of multiple store locations from a single platform.</li>

                  <li><strong>Centralized Inventory Control :</strong> Optimize stocking strategies, reduce stockouts, and manage inventory efficiently across all branches.</li>
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
                  <img src="/assets/images/img245.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>   All Departmental  <span>Store Requirements</span> </h2>
               <p>Maximize efficiency and minimize challenges with an all-in-one solution:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful Management Solution</li>
                  <li>Manage Multiple Stores Anywhere, Anytime</li>
                  <li>Manage Your Inventory and Barcodes</li>
                  <li>Handle Multiple Payment Modes</li>
                  <li>Reports That Improve Forecasting and Analytics</li>
                  <li>Launch Your Online Store</li>
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
               <h2> Performance  <span>Highlights</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/ce1.png" alt="ChittorTech Departmental Store - ce1" /> </figure>
                     <h3>4X revenue growth rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce2.png" alt="ChittorTech Departmental Store - ce2" /> </figure>
                     <h3>120+ billing hours saved per month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce3.png" alt="ChittorTech Departmental Store - ce3" /> </figure>
                     <h3>90% faster processing time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce4.png" alt="ChittorTech Departmental Store - ce4" /> </figure>
                     <h3>99% reduction in manual errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>




<section className="manufacturing-key section-bg">
<div className="container">
      <div className="heading-wrap">
          <h2>Why Chittortech  <span>Solutions?</span> </h2>
      </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Affordable</h3>
               <p>Flexible pricing plans with the best features in the market.</p>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Training & Support</h3>
               <p>Expert guidance to quickly onboard your team and navigate the software.</p>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Client Satisfaction</h3>
               <p>Trusted by over 17,000 clients nationwide.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Cloud-Based Software</h3>
               <p>Manage your departmental store anytime, anywhere.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Proven Track Record</h3>
               <p>Years of experience delivering excellent retail solutions.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>User-Friendly Interface</h3>
               <p>Simple and intuitive design for a seamless experience.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>rusted by Retailers</h3>
               <p>Preferred by departmental stores of all sizes and chains.</p>
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
                 <h2> Seamless Integrations with   <span>Multiple Platforms</span> </h2>
              </div>
              <div className="why-choose-wrap">
                 <ul>
                    <li>
                       <figure> <img src="/assets/images/ns1.png" alt="ChittorTech Departmental Store - ns1" /> </figure>
                       <h3>E-commerce Platforms</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns2.png" alt="ChittorTech Departmental Store - ns2" /> </figure>
                       <h3> Communication & Marketing Tools</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns3.png" alt="ChittorTech Departmental Store - ns3" /> </figure>
                       <h3> Payment Solutions</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns4.png" alt="ChittorTech Departmental Store - ns4" /> </figure>
                       <h3>Business Applications</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns5.png" alt="ChittorTech Departmental Store - ns5" /> </figure>
                       <h3>Shipping & Logistics</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns6.png" alt="ChittorTech Departmental Store - ns6" /> </figure>
                       <h3>E-Invoicing & Compliance</h3>
                    </li>
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
             <h2>About ChittorTech for Departmental Stores</h2>
             <p>At ChittorTech, we understand the unique challenges faced by departmental store owners—from managing large product ranges and multiple categories to ensuring smooth billing experiences. With integrated Management, multi-store management, omnichannel e-commerce, and a smart AI Knowledge Base module, our departmental store software ensures faster operations, improved efficiency, and enhanced customer satisfaction.</p>
          </div>
        </div>
    </div>
</div>
</section>

<section className="complete-seo-service"> 
      <div className="container my-5">
         <div className="heading-wrap text-center">
              <h2> Key Benefits of ChittorTech’ <span>Departmental Store Software</span> </h2>
           </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="0">
                <figure> <img src="/assets/images/ft1.png" alt="ChittorTech Departmental Store - ft1" /> </figure>
                <h4>Streamlined Multi-Store Management</h4>
                <p>Manage multiple branches from a single dashboard, ensuring consistent operations and unified customer data.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="100">
                <figure> <img src="/assets/images/ft2.png" alt="ChittorTech Departmental Store - ft2" /> </figure>
                <h4>Improved Inventory Efficiency</h4>
                <p>Track stock levels, automate reorders, and reduce stockouts to keep shelves fully stocked at all times.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="200">
                <figure> <img src="/assets/images/ft3.png" alt="ChittorTech Departmental Store - ft3" /> </figure>
                <h4>Faster Billing & Checkout</h4>
                <p>Smart Management and multiple billing counters reduce waiting time, enabling quick and seamless customer checkouts.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="300">
                <figure> <img src="/assets/images/ft4.png" alt="ChittorTech Departmental Store - ft4" /> </figure>
                <h4>Accurate Financial Management</h4>
                <p>Integrated GST-compliant billing and accounting modules simplify tax filing and maintain accurate financial records.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft5.png" alt="ChittorTech Departmental Store - ft5" /> </figure>
                <h4>Enhanced Customer Loyalty</h4>
                <p>Loyalty points, membership programs, personalized offers, and discount management encourage repeat purchases.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft6.png" alt="ChittorTech Departmental Store - ft6" /> </figure>
                <h4>Omnichannel Sales Expansion</h4>
                <p>Easily launch an online store and synchronize inventory between physical and online stores for seamless sales.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft7.png" alt="ChittorTech Departmental Store - ft7" /> </figure>
                <h4>Data-Driven Insights</h4>
                <p>Access 150+ MIS reports and analytics to monitor sales trends, customer behavior, and store performance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft8.png" alt="ChittorTech Departmental Store - ft8" /> </figure>
                <h4>Seamless Stock Transfers</h4>
                <p>Transfer inventory efficiently between stores to balance stock and meet customer demand.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft9.png" alt="ChittorTech Departmental Store - ft9" /> </figure>
                <h4>User-Friendly Experience</h4>
                <p>Intuitive interface allows staff to operate the system with minimal training.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft10.png" alt="ChittorTech Departmental Store - ft10" /> </figure>
                <h4>WhatsApp & Communication Integration</h4>
                <p>Communicate directly with customers for promotions, updates, and reminders to improve engagement.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft11.png" alt="ChittorTech Departmental Store - ft11" /> </figure>
                <h4>Reduced Manual Errors</h4>
                <p>Automation across billing, inventory, and reporting ensures high accuracy in daily operations.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft12.png" alt="ChittorTech Departmental Store - ft12" /> </figure>
                <h4>Centralized Customer Database</h4>
                <p>Maintain consistent customer information across all stores, enabling personalized service and loyalty management.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft13.png" alt="ChittorTech Departmental Store - ft13" /> </figure>
                <h4>Scalable & Cloud-Based</h4>
                <p>Access your departmental store software anytime, anywhere, and easily scale as your business grows.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft14.png" alt="ChittorTech Departmental Store - ft14" /> </figure>
                <h4>Compliance & Reporting Made Easy</h4>
                <p>Simplified GST compliance, e-way bill generation, and expense tracking reduce administrative workload.</p>
              </div>
            </div>
          </div>
        </div>
</section>


<section className="manufacturing-key section-bg py-5">
  <div className="container">
    <div className="heading-wrap text-center mb-4">
      <h2>How to Use ChittorTech’ <span>Departmental Store Software</span></h2>
    </div>

    <div className="row justify-content-center gy-4">

      {/* 1. Login & Setup */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Login &amp; Setup</h3>
          <ul>
            <li>Access the software via web or mobile app.</li>
            <li>Set up store locations, departments, and user accounts.</li>
            <li>Customize the system according to your store workflow.</li>
          </ul>
        </div>
      </div>

      {/* 2. Add Inventory */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Add Inventory</h3>
          <ul>
            <li>Upload product details with categories, prices, and stock quantities.</li>
            <li>Generate barcodes and labels for easy identification.</li>
            <li>Enable stock alerts for automated restocking.</li>
          </ul>
        </div>
      </div>

      {/* 3. Manage Billing */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Manage Billing</h3>
          <ul>
            <li>Use the Management system to process sales at multiple counters.</li>
            <li>Accept payments via cash, cards, UPI, or mobile wallets.</li>
            <li>Share invoices directly with customers via SMS or email.</li>
          </ul>
        </div>
      </div>

      {/* 4. Track Stock & Transfers */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Track Stock &amp; Transfers</h3>
          <ul>
            <li>Monitor inventory levels in real-time across all stores.</li>
            <li>Transfer stock between branches to balance supply.</li>
            <li>Conduct periodic stock verification to reduce discrepancies.</li>
          </ul>
        </div>
      </div>

      {/* 5. Customer Engagement */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Customer Engagement</h3>
          <ul>
            <li>Maintain a unified customer database.</li>
            <li>Offer loyalty points, discounts, and membership rewards.</li>
            <li>Send personalized promotions via WhatsApp or email.</li>
          </ul>
        </div>
      </div>

      {/* 6. Financial Management */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Financial Management</h3>
          <ul>
            <li>Track all expenses, cash flow, and sales reports.</li>
            <li>Generate GST-compliant bills and e-way bills automatically.</li>
            <li>Access reports for profit, loss, and inventory performance.</li>
          </ul>
        </div>
      </div>

      {/* 7. Online Store Management */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Online Store Management</h3>
          <ul>
            <li>Set up your online departmental store.</li>
            <li>Sync inventory with physical store stock.</li>
            <li>Manage online orders, payments, and deliveries seamlessly.</li>
          </ul>
        </div>
      </div>

      {/* 8. Analyze Reports & Insights */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Analyze Reports &amp; Insights</h3>
          <ul>
            <li>Use 150+ MIS reports to understand sales trends and customer behavior.</li>
            <li>Make data-driven decisions to improve store operations and profitability.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>



{/*  faq template section */}
<section className="faq-template py-5">
   <div className="container">
      <div className="heading-wrap text-center mb-4">
         <h2>Frequently Asked Questions <span>(FAQs)</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

                 {/* FAQ 1 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading6">
                     <button className="accordion-button" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                       What are the benefits of departmental store billing software?
                     </button>
                   </h2>
                   <div id="collapse6" className="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       It improves operational efficiency, reduces manual errors, enhances customer engagement, and provides accurate financial and inventory insights.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 2 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading7">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                       Can AI Assistant Software for departmental stores help manage multiple stores?
                     </button>
                   </h2>
                   <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Yes, centralized multi-store management allows you to track inventory, sales, and customer data across all locations from a single dashboard.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 3 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading8">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                       What reports will the departmental store software generate
                     </button>
                   </h2>
                   <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       The software generates 150+ MIS reports, including sales analysis, inventory trends, financial statements, customer insights, and performance metrics for each store location.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 4 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading9">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can we personalize the software to cater to our store’s specific needs?
                     </button>
                   </h2>
                   <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Yes, the software is highly customizable to meet unique requirements, including store workflows, billing processes, promotions, and customer loyalty programs.
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
