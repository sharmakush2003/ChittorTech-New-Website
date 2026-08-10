"use client";
import React, { useState } from "react";
import "../../../public/assets/css/premium-products.css";

export default function GooglePlayPublishingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null);

  const POLICY_DETAILS = {
    your_account: {
      title: "Publishing Policy (Your Account)",
      themeColor: "#3b82f6",
      icon: "fa-circle-info text-primary",
      intro: "Since you are publishing on your own developer console, ChittorTech acts as your setup and development partner.",
      points: [
        "Store Listing Optimization (ASO) setup is completed using your approved metadata.",
        "We perform a pre-submission policy review to check for potential Google Play violations to ensure a smooth review process.",
        "You are responsible for providing all legal store assets, icons, and contact details.",
        "Since the app is hosted on your console, ChittorTech is not responsible for any post-launch policy actions, warnings, or account suspensions issued by Google."
      ],
      notice: ""
    },
    chittortech_account: {
      title: "Publishing & Abuse Policy (ChittorTech Console)",
      themeColor: "#ef4444",
      icon: "fa-triangle-exclamation text-danger",
      intro: "Because you are publishing under ChittorTech's verified corporate developer console, we maintain strict policy controls to protect our console health.",
      points: [
        "Zero-tolerance policy against malware, phishing, clone code, gambling, or policy-violating applications.",
        "All app bundles (AAB) undergo strict manual and automated policy audits before uploading.",
        "Clients must ensure their app meets all local government regulations and licensing requirements."
      ],
      notice: "To safeguard our developer account and ensure uninterrupted service for all hosted applications, clients are requested to strictly adhere to Google Play guidelines. In case of major violations leading to account suspensions or warnings, the client will be held responsible for any damages caused to the platform."
    },
    full_setup: {
      title: "Developer Console Setup Policy",
      themeColor: "#06b6d4",
      icon: "fa-gears text-info",
      intro: "We assist and guide you in creating, verifying, and launching your own dedicated Google Play Developer Console.",
      points: [
        "The client is responsible for providing valid identity documents, business registrations, and D-U-N-S numbers as requested by Google.",
        "The standard Google developer registration fee ($25) is paid directly by the client (subject to change per Google's pricing updates).",
        "ChittorTech will configure Play Console settings, complete required setup forms, and launch your first app.",
        "Once setup is completed, full control and security of the console belongs to the client. ChittorTech is not responsible for future account standing."
      ],
      notice: ""
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const PACKAGES = [
    {
      title: "Publish on Your Account",
      priceUSD: "$99",
      priceINR: "₹8,299",
      popular: false,
      policyType: "your_account",
      desc: "Perfect for developers who already own a Google Play Console and want experts to handle compliance, asset setup, and submission.",
      features: [
        "Store Listing Setup (ASO)",
        "Pre-Submission Policy & Compliance Check",
        "AAB/APK Compilation & SDK Target Check",
        "Privacy Policy Hosting Setup",
        "Review Process Management",
        "1 Free App Update (within 30 days)"
      ],
      whatsappMsg: "Hi ChittorTech, I want to publish my app on my own Google Play Console ($99/₹8,299). I need help in publishing my app."
    },
    {
      title: "Publish on ChittorTech Account",
      priceUSD: "$199",
      priceINR: "₹16,599",
      popular: false,
      policyType: "chittortech_account",
      desc: "No developer account? No problem. Skip the $25 registration fee and identity verification. We publish your app on our verified organization console.",
      features: [
        "1-Year Hosting under ChittorTech Console (Renewable)",
        "Complete Store Asset Upload & Setup",
        "Strict Policy & Security Compliance Audit",
        "Privacy Policy Creation & Hosting",
        "Active Console Monitoring & Crash Alerts",
        "2 Free Updates per year"
      ],
      whatsappMsg: "Hi ChittorTech, I want to publish my app on ChittorTech's Google Play Console ($199/₹16,599). I need help in publishing my app."
    },
    {
      title: "Full Account Setup & Launch",
      priceUSD: "$299",
      priceINR: "₹25,499",
      popular: true,
      policyType: "full_setup",
      desc: "For businesses wanting their own dedicated developer console. We handle organization verification, setup, and publish the first app.",
      features: [
        "Organization / Individual Console Registration",
        "D-U-N-S Number Registration Guidance",
        "Business Identity & Document Verification Help",
        "Google API Console & Credentials Config",
        "First App Upload & Publishing Support",
        "1-Month Dedicated Account Support"
      ],
      whatsappMsg: "Hi ChittorTech, I want a complete Google Play Console setup and launch service ($299/₹25,499). I need help in publishing my app."
    }
  ];

  const FAQS = [
    {
      q: "Google Play Console par app publish karne me kitna time lagta hai?",
      a: "Naye Google rules ke mutabik, app review hone me aamtaur par 3 se 7 din ka samay lagta hai. Agar aapka account naya hai toh kabhi-kabhi verification aur review me 10-14 days bhi lag sakte hain."
    },
    {
      q: "What is Google's new 20-tester rule?",
      a: "Google ke naye rule ke mutabik, 13 November 2023 ke baad bane sabhi personal developer accounts ko app public karne se pehle closed testing me kam se kam 20 testers se 14 days tak continuous app test karwana compulsory hai. ChittorTech is rule ko complete karne me aapki help karta hai."
    },
    {
      q: "Kya mera app suspend hone ka khatra hai?",
      a: "Hum app publish karne se pehle poori compliance checking karte hain. Agar aapka app Google Play Developer Policies (jaise copyright infringement, local government regulations, adult content, spam) ko follow karta hai, toh suspension ka risk na ke barabar hota hai."
    },
    {
      q: "Hum kis tarah ke apps publish nahi karte?",
      a: "Apne console aur reputation ko safe rakhne ke liye hum Gambling (betting) apps, short-term loan apps (bina RBI/legal approvals), clone apps (jo kisi aur ke code ko directly copy karte hain), aur illegal content wale apps publish nahi karte hain."
    },
    {
      q: "Agar app update karna ho toh kya charge hoga?",
      a: "Humare packages me free updates included hain (jaisa package details me likha hai). Uske baad ke updates ke liye nominal custom fee li jaati hai, jise aap humse discuss kar sakte hain."
    }
  ];

  return (
    <>
      <style>{`
        /* Design System overrides & variables */
        .gplay-section {
          font-family: 'Inter', sans-serif;
          color: #1e293b;
        }
        .gplay-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
        }
        .gplay-hero .gplay-title,
        .gplay-cta-title {
          color: #ffffff !important;
        }
        .gplay-hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e3a8a 100%);
          color: #fff;
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .gplay-hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 75%);
          top: -200px;
          right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }
        .gplay-hero::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 75%);
          bottom: -100px;
          left: -50px;
          border-radius: 50%;
          pointer-events: none;
        }
        .btn-gplay-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #fff !important;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        .btn-gplay-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        .btn-gplay-whatsapp {
          background: #25d366;
          color: #fff !important;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        .btn-gplay-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
        .gplay-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .gplay-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }
        .gplay-card.popular {
          border: 2px solid #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }
        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
        }
        .step-num {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
          font-weight: 800;
          font-size: 1.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .policy-allowed {
          background: rgba(16, 185, 129, 0.05);
          border-left: 4px solid #10b981;
          padding: 20px;
          border-radius: 0 12px 12px 0;
          height: 100%;
        }
        .policy-blocked {
          background: rgba(239, 68, 68, 0.05);
          border-left: 4px solid #ef4444;
          padding: 20px;
          border-radius: 0 12px 12px 0;
          height: 100%;
        }
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 0;
        }
        .faq-question {
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          transition: color 0.2s ease;
        }
        .faq-question:hover {
          color: #2563eb;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0, 1, 0, 1);
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .faq-answer.show {
          max-height: 1000px;
          padding-top: 10px;
          padding-bottom: 10px;
          transition: all 0.3s cubic-bezier(1, 0, 1, 0);
        }
      `}</style>

      <div className="gplay-section">
        {/* Hero Section */}
        <section className="gplay-hero">
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-8">
                <span className="badge bg-primary text-uppercase px-3 py-2 mb-3" style={{ fontSize: '0.75rem', letterSpacing: '1px', fontWeight: '800' }}>
                  <i className="fa-brands fa-google-play"></i> App Store Services
                </span>
                <h1 className="gplay-title mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}>
                  Google Play Store App <span style={{ color: '#60a5fa' }}>Publishing & Testing</span> Services
                </h1>
                <p className="lead mb-4" style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '650px' }}>
                  Struggling with the 20-tester rule, organization verification, or account suspensions? Let ChittorTech publish and manage your Android applications securely.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20am%20interested%20in%20your%20Google%20Play%20Publishing%20services.%20I%20need%20help%20in%20publishing%20my%20app." target="_blank" rel="noopener noreferrer" className="btn-gplay-whatsapp">
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                  <a href="#packages" className="btn-gplay-primary">
                    View Pricing Plans <i className="fa-solid fa-arrow-down"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center d-none d-lg-block">
                <i className="fa-brands fa-google-play" style={{ fontSize: '12rem', color: 'rgba(255,255,255,0.15)', filter: 'drop-shadow(0px 10px 40px rgba(59,130,246,0.3))' }}></i>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction / Problem Statement */}
        <section className="py-5" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="gplay-title" style={{ fontSize: '2rem', fontWeight: 800 }}>
                  Publishing on Google Play is <span className="text-danger">harder than ever</span>
                </div>
                <p className="mt-3 text-secondary" style={{ lineHeight: 1.8 }}>
                  Google Play Store has implemented strict verification policies to combat spam and malware. Newly registered individual developer accounts are now locked behind a mandatory 20-tester testing program for 14 continuous days. Business verification has also grown complex, requiring D-U-N-S numbers, official business documents, and verified local representatives.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  At ChittorTech, we eliminate these friction points. Whether you want to publish on your own developer console or leverage our pre-verified corporate publishing accounts, we handle everything from policy check, asset compilation, to submission and review management.
                </p>
              </div>
              <div className="col-md-6">
                <div className="row g-3">
                  {[
                    { title: "20-Tester Rule", desc: "No need to find 20 testers. We fulfill Google's mandatory 14-day closed testing opt-in requirement.", icon: "fa-users" },
                    { title: "Compliance Check", desc: "Complete analysis of your APK/AAB package, target SDK version, and privacy policy compliance.", icon: "fa-shield-halved" },
                    { title: "Zero Setup Hassle", desc: "Save registration costs, legal verification, and identity audits using our verified accounts.", icon: "fa-bolt" },
                    { title: "Active Maintenance", desc: "Constant store listing optimization, crash analysis, and update submissions.", icon: "fa-server" }
                  ].map((item, idx) => (
                    <div className="col-sm-6" key={idx}>
                      <div className="bg-white p-4 rounded-3 border border-1 h-100">
                        <i className={`fa-solid ${item.icon} text-primary mb-3`} style={{ fontSize: '1.5rem' }}></i>
                        <h5 className="gplay-title" style={{ fontWeight: '700' }}>{item.title}</h5>
                        <p className="text-muted small mb-0 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section id="packages" className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-primary text-uppercase fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1.5px' }}>Simple Plans</span>
              <h2 className="gplay-title mt-2 mb-3" style={{ fontSize: '2.5rem', fontWeight: 800 }}>Choose Your Publishing Path</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>No hidden charges. Select the publishing route that fits your business model.</p>
            </div>
            <div className="row g-4 mt-2">
              {PACKAGES.map((pkg, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className={`gplay-card ${pkg.popular ? 'popular' : ''}`}>
                    {pkg.popular && <span className="popular-badge">Most Popular</span>}
                    <h3 className="gplay-title mb-2" style={{ fontSize: '1.5rem', fontWeight: '800' }}>{pkg.title}</h3>
                    <p className="text-muted small mb-4">{pkg.desc}</p>
                    <div className="mb-4">
                      <span className="gplay-title text-primary" style={{ fontSize: '2.5rem', fontWeight: '900' }}>{pkg.priceINR}</span>
                      <span className="text-muted ms-2">/ {pkg.priceUSD}</span>
                    </div>
                    <ul className="list-unstyled mb-5" style={{ flexGrow: 1 }}>
                      {pkg.features.map((f, fIdx) => (
                        <li className="d-flex align-items-start gap-2 mb-3 text-secondary" key={fIdx} style={{ fontSize: '0.92rem' }}>
                          <i className="fa-solid fa-circle-check text-success mt-1" style={{ fontSize: '0.85rem' }}></i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`https://api.whatsapp.com/send?phone=917597451057&text=${encodeURIComponent(pkg.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="w-100 btn-gplay-whatsapp justify-content-center">
                      <i className="fa-brands fa-whatsapp"></i> Get Started
                    </a>
                    <div className="mt-3 pt-2 border-top text-center" style={{ width: '100%' }}>
                      <button onClick={() => setActivePolicy(pkg.policyType)} className="btn btn-link text-decoration-none p-0 text-danger fw-bold" style={{ fontSize: '0.8rem', border: 'none', background: 'none', cursor: 'pointer' }}>
                        <i className="fa-solid fa-circle-exclamation me-1"></i> View Publishing Policy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publishing Process */}
        <section className="py-5" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="gplay-title" style={{ fontSize: '2.2rem', fontWeight: 800 }}>How the Process Works</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Get your app online in 4 simple steps.</p>
            </div>
            <div className="row g-4">
              {[
                { step: "1", title: "App Submission", desc: "Upload your app bundle (.aab or .apk) along with screenshots, app icon, descriptions, and privacy policy details." },
                { step: "2", title: "Policy & Security Review", desc: "Our testing team audits the application for compliance violations and crashes to guarantee a 100% review pass rate." },
                { step: "3", title: "Testing & Validation", desc: "If running on your console, we spin up our 20-tester network to complete the mandatory 14-day continuous opt-in testing." },
                { step: "4", title: "App Launch & Live Status", desc: "We submit the app to Google Play Store and monitor it until it is officially approved and live for public download." }
              ].map((step, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="bg-white p-4 rounded-4 border border-1 h-100">
                    <div className="step-num">{step.step}</div>
                    <h5 className="gplay-title" style={{ fontWeight: '700' }}>{step.title}</h5>
                    <p className="text-muted small mb-0 mt-3" style={{ lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Policy Clause */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="text-danger text-uppercase fw-bold" style={{ fontSize: '0.8rem', letterSpacing: '1.5px' }}>Strict Compliance</span>
              <h2 className="gplay-title mt-2" style={{ fontSize: '2.2rem', fontWeight: 800 }}>App Acceptance Guidelines</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>To protect our verified developer console, we maintain strict quality control.</p>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="policy-allowed">
                  <h4 className="gplay-title text-success mb-3"><i className="fa-solid fa-circle-check"></i> What We Publish</h4>
                  <ul className="list-unstyled text-secondary" style={{ lineHeight: 2, fontSize: '0.95rem' }}>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> E-Commerce Stores & Business Portals</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Custom ERP & POS Client Portals</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Utility & Productivity Applications</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Educational & EdTech Learning Apps</li>
                    <li><i className="fa-solid fa-check-double text-success me-2"></i> Local Service Booking & Hotel Directories</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="policy-blocked">
                  <h4 className="gplay-title text-danger mb-3"><i className="fa-solid fa-circle-xmark"></i> What We Do NOT Publish</h4>
                  <ul className="list-unstyled text-secondary" style={{ lineHeight: 2, fontSize: '0.95rem' }}>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Real Money Gambling, Betting & Casinos</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Unlicensed Short-term Loan / FinTech Apps</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Plagiarized / 100% Cloned Unofficial Codes</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Dating, Spam or Malware Applications</li>
                    <li><i className="fa-solid fa-ban text-danger me-2"></i> Copyright Infringing Media Downloaders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{ background: '#f8fafc' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="gplay-title" style={{ fontSize: '2.2rem', fontWeight: 800 }}>Frequently Asked Questions</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>Frequently asked questions about app publishing and accounts.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="bg-white p-4 rounded-4 border border-1">
                  {FAQS.map((faq, idx) => (
                    <div className="faq-item" key={idx}>
                      <div className="faq-question" onClick={() => toggleFaq(idx)}>
                        <span>{faq.q}</span>
                        <i className={`fa-solid ${activeFaq === idx ? 'fa-chevron-up' : 'fa-chevron-down'} text-primary`}></i>
                      </div>
                      <div className={`faq-answer ${activeFaq === idx ? 'show' : ''}`}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #291fbc 60%, #0e7490 100%)', color: '#fff' }}>
          <div className="container py-4 text-center">
            <h2 className="gplay-title gplay-cta-title mb-3" style={{ fontSize: '2.3rem', fontWeight: 800 }}>Get Your Android App on Google Play</h2>
            <p className="mb-4 mx-auto" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>
              Connect with our Google Play Publishing experts today. Let's discuss your application and ensure a seamless launch.
            </p>
            <a href="https://api.whatsapp.com/send?phone=917597451057&text=Hi%20ChittorTech,%20I%20am%20interested%20in%20your%20Google%20Play%20Publishing%20services.%20I%20need%20help%20in%20publishing%20my%20app." target="_blank" rel="noopener noreferrer" className="btn-gplay-whatsapp">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp (+91 7597451057)
            </a>
          </div>
        </section>
      </div>

      {/* Policy Modal Overlay */}
      {activePolicy && POLICY_DETAILS[activePolicy] && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 100000,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto'
        }} onClick={() => setActivePolicy(null)}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '550px',
            padding: '24px 24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            color: '#1e293b',
            position: 'relative',
            marginTop: '20px',
            marginBottom: '20px'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActivePolicy(null)} style={{
              position: 'absolute',
              top: '20px', right: '20px',
              border: 'none', background: 'none',
              fontSize: '1.25rem', cursor: 'pointer',
              color: '#64748b'
            }}><i className="fa-solid fa-xmark"></i></button>
            
            <h4 className="gplay-title mb-3" style={{ fontWeight: 800, paddingRight: '45px' }}>
              <i className={`fa-solid ${POLICY_DETAILS[activePolicy].icon} me-1`}></i> {POLICY_DETAILS[activePolicy].title}
            </h4>
            
            <p style={{ fontSize: '0.88rem', lineHeight: '1.5', color: '#475569', marginBottom: '16px' }}>
              {POLICY_DETAILS[activePolicy].intro}
            </p>
            
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
              {POLICY_DETAILS[activePolicy].points.map((pt, index) => (
                <div key={index} style={{
                  paddingBottom: '8px',
                  paddingTop: index > 0 ? '8px' : '0px',
                  borderBottom: index < POLICY_DETAILS[activePolicy].points.length - 1 ? '1px solid #f1f5f9' : 'none'
                }}>
                  {pt}
                </div>
              ))}
            </div>
            
            {POLICY_DETAILS[activePolicy].notice && (
              <div style={{
                background: '#fef2f2',
                borderLeft: '4px solid #ef4444',
                padding: '12px',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.82rem',
                lineHeight: '1.5',
                color: '#991b1b',
                marginBottom: '16px',
                fontWeight: 500
              }}>
                <strong>Important Notice:</strong> {POLICY_DETAILS[activePolicy].notice}
              </div>
            )}
            
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '16px' }}>
              All uploads undergo policy checks. By proceeding with this service, you agree to these compliance and legal terms.
            </p>
            
            <button className="btn-gplay-primary w-100 justify-content-center" onClick={() => setActivePolicy(null)} style={{ padding: '10px 20px' }}>
              I Agree & Understand
            </button>
          </div>
        </div>
      )}
    </>
  );
}
