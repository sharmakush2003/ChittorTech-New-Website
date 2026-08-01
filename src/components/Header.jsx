"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = {
  aiProducts: [
    { href: "/crm",                      icon: "fa-robot",           label: "🤖 AI Support Chatbots" },
    { href: "/erp",                      icon: "fa-diagram-project", label: "⚡ AI Workflow Automation" },
    { href: "/crm",                      icon: "fa-brain",           label: "🧠 RAG Knowledge Base" },
    { href: "/erp",                      icon: "fa-microchip",       label: "🔬 Custom LLM Training" },
    { href: "/erp",                      icon: "fa-chart-line",      label: "📊 AI Predictive Analytics" },
    { href: "/erp",                      icon: "fa-file-code",       label: "📑 OCR & Document AI" },
    { href: "/web-development-services", icon: "fa-laptop-code",     label: "💻 Custom SaaS Apps" },
    { href: "/ai-manufacturing",         icon: "fa-eye",             label: "👁️ Computer Vision AI" },
  ],
  industries: {
    retail: [
      { href: "/supermarket",           label: "🛒 Supermarkets & Retail Chains" },
      { href: "/kirana-store",          label: "🏪 Kirana & General Stores" },
      { href: "/grocery-store",         label: "🍏 Grocery & FMCG Merchants" },
      { href: "/convenience-store",     label: "🏪 Convenience Stores" },
      { href: "/fruits-vegetable-shop", label: "🥦 Fresh Food & Agri Tech" },
    ],
    fashion: [
      { href: "/garments",              label: "👔 Apparel & Garment Brands" },
      { href: "/boutique-store",        label: "👗 Fashion Boutiques & Labels" },
      { href: "/footwear-store",        label: "👟 Footwear & Shoe Chains" },
      { href: "/bridal-store",          label: "💍 Bridal & Luxury Stores" },
      { href: "/textile",               label: "🧵 Textile Mills & Fabrics" },
    ],
    hospitality: [
      { href: "/dharamshala-billing-system", label: "🏛️ Dharamshala Management System" },
      { href: "/hotel-management-system",     label: "🏨 Hotel Management System" },
      { href: "/hotel-room-booking-system",   label: "🛏️ Hotel Room Booking System" },
      { href: "/resort-guest-house-software", label: "🏞️ Resort & Guest House Software" },
      { href: "/online-booking-admin-portal", label: "🔔 Online Booking & Admin Approval Portal" },
    ],
    enterprise: [
      { href: "/hospitals",                         label: "🏥 Hospitals & Medical Centers" },
      { href: "/schools-educational-institutions",  label: "🎓 Schools & EdTech Institutions" },
      { href: "/ai-manufacturing",                  label: "🏭 Smart Manufacturing Plants" },
      { href: "/industrial-products",               label: "🏢 Industrial B2B Suppliers" },
      { href: "/after-sale-service",                label: "🔧 Warranty & Service Networks" },
    ]
  },
  services: [
    { href: "/web-development-services",       icon: "fa-code",             label: "💻 Web Development" },
    { href: "/e-commerce-website-development", icon: "fa-cart-shopping",    label: "🛒 E-Commerce Solutions" },
    { href: "/android-application",            icon: "fa-android",          label: "🤖 Android Mobile Apps" },
    { href: "/ios-application",                icon: "fa-apple",            label: "🍎 iOS Mobile Apps" },
    { href: "/search-engine-optimization",     icon: "fa-magnifying-glass", label: "🚀 SEO Growth Services" },
    { href: "/digital-marketing-services",     icon: "fa-bullhorn",         label: "📢 Digital Marketing" },
    { href: "/social-media-optimization",      icon: "fa-thumbs-up",        label: "👍 Social Media (SMO)" },
    { href: "/web-development-services",       icon: "fa-database",         label: "🌐 Custom Enterprise Portals" },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phone = "917597451057";
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  return (
    <>
      <style>{`
        .ct-header-main {
          position: sticky; top: 0; z-index: 1000;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .ct-header-main.scrolled { box-shadow: 0 4px 24px rgba(41,31,188,0.10); }
        .ct-header-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 72px; padding: 0 24px; max-width: 1280px; margin: 0 auto;
        }
        .ct-logo img { height: 46px; width: auto; object-fit: contain; display: block; }

        .ct-nav-desktop {
          display: flex; align-items: center; gap: 2px; list-style: none; margin: 0; padding: 0;
        }
        .ct-nav-desktop > li { position: relative; }
        .ct-nav-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 8px;
          font-size: 0.875rem; font-weight: 600; color: #1e293b;
          background: transparent; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; transition: all 0.2s ease;
          white-space: nowrap; text-decoration: none;
        }
        .ct-nav-btn:hover, .ct-nav-btn.active {
          color: #291fbc; background: rgba(41,31,188,0.07);
        }
        .ct-nav-btn i.chevron {
          font-size: 0.65rem; transition: transform 0.25s ease; color: #94a3b8;
        }
        .ct-nav-btn.active i.chevron { transform: rotate(180deg); color: #291fbc; }

        .ct-dropdown {
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: #fff; border: 1px solid #e2e8f0;
          border-radius: 16px; box-shadow: 0 20px 60px rgba(41,31,188,0.14);
          padding: 20px; z-index: 999;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
        }
        .ct-nav-desktop > li:hover .ct-dropdown,
        .ct-dropdown.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .ct-dropdown-grid { display: grid; gap: 6px; }
        .ct-dropdown-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px; text-decoration: none;
          color: #374151; font-size: 0.875rem; font-weight: 500;
          transition: all 0.2s ease;
        }
        .ct-dropdown-link i {
          width: 28px; height: 28px; border-radius: 7px;
          background: rgba(41,31,188,0.08); color: #291fbc;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; flex-shrink: 0;
        }
        .ct-dropdown-link:hover { background: rgba(41,31,188,0.06); color: #291fbc; }
        .ct-dropdown-link:hover i { background: #291fbc; color: #fff; }

        .ct-mega-dropdown {
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: #fff; border: 1px solid #e2e8f0;
          border-radius: 16px; box-shadow: 0 20px 60px rgba(41,31,188,0.14);
          padding: 24px; min-width: 840px; z-index: 999;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
        }
        .ct-nav-desktop > li:hover .ct-mega-dropdown,
        .ct-mega-dropdown.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .ct-mega-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .ct-mega-col h6 {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.2px; color: #94a3b8; margin-bottom: 10px;
          padding-bottom: 8px; border-bottom: 1px solid #f1f5f9;
        }
        .ct-mega-link {
          display: block; padding: 5px 0; text-decoration: none;
          font-size: 0.84rem; font-weight: 500; color: #374151;
          transition: all 0.2s ease;
        }
        .ct-mega-link:hover { color: #291fbc; transform: translateX(4px); }

        .ct-nav-right { display: flex; align-items: center; gap: 10px; }
        .ct-phone-link {
          display: flex; align-items: center; gap: 6px;
          color: #374151; font-size: 0.85rem; font-weight: 600;
          text-decoration: none; padding: 6px 12px; border-radius: 8px;
          border: 1px solid #e2e8f0; transition: all 0.2s ease; white-space: nowrap;
        }
        .ct-phone-link:hover { border-color: #291fbc; color: #291fbc; }
        .ct-book-demo-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 20px; border-radius: 10px;
          background: linear-gradient(135deg, #291fbc, #3b82f6);
          color: #fff !important; font-size: 0.875rem; font-weight: 700;
          border: none; cursor: pointer; font-family: 'Inter',sans-serif;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3); transition: all 0.2s ease;
          white-space: nowrap; text-decoration: none;
        }
        .ct-book-demo-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(41,31,188,0.4);
        }

        .ct-announce-strip {
          background: linear-gradient(135deg, #1e1b4b, #291fbc);
          padding: 9px 20px; display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }
        .ct-announce-strip span { color: rgba(255,255,255,0.9); font-size: 0.82rem; font-weight: 500; }
        .ct-announce-strip strong { color: #fff; }
        .ct-announce-strip .strip-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: #1e1b4b; font-weight: 800; font-size: 0.75rem;
          padding: 6px 14px; border-radius: 50px; border: none;
          cursor: pointer; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'Inter',sans-serif; transition: all 0.2s ease;
        }
        .ct-announce-strip .strip-btn:hover { transform: scale(1.05); }

        .ct-float-wa {
          position: fixed; bottom: 30px; left: 30px; z-index: 9000;
          width: 52px; height: 52px; border-radius: 50%;
          background: #25d366; color: #fff; font-size: 1.35rem;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; box-shadow: 0 6px 20px rgba(37,211,102,0.4);
          transition: all 0.25s ease;
        }
        .ct-float-wa:hover { transform: scale(1.12); color: #fff; }
        .ct-float-contact {
          position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
          z-index: 9001; display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 50px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff !important; font-weight: 700; font-size: 0.9rem;
          text-decoration: none; box-shadow: 0 8px 24px rgba(41,31,188,0.35);
          transition: all 0.25s ease; white-space: nowrap;
        }
        .ct-float-contact:hover { transform: translateX(-50%) translateY(-3px); color: #fff !important; }

        @media (max-width: 1023px) {
          .ct-nav-desktop, .ct-nav-right { display: none !important; }
        }
      `}</style>

      {/* ── Announcement Strip ── */}
      <div className="ct-announce-strip">
        <span><strong>🤖 ChittorTech AI Solutions</strong> — Enterprise AI Chatbots, Custom LLMs & Automation</span>
        <button className="strip-btn" data-bs-toggle="modal" data-bs-target="#trialModal">
          <i className="fa-solid fa-rocket"></i> Request AI Consultation
        </button>
      </div>

      {/* ── Main Header ── */}
      <header className={`ct-header-main ${scrolled ? "scrolled" : ""}`}>
        <div className="ct-header-inner">

          {/* Logo */}
          <Link href="/" className="ct-logo">
            <img src="/assets/images/ct-logo.png" alt="ChittorTech" />
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="ct-nav-desktop">

              {/* AI Products */}
              <li>
                <button
                  className={`ct-nav-btn ${activeDropdown === "aiProducts" ? "active" : ""}`}
                  onClick={() => toggleDropdown("aiProducts")}
                >
                  AI Solutions <i className="fa-solid fa-chevron-down chevron"></i>
                </button>
                <div className={`ct-dropdown ${activeDropdown === "aiProducts" ? "open" : ""}`} style={{ minWidth: "500px" }}>
                  <div className="ct-dropdown-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                    {NAV_ITEMS.aiProducts.map((item) => (
                      <Link key={item.label} href={item.href} className="ct-dropdown-link" onClick={() => setActiveDropdown(null)}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Industries */}
              <li>
                <button
                  className={`ct-nav-btn ${activeDropdown === "industries" ? "active" : ""}`}
                  onClick={() => toggleDropdown("industries")}
                >
                  Industries <i className="fa-solid fa-chevron-down chevron"></i>
                </button>
                <div className={`ct-mega-dropdown ${activeDropdown === "industries" ? "open" : ""}`}>
                  <div className="ct-mega-grid">
                    <div className="ct-mega-col">
                      <h6>Retail & FMCG</h6>
                      {NAV_ITEMS.industries.retail.map((l) => (
                        <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>{l.label}</Link>
                      ))}
                    </div>
                    <div className="ct-mega-col">
                      <h6>Fashion & Apparel</h6>
                      {NAV_ITEMS.industries.fashion.map((l) => (
                        <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>{l.label}</Link>
                      ))}
                    </div>
                    <div className="ct-mega-col">
                      <h6>Hospitality & Lodging</h6>
                      {NAV_ITEMS.industries.hospitality.map((l) => (
                        <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>{l.label}</Link>
                      ))}
                    </div>
                    <div className="ct-mega-col">
                      <h6>Enterprise & Healthcare</h6>
                      {NAV_ITEMS.industries.enterprise.map((l) => (
                        <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>{l.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* IT & Growth Services */}
              <li>
                <button
                  className={`ct-nav-btn ${activeDropdown === "services" ? "active" : ""}`}
                  onClick={() => toggleDropdown("services")}
                >
                  IT Services <i className="fa-solid fa-chevron-down chevron"></i>
                </button>
                <div className={`ct-dropdown ${activeDropdown === "services" ? "open" : ""}`} style={{ minWidth: "500px" }}>
                  <div className="ct-dropdown-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                    {NAV_ITEMS.services.map((item) => (
                      <Link key={item.label} href={item.href} className="ct-dropdown-link" onClick={() => setActiveDropdown(null)}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>


              <li>
                <Link href="/about-us" className="ct-nav-btn">About</Link>
              </li>
              <li>
                <Link href="/blog" className="ct-nav-btn">Blog</Link>
              </li>

            </ul>
          </nav>

          {/* Right CTAs */}
          <div className="ct-nav-right">
            <a href="tel:+917597451057" className="ct-phone-link">
              <i className="fa-solid fa-phone"></i> +91 7597451057
            </a>
            <Link href="/contact-us" className="ct-book-demo-btn">
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </header>

      {/* ── Floating Buttons ── */}
      <a href="#" onClick={handleWhatsApp} className="ct-float-wa" title="WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <Link href="/contact-us" className="ct-float-contact">
        <i className="fa-solid fa-envelope"></i> Contact Us
      </Link>
    </>
  );
}
