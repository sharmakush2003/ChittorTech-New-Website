"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .ct-footer-wrap {
          background: #0f172a;
          color: rgba(255,255,255,0.7);
          padding-top: 80px;
        }
        .ct-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 60px;
        }
        .ct-footer-brand-logo {
          height: 48px; width: auto; object-fit: contain;
          margin-bottom: 20px; display: block;
          filter: brightness(1.1);
        }
        .ct-footer-mission {
          font-size: 0.9rem; line-height: 1.8;
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px; max-width: 320px;
        }
        .ct-footer-socials { display: flex; gap: 10px; flex-wrap: wrap; }
        .ct-footer-social-btn {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); text-decoration: none;
          font-size: 0.85rem; transition: all 0.25s ease;
        }
        .ct-footer-social-btn:hover {
          background: #291fbc; border-color: #291fbc;
          color: #fff; transform: translateY(-3px);
        }
        .ct-footer-col-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.78rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: rgba(255,255,255,0.9);
          margin-bottom: 18px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .ct-footer-nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 5px 0; text-decoration: none;
          font-size: 0.875rem; font-weight: 400;
          color: rgba(255,255,255,0.55);
          transition: all 0.2s ease;
        }
        .ct-footer-nav-link::before {
          content: '›'; font-size: 1rem; color: #06b6d4;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .ct-footer-nav-link:hover {
          color: #fff; transform: translateX(4px);
        }
        .ct-footer-nav-link:hover::before { opacity: 1; }

        .ct-footer-contact-row {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 14px;
        }
        .ct-footer-contact-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(41,31,188,0.2);
          border: 1px solid rgba(41,31,188,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #06b6d4; font-size: 0.8rem; flex-shrink: 0; margin-top: 2px;
        }
        .ct-footer-contact-text { font-size: 0.85rem; line-height: 1.6; color: rgba(255,255,255,0.6); }
        .ct-footer-contact-text a { color: rgba(255,255,255,0.8); text-decoration: none; }
        .ct-footer-contact-text a:hover { color: #06b6d4; }

        .ct-footer-divider {
          border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 0;
        }
        .ct-footer-bottom {
          padding: 20px 0;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .ct-footer-copy {
          font-size: 0.82rem; color: rgba(255,255,255,0.4);
        }
        .ct-footer-copy a { color: rgba(255,255,255,0.55); text-decoration: none; }
        .ct-footer-copy a:hover { color: #06b6d4; }
        .ct-footer-badges { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ct-footer-badge-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 50px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.5);
        }
        .ct-footer-badge-pill i { color: #f59e0b; }

        @media (max-width: 1024px) {
          .ct-footer-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        @media (max-width: 640px) {
          .ct-footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .ct-footer-wrap { padding-top: 48px; }
          .ct-footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="ct-footer-wrap">
        <div className="container">
          <div className="ct-footer-grid">

            {/* Column 1: Brand */}
            <div>
              <img src="/assets/images/ct-logo.png" alt="ChittorTech" className="ct-footer-brand-logo" />
              <p className="ct-footer-mission">
                Empowering businesses across India with cutting-edge AI Solutions, Custom LLMs, Enterprise Automation, Web Development, and Digital Growth Services.
              </p>
              <div className="ct-footer-socials">
                <a href="https://www.facebook.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="Twitter / X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@chittortech" target="_blank" rel="noopener noreferrer" className="ct-footer-social-btn" title="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Column 2: AI Solutions */}
            <div>
              <div className="ct-footer-col-title">AI Solutions</div>
              {[
                { href: "/pos",           label: "AI Chatbots & Support" },
                { href: "/ai-solutions",           label: "Enterprise AI Workflows" },
                { href: "/ai-knowledge",           label: "RAG Knowledge Base" },
                { href: "/inventory",     label: "Custom LLM Fine-Tuning" },
                { href: "/accounting",    label: "AI Predictive Analytics" },
                { href: "/invoicing",     label: "OCR & Document AI" },
                { href: "/omnichannel",   label: "Custom SaaS Development" },
                { href: "/smart-retail",  label: "Computer Vision AI" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="ct-footer-nav-link">{l.label}</Link>
              ))}
            </div>

            {/* Column 3: IT & Growth Services */}
            <div>
              <div className="ct-footer-col-title">IT & Growth Services</div>
              {[
                { href: "/web-development-services",      label: "Web Development" },
                { href: "/e-commerce-website-development",label: "E-Commerce Solutions" },
                { href: "/android-application",           label: "Android Mobile Apps" },
                { href: "/ios-application",               label: "iOS Mobile Apps" },
                { href: "/search-engine-optimization",    label: "SEO Services" },
                { href: "/digital-marketing-services",    label: "Digital Marketing" },
                { href: "/social-media-optimization",     label: "Social Media (SMO)" },
                { href: "/custom-ai-knowledge-solutions",          label: "Custom Portals" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="ct-footer-nav-link">{l.label}</Link>
              ))}
            </div>

            {/* Column 4: Contact */}
            <div>
              <div className="ct-footer-col-title">Contact Us</div>

              <div className="ct-footer-contact-row">
                <div className="ct-footer-contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="ct-footer-contact-text">
                  Office No. 204, 2nd Floor, Kanishka Tower,<br />
                  Bhupalpura, Udaipur, Rajasthan – 313001
                </div>
              </div>
              <div className="ct-footer-contact-row">
                <div className="ct-footer-contact-icon"><i className="fa-solid fa-phone"></i></div>
                <div className="ct-footer-contact-text">
                  <a href="tel:+917425016636">+91 7425016636</a><br />
                  <a href="tel:+919829109078">+91 9829109078</a>
                </div>
              </div>
              <div className="ct-footer-contact-row">
                <div className="ct-footer-contact-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="ct-footer-contact-text">
                  <a href="mailto:info@chittortech.com">info@chittortech.com</a>
                </div>
              </div>
              <div className="ct-footer-contact-row">
                <div className="ct-footer-contact-icon"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="ct-footer-contact-text">
                  <a href="https://wa.me/917425016636" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className="ct-footer-divider" />

        <div className="container">
          <div className="ct-footer-bottom">
            <div className="ct-footer-copy">
              © 2026 <a href="/">ChittorTech</a>. All rights reserved. &nbsp;·&nbsp;
              <a href="/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp;
              <a href="/terms">Terms of Service</a>
            </div>
            <div className="ct-footer-badges">
              <span className="ct-footer-badge-pill"><i className="fa-solid fa-shield-halved"></i> SSL Secured</span>
              <span className="ct-footer-badge-pill"><i className="fa-solid fa-brain"></i> AI Powered</span>
              <span className="ct-footer-badge-pill"><i className="fa-solid fa-award"></i> Made in India</span>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
