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
                <i className={`fa-solid fa-basket-shopping`}></i> Grocery POS
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Smart Grocery Store Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Streamline billing, stock management, and supplier orders for your grocery store.
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
                <i className={`fa-solid fa-basket-shopping`}></i>
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

      {/* AI Automated Billing & Smart POS */}
      <div className="col-md-4 col-sm-6">
         <div className="key-box">
            <h3>AI Automated Billing & Smart POS</h3>
            <p>Eliminate manual billing with AI-powered fast and accurate checkout using integrated payment options.</p>
            <ul>
               <li>AI sales invoices – generate bills automatically</li>
               <li>AI weigh-scale integration for precise billing</li>
               <li>AI multi-payment support (cash, UPI, digital wallets)</li>
               <li>AI mobile invoice sharing directly to customers</li>
            </ul>
         </div>
      </div>

      {/* AI Smart Inventory Management */}
      <div className="col-md-4 col-sm-6">
         <div className="key-box">
            <h3>AI Smart Inventory Management</h3>
            <p>Monitor stock in real time and reduce shortages with AI-driven inventory control.</p>
            <ul>
               <li>AI stock tracking & verification</li>
               <li>AI low-stock alerts and auto notifications</li>
               <li>AI barcode & label generation</li>
               <li>AI category & brand-wise stock management</li>
               <li>AI fast- & slow-moving product analysis</li>
            </ul>
         </div>
      </div>

      {/* AI Error-Free Accounting */}
      <div className="col-md-4 col-sm-6">
         <div className="key-box">
            <h3>AI Error-Free Accounting</h3>
            <p>Simplify finances and stay fully GST-compliant with AI-powered accounting.</p>
            <ul>
               <li>AI ledger & balance sheet management</li>
               <li>AI GST-compliant invoicing & returns</li>
               <li>AI expense tracking & P&amp;L monitoring</li>
               <li>150+ AI-powered reports & analytics</li>
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
                  <h2>Run Your Grocery Store Smarter with AI</h2>
                 
               </div>
               <div className="desktop-industries">
               <div className="row justify-content-center">
                    {/* Feature 1 */}
                    <div className="col-md-4 col-12 mb-4">
                      <div className="boxes flip-container">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-back">
                              <img src="/assets/images/b1.png" alt="Faster Billing" className="img-fluid mb-3" />
                             <h4>AI Fast Billing & GST Compliance</h4>
<p>Automate billing and invoicing with an AI-powered system that ensures 100% GST compliance for grocery stores.</p>

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
                              <img src="/assets/images/b2.png" alt="SMS Bills & Offers" className="img-fluid mb-3" />
                              <h4>AI Stock & Inventory Management</h4>
                              <p>Track all items in real-time and manage brand-wise stock.
</p>
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
                              <img src="/assets/images/b3.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                              <h4>AI Sales Insights & Reorders</h4>
                              <p>Identify fast/slow-selling products and auto-reorder high-demand items.
</p>
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
                              <img src="/assets/images/b4.png" alt="Stock Tracking" className="img-fluid mb-3" />
                              <h4>AI Multi-Payment & POS </h4>
                              <p> Accept UPI, wallets, cards, and operate multiple billing counters efficiently.
</p>
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
                              <img src="/assets/images/b5.png" alt="Inventory Management" className="img-fluid mb-3" />
                              <h4>AI Customer Engagement</h4>
                              <p>Send bills, offers, and updates via WhatsApp instantly</p>
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
                              <img src="/assets/images/b6.png" alt="Stock Verification" className="img-fluid mb-3" />
                              <h4>AI Promotions & Discounts</h4>
                              <p>Run loyalty programs and partner promotions with AI automation.
</p>
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
                              <img src="/assets/images/b7.png" alt="Automated Reorders" className="img-fluid mb-3" />
                              <h4>AI Reporting & Analytics </h4>
                              <p>Access 150+ AI-generated reports on sales, inventory, and finances.
</p>
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
                              <img src="/assets/images/b8.png" alt="Alerts & Notifications" className="img-fluid mb-3" />
                              <h4>AI Branch & Warehouse Management </h4>
                              <p>Control multiple stores, franchises, and warehouses from one dashboard.
