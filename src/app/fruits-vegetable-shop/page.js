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
                <i className={`fa-solid fa-apple-whole`}></i> F&V Management
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Fruits & Vegetable Shop Management Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Weight-based billing, perishable stock alerts, and daily profit reports.
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
                <i className={`fa-solid fa-apple-whole`}></i>
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

   {/* AI Accurate Billing & Smart Management */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI Accurate Billing & Smart Management</h3>
         <p>Generate error-free, AI-powered bills with weigh-scale integration and flexible payment options.</p>
         <ul>
            <li>AI weigh-scale integration for instant weight capture</li>
            <li>AI-enabled UPI & digital wallet payments</li>
            <li>AI digital invoices shared via WhatsApp</li>
            <li>AI multi-payment checkout for faster billing</li>
         </ul>
      </div>
   </div>

   {/* AI Smart Stock & Inventory Management */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI Smart Stock & Inventory Management</h3>
         <p>Reduce wastage and manage fresh stock efficiently with real-time AI-driven inventory updates.</p>
         <ul>
            <li>AI barcode & label generation</li>
            <li>AI stock-out and low-stock alerts</li>
            <li>AI fast- and slow-selling product analysis</li>
            <li>AI multi-location inventory management</li>
         </ul>
      </div>
   </div>

   {/* AI Robust Online Store */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI Robust Online Store</h3>
         <p>Expand digitally with an AI-synced e-commerce store connected to your physical outlets.</p>
         <ul>
            <li>AI custom online store setup</li>
            <li>AI payment gateway integration</li>
            <li>AI centralized stock management</li>
            <li>AI seamless order tracking</li>
         </ul>
      </div>
   </div>

   {/* AI Powerful AI Knowledge Base & Customer Loyalty */}
   <div className="col-md-3 col-sm-6">
      <div className="key-box">
         <h3>AI Powerful AI Knowledge Base & Customer Loyalty</h3>
         <p>Boost retention and sales using AI-driven customer engagement and loyalty tools.</p>
         <ul>
            <li>AI digital & physical membership cards</li>
            <li>AI gift vouchers & loyalty programs</li>
            <li>AI personalized offers & discounts</li>
            <li>AI home delivery management</li>
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
               <h2>  Financial Management &  <span>Accounting</span> </h2>
               <p>Simplify your business finances with inbuilt accounting and reporting modules.</p>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Fruits Vegetable Shop - platforms1" /> </figure>
                     <h3>Real-time expense, revenue, and profit tracking</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Fruits Vegetable Shop - platforms2" /> </figure>
                     <h3>GST-compliant invoicing & returns</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Fruits Vegetable Shop - platforms3" /> </figure>
                     <h3>Cash register & card/UPI integration</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Fruits Vegetable Shop - platforms4" /> </figure>
                     <h3>Detailed reporting & analytics with 150+ reports</h3>
                  </li>
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
                  <h2>AI-Powered Solution for Your Fruit & Vegetable Store </h2>
                  <p>Run your shop smarter, faster, and fully automated with AI-driven management tools.</p>
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
                              <h4>AI Billing & Smart Management</h4>
<ul>
   <li>AI checkout system for fast and precise billing of all products</li>
   <li>AI weigh-scale billing to instantly capture weight and price</li>
   <li>AI digital invoices automatically sent via WhatsApp or email</li>
   <li>AI multi-payment support for cards, UPI, wallets, and cash</li>
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
                              <img src="/assets/images/b2.png" alt="SMS Bills & Offers" className="img-fluid mb-3" />
                            <h4>AI Stock & Inventory Control</h4>
<ul>
   <li>AI-powered stock tracking to monitor fresh produce in real time</li>
   <li>AI auto-reorder system predicts restocking needs in advance</li>
   <li>Mobile-based AI stock verification for accurate audits</li>
   <li>AI barcode & label generation for instant product identification</li>
   <li>AI warehouse management to track storage and stock movement automatically</li>
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
                              <img src="/assets/images/b3.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                             <h4>AI Finance & Accounting</h4>
<ul>
   <li>AI-driven accounting system for error-free bookkeeping</li>
   <li>Automatic GST and tax-compliant invoice updates</li>
   <li>Real-time AI insights into expenses, profits, and cash flow</li>
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
                              <img src="/assets/images/b4.png" alt="Stock Tracking" className="img-fluid mb-3" />
                             <h4>AI Customer Engagement & Loyalty</h4>
<ul>
   <li>AI WhatsApp alerts for bills, offers, and store updates</li>
   <li>Loyalty points and membership programs managed by AI</li>
   <li>AI-powered discount and promotional campaign management</li>
   <li>Personalized AI notifications for birthdays, anniversaries, and special events</li>
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
                              <img src="/assets/images/b5.png" alt="Inventory Management" className="img-fluid mb-3" />
                              <h4>AI Online Expansion</h4>
<ul>
   <li>AI-enabled e-commerce store with automatic online-offline stock sync</li>
   <li>Support for multiple digital payment options with AI optimization</li>
   <li>Centralized AI dashboard to manage branches and online orders</li>
</ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                          

                    {/* Feature 15 */}
                    
                  </div>
               </div>
           </div>
       </div>
   </div>
</section>

<section className="pricing-section py-5">
   <div className="container">
      <div className="heading-wrap text-center">
         <h2>💰 Pricing & Plans</h2>
      </div>
      <div className="row justify-content-center">

         {/* Basic Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card basic">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                     <i className="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Fruit Shops</h3>
                  <p>For small shops starting with Billing & inventory management.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ POS & Billing System</li>
                  <li>✔ Real-time Inventory Tracking</li>
                  <li>✔ Stock Alerts & Notifications</li>
                  <li>✔ GST-Compliant Invoices</li>
                  <li>👉 Ideal for single-location fruit shops</li>
               </ul>
               <div className="price">₹2999 <span>/month</span></div>
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
                  <p>For growing shops with online presence & loyalty programs.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Online Store Integration</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Advanced Reporting & Analytics</li>
                  <li>👉 Perfect for expanding retailers</li>
               </ul>
               <div className="price">₹4999  <span>/month</span></div>
            </div>
         </div>

         {/* Premium Plan */}
         <div className="col-md-4 mb-4">
            <div className="pricing-card premium">
               <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                     <i className="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Large Chains</h3>
                  <p>The ultimate solution for multi-store fruit & vegetable chains.</p>
               </div>
               <ul className="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Weigh-Scale Integration</li>
                  <li>✔ Automated Reorders</li>
                  <li>✔ Customer Event Reminders</li>
                  <li>✔ Omnichannel Order Management</li>
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
                  <img src="/assets/images/img250.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7 order-md-1">
   <div className="heading-wrap text-start">
      <h2>AI-Powered Control for Multi-Store <span>Fruit & Vegetable Businesses</span></h2>
      <p>Manage inventory, billing, accounting, and daily operations for all your fruit and vegetable outlets from one intelligent dashboard.</p>
   </div>

   <div className="expertise-wrap bridal-wrap">
      <ul>
         <li><strong>AI Stock Transfer & Requests:</strong> Instantly move fruits and vegetables between branches with real-time AI-driven inventory updates.</li>

         <li><strong>AI Central Accounting:</strong> Handle billing, expenses, and bookkeeping for all stores from one unified AI-powered accounting system.</li>

         <li><strong>AI Reporting & Analytics:</strong> Generate smart reports for individual outlets or consolidated insights across all store locations.</li>

         <li><strong>AI Multi-Location Management:</strong> Monitor operations, sales, and performance of every branch through a single AI-enabled dashboard.</li>

         <li><strong>AI Centralized Inventory Control:</strong> View live stock levels across all outlets with AI alerts for low stock, excess inventory, and fast-moving items.</li>

         <li><strong>AI Unified Customer Database:</strong> Maintain one customer database across locations and run AI-targeted offers and promotions seamlessly.</li>
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
                  <img src="/assets/images/img251.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
                <h4>AI-Powered Management: From Billing to Inventory</h4>
               <p>Handle all your fruit and vegetable store operations seamlessly with AI-driven software.</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
              <ul>
        <li><strong>AI Smart Management –</strong> Fast, accurate, and intelligent checkout at every store.</li>
        <li><strong>AI Multi-Store Management –</strong> Control multiple outlets anytime, anywhere with AI automation.</li>
        <li><strong>AI Inventory & Barcode Control –</strong> Track, organize, and manage stock efficiently using AI.</li>
        <li><strong>AI Multi-Payment Handling –</strong> Accept cards, UPI, wallets, and other payment modes smoothly.</li>
        <li><strong>AI Forecasting & Analytics –</strong> Generate AI-driven reports to predict trends and optimize operations.</li>
        <li><strong>AI Online Store Launch –</strong> Expand digitally with a fully AI-managed e-commerce platform.</li>
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
               <h2> Key Metrics You Can  <span>Achieve</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Fruits Vegetable Shop - platforms1" /> </figure>
                     <h3>1X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Fruits Vegetable Shop - platforms2" /> </figure>
                     <h3>46+ Billing Hours Saved/Month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Fruits Vegetable Shop - platforms3" /> </figure>
                     <h3>34% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Fruits Vegetable Shop - platforms4" /> </figure>
                     <h3>38% Decrease in Manual Errors</h3>
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
          <h2>Why Choose Chittortech  <span>?</span> </h2>
      </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Client Satisfaction  </h3>
               <p> Trusted by thousands of happy and satisfied clients.</p>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Prompt Support </h3>
               <p> Dedicated customer support team ready to help you anytime.</p>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Training & Implementation </h3>
               <p>Free training for over a month to learn & operate the software thoroughly.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Cloud-Based Fruit Shop Software</h3>
               <p>Access your store anytime with cloud-based connectivity.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Experience </h3>
               <p>Years of expertise in creating retail-based solutions.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>User-Friendly </h3>
               <p> Intuitive and easy-to-use software for vegetable sellers.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Affordable </h3>
               <p> Competitively priced for businesses of all sizes.</p>
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
               <h2>ChittorTech: Smart Solution for Efficient and Profitable Fruit & Vegetable Stores</h2>
               <p>Our smart billing software is explicitly designed by retail solution experts. The software eliminates challenges that come with running a fruit and vegetable retail business — managing inventory, streamlining operations, providing excellent customer service, and ensuring smooth sales transactions, to name a few. Our clients report improved store efficiency, faster reports, more control over operations, and enhanced customer satisfaction. It takes care of accounting, inventory, AI Knowledge Base, online store, and all other operations of fruit and vegetable store businesses.</p>
               <p><strong>So why wait?</strong></p>
               <p>Experience a custom billing and inventory management system tailored specifically for your fruit and vegetable store!</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg pt-60">
   <div className="container">
      <div className="heading-wrap">
          <h2>How to Use ChittorTech Fruits <span>& Vegetables AI Assistant Software</span></h2>
      </div>
      <div className="row justify-content-center gy-4">

          {/* 1. Login & Dashboard Access */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Login &amp; Dashboard Access</h3>
                  <ul>
                     <li>Login with your store credentials on any device connected to the cloud</li>
                     <li>Access central dashboard to view sales, stock, and financial data across stores</li>
                  </ul>
              </div>
          </div>

          {/* 2. Add & Manage Products */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Add &amp; Manage Products</h3>
                  <ul>
                     <li>Add fruits, vegetables, and grocery items with SKU, price, category, and stock quantity</li>
                     <li>Generate unique barcodes for fast checkout</li>
                     <li>Categorize products by type, brand, or season for easier tracking</li>
                  </ul>
              </div>
          </div>

          {/* 3. Manage Inventory */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Manage Inventory</h3>
                  <ul>
                     <li>Track stock levels in real-time for each branch</li>
                     <li>Set low-stock alerts to prevent shortages</li>
                     <li>Transfer stock between branches using Stock Transfer & Request feature</li>
                  </ul>
              </div>
          </div>

          {/* 4. Billing & POS Operations */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Billing &amp; POS Operations</h3>
                  <ul>
                     <li>Generate invoices quickly with barcode scanning</li>
                     <li>Offer multiple payment modes: Cash, Card, UPI, Wallet</li>
                     <li>Send digital bills via SMS or WhatsApp</li>
                  </ul>
              </div>
          </div>

          {/* 5. Customer Management */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Customer Management</h3>
                  <ul>
                     <li>Store customer details including purchase history, loyalty points, and contacts</li>
                     <li>Run loyalty programs, offers, and discounts</li>
                     <li>Segment customers for targeted marketing</li>
                  </ul>
              </div>
          </div>

          {/* 6. Accounting & Financial Management */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Accounting &amp; Financial Management</h3>
                  <ul>
                     <li>Monitor income, expenses, and profits in real-time</li>
                     <li>Generate GST-compliant invoices and automated tax reports</li>
                     <li>Track cash flow, receivables, payables, and balance sheets from a single dashboard</li>
                  </ul>
              </div>
          </div>

          {/* 7. Reporting & Analytics */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Reporting &amp; Analytics</h3>
                  <ul>
                     <li>View branch-wise and consolidated sales, inventory, and financial reports</li>
                     <li>Analyze trends using over 150 pre-built reports</li>
                     <li>Forecast demand and manage stock proactively using historical data</li>
                  </ul>
              </div>
          </div>

          {/* 8. Online Store Integration */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Online Store Integration</h3>
                  <ul>
                     <li>Set up an online fruit & vegetable store easily</li>
                     <li>Sync inventory between physical stores and e-commerce platforms</li>
                     <li>Manage online orders, deliveries, and payments directly from the dashboard</li>
                  </ul>
              </div>
          </div>

          {/* 9. Weigh-Scale & POS Integration */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Weigh-Scale &amp; POS Integration</h3>
                  <ul>
                     <li>Integrate Management with weighing scales for accurate pricing</li>
                     <li>Update inventory automatically based on sold quantities</li>
                  </ul>
              </div>
          </div>

          {/* 10. Mobile Access & mPOS */}
          <div className="col-md-4 col-sm-6">
              <div className="key-box">
                  <h3>Mobile Access &amp; mPOS</h3>
                  <ul>
                     <li>Operate your store from anywhere with cloud-based mobile access</li>
                     <li>Use mPOS devices for billing and stock management on the go</li>
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
         <h2> Frequently Asked <span>Questions (FAQ)</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                           What is ChittorTech Fruits & Vegetables Billing Software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           A cloud-based Management system for fruit and vegetable retailers to manage billing, inventory, AI Knowledge Base, and e-commerce in one platform.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           Can I connect a weighing scale for accurate billing?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software integrates with weighing scales for instant and precise billing.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           Does it support GST-compliant invoices?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely. Generate GST-compliant bills and automated tax calculations with ease.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           Can I sell fruits and vegetables online?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, create a robust online store with payment gateway integration and central inventory management.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           Can I manage customer loyalty and membership programs?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, manage digital/physical membership cards, loyalty points, gift vouchers, and discounts.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           Does it help prevent wastage?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, with smart stock management, least/fast-selling analysis, and automated reorders.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           Can I send invoices and promotions via WhatsApp?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software allows digital invoice sharing and customer alerts on WhatsApp.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           Does it support multi-location stores?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, centralized stock and inventory management for multiple outlets.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           Can I track fast-selling and slow-selling items?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software provides real-time reports and analytics for inventory optimization.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           Is it customizable for my fruit and vegetable store?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, ChittorTech offers full customization for Management, inventory, AI Knowledge Base, and e-commerce features.
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
