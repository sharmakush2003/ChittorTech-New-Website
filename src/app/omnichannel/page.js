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
                <i className={`fa-solid fa-store`}></i> Omnichannel
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Custom Web & SaaS Application Development
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                High-performance React/Next.js cloud software, enterprise portals, and digital platforms.
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
      
     


      {/* Solutions Holds section start here */}
   <section className="why-choose-sec"> 
             <div className="container">
                 <div className="row align-items-center">
                     <div className="col-md-6">
                         <div className="heading-wrap text-start mobile-a pro-list">
                             <h2>India’s Leading AI-Driven Cloud AI Platform for Omnichannel Retail </h2>
                          </div>
                          <div className="expertise-wrap pro-list">
                              <h5>Streamline your operations with ChittorTech:</h5>
                              <ul>
    <li>Live inventory tracking across all online and offline channels</li>
    <li>Smart automated accounting with GST-ready compliance</li>
    <li>Seamless payment and checkout integration</li>
    <li>Customer engagement with AI Knowledge Base, loyalty programs, and tailored offers</li>
    <li>Connect effortlessly with marketplaces like Shopify and WooCommerce</li>
</ul>

                          </div>
                     </div>
                     <div className="col-md-6">
                          <div className="expertise-img">
                              <figure>
                                 <img src="/assets/images/img168.jpg" alt="Local &amp; National SEO Expertise" />
                              </figure>
                          </div>
                     </div>
                 </div>
             </div>
         </section>
      {/* Solutions Holds section end here */}

      {/* Solutions Holds section start here */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img169.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="heading-wrap text-start mobile-a pro-list">
                          <h2>Common Challenges for Online Retailers </h2>
                       </div>
                    <div className="ai-solutions-item-wrap">
    <div className="ai-solutions-item">
        <h4>Inventory & Stock Management</h4>
        <p>
            Keeping track of inventory, syncing warehouse stock, and avoiding stockouts can be a major hurdle
            for e-commerce businesses.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Building an Online Store</h4>
        <p>
            Creating a user-friendly, visually appealing, and SEO-optimized website can feel overwhelming
            for many sellers.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Accounting & Compliance</h4>
        <p>
            Centralizing accounting across online and offline channels while staying GST-compliant is often
            time-consuming and complex.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Smooth Checkout & Payments</h4>
        <p>
            Slow payments, clunky checkout processes, or missing trusted payment gateways can lead to
            abandoned carts.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Simplify &amp; Grow Your Business</h4>
        <p>
            Smart, easy-to-use, and cost-effective—ChittorTech provides everything you need to
            scale your online retail efficiently.
        </p>
    </div>
</div>

                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}
      

      <section className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2> ChittorTech – <span>India’s Best Omnichannel AI & IT Solutions for E-Commerce</span> </h2>
                        <p>India’s Best Omnichannel AI & IT Solutions for E-Commerce</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>Real-Time Inventory Management</h4>
                                         <ul>
    <li>Sync stock instantly across online and offline stores</li>
    <li>Multi-warehouse coordination for smooth order fulfillment</li>
    <li>Track best-selling and slow-moving products with analytics</li>
</ul>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                         <h4>Integrated Accounting &amp; GST Compliance</h4>
<ul>
    <li>Automatic GST calculations and filings for all sales</li>
    <li>Centralized financial reporting for complete accuracy</li>
    <li>Built-in e-invoicing and e-way bill generation</li>
</ul>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                         <h4>Custom E-Commerce Store</h4>
<ul>
    <li>Build branded, mobile-optimized online stores</li>
    <li>Seamless integration with Shopify, WooCommerce, and more</li>
    <li>Fully responsive design for a smooth shopping experience</li>
</ul>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                         <h4>Smooth Cart &amp; Checkout</h4>
<ul>
    <li>Integrate with Razorpay, Paytm, Pine Labs, Mswipe, and others</li>
    <li>One-click checkout and guest checkout for faster conversions</li>
    <li>Dynamic cart updates in real-time</li>
</ul>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                         <h4>Customer &amp; Offers Management</h4>
<ul>
    <li>AI Knowledge Base for loyalty programs, automation, and rewards</li>
    <li>Manage coupons, discounts, and personalized offers</li>
    <li>Securely collect customer information via email, mobile, or WhatsApp</li>
