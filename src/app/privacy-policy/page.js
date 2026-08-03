import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ChittorTech",
  description: "Read the Privacy Policy of ChittorTech. Learn how we protect your data, security, and project confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div style={{ background: "#ffffff", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)", border: "1px solid #e2e8f0" }}>
          
          <span style={{ display: "inline-block", background: "#eef2ff", color: "#2563eb", fontWeight: "700", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "20px", marginBottom: "16px", border: "1px solid #c7d2fe" }}>
            LEGAL & TRANSPARENCY
          </span>
          
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.4rem", fontWeight: "800", marginBottom: "20px", color: "#0f172a" }}>
            Privacy Policy
          </h1>
          
          <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "28px" }}>
            At ChittorTech, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, applications, and services.
          </p>

          <hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

          <div style={{ color: "#334155", lineHeight: "1.8", fontSize: "1rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>1. Information We Collect</h3>
            <p>We may collect the following information:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              <li>Name and contact information (email address)</li>
              <li>Business/project requirements</li>
              <li>Technical information such as browser type, device information, and IP address</li>
              <li>Any information voluntarily shared through contact forms or communication channels</li>
            </ul>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>2. How We Use Information</h3>
            <p>The collected information is used for:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              <li>Project communication and consultation</li>
              <li>Providing technical support and customer service</li>
              <li>Improving our website, applications, and services</li>
              <li>Responding to inquiries and service requests</li>
              <li>Maintaining security and preventing fraudulent activities</li>
            </ul>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>3. Data Protection & Security</h3>
            <p>ChittorTech takes appropriate technical and organizational measures to protect your personal data against unauthorized access, misuse, disclosure, or loss.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>4. Confidentiality</h3>
            <p>Any sensitive business or project-related information shared with ChittorTech during development or consultation will be treated as strictly confidential.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>5. Third-Party Services</h3>
            <p>We may use trusted third-party services such as Google Analytics, Firebase, Cloud hosting providers, and Payment gateways for functionality and analytics.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>6. Cookies</h3>
            <p>Our website may use cookies to improve user experience, website functionality, and analytics performance.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>7. Data Sharing</h3>
            <p>We do not sell, trade, or rent users’ personal information to third parties for marketing purposes.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>8. User Rights</h3>
            <p>Users may request access to their personal data, correction of inaccurate information, or deletion of personal information subject to legal obligations.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>9. External Links</h3>
            <p>Our website or applications may contain links to external websites. We are not responsible for the privacy practices of third-party websites.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>10. Changes to This Policy</h3>
            <p>ChittorTech reserves the right to update this Privacy Policy at any time. Updates will be posted on this page.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>11. Contact Us</h3>
            <p>If you have any questions regarding this Privacy Policy, you may contact us at:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              <li><strong>Email:</strong> chittortech@gmail.com</li>
              <li><strong>Website:</strong> ChittorTech</li>
            </ul>
          </div>

          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #e2e8f0" }}>
            <Link href="/" className="ct-btn ct-btn-primary">
              ← Return to Home Page
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
