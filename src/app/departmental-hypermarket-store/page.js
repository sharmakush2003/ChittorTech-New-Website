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
                <i className={`fa-solid fa-city`}></i> Hypermarket AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Departmental Hypermarket AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Full-scale AI & IT Solutions for large-format departmental and hypermarket chains.
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
                <i className={`fa-solid fa-city`}></i>
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
    <div className="heading-wrap">
          <h2>AI-Powered Hypermarket & Departmental Store Management </h2>
      </div>
  <div className="container">
   <div className="row justify-content-center gy-4">

      {/* Intelligent Inventory Control */}
      <div className="col-md-3 col-sm-6">
         <div className="key-box">
            <h3>Intelligent Inventory Control</h3>
            <p>Keep every product under control and never run out of stock.</p>
            <ul>
               <li>Automated restock alerts & expiry tracking</li>
               <li>Barcode and label generation</li>
               <li>Mobile-enabled stock audits & verification</li>
            </ul>
         </div>
      </div>

      {/* Efficient Billing & Cashier Operations */}
      <div className="col-md-3 col-sm-6">
         <div className="key-box">
            <h3>Efficient Billing & Cashier Operations</h3>
            <p>Fast, error-free checkout across multiple counters.</p>
            <ul>
               <li>Multi-counter POS management</li>
               <li>GST-compliant invoices</li>
               <li>Smooth, queue-free billing</li>
            </ul>
         </div>
      </div>

      {/* Customer Engagement & Loyalty */}
      <div className="col-md-3 col-sm-6">
         <div className="key-box">
            <h3>Customer Engagement & Loyalty</h3>
            <p>Turn shoppers into repeat customers with smart AI Knowledge Base tools.</p>
            <ul>
               <li>Membership programs & reward points</li>
               <li>Discount codes & coupons</li>
               <li>Feedback collection and analytics</li>
            </ul>
         </div>
      </div>

      {/* Omnichannel E-Commerce Integration */}
      <div className="col-md-3 col-sm-6">
         <div className="key-box">
            <h3>Omnichannel E-Commerce Integration</h3>
            <p>Connect physical and online stores for seamless sales.</p>
            <ul>
               <li>Build your online departmental / hypermarket store</li>
               <li>Integrated payments & secure checkout</li>
               <li>Centralized inventory synced in real time</li>
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
               <h2>I-Powered Hypermarket & Department Store Management</h2>
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
                          <h4>AI Fast Checkout & AI Smart Billing</h4>
<p>Process payments instantly with AI-driven POS for smooth, accurate, and AI-powered billing.</p>

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
                           <h4>AI Smart Inventory Control</h4>
<ul>
   <li>Manage stock flow, supplier orders, warehouse operations, and deliveries using AI automation</li>
   <li>Real-time visibility across stores, warehouses, and transit locations</li>
</ul>
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
                           <h4>AI Digital Notifications & Promotions</h4>
<ul>
   <li>Send AI-personalized SMS alerts, digital bills, and targeted promotional offers</li>
   <li>Improve customer engagement with smart, automated communication</li>
</ul>
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
                         
<h4>AI Integrated Warehouse Solutions</h4>
<ul>
   <li>Seamlessly connect warehouses and retail stores</li>
   <li>AI-powered logistics and intelligent stock movement tracking</li>
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
                          <h4>AI Multi-Payment Options</h4>
<ul>
   <li>Support multiple payment gateways with AI-optimized checkout speed</li>
   <li>Accept UPI, cards, wallets, and digital payments effortlessly</li>
</ul>
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
                       <h4>AI Stock Insights & Analytics</h4>
<ul>
   <li>Identify fast-moving and slow-moving products using AI trend analysis</li>
   <li>Optimize inventory decisions with predictive insights</li>
</ul>
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
                    
<h4>AI Category-Wise Inventory Tracking</h4>
<ul>
   <li>Track stock by category across physical and online stores</li>
   <li>Real-time AI-powered inventory intelligence</li>
</ul>
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
                           <h4>AI Automated Stock Audits</h4>
<ul>
   <li>Perform digital and physical stock verification automatically</li>
   <li>Ensure higher accuracy and reduced manual effort</li>
</ul>

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
                          <h4>AI Smart Reorder System</h4>
<ul>
   <li>AI predicts reorder points for popular and essential products</li>
   <li>Prevent stock shortages and lost sales</li>
</ul>
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
                           <img src="/assets/images/ss10.png" alt="Intelligent POS" className="img-fluid mb-3" />
                          <h4>AI Expiry & Product Alerts</h4>
<ul>
   <li>Track expiry dates with AI monitoring</li>
   <li>Prioritize sales of near-expiry products</li>
