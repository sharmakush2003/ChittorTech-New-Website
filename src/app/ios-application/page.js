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
                <i className={`fa-solid fa-apple`}></i> iOS Dev
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                iOS App Development Services
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Premium iPhone and iPad apps built with Swift and React Native.
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
                <i className={`fa-solid fa-apple`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}
       
    {/* header */}

      {/*  Best SEO Services section start here */}
      <section className="seo-services-sec">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-md-6">
                     <div className="seo-services">
                        <div className="heading-wrap text-start">
                          <h1>Best iOS App Development in India –  <span>ChittorTech</span> </h1>
                          <p>In today’s fast-paced digital world, businesses need cost-effective, scalable, and secure iOS applications to stay ahead of the competition. At ChittorTech, we specialize in custom iOS App Development in India for iPhone, iPad, Apple Watch, and Apple TV. With 10+ years of expertise, our certified iOS developers build high-performing applications using Swift, Objective-C, and modern frameworks like ARKit, CoreML, and HealthKit to engage a global iOS audience.</p>
                          <p>Our mission is simple – to deliver iOS apps that delight users, boost ROI, and strengthen your brand presence. Whether you’re a startup, SMB, or enterprise, our team ensures 100% App Store approval, flawless UI/UX, and enterprise-grade security compliance (SOC 2, HIPAA, PCI-DSS, GDPR).</p>
                       </div>
                    </div>
                   </div>
                   <div className="col-md-6">
                        <div className="seo-services-img">
                           <figure>
                               <img src="/assets/images/img189.jpg" alt="Best SEO Services" />
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      {/*  Best SEO Services section end here */}

      {/*   Our Complete SEO Service Suite */}
      <section className="complete-seo-service"> 
         <div className="container my-5">
            <div className="heading-wrap text-center">
                 <h2> iOS App Development Services at   <span>ChittorTech</span> </h2>
                 <p>We provide end-to-end iOS software development solutions designed to meet diverse business needs:</p>
              </div>
             <div className="row">
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="0">
                   <figure> <img src="/assets/images/os1.png" /> </figure>
                   <h4> Custom iOS App Development</h4>
                   <p>Tailor-made iOS apps built to match your business goals, offering secure backend development, enterprise mobility solutions, and personalized features.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="100">
                   <figure> <img src="/assets/images/os2.png" /> </figure>
                   <h4> iOS Application UI/UX Design</h4>
                   <p>We design pixel-perfect interfaces following Apple’s Human Interface Guidelines (HIG). Our interactive and Retina-optimized designs improve customer satisfaction and engagement.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="200">
                   <figure> <img src="/assets/images/os3.png" /> </figure>
                   <h4>Native iOS App Development</h4>
                   <p>Apps built with Swift & Objective-C for unmatched performance, low battery consumption, and seamless integration across iPhones, iPads, and Apple Watches.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="300">
                   <figure> <img src="/assets/images/os4.png" /> </figure>
                   <h4> Hybrid iOS App Development</h4>
                   <p>Cross-platform apps using Flutter & React Native, reducing development time and cost while ensuring consistent performance across iOS and Android devices.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="400">
                   <figure> <img src="/assets/images/os5.png" /> </figure>
                   <h4> AR/VR iOS App Development</h4>
                   <p>Immersive apps using ARKit & VR frameworks for gaming, retail, healthcare, and learning, delivering next-level user experiences.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/os6.png" /> </figure>
                   <h4>AI/ML-Powered iOS Apps</h4>
                   <p>Integrating machine learning, predictive analytics, chatbots, and voice assistants to create smarter, personalized iPhone apps.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/os7.png" /> </figure>
                   <h4>iPhone Game Development</h4>
                   <p>High-performance iOS games built with Unity & Unreal Engine, featuring multiplayer capabilities, AR/VR integrations, and in-game monetization.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/os8.png" /> </figure>
                   <h4>iOS App Porting & Migration</h4>
                   <p>Seamless migration from Android or older iOS versions to the latest iOS 18, ensuring compatibility, stability, and better performance.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/os9.png" /> </figure>
                   <h4>Cloud-Based iOS Solutions</h4>
                   <p>Secure cloud-integrated iOS applications with data backup, synchronization, and real-time access across devices.</p>
                 </div>
               </div>
               <div className="col-md-6 col-lg-4 mb-4">
                 <div className="card service-box text-center p-4 animate-in" data-delay="500">
                   <figure> <img src="/assets/images/os10.png" /> </figure>
                   <h4> Support & Maintenance</h4>
                   <p>Continuous monitoring, bug fixes, updates, and performance optimization for long-term customer satisfaction.</p>
                 </div>
               </div>
             </div>
           </div>
      </section>
      {/*   Our Complete SEO Service Suite */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img191.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Benefits of iOS App Development in India with   <span>ChittorTech</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Higher ROI –</strong> iOS apps drive 50% more revenue through in-app purchases.</li>
                              <li> <strong>Unmatched Security –</strong> Zero data breaches with compliance to GDPR, SOC 2, HIPAA.</li>
                              <li> <strong>Faster Time-to-Market –</strong> Agile methodology ensures 2x faster delivery cycles.</li>
                              <li> <strong>Seamless User Experience –</strong> Pixel-perfect UI/UX design boosts retention by 40%.</li>
                              <li> <strong>Global Reach –</strong> Access to Apple’s loyal and premium user base worldwide.</li>
                              <li> <strong>App Store Success –</strong> 99.5% approval rate with Apple’s strict guidelines.</li>
                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> How ChittorTech Ensures    <span>Customer Satisfaction</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Client-Centric Approach – </strong> We align every feature with your business goals.</li>
                              <li> <strong>Transparency –</strong> Regular updates, milestone reviews, and clear communication.</li>
                              <li> <strong>Scalability –</strong> Apps designed to grow with your business needs.</li>
                              <li> <strong>Post-Launch Care –</strong> Free support for 3 months + ongoing maintenance.</li>
                              <li> <strong>Proven Expertise –</strong> 500+ successful projects across eCommerce, healthcare, education, fintech, and logistics.</li>
                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img190.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="heading-wrap text-center">
                          <h2> Industries We Serve with iOS   <span>Mobile App Solutions</span> </h2>
                       </div>
                       <div className="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="/assets/images/le1.png" alt="" /> </figure>
                                <h3>Healthcare – Telemedicine, patient records, fitness tracking</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/le2.png" alt="" /> </figure>
                                <h3>Education – E-learning, AR-based training apps</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/le3.png" alt="" /> </figure>
                                <h3>Fintech – Secure mobile banking & wallet apps</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/le4.png" alt="" /> </figure>
                                <h3>Retail & eCommerce – Shopping & AR product try-on apps</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/le5.png" alt="" /> </figure>
                                <h3>Travel & Logistics – Booking & real-time tracking solutions</h3>
                             </li>
                             <li>
                                <figure> <img src="/assets/images/le5.png" alt="" /> </figure>
                                <h3>Entertainment & Gaming – Streaming, AR/VR, and multiplayer games</h3>
                             </li>
                          </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img192.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Our iOS App Development in    <span>India Process</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul>
                              <li> <strong>Planning & Strategy –</strong> Define goals, market research, and MVP planning.</li>
                              <li> <strong>UI/UX Design & Prototyping –</strong> Wireframes, mockups, and user journey mapping.</li>
                              <li> <strong>Agile Development –</strong> Sprint-based coding using Swift, Objective-C, Flutter.</li>
                              <li> <strong>Testing & Deployment –</strong> Unit, regression, and beta testing for quality assurance.</li>
                              <li> <strong>Post-Launch Support –</strong> Optimization, analytics, and regular updates.</li>

                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}


      {/*  Why Choose Our SEO Services? */}
      <section className="why-choose-sec"> 
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6">
                      <div className="heading-wrap text-start">
                          <h2> Why Choose ChittorTech for  <span>iOS App Development in India?</span> </h2>
                       </div>
                       <div className="expertise-wrap">
                           <ul className="benefit-list">
                              <li>10+ Years of Experience in iOS application development</li>
                              <li>Apple-Certified Developers with proven expertise</li>
                              <li>30% Lower Development Costs compared to global competitors</li>
                              <li>95% On-Time Delivery record</li>
                              <li>98% Client Satisfaction Rate</li>

                           </ul>
                       </div>
                  </div>
                  <div className="col-md-6">
                       <div className="expertise-img">
                           <figure>
                              <img src="/assets/images/img193.jpg" alt="Local & National SEO Expertise" />
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      {/*  Why Choose Our SEO Services? */}



      <section className="cta-section">
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <div className="cta-box">
                        <div className="phone-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <p>With ChittorTech, you don’t just get an app – you get a strategic partner dedicated to turning your iOS app idea into a world-class mobile solution.</p>
                        <button  onClick={() => { window.location.href = "/contact-us"; }}   className="cta-button">Get Started</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      
      {/*  faq template section */}
    <section className="faq-template">
        <div className="container">
            <div className="heading-wrap text-center">
                <h2> FAQs – iOS App Development in  <span>India</span> </h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="faq-section">
                        <div className="accordion" id="faqAccordion">
                            
                            {/* FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is the cost of iOS app development in India?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        The cost of iOS app development in India depends on app complexity, features, and design requirements. Our team at ChittorTech provides cost-effective solutions without compromising on quality.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How long does it take to develop an iPhone app in India?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Development timelines vary based on project scope. Simple apps may take 6–8 weeks, while complex enterprise solutions can take 3–6 months. Agile methodologies ensure faster delivery and on-time completion.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Should I choose native or hybrid iOS app development?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        If you need high performance and Apple device optimization, choose native iOS app development. For cross-platform compatibility and lower cost, hybrid development with Flutter or React Native is ideal.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do you ensure my iOS app gets approved on the App Store?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        At ChittorTech, we follow Apple’s Human Interface Guidelines (HIG) strictly. Our apps maintain UI/UX compliance, security, and functionality, achieving a 99.5% App Store approval rate.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Can you build AR/VR or AI-powered iOS applications?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes! Our team develops AR/VR iOS apps using ARKit and AI/ML-powered apps with predictive analytics, NLP, and computer vision for enhanced user experiences.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Do you provide post-launch support and app maintenance?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Absolutely. We offer continuous updates, bug fixes, feature upgrades, and performance optimization to ensure your iOS app remains reliable and up-to-date.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Which industries do you serve for iOS app development in India?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We provide tailored iOS app solutions for healthcare, fintech, education, e-commerce, logistics, entertainment, and more, ensuring industry-specific functionality and compliance.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Can you migrate my existing Android app to iOS?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, we provide smooth app porting and migration services, ensuring your app works seamlessly on iOS with full performance, data integrity, and enhanced UX.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        How do you ensure the security of iOS applications?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We follow strict data protection and compliance standards including GDPR, HIPAA, SOC 2, and PCI-DSS, ensuring secure data handling and encryption in all iOS apps.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Why should I choose ChittorTech for iOS app development in India?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We combine 10+ years of expertise, 50+ Apple-certified developers, Agile development, cost-effective solutions, and a proven track record of 500+ successful projects to deliver high-quality, scalable, and secure iOS apps tailored to your business needs.
                                    </div>
                                </div>
                            </div>

                        </div>{/* end accordion */}
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* faq template section */}

      {/*  footer */}
    </>
  );
}
