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
                <i className={`fa-solid fa-store`}></i> Convenience Store
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Convenience Store Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Run your convenience store smarter with AI-powered billing and real-time stock alerts.
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

   {/* Instant Billing & Payments */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Instant Billing & Payments</h3>
         <p>Quick, accurate, and fully GST-ready invoicing for smooth daily operations.</p>
         <ul>
            <li>Multiple billing counters</li>
            <li>UPI, cards, wallets, and cash support</li>
            <li>Fast and error-free checkout</li>
         </ul>
      </div>
   </div>

   {/* Smart Inventory Control */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Smart Inventory Control</h3>
         <p>Track and manage stock effortlessly with intelligent automation.</p>
         <ul>
            <li>Category-wise and type-based stock organization</li>
            <li>Barcode labels with expiry alerts</li>
            <li>Automated restock notifications</li>
         </ul>
      </div>
   </div>

   {/* AI-Driven Customer Loyalty */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI-Driven Customer Loyalty</h3>
         <p>Keep shoppers coming back with smart engagement and rewards.</p>
         <ul>
            <li>Loyalty points and membership programs</li>
            <li>Coupons and seasonal discount offers</li>
            <li>Customer communication via SMS</li>
         </ul>
      </div>
   </div>

   {/* Online & Offline Sync */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>Online & Offline Sync</h3>
         <p>Sell anywhere with real-time inventory and order synchronization.</p>
         <ul>
            <li>Shopify & WooCommerce integration</li>
            <li>Live inventory sync across channels</li>
            <li>Secure online payments & checkout</li>
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
                <h2>Designed for Convenience Store Excellence</h2>
                <p>Our thoughtfully integrated modules help convenience store owners run their business smoothly and efficiently.</p>
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
               <h2>AI-Powered Convenience Store Management – India’s #1 Platform </h2>
                
            </div>
            <div className="desktop-industries">
            <div className="row justify-content-center">
                 {/* Feature 1 */}
                 <div className="col-md-4 col-12 mb-4">
                   <div className="boxes flip-container">
                     <div className="flip-card">
                       <div className="flip-card-inner">
                         <div className="flip-card-back">
                           <img src="/assets/images/ni1.png" alt="Faster Billing" className="img-fluid mb-3" />
                            <h3>Lightning-Fast Billing</h3>
         <ul>
            <li>Queue-free checkout with barcode scanning and instant Management entries</li>
            <li>Supports cash, UPI, cards, and digital wallets</li>
            <li>SMS bills and instant offer notifications</li>
         </ul>
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
                           <img src="/assets/images/ni2.png" alt="SMS Bills & Offers" className="img-fluid mb-3" />
                           <h3>Smart Inventory & Stock Control</h3>
         <ul>
            <li>Track items across store, warehouse, and transit with AI assistance</li>
            <li>Category-wise digital inventory management</li>
            <li>Mobile stock audits and verification</li>
            <li>Automatic reorders for essential items</li>
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
                           <img src="/assets/images/ni3.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                            <h3>AI Loyalty & Promotions</h3>
         <ul>
            <li>Loyalty points and membership reward programs</li>
            <li>Automated discounts, bundle deals, and coupon campaigns</li>
            <li>Real-time alerts for fast- and slow-moving products</li>
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
                           <img src="/assets/images/ni4.png" alt="Stock Tracking" className="img-fluid mb-3" />
                           <h3>Connected Multi-Branch Management</h3>
         <ul>
            <li>Manage all branches from a single AI-powered dashboard</li>
            <li>Unified customer database across locations</li>
            <li>Effortless stock transfers between stores</li>
            <li>Centralized reporting, analytics, and inventory control</li>
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
                           <img src="/assets/images/ni5.png" alt="Inventory Management" className="img-fluid mb-3" />
                            <h3>Omnichannel & Mobile Management</h3>
         <ul>
            <li>Mobile Management for billing and stock verification</li>
            <li>Shopify and WooCommerce integration</li>
            <li>Real-time inventory sync across offline and online stores</li>
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
                           <img src="/assets/images/ni6.png" alt="Stock Verification" className="img-fluid mb-3" />
                           <h3>Accounting & Reporting</h3>
         <ul>
            <li>AI-assisted financial control for accurate operations</li>
            <li>Centralized cash register and ledger management</li>
            <li>GST-compliant billing and tax handling</li>
            <li>Access to 150+ actionable business reports</li>
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


<section className="why-choose-sec bridal-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 order-md-2">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img238.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Why Choose Our   <span>Software?</span> </h2>
               <p>Just like assembling your furniture masterpieces, bring all your stores together with a centralized system powered by ChittorTech.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Powerful Management Solution –</strong> Manage multiple stores anytime, anywhere.</li>
                  <li><strong>Inventory & Barcode Management –</strong> Track, bill, and stock efficiently.</li>
                  <li><strong>Multiple Payment Modes –</strong> Cash, card, UPI, and digital wallets.</li>
                  <li><strong>Real-Time Insights –</strong> Actionable analytics for better forecasting.</li>
                  <li><strong>Online Store Launch –</strong> Expand your reach with a custom e-commerce store.</li>
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
                  <img src="/assets/images/img239.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2> Key <span>Advantages</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Multi-featured modules including AI Knowledge Base, accounting, inventory, and e-commerce</li>
                  <li>Flawless implementation and training by experts</li>
                  <li>Cloud-based, accessible from any device</li>
                  <li>User-friendly, simple, and intuitive interface</li>
                  <li>Affordable with a strong ROI</li>
                  <li>Dedicated support for timely assistance</li>
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
                <h2>Keeping All Your Branches in the Profitable Loop</h2>
                <p>A centralized Management system that unifies all your convenience store branches, streamlines operations, and maximizes profitability.</p>
             </div>
           </div>
       </div>
   </div>
</section>


<section className="manufacturing-key section-bg pt-60">
<div className="container">
      <div className="heading-wrap">
          <h2>Centralized Features <span>Across Branches</span> </h2>
      </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Single Customer Database</h3>
               <ul>
                  <li>Maintain a unified customer database accessible across all locations.</li>
                  <li>Customers can redeem loyalty points at any branch.</li>
               </ul>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Stock Transfer & Request</h3>
               <ul>
                  <li>Seamlessly manage inventory across branches.</li>
                  <li>Simplify warehouse, in-store coordination, and stock transfers.</li>
               </ul>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Central Reporting & Analytics</h3>
               <ul>
                  <li>Access collective analytics from all branches via a central dashboard.</li>
                  <li>Make data-driven decisions with actionable insights.</li>
               </ul>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Centralized Management & Inventory Control</h3>
               <ul>
                  <li>Monitor all store branches from a single Management interface.</li>
                  <li>Track all stock levels centrally to ensure consistency and accuracy.</li>
               </ul>
           </div>
       </div>
   </div>
</div>
</section>

<section className="why-choose-sec bridal-sec pt0">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img240.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
   <div className="heading-wrap text-start">
      <h2>Your #1 AI-Powered Partner for <span>Convenience Store Management</span></h2>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li><strong>Smart Management Engine –</strong> Effortlessly operate one or multiple convenience stores from anywhere.</li>
         <li><strong>AI Inventory & Barcode Control –</strong> Track products, categories, and stock levels with high accuracy.</li>
         <li><strong>Flexible Payment Options –</strong> Accept cash, UPI, cards, and digital wallets seamlessly.</li>
         <li><strong>Insightful AI Reports –</strong> Forecast demand, analyze sales trends, and optimize daily operations.</li>
         <li><strong>Integrated Online Store –</strong> Launch and sync your e-commerce store effortlessly with real-time inventory.</li>
      </ul>
   </div>
</div>

      </div>
   </div>
</section>

<section className="why-choose-sec bridal-sec pt0">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 order-md-2">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img241.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Customer Benefits of the Convenience  <span>Store Software</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Quick checkout with minimal waiting.</li>
                  <li>Accurate billing with no manual errors.</li> 
                  <li>Multiple payment options including cash, card, and UPI.</li>
                  <li>Receive bills instantly on mobile.</li>
                  <li>Stay updated with discounts and promotions.</li>
                  <li>Always find essential products in stock.</li>
                  <li>Earn and redeem loyalty points easily.</li>
                  <li>Seamless shopping experience across all store branches.</li>
                  <li>Shop online or in-store with accurate stock availability.</li>
                  <li>Faster checkout even for weighted products like fruits and vegetables.</li>
                  <li>Smooth returns and exchanges with real-time inventory updates.</li>
                  <li>Modern, connected shopping experience with real-time order updates.</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="why-choose-sec bridal-sec pt0">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/img242.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>How Customers Can Use the <span>Convenience Store System</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Pick the items you want to buy from the store shelves.</li>
                  <li>At checkout, the cashier scans your items using the Management system.</li>
                  <li>The bill is generated instantly, including any discounts or loyalty points.</li>
                  <li>Choose your preferred payment method: cash, card, UPI, or digital wallet.</li>
                  <li>Receive your bill instantly on your mobile via SMS or email if requested.</li>
                  <li>Earn loyalty points automatically with each purchase.</li>
                  <li>Redeem loyalty points or use coupons for discounts on future purchases.</li>
                  <li>For online orders, check stock availability and place orders directly from the store’s website or app.</li>
                  <li>Choose home delivery or store pickup for online purchases.</li>
                  <li>If you need to return or exchange items, the system updates your purchase and inventory instantly.</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="why-choose-sec bridal-sec pt0">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-5 order-md-2">
            <div className="expertise-img text-start">
               <figure>
                  <img src="/assets/images/bridal.png" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2>Pricing &  <span>Billing</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                     <li><strong>Accurate Billing:</strong> The system automatically calculates total prices, including taxes, discounts, and loyalty points.</li>

                     <li><strong>Multiple Payment Options:</strong> Customers can pay using cash, card, UPI, or digital wallets.</li>

                     <li><strong>Digital & Printed Bills:</strong> Bills can be sent instantly via SMS or email, and printed copies are also available.</li>

                     <li><strong>Discounts & Promotions:</strong> Active offers, coupons, and loyalty point redemptions are automatically applied at checkout.</li>


                     <li><strong>Weighted Item Billing:</strong> Products sold by weight, like fruits or vegetables, are billed accurately with integrated weigh scales.</li>

                     <li><strong>Real-Time Price Updates:</strong> Product prices are updated in real-time to reflect any changes in-store or online.</li>

                     <li><strong>Returns & Exchanges:</strong> Any returns or exchanges automatically adjust the billing and inventory, ensuring accurate financial records.</li>

                     <li><strong>Split Payments:</strong> Customers can split their payments across different methods if needed.</li>
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
         <h2>Frequently Asked <span>Questions (FAQs)</span></h2>
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
                       What are the top benefits of implementing Management for convenience stores?
                     </button>
                   </h2>
                   <div id="collapse6" className="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       A Management system streamlines billing, inventory management, and customer loyalty programs. It reduces manual errors, speeds up checkout, improves stock tracking, and provides real-time business insights to optimize operations.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 2 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading7">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                       Is convenience store software scalable for multiple locations?
                     </button>
                   </h2>
                   <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Yes, the software is fully scalable. You can manage multiple branches from a single dashboard, track stock transfers, and unify customer data across all locations.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 3 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading8">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                       How does convenience store software achieve waste reduction in stores?
                     </button>
                   </h2>
                   <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       By providing real-time inventory tracking, automated reorder alerts, and expiry management, the software helps reduce overstocking and minimize product waste.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 4 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading9">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                       How does convenience store software increase shelf efficiency?
                     </button>
                   </h2>
                   <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       The software categorizes and tracks products, highlights top-selling items, and optimizes inventory placement, ensuring shelves are stocked with the right products at the right time.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 5 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading10">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                       How does convenience store software enhance customer loyalty?
                     </button>
                   </h2>
                   <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Through loyalty points, membership programs, personalized offers, and discounts, customers are encouraged to return, improving retention and satisfaction.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 6 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading11">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                       How user-friendly is the software? Will it require training for staff?
                     </button>
                   </h2>
                   <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       The system is designed to be intuitive and easy to use. Minimal training is required, and our team provides support and guidance during implementation.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 7 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading12">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                       Can we customize the software to address our convenience store’s unique needs?
                     </button>
                   </h2>
                   <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Yes, the software is highly customizable. You can tailor workflows, reports, and modules to match your store’s specific operations.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 8 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading13">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                       Are software updates included in the package, and how often are they released?
                     </button>
                   </h2>
                   <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Yes, regular software updates are included at no extra cost. Updates are released periodically to enhance functionality, security, and user experience.
                     </div>
                   </div>
                 </div>

                 {/* FAQ 9 */}
                 <div className="accordion-item">
                   <h2 className="accordion-header" id="heading14">
                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                       What is the pricing structure for the convenience store software, and are there any hidden costs?
                     </button>
                   </h2>
                   <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#faqAccordion">
                     <div className="accordion-body">
                       Pricing is transparent and based on the features and number of locations you choose. There are no hidden fees, and you get complete access to all purchased modules and support services.
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
