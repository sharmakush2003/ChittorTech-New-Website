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
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #be185d 55%, #9333ea 100%)', padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(250,168,212,0.18) 0%, transparent 70%)', top: '-200px', right: '-100px', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
                <i className={`fa-solid fa-tag`}></i> Boutique & Label Retail
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                Boutique POS & Fashion Label Retail Software
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Give your boutique a competitive edge — run lightning-fast billing, track style-wise stock movements, build loyal customer communities, and sell across online & offline channels from one sleek dashboard.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> See It Live
                </button>
                <a href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Talk to Expert
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'rgba(255,255,255,0.4)' }}>
                <i className={`fa-solid fa-tag`}></i>
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

    {/* Streamlined Billing & Payments */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Streamlined Billing &amp; Payments</h3>
            <p>Manage billing faster with digital tools and smooth payment experiences.</p>
            <ul>
                <li>Manage your cash register digitally</li>
                <li>Send invoices instantly via SMS</li>
                <li>Accept UPI, cards, and other digital payments</li>
            </ul>
        </div>
    </div>

    {/* Smart Inventory Control */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Smart Inventory Control</h3>
            <p>Stay in control of your boutique inventory with smart organization and automation.</p>
            <ul>
                <li>Organize items by category, style, size, color, or brand</li>
                <li>Auto-reorder stock based on demand trends</li>
                <li>Handle multiple product variants efficiently</li>
                <li>Generate barcodes and labels quickly</li>
                <li>Keep warehouse stock updated in real-time</li>
            </ul>
        </div>
    </div>

    {/* Integrated Online & Offline Selling */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Integrated Online &amp; Offline Selling</h3>
            <p>Sell everywhere with a connected omnichannel boutique experience.</p>
            <ul>
                <li>Launch your boutique e-store on Shopify, WooCommerce, or custom platforms</li>
                <li>Sync inventory across all sales channels automatically</li>
                <li>Secure payment gateways for smooth online transactions</li>
            </ul>
        </div>
    </div>

    {/* Customer Engagement & Loyalty Tools */}
    <div className="col-md-3 col-sm-6">
        <div className="key-box">
            <h3>Customer Engagement &amp; Loyalty Tools</h3>
            <p>Build lasting relationships and grow repeat business effortlessly.</p>
            <ul>
                <li>Maintain detailed customer profiles</li>
                <li>Send promotions and updates via WhatsApp</li>
                <li>Manage memberships digitally or with cards</li>
                <li>Run discounts, offers, and bundle promotions</li>
                <li>Collect feedback and reviews to improve customer experience</li>
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
                              <img src="/assets/images/img202.jpg" alt="Boutique Retail Software Features" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-7 order-md-1">
                      <div className="heading-wrap text-start">
                          <h2> <span>How ChittorTech Transforms Your Boutique Operations</span> </h2>
                       </div>
                       <div className="expertise-wrap bridal-wrap">
                          <ul>
    <li>
        <strong>Zero-Delay Checkout</strong><br />
        Barcode scanning, digital cash registers, and one-tap payment processing mean customers walk out happy — every time.
    </li>
    <li>
        <strong>Digital Invoicing via SMS & WhatsApp</strong><br />
        Instantly share professional GST-compliant receipts through SMS and WhatsApp without any printing hassle.
    </li>
    <li>
        <strong>Omnichannel Payment Acceptance</strong><br />
        UPI, debit/credit cards, net banking, and cash — your boutique is ready for every payment preference your customers have.
    </li>
    <li>
        <strong>Catalogue-Based Inventory</strong><br />
        Categorize your collection by style, gender, season, size, color, and brand with a visual catalogue layout.
    </li>
    <li>
        <strong>Demand-Driven Reordering</strong><br />
        Auto-trigger purchase orders for fast-moving pieces based on live sales velocity data.
    </li>
    <li>
        <strong>Seasonal Offer Engine</strong><br />
        Create and schedule festive discounts, flat-off campaigns, bundle packs, and digital coupon codes with one click.
    </li>
    <li>
        <strong>VIP Loyalty Programmes</strong><br />
        Reward your best shoppers with tiered loyalty points, exclusive early access, and birthday perks.
    </li>
    <li>
        <strong>Customer Segmentation & Analytics</strong><br />
        Identify your top buyers, inactive segments, and average spend patterns to run high-conversion targeted campaigns.
    </li>
    <li>
        <strong>WhatsApp Marketing Integration</strong><br />
        Push new arrivals, sale alerts, and event invites directly to customers' WhatsApp inboxes.
    </li>
    <li>
        <strong>Multi-Branch Stock Visibility</strong><br />
        Whether you run two boutiques or twenty, get live stock status across every location without manual audits.
    </li>

</ul>

                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Clothing Stores section start here */}
      <section className="clothing-stores-sec">
           <div className="container">
                <div className="row align-items-center">
                   <div className="col-md-6 order-md-2">
                       <div className="clothing-stores-text">
                          <h2>Connect & Manage Your Boutique Network Seamlessly </h2>
                        
<ul>
    <li>
        <strong>Unified Customer Profiles</strong><br />
        Keep all customer information synchronized across every store location.
    </li>
    <li>
        <strong>Effortless Stock Movement</strong><br />
        Transfer inventory and manage requests between branches with ease.
    </li>
    <li>
        <strong>Consolidated Reports &amp; Insights</strong><br />
        Get a complete view of sales, performance, and inventory through a single dashboard.
    </li>
    <li>
        <strong>Real-Time Inventory Oversight</strong><br />
        Monitor stock levels across all outlets instantly, ensuring availability and accuracy.
    </li>
    <li>
        <strong>Centralized Multi-Store Control</strong><br />
        Manage multiple boutique locations efficiently from one unified platform.
    </li>
</ul>

                       </div>
                   </div>
                   <div className="col-md-6 order-md-1">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img203.jpg" alt="ChittorTech Boutique Store - img203" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      {/* Clothing Stores section start here */}
      <section className="clothing-stores-sec">
           <div className="container">
                <div className="row align-items-center">
                   <div className="col-md-6">
                      <div className="clothing-stores-text">
    <h2>Smart Boutique Business Management – All in One Platform</h2>
    <p>
        ChittorTech delivers a fully integrated, AI-enabled AI & IT Solutions created to manage every aspect
        of your boutique smoothly and efficiently.
    </p>
    <ul>
        <li>Advanced billing system for quick and accurate checkout</li>
        <li>Central control for multiple boutiques from any location</li>
        <li>Real-time stock monitoring with barcode support</li>
        <li>Flexible payment acceptance for all customer preferences</li>
        <li>Intelligent business insights with sales predictions</li>
        <li>Built-in tools to create and operate your online boutique</li>
    </ul>
</div>

                   </div>
                   <div className="col-md-6">
                       <div className="clothing-stores-img">
                           <figure>
                              <img src="/assets/images/img204.jpg" alt="ChittorTech Boutique Store - img204" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/* Clothing Stores section end here */}

      <section className="choose-chittortech-sec core-features-sec">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2> Real Impact for Boutique Owners </h2>
                  </div>
                  <div className="why-choose-grid">
                     <div className="grid-item">
                        <figure> <img src="/assets/images/en1.png" alt="ChittorTech Boutique Store - en1" /> </figure>
                        <p>Up to 4× increase in overall sales performance
</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/en2.png" alt="ChittorTech Boutique Store - en2" /> </figure>
                        <p>Over 120 hours of billing work eliminated every month
</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/en3.png" alt="ChittorTech Boutique Store - en3" /> </figure>
                        <p>Transaction speed improved by nearly 90%</p>
                     </div>
                     <div className="grid-item">
                        <figure> <img src="/assets/images/en4.png" alt="ChittorTech Boutique Store - en4" /> </figure>
                        <p> Manual mistakes reduced to almost zero (99% accuracy)
</p>
                     </div>
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
                              <img src="/assets/images/img205.jpg" alt="Local &amp; National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-7">
                      <div className="heading-wrap text-start">
                          <h2> Why Choose ChittorTech  <span>Boutique Software?</span> </h2>
                       </div>
                       <div className="expertise-wrap bridal-wrap">
                           <ul>
                              <li>User-Friendly Interface for staff & owners</li>
                              <li>Affordable Pricing for all business sizes</li>
                              <li>Cloud-Based Access on any device</li>
                              <li>24/7 Support & Dedicated Assistance</li>
                              <li>4.8★ Customer Satisfaction Rating</li>
                              <li>Tailored Customization for boutique operations</li>
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
                      <h2>Grow Your Fashion Boutique with India’s No.1 Cloud-Based AI Assistant Software</h2>
                      <p>Smart, simple, and affordable – everything your fashion boutique store needs to sell smarter and grow faster.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>



      {/* industry new-cards section start here */}
      <section className="industry new-cards pt-60">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="heading-wrap">
                     <h2>How to Use Chittortech Boutique Software</h2>
                  </div>

                  <div className="desktop-industries">
                     <div className="row justify-content-center">

                        {/* 1. Add Customer Profiles */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/re1.png" alt="Customer Profiles" className="img-fluid mb-3" />
                                       <h4>Step 1 – Setup & Customization</h4>
                                       <ul>
                                          <li>Install on desktop, laptop, tablet, or mobile.</li>
                                          <li>Add product categories: Men, Women, Kids, Ethnic, Casual, Seasonal Wear.</li>
                                          <li>Create SKUs with barcode & label generator.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 2. Segment Customers */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/re2.png" alt="Segment Customers" className="img-fluid mb-3" />
                                       <h4>Step 2 – Smart Billing & GST Compliance</h4>
                                       <ul>
                                          <li>Generate bills in seconds.</li>
                                          <li>Share via SMS or WhatsApp instantly.</li>
                                          <li>Auto-apply GST and maintain compliance.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 3. Track Customer Interactions */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/re3.png" alt="Track Interactions" className="img-fluid mb-3" />
                                       <h4>Step 3 – Inventory Management</h4>
                                       <ul>
                                          <li>Track stock by size, color, brand, and style.</li>
                                          <li>Automate reorders for best-selling designs.</li>
                                          <li>Verify stock with mPOS tools.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 4. Manage Appointments and Fittings */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/re4.png" alt="Manage Appointments" className="img-fluid mb-3" />
                                       <h4>Step 4 – Multi-Store AI & IT Solutions Management</h4>
                                       <ul>
                                          <li>Manage multiple boutiques from one dashboard.</li>
                                          <li>Transfer stock between branches easily.</li>
                                          <li>Access centralized customer database.</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* 5. Purchase History */}
                        <div className="col-lg-4 col-md-6 col-6">
                           <div className="boxes mb-4 flip-container">
                              <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                       <img src="/assets/images/re5.png" alt="Purchase History" className="img-fluid mb-3" />
                                       <h4>Step 5 – Omnichannel Selling</h4>
                                       <ul>
                                          <li>aunch your online boutique with Shopify or WooCommerce.</li>
                                          <li>Sync offline & online inventory.</li>
                                          <li>Accept UPI, cards, wallets, and more.</li>
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

      {/* industry new-cards section end here */}

      <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <div className="phone-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h2>ChittorTech – Smart AI & IT Solutions for Fashion Boutiques</h2>
                        <p>Experience the next level of fashion retail management with our all-in-one cloud-based boutique AI Assistant Software. From billing to inventory, AI Knowledge Base to AI & IT Solutions, Chittortech makes running your boutique simple, fast, and profitable.</p>
                         
                             <button className="cta-button" onClick={() => { window.location.href = "/contact-us"; }}>
 👉 Book a Free Demo Today!
</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <section className="manufacturing-key section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-9">
                        <div className="heading-wrap">
                            <h2>Benefits of Chittortech Boutique <span>AI & IT Solutions</span> </h2>
                        </div>
                    </div>
                </div>
               <div className="row justify-content-center gy-4">
                   {/* Simplified GST Compliance */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>For Owners:</h3>
                           <ul>
                              <li>Save 120+ billing hours per month</li>
                              <li>Get real-time profit & loss reports</li>
                              <li>Manage multiple stores with a single AI & IT Solutions system</li>
                           </ul>
                       </div>
                   </div>

                   {/* Real-Time Financial Reporting */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>For Staff:</h3>
                           <ul>
                              <li>Easy-to-use Management interface</li>
                              <li>Reduce manual errors by 99%</li>
                              <li>Speed up billing by 90%</li>
                           </ul>
                       </div>
                   </div>

                   {/* Centralized Multi-Store Management */}
                   <div className="col-lg-4 col-md-6">
                       <div className="key-box">
                           <h3>For Customers:</h3>
                           <ul>
                              <li>Quick & smooth checkout</li>
                              <li>Instant invoices via WhatsApp/SMS</li>
                              <li>Loyalty points and personalized offers</li>
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
                           <h2>How to Get More Customers with Boutique Software</h2>
                           <ul>
                              <li><strong>Customer Insights:</strong> Track buying trends & reorder fast-moving items.</li>
                              <li><strong>Targeted Marketing:</strong> Segment buyers into VIP, Regular, or Lost customers for special offers.</li>
                              <li><strong>Promotions & Discounts:</strong> Run bundle offers, festive discounts, and in-store deals.</li>
                              <li><strong>WhatsApp Engagement:</strong> Share new arrivals, promotions, and reminders directly with buyers.</li>
                              <li><strong>Loyalty Programs:</strong> Reward frequent buyers with points & membership perks.</li>
                              <li><strong>Omnichannel Presence:</strong> Sell both online & offline for maximum reach.</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img104.jpg" alt="ChittorTech Boutique Store - img104" />
                           </figure>
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
                           <h2>Store Management & AI & IT Solutions Guidelines</h2>
                           <ul style={{ "paddingLeft": "0px" }}>
                              <li style={{ "listStyle": "none" }}>✅ Update inventory daily for real-time stock accuracy</li>
                              <li style={{ "listStyle": "none" }}>✅ Use barcode scanning to avoid billing mistakes</li>
                              <li style={{ "listStyle": "none" }}>✅ Monitor sales reports before reordering garments</li>
                              <li style={{ "listStyle": "none" }}>✅ Train staff on Management for faster checkouts</li>
                              <li style={{ "listStyle": "none" }}>✅ Centralize customer data for loyalty & targeted marketing</li>
                              <li style={{ "listStyle": "none" }}>✅ Enable stock transfer between stores to avoid shortages</li>
                              <li style={{ "listStyle": "none" }}>✅ Analyze MIS reports to forecast demand & trends</li>
                              <li style={{ "listStyle": "none" }}>✅ Run promotions based on season & fashion demand</li>
                              <li style={{ "listStyle": "none" }}>✅ Go omnichannel by connecting your store with online platforms</li>
                              <li style={{ "listStyle": "none" }}>✅ Track cash flow & accounts with built-in AI & IT Solutions modules</li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-5 order-md-1">
                       <div className="clothing-stores-img text-end">
                           <figure>
                              <img src="/assets/images/img104.jpg" alt="ChittorTech Boutique Store - img104" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      


      <section className="pricing-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            
            {/* Basic Plan */}
            <div className="col-md-4 mb-4">
              <div className="pricing-card basic">
                <div className="pricing-header">
                  <div className="plan-icon-wrap bg-success">
                    <i className="bi bi-bag-check"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>For Small Boutiques</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Smart AI Support Chatbot (GST-Ready)</li>
                  <li>✔ SMS & WhatsApp Billing</li>
                  <li>✔ Inventory Management (Color, Size, Category)</li>
                  <li>✔ Single Store Support</li>
                  <li>✔ Basic Reports</li>
                </ul>
                <div className="price">₹999 <span>/month</span></div>
                <div className="price-alt">₹9,999 /year</div>
                <a href="#" className="btn btn-success mt-3">Get Started</a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="col-md-4 mb-4">
              <div className="pricing-card standard">
                <div className="pricing-header">
                  <div className="plan-icon-wrap bg-warning">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Standard Plan</h3>
                  <p>For Growing Boutiques</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Everything in Basic +</li>
                  <li>✔ AI Knowledge Base with Customer Segmentation (VIP/Regular/Lost)</li>
                  <li>✔ Loyalty & Membership Program</li>
                  <li>✔ Omnichannel (Online + Offline Sync)</li>
                  <li>✔ Warehouse & Stock Transfer</li>
                  <li>✔ 100+ MIS Reports</li>
                </ul>
                <div className="price">₹1,999 <span>/month</span></div>
                <div className="price-alt">₹19,999 /year</div>
                <a href="#" className="btn btn-warning mt-3 text-dark">Get Started</a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="col-md-4 mb-4">
              <div className="pricing-card premium">
                <div className="pricing-header">
                  <div className="plan-icon-wrap bg-danger">
                    <i className="bi bi-building-gear"></i>
                  </div>
                  <h3>Premium Plan</h3>
                  <p>For Multi-Branch Fashion Chains</p>
                </div>
                <ul className="pricing-features">
                  <li>✔ Everything in Standard +</li>
                  <li>✔ Multi-Store Centralized AI & IT Solutions Dashboard</li>
                  <li>✔ Advanced Analytics & Forecasting</li>
                  <li>✔ Automated Reordering & Purchase Orders</li>
                  <li>✔ Custom E-commerce Store (Shopify/WooCommerce)</li>
                  <li>✔ Dedicated Account Manager & 24/7 Support</li>
                </ul>
                <div className="price">₹3,999 <span>/month</span></div>
                <div className="price-alt">₹39,999 /year</div>
                <a href="#" className="btn btn-danger mt-3">Get Started</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/*  faq template section */}
      <section className="faq-template">
          <div className="container">
              <div className="heading-wrap text-center">
                  <h2> Frequently Asked <span>Questions – Chittortech Boutique Management</span> </h2>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="faq-section">
                          <div className="accordion" id="faqAccordion">
                              {/* Chittortech FAQ 1 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading11">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                          What is Chittortech Boutique AI Assistant Software?
                                      </button>
                                  </h2>
                                  <div id="collapse11" className="accordion-collapse collapse show" aria-labelledby="heading11"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Chittortech is a cloud-based AI & IT Solutions designed for fashion boutiques. It helps manage billing, inventory, AI Knowledge Base, promotions, and online sales – all in one place.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 2 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading12">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                          How is it better than normal billing software?
                                      </button>
                                  </h2>
                                  <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Unlike simple billing apps, Chittortech also handles stock, customer engagement, online sales, loyalty programs, and AI & IT Solutions features for complete boutique management.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 3 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading13">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                          Do I need technical knowledge to use it?
                                      </button>
                                  </h2>
                                  <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          No. The software is user-friendly, works on desktop/tablet/mobile, and your staff can learn it within a day.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 4 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading14">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                          Can I manage multiple boutique branches?
                                      </button>
                                  </h2>
                                  <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes. Our Premium Plan offers multi-branch AI & IT Solutions management with centralized reporting and inventory sync.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 5 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading15">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                          Does it support online selling?
                                      </button>
                                  </h2>
                                  <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes. With Standard & Premium plans, you can launch your own online boutique store or integrate with Shopify/WooCommerce.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 6 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading16">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                          How does it help me get more customers?
                                      </button>
                                  </h2>
                                  <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Through AI Knowledge Base, WhatsApp campaigns, loyalty programs, targeted promotions, and customer segmentation, you can build stronger customer relationships.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 7 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading17">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                          Is the software GST-compliant?
                                      </button>
                                  </h2>
                                  <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Yes. All billing is GST-ready with automated tax calculation and SMS/WhatsApp invoice sharing.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 8 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading18">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                          What devices can I use it on?
                                      </button>
                                  </h2>
                                  <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          You can use it on desktop, laptop, tablet, or mobile. It also supports mPOS for exhibitions or fairs.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 9 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading19">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                          Can I customize the software for my boutique?
                                      </button>
                                  </h2>
                                  <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          Absolutely. Chittortech offers customized solutions like brand-specific billing formats, loyalty programs, and personalized reports.
                                      </div>
                                  </div>
                              </div>
                              {/* Chittortech FAQ 10 */}
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="heading20">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                          What support do you provide?
                                      </button>
                                  </h2>
                                  <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20"
                                      data-bs-parent="#faqAccordion">
                                      <div className="accordion-body">
                                          We offer 24/7 support (chat, call, and email), free training for your staff, and a dedicated account manager in the Premium plan.
                                      </div>
                                  </div>
                              </div>
                          </div>{/* /accordion */}
                      </div>
                  </div>
              </div>
          </div>
      </section>


      {/* faq template section */}
    </>
  );
}