</ul>

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/in6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                        <h4>AI-Powered Reporting &amp; Insights</h4>
<ul>
    <li>150+ reports covering sales, inventory, AI Knowledge Base, and customer behavior</li>
    <li>Demand forecasting to prevent stockouts</li>
    <li>Centralized dashboards for online and offline channels</li>
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



      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                         <div className="clothing-stores-text">
    <h2>Seamless Omnichannel Shopping</h2>
    <h5>
        Deliver a consistent and connected shopping experience across all channels with ChittorTech:
    </h5>
    <ul>
        <li><strong>BOPIS:</strong> Buy online, pick up in-store</li>
        <li><strong>Fast Fulfillment:</strong> Ship from store &amp; same-day delivery</li>
        <li><strong>Unified Product Data:</strong> Consistent pricing &amp; branding</li>
        <li><strong>Automated D2C:</strong> Streamlined direct-to-consumer orders</li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img170.jpg" alt="ChittorTech Omnichannel - img170" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                         <div className="clothing-stores-text">
    <h2>Benefits of India’s #1 AI-Powered Omnichannel AI & IT Solutions for E-Commerce</h2>
    <ul>
        <li>
            <strong>Unified Dashboard Control</strong><br />
            Manage inventory, orders, billing, and accounting seamlessly from a single platform.
        </li>
        <li>
            <strong>Lower Costs &amp; Fewer Errors</strong><br />
            Automate processes and eliminate duplicate manual entries for greater efficiency.
        </li>
        <li>
            <strong>Superior Customer Experience</strong><br />
            Deliver personalized offers, loyalty rewards, and faster, smooth checkout experiences.
        </li>
        <li>
            <strong>Boosted Sales Across Channels</strong><br />
            Expand your business by selling on multiple platforms with real-time centralized synchronization.
        </li>
        <li>
            <strong>Scalable for Any Business</strong><br />
            From startups to large retail enterprises, the system grows with your business needs.
        </li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img171.jpg" alt="ChittorTech Omnichannel - img171" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

       <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                         <div className="clothing-stores-text">
    <h2>Industries Benefiting from ChittorTech Omnichannel AI & IT Solutions</h2>
    <ul>
        <li><strong>Apparel &amp; Fashion Retailers</strong> – From clothing boutiques to footwear brands</li>
        <li><strong>Grocery &amp; Supermarket Chains</strong> – Streamlined inventory and sales across stores</li>
        <li><strong>Beauty &amp; Personal Care Shops</strong> – Cosmetics, skincare, and wellness products</li>
        <li><strong>Home Furnishing &amp; Decor Stores</strong> – Furniture, lighting, and interior accessories</li>
        <li><strong>Gift &amp; Lifestyle Outlets</strong> – Toys, décor, and specialty items</li>
        <li><strong>Bookstores &amp; Stationery Shops</strong> – Academic and creative supplies</li>
        <li><strong>Bakeries &amp; Confectionery Stores</strong> – Cakes, desserts, and packaged treats</li>
        <li><strong>Electronics &amp; Mobile Stores</strong> – Devices, accessories, and gadgets</li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img172.jpg" alt="ChittorTech Omnichannel - img172" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                         <div className="clothing-stores-text">
    <h2>
        Why ChittorTech is India’s #1 Omnichannel AI & IT Solutions –
        <a href="/omnichannel" style={{ "all": "unset", "cursor": "pointer", "textDecoration": "underline", "fontWeight": "bold" }}>
            Trusted by Growing Retailers
        </a>
    </h2>

    <ul>
        <li>
            <strong>Tailored for Indian E-Retailers</strong><br />
            Designed specifically to meet the needs of online sellers and multi-channel retailers.
        </li>
        <li>
            <strong>Fully GST &amp; E-Invoicing Compliant</strong><br />
            Automate tax calculations and stay 100% GST-ready effortlessly.
        </li>
        <li>
            <strong>Cloud-Based Accessibility</strong><br />
            Manage your business from anywhere, anytime, on any device.
        </li>
        <li>
            <strong>Seamless Marketplace Integrations</strong><br />
            Connect easily with Shopify, WooCommerce, Amazon, Flipkart, and more.
        </li>
        <li>
            <strong>Proven Business Impact</strong><br />
            Clients report up to 90% faster order processing and 4X growth in revenue.
        </li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img173.jpg" alt="ChittorTech Omnichannel - img173" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

       <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="clothing-stores-text">
    <h2>Why Retailers Prefer ChittorTech</h2>
    <ul>
        <li>
            <strong>Centralized Stock Management</strong> – Keep online and offline inventory in sync
        </li>
        <li>
            <strong>Live Multi-Warehouse Updates</strong> – Track stock levels in real-time
        </li>
        <li>
            <strong>Automated GST Accounting</strong> – E-Invoicing and tax compliance made easy
        </li>
        <li>
            <strong>Seamless Payment Integration</strong> – Faster, secure checkouts
        </li>
        <li>
            <strong>Tailored E-Commerce Stores</strong> – Build responsive, branded online shops
        </li>
        <li>
            <strong>Smart AI Knowledge Base Tools</strong> – Loyalty programs, discounts, and customer engagement
        </li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img174.jpg" alt="ChittorTech Omnichannel - img174" />
                              </figure>
                          </div>
                      </div>
                  </div></div></section>

     

      <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>India’s #1 AI-Powered Cloud AI Platform for <span>Omnichannel Retail</span> </h2>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center gy-4">
                   {/* Simplified GST Compliance */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Unified Inventory Control </h3>
                           <ul>
                               <li>Track stock in real-time across warehouses, stores, and online channels</li>
                           </ul>
                       </div>
                   </div>

                   {/* Real-Time Financial Reporting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Customizable Online Stores </h3>
                           <ul>
                              <li> Build responsive, branded e-commerce websites with Shopify & WooCommerce integration</li>
                              
                           </ul>
                       </div>
                   </div>

                   {/* Centralized Multi-Store Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Automated Accounting & GST Compliance </h3>
                           <ul>
                              <li>Manage finances, generate e-invoices, and stay audit-ready</li>
                            
                           </ul>
                       </div>
                   </div>

                   {/* Advanced Inventory Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Smart Payments & Checkout </h3>
                           <ul>
                              <li>– One-click checkout, multi-currency support, and seamless gateway integration</li>
                             
                           </ul>
                       </div>
                   </div>

                   {/* Integrated Payment and Invoice Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3> Customer Engagement & Loyalty </h3>
                           <ul>
                              <li>Personalized offers, reward points, and automated campaigns</li>
                              
                           </ul>
                       </div>
                   </div>

                   {/* Mobile and Cloud-Based Access */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Optimized Order Fulfillment </h3>
                           <ul>
                              <li>BOPIS, ship-from-store, same-day delivery, and courier integration</li>
                               
                           </ul>
                       </div>
                   </div>

                   {/* Tally and Other Integrations */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>AI-Driven Insights </h3>
                           <ul>
                              <li> Predictive analytics, demand forecasting, and custom dashboards for smarter decisions</li>
                          
                           </ul>
                       </div>
                   </div>
               </div>
            </div>
        </section>

        <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="clothing-stores-text">
                            <h2>Why ChittorTech is India’s #1 Trusted Omnichannel AI & IT Solutions</h2>
<ul>
    <li>
        <strong>For All E-Retailers</strong> – Scalable solution for startups, SMEs, and large retail chains across India
    </li>
    <li>
        <strong>Cloud-Based Access</strong> – Manage your business anytime, anywhere, on any device
    </li>
    <li>
        <strong>Seamless Integrations</strong> – Connect accounting, POS, AI Knowledge Base, and payment gateways effortlessly
    </li>
    <li>
        <strong>Boost Efficiency &amp; Revenue</strong> – Minimize manual errors, streamline operations, and maximize profits
    </li>
    <li>
        <strong>Supports Multi-Channel &amp; D2C</strong> – Sell across online marketplaces, your own store, and offline outlets
    </li>
</ul>

                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img175.jpg" alt="ChittorTech Omnichannel - img175" />
                              </figure>
                          </div>
                      </div>
                  </div>
               </div>
      </section>

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                          <div className="clothing-stores-text">
                             <h2>Drive Omnichannel E-Commerce Growth with ChittorTech</h2>
<ul>
    <li>
        <strong>Seamless Shopping Experience</strong> – Connect online stores and physical outlets for a consistent brand journey
    </li>
    <li>
        <strong>Centralized Management</strong> – Control inventory, orders, and finances from a single dashboard
    </li>
    <li>
        <strong>Faster Operations</strong> – Reduce billing time, speed up order processing, and enhance customer satisfaction
    </li>
    <li>
        <strong>Scalable Growth</strong> – Automate workflows and leverage analytics to expand your business efficiently
    </li>
</ul>

                          </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-start">
                              <figure>
                                 <img src="/assets/images/img176.jpg" alt="ChittorTech Omnichannel - img176" />
                              </figure>
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
                          <h2> Join Thousands Merchants Who Trust Chittortech <span></span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/gro1.png" alt="ChittorTech Omnichannel - gro1" /> </figure>
                                <h3>4X Revenue Growth</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/gro2.png" alt="ChittorTech Omnichannel - gro2" /> </figure>
                                <h3>90% Faster Order Processing</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/gro3.png" alt="ChittorTech Omnichannel - gro3" /> </figure>
                                <h3>99% Reduced Manual Errors</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/gro4.png" alt="ChittorTech Omnichannel - gro4" /> </figure>
                                <h3>Trusted by thousands of retailers across India</h3>
                             </li>
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
                        <h2>Get Started with India’s #1 AI-Powered Omnichannel AI & IT Solutions</h2>
                        <p>Revolutionize your retail business with ChittorTech’ cloud-based AI & IT Solutions—streamline operations, boost sales, and grow smarter.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Schedule a Free Demo</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>
      
     <section className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                        <h2>ChittorTech – Empowering Retailers to Be Efficient, Profitable, and Competitive </h2>
                        <p>How to Leverage ChittorTech Omnichannel E-Commerce AI & IT Solutions</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Centralized Inventory & Multi-Warehouse Management</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Log in to your ChittorTech dashboard.</li>
                                             <li>Add products and assign them to multiple warehouses.</li>
                                             <li>Track stock levels automatically as sales occur across online and offline stores.</li>
                                             <li>Set alerts for low-stock items to avoid stock-outs.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Eliminates manual tracking errors.</li>
                                             <li>Real-time inventory updates prevent overselling.</li>
                                             <li>Optimizes stock allocation between stores and warehouses.</li>
                                             <li>Saves time for store managers and staff.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Custom E-Commerce Store Development</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Use ChittorTech’ drag-and-drop platform to design your e-store.</li>
                                             <li>Add product categories, images, and pricing.</li>
                                             <li>Integrate with Shopify, WooCommerce, or your custom platform.</li>
                                             <li>Launch the store and manage content directly from the dashboard.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Quick setup for online sales.</li>
                                             <li>Fully branded store design tailored to your business.</li>
                                             <li>Responsive design for mobile, tablet, and desktop.</li>
                                             <li>Seamless customer shopping experience improves conversions.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Seamless Accounting & GST Compliance</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Connect your online and offline stores to the AI & IT Solutions.</li>
                                             <li>Automatically record sales, expenses, and inventory costs.</li>
                                             <li>Generate GST-compliant invoices and E-Way bills directly from the system.</li>
                                             <li>Review financial reports monthly or quarterly for accounting purposes.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Centralized accounting reduces manual bookkeeping.</li>
                                             <li>Ensures compliance with Indian GST laws.</li>
                                             <li>Easy auditing and tax filing with accurate reports.</li>
                                             <li>Saves accounting costs and reduces errors.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Smart Checkout & Payment Integration</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Add payment gateways like Razorpay, Paytm, Pine Labs, or Mswipe.</li>
                                             <li>Enable guest checkout or one-click checkout options.</li>
                                             <li>Configure recurring billing for subscriptions if required.</li>
                                             <li>Track orders from checkout to delivery within the AI & IT Solutions.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Faster checkout improves customer satisfaction.</li>
                                             <li>Secure payment integration reduces transaction risks.</li>
                                             <li>Multi-currency support allows cross-border sales.</li>
                                             <li>Automates billing and reduces abandoned carts.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> AI Knowledge Base & Customer Engagement</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Import or collect customer contact data (email, mobile, WhatsApp).</li>
                                             <li>Segment customers based on purchase history or location.</li>
                                             <li>Create loyalty programs, coupons, and personalized offers.</li>
                                             <li>Send automated reminders, campaigns, or follow-ups via AI Knowledge Base.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Builds strong customer relationships.</li>
                                             <li>Increases repeat purchases and customer retention.</li>
                                             <li>Personalized offers enhance engagement.</li>
                                             <li>Simplifies marketing and customer communication.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Order Fulfillment & Logistics</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Set up warehouses, stores, and delivery partners in the AI & IT Solutions.</li>
                                             <li>Process orders from any channel and assign fulfillment automatically.</li>
                                             <li>Track order status (packed, shipped, delivered, returned) in real-time.</li>
                                             <li>Enable delivery options like BOPIS (Buy Online, Pick up In-Store) or same-day delivery.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Faster and accurate order processing.</li>
                                             <li>Reduces delivery errors and delays.</li>
                                             <li>Streamlines warehouse and logistics management.</li>
                                             <li>Enhances overall customer satisfaction.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Analytics & Reporting</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Access the dashboard to view sales, inventory, and customer reports.</li>
                                             <li>Analyze product performance, top-selling items, and revenue trends.</li>
                                             <li>Generate GST and financial reports for accounting and audits.</li>
                                             <li>Customize reports based on business needs.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Data-driven decisions improve business efficiency.</li>
                                             <li>Helps identify trends and market demands.</li>
                                             <li>Tracks business growth and operational performance.</li>
                                             <li>Supports strategic planning and inventory management.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4> Returns & Exchange Management</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Enable return/exchange policies for your products.</li>
                                             <li>Track returned items and update inventory automatically.</li>
                                             <li>Process refunds or replacements directly from the AI & IT Solutions.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Smooth handling of returns improves customer trust.</li>
                                             <li>Reduces manual errors in stock and finance updates.</li>
                                             <li>Maintains organized records for returns and exchanges.</li>
                                           </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <h4>Multi-Channel & Omni-Platform Integration</h4>
                                           <h5><strong>How to Use:</strong></h5>
                                           <ul>
                                             <li>Connect all your sales channels (online store, marketplaces, physical stores).</li>
                                             <li>Sync inventory, pricing, and customer data across all platforms.</li>
                                             <li>Manage orders, payments, and shipping from a single dashboard.</li>
                                           </ul>
                                           <h5><strong>Benefits:</strong></h5>
                                           <ul>
                                             <li>Unified view of your business across channels.</li>
                                             <li>Reduces manual data entry and errors.</li>
                                             <li>Enhances efficiency in multi-channel operations.</li>
                                             <li>Improves customer experience with consistent branding.</li>
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

      <section className="faq-template">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                          <div className="heading-wrap text-center">
                              <h2>FAQs on ChittorTech <span>Omnichannel E-Commerce AI & IT Solutions</span> </h2>
                          </div>
                        <div className="accordion" id="faqAccordion">

                            {/* New FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is ChittorTech Omnichannel E-Commerce AI & IT Solutions?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        It is an integrated AI & IT Solutions that helps online and offline retailers manage inventory,
                                        orders, accounting, and customer data from a single platform.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How does ChittorTech simplify E-Commerce stock management?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        It automatically synchronizes inventory across multiple warehouses and sales channels,
                                        preventing stock-outs and ensuring accurate order fulfillment.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can I create a custom E-Commerce website with ChittorTech?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, you can build a visually appealing and user-friendly online store using Vcommerce,
                                        ChittorTech’ E-Commerce website design platform.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How does ChittorTech handle accounting for e-retailers?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        The software provides GST-compliant accounting, centralized bookkeeping for online/offline stores,
                                        and helps with accurate tax calculations and filing.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Does it support multiple payment integrations?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, it integrates with popular payment gateways like Razorpay, Paytm, Pine Labs, Mswipe, and Ezetap,
                                        ensuring secure and seamless transactions.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        How does ChittorTech improve customer experience?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                    aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        It offers unified customer data management, personalized coupons and discounts,
                                        loyalty points, and AI Knowledge Base integration for consistent service across channels.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Is it suitable for all types of retail stores?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                    aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, it caters to various retail formats, including groceries, fashion, footwear, gifts,
                                        electronics, bakeries, and more.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Can I manage multiple warehouses and inventory from this software?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                    aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Absolutely, it allows centralized management of multiple warehouses,
                                        real-time inventory updates, and order fulfillment tracking.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        How does ChittorTech help with online/offline integration?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse"
                                    aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        It provides omnichannel features like buy online pick-up in store (BOPIS),
                                        ship-from-store, and unified reporting across all touchpoints.
                                    </div>
                                </div>
                            </div>

                            {/* New FAQ 10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        What analytics and reporting features does it offer?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse"
                                    aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        The software generates 150+ reports covering inventory, AI Knowledge Base, sales, financials,
                                        and order fulfillment to provide actionable insights for retailers.
                                    </div>
                                </div>
                            </div>

                        </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
