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
                <i className={`fa-solid fa-users`}></i> AI Knowledge Base
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                RAG Knowledge Base & Enterprise AI Search
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Transform internal manuals, PDFs, and documents into an interactive AI search assistant.
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
                <i className={`fa-solid fa-users`}></i>
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
                  <div className="col-md-12">
                        <div className="heading-wrap text-center mobile-a pro-list">
                          <h2>AI-Powered #1 Cloud AI Knowledge Base for Retail – ChittorTech </h2>
                          <p>Transform your retail business with ChittorTech, India’s leading AI-driven cloud AI Knowledge Base. Designed for retailers, this platform helps you grow your customer base, strengthen loyalty, and boost sales effortlessly.</p>
                       </div>
                       <div className="row">                  
                        <div className="col-md-6">
                         <div className="ai-solutions-item-wrap">
    <div className="ai-solutions-item">
        <h4>Smart Customer Insights</h4>
        <p>
            Track your customers in real-time and gain actionable insights to make data-driven business decisions.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Top Spenders &amp; VIPs</h4>
        <p>
            Automatically identify high-value and frequent shoppers so you can reward loyalty and increase repeat purchases.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Lost Customer Recovery</h4>
        <p>
            Spot inactive customers and re-engage them with personalized offers to win them back effectively.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Personalized Engagement</h4>
        <p>
            Send AI-powered messages on birthdays, anniversaries, or special events to make every customer feel valued.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Coupon &amp; Offer Automation</h4>
        <p>
            Easily create digital vouchers, discounts, and promotions to drive sales and improve customer retention.
        </p>
    </div>

   
</div>

                        </div>
                        <div className="col-md-6">
                           <div className="ai-solutions-item-wrap">
                               <div className="ai-solutions-item">
        <h4>Secure Transactions &amp; Contact Management</h4>
        <p>
            Verify “Pay Later” customers, manage international contacts, and store customer data securely.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Loyalty Points &amp; Alerts</h4>
        <p>
            Keep track of reward points, usage, and receive instant notifications for important customer updates.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Feedback &amp; Review Management</h4>
        <p>
            Collect ratings and reviews digitally, identify improvement areas, and enhance the overall shopping experience.
        </p>
    </div>

    <div className="ai-solutions-item">
        <h4>Seamless Membership Management</h4>
        <p>
            Create and manage physical or digital membership programs to strengthen long-term customer loyalty.
        </p>
    </div>
                           </div>
                        </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/* Solutions Holds section end here */}

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                         <div className="clothing-stores-text">
    <h2>AI Knowledge Base Dashboard Highlights – ChittorTech</h2>
    <ul>
        <li>
            <strong>Instant Customer Overview</strong> – See your total customer base at a glance for faster decision-making.
        </li>
        <li>
            <strong>Top Performers</strong> – Identify your highest-spending clients and focus on nurturing key relationships.
        </li>
        <li>
            <strong>Loyalty Recognition</strong> – Spot VIP customers and reward repeat buyers to strengthen loyalty.
        </li>
        <li>
            <strong>Engagement Monitoring</strong> – Track regular shoppers and flag at-risk clients to reduce churn.
        </li>
        <li>
            <strong>Inactive Customer Recovery</strong> – Reconnect with customers who haven’t visited recently through targeted campaigns.
        </li>
        <li>
            <strong>Feedback &amp; Insights</strong> – Collect ratings and reviews to measure satisfaction and improve store performance.
        </li>
        <li>
            <strong>Coupons &amp; Rewards Management</strong> – Monitor active promotions, track coupon usage, and manage loyalty points seamlessly.
        </li>
        <li>
            <strong>Automated Greetings</strong> – Send personalized birthday and anniversary messages to keep customers engaged.
        </li>
        <li>
            <strong>Global Client Support</strong> – Store and manage international contacts efficiently.
        </li>
        <li>
            <strong>Secure Payment Verification</strong> – Ensure “Pay Later” transactions are safe with OTP verification.
        </li>
        <li>
            <strong>Financial Alerts</strong> – Receive real-time notifications for pending receivables and payables.
        </li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img177.jpg" />
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
    <h2>Why ChittorTech is India’s Leading Cloud AI Knowledge Base for Retail</h2>
    <ul>
        <li>
            <strong>Retail-Centric Design</strong><br />
            Built specifically for retailers, with features that tackle real-world retail challenges and boost business efficiency.
        </li>
        <li>
            <strong>Access Anywhere, Anytime</strong><br />
            Use the AI Knowledge Base seamlessly on desktops, tablets, or mobile devices to manage your customers on the go.
        </li>
        <li>
            <strong>Cloud-Powered Convenience</strong><br />
            Monitor, analyze, and update customer data from anywhere with secure cloud access.
        </li>
        <li>
            <strong>Seamless Integrations</strong><br />
            Easily connect with POS systems, AI & IT Solutions solutions, and accounting software for unified operations.
        </li>
        <li>
            <strong>Boost Customer Loyalty</strong><br />
            Leverage smart tools to retain top customers, reward loyalty, and strengthen relationships.
        </li>
        <li>
            <strong>Insight-Driven Decisions</strong><br />
            Gain actionable analytics to make informed decisions and drive business growth.
        </li>
        <li>
            <strong>Scalable &amp; Cost-Effective</strong><br />
            Flexible pricing and scalable features that grow with your business, whether small or large.
        </li>
    </ul>
