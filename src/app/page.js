"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

/* ── 2 Rows of Tech Stack Items (44 Total Technologies) ── */
const TECH_ROW_1 = [
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "TypeScript", icon: "fa-brands fa-js", color: "#3178c6" },
  { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "Next.js", icon: "fa-solid fa-layer-group", color: "#0f172a" },
  { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#4fc08d" },
  { name: "Angular", icon: "fa-brands fa-angular", color: "#dd0031" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
  { name: "Java", icon: "fa-brands fa-java", color: "#007396" },
  { name: "Kotlin", icon: "fa-solid fa-code", color: "#7f52ff" },
  { name: "Android SDK", icon: "fa-brands fa-android", color: "#3ddc84" },
  { name: "Swift / iOS", icon: "fa-brands fa-swift", color: "#f05138" },
  { name: "Flutter", icon: "fa-solid fa-mobile-screen-button", color: "#02569b" },
  { name: "React Native", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "Expo Go", icon: "fa-solid fa-mobile-screen", color: "#0f172a" },
  { name: "PHP", icon: "fa-brands fa-php", color: "#777bb4" },
  { name: "Laravel", icon: "fa-brands fa-laravel", color: "#ff2d20" },
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47a248" },
  { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#4169e1" },
  { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f" },
];

const TECH_ROW_2 = [
  { name: "Redis", icon: "fa-solid fa-server", color: "#dc382d" },
  { name: "Pinecone Vector DB", icon: "fa-solid fa-brain", color: "#06b6d4" },
  { name: "OpenAI GPT-4", icon: "fa-solid fa-robot", color: "#10a37f" },
  { name: "TensorFlow", icon: "fa-solid fa-diagram-project", color: "#ff6f00" },
  { name: "PyTorch", icon: "fa-solid fa-fire", color: "#ee4c2c" },
  { name: "GraphQL", icon: "fa-solid fa-diagram-next", color: "#e10098" },
  { name: "Socket.IO", icon: "fa-solid fa-bolt", color: "#0f172a" },
  { name: "AWS Cloud", icon: "fa-brands fa-aws", color: "#ff9900" },
  { name: "Google Cloud", icon: "fa-brands fa-google-cloud", color: "#4285f4" },
  { name: "Microsoft Azure", icon: "fa-brands fa-microsoft", color: "#0089d6" },
  { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ed" },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", color: "#326ce5" },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#181717" },
  { name: "GitLab", icon: "fa-brands fa-gitlab", color: "#fc6d26" },
  { name: "VS Code", icon: "fa-solid fa-laptop-code", color: "#007acc" },
  { name: "Vercel", icon: "fa-solid fa-play", color: "#0f172a" },
  { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3", color: "#38bdf8" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952b3" },
  { name: "Lottie Animations", icon: "fa-solid fa-film", color: "#00dab6" },
  { name: "Postman", icon: "fa-solid fa-paper-plane", color: "#ff6c37" },
  { name: "FastAPI", icon: "fa-solid fa-bolt", color: "#059669" },
];

const FEATURES = [
  {
    icon: "fa-robot",
    title: "AI Chatbots & Support Agents",
    desc: "Intelligent 24/7 conversational AI agents for automated customer support, lead qualification, and instant booking.",
    href: "/pos",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.06)",
    borderColor: "rgba(139, 92, 246, 0.18)",
  },
  {
    icon: "fa-diagram-project",
    title: "Autonomous AI Workflows",
    desc: "Automate complex enterprise business processes, multi-step operations, and data pipelines with self-learning AI.",
    href: "/ai-solutions",
    color: "#4f46e5",
    bgColor: "rgba(79, 70, 229, 0.06)",
    borderColor: "rgba(79, 70, 229, 0.18)",
  },
  {
    icon: "fa-brain",
    title: "RAG & Document Intelligence",
    desc: "Transform unstructured business documents, PDFs, and internal manuals into instantly searchable vector AI systems.",
    href: "/ai-knowledge",
    color: "#06b6d4",
    bgColor: "rgba(6, 182, 212, 0.06)",
    borderColor: "rgba(6, 182, 212, 0.18)",
  },
  {
    icon: "fa-microchip",
    title: "Custom LLM Fine-Tuning",
    desc: "Domain-specific AI model training on your proprietary enterprise data for maximum precision and strict privacy.",
    href: "/inventory",
    color: "#d946ef",
    bgColor: "rgba(217, 70, 239, 0.06)",
    borderColor: "rgba(217, 70, 239, 0.18)",
  },
  {
    icon: "fa-laptop-code",
    title: "Full-Stack Web & SaaS Dev",
    desc: "Ultra-fast Next.js/React web applications, enterprise portals, and scalable cloud SaaS infrastructure.",
    href: "/web-development-services",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.06)",
    borderColor: "rgba(16, 185, 129, 0.18)",
  },
  {
    icon: "fa-magnifying-glass-chart",
    title: "SEO & Performance Growth",
    desc: "Data-driven SEO strategies, technical audits, and performance marketing to dominate search results and acquire qualified B2B leads.",
    href: "/search-engine-optimization",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.06)",
    borderColor: "rgba(245, 158, 11, 0.18)",
  },
];

const INDUSTRIES = [
  { icon: "fa-cart-shopping",   label: "Supermarkets & Retail",  href: "/supermarket", color: "#8b5cf6" },
  { icon: "fa-shirt",           label: "Apparel & Garments",     href: "/garments", color: "#ec4899" },
  { icon: "fa-hospital",        label: "Hospitals & Healthcare", href: "/hospitals", color: "#06b6d4" },
  { icon: "fa-pills",           label: "Pharma & Life Sciences",  href: "/pharma", color: "#10b981" },
  { icon: "fa-graduation-cap",  label: "Education & EdTech",     href: "/schools-educational-institutions", color: "#f59e0b" },
  { icon: "fa-industry",        label: "Smart Manufacturing",    href: "/ai-manufacturing", color: "#6366f1" },
  { icon: "fa-mobile-screen",   label: "Electronics & Hardware", href: "/electronics-smartphones", color: "#3b82f6" },
  { icon: "fa-shoe-prints",     label: "Footwear & Fashion",     href: "/footwear-store", color: "#14b8a6" },
  { icon: "fa-store",           label: "Kirana & FMCG",          href: "/kirana-store", color: "#84cc16" },
  { icon: "fa-truck-fast",      label: "Logistics & Supply",     href: "/logistics", color: "#f97316" },
  { icon: "fa-building",        label: "B2B Enterprise",         href: "/industrial-products", color: "#a855f7" },
  { icon: "fa-book-open",       label: "Publishing & Media",     href: "/book-store", color: "#0284c7" },
];

/* ── Dynamic Technology Stack Tabs Data ── */
const TABS = [
  {
    key: "chatbots",
    label: "AI Support Agents",
    icon: "fa-robot",
    headline: "24/7 Intelligent Support & Conversational Agents",
    desc: "Deploy custom conversational AI trained on your website, products, and internal knowledge base. Answer queries, capture leads, and resolve support tickets autonomously.",
    bullets: [
      "Multi-lingual support (English, Hindi, regional dialects)",
      "Instant System & AI Knowledge Base synchronization",
      "Omnichannel deployment: Web, WhatsApp & Mobile Apps",
      "Autonomous workflow triggers & zero maintenance"
    ],
    href: "/pos",
    accent: "#8b5cf6",
    metrics: [
      { val: "70%", lbl: "Ticket Deflection" },
      { val: "< 2s", lbl: "Response Latency" },
      { val: "99.4%", lbl: "Accuracy Score" },
      { val: "24/7", lbl: "Uptime Active" }
    ],
    previewTitle: "AI Support Engine Active",
    previewSubtitle: "Conversational Agent • Online"
  },
  {
    key: "llm",
    label: "Custom LLMs",
    icon: "fa-microchip",
    headline: "Fine-Tuned Enterprise AI Models",
    desc: "Train open-source or proprietary LLMs specifically on your company's proprietary data, operational guidelines, and domain terminology.",
    bullets: [
      "100% data privacy & local/private cloud hosting",
      "Specialized fine-tuning for industry terminology",
      "High accuracy with minimized hallucination",
      "Seamless REST/gRPC API integration with internal stack"
    ],
    href: "/inventory",
    accent: "#d946ef",
    metrics: [
      { val: "100%", lbl: "Data Privacy" },
      { val: "4.8x", lbl: "Domain Precision" },
      { val: "0%", lbl: "Public Data Leakage" },
      { val: "Owned", lbl: "Model Weights" }
    ],
    previewTitle: "Custom LLaMA / Mistral Weights",
    previewSubtitle: "Private Model Engine • Encrypted"
  },
  {
    key: "rag",
    label: "RAG & Vector Search",
    icon: "fa-brain",
    headline: "Enterprise Knowledge Search Systems",
    desc: "Convert millions of internal documents, PDFs, technical specs, and database tables into an interactive, instant AI search engine.",
    bullets: [
      "Sub-second semantic vector search across thousands of files",
      "Role-based access control & enterprise security",
      "Exact citation links and source attribution",
      "Supports PDF, DOCX, CSV, SQL, & Live Webhooks"
    ],
    href: "/ai-knowledge",
    accent: "#06b6d4",
    metrics: [
      { val: "< 80ms", lbl: "Vector Latency" },
      { val: "1M+", lbl: "Docs Indexed" },
      { val: "100%", lbl: "Citation Accuracy" },
      { val: "RBAC", lbl: "Role Access Active" }
    ],
    previewTitle: "Pinecone Vector Intelligence",
    previewSubtitle: "RAG Document Pipeline • Syncing"
  },
  {
    key: "web",
    label: "Web & SaaS Engineering",
    icon: "fa-laptop-code",
    headline: "High-Performance Cloud Web Apps",
    desc: "Custom enterprise portals, web platforms, and scalable cloud SaaS products engineered with Next.js, React, Node.js, and cloud-native architecture.",
    bullets: [
      "Sub-second page loading speed & core web vitals",
      "Scalable cloud infrastructure (AWS / Vercel / GCP)",
      "Modern, responsive UI/UX with rich animations",
      "Robust REST/GraphQL API design & microservices"
    ],
    href: "/web-development-services",
    accent: "#10b981",
    metrics: [
      { val: "100", lbl: "Lighthouse Score" },
      { val: "< 0.4s", lbl: "Page Load Speed" },
      { val: "99.99%", lbl: "SLA Uptime" },
      { val: "Sub-sec", lbl: "API Response" }
    ],
    previewTitle: "Next.js 16 Cloud Architecture",
    previewSubtitle: "Vercel Edge Cluster • Active"
  }
];

/* ── 6 Real Verified Google Reviews ── */
const TESTIMONIALS = [
  {
    name: "Vijay Laxmi Sharma",
    role: "Founder, Mewari Achaar",
    initials: "V",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "ChittorTech has developed the app and website system for Mewari Achaar with a modern and professional digital experience. Their services are best-in-class, highly supportive for local vendors and businesses, and delivered at very reasonable pricing.",
  },
  {
    name: "Kush",
    role: "Founder, Shaadi Sutra",
    initials: "K",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "ChittorTech developed the website and application system for Shaadi Sutra with a smooth and modern user experience. The platform includes wedding planning tools, vendor management, budget tracking, event coordination, and management features that make wedding organization simple and efficient.",
  },
  {
    name: "Ayush Sharma",
    role: "AI Product Manager, BrowserStack",
    initials: "A",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "Really happy to see ChittorTech growing and achieving great things. The team has always been supportive, helpful, and inspiring, and their guidance and dedication towards technology and innovation are truly commendable. Wishing the entire ChittorTech team lots of success, growth, and many more achievements in the future ahead!",
  },
  {
    name: "Nisha Singh",
    role: "Sister",
    initials: "N",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "As an elder sister, I feel truly proud to see my brother building something so meaningful through ChittorTech. His dedication, determination, and passion for creating innovative digital solutions are really inspiring. Watching him grow and work towards his dreams brings immense happiness to our family. Wishing him and the entire team great success, positivity, and many more achievements ahead! ☀️",
  },
  {
    name: "Muskan Falwaria",
    role: "College Classmate",
    initials: "M",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "It's amazing to see classmates building something so impactful through ChittorTech. Their creativity, consistency, and modern approach towards technology truly make them stand out. Wishing the team more growth, success, and recognition in the coming years! 🚀",
  },
  {
    name: "Priyanka Vyas",
    role: "School Junior",
    initials: "P",
    avatarBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    rating: 5,
    text: "Honestly, it feels really good to see your growth and how far you've come. Watching a friend work hard, improve, and achieve new things is something that truly makes me happy. You've been putting in great effort, and it's inspiring to see you growing with confidence. Wishing you even more success ahead — keep shining and keep growing! ❤️ 🚀",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "AI Audit & Discovery", desc: "We analyze operational workflows to pinpoint high-ROI AI targets.", color: "#8b5cf6" },
  { num: "02", title: "Architecture & Design", desc: "Our engineers architect custom LLM models and security blueprints.", color: "#06b6d4" },
  { num: "03", title: "Development & Training", desc: "Agile build sprints and proprietary model fine-tuning on your data.", color: "#10b981" },
  { num: "04", title: "Deployment & Scaling", desc: "Seamless launch on enterprise cloud infra with 24/7 monitoring.", color: "#f59e0b" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("chatbots");
  const tab = TABS.find((t) => t.key === activeTab) || TABS[0];

  useEffect(() => {
    // Lead capture modal auto-popup: 3s then 6s after closing (max 2 times per active tab session)
    if (typeof window === "undefined") return;

    const popupCount = parseInt(sessionStorage.getItem("ct_popup_count") || "0", 10);
    if (popupCount >= 2) return;

    const showModal = () => {
      const modalEl = document.getElementById("trialModal");
      if (modalEl && window.bootstrap) {
        const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
        const currentCount = parseInt(sessionStorage.getItem("ct_popup_count") || "0", 10) + 1;
        sessionStorage.setItem("ct_popup_count", currentCount.toString());
      }
    };

    // First popup at 3 seconds
    let timer1 = setTimeout(() => {
      const currentCount = parseInt(sessionStorage.getItem("ct_popup_count") || "0", 10);
      if (currentCount === 0) {
        showModal();
      }
    }, 3000);

    // Watch for modal hide event to trigger 6s follow-up popup
    const handleModalHide = () => {
      const currentCount = parseInt(sessionStorage.getItem("ct_popup_count") || "0", 10);
      if (currentCount === 1) {
        setTimeout(() => {
          showModal();
        }, 6000);
      }
    };

    const modalEl = document.getElementById("trialModal");
    if (modalEl) {
      modalEl.addEventListener("hidden.bs.modal", handleModalHide);
    }

    return () => {
      clearTimeout(timer1);
      if (modalEl) {
        modalEl.removeEventListener("hidden.bs.modal", handleModalHide);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── Modern Hero Section ── */
        .ct-hp-hero {
          background: linear-gradient(180deg, #090d16 0%, #0f172a 100%);
          position: relative;
          overflow: hidden;
          padding: 52px 0 46px;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ct-hp-hero-glow-1 {
          position: absolute;
          top: -120px;
          left: 20%;
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(139, 92, 246, 0) 70%);
          pointer-events: none;
          filter: blur(45px);
        }
        .ct-hp-hero-glow-2 {
          position: absolute;
          bottom: -120px;
          right: 15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0) 70%);
          pointer-events: none;
          filter: blur(45px);
        }
        .ct-hp-hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: 0.45;
          pointer-events: none;
        }
        .ct-hp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          color: #cbd5e1;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 5px 15px;
          border-radius: 50px;
          margin-bottom: 16px;
        }
        .ct-hp-hero-badge .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse-emerald 2s infinite;
        }
        @keyframes pulse-emerald {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .ct-hp-hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.9rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.16;
          margin-bottom: 14px;
          letter-spacing: -0.4px;
        }
        .ct-hp-hero h1 .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-hp-hero-sub {
          font-size: 0.96rem;
          color: #94a3b8;
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 22px;
        }
        .ct-hp-hero-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .ct-hp-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 0.78rem;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 50px;
        }
        .ct-hp-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Hero Right Preview Frame */
        .ct-hero-card-wrap {
          position: relative;
          z-index: 2;
        }
        .ct-hero-glass-card {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 10px;
          box-shadow: 0 18px 45px -10px rgba(0, 0, 0, 0.6), 0 0 35px rgba(139, 92, 246, 0.14);
          max-height: 335px;
          overflow: hidden;
        }
        .ct-hero-card-img {
          width: 100%;
          border-radius: 12px;
          display: block;
          object-fit: cover;
          object-position: top;
          max-height: 315px;
        }

        /* ── Floating Stats Bar ── */
        .ct-stats-bar {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
          position: relative;
          z-index: 5;
        }
        .ct-stats-bar-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .ct-stat-item {
          padding: 18px 14px;
          text-align: center;
          border-right: 1px solid #f1f5f9;
        }
        .ct-stat-item:last-child {
          border-right: none;
        }
        .ct-stat-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.1;
        }
        .ct-stat-lbl {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
          margin-top: 3px;
        }

        /* ── Dual-Line Smooth Marquee Section ── */
        .ct-tech-marquee-sec {
          background: #ffffff;
          padding: 32px 0 28px;
          border-bottom: 1px solid #f1f5f9;
          overflow: hidden;
        }
        .ct-tech-marquee-title {
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 20px;
        }
        .ct-tech-marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .ct-tech-marquee-track-left {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ct-scroll-left 70s linear infinite;
        }
        .ct-tech-marquee-track-right {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: ct-scroll-right 75s linear infinite;
        }
        .ct-tech-marquee-container:hover .ct-tech-marquee-track-left,
        .ct-tech-marquee-container:hover .ct-tech-marquee-track-right {
          animation-play-state: paused;
        }
        @keyframes ct-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ct-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ct-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 7px 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.84rem;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .ct-tech-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
          background: #ffffff;
        }
        .ct-tech-disclaimer {
          text-align: center;
          font-size: 0.72rem;
          color: #94a3b8;
          font-style: italic;
          margin-top: 18px;
        }

        /* ── Section Header Typography ── */
        .ct-section-head {
          text-align: center;
          margin-bottom: 40px;
        }
        .ct-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.18);
          color: #7c3aed;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          padding: 5px 13px;
          border-radius: 50px;
          margin-bottom: 10px;
        }
        .ct-section-h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.65rem, 2.9vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }
        .ct-section-p {
          font-size: 0.96rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Core Capabilities Grid ── */
        .ct-feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ct-feat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .ct-feat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -10px rgba(15, 23, 42, 0.08);
          border-color: rgba(124, 58, 237, 0.3);
          color: inherit;
          text-decoration: none;
        }
        .ct-feat-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 14px;
        }
        .ct-feat-h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.02rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .ct-feat-p {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }
        .ct-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #7c3aed;
          margin-top: 14px;
        }

        /* ── Dynamic Product & Tech Stack Tabs ── */
        .ct-tabs-wrap {
          display: flex;
          gap: 6px;
          background: #f1f5f9;
          border-radius: 12px;
          padding: 5px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          justify-content: center;
        }
        .ct-tab-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .ct-tab-pill.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
        }
        .ct-tab-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
        }
        .ct-tab-content > div {
          min-width: 0;
        }
        .ct-tab-headline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .ct-tab-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .ct-tab-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        .ct-tab-bullets li {
          display: grid;
          grid-template-columns: 26px 1fr;
          align-items: start;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
          padding: 6px 0;
          border-bottom: 1px solid #f1f5f9;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .ct-tab-bullets li::before {
          content: '✓';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10b981;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ct-tab-visual {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ct-tab-visual-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
          z-index: 2;
          gap: 8px;
          flex-wrap: wrap;
        }
        .ct-tab-visual-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: calc(100% - 60px);
        }
        .ct-tab-visual-sub {
          font-size: 0.72rem;
          color: #94a3b8;
          word-break: break-word;
        }
        .ct-tab-icon-big {
          font-size: 4.5rem;
          color: rgba(255, 255, 255, 0.06);
          position: absolute;
          bottom: 10px;
          right: 15px;
        }
        .ct-tab-feature-cards {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 12px;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .ct-tab-mini-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border-radius: 10px;
          padding: 14px;
          text-align: center;
        }
        .ct-tab-mini-card .val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
        }
        .ct-tab-mini-card .lbl {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 2px;
        }

        /* ── Industry Grid ── */
        .ct-ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .ct-ind-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 12px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }
        .ct-ind-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
          border-color: #cbd5e1;
          color: inherit;
          text-decoration: none;
        }
        .ct-ind-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .ct-ind-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
        }

        /* ── 4-Step Process ── */
        .ct-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .ct-proc-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 16px;
          text-align: center;
          position: relative;
          transition: all 0.25s ease;
        }
        .ct-proc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
        }
        .ct-proc-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 0 auto 14px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        .ct-proc-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .ct-proc-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Real Google Testimonials Grid ── */
        .ct-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ct-testi-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }
        .ct-testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }
        .ct-stars {
          color: #f59e0b;
          font-size: 0.85rem;
          letter-spacing: 2px;
        }
        .ct-testi-text {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 16px;
          font-style: italic;
        }
        .ct-testi-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ct-testi-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #fff;
          font-weight: 800;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ct-testi-name {
          font-weight: 700;
          font-size: 0.84rem;
          color: #0f172a;
        }
        .ct-testi-role {
          font-size: 0.74rem;
          color: #94a3b8;
        }

        /* ── Google Reviews Custom Button ── */
        .ct-btn-google {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 50px;
          padding: 12px 28px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a !important;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          text-decoration: none !important;
          transition: all 0.25s ease;
        }
        .ct-btn-google:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
          color: #0f172a !important;
        }

        /* ── CTA Banner ── */
        .ct-cta-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          border-radius: 16px;
          padding: 38px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }
        .ct-cta-banner h2 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.4rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }
        .ct-cta-banner p {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-bottom: 22px;
        }
        .ct-cta-banner-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ct-bg-white { background: #ffffff; }
        .ct-bg-slate { background: #f8fafc; }

        @media (max-width: 1023px) {
          .ct-feat-grid, .ct-process-grid, .ct-testi-grid { grid-template-columns: repeat(2, 1fr); }
          .ct-ind-grid { grid-template-columns: repeat(3, 1fr); }
          .ct-stats-bar-inner { grid-template-columns: repeat(2, 1fr); }
          .ct-tab-content { grid-template-columns: 1fr; gap: 24px; padding: 24px; }
        }
        @media (max-width: 767px) {
          /* Word break for all text elements */
          .ct-tab-bullets li, .ct-tab-desc, .ct-tab-headline,
          .ct-section-h2, .ct-hp-hero h1, .ct-section-p { 
            word-break: break-word; 
            overflow-wrap: break-word;
          }
          /* Tab visual — constrain width */
          .ct-tab-visual { 
            width: 100%; 
            max-width: 100%; 
            min-height: auto !important;
            padding: 18px 14px !important;
            overflow: hidden;
          }
          .ct-tab-feature-cards { 
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 8px;
          }
          .ct-tab-mini-card { padding: 10px 8px; }
          .ct-tab-mini-card .val { font-size: 1.1rem; }
          .ct-tab-icon-big { font-size: 3rem; }
        }
        @media (max-width: 640px) {
          /* Prevent ALL horizontal overflow */
          html, body, .ct-hp-hero, section, .container, .container-fluid { 
            overflow-x: hidden !important; 
            max-width: 100% !important;
          }
          /* Hero */
          .ct-hp-hero { padding: 32px 0 24px; }
          .ct-hp-hero h1 { font-size: 1.75rem !important; line-height: 1.2; word-break: break-word; }
          .ct-hp-hero-sub { font-size: 0.88rem; max-width: 100% !important; }
          .ct-hp-hero-pills { gap: 6px; }
          .ct-hp-pill { font-size: 0.72rem; padding: 4px 10px; }
          .ct-hp-hero-ctas { flex-direction: column; width: 100%; }
          .ct-hp-hero-ctas a, .ct-hp-hero-ctas button { width: 100% !important; justify-content: center; box-sizing: border-box; }
          .ct-hero-glass-card { margin-top: 20px; max-height: 220px; }
          /* Grids */
          .ct-feat-grid { grid-template-columns: 1fr; gap: 14px; }
          .ct-ind-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .ct-process-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .ct-testi-grid { grid-template-columns: 1fr; }
          .ct-stats-bar-inner { grid-template-columns: repeat(2, 1fr); }
          /* Tabs */
          .ct-tabs-wrap { flex-direction: column; gap: 4px; border-radius: 10px; }
          .ct-tab-pill { width: 100%; justify-content: center; font-size: 0.82rem; padding: 8px 12px; }
          .ct-tab-content { padding: 16px 14px; gap: 18px; }
          .ct-tab-headline { font-size: 1.15rem; word-break: break-word; }
          .ct-tab-desc { font-size: 0.85rem; word-break: break-word; overflow-wrap: break-word; }
          .ct-tab-bullets li { font-size: 0.82rem; }
          .ct-tab-feature-cards { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 8px; }
          .ct-tab-visual { padding: 16px 12px !important; min-height: auto !important; }
          .ct-tab-content a.ct-btn, .ct-tab-content button.ct-btn {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
            box-sizing: border-box !important;
            white-space: normal !important;
            text-align: center;
          }
          /* CTA */
          .ct-cta-banner { padding: 24px 14px; border-radius: 12px; }
          .ct-cta-banner h2 { font-size: 1.4rem !important; word-break: break-word; }
          .ct-cta-banner-btns { flex-direction: column; align-items: stretch; }
          .ct-cta-banner-btns a, .ct-cta-banner-btns button { width: 100%; justify-content: center; }
          /* Section header */
          .ct-section-h2 { font-size: 1.4rem !important; word-break: break-word; }
          .ct-section-p { font-size: 0.88rem; }
          /* Marquee section */
          .ct-tech-marquee-sec { padding: 22px 0 18px; }
          .ct-tech-chip { font-size: 0.78rem; padding: 5px 11px; }
        }
        @media (max-width: 420px) {
          .ct-hp-hero h1 { font-size: 1.45rem !important; }
          .ct-ind-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .ct-process-grid { grid-template-columns: 1fr; gap: 10px; }
          .ct-tab-mini-card .val { font-size: 1rem; }
          .ct-tab-mini-card .lbl { font-size: 0.65rem; }
          .ct-stat-num { font-size: 1.4rem; }
          .ct-stat-lbl { font-size: 0.72rem; }
          .ct-ind-label { font-size: 0.72rem; }
          .ct-tab-visual-title { font-size: 0.82rem; }
          .ct-tab-visual-sub { font-size: 0.65rem; }
        }
      `}</style>

      {/* ── 1. MODERN HERO SECTION ── */}
      <section className="ct-hp-hero">
        <div className="ct-hp-hero-glow-1"></div>
        <div className="ct-hp-hero-glow-2"></div>
        <div className="ct-hp-hero-grid"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">

              <h1>
                Build & Scale With<br />
                <span className="gradient-text">Custom AI & IT Software.</span>
              </h1>
              <p className="ct-hp-hero-sub">
                From autonomous AI chatbots, RAG knowledge search systems, and custom LLMs to high-performance Next.js web apps — ChittorTech delivers tech that drives exponential business growth.
              </p>
              <div className="ct-hp-hero-pills">
                <span className="ct-hp-pill"><i className="fa-solid fa-robot" style={{ color: "#8b5cf6" }}></i> AI Agents</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-brain" style={{ color: "#06b6d4" }}></i> RAG & LLMs</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-code" style={{ color: "#10b981" }}></i> Next.js / SaaS</span>
                <span className="ct-hp-pill"><i className="fa-solid fa-chart-line" style={{ color: "#f59e0b" }}></i> SEO Growth</span>
              </div>
              <div className="ct-hp-hero-ctas justify-content-center justify-content-lg-start">
                <button
                  className="ct-btn ct-btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#trialModal"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", border: "none", padding: "11px 24px", fontSize: "0.92rem" }}
                >
                  <i className="fa-solid fa-calendar-check"></i> Request AI Consultation
                </button>
                <Link href="/web-development-services" className="ct-btn ct-btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)", padding: "11px 24px", fontSize: "0.92rem" }}>
                  Explore Services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ct-hero-card-wrap">
                <div className="ct-hero-glass-card">
                  <img
                    src="/assets/images/ct-dashboard-hero.png"
                    alt="ChittorTech AI Analytics & Automation Dashboard"
                    className="ct-hero-card-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── 3. DUAL-LINE CONTINUOUS SLOW MARQUEE ── */}
      <section className="ct-tech-marquee-sec">
        <div className="container-fluid p-0">
          <div className="ct-tech-marquee-title">
            Powered By Industry-Leading Technologies
          </div>
          <div className="ct-tech-marquee-container">
            {/* Line 1 Scrolling Left */}
            <div className="ct-tech-marquee-track-left">
              {[...TECH_ROW_1, ...TECH_ROW_1].map((t, idx) => (
                <div key={`r1-${t.name}-${idx}`} className="ct-tech-chip">
                  <i className={t.icon} style={{ color: t.color, fontSize: "1.1rem" }}></i>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
            {/* Line 2 Scrolling Right */}
            <div className="ct-tech-marquee-track-right">
              {[...TECH_ROW_2, ...TECH_ROW_2].map((t, idx) => (
                <div key={`r2-${t.name}-${idx}`} className="ct-tech-chip">
                  <i className={t.icon} style={{ color: t.color, fontSize: "1.1rem" }}></i>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ct-tech-disclaimer">
            *Note: Logo colors are modified for aesthetic purposes only and do not represent official brand guidelines.
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES GRID ── */}
      <section className="ct-bg-slate" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-sparkles"></i> Core Capabilities</span>
            <h2 className="ct-section-h2">Cutting-Edge AI & IT Services</h2>
            <p className="ct-section-p">
              From autonomous AI agents to enterprise full-stack web engineering — construct your scalable tech advantage.
            </p>
          </div>
          <div className="ct-feat-grid">
            {FEATURES.map((f) => (
              <Link href={f.href} key={f.href} className="ct-feat-card">
                <div className="ct-feat-icon" style={{ background: f.bgColor, color: f.color, border: `1px solid ${f.borderColor}` }}>
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <div className="ct-feat-h3">{f.title}</div>
                <p className="ct-feat-p">{f.desc}</p>
                <span className="ct-feat-link" style={{ color: f.color }}>Explore solutions <i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT TABS (DYNAMICALLY UPDATING) ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-layer-group"></i> Technology Stack</span>
            <h2 className="ct-section-h2">Engineered for Enterprise Scale</h2>
            <p className="ct-section-p">
              Deep dive into ChittorTech's specialized AI models, knowledge systems, and cloud development solutions.
            </p>
          </div>
          <div className="ct-tabs-wrap">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`ct-tab-pill ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}
              >
                <i className={`fa-solid ${t.icon}`} style={{ color: activeTab === t.key ? t.accent : "inherit" }}></i> {t.label}
              </button>
            ))}
          </div>
          {tab && (
            <div className="ct-tab-content" key={tab.key}>
              <div>
                <h3 className="ct-tab-headline">{tab.headline}</h3>
                <p className="ct-tab-desc">{tab.desc}</p>
                <ul className="ct-tab-bullets">
                  {tab.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Link href={tab.href} className="ct-btn ct-btn-primary" style={{ background: tab.accent, border: "none", padding: "10px 20px", fontSize: "0.88rem" }}>
                  Learn More About {tab.label} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="ct-tab-visual" style={{ overflow: 'hidden', maxWidth: '100%', width: '100%', boxSizing: 'border-box' }}>
                <div className="ct-tab-visual-head">
                  <div>
                    <div className="ct-tab-visual-title">{tab.previewTitle}</div>
                    <div className="ct-tab-visual-sub">{tab.previewSubtitle}</div>
                  </div>
                  <span className="badge" style={{ background: tab.accent }}>Active</span>
                </div>
                <i className={`fa-solid ${tab.icon} ct-tab-icon-big`}></i>
                <div className="ct-tab-feature-cards">
                  {tab.metrics.map((c) => (
                    <div key={c.lbl} className="ct-tab-mini-card">
                      <div className="val" style={{ color: tab.accent }}>{c.val}</div>
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
      <section className="ct-bg-slate" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-building"></i> Vertical Solutions</span>
            <h2 className="ct-section-h2">Tailored AI Solutions for Every Industry</h2>
            <p className="ct-section-p">
              Industry-specific automation, custom API & system integration, and specialized AI models for your vertical.
            </p>
          </div>
          <div className="ct-ind-grid">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.href} href={ind.href} className="ct-ind-card">
                <div className="ct-ind-icon" style={{ background: `${ind.color}15`, color: ind.color }}>
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <div className="ct-ind-label">{ind.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHITTORTECH ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-shield-halved"></i> Why ChittorTech</span>
            <h2 className="ct-section-h2">Why Industry Leaders Choose ChittorTech</h2>
            <p className="ct-section-p">
              We fuse deep AI research with agile software engineering to craft high-impact enterprise solutions.
            </p>
          </div>
          <div className="ct-feat-grid">
            {[
              { icon: "fa-robot",         title: "Cutting-Edge AI Expertise",   desc: "We build with modern LLMs, vector embeddings, RAG architectures, and autonomous multi-agent systems.", color: "#8b5cf6" },
              { icon: "fa-shield-halved", title: "Enterprise-Grade Security",   desc: "100% data confidentiality, end-to-end encryption, and options for private on-premise cloud deployments.", color: "#06b6d4" },
              { icon: "fa-bolt",          title: "Rapid Agile Engineering",     desc: "From concept to production-ready AI prototype in as little as 2 weeks — accelerating digital ROI.", color: "#10b981" },
              { icon: "fa-headset",       title: "Dedicated Tech Support",      desc: "Direct communication with engineers, proactive 24/7 monitoring, and continuous system optimization.", color: "#f59e0b" },
              { icon: "fa-cloud",         title: "Cloud-Native Scalability",    desc: "Architected on AWS, GCP, and Vercel to seamlessly serve millions of high-concurrency requests.", color: "#3b82f6" },
              { icon: "fa-chart-line",    title: "Measurable Business ROI",     desc: "Every AI feature is engineered to directly lower operational overhead and boost user lead conversion.", color: "#ec4899" },
            ].map((w) => (
              <div key={w.title} className="ct-feat-card">
                <div className="ct-feat-icon" style={{ background: `${w.color}15`, color: w.color, border: `1px solid ${w.color}25` }}>
                  <i className={`fa-solid ${w.icon}`}></i>
                </div>
                <div className="ct-feat-h3">{w.title}</div>
                <p className="ct-feat-p">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PROCESS ── */}
      <section className="ct-bg-slate" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-diagram-next"></i> Execution Process</span>
            <h2 className="ct-section-h2">Our 4-Step Delivery Framework</h2>
            <p className="ct-section-p">
              A structured technical blueprint from initial AI discovery to production deployment.
            </p>
          </div>
          <div className="ct-process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="ct-proc-card">
                <div className="ct-proc-num" style={{ background: s.color }}>{s.num}</div>
                <div className="ct-proc-title">{s.title}</div>
                <p className="ct-proc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. REAL GOOGLE REVIEWS ── */}
      <section className="ct-bg-white" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="ct-section-head">
            <span className="ct-section-eyebrow"><i className="fa-solid fa-quote-left"></i> Verified Client Reviews</span>
            <h2 className="ct-section-h2">Real Reviews from Real Partners</h2>
            <p className="ct-section-p">
              Real stories from founders, product leaders, and mentors who trust ChittorTech.
            </p>
          </div>
          <div className="ct-testi-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="ct-testi-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="ct-stars">{"★".repeat(t.rating)}</div>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <p className="ct-testi-text">"{t.text}"</p>
                <div className="ct-testi-author">
                  <div className="ct-testi-avatar" style={{ background: t.avatarBg }}>{t.initials}</div>
                  <div>
                    <div className="ct-testi-name">{t.name}</div>
                    <div className="ct-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a
              href="https://www.google.com/search?q=ChittorTech"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-btn-google"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>View all reviews on Google</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section style={{ padding: "50px 0 60px", background: "#f8fafc" }}>
        <div className="container">
          <div className="ct-cta-banner">
            <h2>Ready to Transform Your Business with AI?</h2>
            <p>Schedule a technical consultation with ChittorTech's senior AI and software engineers.</p>
            <div className="ct-cta-banner-btns">
              <button
                className="ct-btn"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                style={{ background: "#ffffff", color: "#0f172a", fontWeight: 700, border: "none", padding: "10px 22px", fontSize: "0.9rem" }}
              >
                <i className="fa-solid fa-calendar-check" style={{ color: "#7c3aed" }}></i> Book Technical Consultation
              </button>
              <Link href="/contact-us" className="ct-btn ct-btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)", padding: "10px 22px", fontSize: "0.9rem" }}>
                <i className="fa-solid fa-envelope"></i> Contact Engineering Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
