"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = {
  aiProducts: [
    { href: "/crm",                      icon: "fa-robot",           label: "AI Support Chatbots",       desc: "Bilingual AI assistants" },
    { href: "/erp",                      icon: "fa-diagram-project", label: "AI Workflow Automation",    desc: "End-to-end automation" },
    { href: "/crm",                      icon: "fa-brain",           label: "RAG Knowledge Base",        desc: "Vector search & LLMs" },
    { href: "/erp",                      icon: "fa-microchip",       label: "Custom LLM Training",       desc: "Fine-tuned AI models" },
    { href: "/erp",                      icon: "fa-chart-line",      label: "AI Predictive Analytics",   desc: "Data-driven insights" },
    { href: "/erp",                      icon: "fa-file-code",       label: "OCR & Document AI",         desc: "Smart doc processing" },
    { href: "/web-development-services", icon: "fa-laptop-code",     label: "Custom SaaS Apps",          desc: "Scalable cloud platforms" },
    { href: "/ai-manufacturing",         icon: "fa-eye",             label: "Computer Vision AI",        desc: "Image & defect detection" },
  ],
  industries: {
    retail: [
      { href: "/supermarket",           icon: "fa-store",          label: "Supermarkets & Retail Chains" },
      { href: "/kirana-store",          icon: "fa-shop",           label: "Kirana & General Stores" },
      { href: "/grocery-store",         icon: "fa-apple-whole",    label: "Grocery & FMCG Merchants" },
      { href: "/convenience-store",     icon: "fa-basket-shopping",label: "Convenience Stores" },
      { href: "/fruits-vegetable-shop", icon: "fa-leaf",           label: "Fresh Food & Agri Tech" },
    ],
    fashion: [
      { href: "/garments",              icon: "fa-shirt",          label: "Apparel & Garment Brands" },
      { href: "/boutique-store",        icon: "fa-bag-shopping",   label: "Fashion Boutiques & Labels" },
      { href: "/footwear-store",        icon: "fa-shoe-prints",    label: "Footwear & Shoe Chains" },
      { href: "/bridal-store",          icon: "fa-gem",            label: "Bridal & Luxury Stores" },
      { href: "/textile",               icon: "fa-scroll",         label: "Textile Mills & Fabrics" },
    ],
    hospitality: [
      { href: "/dharamshala-billing-system",  icon: "fa-torii-gate",    label: "Dharamshala Management" },
      { href: "/hotel-management-system",     icon: "fa-hotel",         label: "Hotel Management System" },
      { href: "/hotel-room-booking-system",   icon: "fa-bed",           label: "Hotel Room Booking" },
      { href: "/resort-guest-house-software", icon: "fa-umbrella-beach",label: "Resort & Guest House" },
      { href: "/online-booking-admin-portal", icon: "fa-calendar-check",label: "Online Booking Portal" },
    ],
    enterprise: [
      { href: "/hospitals",                        icon: "fa-hospital",       label: "Hospitals & Medical Centers" },
      { href: "/schools-educational-institutions", icon: "fa-graduation-cap", label: "Schools & EdTech" },
      { href: "/ai-manufacturing",                 icon: "fa-industry",       label: "Smart Manufacturing" },
      { href: "/industrial-products",              icon: "fa-building",       label: "Industrial B2B Suppliers" },
      { href: "/after-sale-service",               icon: "fa-screwdriver-wrench", label: "Warranty & Service Networks" },
    ],
  },
  services: [
    { href: "/web-development-services",       icon: "fa-code",             label: "Web Development",          desc: "Next.js, React, Node.js" },
    { href: "/e-commerce-website-development", icon: "fa-cart-shopping",    label: "E-Commerce Solutions",     desc: "Full-stack storefronts" },
    { href: "/android-application",            icon: "fa-android",          label: "Android Mobile Apps",      desc: "Native & cross-platform" },
    { href: "/search-engine-optimization",     icon: "fa-magnifying-glass", label: "SEO Growth Services",      desc: "Rank #1 on Google" },
    { href: "/digital-marketing-services",     icon: "fa-bullhorn",         label: "Digital Marketing",        desc: "Ads, leads, ROI" },
    { href: "/social-media-optimization",      icon: "fa-thumbs-up",        label: "Social Media (SMO)",       desc: "Grow your audience" },
    { href: "/web-development-services",       icon: "fa-database",         label: "Custom Enterprise Portals",desc: "CRM, ERP, dashboards" },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled]           = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open("https://wa.me/917597451057", "_blank");
  };

  const toggleDropdown = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  return (
    <>
      <style>{`
        /* ─── Announcement Strip ─── */
        .ct-strip {
          background: linear-gradient(90deg, #0f0b2e 0%, #1e1b4b 50%, #0f0b2e 100%);
          background-size: 200% 100%;
          animation: ct-strip-move 6s linear infinite;
          padding: 8px 20px;
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; position: relative; overflow: hidden;
        }
        @keyframes ct-strip-move {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .ct-strip::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 200% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-strip-text {
          font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.8);
          display: flex; align-items: center; gap: 8px;
        }
        .ct-strip-text strong { color: #fff; }
        .ct-strip-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #06b6d4;
          animation: ct-strip-pulse 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes ct-strip-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        .ct-strip-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: #0f0b2e !important; font-weight: 800; font-size: 0.72rem;
          padding: 5px 14px; border-radius: 50px; border: none;
          cursor: pointer; letter-spacing: 0.6px; text-transform: uppercase;
          font-family: 'Inter', sans-serif; transition: all 0.2s ease;
          text-decoration: none; flex-shrink: 0;
        }
        .ct-strip-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 4px 16px rgba(245,158,11,0.4);
        }

        /* ─── Main Header ─── */
        .ct-header {
          position: sticky; top: 0; z-index: 1000;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .ct-header-bar {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(226,232,240,0.9);
          transition: all 0.35s ease;
        }
        .ct-header.scrolled .ct-header-bar {
          background: rgba(255,255,255,0.99);
          box-shadow: 0 4px 32px rgba(41,31,188,0.12), 0 1px 0 rgba(41,31,188,0.06);
          border-bottom-color: rgba(41,31,188,0.1);
        }
        .ct-header-inner {
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; padding: 0 28px;
          max-width: 1360px; margin: 0 auto; gap: 12px;
        }

        /* ─── Logo ─── */
        .ct-logo {
          display: flex; align-items: center; flex-shrink: 0;
          text-decoration: none;
        }
        .ct-logo img {
          height: 42px; width: auto; object-fit: contain;
          transition: filter 0.25s ease;
          /* White logo → make it show on white bg using invert + brand color */
          filter: invert(1) sepia(1) saturate(8) hue-rotate(200deg) brightness(0.75);
        }
        .ct-logo:hover img {
          filter: invert(1) sepia(1) saturate(10) hue-rotate(200deg) brightness(0.65);
          transform: scale(1.02);
        }

        /* ─── Desktop Nav ─── */
        .ct-nav {
          display: flex; align-items: center; gap: 1px;
          list-style: none; margin: 0; padding: 0;
        }
        .ct-nav > li { position: relative; }

        .ct-nav-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 13px; border-radius: 9px;
          font-size: 0.855rem; font-weight: 600; color: #1e293b;
          background: transparent; border: none; cursor: pointer;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          transition: all 0.2s ease; white-space: nowrap;
          text-decoration: none; letter-spacing: -0.1px;
          position: relative;
        }
        .ct-nav-btn::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%; right: 50%;
          height: 2px; border-radius: 2px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          transition: all 0.25s ease;
        }
        .ct-nav-btn:hover::after, .ct-nav-btn.open::after {
          left: 10px; right: 10px;
        }
        .ct-nav-btn:hover, .ct-nav-btn.open {
          color: #291fbc; background: rgba(41,31,188,0.05);
        }
        .ct-nav-chevron {
          font-size: 0.58rem; color: #94a3b8;
          transition: transform 0.25s ease, color 0.2s;
        }
        .ct-nav-btn.open .ct-nav-chevron {
          transform: rotate(180deg); color: #291fbc;
        }

        /* ─── Dropdown Base ─── */
        .ct-drop {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: #fff;
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 18px;
          box-shadow: 0 24px 64px rgba(41,31,188,0.14), 0 8px 24px rgba(0,0,0,0.06);
          padding: 16px;
          z-index: 9990;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), visibility 0.22s;
        }
        .ct-drop.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        /* Left-aligned for last items */
        .ct-drop.align-right { left: auto; right: 0; transform: translateY(-10px); }
        .ct-drop.align-right.open { transform: translateY(0); }

        /* Arrow tip */
        .ct-drop::before {
          content: '';
          position: absolute; top: -6px; left: 50%; transform: translateX(-50%);
          width: 12px; height: 12px; background: #fff;
          border-top: 1px solid rgba(226,232,240,0.9);
          border-left: 1px solid rgba(226,232,240,0.9);
          transform: translateX(-50%) rotate(45deg);
          border-radius: 2px;
        }

        /* ─── Standard Dropdown Items ─── */
        .ct-drop-grid { display: grid; gap: 4px; }
        .ct-drop-item {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 12px; border-radius: 11px;
          text-decoration: none; transition: all 0.18s ease;
          cursor: pointer;
        }
        .ct-drop-item:hover { background: linear-gradient(135deg, rgba(41,31,188,0.05), rgba(6,182,212,0.04)); }
        .ct-drop-icon {
          width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
          background: rgba(41,31,188,0.08);
          border: 1px solid rgba(41,31,188,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #291fbc; font-size: 0.78rem;
          transition: all 0.18s ease;
        }
        .ct-drop-item:hover .ct-drop-icon {
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 12px rgba(41,31,188,0.3);
        }
        .ct-drop-text { min-width: 0; }
        .ct-drop-label {
          font-size: 0.845rem; font-weight: 600; color: #1e293b;
          display: block; line-height: 1.3;
          transition: color 0.18s;
        }
        .ct-drop-item:hover .ct-drop-label { color: #291fbc; }
        .ct-drop-desc {
          font-size: 0.74rem; color: #94a3b8; display: block; margin-top: 1px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* ─── Mega Dropdown ─── */
        .ct-mega {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: #fff;
          border: 1px solid rgba(226,232,240,0.9);
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(41,31,188,0.14), 0 8px 24px rgba(0,0,0,0.06);
          padding: 24px; min-width: 880px; z-index: 9990;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), visibility 0.22s;
        }
        .ct-mega.open {
          opacity: 1; visibility: visible; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .ct-mega::before {
          content: '';
          position: absolute; top: -6px; left: 50%; transform: translateX(-50%) rotate(45deg);
          width: 12px; height: 12px; background: #fff;
          border-top: 1px solid rgba(226,232,240,0.9);
          border-left: 1px solid rgba(226,232,240,0.9);
          border-radius: 2px;
        }
        .ct-mega-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        .ct-mega-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem; font-weight: 800; color: #0f172a;
        }
        .ct-mega-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: linear-gradient(135deg, rgba(41,31,188,0.08), rgba(6,182,212,0.08));
          border: 1px solid rgba(41,31,188,0.15);
          font-size: 0.7rem; font-weight: 700; color: #291fbc;
          letter-spacing: 0.5px; text-transform: uppercase;
        }
        .ct-mega-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 0;
        }
        .ct-mega-col {
          padding: 0 16px 0 0; border-right: 1px solid #f1f5f9;
        }
        .ct-mega-col:last-child { border-right: none; padding-right: 0; }
        .ct-mega-col:not(:first-child) { padding-left: 16px; }
        .ct-mega-col-head {
          font-size: 0.68rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: rgba(41,31,188,0.5);
          margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
        }
        .ct-mega-col-head i { font-size: 0.7rem; }
        .ct-mega-link {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 8px; border-radius: 8px;
          text-decoration: none; font-size: 0.835rem; font-weight: 500;
          color: #475569; transition: all 0.18s ease;
          margin-bottom: 1px;
        }
        .ct-mega-link i {
          font-size: 0.72rem; color: #94a3b8; width: 14px; flex-shrink: 0;
          transition: color 0.18s;
        }
        .ct-mega-link:hover {
          background: rgba(41,31,188,0.05); color: #291fbc;
          transform: translateX(3px);
        }
        .ct-mega-link:hover i { color: #291fbc; }

        /* ─── Nav Right ─── */
        .ct-nav-right {
          display: flex; align-items: center; gap: 8px; flex-shrink: 0;
        }
        .ct-phone-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px; border-radius: 9px;
          border: 1.5px solid #e2e8f0;
          color: #374151; font-size: 0.82rem; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          transition: all 0.2s ease; background: transparent;
        }
        .ct-phone-btn i { color: #291fbc; font-size: 0.78rem; }
        .ct-phone-btn:hover {
          border-color: #291fbc; color: #291fbc;
          background: rgba(41,31,188,0.04);
          box-shadow: 0 0 0 3px rgba(41,31,188,0.06);
        }
        .ct-cta-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: 10px;
          background: linear-gradient(135deg, #291fbc 0%, #1d4ed8 50%, #06b6d4 100%);
          background-size: 200% 100%;
          color: #fff !important; font-size: 0.855rem; font-weight: 700;
          border: none; cursor: pointer; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          box-shadow: 0 4px 16px rgba(41,31,188,0.3);
          transition: all 0.3s ease; white-space: nowrap; text-decoration: none;
          letter-spacing: -0.1px;
        }
        .ct-cta-btn:hover {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(41,31,188,0.42);
          color: #fff !important;
        }
        .ct-cta-btn i { transition: transform 0.25s ease; }
        .ct-cta-btn:hover i { transform: translateX(3px); }

        /* ─── Hamburger ─── */
        .ct-hamburger {
          display: none; flex-direction: column; gap: 5px;
          width: 36px; height: 36px; border: none; background: transparent;
          cursor: pointer; padding: 6px; border-radius: 8px;
          align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .ct-hamburger:hover { background: rgba(41,31,188,0.06); }
        .ct-hamburger span {
          width: 20px; height: 2px; border-radius: 2px;
          background: #1e293b; transition: all 0.3s ease;
          display: block;
        }
        .ct-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ct-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ct-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ─── Mobile Drawer ─── */
        .ct-mobile-overlay {
          display: none;
          position: fixed; inset: 0; background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px); z-index: 8000;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .ct-mobile-overlay.open { opacity: 1; }
        .ct-mobile-drawer {
          position: fixed; top: 0; right: -100%; bottom: 0;
          width: min(340px, 88vw);
          background: #fff; z-index: 8001;
          box-shadow: -24px 0 80px rgba(0,0,0,0.18);
          transition: right 0.35s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column; overflow-y: auto;
        }
        .ct-mobile-drawer.open { right: 0; }
        .ct-mobile-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid #f1f5f9;
          flex-shrink: 0;
        }
        .ct-mobile-head img { height: 36px; object-fit: contain; }
        .ct-mobile-close {
          width: 34px; height: 34px; border-radius: 8px;
          border: 1px solid #e2e8f0; background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; font-size: 0.85rem; transition: all 0.2s;
        }
        .ct-mobile-close:hover { background: #fee2e2; border-color: #fca5a5; color: #ef4444; }
        .ct-mobile-nav { padding: 12px 12px; flex: 1; }
        .ct-mobile-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 12px; border-radius: 10px; text-decoration: none;
          font-size: 0.9rem; font-weight: 600; color: #1e293b;
          transition: all 0.2s; cursor: pointer; background: transparent; border: none;
          width: 100%; font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
          letter-spacing: -0.1px;
        }
        .ct-mobile-link:hover, .ct-mobile-link.active {
          background: rgba(41,31,188,0.05); color: #291fbc;
        }
        .ct-mobile-link i.chevron { font-size: 0.6rem; color: #94a3b8; transition: transform 0.25s; }
        .ct-mobile-link.active i.chevron { transform: rotate(180deg); color: #291fbc; }
        .ct-mobile-sub {
          overflow: hidden; max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
          padding-left: 12px;
        }
        .ct-mobile-sub.open { max-height: 600px; }
        .ct-mobile-sub-link {
          display: block; padding: 8px 12px; border-radius: 8px;
          font-size: 0.835rem; font-weight: 500; color: #475569;
          text-decoration: none; transition: all 0.18s;
        }
        .ct-mobile-sub-link:hover { background: rgba(41,31,188,0.04); color: #291fbc; }
        .ct-mobile-sub-head {
          font-size: 0.66rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 1.5px; color: #94a3b8; padding: 10px 12px 4px;
        }
        .ct-mobile-divider { height: 1px; background: #f1f5f9; margin: 8px 0; }
        .ct-mobile-footer {
          padding: 16px 16px 20px;
          border-top: 1px solid #f1f5f9;
          display: flex; flex-direction: column; gap: 10px;
          flex-shrink: 0;
        }
        .ct-mobile-cta-primary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 20px; border-radius: 12px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff !important; font-weight: 700; font-size: 0.9rem;
          text-decoration: none; box-shadow: 0 4px 16px rgba(41,31,188,0.3);
          transition: all 0.2s;
        }
        .ct-mobile-cta-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(41,31,188,0.4); }
        .ct-mobile-cta-secondary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border-radius: 12px;
          border: 1.5px solid #e2e8f0; color: #374151 !important;
          font-weight: 600; font-size: 0.88rem; text-decoration: none;
          transition: all 0.2s;
        }
        .ct-mobile-cta-secondary:hover { border-color: #291fbc; color: #291fbc !important; }

        /* ─── Floating Buttons ─── */
        .ct-float-wa {
          position: fixed; bottom: 30px; left: 30px; z-index: 9000;
          width: 52px; height: 52px; border-radius: 50%;
          background: #25d366; color: #fff; font-size: 1.35rem;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4);
          transition: all 0.25s ease;
          animation: ct-wa-pulse 2.5s ease-in-out infinite;
        }
        @keyframes ct-wa-pulse {
          0%   { box-shadow: 0 6px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4); }
          70%  { box-shadow: 0 6px 20px rgba(37,211,102,0.45), 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 6px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
        }
        .ct-float-wa:hover { transform: scale(1.12); color: #fff; animation: none; }
        .ct-float-contact {
          position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
          z-index: 9001; display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 26px; border-radius: 50px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff !important; font-weight: 700; font-size: 0.88rem;
          text-decoration: none; box-shadow: 0 8px 24px rgba(41,31,188,0.38);
          transition: all 0.25s ease; white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .ct-float-contact:hover {
          transform: translateX(-50%) translateY(-3px);
          box-shadow: 0 14px 36px rgba(41,31,188,0.48);
          color: #fff !important;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ct-nav, .ct-nav-right { display: none !important; }
          .ct-hamburger { display: flex !important; }
          .ct-mobile-overlay { display: block; }
          .ct-mobile-drawer { display: flex; }
        }
        @media (max-width: 480px) {
          .ct-float-contact { font-size: 0.78rem; padding: 10px 18px; }
          .ct-strip { gap: 10px; }
        }
      `}</style>

      {/* ── Announcement Strip ── */}
      <div className="ct-strip">
        <div className="ct-strip-dot"></div>
        <span className="ct-strip-text">
          <strong>🤖 ChittorTech AI Solutions</strong> — Enterprise AI Chatbots, Custom LLMs &amp; Automation for Indian Businesses
        </span>
        <button className="ct-strip-btn" data-bs-toggle="modal" data-bs-target="#trialModal">
          <i className="fa-solid fa-rocket"></i> Free Consultation
        </button>
      </div>

      {/* ── Main Header ── */}
      <div className={`ct-header ${scrolled ? "scrolled" : ""}`} ref={headerRef}>
        <div className="ct-header-bar">
          <div className="ct-header-inner">

            {/* Logo */}
            <Link href="/" className="ct-logo">
              <img src="/assets/images/ct-logo.png" alt="ChittorTech" />
            </Link>

            {/* Desktop Nav */}
            <nav>
              <ul className="ct-nav">

                {/* AI Solutions */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "ai" ? "open" : ""}`}
                    onClick={() => toggleDropdown("ai")}
                    onMouseEnter={() => setActiveDropdown("ai")}
                  >
                    AI Solutions <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-drop ${activeDropdown === "ai" ? "open" : ""}`}
                    style={{ minWidth: "540px" }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-drop-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                      {NAV_ITEMS.aiProducts.map((item) => (
                        <Link key={item.label} href={item.href} className="ct-drop-item" onClick={() => setActiveDropdown(null)}>
                          <div className="ct-drop-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                          <div className="ct-drop-text">
                            <span className="ct-drop-label">{item.label}</span>
                            <span className="ct-drop-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Industries */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "industries" ? "open" : ""}`}
                    onClick={() => toggleDropdown("industries")}
                    onMouseEnter={() => setActiveDropdown("industries")}
                  >
                    Industries <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-mega ${activeDropdown === "industries" ? "open" : ""}`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-mega-header">
                      <span className="ct-mega-title">Industries We Serve</span>
                      <span className="ct-mega-badge"><i className="fa-solid fa-star"></i> 20+ Verticals</span>
                    </div>
                    <div className="ct-mega-grid">
                      <div className="ct-mega-col">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-store"></i> Retail & FMCG</div>
                        {NAV_ITEMS.industries.retail.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-shirt"></i> Fashion & Apparel</div>
                        {NAV_ITEMS.industries.fashion.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-hotel"></i> Hospitality</div>
                        {NAV_ITEMS.industries.hospitality.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                      <div className="ct-mega-col">
                        <div className="ct-mega-col-head"><i className="fa-solid fa-building"></i> Enterprise</div>
                        {NAV_ITEMS.industries.enterprise.map((l) => (
                          <Link key={l.href} href={l.href} className="ct-mega-link" onClick={() => setActiveDropdown(null)}>
                            <i className={`fa-solid ${l.icon}`}></i>{l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* IT Services */}
                <li>
                  <button
                    className={`ct-nav-btn ${activeDropdown === "services" ? "open" : ""}`}
                    onClick={() => toggleDropdown("services")}
                    onMouseEnter={() => setActiveDropdown("services")}
                  >
                    IT Services <i className="fa-solid fa-chevron-down ct-nav-chevron"></i>
                  </button>
                  <div
                    className={`ct-drop ${activeDropdown === "services" ? "open" : ""}`}
                    style={{ minWidth: "540px" }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="ct-drop-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                      {NAV_ITEMS.services.map((item) => (
                        <Link key={item.label} href={item.href} className="ct-drop-item" onClick={() => setActiveDropdown(null)}>
                          <div className="ct-drop-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                          <div className="ct-drop-text">
                            <span className="ct-drop-label">{item.label}</span>
                            <span className="ct-drop-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li><Link href="/about-us" className="ct-nav-btn">About</Link></li>
                <li><Link href="/blog" className="ct-nav-btn">Blog</Link></li>

              </ul>
            </nav>

            {/* Right CTAs */}
            <div className="ct-nav-right">
              <a href="tel:+917597451057" className="ct-phone-btn">
                <i className="fa-solid fa-phone"></i> +91 75974 51057
              </a>
              <Link href="/contact-us" className="ct-cta-btn">
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className={`ct-hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>

          </div>
        </div>
      </div>

      {/* ── Mobile Overlay ── */}
      <div className={`ct-mobile-overlay ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(false)} />

      {/* ── Mobile Drawer ── */}
      <div className={`ct-mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="ct-mobile-head">
          <img src="/assets/images/ct-logo.png" alt="ChittorTech" />
          <button className="ct-mobile-close" onClick={() => setMobileOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="ct-mobile-nav">
          {/* AI Solutions */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "ai" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
          >
            <span><i className="fa-solid fa-robot" style={{marginRight:"8px",color:"#291fbc"}}></i>AI Solutions</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "ai" ? "open" : ""}`}>
            {NAV_ITEMS.aiProducts.map((item) => (
              <Link key={item.label} href={item.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Industries */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "industries" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
          >
            <span><i className="fa-solid fa-store" style={{marginRight:"8px",color:"#291fbc"}}></i>Industries</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "industries" ? "open" : ""}`}>
            <div className="ct-mobile-sub-head">Retail & FMCG</div>
            {NAV_ITEMS.industries.retail.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Fashion & Apparel</div>
            {NAV_ITEMS.industries.fashion.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Hospitality</div>
            {NAV_ITEMS.industries.hospitality.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
            <div className="ct-mobile-sub-head">Enterprise</div>
            {NAV_ITEMS.industries.enterprise.map((l) => (
              <Link key={l.href} href={l.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>

          {/* IT Services */}
          <button
            className={`ct-mobile-link ${mobileExpanded === "services" ? "active" : ""}`}
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            <span><i className="fa-solid fa-laptop-code" style={{marginRight:"8px",color:"#291fbc"}}></i>IT Services</span>
            <i className="fa-solid fa-chevron-down chevron"></i>
          </button>
          <div className={`ct-mobile-sub ${mobileExpanded === "services" ? "open" : ""}`}>
            {NAV_ITEMS.services.map((item) => (
              <Link key={item.label} href={item.href} className="ct-mobile-sub-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ct-mobile-divider" />
          <Link href="/about-us" className="ct-mobile-link" onClick={() => setMobileOpen(false)}>
            <span><i className="fa-solid fa-circle-info" style={{marginRight:"8px",color:"#94a3b8"}}></i>About Us</span>
          </Link>
          <Link href="/blog" className="ct-mobile-link" onClick={() => setMobileOpen(false)}>
            <span><i className="fa-solid fa-newspaper" style={{marginRight:"8px",color:"#94a3b8"}}></i>Blog</span>
          </Link>
        </div>

        <div className="ct-mobile-footer">
          <Link href="/contact-us" className="ct-mobile-cta-primary" onClick={() => setMobileOpen(false)}>
            <i className="fa-solid fa-rocket"></i> Get Started Free
          </Link>
          <a href="tel:+917597451057" className="ct-mobile-cta-secondary">
            <i className="fa-solid fa-phone" style={{color:"#291fbc"}}></i> +91 75974 51057
          </a>
        </div>
      </div>

      {/* ── Floating Buttons ── */}
      <a href="#" onClick={handleWhatsApp} className="ct-float-wa" title="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <Link href="/contact-us" className="ct-float-contact">
        <i className="fa-solid fa-envelope"></i> Contact Us
      </Link>
    </>
  );
}
