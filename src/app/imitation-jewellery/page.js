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
                <i className={`fa-solid fa-gem`}></i> Jewellery POS
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Imitation Jewellery Store Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Track designs, materials, and customer orders for your jewellery business.
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
                <i className={`fa-solid fa-gem`}></i>
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

    {/* Intelligent Stock Management */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>💎 Intelligent Stock Management, Always in Control</h3>
            <p>
                Track every jewellery piece with precision. Our AI-powered inventory system organizes
                items by style, size, design, and occasion—so you never miss a restock or oversell.
            </p>
            <ul>
                <li>Auto barcode & tag creation for simple tracking</li>
                <li>Product images for faster identification at billing</li>
                <li>Flexible pricing for different designs and collections</li>
            </ul>
        </div>
    </div>

    {/* Smart Accounting & GST */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>💎 Smart Accounting with Automated GST Handling</h3>
            <p>
                Let AI take the complexity out of finance. Get real-time visibility into profits,
                taxes, and expenses with built-in accounting and compliance tools.
            </p>
            <ul>
                <li>Automated ledgers and expense tracking</li>
                <li>GST-ready invoices and simplified return filing</li>
                <li>Accurate reconciliation across single or multiple outlets</li>
            </ul>
        </div>
    </div>

    {/* Omnichannel E-commerce */}
    <div className="col-md-4 col-sm-6">
        <div className="key-box">
            <h3>💎 Sell Everywhere with AI-Enabled Omnichannel Commerce</h3>
            <p>
                Turn your jewellery store into an online brand. Seamlessly connect offline sales
                with e-commerce platforms and manage everything from one smart dashboard.
            </p>
            <ul>
                <li>Quick integration with Shopify & WooCommerce</li>
                <li>Live inventory sync across online and physical stores</li>
                <li>Secure, integrated digital payment solutions</li>
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
                  <img src="/assets/images/img235.jpg" alt="Key Features for Jewellery Business" />
               </figure>
            </div>
         </div>
        <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start jeweller">
        <h4>🚀 AI-Powered Features That Elevate Your <span>Jewellery Business</span></h4>
        <p>
            ChittorTech brings intelligent automation, precision billing, and real-time control—helping
            jewellery retailers operate faster, smarter, and more profitably.
        </p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li><strong>Smart Payment Acceptance –</strong> Support UPI, cards, wallets, and multiple digital payment modes.</li>

            <li><strong>AI-Based Product Grouping –</strong> Classify jewellery by design, size, material, style, or collection.</li>

            <li><strong>Instant Barcode & Tag Creation –</strong> Enable rapid scanning for quick and accurate checkout.</li>

            <li><strong>Unified Financial Control –</strong> Manage accounts for all outlets from a single intelligent dashboard.</li>

            <li><strong>Auto GST Billing Engine –</strong> Generate compliant, error-free, tax-ready invoices automatically.</li>

            <li><strong>AI Loyalty Intelligence –</strong> Run reward points, memberships, and voucher-based programs.</li>

            <li><strong>WhatsApp Smart Invoicing –</strong> Send digital bills instantly with automated customer updates.</li>

            <li><strong>Advanced Business Analytics –</strong> Access 150+ AI-assisted MIS reports and performance insights.</li>

            <li><strong>Intelligent Stock Audits –</strong> Real-time verification to prevent mismatches and stock loss.</li>

            <li><strong>Digital Feedback Capture –</strong> Collect customer reviews directly from e-invoices.</li>

            <li><strong>Dynamic Offers & Promotions –</strong> Launch festive discounts, coupons, and bundle deals easily.</li>

            <li><strong>AI-Enabled Omnichannel Selling –</strong> Sync offline stores with online platforms seamlessly.</li>
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
                  <img src="/assets/images/img236.jpg" alt="Why Choose ChittorTech" />
               </figure>
            </div>
         </div>

         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2>🌟 Why Choose <span>ChittorTech?</span></h2>
               <p>Discover the key benefits of using our jewellery AI Assistant Software for seamless store operations and customer engagement:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li> Centralized Multi-Store Management – Manage multiple jewellery stores with ease</li>
                  <li> Cloud-Based Access – Run your business anytime, anywhere</li>
                  <li> User-Friendly Interface – Simple, intuitive, and easy to train staff</li>
                  <li> Device-Friendly – Works flawlessly on desktop, mobile, or tablet</li>
                  <li> Dedicated Support – Always available to assist you</li>
                  <li> Trusted by Jewellery Retailers – Thousands of satisfied customers</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
 



<section className="manufacturing-key section-bg">
   <div className="container">
         <div className="heading-wrap">
             <h2>How to Use <span>ChittorTech Imitation Jewellery Software</span></h2>
         </div>
      <div className="row justify-content-center gy-4">
          {/* Step 1: Setup Your Store */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 1: Setup Your Store</h3>
                  <ul>
                     <li>Register your store(s) in the software.</li>
                     <li>Add store details: name, location, GST number, contact info.</li>
                     <li>Configure tax rates and billing preferences.</li>
                  </ul>
              </div>
          </div>

          {/* Step 2: Add Products */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 2: Add Products</h3>
                  <ul>
                     <li>Upload imitation jewellery items with images, sizes, designs, and pricing.</li>
                     <li>Categorize products by type, occasion, or customer preference.</li>
                     <li>Generate barcodes and labels for all items.</li>
                  </ul>
              </div>
          </div>

          {/* Step 3: Manage Inventory */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 3: Manage Inventory</h3>
                  <ul>
                     <li>Track stock levels in real-time across multiple stores.</li>
                     <li>Set reorder thresholds to prevent stockouts.</li>
                     <li>Perform regular stock verification using the mobile app or dashboard.</li>
                  </ul>
              </div>
          </div>

          {/* Step 4: Billing & Checkout */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 4: Billing & Checkout</h3>
                  <ul>
                     <li>Scan items using barcodes for fast billing.</li>
                     <li>Accept multiple payment methods: UPI, cards, wallets, or cash.</li>
                     <li>Automatically generate GST-compliant invoices.</li>
                     <li>Send invoices instantly via WhatsApp or SMS.</li>
                  </ul>
              </div>
          </div>

          {/* Step 5: Customer Management */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 5: Customer Management</h3>
                  <ul>
                     <li>Maintain a centralized customer database.</li>
                     <li>Track purchase history, preferences, and loyalty points.</li>
                     <li>Segment customers for targeted promotions.</li>
                  </ul>
              </div>
          </div>

          {/* Step 6: Offers & Promotions */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 6: Offers & Promotions</h3>
                  <ul>
                     <li>Create seasonal offers, discounts, and voucher campaigns.</li>
                     <li>Apply discounts automatically during billing.</li>
                     <li>Track effectiveness of promotions using reports.</li>
                  </ul>
              </div>
          </div>

          {/* Step 7: Accounting & Compliance */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 7: Accounting & Compliance</h3>
                  <ul>
                     <li>Manage finances with integrated accounting tools.</li>
                     <li>Generate GST returns, balance sheets, and P&L statements.</li>
                     <li>Keep a complete digital record for tax audits.</li>
                  </ul>
              </div>
          </div>

          {/* Step 8: Reports & Insights */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 8: Reports & Insights</h3>
                  <ul>
                     <li>Access 150+ MIS reports for sales, inventory, and customer behavior.</li>
                     <li>Analyze trends and make data-driven decisions.</li>
                     <li>Monitor fast-selling or slow-moving products to optimize stock.</li>
                  </ul>
              </div>
          </div>

          {/* Step 9: Omnichannel Integration */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 9: Omnichannel Integration</h3>
                  <ul>
                     <li>Sync inventory with your online store (Shopify/WooCommerce).</li>
                     <li>Handle online orders, payments, and delivery.</li>
                     <li>Maintain consistent stock and pricing across all channels.</li>
                  </ul>
              </div>
          </div>

          {/* Step 10: Feedback & Improvements */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Step 10: Feedback & Improvements</h3>
                  <ul>
                     <li>Collect customer feedback and reviews via digital invoices.</li>
                     <li>Use insights to enhance products, services, and overall store experience.</li>
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
         <h2>FAQ – <span>Need Help?</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What is imitation jewellery store software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Imitation jewellery store software, or Imitation Jewellery AI Assistant Software, simplifies store operations, including inventory management, customer engagement, online sales, billing, and financial management. It is ideal for single or multi-store businesses.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How do I select the best imitation jewellery AI Assistant Software for my store?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Choose software that matches your store’s size, product variety, and business model. Key features to look for include inventory management, multi-store support, billing automation, GST compliance, AI Knowledge Base, reporting tools, and e-commerce integration. ChittorTech offers tailored solutions for these needs.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I customize the software to fit my jewellery store requirements?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes! ChittorTech’ software is fully customizable to suit your store’s workflows, product types, billing preferences, and customer management needs.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Are software updates included and how often are they released?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, software updates are included and released regularly to provide new features, fix bugs, and ensure compliance with GST and industry standards.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        How do you provide training and implementation support?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Our experts provide step-by-step onboarding, training sessions, and post-implementation support to ensure smooth operation at your store.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        What is the cost of your jewellery store software?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Pricing depends on the number of stores, users, and modules selected. ChittorTech offers affordable, scalable plans for small, medium, and large jewellery businesses. Request a personalized quote for details.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Can I set up an online store using ChittorTech’ software?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes! It integrates with Shopify and WooCommerce, allowing you to manage both online and offline stores from a single dashboard.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        Are your experts available for service and technical assistance?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely. ChittorTech provides dedicated customer support and technical assistance for prompt resolution of any issues.
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