</ul>
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
                      
<h4>AI Loyalty & Rewards Management</h4>
<ul>
   <li>Enable customers to earn and redeem loyalty points automatically</li>
   <li>AI-managed reward programs for higher retention</li>
</ul>
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
                          <h4>AI Barcode & Label Automation</h4>
<ul>
   <li>Generate professional AI-powered barcodes and labels</li>
   <li>Simplify product identification and stock tracking</li>
</ul>
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
                          <h4>AI-Powered POS & Checkout</h4>
<ul>
   <li>Intelligent POS with AI-assisted billing and automated reorders</li>
   <li>Support for AI-integrated weighing scales and fast checkout</li>
</ul>
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
                        <h4>AI Discount & Campaign Management</h4>
<ul>
   <li>Run promotions, seasonal discounts, and brand campaigns effortlessly</li>
   <li>AI-driven pricing and offer optimization</li>
</ul>
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
                         
<h4>AI Advanced Reporting & Analytics</h4>
<ul>
   <li>Access 150+ AI-generated reports on sales, stock, and finance</li>
   <li>Data-driven insights for smarter business decisions</li>
</ul>
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
                          <h4>AI Mobile & Digital Invoicing</h4>
<ul>
   <li>Send invoices instantly via mobile, email, or WhatsApp</li>
   <li>Paperless, fast, and professional billing experience</li>
</ul>
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
                        <h4>AI Unified Financial Management</h4>
<ul>
   <li>Track budgets, expenses, and profitability in real time</li>
   <li>Maintain AI-assisted GST-compliant accounting</li>
</ul>
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
                        
<h4>AI Centralized Multi-Outlet Control</h4>
<ul>
   <li>Manage multiple stores, branches, and e-commerce platforms from one dashboard</li>
   <li>Centralized control with AI-powered insights</li>
</ul>
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
                          <h4>AI Customer Segmentation & Engagement</h4>
<ul>
   <li>Segment customers into VIP, Regular, or At-Risk categories</li>
   <li>Run AI-targeted campaigns for higher conversions</li>
</ul>
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
                         
<h4>AI Feedback & Review Management</h4>
<ul>
   <li>Collect and analyze customer reviews using AI</li>
   <li>Improve service quality and customer satisfaction</li>
</ul>
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
                          
<h4>AI WhatsApp & Messaging Integration</h4>
<ul>
   <li>Send AI-personalized bills, offers, reminders, and updates</li>
   <li>Direct communication with customers on WhatsApp and SMS</li>
</ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  {/* Feature 19 */}</div>
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
               <h2>Get Started with AI-Powered Hypermarket Management – Smarter, Faster, Affordable</h2>
               <p>AI-driven, simple, and cost-effective solutions – everything your hypermarket or departmental store needs to grow faster, manage smarter, and run smoother.
</p>
               <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Pick Your AI Plan</button>
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
      <h2>Your AI Gateway to <span>Multi-Store Hypermarket Management</span></h2>
      <p>
         Manage multiple hypermarket and departmental store locations effortlessly
         with a centralized AI-powered management system.
      </p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>AI Unified Customer Database :</strong>
            Keep all customer information synchronized across every branch and franchise
            using intelligent, centralized data management.
         </li>

         <li>
            <strong>AI Seamless Stock Transfers :</strong>
            Automatically move inventory between stores with AI-optimized stock flow
            to reduce shortages and prevent overstocking.
         </li>

         <li>
            <strong>AI Central Reporting & Analytics :</strong>
            Monitor sales, inventory performance, and customer behavior across all
            locations with AI-generated, actionable insights.
         </li>

         <li>
            <strong>AI Centralized Branch Management :</strong>
            Control and oversee multiple hypermarket branches efficiently from a
            single AI-powered dashboard.
         </li>

         <li>
            <strong>AI Real-Time Inventory Control :</strong>
            Track stock levels, sales trends, and operational performance in real time
            across all stores with AI intelligence.
         </li>

         <li>
            <strong>AI Local & National SEO Optimization :</strong>
            Boost your hypermarket’s online visibility and reach with AI-driven SEO
            insights and performance optimization.
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
                  <img src="/assets/images/img245.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
   <div className="heading-wrap text-start">
      <h2>One AI Solution for <span>Hypermarket Brilliance</span></h2>
      <p>
         Boost your growth with our all-in-one AI-powered hypermarket AI & IT Solutions
         designed for speed, scale, and smart decision-making.
      </p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>AI-Powered POS Solution –</strong>
            Fast, accurate, and intelligent checkout for every store.
         </li>

         <li>
            <strong>AI Multi-Store Management –</strong>
            Control multiple stores anytime, anywhere with AI automation.
         </li>

         <li>
            <strong>AI Inventory & Barcode Management –</strong>
            Track, organize, and optimize stock effortlessly across locations.
         </li>

         <li>
            <strong>AI Multi-Payment Modes –</strong>
            Seamless transactions with AI-optimized payment processing.
         </li>

         <li>
            <strong>AI Forecasting & Analytics –</strong>
            Smart reports to predict trends and drive better business decisions.
         </li>

         <li>
            <strong>AI Online Store Launch –</strong>
            Expand your reach with a fully AI-managed e-commerce platform.
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
               <h2> Performance  <span>Highlights</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/ce1.png" alt="" /> </figure>
                     <h3>4X revenue growth rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce2.png" alt="" /> </figure>
                     <h3>120+ billing hours saved per month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce3.png" alt="" /> </figure>
                     <h3>90% faster processing time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ce4.png" alt="" /> </figure>
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
                 <h2>AI-Powered Seamless Integrations </h2>
              </div>
              <div className="why-choose-wrap">
                 <ul>
                    <li>
                       <figure> <img src="/assets/images/ns1.png" alt="" /> </figure>
                       <h3>AI E-Commerce Sync</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns2.png" alt="" /> </figure>
                       <h3>AI Marketing & Communication</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns3.png" alt="" /> </figure>
                       <h3>AI Payment Processing</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns4.png" alt="" /> </figure>
                       <h3>AI Business App Connect