</div>

                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img178.jpg" />
                              </figure>
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
                        <h2>Experience the Future of Retail AI Knowledge Base!</h2>
                        <p>Streamline your retail operations with ChittorTech, India’s #1 AI-powered cloud AI Knowledge Base. Enhance customer engagement, reward loyalty, and drive higher sales — all with an intuitive, powerful platform.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}  className="cta-button">Book Your Free Demo Today | Join Thousands of Successful Retailers</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>
      

      <section id="features" className="industry new-cards accounting-sec">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="heading-wrap">
                       <h2>
 Top Features of India’s Leading Cloud AI Knowledge Base for Retail – ChittorTech
</h2>

                        <p>An AI-powered cloud AI Knowledge Base designed to help retailers stay connected with customers, boost engagement, and drive business growth.</p>
                     </div>
                     <div className="desktop-industries">
                        <div className="row justify-content-center">
                           <div className="col-md-4 col-sm-6">
                              <div className="boxes mb-4 flip-container">
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                       <div className="flip-card-back">
                                          <img src="/assets/images/bi1.png" alt="Billing" className="img-fluid mb-3" />
                                          <h4>Centralized Customer Insights</h4>
                                          <p>Access all customer information in one place. Track preferences, purchase history, and interactions to offer a personalized shopping experience.</p>
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
                                          <img src="/assets/images/bi2.png" alt="Inbuilt Accounting Modules" className="img-fluid mb-3" />
                                          <h4>Built-In Accounting</h4>
                                          <p>Manage invoices, payments, and financial records directly within the system. Reduce errors and save time with automated accounting tools.</p>
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
                                          <img src="/assets/images/bi3.png" alt="Organize Clothing Stock" className="img-fluid mb-3" />
                                          <h4>Smart Promotions & Offers</h4>
                                          <p>Design and manage discounts, vouchers, and special campaigns effortlessly. Encourage repeat purchases and reward loyal customers automatically.</p>
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
                                          <img src="/assets/images/bi4.png" alt="Best Selling Apparel" className="img-fluid mb-3" />
                                          <h4>POS Integration for Retail</h4>
                                          <p>Link your AI Knowledge Base with POS systems to combine sales tracking and customer management. Monitor transactions, analyze shopping trends, and make data-driven decisions.</p>
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
                                          <img src="/assets/images/bi5.png" alt="Offers and Discount Management" className="img-fluid mb-3" />
                                          <h4>Advanced Customer Analytics</h4>
                                          <p>Identify top shoppers, regulars, at-risk clients, and lapsed customers. Use actionable insights to improve marketing strategies and increase retention.</p>
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
                                          <img src="/assets/images/bi6.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Automatic Discount Handling</h4>
                                          <p>Create discount schemes and apply them at checkout without manual effort. Keep promotions organized and consistent across all channels.</p>
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
                                          <img src="/assets/images/bi7.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Seamless System Connectivity</h4>
                                          <p>Connect your AI Knowledge Base to e-commerce platforms, inventory software, and accounting systems. Keep data synchronized for smooth, unified operations.</p>
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
                                          <img src="/assets/images/bi8.png" alt="Sort Style-wise" className="img-fluid mb-3" />
                                          <h4>Multi-Store Management</h4>
                                          <p>Manage multiple outlets from a single dashboard. Maintain consistent offers, customer loyalty programs, and stock control across all locations.</p>
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
                              <h2>Integrated Modules for All Your Retail Needs</h2>
                              <h5>An omnichannel retail AI Knowledge Base with integrated modules for:</h5>
                              <ul>
                                <li>Inventory Management</li>
                                <li>Accounting & GST Compliance</li>
                                <li>E-Commerce Store Management</li>
                                <li>POS System Integration</li>
                              </ul>
                              <h4>Supported Integrations:</h4>
                              <ul>
                                <li>E-commerce Platforms</li>
                                <li>Communication & Marketing Tools</li>
                                <li>Payment Solutions</li>
                                <li>Shipping & Logistics</li>
                                <li>Business Applications</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img179.jpg" />
                              </figure>
                          </div>
                      </div></div></div></section>

      <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 order-md-2">
                          <div className="clothing-stores-text">
                              <h2>Transform Your Retail Business with Omnichannel AI Knowledge Base – ChittorTech</h2>
                              <p>Streamline your retail operations from one smart cloud platform. Handle accounting, GST, online stores, payroll, and POS effortlessly while gaining full control over your business.</p>
                             <ul>
    <li>Centralized AI Knowledge Base for smooth operations</li>
    <li>Real-time inventory &amp; customer tracking</li>
    <li>Manage multiple stores from a single dashboard</li>
    <li>Instant insights with business and customer analytics</li>
    <li>Efficient e-commerce store management</li>
    <li>POS with automated GST-compliant invoicing</li>
