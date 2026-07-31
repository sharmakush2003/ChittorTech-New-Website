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
                <i className={`fa-solid fa-building`}></i> Our Story
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                About ChittorTech
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Passionate technologists empowering Indian businesses with cutting-edge software solutions.
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
                <i className={`fa-solid fa-building`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
     
{/* header */}
<section className="about-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="heading-wrap text-start">
               <h1>About Chittortech <span>Soft Solutions</span> </h1>
               <h5>Revolutionizing Retail & It Services Across India</h5>
               <p>
                  At ChittorTech, our mission is to transform the retail industry and empower businesses with advanced technology solutions. We provide cloud-based AI & IT Solutions, POS, and IT services designed to streamline operations, enhance productivity, and accelerate growth.
               </p>
               <br />
               <p>
                  From small boutiques to large supermarkets, we help businesses unlock their full potential with Smart Retail solutions, Omni-Channel Management, Hybrid-POS systems, and comprehensive IT services. Our solutions are tailored to meet the unique challenges of Small and Medium Enterprises (SMEs) while also supporting large-scale retail operations.
               </p>
               <br />
               <p>
                  We understand the hurdles businesses face when trying to access affordable, efficient, and scalable AI & IT Solutions and IT solutions. Many SMEs are priced out of advanced systems, which limits growth and efficiency. ChittorTech bridges this gap by offering accessible, innovative, and user-friendly solutions that empower businesses to scale without compromise.
               </p>
            </div>
         </div>
         <div className="col-md-6">
            <img src="/assets/images/about-img.png" alt="ChittorTech" className="about-img" />
         </div>
      </div>
   </div>
</section>
{/* Mission Section */}
<section className="mission-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="mission-img">
               <img src="/assets/images/mission.png" alt="Mission Vector Image" className="mission-img" />
            </div>
         </div>
         <div className="col-md-6">
            <div className="mission-wrap">
               <h3>Vision</h3>
               <p> To shape the future of retail and IT services in India by providing innovative, cloud-based solutions that are both intuitive and powerful, helping businesses thrive in a competitive market.</p>
               <br />
               <h3>Mission</h3>
               <p> To accelerate success for retailers and enterprises by delivering data-driven, technology-backed solutions that optimize operations, improve decision-making, enhance customer experiences, and strengthen IT infrastructure.</p>
               <div className="mission-wrap">
                  <h4>Our Commitment To Innovation</h4>
                  <p>At ChittorTech, innovation is at the heart of everything we do. Our AI-driven features, advanced analytics, and cloud-based platforms enable businesses to:</p>
                  <ul>
                     <li>Manage inventory, billing, and customer relationships efficiently</li>
                     <li>Integrate online and offline sales channels seamlessly</li>
                     <li>Optimize business operations through real-time data insights</li>
                     <li>Improve IT infrastructure and software management</li>
                     <li>Deliver exceptional customer experiences</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
{/* Services Section */}
<section className="mission-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7">
            <div className="mission-wrap">
               <div className="heading-wrap">
                  <h2>Why Choose <span>chittortech Soft Solutions</span>?</h2>
               </div>
               <ul>
                  <li>Thousands satisfied customers across India</li>
                  <li> Customized solutions for retail and IT services</li>
                  <li>Serving All cities Nationwide</li>
                  <li>4.8+ Google reviews, reflecting trust and client satisfaction</li>
                  <li>Affordable, scalable solutions designed for SMEs and large enterprises</li>
                  <li>Comprehensive IT support, including cloud services, network management, software integration, and cybersecurity</li>
               </ul>
            </div>
         </div>
         <div className="col-md-5">
            <div className="soft-solutions-img">
               <img src="/assets/images/img1.png" alt="Mission Vector Image" className="mission-img" />
            </div>
         </div>
      </div>
   </div>
</section>
<section className="mission-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-12">
            <div className="mission-wrap">
               <div className="heading-wrap text-center">
                  <h2>The Meaning Behind Chittortech</h2>
                  <p>The name <strong>“Chittortech”</strong> comes from <strong>“Digital” + “Simplify”,</strong> reflecting our goal to <strong>simplify complex business and IT operations digitally. </strong> By providing <strong> efficient AI & IT Solutions, POS, and IT services,</strong> we help businesses validate, optimize, and maximize their potential.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="mission-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-7 order-md-2">
            <div className="mission-wrap">
   <div className="heading-wrap">
      <h2>Who <span>We Serve</span></h2>
   </div>
   <ul>
      <li><strong>Retail & Supermarkets:</strong> Supermarkets, Kirana stores, Grocery stores, Minimarts</li>
      <li><strong>Fashion & Apparel:</strong> Ready-Made Garments, Boutiques, Footwear, Kids Fashion & Toys</li>
      <li><strong>Food & Confectionery:</strong> Pet stores, Fruits & Vegetable Shops, Bakery Shops, Sweet Shops, Ice Cream Shops, Coffee Shops</li>
      <li><strong>Specialized Retail:</strong> Departmental Stores, Hypermarkets, Shopping Malls, Liquor Stores, Gifts & Hampers, Auto Spare Parts Shops</li>
      <li><strong>Lifestyle & Home:</strong> Home Decor & Furniture, Cosmetic Stores, Imitation Jewellery, Temples</li>
      <li><strong>Accessories & Electronics:</strong> Mobile Accessories, Watches, Camera & Optical Accessories, Kitchen & Household Products, Fashion & Luggage Accessories</li>
      <li><strong>IT Services:</strong> Cloud solutions, software integration, IT consulting, network management, cybersecurity, and technical support</li>
      <li><strong>Manufacturing Industries:</strong> Industrial Equipment Manufacturers, Component Makers, Production Units, and Assembly Plants</li>
      <li><strong>Service Industries:</strong> Repair Centers, Maintenance Providers, Cleaning Services, and Facility Management Companies</li>
      <li><strong>After-Sales Service & Warranty Fulfilment :</strong> Organizations handling product servicing, returns, replacements, and warranty tracking</li>
      <li><strong>Lead Generation :</strong> Businesses focusing on customer acquisition, telemarketing, and AI Knowledge Base-based lead management</li>
      <li><strong>Companies Scaling Through Digital Marketing:</strong> Enterprises leveraging SEO, social media, and paid campaigns to grow their digital presence</li>
      <li>Our solutions are flexible and scalable, ensuring that businesses of all sizes benefit from cutting-edge technology and operational excellence.</li>
   </ul>
</div>

         </div>
         <div className="col-md-5 order-md-1">
            <div className="soft-solutions-img">
               <img src="/assets/images/img1.png" alt="Mission Vector Image" className="mission-img" />
            </div>
         </div>
      </div>
   </div>
</section>
{/*  our values section start  */}
<section className="values-section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="values-text">
               <h2>our Commitment To <span>your Success</span></h2>
               <p>At ChittorTech, we empower businesses to focus on their core operations while we enhance efficiency, IT infrastructure, and customer experience. Our solutions help retailers and businesses:</p>
               <ul>
                  <li>Automate operations and reduce manual errors</li>
                  <li>Analyze data for better decision-making</li>
                  <li>Integrate digital platforms for seamless omnichannel management</li>
                  <li>Optimize IT systems for security, speed, and reliability</li>
                  <li>Drive growth and profitability</li>
               </ul>
               <p>thousands merchants and businesses trust ChittorTech, making us India’s most reliable all-in-one AI & IT Solutions, POS, and IT service provider.</p>
               <p><strong>Schedule a Free Demo Today</strong> and experience how ChittorTech can transform your retail and business operations.</p>
            </div>
         </div>
         <div className="col-md-6">
            <div className="values-image">
               <img src="/assets/images/value.png" alt="Team Collaboration Image" width="500" height="auto" />
            </div>
         </div>
      </div>
   </div>
</section>
{/*  our values section end  */}
{/*  cta sction end here */}
    </>
  );
}
