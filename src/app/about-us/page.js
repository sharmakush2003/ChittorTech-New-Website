"use client";
import React from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";

export default function Page() {
  return (
    <>
      <style>{`
        /* ─── Modern Design System — About Page ─── */
        body { font-family: 'Inter', 'Segoe UI', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important; }
        
        .ct-about-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #291fbc 80%, #0e7490 100%);
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
          color: #ffffff;
        }
        .ct-about-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%);
          top: -150px;
          right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }
        .ct-about-hero::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%);
          bottom: -100px;
          left: -80px;
          border-radius: 50%;
          pointer-events: none;
        }

        .ct-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #60a5fa;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 7px 18px;
          border-radius: 50px;
          margin-bottom: 22px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .ct-hero-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.16;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .ct-text-gradient-cyan {
          background: linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ct-text-gradient-blue {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-hero-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.84);
          line-height: 1.8;
          max-width: 680px;
          margin-bottom: 36px;
        }

        /* Stats Grid in Hero */
        .ct-stat-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ct-stat-card:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          border-color: rgba(56, 189, 248, 0.4);
        }
        .ct-stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1;
          margin-bottom: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ct-stat-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Section Styling */
        .ct-section {
          padding: 90px 0;
          position: relative;
        }
        .ct-sec-head {
          margin-bottom: 50px;
        }
        .ct-subhead-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 5px 14px;
          border-radius: 30px;
          margin-bottom: 14px;
        }
        .ct-sec-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          margin-bottom: 14px;
        }

        /* Glass / Elevation Cards */
        .ct-card-glass {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .ct-card-glass:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(37, 99, 235, 0.12);
          border-color: #bfdbfe;
        }

        /* Icon Badge */
        .ct-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 22px;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
        }

        /* Meaning of ChittorTech Card */
        .ct-meaning-banner {
          background: linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%);
          border-radius: 28px;
          padding: 48px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ct-meaning-banner::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Capability & Differentiator Cards */
        .ct-capability-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1.5px solid #f1f5f9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ct-capability-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.1);
        }
        .ct-cap-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        .ct-capability-card:hover .ct-cap-icon {
          background: #2563eb;
          color: #ffffff;
        }

        /* Industry Grid Pill */
        .ct-industry-card {
          background: #f8fafc;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          height: 100%;
        }
        .ct-industry-card:hover {
          background: #ffffff;
          border-color: #2563eb;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.08);
        }
        .ct-industry-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .ct-industry-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #e0f2fe;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        /* CTA Banner */
        .ct-about-cta {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 50%, #0284c7 100%);
          border-radius: 32px;
          padding: 60px 40px;
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(41, 31, 188, 0.3);
        }

        @media (max-width: 768px) {
          .ct-about-hero { padding: 80px 0 60px; }
          .ct-meaning-banner { padding: 32px 24px; }
          .ct-about-cta { padding: 40px 24px; }
        }
      `}</style>

      {/* ── Modern Hero Section ── */}
      <section className="ct-about-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="ct-hero-badge">
                <i className="fa-solid fa-sparkles"></i> Pioneering Indian AI &amp; Software Engineering
              </div>
              <h1 className="ct-hero-title">
                Architecting High-Impact <span className="ct-text-gradient-cyan">AI &amp; Tech Solutions</span> For Growing Enterprises
              </h1>
              <p className="ct-hero-desc">
                At ChittorTech, we engineer cutting-edge AI chatbots, custom fine-tuned LLMs, enterprise RAG pipelines, and high-performance software that empower businesses to scale faster, automate operations, and outpace competition.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-rocket"></i> Book Free Demo &amp; Consultation
                </button>
                <Link href="/contact-us" className="ct-btn ct-btn-ghost">
                  <i className="fa-solid fa-envelope"></i> Contact Engineering Team
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="row g-3">
                <div className="col-6">
                  <div className="ct-stat-card">
                    <div className="ct-stat-num">250+</div>
                    <div className="ct-stat-label">Projects Delivered</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ct-stat-card">
                    <div className="ct-stat-num">99.8%</div>
                    <div className="ct-stat-label">Client Satisfaction</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ct-stat-card">
                    <div className="ct-stat-num">4.8★</div>
                    <div className="ct-stat-label">Google Rating</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ct-stat-card">
                    <div className="ct-stat-num">24/7</div>
                    <div className="ct-stat-label">AI Support &amp; Ops</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story & Overview Section ── */}
      <section className="ct-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="ct-subhead-pill">
                <i className="fa-solid fa-users"></i> Who We Are
              </div>
              <h2 className="ct-sec-title">
                Building Tomorrow's <span className="ct-text-gradient-blue">Technology Today</span>
              </h2>
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem", marginBottom: "18px" }}>
                ChittorTech is an elite team of AI researchers, software architects, and full-stack product engineers dedicated to transforming how modern businesses operate. We specialize in building enterprise-grade AI chatbots, private knowledge-retrieval (RAG) systems, custom LLM fine-tuning, and robust SaaS applications.
              </p>
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem", marginBottom: "24px" }}>
                We believe that advanced AI and software engineering should not be exclusive to multi-billion dollar tech giants. We bridge this gap by delivering production-ready, scalable, and highly secure digital solutions tailored to SMEs and enterprise clients across India and globally.
              </p>
              
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>Production-Ready AI Pipelines &amp; Agentic Workflows</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>100% Data Confidentiality &amp; Private Cloud Deployments</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#dbeafe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>Dedicated Post-Launch Technical Maintenance &amp; Monitoring</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/assets/images/about-img.png"
                  alt="ChittorTech AI Innovation"
                  className="img-fluid"
                  style={{ borderRadius: "24px", boxShadow: "0 20px 50px rgba(37, 99, 235, 0.15)", border: "1px solid #e2e8f0" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meaning Behind ChittorTech Banner ── */}
      <section className="ct-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="ct-meaning-banner">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(56, 189, 248, 0.15)", border: "1px solid rgba(56, 189, 248, 0.3)", color: "#38bdf8", padding: "6px 16px", borderRadius: "30px", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                  <i className="fa-solid fa-shield-halved"></i> Our Heritage &amp; Identity
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "16px" }}>
                  The Meaning Behind <span className="ct-text-gradient-cyan">ChittorTech</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.8", fontSize: "1.05rem", margin: 0 }}>
                  The name <strong>"ChittorTech"</strong> is inspired by <strong>Chittorgarh</strong> — a legendary city of valor, resilience, and unyielding strength in Rajasthan. Combined with <strong>"Tech"</strong>, it reflects our core engineering philosophy: <strong>building technology that stands strong, operates with unwavering precision, and empowers businesses to conquer complex industry challenges.</strong>
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-center">
                <div style={{ display: "inline-flex", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", alignItems: "center", justifyContent: "center", fontSize: "3.5rem", color: "#38bdf8" }}>
                  <i className="fa-solid fa-fort-awesome"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission Dual Glass Cards ── */}
      <section className="ct-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-sec-head text-center">
            <div className="ct-subhead-pill">
              <i className="fa-solid fa-compass"></i> Guiding Principles
            </div>
            <h2 className="ct-sec-title">Our Vision &amp; Mission</h2>
            <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Driving measurable digital transformation through purpose-built software and artificial intelligence.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="ct-card-glass">
                <div className="ct-icon-box">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0f172a", marginBottom: "14px" }}>
                  Our Vision
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem" }}>
                  To be India's most trusted AI &amp; software engineering powerhouse — making intelligent automation, custom LLMs, enterprise knowledge search, and high-performance software accessible to every ambitious enterprise and SME.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="ct-card-glass">
                <div className="ct-icon-box" style={{ background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)" }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0f172a", marginBottom: "14px" }}>
                  Our Mission
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.02rem" }}>
                  To accelerate business growth by engineering custom AI solutions, multi-agent automated workflows, secure document search pipelines, and cloud-native software that eliminate manual inefficiencies and maximize ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Capabilities Grid ── */}
      <section className="ct-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="ct-sec-head text-center">
            <div className="ct-subhead-pill">
              <i className="fa-solid fa-microchip"></i> Engineering Excellence
            </div>
            <h2 className="ct-sec-title">Core Technology Capabilities</h2>
          </div>

          <div className="row g-4">
            {[
              { icon: "fa-robot", title: "Custom AI Chatbots & Voice Assistants", desc: "Autonomous 24/7 conversational agents integrated with WhatsApp, Web, CRM, and ERP systems." },
              { icon: "fa-database", title: "Enterprise RAG & Document AI", desc: "Instantly search, summarize, and extract insights across thousands of proprietary PDFs and databases." },
              { icon: "fa-brain", title: "Custom LLM Fine-Tuning", desc: "Fine-tune open-source models (Llama, Mistral, Qwen) on your private data for maximum accuracy." },
              { icon: "fa-diagram-project", title: "Agentic AI & Workflow Automation", desc: "Multi-step AI agents that execute complex business tasks, approvals, and data synchronization." },
              { icon: "fa-code", title: "Web & SaaS Development", desc: "High-performance React, Next.js, and Cloud SaaS platforms engineered for scale and speed." },
              { icon: "fa-cloud-shield", title: "Cloud Native & Data Security", desc: "Deploy on AWS, Azure, GCP, or private local servers with strict SSL and enterprise privacy compliance." },
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="ct-capability-card">
                  <div className="ct-cap-icon">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us (6 Differentiators) ── */}
      <section className="ct-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-sec-head text-center">
            <div className="ct-subhead-pill">
              <i className="fa-solid fa-award"></i> The ChittorTech Edge
            </div>
            <h2 className="ct-sec-title">Why Leading Businesses Choose Us</h2>
          </div>

          <div className="row g-4">
            {[
              { num: "01", title: "Proven Track Record", desc: "Over 250+ successful AI, SaaS, and software projects delivered across diverse industries." },
              { num: "02", title: "Deep AI Expertise", desc: "Specialized in state-of-the-art RAG architecture, LLM fine-tuning, and multi-agent workflows." },
              { num: "03", title: "100% Data Privacy", desc: "Options for completely air-gapped, on-premise, or private cloud AI server deployments." },
              { num: "04", title: "Agile & Fast Execution", desc: "Rapid prototyping to production deployment with clear milestones and transparent communication." },
              { num: "05", title: "High-ROI Engineering", desc: "Built with cost-efficiency in mind to ensure maximum ROI for startups, SMEs, and enterprises." },
              { num: "06", title: "Dedicated Support", desc: "Continuous monitoring, maintenance, and technical assistance to keep your systems running 24/7." },
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="ct-card-glass" style={{ padding: "30px 24px" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#2563eb", marginBottom: "10px", opacity: 0.85 }}>
                    {item.num}
                  </div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="ct-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="ct-sec-head text-center">
            <div className="ct-subhead-pill">
              <i className="fa-solid fa-briefcase"></i> Industry Impact
            </div>
            <h2 className="ct-sec-title">Industries We Empower</h2>
          </div>

          <div className="row g-4">
            {[
              { icon: "fa-cart-shopping", name: "E-Commerce & Retail", desc: "AI recommendation engines, automated catalog search, and smart inventory management." },
              { icon: "fa-user-nurse", name: "Healthcare & Medical", desc: "Medical document OCR, patient triage AI chatbots, and compliance automation." },
              { icon: "fa-industry", name: "Manufacturing & Logistics", desc: "Computer vision quality control, supply chain analytics, and automated ERP workflows." },
              { icon: "fa-building-columns", name: "BFSI & Fintech", desc: "AI underwriting assistants, automated document verification, and fraud detection." },
              { icon: "fa-graduation-cap", name: "Education & EdTech", desc: "Personalized AI tutoring systems, automated exam evaluation, and portal software." },
              { icon: "fa-scale-balanced", name: "Legal & Professional Services", desc: "Contract analysis AI, legal case document search, and automated report generation." },
            ].map((ind, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="ct-industry-card">
                  <div className="ct-industry-header">
                    <div className="ct-industry-icon">
                      <i className={`fa-solid ${ind.icon}`}></i>
                    </div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a", margin: 0 }}>
                      {ind.name}
                    </h4>
                  </div>
                  <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── High-Impact Call To Action ── */}
      <section className="ct-section" style={{ background: "#f8fafc", paddingBottom: "100px" }}>
        <div className="container">
          <div className="ct-about-cta">
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: "900", marginBottom: "16px" }}>
              Ready To Accelerate Your Business With AI?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "640px", margin: "0 auto 32px", lineHeight: "1.7" }}>
              Schedule a free consultation with our senior engineering team to discuss your project requirements, custom AI demo, or software architecture.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal" style={{ background: "#ffffff", color: "#1d4ed8", fontWeight: "800" }}>
                <i className="fa-solid fa-calendar-check"></i> Book Free Demo
              </button>
              <Link href="/contact-us" className="ct-btn ct-btn-ghost" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}>
                <i className="fa-solid fa-paper-plane"></i> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