</ul>

                          </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img180.jpg" />
                              </figure>
                          </div>
                      </div></div></div></section>

       <section className="clothing-stores-sec pro-clothing-sec">
           <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="clothing-stores-text">
                              <h2>Why ChittorTech is the Best AI Knowledge Base for Retail Stores in India</h2>
                              <ul>
                                <li>Experience: Expertly engineered AI Knowledge Base for retail businesses.</li>
                                <li>Designed for Retailers: Features tailored for retail operations.</li>
                                <li>Implementation Support: Dedicated team assists in setup and training.</li>
                                <li>Cloud-Based AI Knowledge Base: Access customer data anytime, anywhere.</li>
                                <li>Integration Capabilities: Works with POS, e-commerce, and payment systems.</li>
                                <li>Affordable: Most feature-rich integrated AI Knowledge Base solution at unbeatable prices.</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img181.jpg" />
                              </figure>
                          </div>
                      </div></div></div></section>

      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Impact  <span> Metrics</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/ra1.png" alt="" /> </figure>
                                <h3>4X Revenue Growth Rate</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ra2.png" alt="" /> </figure>
                                <h3>120+ Billing Hours Saved/Month</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ra3.png" alt="" /> </figure>
                                <h3>90% Faster Processing Time</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/ra4.png" alt="" /> </figure>
                                <h3>99% Reduction in Manual Errors</h3>
                             </li>
                          </ul>
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
                              <h2>Customer Success with ChittorTech AI Knowledge Base</h2>
                              <p>Trusted by Thousands of users”, ChittorTech AI Knowledge Base ensures:</p>
                              <ul>
                                <li>Improved customer engagement and loyalty</li>
                                <li>Efficient coupon and discount management</li>
                                <li>VIP customer recognition and reward for regulars</li>
                                <li>Regaining lost customers and reducing churn</li>
                                <li>Collecting feedback and reviews for enhanced retail experience</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-6 order-md-1">
                          <div className="clothing-stores-img text-end">
                              <figure>
                                 <img src="/assets/images/img182.jpg" />
                              </figure>
                          </div>
                      </div></div></div></section>

      
    <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>How to Use ChittorTech <span>AI Knowledge Base for Retail Business</span> </h2>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center gy-4">
                   {/* Simplified GST Compliance */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 1: Set Up Your Retail Profile</h3>
                           <ul>
                                <li>Register your retail store on the AI Knowledge Base platform.</li>
                                <li>Add store details, multiple outlets (if any), and set user permissions.</li>
                                <li>Upload existing customer data to create a unified database.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Real-Time Financial Reporting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 2: Manage Customer Data</h3>
                           <ul>
                               <li>Use the Unified Customer Database to store customer details like name, phone, email, address, and purchase history.</li>
                               <li>Categorize customers as VIP, regular, at-risk, or lost for targeted marketing.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Centralized Multi-Store Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 3: Create Promotions & Offers</h3>
                           <ul>
                                <li>Generate coupons, discounts, and promotional campaigns directly from the AI Knowledge Base.</li>
                                <li>Set validity periods and minimum purchase conditions for each offer.</li>
                                <li>Track coupon usage and revenue generated from campaigns.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Advanced Inventory Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 4: Monitor Customer Interactions</h3>
                           <ul>
                                <li>Track visits, purchases, and engagement for each customer.</li>
                                <li>Send automated birthday/anniversary messages or personalized promotions.</li>
                                <li>Regain lost customers by sending timely reminders and exclusive offers.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Integrated Payment and Invoice Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 5: Analyze Customer Behavior</h3>
                           <ul>
                               <li>Use Customer Analytics to identify trends, purchase patterns, and high-value customers.</li>
                               <li>Access detailed reports to enhance store strategy, improve promotions, and prevent churn.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Mobile and Cloud-Based Access */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 6: Streamline Billing & POS</h3>
                           <ul>
                                <li>Integrate Retail POS and AI Customer Engine to manage transactions and customer data in one place.</li>
                                <li>Apply discounts and coupons automatically at checkout.</li>
                                <li>Enable secure payment and pay-later options with verification.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Tally and Other Integrations */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 7: Multi-Store & Inventory Management</h3>
                           <ul>
                                <li>Synchronize data across multiple outlets with multi-store support.</li>
                                <li>Monitor inventory levels in real-time, ensuring no stock-outs or overstock situations.</li>
                                <li>Track coupon and promotion usage across all stores for consistent customer experience.</li>
                           </ul>
                       </div>
                   </div>

                   {/* Budgeting and Forecasting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>Step 8: Feedback & Customer Engagement</h3>
                           <ul>
                                <li>Collect ratings, reviews, and feedback post-purchase.</li>
                                <li>Analyze customer sentiment and adjust your service strategy accordingly.</li>
                                <li>Reward loyal customers with points, discounts, and exclusive offers.</li>
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
                          <h2> Benefits of Using Chittortech  <span> Solutions AI Knowledge Base for Retail</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <h3>Increase Customer Retention</h3>
                                <p>Recognize VIP and regular customers, and provide personalized attention to retain them.</p>
                             </li>
                             <li>
                                <h3>Boost Sales and Revenue</h3>
                                <p>Offer management, coupons, and promotions drive repeat purchases and higher basket value.</p>
                             </li>
                             <li>
                                <h3>Streamline Retail Operations</h3>
                                <p>Integrates customer data, billing, POS, inventory, and promotions in a single platform.</p>
                             </li>
                             <li>
                                <h3>Enhance Customer Satisfaction</h3>
                                <p>Personalized messaging, feedback tracking, and loyalty programs create a better shopping experience.</p>
                             </li>
                             <li>
                                <h3>Data-Driven Decision Making</h3>
                                <p>Customer analytics and reporting allow you to make informed business decisions.</p>
                             </li>
                             <li>
                                <h3>Multi-Store Synchronization</h3>
                                <p>Manage multiple outlets efficiently with real-time inventory and customer updates.</p>
                             </li>
                             <li>
                                <h3>Secure and Cloud-Based Access</h3>
                                <p>Access your retail AI Knowledge Base anywhere, anytime, from desktop or mobile.</p>
                             </li>
                             <li>
                                <h3>Reduce Manual Errors</h3>
                                <p>Automated billing, discount application, and customer data updates minimize mistakes.</p>
                             </li>
                             <li>
                                <h3>Efficient Marketing Campaigns</h3>
                                <p>Targeted campaigns for specific customer groups increase engagement and ROI.</p>
                             </li>
                             <li>
                                <h3>Time & Cost Savings</h3>
                                <p>Save hours on manual data entry, billing, and customer management.</p>
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
                        <h2>Avail the Free Demo Now!</h2>
                        <p>Experience the #1 cloud-based AI Knowledge Base for retail business in India. Increase customer count, streamline operations, and grow your retail business with ChittorTech AI Knowledge Base.</p>
                        <h5>Schedule a Demo | Join Thousands Happy Retailers</h5>
                        <h5>Copyright © ChittorTech 2025</h5>
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
                              <h2>Key Questions & Answers About ChittorTech:  <span>India’s Best Cloud-Based AI Knowledge Base for Retail Businesses</span> </h2>
                          </div>
                            <div className="accordion" id="faqAccordion">
                                {/* AI Knowledge Base FAQ 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How Can ChittorTech’ AI Knowledge Base Improve Customer Engagement for Retail Businesses?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            ChittorTech AI Knowledge Base helps retail businesses engage customers effectively by providing a unified customer database, automated feedback collection, personalized greetings on birthdays/anniversaries, and targeted promotions. Retailers can identify VIP, regular, and at-risk customers and implement personalized campaigns to increase loyalty and repeat purchases.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What Are the Key Benefits of Using ChittorTech’ AI Knowledge Base for Retail Stores in India?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The key benefits include centralized customer data, improved customer retention, streamlined discount and coupon management, multi-store support, real-time customer analytics, faster billing, seamless integration with POS and e-commerce platforms, and secure cloud access to all retail data anytime.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How Does Cloud-Based AI Knowledge Base by ChittorTech Help Retailers Increase Sales and Loyalty?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            By leveraging advanced customer analytics, loyalty point management, and promotional campaigns, retailers can identify high-value customers, reward repeat buyers, and re-engage lost customers. This targeted approach drives higher sales, enhances customer loyalty, and encourages positive reviews.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Why Is ChittorTech the Best AI Customer Engine for Managing Multi-Store Retail Operations?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The AI Knowledge Base supports multi-store management with centralized dashboards, unified promotions, and inventory syncing across all locations. Retailers can manage offers, coupons, and customer data across multiple outlets seamlessly, ensuring consistent service and a unified shopping experience for all customers.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How Can Retailers Streamline Inventory, Accounting, and Customer Management with ChittorTech’ AI Knowledge Base?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                        aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            ChittorTech AI Knowledge Base integrates with POS, e-commerce, and accounting systems, enabling retailers to manage stock, track sales, calculate GST, generate invoices, and maintain customer data from a single platform. This reduces errors, saves time, and simplifies operations across all business functions.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            What Features of ChittorTech’ Retail AI Knowledge Base Ensure Personalized Customer Experiences?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                        aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Features like unified customer database, VIP identification, anniversary/birthday messaging, automated promotions, and loyalty point management allow retailers to personalize interactions. Customers feel valued, receive relevant offers, and experience tailored service, increasing satisfaction and repeat visits.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 7 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            How Can Retailers Identify VIP, Regular, and At-Risk Customers Using ChittorTech AI Knowledge Base?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                        aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The AI Knowledge Base automatically categorizes customers based on visits and purchase behavior. VIP customers are identified by frequent purchases, regular customers by repeated activity, and at-risk or lost customers are flagged for re-engagement campaigns. Retailers can take proactive actions to retain and reward valuable customers.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 8 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            How Does ChittorTech’ AI Knowledge Base Simplify Coupon, Discount, and Offer Management?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                        aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Retailers can create, manage, and track coupons, vouchers, and discount offers easily. The system prevents expired or deactivated coupons from being used, monitors coupon revenue, and integrates discounts seamlessly at the POS or online checkout, reducing manual errors and boosting campaign efficiency.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 9 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            Why Should Retailers Choose ChittorTech’ AI Knowledge Base for Omnichannel Customer Management?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse"
                                        aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            It provides a single platform for managing customers across physical stores, online e-commerce stores, and multi-location retail chains. All customer interactions, sales data, and loyalty points are synchronized, creating a consistent omnichannel shopping experience and increasing customer satisfaction.
                                        </div>
                                    </div>
                                </div>

                                {/* AI Knowledge Base FAQ 10 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                            How Can ChittorTech’ AI Knowledge Base Help Retailers Make Data-Driven Decisions and Grow Their Business?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                        aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            The AI Knowledge Base delivers real-time analytics, reporting, and dashboards on sales, inventory, customer behavior, and promotions. Retailers can analyze VIP, regular, and at-risk customer segments, measure campaign effectiveness, and optimize inventory and offers, enabling smarter decisions that drive growth and profitability.
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
