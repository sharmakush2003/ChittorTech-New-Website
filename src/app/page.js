"use client";
import React, { useState } from "react";
import Link from "next/link";

/* ── Data ── */
const FEATURES = [
  {
    icon: "fa-robot",
    title: "AI Chatbots & Agents",
    desc: "Intelligent 24/7 conversational AI agents for automated customer support, lead qualification, and appointment booking.",
    href: "/pos",
    color: "#291fbc",
  },
  {
    icon: "fa-diagram-project",
    title: "Enterprise AI Workflows",
    desc: "Automate complex business processes, multi-step operations, and data pipelines with autonomous AI workflows.",
    href: "/ai-solutions",
    color: "#3b82f6",
  },
  {
    icon: "fa-brain",
    title: "RAG & Knowledge Base AI",
    desc: "Transform unstructured business documents, PDFs, and manuals into instantly searchable AI knowledge systems.",
    href: "/ai-knowledge",
    color: "#06b6d4",
  },
  {
    icon: "fa-microchip",
    title: "Custom LLM Fine-Tuning",
    desc: "Domain-specific AI model training on your proprietary data to deliver unprecedented accuracy and security.",
    href: "/inventory",
    color: "#8b5cf6",
  },
  {
    icon: "fa-laptop-code",
    title: "Full-Stack Web & SaaS Dev",
    desc: "Ultra-fast Next.js/React web applications, enterprise portals, and scalable cloud SaaS platforms.",
    href: "/web-development-services",
    color: "#10b981",
  },
  {
    icon: "fa-magnifying-glass-chart",
    title: "SEO & Digital Growth",
    desc: "Data-driven SEO, performance marketing, and digital strategies to dominate search results and acquire qualified B2B leads.",
    href: "/search-engine-optimization",
    color: "#f59e0b",
  },
];

const INDUSTRIES = [
  { icon: "fa-cart-shopping",   label: "Supermarkets & Retail",  href: "/supermarket" },
  { icon: "fa-shirt",           label: "Apparel & Garments",     href: "/garments" },
  { icon: "fa-hospital",        label: "Hospitals & Healthcare", href: "/hospitals" },
  { icon: "fa-pills",           label: "Pharma & Life Sciences",  href: "/pharma" },
  { icon: "fa-graduation-cap",  label: "Education & EdTech",     href: "/schools-educational-institutions" },
  { icon: "fa-industry",        label: "Smart Manufacturing",    href: "/ai-manufacturing" },
  { icon: "fa-mobile-screen",   label: "Electronics & Hardware", href: "/electronics-smartphones" },
  { icon: "fa-shoe-prints",     label: "Footwear & Fashion",     href: "/footwear-store" },
  { icon: "fa-store",           label: "Kirana & FMCG",          href: "/kirana-store" },
  { icon: "fa-truck-fast",      label: "Logistics & Supply",     href: "/logistics" },
  { icon: "fa-building",        label: "B2B Enterprise",         href: "/industrial-products" },
  { icon: "fa-book-open",       label: "Publishing & Media",     href: "/book-store" },
];

