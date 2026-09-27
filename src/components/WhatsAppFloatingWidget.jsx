"use client";

import React, { useState, useEffect } from "react";

export default function WhatsAppFloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance slightly for optimal conversion impact
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = "917597451057";
  const defaultMessage = encodeURIComponent(
    "Hello ChittorTech team, I want to get a personalized project quote and consultation for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="whatsapp-floating-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn animate__animated animate__pulse animate__infinite"
        title="Get Instant Quote on WhatsApp (+91 7597451057)"
        aria-label="Chat on WhatsApp with ChittorTech"
      >
        <div className="whatsapp-icon-wrapper">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="whatsapp-text-content">
          <span className="whatsapp-badge">⚡ Instant Quote</span>
          <span className="whatsapp-main-text">Chat on WhatsApp</span>
        </div>
      </a>

      <style jsx>{`
        .whatsapp-floating-container {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 99999;
          font-family: "Plus Jakarta Sans", "Inter", sans-serif;
          white-space: nowrap;
        }

        .whatsapp-floating-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #ffffff !important;
          padding: 8px 20px 8px 10px;
          border-radius: 50px;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.18);
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
        }

        .whatsapp-floating-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.65), 0 6px 16px rgba(0, 0, 0, 0.22);
          background: linear-gradient(135deg, #20bd5a 0%, #0e7065 100%);
          color: #ffffff !important;
        }

        .whatsapp-icon-wrapper {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .whatsapp-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
        }

        .whatsapp-badge {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #e8fdf0;
          background: rgba(0, 0, 0, 0.18);
          padding: 2px 6px;
          border-radius: 4px;
          margin-bottom: 2px;
        }

        .whatsapp-main-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .whatsapp-floating-container {
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
          }

          .whatsapp-floating-btn {
            padding: 7px 14px 7px 8px;
            gap: 8px;
          }

          .whatsapp-icon-wrapper {
            width: 32px;
            height: 32px;
            font-size: 18px;
          }

          .whatsapp-badge {
            font-size: 0.58rem;
          }

          .whatsapp-main-text {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-floating-container {
            bottom: 18px;
          }
          
          .whatsapp-main-text {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
}

