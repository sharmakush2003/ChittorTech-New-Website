"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        /* ─── Footer Wrapper ─── */
        .ct-footer-wrap {
          background: #f8fafc;
          color: #475569;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #e2e8f0;
        }
        .ct-footer-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #291fbc, #06b6d4, #291fbc);
          background-size: 200% 100%;
          animation: ct-footer-shimmer 4s linear infinite;
        }
        @keyframes ct-footer-shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .ct-footer-wrap::after {
          content: '';
          position: absolute;
          top: 0; left: -10%; right: -10%; bottom: 0;
          background:
            radial-gradient(ellipse 50% 30% at 10% 0%, rgba(41,31,188,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 25% at 90% 0%, rgba(6,182,212,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── CTA Strip ─── */
        .ct-footer-cta {
          position: relative; z-index: 1;
          border-bottom: 1px solid #e2e8f0;
          padding: 48px 0;
          background: linear-gradient(135deg, #eff6ff 0%, #f0fdfe 100%);
        }
        .ct-footer-cta-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .ct-footer-cta-text h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem; font-weight: 800; color: #0f172a;
          margin: 0 0 6px;
        }
        .ct-footer-cta-text p {
          font-size: 0.9rem; color: #64748b; margin: 0;
        }
        .ct-footer-cta-btns {
          display: flex; gap: 12px; flex-wrap: wrap; flex-shrink: 0;
        }
        .ct-footer-cta-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 50px;
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          color: #fff !important; font-weight: 700; font-size: 0.875rem;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 8px 24px rgba(41,31,188,0.25);
          transition: all 0.25s ease;
        }
        .ct-footer-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(41,31,188,0.38);
          color: #fff !important;
        }
        .ct-footer-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 50px;
          background: transparent; color: #374151 !important;
          font-weight: 600; font-size: 0.875rem; text-decoration: none;
          border: 1.5px solid #d1d5db;
          transition: all 0.25s ease;
        }
        .ct-footer-cta-btn-ghost i { color: #25d366; }
        .ct-footer-cta-btn-ghost:hover {
          border-color: #25d366; color: #16a34a !important;
          background: rgba(37,211,102,0.05);
        }

        /* ─── Main Grid ─── */
        .ct-footer-main {
          position: relative; z-index: 1;
          padding: 64px 0 56px;
        }
        .ct-footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.1fr;
          gap: 52px;
        }

        /* ─── Brand Column ─── */
        .ct-footer-brand-logo {
          height: 44px; width: auto; object-fit: contain;
          display: block; margin-bottom: 20px;
          /* White logo → dark on white bg using invert filter */
          filter: invert(1) sepia(1) saturate(8) hue-rotate(200deg) brightness(0.75);
          transition: filter 0.25s ease;
        }
        .ct-footer-brand-logo:hover {
          filter: invert(1) sepia(1) saturate(10) hue-rotate(200deg) brightness(0.6);
        }
        .ct-footer-tagline {
          font-size: 0.88rem; line-height: 1.85;
          color: #64748b;
          margin-bottom: 28px; max-width: 300px;
        }
        .ct-footer-trust-row {
          display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px;
        }
        .ct-footer-trust-chip {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: rgba(41,31,188,0.06);
          border: 1px solid rgba(41,31,188,0.12);
          font-size: 0.72rem; font-weight: 600;
          color: #475569; letter-spacing: 0.3px;
        }
        .ct-footer-trust-chip i { color: #f59e0b; font-size: 0.7rem; }
        .ct-footer-socials { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-footer-social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          background: #fff;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          color: #64748b; text-decoration: none;
          font-size: 0.82rem; transition: all 0.25s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .ct-footer-social-btn:hover {
          background: linear-gradient(135deg, #291fbc, #06b6d4);
          border-color: transparent; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(41,31,188,0.25);
        }

        /* ─── Nav Columns ─── */
        .ct-footer-col-head {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 2px;
          color: #94a3b8;
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ct-footer-col-head::after {
          content: '';
          flex: 1; height: 1px;
          background: #e2e8f0;
        }
        .ct-footer-nav-link {
          display: flex; align-items: center; gap: 0;
          padding: 6px 0; text-decoration: none;
          font-size: 0.865rem; font-weight: 400;
          color: #64748b;
          transition: all 0.2s ease;
        }
        .ct-footer-nav-link span {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .ct-footer-nav-link i {
          font-size: 0.6rem; color: #291fbc;
          opacity: 0; margin-right: 0;
          transform: translateX(-6px);
          transition: all 0.2s ease;
        }
        .ct-footer-nav-link:hover { color: #291fbc; }
        .ct-footer-nav-link:hover i {
          opacity: 1; margin-right: 6px; transform: translateX(0);
        }
        .ct-footer-nav-link:hover span { transform: translateX(2px); }

        /* ─── Contact Column ─── */
        .ct-footer-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 16px;
        }
        .ct-footer-contact-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(41,31,188,0.07);
          border: 1px solid rgba(41,31,188,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #291fbc; font-size: 0.78rem; flex-shrink: 0;
        }
        .ct-footer-contact-text {
          font-size: 0.84rem; line-height: 1.65;
          color: #64748b;
        }
        .ct-footer-contact-text a {
          color: #374151; text-decoration: none;
          transition: color 0.2s;
        }
        .ct-footer-contact-text a:hover { color: #291fbc; }
        .ct-footer-contact-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #94a3b8;
          margin-bottom: 2px;
        }

        /* ─── Divider ─── */
        .ct-footer-divider {
          border: none; border-top: 1px solid #e2e8f0; margin: 0;
          position: relative; z-index: 1;
        }

        /* ─── Bottom Bar ─── */
        .ct-footer-bottom {
          position: relative; z-index: 1;
          padding: 22px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ct-footer-copy {
          font-size: 0.8rem; color: #94a3b8;
        }
        .ct-footer-copy a {
          color: #64748b; text-decoration: none;
          transition: color 0.2s;
        }
        .ct-footer-copy a:hover { color: #291fbc; }
        .ct-footer-copy .sep { margin: 0 8px; opacity: 0.4; }
        .ct-footer-bottom-right {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .ct-footer-badge-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: #fff;
          border: 1px solid #e2e8f0;
          font-size: 0.7rem; font-weight: 600;
          color: #64748b; letter-spacing: 0.3px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .ct-footer-badge-pill i { font-size: 0.68rem; }
        .ct-footer-badge-pill.ssl i { color: #10b981; }
        .ct-footer-badge-pill.ai i { color: #f59e0b; }
        .ct-footer-badge-pill.india i { color: #ef4444; }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ct-footer-grid { grid-template-columns: 1.8fr 1fr 1fr; gap: 36px; }
          .ct-footer-grid > div:last-child { grid-column: span 3; }
        }
        @media (max-width: 768px) {
          .ct-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .ct-footer-grid > div:first-child { grid-column: span 2; }
          .ct-footer-grid > div:last-child { grid-column: span 2; }
          .ct-footer-cta-inner { flex-direction: column; text-align: center; }
          .ct-footer-cta-btns { justify-content: center; }
          .ct-footer-main { padding: 48px 0 40px; }
          .ct-footer-cta { padding: 36px 0; }
        }
        @media (max-width: 480px) {
          .ct-footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .ct-footer-grid > div:first-child,
          .ct-footer-grid > div:last-child { grid-column: span 1; }
          .ct-footer-bottom { flex-direction: column; text-align: center; }
          .ct-footer-bottom-right { justify-content: center; }
          .ct-footer-cta-text h3 { font-size: 1.25rem; }
        }
      `}</style>

      <footer className="ct-footer-wrap">

        {/* ─── CTA Strip ─── */}
        <div className="ct-footer-cta">
          <div className="container">
            <div className="ct-footer-cta-inner">
              <div className="ct-footer-cta-text">
                <h3>Ready to transform your business with AI?</h3>
                <p>Book a free consultation with our experts — zero obligation, 100% value.</p>
              </div>
              <div className="ct-footer-cta-btns">
                <a href="/contact-us" className="ct-footer-cta-btn-primary">
                  <i className="fa-solid fa-rocket"></i> Get Free Consultation
                </a>
                <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer" className="ct-footer-cta-btn-ghost">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="ct-footer-main">
          <div className="container">
            <div className="ct-footer-grid">

              {/* Col 1: Brand */}
              <div>
                <img src="/assets/images/ct-logo.png" alt="ChittorTech" className="ct-footer-brand-logo" />
                <p className="ct-footer-tagline">
                  Empowering Indian businesses with cutting-edge AI Solutions, Custom LLMs, Enterprise Automation, POS &amp; ERP Systems, and Digital Growth Services.
                </p>
                <div className="ct-footer-trust-row">
                  <span className="ct-footer-trust-chip"><i className="fa-solid fa-shield-halved"></i> SSL Secured</span>
                  <span className="ct-footer-trust-chip"><i className="fa-solid fa-brain"></i> AI Powered</span>
                  <span className="ct-footer-trust-chip"><i className="fa-solid fa-award"></i> Made in India</span>
                </div>
                <div className="ct-footer-socials">
                  <a href="https://www.facebook.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://twitter.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Twitter / X"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.youtube.com/@chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>

              {/* Col 2: AI Solutions */}
              <div>
                <div className="ct-footer-col-head">AI Solutions</div>
                {[
                  { href: "/ai-chatbot-development", label: "AI Chatbots & Support" },
                  { href: "/erp", label: "Enterprise AI Workflows" },
                  { href: "/crm", label: "RAG Knowledge Base" },
                  { href: "/erp", label: "Custom LLM Fine-Tuning" },
                  { href: "/erp", label: "AI Predictive Analytics" },
                  { href: "/erp", label: "OCR & Document AI" },
                  { href: "/web-development-services", label: "Custom SaaS Development" },
                  { href: "/ai-manufacturing", label: "Computer Vision AI" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="ct-footer-nav-link">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>

              {/* Col 3: IT & Growth */}
              <div>
                <div className="ct-footer-col-head">IT & Growth</div>
                {[
                  { href: "/web-development-services", label: "Web Development" },
                  { href: "/e-commerce-website-development", label: "E-Commerce Solutions" },
                  { href: "/android-application", label: "Android Mobile Apps" },
                  { href: "/ios-application", label: "iOS Mobile Apps" },
                  { href: "/search-engine-optimization", label: "SEO Services" },
                  { href: "/digital-marketing-services", label: "Digital Marketing" },
                  { href: "/social-media-optimization", label: "Social Media (SMO)" },
                  { href: "/web-development-services", label: "Custom Portals" },
                ].map((l) => (
                  <Link key={l.label} href={l.href} className="ct-footer-nav-link">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>{l.label}</span>
                  </Link>
                ))}
              </div>

              {/* Col 4: Contact */}
              <div>
                <div className="ct-footer-col-head">Get in Touch</div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Office</div>
                    Chittorgarh, Rajasthan – 312001
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Call / WhatsApp</div>
                    <a href="tel:+917597451057">+91 7597451057</a>
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon"><i className="fa-solid fa-envelope"></i></div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">Email</div>
                    <a href="mailto:chittortech@gmail.com">chittortech@gmail.com</a>
                  </div>
                </div>

                <div className="ct-footer-contact-item">
                  <div className="ct-footer-contact-icon" style={{background:'rgba(37,211,102,0.08)',borderColor:'rgba(37,211,102,0.18)',color:'#16a34a'}}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="ct-footer-contact-text">
                    <div className="ct-footer-contact-label">WhatsApp</div>
                    <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer">Chat with us now</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <hr className="ct-footer-divider" />

        {/* ─── Bottom Bar ─── */}
        <div className="container">
          <div className="ct-footer-bottom">
            <div className="ct-footer-copy">
              © {new Date().getFullYear()} <a href="/">ChittorTech</a>.
              <span className="sep">·</span>
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="sep">·</span>
              <a href="/terms">Terms of Service</a>
              <span className="sep">·</span>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
            <div className="ct-footer-bottom-right">
              <span className="ct-footer-badge-pill ssl"><i className="fa-solid fa-shield-halved"></i> SSL Secured</span>
              <span className="ct-footer-badge-pill ai"><i className="fa-solid fa-brain"></i> AI Powered</span>
              <span className="ct-footer-badge-pill india"><i className="fa-solid fa-flag"></i> Made in India</span>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
