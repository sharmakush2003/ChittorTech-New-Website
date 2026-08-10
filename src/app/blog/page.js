"use client";
import React from "react";
import Link from "next/link";
import "../../../public/assets/css/premium-products.css";
const BLOG_POSTS = [
  {
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    trending: true,
    title: "Google Play Store Publishing: The Ultimate Compliance & Launch Guide",
    desc: "Struggling with Google's new 20-tester requirement or organization identity verification? Learn how ChittorTech's specialized publishing service handles Play Console setup, asset optimization, and policy audits for a successful app launch.",
    link: "/google-play-store-publishing-guide-compliance-launch"
  },
  {
    image: "https://picsum.photos/seed/ai1/600/400",
    trending: true,
    title: "How AI Agents & LLMs Transform Indian Businesses",
    desc: "Discover how custom conversational bots and RAG systems automate 70% of customer support queries and boost daily operations.",
    link: "/beyond-automation-why-agentic-ai-erp-is-the-best-retail-software-move-for-2026"
  },
  {
    image: "https://picsum.photos/seed/mewari/600/400",
    trending: false,
    title: "Affiliate Marketing App & Website Built for Mewari Achaar",
    desc: "A complete mobile app and website solution for Mewari Achaar, enabling powerful affiliate marketing and online sales for regional products.",
    link: "/affiliate-marketing-app-mewari-achaar"
  },
  {
    image: "https://picsum.photos/seed/chit1/600/400",
    trending: false,
    title: "Visit Chittorgarh App: Boosting Local Tourism",
    desc: "How we developed the Visit Chittorgarh app to provide tourists with a seamless local guide experience and boost the city's tourism economy.",
    link: "/visit-chittorgarh-app-tourism"
  },
  {
    image: "https://picsum.photos/seed/temple/600/400",
    trending: false,
    title: "Streamlining Sabari Mala Temple (Hubli) with a Custom Invoice System",
    desc: "Developing a robust invoice and billing system to manage temple donations, trust accounting, and operational expenses effectively.",
    link: "/shabari-mata-temple-hubli-invoice-system"
  },
  {
    image: "https://picsum.photos/seed/dharam/600/400",
    trending: false,
    title: "Building a Robust Admin Portal for Dharamshala Management",
    desc: "An end-to-end admin portal built for local Dharamshalas to streamline room bookings, donor tracking, and facility management.",
    link: "/dharamshala-billing-system"
  },
  {
    image: "https://picsum.photos/seed/chit2/600/400",
    trending: false,
    title: "Chittorgarh Tourism Website Development",
    desc: "Showcasing the glorious history of Chittorgarh with a modern, high-performance web platform designed to attract global tourists.",
    link: "/chittorgarh-tourism-website-development"
  },
  {
    image: "https://picsum.photos/seed/agent/600/400",
    trending: true,
    title: "The Agentic Shift: Why 2026 Belongs to Autonomous AI Agents",
    desc: "Moving from chatbots to digital coworkers. How autonomous AI agents are executing multi-step business workflows without human intervention.",
    link: "/autonomous-ai-agents-2026"
  },
  {
    image: "https://picsum.photos/seed/lrm/600/400",
    trending: true,
    title: "Large Reasoning Models (LRMs) vs. LLMs",
    desc: "How the shift toward reasoning and logical step-by-step thinking is fundamentally changing how AI solves complex enterprise problems.",
    link: "/large-reasoning-models-vs-llm"
  },
  {
    image: "https://picsum.photos/seed/rag/600/400",
    trending: true,
    title: "RAG Systems: The Future of Enterprise Knowledge Management",
    desc: "Convert millions of internal PDFs and SQL databases into instantly searchable vector AI systems. The ultimate solution for data retrieval.",
    link: "/rag-systems-enterprise-knowledge"
  },
  {
    image: "https://picsum.photos/seed/slm/600/400",
    trending: true,
    title: "Small Language Models (SLMs): High Efficiency at Lower Cost",
    desc: "Why businesses are adopting compact, industry-specific SLMs over massive generalized AI models for better cost-to-performance ratios.",
    link: "/small-language-models-slm"
  },
  {
    image: "https://picsum.photos/seed/gov/600/400",
    trending: true,
    title: "AI Governance & Security in the Era of Deepfakes",
    desc: "Establishing strict protocols for AI usage and data privacy as cybersecurity threats and deepfake frauds increase globally.",
    link: "/ai-governance-security-deepfakes"
  },
  {
    image: "https://picsum.photos/seed/pol/600/400",
    trending: true,
    title: "How AI is Revolutionizing Political Campaigns & Voter Outreach",
    desc: "From targeted data analysis to real-time sentiment tracking, see how artificial intelligence is changing the landscape of elections in India.",
    link: "/ai-political-campaigns-india"
  },
  {
    image: "https://picsum.photos/seed/native/600/400",
    trending: false,
    title: "Building an AI-Native Organization from the Ground Up",
    desc: "Stop layering AI over legacy software. Learn how to architect your entire operational structure around artificial intelligence.",
    link: "/building-ai-native-organization"
  },
  {
    image: "https://picsum.photos/seed/hist/600/400",
    trending: false,
    title: "Historical Data Digitization Using Computer Vision",
    desc: "How AI and computer vision are being used to digitize, preserve, and search ancient Indian manuscripts and historical artifacts.",
    link: "/historical-data-digitization-computer-vision"
  },
  {
    image: "https://picsum.photos/seed/logis/600/400",
    trending: false,
    title: "AI in Logistics & Supply Chain: Predictive Analytics at Scale",
    desc: "Predicting demand, optimizing delivery routes, and managing inventory dynamically with custom machine learning pipelines.",
    link: "/ai-logistics-supply-chain-predictive"
  },
  {
    image: "https://picsum.photos/seed/fin/600/400",
    trending: true,
    title: "The Financial Sector's Pivot to Automated Risk Assessment",
    desc: "Banks and NBFCs are deploying Agentic AI to instantly evaluate credit risk and process loans in minutes instead of days.",
    link: "/financial-sector-automated-risk-assessment"
  },
  {
    image: "https://picsum.photos/seed/health/600/400",
    trending: false,
    title: "AI in Indian Healthcare: From Remote Diagnostics to Hospital ERPs",
    desc: "Bridging the gap in medical accessibility through intelligent diagnostic tools and streamlined hospital management systems.",
    link: "/ai-indian-healthcare-hospital-erp"
  },
  {
    image: "https://picsum.photos/seed/prompt/600/400",
    trending: false,
    title: "Mastering Prompt Engineering for Business Teams",
    desc: "The essential guide to crafting effective inputs that extract the most accurate and useful outputs from enterprise LLMs.",
    link: "/mastering-prompt-engineering-business"
  },
  {
    image: "https://picsum.photos/seed/cloud/600/400",
    trending: false,
    title: "Cloud-Native Infrastructure for Scalable SaaS",
    desc: "Why Next.js, Vercel, and AWS provide the perfect trifecta for building robust, high-performance enterprise applications.",
    link: "/cloud-native-infrastructure-scalable-saas"
  },
  {
    image: "https://picsum.photos/seed/sec/600/400",
    trending: false,
    title: "Zero-Trust Security Architecture in Custom Software",
    desc: "How modern authentication systems ensure absolute data privacy and protection against sophisticated cyber attacks.",
    link: "/zero-trust-security-architecture"
  },
  {
    image: "https://picsum.photos/seed/seo/600/400",
    trending: true,
    title: "Algorithmic SEO: Using AI to Dominate Search Rankings",
    desc: "Leveraging predictive data, content generation, and technical web audits to skyrocket organic B2B lead generation.",
    link: "/algorithmic-seo-ai-search-rankings"
  },
  {
    image: "https://picsum.photos/seed/mfg/600/400",
    trending: false,
    title: "Smart Manufacturing: IoT Integration and Predictive Maintenance",
    desc: "Connecting factory floors to cloud dashboards to predict machine failures before they halt your production line.",
    link: "/smart-manufacturing-iot-predictive-maintenance"
  },
  {
    image: "https://picsum.photos/seed/multi/600/400",
    trending: true,
    title: "Multimodal AI Models: The Future of Interactive Interfaces",
    desc: "Building systems that process text, voice, images, and video simultaneously for a hyper-personalized user experience.",
    link: "/multimodal-ai-interactive-interfaces"
  },
  {
    image: "https://picsum.photos/seed/slop/600/400",
    trending: false,
    title: "Combating 'AI Slop' with High-Quality Content Generation",
    desc: "Strategies to ensure your enterprise AI produces accurate, valuable, and highly contextual information rather than generic text.",
    link: "/combating-ai-slop-content-generation"
  },
  {
    image: "https://picsum.photos/seed/vr/600/400",
    trending: false,
    title: "Spatial Computing Meets AI for Real Estate Walkthroughs",
    desc: "Creating immersive, AI-guided virtual tours for real estate developers and prospective buyers using modern web tech.",
    link: "/spatial-computing-ai-real-estate"
  },
  {
    image: "https://picsum.photos/seed/legal/600/400",
    trending: false,
    title: "Legal Tech: Automating Contract Reviews with RAG",
    desc: "How law firms are using Retrieval-Augmented Generation to instantly parse and cross-reference thousands of legal documents.",
    link: "/legal-tech-automating-contract-reviews"
  },
  {
    image: "https://picsum.photos/seed/ed/600/400",
    trending: false,
    title: "EdTech Evolution: Hyper-Personalized AI Tutors",
    desc: "Deploying custom SLMs to adapt to individual student learning paces and provide real-time, context-aware educational support.",
    link: "/edtech-evolution-hyper-personalized-ai"
  },
  {
    image: "https://picsum.photos/seed/agri/600/400",
    trending: false,
    title: "AgriTech: Predictive Analytics for Crop Yield Optimization",
    desc: "Using historical weather data and machine learning to give Indian farmers actionable insights for better harvests.",
    link: "/agritech-predictive-analytics-crop"
  },
  {
    image: "https://picsum.photos/seed/phys/600/400",
    trending: true,
    title: "Physical AI: Bridging the Gap Between Software and Robotics",
    desc: "Intelligence applied to the physical world, powering the next generation of warehouse drones and automated manufacturing robots.",
    link: "/physical-ai-software-robotics"
  },
  {
    image: "https://picsum.photos/seed/hr/600/400",
    trending: true,
    title: "Digital Co-workers: Integrating AI Agents into HR Processes",
    desc: "Streamlining recruitment, onboarding, and payroll queries by deploying autonomous AI colleagues across the HR department.",
    link: "/digital-coworkers-ai-hr-processes"
  }
];
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
                <i className={`fa-solid fa-newspaper`}></i> Blog
              </span>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
                ChittorTech Blog & Resources
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, maxWidth: '600px', marginBottom: '32px' }}>
                Insights, guides, and industry news to help your business grow smarter.
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
                <i className={`fa-solid fa-newspaper`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* header */}

