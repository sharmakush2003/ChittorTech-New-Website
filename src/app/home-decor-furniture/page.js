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
                <i className={`fa-solid fa-couch`}></i> Furniture AI & IT Solutions
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Home Decor & Furniture Store AI & IT Solutions
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Manage large SKUs, custom orders, and multi-location showrooms with ease.
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
                <i className={`fa-solid fa-couch`}></i>
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

    {/* AI-Based Inventory & Stock Control */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Based Inventory & Stock Control</h3>
            <p>Manage home décor and furniture stock smoothly with an AI-powered system that tracks items across stores, warehouses, and in-transit locations.</p>
            <ul>
                <li>AI-managed furniture categories and variants</li>
                <li>Raw material tracking for in-house production</li>
                <li>Easy stock movement between locations</li>
            </ul>
        </div>
    </div>

    {/* AI-Assisted Fast Billing */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Assisted Fast Billing</h3>
            <p>Handle customer billing quickly using an AI-enabled Management that supports tax rules and multiple payment methods without delays.</p>
            <ul>
                <li>Automatic e-way bill generation</li>
                <li>AI-supported e-invoicing</li>
                <li>Support for cards, UPI, wallets, and cash</li>
            </ul>
        </div>
    </div>

    {/* AI-Driven Customer & Loyalty Management */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Driven Customer & Loyalty Management</h3>
            <p>Convert walk-in customers into repeat buyers using AI-powered AI Knowledge Base tools designed for engagement and long-term retention.</p>
            <ul>
                <li>Smart discounts and digital vouchers</li>
                <li>AI-managed loyalty programs</li>
                <li>Easy feedback and review collection</li>
            </ul>
        </div>
    </div>

    {/* AI-Enabled Accounting & Compliance */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>AI-Enabled Accounting & Compliance</h3>
            <p>Keep finances accurate and compliant with AI-supported accounting tools that simplify taxes, audits, and reporting.</p>
            <ul>
                <li>Real-time balance sheet and P&amp;L tracking</li>
                <li>GST return preparation and filing support</li>
                <li>Automated bank reconciliation</li>
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
               <h2>AI-Powered AI Assistant Software Built for Home Décor & Furniture Stores</h2>
			   <p>Run your showroom, warehouse, and online furniture business smoothly with an AI-enabled Management and management system designed for complete control and higher profitability.</p>
            </div>
            <div className="desktop-industries">
               <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke1.png" alt="Billing" className="img-fluid mb-3" />
                                <h4>AI Smart Billing & Checkout</h4>
<ul>
    <li>Fast barcode-based billing</li>
    <li>Accept cash, UPI, cards, and digital wallet payments</li>
    <li>Multiple billing counters with zero waiting time</li>
    <li>Automatic loyalty point calculation</li>
    <li>GST-ready invoices with instant digital sharing</li>
</ul>


                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                 <h4>AI Showroom Inventory Management</h4>
<ul>
    <li>Real-time visibility of all displayed furniture and décor items</li>
    <li>Live tracking of showroom stock availability</li>
    <li>Monitoring of furniture models and décor item variants</li>
    <li>Image-based product records for quick and easy identification</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                <h4>AI Warehouse & Godown Control</h4>
<ul>
    <li>Efficient management of warehouse and godown inventory</li>
    <li>Centralized tracking of warehouse stock in real time</li>
    <li>Smooth and accurate transfer of stock from warehouse to showroom</li>
    <li>Complete visibility of stock movement across all locations</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                <h4>AI Product Variants Handling</h4>
<ul>
    <li>Manage multiple furniture variations without confusion</li>
    <li>Track size, material, color, finish, and quality</li>
    <li>Variant-level pricing and stock control</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                 <h4>AI Online & Offline Inventory Sync</h4>
<ul>
    <li>Unified inventory for showroom and online store</li>
    <li>Keep stock records aligned across all sales channels</li>
    <li>Centralized stock and sales data management</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                               <h4>AI Raw Material & Consumption Tracking</h4>
<ul>
    <li>Track raw material purchases accurately</li>
    <li>Monitor material usage for production</li>
    <li>Automatic cost calculation for consumed materials</li>
    <li>Smart AI-based restocking suggestions</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke7.png" alt="WhatsApp Integration" className="img-fluid mb-3" />
                                <h4>AI Purchase & Supplier Management</h4>
<ul>
    <li>Centralized supplier database with product mapping</li>
    <li>Track purchase bills and purchase orders</li>
    <li>Maintain complete supplier transaction history</li>
</ul>  </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke8.png" alt="GST-Billing Compatibility" className="img-fluid mb-3" />
                                <h4>AI Accounting & Compliance</h4>
<ul>
    <li>Real-time balance sheet and profit &amp; loss reports</li>
    <li>Automated GST calculations and return support</li>
    <li>Bank reconciliation assistance</li>
    <li>E-way bill and e-invoicing generation</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke9.png" alt="Multiple Billing Counter" className="img-fluid mb-3" />
                                <h4>AI Sales Insights & Reporting</h4>
<ul>
    <li>Identify fast- and slow-moving products</li>
    <li>Track inventory turnover and profit margins</li>
    <li>Access 150+ MIS, sales, and performance reports</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke10.png" alt="Multiple Billing Counter" className="img-fluid mb-3" />
                                 <h4>AI Promotions & Customer Engagement</h4>
<ul>
    <li>Create offers, coupons, bundle deals, and seasonal discounts</li>
    <li>Run loyalty programs and membership benefits</li>
    <li>Manage customer feedback and reviews</li>
    <li>Send WhatsApp alerts for offers, bills, and updates</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke11.png" alt="Multiple Billing Counter" className="img-fluid mb-3" />
                               <h4>AI Alerts, Reminders & Notifications</h4>
<ul>
    <li>Inventory, sales, and accounting alerts</li>
    <li>Payment reminders for pending invoices</li>
    <li>Automated business notifications without manual follow-ups</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-4">
                     <div className="boxes mb-4 flip-container">
                        <div className="flip-card">
                           <div className="flip-card-inner">
                              <div className="flip-card-back">
                                 <img src="/assets/images/ke12.png" alt="Multiple Billing Counter" className="img-fluid mb-3" />
                                
<h4>AI Stock Audit & Verification</h4>
<ul>
    <li>Mobile app–based stock checking</li>
    <li>Identify stock discrepancies instantly</li>
    <li>Reconciliation for accurate inventory records</li>
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
                  <img src="/assets/images/img230.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
    <div className="heading-wrap text-start">
        <h2>One AI-Powered System for Managing Multiple <span>Furniture & Home Décor Stores</span></h2>
        <p>
            Bring all your showrooms, warehouses, and outlets onto a single AI-enabled platform from
            ChittorTech—designed to keep operations connected and easy to control.
        </p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>AI-Guided Stock Movement –</strong>
                Transfer furniture and décor items smoothly between stores and warehouses.
            </li>
            <li>
                <strong>AI Business Insights –</strong>
                Use 150+ intelligent reports to understand sales trends, top performers, slow movers, and overall growth.
            </li>
            <li>
                <strong>Central Offer Control –</strong>
                Create and apply discounts across all locations from one place.
            </li>
            <li>
                <strong>Single Management for All Stores –</strong>
                Manage products and SKUs from multiple outlets using one unified system.
            </li>
            <li>
                <strong>Live Inventory Sync –</strong>
                Keep stock updated automatically across physical showrooms and online stores.
            </li>
            <li>
                <strong>Unified Contact Records –</strong>
                Maintain one shared database for customers, suppliers, and business partners.
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
                  <img src="/assets/images/img231.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
        <div className="col-md-7">
    <div className="heading-wrap text-start">
        <h2>AI-Powered Furniture Store Management — <span>From Showroom to Customer Home</span></h2>
        <p>
            Our smart Management and management system for furniture retailers brings every daily operation
            into one easy-to-use platform.
        </p>
    </div>

    <div className="expertise-wrap bridal-wrap">
        <ul>
            <li>
                <strong>AI-Enabled Billing & Billing –</strong>
                Fast checkout with GST-ready invoices, multiple payment options, and automatic loyalty point calculation.
            </li>
            <li>
                <strong>Centralized Multi-Store Control –</strong>
                Monitor and manage all branches from anywhere using a single dashboard.
            </li>
            <li>
                <strong>AI-Driven Inventory & Barcodes –</strong>
                Track furniture by size, color, material, finish, and variants with live stock updates.
            </li>
            <li>
                <strong>AI Customer & Loyalty Management –</strong>
                Handle memberships, rewards, and personalized offers in one unified system.
            </li>
            <li>
                <strong>AI Reports & Demand Insights –</strong>
                Access real-time analytics to plan inventory and improve sales performance.
            </li>
            <li>
                <strong>Online Store Integration –</strong>
                Start selling furniture online with synced stock across showroom and e-commerce.
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
                  <img src="/assets/images/img232.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Why Chittortech <span>Solutions?</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li> Thousands Retailers Trust Us</li>
                  <li> Rated 4.8+ on Google Reviews</li>
                  <li> Multi-Featured Management (Inventory, Accounting, AI Knowledge Base & eCommerce)</li>
                  <li> Cloud-Based – Manage from anywhere</li>
                  <li> User-Friendly Interface</li>
                  <li> Runs on Any Device (Desktop, Tablet, Mobile)</li>
                  <li> Data-Driven Insights for Better Forecasting</li>
                  <li> Affordable & Scalable for Every Retailer</li>
                  <li> Dedicated Training & Implementation Support</li>
                  <li> Tailored Exclusively for Furniture & Home Décor Stores</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="clothing-stores-sec software-sec">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7 order-md-2">
            <div className="clothing-stores-text software-wrap specialized-box">
               <h2>Seamless Integrations with Multiple Platforms</h2>
               <p>ChittorTech Management connects with:</p>
               <ul>
                  <li>E-commerce platforms (Shopify, WooCommerce, Magento)</li>
                  <li>Payment gateways (UPI, Cards, Wallets, Net Banking)</li>
                  <li>Marketing & Communication tools (WhatsApp, Email, SMS)</li>
                  <li>Logistics & Compliance apps (Shipping, E-invoicing, GST filing)</li>
               </ul>
               <p><strong>Our Customers</strong></p>
               <p>Furniture and home décor retailers trust ChittorTech to simplify operations and maximize profits. From managing custom orders to handling warehouses, suppliers, deliveries, and online stores—we solve the unique challenges of furniture businesses with one integrated solution.</p>
            </div>
         </div>
         <div className="col-md-5 order-md-1">
            <div className="clothing-stores-img text-end">
               <figure>
                  <img src="/assets/images/img104.jpg" alt="ChittorTech Home Decor Furniture - img104" />
               </figure>
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
                  <img src="/assets/images/img233.jpg" alt="Local &amp; National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Benefits of ChittorTech Management for Home  <span>Décor & Furniture Shops</span> </h2>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Faster Billing –</strong> Generate GST-compliant invoices in seconds with UPI, card, and multi-payment options.</li>
                  <li><strong>Seamless Inventory Management –</strong> Track stock across multiple stores, warehouses, and online channels.</li>
                  <li><strong>Multi-Store Control –</strong> Manage all your branches and showrooms from one central system.</li>
                  <li><strong>Smart Reports & Analytics –</strong> Access 150+ reports to make better business decisions.</li>
                  <li><strong>Error-Free Operations –</strong> Reduce manual errors with automated processes.</li>
                  <li><strong>Boost Sales & Customer Loyalty –</strong> Run offers, memberships, and loyalty programs with ease.</li>
                  <li><strong>Omnichannel Selling –</strong> Launch your online store and sync with offline sales in real time.</li>
                  <li><strong>User-Friendly & Cloud-Based –</strong> Access your business from anywhere on any device.</li>
                  <li><strong>Time & Cost Savings –</strong> Save 120+ billing hours per month while cutting unnecessary costs.</li>
                  <li><strong>Scalable Solution –</strong> Suitable for single shops, large furniture chains, and growing businesses.</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="manufacturing-key section-bg">
<div className="container">
      <div className="heading-wrap">
          <h2>Customer Journey with Chittortech  <span> POS</span> </h2>
      </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 1: Customer Walks In / Visits Online Store</h3>
               <ul>
                  <li>POS records new or returning customers automatically.</li>
                  <li>If returning, their profile & past purchases appear instantly.</li>
               </ul>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 2: Product Browsing & Selection</h3>
               <ul>
                  <li>Salesperson assists using Management catalog with images, sizes, colors, and stock availability.</li>
                  <li>Example: A customer looking for a sofa can see available fabrics, finishes, and price variations.</li>
               </ul>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 3: Customer Profile Creation</h3>
               <ul>
                  <li>Name, phone, email, and preferences are added into the system.</li>
                  <li>POS saves this data for future use (offers, promotions, loyalty).</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 4: Personalized Offers & Discounts</h3>
               <ul>
                  <li>System checks if the customer is eligible for any discount, coupon, or loyalty points.</li>
                  <li>Example: “You have 500 reward points. Would you like to redeem?”</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 5: Seamless Billing & Payment</h3>
               <ul>
                  <li>POS generates GST-compliant invoice with options like UPI, cards, EMI, or cash.</li>
                  <li>Multiple payment modes supported for convenience.</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 6: Inventory & Delivery Management</h3>
               <ul>
                  <li>POS checks stock levels in real-time.</li>
                  <li>For out-of-stock or custom furniture orders, it creates an order & updates delivery status.</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 7: After-Sales Engagement</h3>
               <ul>
                  <li>AI Knowledge Base sends automated messages (thank you, delivery updates, warranty details).</li>
                  <li>Example: “Your sofa will be delivered on Friday between 2-5 PM.”</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 8: Loyalty & Retention</h3>
               <ul>
                  <li>Customer earns loyalty points or discounts for the next purchase.</li>
                  <li>Example: “Get 15% off on your next dining table set.”</li>
               </ul>
           </div>
       </div>
       <div className="col-md-4 col-sm-6">
           <div className="key-box">
               <h3>Step 9: Feedback & Follow-Up</h3>
               <ul>
                  <li>POS logs customer feedback and tracks complaints if any.</li>
                  <li>Example: After delivery, the system auto-sends: “How was your experience? Rate us 1-5.”</li>
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
         <h2>Frequently Asked Questions – <span>ChittorTech Management</span></h2>
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
                        What is AI Assistant Software for home décor and furniture shops?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           It’s a specialized retail solution for furniture and décor retailers, with modules for billing, accounting, inventory, AI Knowledge Base, and eCommerce—all in one.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        What are the key benefits of implementing this software?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Faster billing, accurate accounting, inventory accuracy, customer loyalty programs, multi-store control, and seamless online/offline integration.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Who can use ChittorTech Management?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Furniture showrooms, home décor retailers, custom furniture makers, and multi-branch furniture businesses.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        What kind of reports does it generate?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           150+ reports covering sales, inventory, fast/slow-moving products, supplier performance, and customer insights.
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
                           We provide step-by-step onboarding, staff training, and dedicated customer support to ensure smooth adoption.
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
