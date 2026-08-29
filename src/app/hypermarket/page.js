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
                <i className={`fa-solid fa-building-columns`}></i> Hypermarket
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Hypermarket AI & IT Solutions & AI Assistant Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Complete hypermarket management — from billing to supplier to analytics.
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
                <i className={`fa-solid fa-building-columns`}></i>
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
         
         {/* Optimized Inventory Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Intelligent Inventory Control</h3>
               <p>Manage your hypermarket inventory with precision using smart tools that track stock in real time and automate replenishment.</p>
               <ul>
                  <li>Real-time stock alerts and expiry tracking</li>
                  <li>Barcode and product label management</li>
                  <li>Inventory audits and stock validation</li>
               </ul>
            </div>
         </div>

         {/* Efficient Cashier Management */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Efficient Cashier Management</h3>
               <p>Streamline billing and checkout with smart Management and multiple cash counter management.</p>
               <ul>
                  <li>Multiple cash counters</li>
                  <li>GST-compliant billing</li>
                  <li>Smooth and fast checkout</li>
               </ul>
            </div>
         </div>

         {/* Integrated AI Knowledge Base for Customer Engagement */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Integrated AI Knowledge Base for Customer Engagement</h3>
               <p>Collect and analyze customer data to enhance loyalty and promotions.</p>
               <ul>
                  <li>Discount vouchers and coupons</li>
                  <li>Feedback & reviews</li>
                  <li>Membership & loyalty points</li>
               </ul>
            </div>
         </div>

         {/* Smart Omnichannel Ecommerce */}
         <div className="col-md-3 col-sm-6">
            <div className="key-box">
               <h3>Smart Omnichannel Ecommerce</h3>
               <p>Sell online seamlessly while synchronizing inventory across physical and online stores.</p>
               <ul>
                  <li>Create an online store</li>
                  <li>Integrated payment and checkout options</li>
                  <li>Centralized inventory management</li>
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
                  <h2>Feature-Rich Hypermarket  <span>Management</span> </h2>
               </div>
               <div className="desktop-industries">
               <div className="row justify-content-center">
                    {/* Feature 1 */}
                    <div className="col-md-4 col-12 mb-4">
                      <div className="boxes flip-container">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-back">
                              <img src="/assets/images/ry1.png" alt="Faster Billing" className="img-fluid mb-3" />
                              <h4>Supply Chain Management</h4>
                              <p> Control inventory flow, supplier management, warehouse operations, logistics, and distribution.</p>
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
                              <img src="/assets/images/ry2.png" alt="SMS Bills & Offers" className="img-fluid mb-3" />
                              <h4>Warehouse Management</h4>
                              <p>Connect inventory, distribution, and supply efficiently with built-in warehouse features.</p>
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
                              <img src="/assets/images/ry3.png" alt="Multiple Payment Gateways" className="img-fluid mb-3" />
                              <h4>Purchase Management </h4>
                              <p>Automate purchase orders and manage supplier relationships effectively.</p>
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
                              <img src="/assets/images/ry4.png" alt="Stock Tracking" className="img-fluid mb-3" />
                              <h4>Fast & Slow Selling Stock Analysis</h4>
                              <ul>
                                <li>Optimize inventory based on sales trends for better cost control.</li>
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
                              <img src="/assets/images/ry5.png" alt="Inventory Management" className="img-fluid mb-3" />
                              <h4>Stock Management</h4>
                              <p>Track inventory category-wise for physical and online stores.</p>
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
                              <img src="/assets/images/ry6.png" alt="Stock Verification" className="img-fluid mb-3" />
                              <h4>Stock Verification</h4>
                              <p>Perform regular physical and digital audits to ensure accurate counts.</p>
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
                              <img src="/assets/images/ry7.png" alt="Automated Reorders" className="img-fluid mb-3" />
                              <h4>Expiry Management </h4>
                              <p>Monitor expiry dates, prioritize near-expiry sales, and prevent expired stock sales.</p>
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
                              <img src="/assets/images/ry8.png" alt="Alerts & Notifications" className="img-fluid mb-3" />
                              <h4>Loyalty & Membership Points </h4>
                              <p>Allow customers to earn and redeem loyalty points via vouchers.</p>
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
                              <img src="/assets/images/ry9.png" alt="Warehouse & Godown Management" className="img-fluid mb-3" />
                              <h4>Label & Barcode Generator</h4>
                              <p>Create professional labels and barcodes for easy product tracking.</p>
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
                              <img src="/assets/images/ry10.png" alt="Intelligent Management" className="img-fluid mb-3" />
                              <h4>Auto-Reorders</h4>
                              <p>Automatically reorder frequently sold items to prevent stock-outs.</p>
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
                              <img src="/assets/images/ry11.png" alt="Discount & Loyalty Management" className="img-fluid mb-3" />
                              <h4>Stock-Wise Analysis</h4>
                              <p> Categorize and analyze stock to identify trends and product dynamics.</p>
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
                              <img src="/assets/images/ry12.png" alt="Offers & Promotions Management" className="img-fluid mb-3" />
                              <h4>Reporting & Analytics</h4>
                              <p>Access 150+ MIS reports for sales, inventory, and financial insights.</p>
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
                              <img src="/assets/images/ry13.png" alt="Weigh Scale Integration" className="img-fluid mb-3" />
                              <h4>POS System </h4>
                              <p>Simplify transactions with multiple payment options.</p>
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
                              <img src="/assets/images/ry14.png" alt="Barcode & Label Generator" className="img-fluid mb-3" />
                              <h4>Multiple Billing Counters</h4>
                              <p> Reduce queues by allowing simultaneous checkouts.</p>
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
                              <img src="/assets/images/ry15.png" alt="Cash Register & Accounting" className="img-fluid mb-3" />
                              <h4>Weighing-Scale Integration</h4>
                              <p>Ensure precise billing with integrated weighing scales.</p>
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
                              <img src="/assets/images/ry16.png" alt="mPOS & Mobile Management" className="img-fluid mb-3" />
                              <h4>Mobile Invoice Sharing</h4>
                               <p>Send digital invoices directly to customers’ mobile devices.</p>
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
                              <img src="/assets/images/ry17.png" alt="Omnichannel E-Commerce" className="img-fluid mb-3" />
                              <h4>Financial Management</h4>
                              <p> Track expenses, manage budgets, and maintain accurate financial records.</p>
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
                              <img src="/assets/images/ry18.png" alt="Bookkeeping & Reports" className="img-fluid mb-3" />
                              <h4>GST-Integrated Accounting </h4>
                              <p>Ensure seamless compliance and accurate tax filing.</p>
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
                              <img src="/assets/images/ry19.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>E-Way Bill Generation </h4>
                              <p>Simplify logistics and compliance with automated e-way bills.</p>
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
                              <img src="/assets/images/ry20.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>Online Hypermarket</h4>
                              <p> Expand your reach with a customized online store.</p>
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
                              <img src="/assets/images/ry21.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>Offers & Discount Management </h4>
                              <p>Run effective promotions, discounts, and manage partner brand offers.</p>
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
                              <img src="/assets/images/ry22.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>Customer Segmentation</h4>
                              <p>Segment customers into VIP, Regular, Risk, and Lost categories for targeted engagement.</p>
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
                              <img src="/assets/images/ry23.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>Feedback & Review </h4>
                              <p>Collect customer feedback to improve services and boost satisfaction.</p>
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
                              <img src="/assets/images/ry24.png" alt="Centralized Multi-Branch Management" className="img-fluid mb-3" />
                              <h4>WhatsApp Integration</h4>
                              <p>Send updates, promotions, and reminders directly to customers.</p>
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
               <p>Smart, simple, and affordable – everything your hypermarket needs to grow faster and run smoother.</p>
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
                  <img src="/assets/images/img247.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7 order-md-1">
            <div className="heading-wrap text-start">
               <h2> Your Complete Solution for Multi-Store <span>Hypermarket Management</span> </h2>
               <p>Manage multiple hypermarket locations, branches, and inventory with a centralized system:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Single Customer Database –</strong> Maintain a unified customer database across all branches and franchises.</li>
                  <li><strong>Seamless Stock Transfers –</strong> Effortlessly transfer stock between multiple hypermarket locations to optimize inventory.</li>
                  <li><strong>Central Reporting & Analytics –</strong> Monitor sales, inventory, and performance metrics from all stores in a centralized dashboard.</li>
                  <li><strong>Centralized Management –</strong> Manage multiple hypermarket branches efficiently from a single platform.</li>
                  <li><strong>Centralized Inventory Control –</strong> Access real-time data on stock levels, sales, and performance across all locations.</li>
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
                  <img src="/assets/images/img248.jpg" alt="Local & National SEO Expertise" />
               </figure>
            </div>
         </div>
         <div className="col-md-7">
            <div className="heading-wrap text-start">
               <h2> One Solution for   <span>Hypermarket Brilliance</span> </h2>
               <p>Enhance your growth story with our all-in-one hypermarket AI & IT Solutions:</p>
            </div>
            <div className="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful Management solution</li>
                  <li>Manage multiple stores anywhere, anytime</li>
                  <li>Inventory & barcode management</li>
                  <li>Multiple payment modes</li>
                  <li>Reports to improve forecasting & analytics</li>
                  <li>Launch your online store</li>
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
               <h2> Performance <span>Highlights</span> </h2>
            </div>
            <div className="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="/assets/images/platforms1.png" alt="ChittorTech Hypermarket - platforms1" /> </figure>
                     <h3>3X Revenue growth rate</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms2.png" alt="ChittorTech Hypermarket - platforms2" /> </figure>
                     <h3>96+ Billing hours saved per month</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms3.png" alt="ChittorTech Hypermarket - platforms3" /> </figure>
                     <h3>72% Faster processing time</h3>
                  </li>
                  <li>
                     <figure> <img src="/assets/images/platforms4.png" alt="ChittorTech Hypermarket - platforms4" /> </figure>
                     <h3>79% Decrease in manual errors</h3>
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
          <h2>Why Chittortech <span>Solutions?</span> </h2>
          <p>Enjoy peace of mind with stress-free hypermarket management:</p>
      </div>
   <div className="row justify-content-center gy-4">
       {/* Simplified GST Compliance */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Affordable </h3>
               <p>Value-for-money pricing with robust features</p>
           </div>
       </div>

       {/* Real-Time Financial Reporting */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Training </h3>
               <p>Expert guidance to quickly get started with the software</p>
           </div>
       </div>

       {/* Centralized Multi-Store Management */}
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Client Satisfaction</h3>
               <p>Trusted by Thousands clients</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Cloud-Based Hypermarket Software</h3>
               <p>Manage your departmental store anytime, anywhere.</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Proven Track Record</h3>
               <p>Manage your hypermarket anytime, anywhere</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Trusted </h3>
               <p>Software relied upon by hypermarkets of all sizes and chains</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Proven Track</h3>
               <p>Rich legacy of delivering superior hypermarket solutions</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>Experience</h3>
               <p> Years of leadership in retail software solutions</p>
           </div>
       </div>
       <div className="col-md-3 col-sm-6">
           <div className="key-box">
               <h3>User-Friendly</h3>
               <p> Intuitive interface ensures smooth operations</p>
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
                       <figure> <img src="/assets/images/ns1.png" alt="ChittorTech Hypermarket - ns1" /> </figure>
                       <h3>E-commerce Platforms</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns2.png" alt="ChittorTech Hypermarket - ns2" /> </figure>
                       <h3> Communication & Marketing Tools</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns3.png" alt="ChittorTech Hypermarket - ns3" /> </figure>
                       <h3> Payment Solutions</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns4.png" alt="ChittorTech Hypermarket - ns4" /> </figure>
                       <h3>Business Applications</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns5.png" alt="ChittorTech Hypermarket - ns5" /> </figure>
                       <h3>Shipping & Logistics</h3>
                    </li>
                    <li>
                       <figure> <img src="/assets/images/ns6.png" alt="ChittorTech Hypermarket - ns6" /> </figure>
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
             <h2>ChittorTech: Boosting Hypermarket Profitability</h2>
             <p>We understand the challenges faced by hypermarket owners – managing a large product assortment, categories, brands, billing, supply chain, warehouse, customer service, accounting, and online sales can be overwhelming.</p>
             <strong>Our Hypermarket AI Assistant Software is a complete solution to handle:</strong>
             <ul>
                  <li>Supply chain management</li>
                  <li>Warehouse control</li>
                  <li>Multiple cash counter management</li>
                  <li>Integrated accounting</li>
             </ul>
             <p>With a user-friendly interface and advanced features, hypermarkets can efficiently run operations and provide excellent service to customers.</p>
             <button onClick={() => { window.location.href = "/contact-us"; }} className="cta-button">Avail your free demo today!</button>
          </div>
        </div>
    </div>
</div>
</section>

<section className="complete-seo-service"> 
      <div className="container my-5">
         <div className="heading-wrap text-center">
              <h2> Top Benefits of ChittorTech  <span>Hypermarket Software</span> </h2>
           </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="0">
                <figure> <img src="/assets/images/utq.png" alt="ChittorTech Hypermarket - utq" /> </figure>
                <h4>Optimized Inventory Management</h4>
                <p>Keep accurate stock levels, track expiry dates, and automate reorders to avoid stock-outs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="100">
                <figure> <img src="/assets/images/ut2.png" alt="ChittorTech Hypermarket - ut2" /> </figure>
                <h4>Centralized Multi-Store Management</h4>
                <p>Manage multiple hypermarket branches from a single platform with unified inventory, reporting, and customer data.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="200">
                <figure> <img src="/assets/images/ut3.png" alt="ChittorTech Hypermarket - ut3" /> </figure>
                <h4>Seamless Stock Transfers</h4>
                <p>Easily transfer goods between stores to balance inventory and meet customer demand efficiently.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="300">
                <figure> <img src="/assets/images/ut4.png" alt="ChittorTech Hypermarket - ut4" /> </figure>
                <h4>Enhanced Customer Engagement</h4>
                <p>Use loyalty points, membership programs, and personalized promotions to improve customer retention.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut5.png" alt="ChittorTech Hypermarket - ut5" /> </figure>
                <h4>Accurate Billing & POS </h4>
                <p>Streamline checkout with multiple billing counters, GST-compliant invoicing, and integrated payment gateways.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut6.png" alt="ChittorTech Hypermarket - ut6" /> </figure>
                <h4>Advanced Reporting & Analytics</h4>
                <p>Access 150+ MIS reports for sales, inventory, and financial insights to make data-driven decisions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut7.png" alt="ChittorTech Hypermarket - ut7" /> </figure>
                <h4>Cloud-Based Access</h4>
                <p>Monitor and manage your hypermarket anytime, anywhere, without hardware restrictions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut8.png" alt="ChittorTech Hypermarket - ut8" /> </figure>
                <h4>Financial Management</h4>
                <p>Maintain accurate accounts, track expenses, and ensure compliance with GST-integrated accounting.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut9.png" alt="ChittorTech Hypermarket - ut9" /> </figure>
                <h4>Omnichannel Ecommerce</h4>
                <p>Sell online seamlessly, synchronize inventory, and provide a smooth shopping experience to customers.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut10.png" alt="ChittorTech Hypermarket - ut10" /> </figure>
                <h4>User-Friendly Interface </h4>
                <p>Minimal learning curve for staff with intuitive design for effortless operations.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut11.png" alt="ChittorTech Hypermarket - ut11" /> </figure>
                <h4>Weighing Scale & Barcode Integration</h4>
                <p> Accurate product billing and professional labeling for efficient store operations.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut12.png" alt="ChittorTech Hypermarket - ut12" /> </figure>
                <h4>Customer Feedback & Reviews</h4>
                <p>Collect insights directly from customers to improve services and satisfaction.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut13.png" alt="ChittorTech Hypermarket - ut13" /> </figure>
                <h4>WhatsApp Integration</h4>
                <p> Engage customers instantly with updates, promotions, and notifications.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut14.png" alt="ChittorTech Hypermarket - ut14" /> </figure>
                <h4>Reduced Manual Errors</h4>
                <p>Automate routine tasks to save time, improve efficiency, and reduce human errors.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="/assets/images/ut15.png" alt="ChittorTech Hypermarket - ut15" /> </figure>
                <h4>Increased Revenue & Efficiency</h4>
                <p> Optimize stock, streamline billing, and improve operational productivity to boost profitability.</p>
              </div>
            </div>
          </div>
        </div>
</section>


<section className="manufacturing-key section-bg py-5">
  <div className="container">
    <div className="heading-wrap text-center mb-4">
      <h2>How Customers Can Use Chittortech <span>Hypermarket Software</span></h2>
    </div>

    <div className="row justify-content-center gy-4">

      {/* 1. Login & Setup */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Quick and Smooth Billing</h3>
          <p>Customers experience faster checkout at multiple billing counters with automated Management and GST-compliant invoicing.</p>
        </div>
      </div>

      {/* 2. Add Inventory */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Digital Invoices</h3>
          <p>ills can be sent directly to the customer’s mobile via SMS or WhatsApp for easy record-keeping.</p>
        </div>
      </div>

      {/* 3. Manage Billing */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Multiple Payment Options</h3>
          <p>Customers can pay via cash, debit/credit cards, UPI, or mobile wallets for convenience.</p>
        </div>
      </div>

      {/* 4. Track Stock & Transfers */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Loyalty & Membership Points</h3>
          <p>Customers earn points on purchases and can redeem them for discounts or bill payments.</p>
        </div>
      </div>

      {/* 5. Customer Engagement */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Personalized Offers & Promotions</h3>
          <p> Based on purchase history, customers receive coupons, bundle deals, and exclusive discounts.</p>
        </div>
      </div>

      {/* 6. Financial Management */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Customer Feedback & Reviews</h3>
          <p> Customers can provide feedback through the system to improve their shopping experience.</p>
        </div>
      </div>

      {/* 7. Online Store Management */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Online Shopping</h3>
          <p>Customers can browse products and order online from the hypermarket’s e-store, with synchronized inventory for accurate availability.</p>
        </div>
      </div>

      {/* 8. Analyze Reports & Insights */}
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Product Information & Barcode Scanning </h3>
          <p>Customers can check product details, prices, and promotions using barcode scans in-store or via mobile apps.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Membership Benefits Across Branches</h3>
          <p> Customers’ loyalty points, membership details, and offers are valid across all hypermarket branches.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Stock Notifications</h3>
          <p> Customers can be alerted if a product is back in stock or if a new promotional offer is available.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Customer Segmentation</h3>
          <p> VIP or frequent customers may receive personalized offers, priority service, or exclusive product recommendations.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="key-box">
          <h3>Seamless Returns & Exchanges </h3>
          <p>Customers can return or exchange products with updates reflected instantly in the system for hassle-free processing.</p>
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
             <h2>Key Advantage for Customers:</h2>
             <p>This software ensures a fast, convenient, and personalized shopping experience across in-store and online channels while keeping track of loyalty points, promotions, and purchase history in a unified way.</p>
          </div>
        </div>
    </div>
</div>
</section>



{/*  faq template section */}
<section className="faq-template py-5">
   <div className="container">
      <div className="heading-wrap text-center mb-4">
         <h2>Hypermarket Software –  <span>Customer FAQ</span></h2>
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="faq-section">
               <div className="accordion" id="faqAccordion">

                  {/* FAQ 1 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                           What is hypermarket software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Hypermarket software is a comprehensive system designed to manage all aspects of a hypermarket, including billing, inventory, AI Knowledge Base, accounting, and online store operations. It ensures faster checkouts, accurate billing, and a smooth shopping experience for customers.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           How does this software benefit me as a customer?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Customers enjoy faster billing, multiple payment options, digital invoices, personalized offers, loyalty rewards, seamless returns/exchanges, and access to online shopping from home.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           Can I pay using multiple modes?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes! You can pay via cash, debit/credit cards, UPI, or mobile wallets at the billing counter.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           How do I receive my bills?
                        </button>
                     </h2>
                     <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Bills can be sent directly to your mobile via SMS or WhatsApp, making it easy to keep track of purchases.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           How does the loyalty program work?
                        </button>
                     </h2>
                     <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Every purchase earns you loyalty points, which can be redeemed for discounts or bill payments. Your points are valid across all branches.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 6 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           Can I get personalized offers and promotions?
                        </button>
                     </h2>
                     <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, based on your purchase history, you may receive coupons, bundle deals, and special promotions tailored to your shopping preferences.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 7 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           Can I shop online?
                        </button>
                     </h2>
                     <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Absolutely! You can browse products and make purchases via the hypermarket’s online store, with inventory synchronized in real time.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 8 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading8">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           How do returns and exchanges work?
                        </button>
                     </h2>
                     <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Returns and exchanges are processed smoothly, with inventory updates in real time to ensure accurate stock levels and hassle-free service.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 9 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading9">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           Can I check product details before buying?
                        </button>
                     </h2>
                     <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, product information, pricing, and promotions can be checked in-store via barcode scanning or online through the store app/website.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 10 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading10">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           Are membership benefits valid across branches?
                        </button>
                     </h2>
                     <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, your loyalty points, membership benefits, and offers are accessible at all hypermarket locations under the same system.
                        </div>
                     </div>
                  </div>

                  {/* FAQ 11 */}
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading11">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                           Will I get notifications about stock or promotions?
                        </button>
                     </h2>
                     <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           Yes, the software can alert you when a product is back in stock or when there are special deals or promotions available.
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
