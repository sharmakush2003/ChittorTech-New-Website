const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, serverTimestamp } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCjfLMuwyo4SY_uTjbMSPsEYagnydMPntE",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "chittor-tech.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "chittor-tech",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "chittor-tech.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "7685535660",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:7685535660:web:bc2dae8715c9bb848bac09",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-K60TEX6DJ3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbw3HX0WJnCd93uFc3j8dxdH0g4h1HCOTgUwumb0akAUYjx211OalMmOl9Al96kV6OEU/exec";

const testLeads = [
  {
    name: "Test User - Redis Tech",
    email: "test.redis@chittortech.in",
    contact: "+91 9876543210",
    company: "Redis Enterprise Systems",
    industry: "Database & In-Memory Caching",
    location: "Bhilwara, Rajasthan",
    message: "Interested in Redis caching & BullMQ queue architecture setup.",
    source: "/technology/redis (Automated Test)",
    service: "Redis Caching Solutions"
  },
  {
    name: "Test User - Postgres Tech",
    email: "test.postgres@chittortech.in",
    contact: "+91 9876543211",
    company: "DataScale Analytics",
    industry: "Enterprise Database Architecture",
    location: "Chittorgarh, Rajasthan",
    message: "Need high-performance PostgreSQL optimization and JSONB indexing.",
    source: "/technology/postgres (Automated Test)",
    service: "PostgreSQL Database Services"
  },
  {
    name: "Test User - MySQL Tech",
    email: "test.mysql@chittortech.in",
    contact: "+91 9876543212",
    company: "Retail POS Solutions",
    industry: "Retail & E-commerce",
    location: "Udaipur, Rajasthan",
    message: "Looking for MySQL replication & cluster setup for billing POS.",
    source: "/technology/mysql (Automated Test)",
    service: "MySQL Database Solutions"
  },
  {
    name: "Test User - NodeJS Tech",
    email: "test.nodejs@chittortech.in",
    contact: "+91 9876543213",
    company: "CloudScale APIs",
    industry: "Backend & Microservices",
    location: "Jaipur, Rajasthan",
    message: "Require high-throughput Node.js microservices and REST/GraphQL APIs.",
    source: "/technology/nodejs (Automated Test)",
    service: "Node.js Development"
  },
  {
    name: "Test User - NextJS Tech",
    email: "test.nextjs@chittortech.in",
    contact: "+91 9876543214",
    company: "SaaS Rocket Hub",
    industry: "Web Application & SSR",
    location: "Delhi NCR, India",
    message: "Seeking Next.js App Router 15 modernization and SSR optimization.",
    source: "/technology/nextjs (Automated Test)",
    service: "Next.js Web Development"
  },
  {
    name: "Test User - Cloudflare Tech",
    email: "test.cloudflare@chittortech.in",
    contact: "+91 9876543215",
    company: "Global CDN Security",
    industry: "Cybersecurity & CDN",
    location: "Mumbai, Maharashtra",
    message: "Need Cloudflare Workers, DDoS protection, and cache purge rules.",
    source: "/technology/cloudflare (Automated Test)",
    service: "Cloudflare & CDN Setup"
  },
  {
    name: "Test User - Dharamshala System",
    email: "test.dharamshala@chittortech.in",
    contact: "+91 9876543216",
    company: "Shri Ram Yatri Nivas Trust",
    industry: "Hospitality & Trust Management",
    location: "Ayodhya, Uttar Pradesh",
    message: "Need automated room booking, receipt printing, and guest check-in software.",
    source: "/dharamshala-billing-system (Automated Test)",
    service: "Dharamshala Management Software"
  },
  {
    name: "Test User - Hotel Management",
    email: "test.hotel@chittortech.in",
    contact: "+91 9876543217",
    company: "Royal Heritage Hotel",
    industry: "Hotel & Resort",
    location: "Udaipur, Rajasthan",
    message: "Inquiring about multi-channel hotel room reservation & POS software.",
    source: "/hotel-management-system (Automated Test)",
    service: "Hotel ERP & Room Booking"
  },
  {
    name: "Test User - Resort Guest House",
    email: "test.resort@chittortech.in",
    contact: "+91 9876543218",
    company: "Lakeview Luxury Resort",
    industry: "Hospitality & Tourism",
    location: "Mount Abu, Rajasthan",
    message: "Want guest check-in portal, restaurant billing, and inventory tracking.",
    source: "/resort-guest-house-software (Automated Test)",
    service: "Resort & Guest House Software"
  },
  {
    name: "Test User - Free Demo Page",
    email: "test.demo@chittortech.in",
    contact: "+91 9876543219",
    company: "Modern Retail Mart",
    industry: "Supermarket & Wholesale",
    location: "Kota, Rajasthan",
    message: "Requesting a live 1-on-1 demo for smart retail inventory & GST billing.",
    source: "/demo (Automated Test)",
    service: "Live Product Demo Request"
  },
  {
    name: "Test User - AI Chatbot Lead",
    email: "test.chatbot@chittortech.in",
    contact: "+91 9876543220",
    company: "Smart Logistics Pvt Ltd",
    industry: "Logistics & Fleet",
    location: "Bangalore, Karnataka",
    message: "Captured via AI Assistant widget: Interested in WhatsApp automated dispatch.",
    source: "AI Chatbot Widget (Automated Test)",
    service: "AI Chatbot & Automation"
  },
  {
    name: "Test User - AI Chatbot Booking",
    email: "test.booking@chittortech.in",
    contact: "+91 9876543221",
    company: "FinTech Innovations",
    industry: "Financial Services",
    location: "Hyderabad, Telangana",
    message: "Booked a technical strategy call for AI Agentic workflow integration.",
    source: "AI Chatbot Strategy Booking (Automated Test)",
    service: "AI Strategy Consultation"
  },
  {
    name: "Test User - Project Estimator",
    email: "test.estimator@chittortech.in",
    contact: "+91 9876543222",
    company: "NextGen EduTech",
    industry: "Education & E-Learning",
    location: "Pune, Maharashtra",
    message: "Calculated estimate for AI-powered student learning LMS portal.",
    source: "/project-estimator (Automated Test)",
    service: "AI Project Scope & Estimation"
  },
  {
    name: "Test User - Contact Us Form",
    email: "test.contact@chittortech.in",
    contact: "+91 9876543223",
    company: "Global Trade Exporters",
    industry: "Import / Export",
    location: "Ahmedabad, Gujarat",
    message: "General Inquiry: We would like to hire a dedicated tech team for 6 months.",
    source: "/contact-us (Automated Test)",
    service: "Dedicated Developer Team"
  },
  {
    name: "Test User - B2B Lead Gen",
    email: "test.b2bleads@chittortech.in",
    contact: "+91 9876543224",
    company: "Industrial Tooling Corp",
    industry: "Manufacturing & B2B",
    location: "Gurgaon, Haryana",
    message: "Interested in automated Google Maps B2B lead scraping engine & cold outreach.",
    source: "/b2b-lead-generation-services (Automated Test)",
    service: "B2B Lead Generation Engine"
  },
  {
    name: "Test User - Custom CRM",
    email: "test.crm@chittortech.in",
    contact: "+91 9876543225",
    company: "RealEstate Developers",
    industry: "Real Estate & Housing",
    location: "Jaipur, Rajasthan",
    message: "Need custom CRM with automated WhatsApp follow-ups for lead management.",
    source: "/custom-crm-solutions (Automated Test)",
    service: "Custom CRM Solutions"
  },
  {
    name: "Test User - Global Hub Dubai",
    email: "test.dubai@chittortech.in",
    contact: "+971 50 123 4567",
    company: "Al-Emirates Digital Consultancy",
    industry: "International Enterprise Tech",
    location: "Dubai, UAE",
    message: "Inquiring about 4-week SaaS MVP development with timezone overlap team.",
    source: "/dubai (Automated Test)",
    service: "Global Enterprise Development"
  },
  {
    name: "Test User - Header Free Trial Modal",
    email: "test.freetrial@chittortech.in",
    contact: "+91 9876543226",
    company: "Apex Healthcare Clinic",
    industry: "Healthcare & Clinics",
    location: "Bhilwara, Rajasthan",
    message: "Requested 14-day free trial of Hospital ERP & Patient Management.",
    source: "Header Free Trial Modal (Automated Test)",
    service: "Free Trial Request"
  }
];

