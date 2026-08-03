import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | ChittorTech",
  description: "Read the Terms & Conditions of ChittorTech governing project scopes, payments, timelines, and legal agreements.",
};

export default function TermsPage() {
  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <div style={{ background: "#ffffff", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)", border: "1px solid #e2e8f0" }}>
          
          <span style={{ display: "inline-block", background: "#eef2ff", color: "#2563eb", fontWeight: "700", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "20px", marginBottom: "16px", border: "1px solid #c7d2fe" }}>
            TERMS & SERVICE AGREEMENTS
          </span>
          
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.4rem", fontWeight: "800", marginBottom: "20px", color: "#0f172a" }}>
            Terms & Conditions
          </h1>
          
          <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "1.05rem", marginBottom: "28px" }}>
            Welcome to ChittorTech. By accessing our website, services, or engaging in any project with us, you agree to the following Terms & Conditions.
          </p>

          <hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

          <div style={{ color: "#334155", lineHeight: "1.8", fontSize: "1rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>1. Project Scope & Requirement Approval</h3>
            <p>Before project initiation, ChittorTech will discuss and document project requirements through a Software Requirement Specification (SRS) or mutually agreed scope document.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>2. Payment Policy</h3>
            <p>A minimum advance payment is required before project development begins. Remaining payments must be completed according to agreed project milestones.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>3. Project Timeline & Demo</h3>
            <p>Estimated timelines are provided based on project complexity. Initial demos or previews may be shared during development for client review.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>4. Client Review & Acceptance</h3>
            <p>Clients are requested to review delivered work within a reasonable period and report any functional issues or concerns.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>5. Intellectual Property</h3>
            <p>Clients receive usage rights for the delivered project for their intended business operations upon full payment settlement.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>6. Limitation of Liability</h3>
            <p>ChittorTech shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, software, or website.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>7. Governing Jurisdiction</h3>
            <p>Any legal disputes shall be subject to the jurisdiction of the courts located in Chittorgarh, Rajasthan, India.</p>

            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1e293b", marginTop: "24px", marginBottom: "12px" }}>8. Contact Information</h3>
            <p>For any questions regarding these Terms & Conditions, you may contact:</p>
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
