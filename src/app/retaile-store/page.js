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
                <i className={`fa-solid fa-store`}></i> AI Retail
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                AI Retail Store Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Intelligent retail operations with AI-powered billing, analytics, and customer insights.
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

   {/* Intelligent POS & Billing */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Intelligent POS & Billing</h3>
         <ul>
            <li>AI-assisted fast & error-free billing</li>
            <li>Accept cash, cards, UPI & digital wallets</li>
            <li>Mobile POS (mPOS) for on-the-go billing</li>
            <li>Image-based AI product scanning</li>
            <li>GST-compliant automated invoicing</li>
         </ul>
      </div>
   </div>

   {/* Multi-Store & Branch Management */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>AI Multi-Store Management</h3>
         <ul>
            <li>Centralized AI dashboard for all branches</li>
            <li>Smart stock transfers between stores</li>
            <li>Unified customer database</li>
            <li>Branch-wise performance analytics</li>
         </ul>
      </div>
   </div>

   {/* Inventory Management */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>AI Inventory Management</h3>
         <ul>
            <li>Real-time stock tracking</li>
            <li>Automated AI reorders</li>
            <li>Fast & slow-moving product analysis</li>
            <li>Barcode & label generation</li>
            <li>Warehouse & multi-location control</li>
         </ul>
      </div>
   </div>

   {/* Customer Engagement */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Customer Loyalty & Engagement</h3>
         <ul>
            <li>AI customer segmentation</li>
            <li>Personalized offers & discounts</li>
            <li>Loyalty points & memberships</li>
            <li>Bulk WhatsApp promotions</li>
            <li>Feedback & review collection</li>
         </ul>
      </div>
   </div>

   {/* Accounting & Finance */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Accounting & Financial Automation</h3>
         <ul>
            <li>Integrated accounting & ledgers</li>
            <li>Automated GST & tax compliance</li>
            <li>P&L, expense & cashflow tracking</li>
            <li>E-Way Bill & E-Invoicing</li>
         </ul>
      </div>
   </div>

   {/* Omnichannel & E-Commerce */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Omnichannel & E-Commerce</h3>
         <ul>
            <li>Custom online store setup</li>
            <li>Shopify & WooCommerce integration</li>
            <li>Real-time stock sync</li>
            <li>Secure payment gateway integration</li>
         </ul>
      </div>
   </div>

   {/* Reporting & Analytics */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Smart Reporting & Analytics</h3>
         <ul>
            <li>150+ AI-powered MIS reports</li>
            <li>Predictive sales & demand analytics</li>
            <li>Interactive dashboards & alerts</li>
            <li>Customer behavior insights</li>
         </ul>
      </div>
   </div>

   {/* Additional AI Advantages */}
   <div className="col-md-4 col-sm-6">
      <div className="key-box">
         <h3>Additional AI Advantages</h3>
         <ul>
            <li>AI stock & expiry alerts</li>
            <li>AI pricing & promotion optimization</li>
            <li>AI-assisted store layout planning</li>
            <li>Seamless omnichannel experience</li>
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
  


<section className="bridal-store-sec liquor-store-sec">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
           <div className="bridal-store liquor-store">

   <h2>Why Choose Chittortech AI Retail AI Automation?</h2>
   <p>
      Chittortech AI Retail AI Automation is a next-generation, AI-powered retail management platform designed to simplify operations, improve profitability, and scale businesses effortlessly across multiple retail segments.
   </p>

   <ul>
      <li><strong>No. 1 AI-Powered Retail Solution –</strong> Built for gift shops, toy stores, sports shops, supermarkets, hardware stores, and more.</li>

      <li><strong>Automated, Cloud-Based Platform –</strong> Access your store data securely anytime, anywhere, from any device.</li>

      <li><strong>Centralized Multi-Store Management –</strong> Manage branches, warehouses, inventory, and customer data from a single AI-driven dashboard.</li>

      <li><strong>User-Friendly Interface –</strong> Minimal training required with an intuitive design that staff can use easily.</li>

      <li><strong>Scalable & Feature-Rich –</strong> Grow seamlessly from a single store to a large retail chain without changing systems.</li>

      <li><strong>Data-Driven Decision Making –</strong> AI-powered insights help reduce losses, increase profits, and improve customer satisfaction.</li>
   </ul>

   <button onClick={() => { window.location.href = "/contact-us"; }} className="cta-button">
      Book Your Free Demo Today
   </button>

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
                           1. What is ChittorTech Retail Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A1. A cloud-based POS and AI & IT Solutions solution designed to manage billing, inventory, AI Knowledge Base, GST compliance, loyalty programs, and multi-store operations for liquor shops.
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
                           A10. Yes. ChittorTech provides full customization for POS, inventory management, multi-location operations, and AI Knowledge Base modules.
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