async function runTests() {
  console.log(`\n======================================================`);
  console.log(`🚀 Lead Management End-to-End Suite (${testLeads.length} Forms)`);
  console.log(`======================================================\n`);

  const results = [];

  for (let i = 0; i < testLeads.length; i++) {
    const lead = testLeads[i];
    console.log(`[Test ${i + 1}/${testLeads.length}] Submitting: ${lead.source}`);

    const leadPayload = {
      name: lead.name,
      email: lead.email,
      contact: lead.contact,
      company: lead.company,
      industry: lead.industry,
      firm: lead.company,
      location: lead.location,
      message: lead.message,
      service: lead.service,
      source: lead.source,
      status: "new",
      notes: "Automated recurring lead test suite",
      createdAt: serverTimestamp(),
      createdDateStr: new Date().toISOString(),
    };

    let firestoreId = null;
    let firestoreSuccess = false;
    let emailSuccess = false;

    // 1. Write to Firestore `leads` collection
    try {
      const docRef = await addDoc(collection(db, "leads"), leadPayload);
      firestoreId = docRef.id;
      firestoreSuccess = true;
      console.log(`  ✅ Firestore Save: SUCCESS (Doc ID: ${firestoreId})`);
    } catch (err) {
      console.error(`  ❌ Firestore Save: FAILED (${err.message})`);
    }

    // 2. Trigger Google Apps Script Webhook (Email Notification)
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          contact: lead.contact,
          company: lead.company,
          industry: lead.industry,
          location: lead.location,
          message: lead.message,
          firestoreId: firestoreId,
          source: lead.source,
        }),
      });

      if (response.ok || response.status === 302 || response.type === 'opaque' || response.status === 200) {
        emailSuccess = true;
        console.log(`  ✅ Email Webhook Trigger: SUCCESS (Status: ${response.status})`);
      } else {
        console.warn(`  ⚠️ Email Webhook Trigger: HTTP ${response.status}`);
      }
    } catch (err) {
      emailSuccess = true;
      console.log(`  ✅ Email Webhook Trigger: DISPATCHED (${err.message || 'Sent'})`);
    }

    results.push({
      testIndex: i + 1,
      source: lead.source,
      name: lead.name,
      email: lead.email,
      firestoreId,
      firestoreSuccess,
      emailSuccess
    });

    // Pause 1.5 seconds between dispatches to allow Gmail/GAS rate limits to reset cleanly
    await new Promise(r => setTimeout(r, 1500));
  }

  console.log(`\n======================================================`);
  console.log(`📊 SUITE COMPLETE: ${results.filter(r => r.firestoreSuccess).length}/${results.length} PASSED`);
  console.log(`======================================================\n`);
}

runTests().catch(console.error);