const TABS = [
  {
    key: "chatbots",
    label: "AI Chatbots",
    icon: "fa-robot",
    headline: "24/7 Intelligent Support Agents",
    desc: "Deploy custom conversational AI trained on your website and business documentation. Capture leads and resolve support queries instantly.",
    bullets: ["Multi-lingual support (English, Hindi, regional)", "Instant lead capture & AI Knowledge Base synchronization", "Omnichannel: Web, WhatsApp, Mobile Apps", "Zero maintenance & continuous AI learning"],
    href: "/pos",
  },
  {
    key: "llm",
    label: "Custom LLMs",
    icon: "fa-microchip",
    headline: "Tailored Models for Your Enterprise",
    desc: "Train open-source or proprietary LLMs specifically on your company's data, policies, and domain knowledge.",
    bullets: ["100% data privacy & local hosting options", "Fine-tuned for industry-specific terminology", "High accuracy with reduced hallucination", "Seamless API integration with internal systems"],
    href: "/inventory",
  },
  {
    key: "rag",
    label: "RAG & Search",
    icon: "fa-brain",
    headline: "Enterprise Knowledge Intelligence",
    desc: "Turn thousands of internal manuals, PDFs, and documents into an interactive AI knowledge assistant for your employees and clients.",
    bullets: ["Instant vector search across thousands of files", "Role-based access control & permission security", "Source attribution & citation links", "Supports PDFs, Docs, Databases & APIs"],
    href: "/ai-knowledge",
  },
  {
    key: "web",
    label: "Web & SaaS",
    icon: "fa-laptop-code",
    headline: "High-Performance Cloud Software",
    desc: "Custom web applications, SaaS products, and enterprise portals engineered using Next.js, Node.js, and cloud-native architecture.",
    bullets: ["Sub-second page load speeds & SEO optimized", "Scalable cloud architecture (AWS / GCP / Azure)", "Modern UI/UX with responsive mobile design", "Custom API integrations & Webhooks"],
    href: "/web-development-services",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Khandelwal",
    role: "CTO, RetailKart — Jaipur",
    initials: "RK",
    rating: 5,
    text: "ChittorTech deployed an AI support agent and RAG knowledge base for our enterprise within 3 weeks. Customer resolution time dropped by 70% and our support team efficiency doubled.",
  },
  {
    name: "Dr. Ananya Roy",
    role: "Head of Digital, MediCare Labs — Delhi",
    initials: "AR",
    rating: 5,
    text: "Their team built a custom AI workflow that automates patient document extraction and report verification. Outstanding technical execution and support.",
  },
  {
    name: "Vikram Singhania",
    role: "Founder, Apex Logistics — Udaipur",
    initials: "VS",
    rating: 5,
    text: "ChittorTech's web development and SEO services helped us achieve 3x organic B2B leads within 5 months. The team understands tech and growth deeply.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "AI Audit & Discovery", desc: "We analyze your business workflows to identify high-impact AI & IT opportunities." },
  { num: "02", title: "Architecture & Design", desc: "Our engineers design custom AI models, app architectures, and integration blueprints." },
  { num: "03", title: "Development & Training", desc: "Iterative development, LLM fine-tuning, and rigorous testing on your data." },
  { num: "04", title: "Deployment & Scaling", desc: "Seamless launch on cloud infrastructure with continuous monitoring and optimization." },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("chatbots");
  const tab = TABS.find((t) => t.key === activeTab);

  return (
    <>
      <style>{`
        .ct-hp-hero {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 55%, #0e7490 100%);
          min-height: 90vh; display: flex; align-items: center;
          padding: 110px 0 75px; position: relative; overflow: hidden;
        }
        .ct-hp-hero::before {
          content: ''; position: absolute; width: 900px; height: 900px;
          background: radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%);
          top: -300px; right: -200px; border-radius: 50%; pointer-events: none;
        }
        .ct-hp-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          color: #fff; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.5px;
          padding: 8px 18px; border-radius: 50px; margin-bottom: 24px;
        }
        .ct-hp-hero-badge .dot {
          width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.5)} }
        .ct-hp-hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 900; color: #fff; line-height: 1.12; margin-bottom: 20px;
        }
        .ct-hp-hero h1 span { color: #06b6d4; }
        .ct-hp-hero-sub {
          font-size: 1.1rem; color: rgba(255,255,255,0.78);
          line-height: 1.75; max-width: 540px; margin-bottom: 36px;
        }
        .ct-hp-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .ct-hp-hero-img {
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.45);
          transform: perspective(1200px) rotateY(-8deg) rotateX(4deg);
          transition: transform 0.5s ease; position: relative; z-index: 2;
        }
        .ct-hp-hero-img:hover { transform: perspective(1200px) rotateY(-3deg) rotateX(2deg); }
        .ct-hp-hero-img img { width: 100%; display: block; }
        .ct-hp-hero-pills { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }
        .ct-hp-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          color: #fff; font-size: 0.8rem; font-weight: 600; padding: 6px 14px; border-radius: 50px;
        }
        .ct-hp-pill i { color: #f59e0b; }

        .ct-stats-bar { background: #fff; border-bottom: 1px solid #e2e8f0; }
        .ct-stats-bar-inner { display: grid; grid-template-columns: repeat(4,1fr); padding: 0; }
        .ct-stat-item { padding: 32px 20px; text-align: center; border-right: 1px solid #f1f5f9; }
        .ct-stat-item:last-child { border-right: none; }
        .ct-stat-num {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2.4rem; font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-stat-lbl { font-size: 0.85rem; color: #64748b; font-weight: 500; margin-top: 6px; }

        .ct-section-head { text-align: center; margin-bottom: 60px; }
        .ct-section-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(41,31,188,0.08); border: 1px solid rgba(41,31,188,0.15);
          color: #291fbc; font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          padding: 6px 14px; border-radius: 50px; margin-bottom: 14px;
        }
        .ct-section-h2 {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800; color: #1e1b4b; margin-bottom: 14px; line-height: 1.2;
        }
        .ct-section-p { font-size: 1.05rem; color: #64748b; max-width: 600px; margin: 0 auto; }

        .ct-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ct-feat-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 18px;
          padding: 32px; transition: all 0.3s ease; text-decoration: none; color: inherit; display: block;
        }
        .ct-feat-card:hover {
          transform: translateY(-8px); box-shadow: 0 24px 60px rgba(41,31,188,0.14);
          border-color: rgba(41,31,188,0.25); color: inherit; text-decoration: none;
        }
        .ct-feat-icon {
          width: 58px; height: 58px; border-radius: 14px; display: flex;
          align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 20px;
        }
        .ct-feat-h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.1rem; font-weight: 700; color: #1e1b4b; margin-bottom: 10px; }
        .ct-feat-p { font-size: 0.9rem; color: #64748b; line-height: 1.7; margin: 0; }
        .ct-feat-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: #291fbc; margin-top: 16px; }

        .ct-tabs-wrap { display: flex; gap: 8px; background: #f1f5f9; border-radius: 14px; padding: 6px; flex-wrap: wrap; margin-bottom: 40px; }
        .ct-tab-pill {
          display: flex; align-items: center; gap: 8px; padding: 11px 20px; border-radius: 10px; border: none;
          background: transparent; font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 600; color: #64748b;
          cursor: pointer; transition: all 0.25s ease; white-space: nowrap;
        }
        .ct-tab-pill.active { background: #fff; color: #291fbc; box-shadow: 0 2px 12px rgba(41,31,188,0.12); }
        .ct-tab-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .ct-tab-headline { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2rem; font-weight: 800; color: #1e1b4b; margin-bottom: 16px; }
        .ct-tab-desc { font-size: 1rem; color: #64748b; line-height: 1.75; margin-bottom: 24px; }
        .ct-tab-bullets { list-style: none; padding: 0; margin: 0 0 28px; }
        .ct-tab-bullets li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 500; color: #374151; padding: 8px 0; border-bottom: 1px solid #f1f5f9; }
        .ct-tab-bullets li::before {
          content: '✓'; width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #291fbc, #06b6d4); color: #fff;
          font-size: 0.7rem; font-weight: 900; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ct-tab-visual {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%);
          border-radius: 20px; padding: 40px; display: flex; align-items: center; justify-content: center;
          min-height: 320px; position: relative; overflow: hidden;
        }
        .ct-tab-icon-big { font-size: 6rem; color: rgba(255,255,255,0.15); position: absolute; bottom: 20px; right: 30px; }
        .ct-tab-feature-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; position: relative; z-index: 2; }
        .ct-tab-mini-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 16px; text-align: center; }
        .ct-tab-mini-card .val { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.6rem; font-weight: 800; color: #fff; }
        .ct-tab-mini-card .lbl { font-size: 0.72rem; color: rgba(255,255,255,0.65); font-weight: 500; margin-top: 4px; }

        .ct-ind-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .ct-ind-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px 16px;
          text-align: center; text-decoration: none; color: inherit; display: block; transition: all 0.25s ease;
        }
        .ct-ind-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(41,31,188,0.12); border-color: #291fbc; color: inherit; text-decoration: none; }
        .ct-ind-icon {
          width: 52px; height: 52px; border-radius: 12px; background: rgba(41,31,188,0.08); color: #291fbc;
          display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin: 0 auto 12px; transition: all 0.25s;
        }
        .ct-ind-card:hover .ct-ind-icon { background: #291fbc; color: #fff; }
        .ct-ind-label { font-size: 0.85rem; font-weight: 600; color: #374151; }

        .ct-process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; position: relative; }
        .ct-proc-card { text-align: center; position: relative; z-index: 1; }
        .ct-proc-num {
          width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 18px;
          background: linear-gradient(135deg, #291fbc, #3b82f6); color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.2rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(41,31,188,0.3);
        }
        .ct-proc-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1rem; font-weight: 700; color: #1e1b4b; margin-bottom: 10px; }
        .ct-proc-desc { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

        .ct-testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .ct-testi-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 32px; display: flex; flex-direction: column; transition: all 0.3s ease; }
        .ct-testi-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(41,31,188,0.1); border-color: rgba(41,31,188,0.2); }
        .ct-stars { color: #f59e0b; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 14px; }
        .ct-testi-text { font-size: 0.95rem; color: #64748b; line-height: 1.8; flex: 1; margin-bottom: 20px; font-style: italic; }
        .ct-testi-author { display: flex; align-items: center; gap: 12px; }
        .ct-testi-avatar {
          width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff; font-weight: 800; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ct-testi-name { font-weight: 700; font-size: 0.9rem; color: #1e1b4b; }
        .ct-testi-role { font-size: 0.78rem; color: #94a3b8; }

        .ct-cta-banner {
          background: linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%);
          border-radius: 24px; padding: 70px 60px; text-align: center; position: relative; overflow: hidden;
        }
        .ct-cta-banner h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(1.8rem,3.5vw,2.8rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
        .ct-cta-banner p { font-size: 1.05rem; color: rgba(255,255,255,0.75); margin-bottom: 32px; }
        .ct-cta-banner-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        .ct-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .ct-why-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 36px 28px; transition: all 0.3s ease; }
        .ct-why-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(41,31,188,0.1); border-color: rgba(41,31,188,0.2); }
        .ct-why-icon {
          width: 56px; height: 56px; border-radius: 14px; background: linear-gradient(135deg, rgba(41,31,188,0.1), rgba(6,182,212,0.1));
          border: 1px solid rgba(41,31,188,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #291fbc; margin-bottom: 20px;
        }
        .ct-why-h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1e1b4b; margin-bottom: 10px; }
        .ct-why-p { font-size: 0.9rem; color: #64748b; line-height: 1.7; margin: 0; }

        .ct-bg-white { background: #fff; }
        .ct-bg-slate { background: #f8fafc; }

        @media (max-width: 1023px) {
          .ct-feat-grid, .ct-ind-grid, .ct-process-grid, .ct-testi-grid, .ct-why-grid { grid-template-columns: repeat(2,1fr); }
          .ct-stats-bar-inner { grid-template-columns: repeat(2,1fr); }
          .ct-tab-content { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 640px) {
          .ct-feat-grid, .ct-ind-grid, .ct-process-grid, .ct-testi-grid, .ct-why-grid { grid-template-columns: 1fr; }
          .ct-hp-hero { padding: 90px 0 50px; }
          .ct-cta-banner { padding: 48px 24px; }
        }
      `}</style>

      {/* ── 1. HERO ── */}
      <section className="ct-hp-hero">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="ct-hp-hero-badge">
                <span className="dot"></span>
                Next-Gen Enterprise AI & Technology Partner
              </div>
              <h1>
                Build & Scale With<br />
                <span>Custom AI & IT Software.</span>
              </h1>
              <p className="ct-hp-hero-sub">
                From autonomous AI chatbots, RAG knowledge search systems, and custom LLMs to high-performance web apps and SEO — ChittorTech delivers technology that drives exponential business growth.
              </p>
              <div className="ct-hp-hero-pills">
                <span className="ct-hp-pill"><i className="fa-solid fa-robot"></i> AI Agents</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-brain"></i> RAG & LLMs</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-code"></i> Next.js / SaaS</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-chart-line"></i> SEO Growth</span>
              </div>
              <div className="ct-hp-hero-ctas">
                <button className="ct-btn ct-btn-primary ct-btn-lg" data-bs-toggle="modal" data-bs-target="#trialModal">
                  <i className="fa-solid fa-calendar-check"></i> Request AI Consultation
                </button>
                <Link href="/web-development-services" className="ct-btn ct-btn-ghost ct-btn-lg">
                  Explore Services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ct-hp-hero-img">
                <img src="/assets/images/ct-dashboard-hero.png" alt="ChittorTech AI Analytics & Automation Dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="ct-stats-bar">
        <div className="container">
          <div className="ct-stats-bar-inner">
            {[
              { val: "250+",  label: "AI & Tech Projects Delivered" },
              { val: "99.4%", label: "Client Satisfaction" },
              { val: "70%",   label: "Avg. Support Automation" },
              { val: "24/7",  label: "Dedicated Tech Support" },
            ].map((s) => (
              <div key={s.label} className="ct-stat-item">
                <div className="ct-stat-num">{s.val}</div>
                <div className="ct-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CLIENT LOGOS ── */}
      <section className="ct-bg-white" style={{ padding: "40px 0", borderBottom: "1px solid #f1f5f9" }}>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#94a3b8", marginBottom: "24px" }}>
            Empowering innovative enterprises and brands across India
          </p>
          <div style={{ overflow: "hidden", position: "relative" }}>
            <div className="ct-marquee-track">
              {[1,4,5,6,7,8,9,10,11,12,13,1,4,5,6,7,8,9,10,11,12,13].map((n, i) => (
                <img
                  key={i}
                  src={`/assets/images/c${n}.jpg`}
                  alt={`Client ${n}`}
                  style={{ height: "44px", width: "auto", objectFit: "contain", filter: "grayscale(100%) opacity(0.55)", flexShrink: 0, transition: "filter 0.25s" }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "none")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(100%) opacity(0.55)")}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES GRID ── */}
      <section className="ct-bg-slate" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-sparkles"></i> Core Capabilities</span>
            <h2 className="ct-section-h2">Cutting-Edge AI & IT Services</h2>
            <p className="ct-section-p">
              From intelligent AI workflows to full-stack web engineering — build your digital advantage with ChittorTech.
            </p>
          </div>
          <div className="ct-feat-grid">
            {FEATURES.map((f) => (
              <Link href={f.href} key={f.href} className="ct-feat-card">
                <div className="ct-feat-icon" style={{ background: `${f.color}18`, color: f.color, border: `1px solid ${f.color}22` }}>
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <div className="ct-feat-h3">{f.title}</div>
                <p className="ct-feat-p">{f.desc}</p>
                <span className="ct-feat-link">Explore solutions <i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT TABS ── */}
      <section className="ct-bg-white" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-layer-group"></i> Technology Stack</span>
            <h2 className="ct-section-h2">Engineered for Maximum Impact</h2>
            <p className="ct-section-p">
              Deep dive into our primary AI & Software capabilities.
            </p>
          </div>
          <div className="ct-tabs-wrap">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`ct-tab-pill ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                <i className={`fa-solid ${t.icon}`}></i> {t.label}
              </button>
            ))}
          </div>
          {tab && (
            <div className="ct-tab-content">
              <div>
                <h3 className="ct-tab-headline">{tab.headline}</h3>
                <p className="ct-tab-desc">{tab.desc}</p>
                <ul className="ct-tab-bullets">
                  {tab.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link href={tab.href} className="ct-btn ct-btn-primary">
                  Learn More About {tab.label} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="ct-tab-visual">
                <i className={`fa-solid ${tab.icon} ct-tab-icon-big`}></i>
                <div className="ct-tab-feature-cards">
                  {[
                    { val: "70%", lbl: "Cost Reduction" },
                    { val: "10x", lbl: "Faster Output" },
                    { val: "99.9%", lbl: "Data Accuracy" },
                    { val: "∞", lbl: "Cloud Scale" },
                  ].map((c) => (
                    <div key={c.lbl} className="ct-tab-mini-card">
                      <div className="val">{c.val}</div>
                      <div className="lbl">{c.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 6. INDUSTRIES ── */}
      <section className="ct-bg-slate" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-building"></i> Industries</span>
            <h2 className="ct-section-h2">Tailored AI Solutions for Every Industry</h2>
            <p className="ct-section-p">
              Domain-specific AI automation and IT software built for your business vertical.
            </p>
          </div>
          <div className="ct-ind-grid">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.href} href={ind.href} className="ct-ind-card">
                <div className="ct-ind-icon"><i className={`fa-solid ${ind.icon}`}></i></div>
                <div className="ct-ind-label">{ind.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHITTORTECH ── */}
      <section className="ct-bg-white" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-star"></i> Why ChittorTech</span>
            <h2 className="ct-section-h2">Why Forward-Thinking Companies Choose ChittorTech</h2>
            <p className="ct-section-p">
              We combine deep technical expertise with agile delivery to build transformative software.
            </p>
          </div>
          <div className="ct-why-grid">
            {[
              { icon: "fa-robot",         title: "Cutting-Edge AI Expertise",   desc: "We build with state-of-the-art LLMs, vector search, RAG architectures, and autonomous AI agents." },
              { icon: "fa-shield-halved", title: "Enterprise-Grade Security",   desc: "100% data confidentiality, encrypted APIs, and option for local or private cloud deployments." },
              { icon: "fa-bolt",          title: "Rapid Agile Engineering",     desc: "From concept to working AI prototype in as little as 2 weeks — fast-track your digital transformation." },
              { icon: "fa-headset",       title: "Dedicated Technical Support", desc: "Direct developer communication, 24/7 monitoring, and ongoing optimization for your systems." },
              { icon: "fa-cloud",         title: "Cloud-Native & Scalable",     desc: "Architected on AWS, GCP, and Vercel to handle millions of requests without slowdowns." },
              { icon: "fa-chart-line",    title: "Measurable ROI & Growth",     desc: "Our AI solutions are designed to deliver clear financial returns through automation and lead growth." },
            ].map((w) => (
              <div key={w.title} className="ct-why-card">
                <div className="ct-why-icon"><i className={`fa-solid ${w.icon}`}></i></div>
                <div className="ct-why-h3">{w.title}</div>
                <p className="ct-why-p">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PROCESS ── */}
      <section className="ct-bg-slate" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-map-signs"></i> Execution Methodology</span>
            <h2 className="ct-section-h2">Our 4-Step Engineering Process</h2>
            <p className="ct-section-p">
              A structured approach from initial AI discovery to production deployment.
            </p>
          </div>
          <div className="ct-process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="ct-proc-card">
                <div className="ct-proc-num">{s.num}</div>
                <div className="ct-proc-title">{s.title}</div>
                <p className="ct-proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section className="ct-bg-white" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-quote-left"></i> Client Success</span>
            <h2 className="ct-section-h2">What Enterprise Leaders Say</h2>
            <p className="ct-section-p">
              Real results from companies transforming their business with ChittorTech.
            </p>
          </div>
          <div className="ct-testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="ct-testi-card">
                <div className="ct-stars">{"★".repeat(t.rating)}</div>
                <p className="ct-testi-text">"{t.text}"</p>
                <div className="ct-testi-author">
                  <div className="ct-testi-avatar">{t.initials}</div>
                  <div>
                    <div className="ct-testi-name">{t.name}</div>
                    <div className="ct-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section style={{ padding: "80px 0 100px", background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-cta-banner">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Schedule a 30-minute technical consultation with ChittorTech's AI engineers.</p>
            <div className="ct-cta-banner-btns">
              <button
                className="ct-btn ct-btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                style={{ background: "#fff", color: "#291fbc", fontWeight: 700 }}
              >
                <i className="fa-solid fa-calendar-check"></i> Book Technical Consultation
              </button>
              <Link href="/contact-us" className="ct-btn ct-btn-ghost ct-btn-lg">
                <i className="fa-solid fa-envelope"></i> Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
