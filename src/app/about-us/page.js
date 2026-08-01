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

      {/* ── About Section ── */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="heading-wrap text-start">
                <h2>About <span>ChittorTech</span></h2>
                <h5>Empowering Businesses with Cutting-Edge AI &amp; Next-Gen IT Solutions</h5>
                <p>
                  At ChittorTech, we are a team of passionate engineers, AI researchers, and product builders dedicated to
                  transforming how businesses operate with technology. We build custom RAG pipelines, fine-tuned LLMs,
                  intelligent AI chatbots, and enterprise-grade software that delivers real, measurable impact.
                </p>
                <br />
                <p>
                  From deploying autonomous AI agents that handle customer support 24/7, to architecting private knowledge
                  search systems across thousands of enterprise documents, and engineering high-performance web and mobile
                  applications — ChittorTech is your end-to-end technology partner.
                </p>
                <br />
                <p>
                  We believe cutting-edge AI and software should be accessible to every business — not just large
                  enterprises. ChittorTech bridges this gap by delivering production-ready, scalable, and secure AI
                  solutions tailored to the specific needs of SMEs and enterprise clients alike.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/assets/images/about-img.png" alt="ChittorTech AI Solutions" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission Section ── */}
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mission-img">
                <img src="/assets/images/mission.png" alt="ChittorTech Vision" className="mission-img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-wrap">
                <h3>Vision</h3>
                <p>To be India's most trusted AI engineering company — making intelligent automation, custom LLMs, and
                  next-generation software accessible to every business, from ambitious startups to global enterprises.</p>
                <br />
                <h3>Mission</h3>
                <p>To accelerate digital transformation for businesses by delivering custom AI solutions, RAG-powered
                  knowledge systems, intelligent chatbots, and full-stack software that unlock new levels of efficiency,
                  intelligence, and growth.</p>
                <div className="mission-wrap">
                  <h4>Our Commitment To Innovation</h4>
                  <p>At ChittorTech, innovation is at the heart of everything we do. Our AI-driven services enable businesses to:</p>
                  <ul>
                    <li>Deploy custom AI chatbots and voice assistants that resolve queries instantly</li>
                    <li>Build RAG-powered search systems across internal documents and knowledge bases</li>
                    <li>Fine-tune open-source LLMs on proprietary data for maximum accuracy and security</li>
                    <li>Automate complex workflows with multi-step autonomous AI agents</li>
                    <li>Develop high-performance web, mobile, and SaaS applications</li>
                    <li>Scale with cloud-native infrastructure on AWS, GCP, and Azure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ChittorTech Section ── */}
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="mission-wrap">
                <div className="heading-wrap">
                  <h2>Why Choose <span>ChittorTech</span>?</h2>
                </div>
                <ul>
                  <li>250+ AI &amp; technology projects delivered across India</li>
                  <li>Specialized in RAG, LLM fine-tuning, and agentic AI workflows</li>
                  <li>End-to-end delivery — from discovery to production deployment</li>
                  <li>4.8+ Google reviews reflecting consistent client satisfaction</li>
                  <li>Affordable, scalable solutions for SMEs and enterprise clients</li>
                  <li>100% data privacy options including local and private cloud deployments</li>
                  <li>Dedicated post-launch technical support and monitoring</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="soft-solutions-img">
                <img src="/assets/images/img1.png" alt="Why ChittorTech" className="mission-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Origin Section ── */}
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="mission-wrap">
                <div className="heading-wrap text-center">
                  <h2>The Meaning Behind <span>ChittorTech</span></h2>
                  <p>The name <strong>"ChittorTech"</strong> is inspired by <strong>Chittorgarh</strong> — a city of valor,
                    resilience, and excellence in Rajasthan. Combined with <strong>"Tech"</strong>, it reflects our core
                    philosophy: <strong>building technology that stands strong, serves with precision, and empowers
                    businesses to rise above challenges.</strong> We bring the same spirit of excellence to every AI
                    system, software product, and digital solution we build.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve Section ── */}
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 order-md-2">
              <div className="mission-wrap">
                <div className="heading-wrap">
                  <h2>Who <span>We Serve</span></h2>
                </div>
                <ul>
                  <li><strong>E-Commerce &amp; Retail:</strong> AI-powered product search, recommendation engines, automated customer support, and fraud detection</li>
                  <li><strong>Healthcare &amp; Pharma:</strong> Medical document AI, patient data extraction, clinical decision support, and compliance automation</li>
                  <li><strong>Manufacturing &amp; Logistics:</strong> Computer vision quality control, predictive maintenance, supply chain AI, and real-time tracking</li>
                  <li><strong>BFSI &amp; Fintech:</strong> AI underwriting, document OCR, risk analytics, and regulatory compliance automation</li>
                  <li><strong>Education &amp; EdTech:</strong> AI tutoring systems, intelligent content search, student analytics, and personalized learning paths</li>
                  <li><strong>Legal &amp; Consulting:</strong> Contract AI, knowledge management, automated research tools, and document summarization</li>
                  <li><strong>Startups &amp; SMEs:</strong> Full-stack web &amp; mobile apps, SaaS development, SEO, and digital marketing services</li>
                  <li><strong>Enterprise IT:</strong> Cloud migrations, custom software integrations, API development, and cybersecurity solutions</li>
                  <li>Our solutions are flexible and scalable — built for businesses of all sizes seeking to compete with AI-powered technology.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 order-md-1">
              <div className="soft-solutions-img">
                <img src="/assets/images/img1.png" alt="Who We Serve" className="mission-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment Section ── */}
      <section className="values-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="values-text">
                <h2>Our Commitment To <span>Your Success</span></h2>
                <p>At ChittorTech, we partner with businesses to engineer technology that creates a measurable competitive
                  advantage. Our AI solutions and software products help enterprises:</p>
                <ul>
                  <li>Automate repetitive workflows and eliminate manual inefficiencies</li>
                  <li>Make faster, smarter decisions with AI-driven analytics and insights</li>
                  <li>Deploy private, secure AI systems with zero compromise on data confidentiality</li>
                  <li>Scale from prototype to production with cloud-native, enterprise-grade infrastructure</li>
                  <li>Drive measurable ROI through automation, lead generation, and customer retention</li>
                </ul>
                <p>Hundreds of businesses and professionals trust ChittorTech — making us one of India's most reliable
                  AI engineering and software development partners.</p>
                <p><strong>Schedule a Free Consultation Today</strong> and discover how ChittorTech can accelerate your
                  digital transformation.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="values-image">
                <img src="/assets/images/value.png" alt="ChittorTech Team Collaboration" width="500" height="auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