.</p>
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
                              <img src="/assets/images/b9.png" alt="Warehouse & Godown Management" className="img-fluid mb-3" />
                              <h4>AI Barcode & Labeling</h4>
                              <p>Simplify scanning, labeling, and inventory audits.</p>
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
                              <img src="/assets/images/b1.png" alt="Intelligent POS" className="img-fluid mb-3" />
                              <h4>AI Weigh-Scale Integration & Returns</h4>
                              <p>Accurate billing for weighted items and seamless return management.
</p>
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
         <h2> Pricing & Plans</h2>
      </div>
      <div className="row justify-content-center">

         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Grocery Stores</h3>
                  <p>Automated AI Support Chatbot & Inventory Management for small shops.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Automated AI Support Chatbot</li>
                  <li>✔ Real-time Inventory Management</li>
                  <li>✔ Stock Alerts & Verification</li>
                  <li>✔ GST-Compliant Invoices</li>
                  <li>👉 Ideal for single-location small stores</li>
               </ul>
               <div className="price">₹6,999 <span>/month</span></div>
            </div>
         </div>

         {/* Standard Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card standard">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-primary">
                     <i className="bi bi-cart4"></i>
                  </div>
                  <h3>Standard Plan – Medium Grocery Stores</h3>
                  <p>Everything in Basic, plus advanced stock & sales management.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Brand-wise Stock Management</li>
                  <li>✔ Offers & Discount Management</li>
                  <li>✔ Reporting & Analytics Dashboard</li>
                  <li>👉 Perfect for expanding retailers</li>
               </ul>
               <div className="price">₹12,999 <span>/month</span></div>
            </div>
         </div>

         {/* Premium Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card premium">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                     <i className="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Large Grocery Chains</h3>
                  <p>The ultimate solution for multi-branch grocery chains.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Weigh-Scale Integration</li>
                  <li>✔ Multi-Branch Management</li>
                  <li>✔ Mobile Invoice Sharing</li>
                  <li>✔ Omnichannel Sales & Custom Integrations</li>
                  <li>✔ Dedicated Support & Custom Features</li>
                  <li>👉 Schedule a Free Demo to find the best plan</li>
               </ul>
               <div className="price">Custom Pricing</div>
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
                  <img src="/assets/images/img253.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
      <div className="col-md-7 order-md-1">
   <div className="heading-wrap text-start">
      <h2>AI Multi-Store Grocery Management</h2>
      <p>Manage all your grocery outlets, inventory, and customers effortlessly with a centralized AI-powered platform.</p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>AI Unified Customer Database :</strong>
            Consolidate customer data from every branch and franchise into a single intelligent system.
         </li>

         <li>
            <strong>AI Stock Transfers & Requests :</strong>
            Transfer inventory between store locations in real time with AI-driven stock optimization.
         </li>

         <li>
            <strong>AI Reporting & Analytics :</strong>
            View consolidated, AI-powered reports and dashboards covering all grocery outlets.
         </li>

         <li>
            <strong>AI Centralized Operations :</strong>
            Oversee daily operations of multiple grocery branches from one smart dashboard.
         </li>

         <li>
            <strong>AI Inventory Control :</strong>
            Monitor stock levels, sales performance, and trends across all outlets instantly.
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
                  <img src="/assets/images/img254.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
       <div className="col-md-7">
   <div className="heading-wrap text-start">
      <h2>All-in-One AI Grocery Management</h2>
      <p>Handle your grocery store operations smoothly with powerful AI-driven tools:</p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li><strong>AI Smart POS :</strong> Fast, accurate checkout for every store.</li>
         <li><strong>AI Multi-Store Management :</strong> Control multiple outlets anytime, anywhere.</li>
         <li><strong>AI Inventory & Barcode Control :</strong> Track and organize stock intelligently.</li>
         <li><strong>AI Multi-Payment Support :</strong> Accept cards, UPI, wallets with AI-managed processing.</li>
         <li><strong>AI Forecasting & Analytics :</strong> Smart reports to optimize sales and inventory.</li>
         <li><strong>AI Online Store Launch :</strong> Expand digitally with an AI-synced e-commerce platform.</li>
      </ul>
   </div>
</div>

      </div>
   </div>
</section>
 




<section className="manufacturing-key section-bg">
<div className="container">
   <div className="heading-wrap">
       <h2>Why Chittortech <span>Solutions?</span> </h2>
       <p>ChittorTech is a complete grocery store management software that integrates billing, inventory, payments, reporting, and customer management into a single, easy-to-use platform. It is designed for modern grocery stores to simplify operations, enhance efficiency, and boost profitability.</p>
   </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>User-Friendly</h3>
               <p> Intuitive invoicing and POS system for seamless day-to-day operations.</p>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Affordable</h3>
               <p>Competitive pricing without compromising on features.</p>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Client Satisfaction</h3>
               <p>Trusted by Thousands merchants with high satisfaction.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Cloud-Based</h3>
               <p>Access your store and data anytime, from anywhere.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Secure </h3>
               <p>High-end security ensures no data loss and complete safety.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Mobile App </h3>
               <p>Manage your grocery store from any device, anytime.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Quick Support</h3>
               <p>Dedicated support team for rapid problem-solving.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Seamless Integrations</h3>
               <p> Works with e-commerce platforms, payment solutions, communication tools, logistics, and compliance systems.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Proven Experience</h3>
               <p>Years of practical expertise in retail solutions ensure reliable and efficient operations.</p>
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
               <h2>ChittorTech: Innovative Retail Solutions for Modern Grocery Stores</h2>
               <p>Designed specifically for grocery stores, our seamless billing software is easy to implement and use. We understand the diverse challenges faced by grocery store owners—billing, stock management, and payments are critical operations that grocers need simplified solutions for. Automated systems help manage peak times, avoid delays, and improve overall efficiency. Bring ChittorTech to your store and experience the difference yourself.</p>
               <p>An outstanding billing and invoicing solution customized precisely for your grocery store! See improvements in productivity, customer satisfaction, and overall business performance.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
          <h2>How to Use ChittorTech in Your <span>Grocery Store:</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

          {/* 1. Login & Dashboard Access */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Setup Your Store</h3>
                  <p> Add store details, inventory, suppliers, and pricing.</p>
              </div>
          </div>

          {/* 2. Add & Manage Products */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Billing & POS</h3>
                  <p>Generate bills quickly using barcode scanning, UPI, card, or cash.</p>
              </div>
          </div>

          {/* 3. Manage Inventory */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Inventory Management</h3>
                  <p> Track stock in real-time, categorize products, and automate reorders.</p>
              </div>
          </div>

          {/* 4. Billing & POS Operations */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Customer Managemen</h3>
                  <p>Record customer details, loyalty points, and send offers via SMS/WhatsApp.</p>
              </div>
          </div>

          {/* 5. Customer Management */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Accounting & Compliance</h3>
                  <p> Access built-in accounting, GST returns, and financial reports.</p>
              </div>
          </div>

          {/* 6. Accounting & Financial Management */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Multi-Store Management </h3>
                  <p> If you have multiple branches, manage inventory, sales, and reports from one dashboard.</p>
              </div>
          </div>

          {/* 7. Reporting & Analytics */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Online Store Integration</h3>
                  <p>Sell products online and sync stock with your physical store.</p>
              </div>
          </div>

          {/* 8. Online Store Integration */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Analytics & Reporting</h3>
                  <p>Generate MIS reports to make data-driven decisions and plan promotions effectively.</p>
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
                    <h2>How to Use ChittorTech: Step-by-Step Guide</h2>
                </div>
            </div>
        </div>

        <div className="row justify-content-center gy-4">
            {/* Step 1 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>1. Installation & Setup</h3>
                    <ul>
                        <li><strong>Sign Up / Login:</strong> Create an account on ChittorTech.</li>
                        <li><strong>Store Setup:</strong> Add your store details (name, location, GST info, logo).</li>
                        <li><strong>Branch Setup:</strong> For multi-store businesses, add all outlets with their addresses.</li>
                        <li><strong>User Roles:</strong> Assign roles like Admin, Cashier, Inventory Manager, or Accountant.</li>
                    </ul>
                </div>
            </div>

            {/* Step 2 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>2. Inventory Management</h3>
                    <ul>
                        <li><strong>Add Products:</strong> Enter products with details like name, SKU, category, brand, and price.</li>
                        <li><strong>Stock Levels:</strong> Set initial stock quantities for each store location.</li>
                        <li><strong>Barcode / Label Generation:</strong> Print barcodes or labels for faster billing and tracking.</li>
                        <li><strong>Stock Alerts:</strong> Receive notifications when items run low.</li>
                        <li><strong>Automated Reordering:</strong> Configure auto-reorder for fast-moving products.</li>
                    </ul>
                </div>
            </div>

            {/* Step 3 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>3. Billing & POS</h3>
                    <ul>
                        <li><strong>Create Bills:</strong> Use the POS system to quickly scan items and generate GST-compliant invoices.</li>
                        <li><strong>Multiple Payment Options:</strong> Accept cash, card, UPI, and digital wallets.</li>
                        <li><strong>Digital Bills:</strong> Send bills via SMS or WhatsApp to customers.</li>
                        <li><strong>No-Queue Billing:</strong> For large stores, manage multiple billing counters or mobile POS (mPOS).</li>
                    </ul>
                </div>
            </div>

            {/* Step 4 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>4. Customer Management</h3>
                    <ul>
                        <li><strong>Unified Customer Database:</strong> Track customer info, purchase history, and loyalty points.</li>
                        <li><strong>Customer Segmentation:</strong> Identify VIP, regular, or risk customers for targeted promotions.</li>
                        <li><strong>Loyalty Programs & Rewards:</strong> Add membership points and redeem them during checkout.</li>
                        <li><strong>Promotions & WhatsApp Alerts:</strong> Send discounts, special offers, and updates.</li>
                    </ul>
                </div>
            </div>

            {/* Step 5 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>5. Financial Management</h3>
                    <ul>
                        <li><strong>Accounting Module:</strong> Track expenses, revenues, and profits.</li>
                        <li><strong>GST & E-invoicing:</strong> Auto-generate GST reports, returns, and E-invoices.</li>
                        <li><strong>Profit & Loss Reporting:</strong> Access daily, weekly, or monthly financial statements.</li>
                    </ul>
                </div>
            </div>

            {/* Step 6 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>6. Multi-Store & Centralized Management</h3>
                    <ul>
                        <li><strong>Centralized Dashboard:</strong> Monitor all stores from one location.</li>
                        <li><strong>Stock Transfer:</strong> Move stock between stores efficiently.</li>
                        <li><strong>Central Accounting:</strong> Combine finances of all outlets for easier analysis.</li>
                        <li><strong>Reports & Analytics:</strong> Get insights for decision-making, forecasting, and demand trends.</li>
                    </ul>
                </div>
            </div>

            {/* Step 7 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>7. Online Store Integration</h3>
                    <ul>
                        <li><strong>Set Up Online Shop:</strong> Sell products online with inventory synced to physical stores.</li>
                        <li><strong>Order & Delivery Management:</strong> Track online orders, shipments, and returns.</li>
                        <li><strong>Customer Experience:</strong> Offer promotions, loyalty points, and notifications online.</li>
                    </ul>
                </div>
            </div>

            {/* Step 8 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>8. Reporting & Insights</h3>
                    <ul>
                        <li><strong>MIS Reports:</strong> Access 100++ reports like stock aging, fast/slow-selling items, and revenue metrics.</li>
                        <li><strong>Sales Analytics:</strong> Understand which products perform best by branch, category, or season.</li>
                        <li><strong>Customer Insights:</strong> Track buying patterns for marketing strategies.</li>
                    </ul>
                </div>
            </div>

            {/* Step 9 */}
            <div className="col-lg-4 col-md-6">
                <div className="key-box">
                    <h3>9. Training & Support</h3>
                    <ul>
                        <li><strong>Onboarding:</strong> ChittorTech provides free training to learn the software.</li>
                        <li><strong>Customer Support:</strong> Access prompt help via chat, call, or email.</li>
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
                           What is ChittorTech Grocery Billing Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A cloud-based POS system designed for grocery stores to manage billing, inventory, accounting, AI Knowledge Base, and reporting in one platform.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           Can I integrate weighing scales for billing?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software supports weigh-scale integration for accurate bills based on product weight.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           Does it support GST-compliant invoicing?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, generate GST-compliant bills and automated tax calculations easily.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           Can I manage multiple brands in my store?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, enjoy brand-wise stock management to track inventory efficiently.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           Can I send invoices and promotions via WhatsApp?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software allows WhatsApp invoice sharing and promotional notifications.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           Can it handle fast-selling and slow-selling stock analysis?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely, it tracks inventory trends and provides stock performance reports.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           Does it support multiple billing counters?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, speed up checkouts with multiple billing counters for high-volume stores.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           Can I set up an online grocery store?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software is compatible with e-commerce integrations to manage online and offline stock.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           Can I manage returns and exchanges?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, update inventory in real-time for returned or exchanged products.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           Is the software customizable for my grocery store?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, ChittorTech offers full customization for POS, inventory, AI Knowledge Base, and e-commerce features.
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
