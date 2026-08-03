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
                <i className={`fa-solid fa-pump-soap`}></i> Cosmetics Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Cosmetic Store Billing & Management
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage beauty products, brands, expiry dates, and loyalty programs effortlessly.
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
                <i className={`fa-solid fa-pump-soap`}></i>
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

    {/* AI-Powered Management for Faster Checkout */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Powered Management for Faster Checkout</h3>
            <p>
                Handle customer billing smoothly using an AI-enabled Management system that applies taxes
                automatically, supports digital payments, and reduces waiting time at counters.
            </p>
            <ul>
                <li>AI-assisted multi-counter billing</li>
                <li>Automatic GST-compliant invoices</li>
                <li>AI-generated digital bills via SMS or e-receipts</li>
            </ul>
        </div>
    </div>

    {/* AI-Driven Cosmetic Inventory Management */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Driven Cosmetic Inventory Management</h3>
            <p>
                Organize and track all beauty products using AI-based stock monitoring to prevent
                overstocking and out-of-stock situations.
            </p>
            <ul>
                <li>AI-powered product grouping (skincare, haircare, makeup, etc.)</li>
                <li>Brand-wise AI inventory tracking</li>
                <li>AI-supported barcode and label creation</li>
                <li>Smart expiry tracking with AI alerts</li>
            </ul>
        </div>
    </div>

    {/* AI Omnichannel Online Selling */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI Omnichannel Online Selling</h3>
            <p>
                Run online and offline cosmetic sales together using AI-enabled e-commerce integration
                for seamless operations.
            </p>
            <ul>
                <li>AI-assisted custom online store setup</li>
                <li>AI-supported payment gateway integration</li>
                <li>Centralized AI reports for stock and sales</li>
            </ul>
        </div>
    </div>

    {/* AI-Based Customer Relationship Management */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Based Customer Relationship Management</h3>
            <p>
                Increase repeat purchases with AI-powered customer engagement tools that manage
                rewards, offers, and feedback automatically.
            </p>
            <ul>
                <li>AI-managed discounts and promotions</li>
                <li>AI-driven loyalty and membership programs</li>
                <li>AI-based feedback and review collection</li>
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
                  <img src="/assets/images/img224.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
       <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>AI-Powered Features Built for <span>Cosmetic Store Growth</span></h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li><strong>AI Smart AI Support Chatbot –</strong> Fast checkout with AI-assisted barcode reading and support for all payment types.</li>

            <li><strong>Digital Tax-Ready Invoices –</strong> Create GST-compliant bills and share them instantly through WhatsApp or SMS.</li>

            <li><strong>All-Mode Payment Support –</strong> Accept cash, cards, UPI, and digital wallets without switching systems.</li>

            <li><strong>AI Auto-Replenishment –</strong> AI monitors stock levels and raises purchase requests before items run out.</li>

            <li><strong>Smart Offers Engine –</strong> Easily apply flat-price or percentage-based discounts across products.</li>

            <li><strong>AI Label & Barcode Tools –</strong> Automatically generate labels and barcodes for multiple product variations.</li>

            <li><strong>AI Customer Classification –</strong> Identify VIP, regular, inactive, and lost customers for targeted outreach.</li>

            <li><strong>AI Loyalty & Membership System –</strong> Reward repeat customers with trackable and redeemable points.</li>

            <li><strong>AI Warehouse & Supplier Control –</strong> Map products to suppliers and storage locations for better inventory flow.</li>

            <li><strong>AI WhatsApp Communication –</strong> Send bills, promotions, and updates directly to customers automatically.</li>

            <li><strong>AI Stock Validation –</strong> Perform live stock checks using mobile devices with instant updates.</li>

            <li><strong>AI Accounting & GST Handling –</strong> Manage GST returns, P&L, balance sheets, and financial reports accurately.</li>

            <li><strong>AI Expiry & Demand Insights –</strong> Track expiry dates and forecast demand using historical sales data.</li>

            <li><strong>E-Way Bill Automation –</strong> Generate compliant transport documents quickly for product movement.</li>

            <li><strong>AI Cash Counter Monitoring –</strong> Track cash and digital collections across multiple billing counters.</li>

            <li><strong>AI Mobile Management (mPOS) –</strong> Bill customers anywhere in-store using smartphones or tablets.</li>

            <li><strong>AI Business Intelligence Reports –</strong> Access 150+ real-time MIS reports and dashboards for smarter decisions.</li>
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
               <h2>Start Managing Your Cosmetic Store the Smarter Way – Without Overspending</h2>
               <p>A practical, easy-to-use, and cost-effective solution designed to help beauty stores operate smoothly and scale with confidence.</p>
             
                <button  className="cta-button" onClick={() => { window.location.href = "/contact-us"; }}>
 Select the Plan That Fits Your Business
</button>
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
                  <img src="/assets/images/img225.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>Key Advantages of <span>AI-Powered Cosmetic Store Software</span></h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li><strong>Smarter business planning –</strong> AI-driven dashboards with 150+ reports help you analyze sales patterns, stock movement, and customer activity from one place.</li>

            <li><strong>Quick & accurate billing –</strong> AI-assisted barcode billing accelerates checkout, auto-applies taxes, and minimizes manual errors.</li>

            <li><strong>Better inventory control –</strong> Track live stock levels, receive AI-based reorder alerts, and identify fast- and slow-moving products easily.</li>

            <li><strong>Complete compliance support –</strong> Generate GST-ready invoices, manage HSN-wise products, and maintain audit-friendly digital records.</li>

            <li><strong>Efficient supplier handling –</strong> Organize supplier details, manage purchase orders, and streamline restocking without manual follow-ups.</li>

            <li><strong>Clear financial visibility –</strong> Monitor profit margins, daily cash flow, and real-time P&amp;L reports with AI-backed insights.</li>

            <li><strong>Easy multi-store operations –</strong> Connect multiple branches, sync inventory, transfer stock, and view consolidated reports effortlessly.</li>

            <li><strong>Online selling made simple –</strong> Run your own online cosmetic store with unified inventory and centralized order tracking.</li>

            <li><strong>Stronger customer relationships –</strong> Understand buying behavior, manage loyalty points, memberships, and run targeted offers effectively.</li>
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
                  <img src="/assets/images/img226.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>AI-Powered Central Control for <span>Multiple Stores</span></h2>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li><strong>Unified customer records –</strong> AI maintains a single customer profile with purchase history, preferences, and contact details across all outlets.</li>

            <li><strong>Smart stock movement –</strong> Transfer skincare, makeup, and haircare products between branches using AI-guided stock requests.</li>

            <li><strong>Combined business insights –</strong> View AI-generated sales, inventory, and customer trends from every store in one centralized view.</li>

            <li><strong>Single management dashboard –</strong> Monitor and control all store locations effortlessly through one unified system.</li>

            <li><strong>Intelligent inventory balance –</strong> AI optimizes stock distribution across branches to minimize shortages and avoid excess inventory.</li>
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
                  <img src="/assets/images/img227.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>AI-Powered Complete Management System for <span>Cosmetic Stores</span></h2>
        <p>A single, smart platform with essential tools and integrations to manage your beauty business from start to scale.</p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>Run and monitor multiple cosmetic stores from any location</li>
            <li>AI-driven stock tracking with barcode support</li>
            <li>Smooth checkout with all major payment options</li>
            <li>AI-based reports for planning, trends, and performance insights</li>
            <li>Quick setup and control of your online cosmetic store</li>
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
               <h2> Results You Can <span>Expect</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/ct1.png" alt="" /> </figure>
                     <h3>3X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ct2.png" alt="" /> </figure>
                     <h3>117+ Billing Hours Saved/Month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ct3.png" alt="" /> </figure>
                     <h3>88% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ct4.png" alt="" /> </figure>
                     <h3>Business Applications</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/ct5.png" alt="" /> </figure>
                     <h3>S97% Reduction in Manual Errors</h3>
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
               <h2>Seamless Integrations</h2>
               <p>Integrate your cosmetic store software with accounting tools (like Tally), payment gateways, and third-party platforms:</p>
               <ul>
                  <li>E-commerce Platforms</li>
                  <li>Marketing & Communication Tools</li>
                  <li>Payment Solutions</li>
                  <li>Business Applications</li>
                  <li>Shipping & Logistics</li>
                  <li>E-Invoicing & Compliance</li>
               </ul>
               <p><strong>Trusted by Thousands Merchants</strong></p>
               <p>India’s most reliable AI & IT Solutions for beauty retail businesses.</p>
            </div>
         </div>
         <div className="col-md-5">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img228.jpg" />
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
{/*  faq template section */}
<section className="faq-template">
   <div className="container">
   <div className="row">
   </div><div className="col-md-6"><div className="faq-section">
         <div className="heading-wrap text-start">
            <h2>FAQ</h2>
         </div>
         <div className="accordion" id="faqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  What is cosmetic store software?
                  </button>
               </h2>
               <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     A comprehensive system that automates Management, inventory, AI Knowledge Base, accounting, and online store operations for beauty stores.
                  </div>
               </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  How does it help manage multiple stores?
                  </button>
               </h2>
               <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     It centralizes customer data, inventory, reporting, and stock transfers, making multi-store management effortless.
                  </div>
               </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Can it track stock expiry and sales trends?
                  </button>
               </h2>
               <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     Yes, it monitors expiry dates, provides auto-reorder suggestions, and analyzes fast and slow-selling products.
                  </div>
               </div>
            </div>
            {/* FAQ 4 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  Does it support online store integration?
                  </button>
               </h2>
               <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     Yes, the software syncs your physical and online store inventory and manages orders seamlessly.
                  </div>
               </div>
            </div>
            {/* FAQ 5 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  Is it user-friendly?
                  </button>
               </h2>
               <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     Absolutely. The intuitive interface allows staff to operate it with minimal training
                  </div>
               </div>
            </div>
            {/* FAQ 6 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  Deploy ChittorTech’ Cosmetic Store Software and experience a 2X boost in productivity.
                  </button>
               </h2>
               <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     Schedule a Free Demo Today!
                     Thousands Customers | 4.8 Google Rating.
                  </div>
               </div>
            </div>
            {/* FAQ 7 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                  Top Benefits of Cosmetic Store Software
                  </button>
               </h2>
               <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     <ul>
                        <li>Data-Driven Business Decisions: Access over 150 MIS reports to analyze sales, stock trends, and customer behavior. Make smarter, informed decisions.</li>
                        <li>Faster & Error-Free Billing: Barcode scanning speeds up billing, auto-calculates GST, and reduces human errors.</li>
                        <li>Efficient Stock Management: Monitor real-time stock levels, set auto-reorders, and avoid running out of popular products.</li>
                        <li>Smart Supplier Management: Simplify purchase orders, track supplier info, and ensure hassle-free restocking.</li>
                        <li>Full Compliance Management: Generate GST-compliant bills, use HSN codes, and maintain digital records for audits.</li>
                        <li>In-Depth Financial Reporting: Track profit margins, cash flow, and generate real-time P&L reports.</li>
                        <li>Multi-Store Management: Centralize inventory, transfer stock between branches, and generate combined reports.</li>
                        <li>Online Store Integration: Sync inventory between physical and online stores, manage orders, and boost sales.</li>
                        <li>Customer Loyalty & Engagement: Track preferences, implement reward points and memberships, and create vouchers/coupons.</li>
                        <li>Centralized Analytics & Reporting: Consolidated view of all store operations for better oversight.</li>
                        <li>Time & Cost Efficiency: Save hours in billing, reduce manual errors, and streamline store operations.</li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* FAQ 8 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="heading8">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                  How Customers Use Cosmetic Store Software
                  </button>
               </h2>
               <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                     <li>GBilling Made Easy: Staff scan product barcodes, choose payment method, and generate GST-compliant bills instantly.</li>
                     <li>Track Stock in Real-Time: Customers’ favorite products are always available because stock levels are updated across all branches.</li>
                     <li>Online Shopping: Customers can browse products, place orders, and pay online through the store’s integrated e-commerce platform.</li>
                     <li>Loyalty Points & Memberships: Customers earn points on every purchase, which can be redeemed for discounts or special offers.</li>
                     <li>Receive Promotions & Discounts: Personalized discount vouchers, membership offers, and seasonal promotions are sent automatically.</li>
                     <li>Order Pickup & Delivery: Customers choose between in-store pickup or delivery, and orders are synced with inventory to avoid stock-outs.</li>
                     <li>Digital Invoices: Bills are sent via SMS or WhatsApp, so customers always have a digital record.</li>
                     <li>Product Information Access: Customers can view product details, expiry dates, and stock availability online or in-store.</li>
                     <li>Feedback & Reviews: Customers can leave reviews and feedback, helping stores improve service and offerings.</li>
                     <li>Multi-Store Access: Loyalty points, membership benefits, and purchase history are accessible from any branch.</li>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div><div className="col-md-6"><div className="faq-section">
         <div className="heading-wrap text-start">
            <h2>FAQ – Need Help? We've Got You Covered</h2>
         </div>
         <div className="accordion" id="faqAccordionRight">
            {/* FAQ 1 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse1" aria-expanded="true" aria-controls="faqRight-collapse1">
                  What is cosmetic billing software?
                  </button>
               </h2>
               <div id="faqRight-collapse1" className="accordion-collapse collapse show" aria-labelledby="faqRight-heading1" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     Cosmetic store software is a complete solution designed to simplify beauty store operations. It handles billing, inventory, accounting, AI Knowledge Base, and supply chain workflows, and integrates with payment gateways, Shopify, Tally, and other tools.
                  </div>
               </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse2" aria-expanded="false" aria-controls="faqRight-collapse2">
                  What are the benefits of cosmetic store software?
                  </button>
               </h2>
               <div id="faqRight-collapse2" className="accordion-collapse collapse" aria-labelledby="faqRight-heading2" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     <ul>
                        <li>Faster and error-free billing with barcode scanning and auto GST calculation</li>
                        <li>Real-time inventory tracking and automated stock reorders</li>
                        <li>Centralized management of multiple cosmetic store branches</li>
                        <li>Loyalty programs, memberships, and reward point management</li>
                        <li>Targeted promotions, discount vouchers, and customer segmentation</li>
                        <li>Integrated online store management with stock sync</li>
                        <li>Detailed analytics and 150+ MIS reports for informed decisions</li>
                        <li>Compliance management with GST, HSN codes, and digital records</li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse3" aria-expanded="false" aria-controls="faqRight-collapse3">
                  Can cosmetic store software manage multiple locations?
                  </button>
               </h2>
               <div id="faqRight-collapse3" className="accordion-collapse collapse" aria-labelledby="faqRight-heading3" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     Yes. ChittorTech allows you to manage multiple branches and stores from a single dashboard, sync stock across locations, transfer inventory between branches, and generate combined reports.
                  </div>
               </div>
            </div>
            {/* FAQ 4 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse4" aria-expanded="false" aria-controls="faqRight-collapse4">
                  How user-friendly is ChittorTech for cosmetic stores?
                  </button>
               </h2>
               <div id="faqRight-collapse4" className="accordion-collapse collapse" aria-labelledby="faqRight-heading4" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     The software features an intuitive interface, making it easy for staff to navigate. Billing, inventory, AI Knowledge Base, and reporting functions are simple to use and require minimal training.
                  </div>
               </div>
            </div>
            {/* FAQ 5 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse5" aria-expanded="false" aria-controls="faqRight-collapse5">
                  How does ChittorTech enhance customer satisfaction?
                  </button>
               </h2>
               <div id="faqRight-collapse5" className="accordion-collapse collapse" aria-labelledby="faqRight-heading5" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     It tracks customer purchase history and preferences, helping stores offer personalized promotions, reward points, vouchers, and memberships.
                  </div>
               </div>
            </div>
            {/* FAQ 6 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse6" aria-expanded="false" aria-controls="faqRight-collapse6">
                  How does the software help with inventory management?
                  </button>
               </h2>
               <div id="faqRight-collapse6" className="accordion-collapse collapse" aria-labelledby="faqRight-heading6" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     ChittorTech monitors stock levels in real-time, provides alerts for low stock, manages expiry dates, auto-generates purchase orders, and identifies fast- and slow-moving products.
                  </div>
               </div>
            </div>
            {/* FAQ 7 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse7" aria-expanded="false" aria-controls="faqRight-collapse7">
                  Can I integrate ChittorTech with my online store?
                  </button>
               </h2>
               <div id="faqRight-collapse7" className="accordion-collapse collapse" aria-labelledby="faqRight-heading7" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     Yes. Supports Shopify/WooCommerce. Synchronizes online & offline inventory and provides centralized reporting.
                  </div>
               </div>
            </div>
            {/* FAQ 8 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading8">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse8" aria-expanded="false" aria-controls="faqRight-collapse8">
                  How does ChittorTech support financial management?
                  </button>
               </h2>
               <div id="faqRight-collapse8" className="accordion-collapse collapse" aria-labelledby="faqRight-heading8" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     Generates real-time profit & loss statements, cash flow analysis, and GST-compliant financial reports.
                  </div>
               </div>
            </div>
            {/* FAQ 9 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading9">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse9" aria-expanded="false" aria-controls="faqRight-collapse9">
                  Can the software be customized for my cosmetic store?
                  </button>
               </h2>
               <div id="faqRight-collapse9" className="accordion-collapse collapse" aria-labelledby="faqRight-heading9" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     ChittorTech can be tailored to your store’s unique needs, including product categorization, billing methods, loyalty programs, and custom reporting.
                  </div>
               </div>
            </div>
            {/* FAQ 10 */}
            <div className="accordion-item">
               <h2 className="accordion-header" id="faqRight-heading10">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                     data-bs-target="#faqRight-collapse10" aria-expanded="false" aria-controls="faqRight-collapse10">
                  Are updates and support included?
                  </button>
               </h2>
               <div id="faqRight-collapse10" className="accordion-collapse collapse" aria-labelledby="faqRight-heading10" data-bs-parent="#faqAccordionRight">
                  <div className="accordion-body">
                     Yes. ChittorTech provides regular software updates and prompt support via email or call to ensure smooth operations.
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