{/* header */}

 
<style>{`
.new-blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin: 40px auto;
  max-width: 1200px;
  justify-content: center;
  padding: 0 20px;
}

.new-blog-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.new-blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
}

.new-blog-content {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.new-blog-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1a1a1a;
  font-weight: 700;
}

      {/* ── Blog Grid Section ── */}

.new-blog-content p {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}

.new-read-more-btn {
  margin-top: auto;
  align-self: flex-start;
  background: linear-gradient(135deg, #0ca678, #089f6d);
  color: #fff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.new-read-more-btn:hover {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .new-blog-content h3 {
    font-size: 20px;
  }
  .new-blog-content p {
    font-size: 14px;
  }
  .new-read-more-btn {
    padding: 8px 18px;
    font-size: 14px;
  }
}
`}</style>


<div className="new-blog-grid">
  {BLOG_POSTS.map((post, idx) => (
    <div className="new-blog-card" key={idx} style={{ position: "relative" }}>
      {post.trending && (
        <div style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "linear-gradient(135deg, #f59e0b, #ef4444)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
          zIndex: 10,
          boxShadow: "0 4px 10px rgba(239, 68, 68, 0.4)"
        }}>
          🔥 Trending
        </div>
      )}
      <div style={{
        width: "100%",
        height: "200px",
        background: "#eee",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        position: "relative",
        overflow: "hidden"
      }}>
        <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="new-blog-content">
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "10px", color: "#0f172a" }}>
          {post.title}
        </h3>
        <p style={{ fontSize: "0.92rem", color: "#64748b", lineHeight: "1.6", flexGrow: 1, marginBottom: "20px" }}>
          {post.desc}
        </p>
        <Link href={post.link} className="new-read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  ))}
</div>

{/*  footer */}
    </>
  );
}