</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns5.png" alt="" /> </figure>
                       <h3>AI Shipping & Logistics</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns6.png" alt="" /> </figure>
                       <h3>AI E-Invoicing & Compliance</h3>
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
             <p>At ChittorTech, we understand the unique challenges faced by departmental store owners—from managing large product ranges and multiple categories to ensuring smooth billing experiences. With integrated POS, multi-store management, omnichannel e-commerce, and a smart AI Knowledge Base module, our departmental store software ensures faster operations, improved efficiency, and enhanced customer satisfaction.</p>
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
                <figure> <img src="/assets/images/ft1.png" /> </figure>
                <h4>Streamlined Multi-Store Management</h4>
                <p>Manage multiple branches from a single dashboard, ensuring consistent operations and unified customer data.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="100">
                <figure> <img src="/assets/images/ft2.png" /> </figure>
                <h4>Improved Inventory Efficiency</h4>
                <p>Track stock levels, automate reorders, and reduce stockouts to keep shelves fully stocked at all times.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="200">
                <figure> <img src="/assets/images/ft3.png" /> </figure>
                <h4>Faster Billing & Checkout</h4>
                <p>Smart POS and multiple billing counters reduce waiting time, enabling quick and seamless customer checkouts.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="300">
                <figure> <img src="/assets/images/ft4.png" /> </figure>
                <h4>Accurate Financial Management</h4>
                <p>Integrated GST-compliant billing and accounting modules simplify tax filing and maintain accurate financial records.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft5.png" /> </figure>
                <h4>Enhanced Customer Loyalty</h4>
                <p>Loyalty points, membership programs, personalized offers, and discount management encourage repeat purchases.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft6.png" /> </figure>
                <h4>Omnichannel Sales Expansion</h4>
                <p>Easily launch an online store and synchronize inventory between physical and online stores for seamless sales.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft7.png" /> </figure>
                <h4>Data-Driven Insights</h4>
                <p>Access 150+ MIS reports and analytics to monitor sales trends, customer behavior, and store performance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft8.png" /> </figure>
                <h4>Seamless Stock Transfers</h4>
                <p>Transfer inventory efficiently between stores to balance stock and meet customer demand.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft9.png" /> </figure>
                <h4>User-Friendly Experience</h4>
                <p>Intuitive interface allows staff to operate the system with minimal training.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft10.png" /> </figure>
                <h4>WhatsApp & Communication Integration</h4>
                <p>Communicate directly with customers for promotions, updates, and reminders to improve engagement.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft11.png" /> </figure>
                <h4>Reduced Manual Errors</h4>
                <p>Automation across billing, inventory, and reporting ensures high accuracy in daily operations.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft12.png" /> </figure>
                <h4>Centralized Customer Database</h4>
                <p>Maintain consistent customer information across all stores, enabling personalized service and loyalty management.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft13.png" /> </figure>
                <h4>Scalable & Cloud-Based</h4>
                <p>Access your departmental store software anytime, anywhere, and easily scale as your business grows.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ft14.png" /> </figure>
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
            <li>Use the POS system to process sales at multiple counters.</li>
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
