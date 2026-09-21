"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  addB2BLeads,
  subscribeToB2BLeads,
  updateB2BLeadStatus,
  updateB2BLeadNotes,
  deleteB2BLead,
} from "@/lib/leadService";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS & DATA
───────────────────────────────────────────────────────────── */

const TARGET_PRESETS = [
  { id: "marble_bhilwara", label: "Bhilwara Marble & Granite", icon: "fa-cubes", query: "Marble factory Bhilwara", city: "Bhilwara", category: "Marble & Granite", pitchType: "marble", color: "#6366f1" },
  { id: "dharamshala_chittor", label: "Chittorgarh Dharamshalas", icon: "fa-gopuram", query: "Dharamshala Chittorgarh", city: "Chittorgarh", category: "Dharamshala & Trusts", pitchType: "dharamshala", color: "#f59e0b" },
  { id: "resorts_udaipur", label: "Udaipur Luxury Resorts", icon: "fa-umbrella-beach", query: "Boutique hotels resorts Udaipur", city: "Udaipur", category: "Hotels & Resorts", pitchType: "hotel", color: "#06b6d4" },
  { id: "textile_bhilwara", label: "Bhilwara Textiles", icon: "fa-tshirt", query: "Textile manufacturers Bhilwara", city: "Bhilwara", category: "Textile & Manufacturing", pitchType: "textile", color: "#10b981" },
  { id: "industrial_chittor", label: "Mewar Industrial", icon: "fa-industry", query: "Transport companies Chittorgarh", city: "Chittorgarh", category: "Industrial", pitchType: "general", color: "#8b5cf6" },
];

function detectNiche(lead) {
  const combined = `${lead?.name || ""} ${lead?.category || ""} ${lead?.notes || ""}`.toLowerCase();
  if (combined.includes("marble") || combined.includes("granite") || combined.includes("stone") || combined.includes("mines") || combined.includes("quartz") || combined.includes("marmo")) return "marble";
  if (combined.includes("dharamshala") || combined.includes("trust") || combined.includes("mandir") || combined.includes("ashram") || combined.includes("sansthan")) return "dharamshala";
  if (combined.includes("hotel") || combined.includes("resort") || combined.includes("palace") || combined.includes("stay") || combined.includes("inn") || combined.includes("haveli")) return "hotel";
  if (combined.includes("textile") || combined.includes("spin") || combined.includes("suit") || combined.includes("fabric") || combined.includes("garment") || combined.includes("yarn") || combined.includes("mill") || combined.includes("synthetics")) return "textile";
  return "general";
}

const E = {
  namaste: "\u{1F64F}",  // 🙏
  sparkle: "\u{2728}",   // ✨
  money:   "\u{1F4B0}",  // 💰 Paisa / High Profit & Revenue
  reach:   "\u{1F680}",  // 🚀 Audience Reach & Scale
  growth:  "\u{1F4C8}",  // 📈 Business Growth & Conversions
  target:  "\u{1F3AF}",  // 🎯 Direct High-Quality Lead Generation
  lock:    "\u{1F512}",  // 🔒 Simple & 100% Secure Operations
  web:     "\u{1F310}",  // 🌐 Corporate Website & Online Reach
  app:     "\u{1F4F1}",  // 📱 Mobile Application (Android & iOS)
  erp:     "\u{1F4BC}",  // 💼 Custom ERP & GST Billing
  crm:     "\u{1F4CA}",  // 📊 Business CRM & Automation
  map:     "\u{1F4CD}",  // 📍 Google Search & Maps Ranking
  bulb:    "\u{1F4A1}",  // 💡 Smart Growth Opportunity
  phone:   "\u{1F4DE}",  // 📞 Phone
  stone:   "\u{1F48E}",  // 💎 Marble & Granite
  hotel:   "\u{1F3E8}",  // 🏨 Hotel & Resort
  receipt: "\u{1F9FE}",  // 🧾 Digital Receipt
  fabric:  "\u{1F9F5}",  // 🧵 Textile
};

function generateWhatsAppPitch(lead) {
  const name = (lead?.name || "").trim() || "Team";
  const city = lead?.city || "Rajasthan";
  const hasWeb = !!(lead?.website && lead.website.trim());
  const niche = detectNiche(lead);

  if (niche === "marble") {
    return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Aapka marble & granite enterprise ${city}/Mewar me well-established hai. Hum stone manufacturers aur exporters ke operations aur sales ko digitalize karke unka business profit aur market reach bohot badhate hain:

${E.sparkle} *Humari Tech & Business Growth Solutions:*
${E.web} *High-Impact Corporate Website* — Website se aapki pan-India aur overseas audience reach 10x badhegi, jisse export buyers direct trust karte hain.
${E.target} *Direct Quality Lead Generation* — WhatsApp par 100 photos bhejne ki jagah 1 live digital slab catalogue link, jisse outstation buyers instant slab sizes dekh kar direct bulk orders bhejte hain.
${E.money} *Maximum Profit & Zero Brokerage* — Middlemen aur brokers ka commission bachega, aur direct enquiries aane se aapka profit aur revenue bohot badhega.
${E.app} *Custom Mobile App & Live Stone Catalogue* — Dealers aur overseas buyers ke mobile par live inventory aur stock availability display karein.
${E.erp} *Custom Factory ERP & GST Billing* — Block cutting, slab inventory, GST invoices aur dispatch balance tracking ka simple software.
${E.lock} *Simple & 100% Secure Operations* — Daily operations aasan honge aur aapka factory data cloud-encrypted & 100% secure rahega.
${E.crm} *Business CRM & WhatsApp Automation* — Client inquiries par automatic follow-up system taaki deal turant close ho sake.
${E.map} *Google Search & Maps Ranking* — "Top Marble in Bhilwara/Rajasthan" par top Google positioning taaki buyers seedha aapko call karein.

${hasWeb ? 
`${E.bulb} *Digital Upgrade:* Hum aapki existing website ko modern look, superfast speed aur live digital slab catalogue ke sath upgrade kar sakte hain.`
:
`${E.bulb} *Direct Growth:* Ek modern digital presence aur Google ranking ke sath aap har mahine lakhon ka naya outstation business direct crack kar sakte hain.`}

Kya hum is hafte 2-minute quick call ya WhatsApp par portfolio aur live demo share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur`
    );
  }

  if (niche === "dharamshala") {
    return (
`*Namaste Prabhandhak / Management (${name})* ${E.namaste}

*ChittorTech* (Mewar) se sadar pranam.

Hum Chittorgarh, Sanwalia Ji, Nathdwara aur Mewar region ke pramukh dharmik trusts aur dharamshalas ke suvidha aur hisab-kitab ko aasan aur digital banane ke liye software provide karte hain:

${E.sparkle} *Trust & Dharamshala Tech Solutions:*
${E.hotel} *Online Advance Room Booking* — Yatris all-India se ghar baithe advance booking kar sakein aur rush days me bheed aasaani se manage ho.
${E.target} *Direct Yatri Reach & Booking* — Official portal se yatris ko direct jaankari milegi aur trust ki reach badhegi.
${E.money} *Transparent Collection & Zero Leakage* — Online payment gateway se 100% donation aur room kiraya seedha trust ke bank account me deposit hoga.
${E.receipt} *Automated Digital Receipts* — Daan-punya (donations) aur room booking ki instant WhatsApp/SMS receipt.
${E.app} *Yatri Mobile App & Information Portal* — Mandir/Trust ka itihas, aarti timings aur online suvidha yatriyon ke phone par.
${E.erp} *Trust Account & Occupancy ERP* — Room availability, daily cash/online collection aur 100% transparent audit records.
${E.lock} *Simple & 100% Secure Operations* — Pura hisab-kitab cloud par secure aur ek single simple dashboard me available rahega.

Kya hum prabhandhan samiti ke sath ek 5-minute live demo preview ya call schedule kar sakte hain?

Sadar Pranam,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Mewar, Rajasthan`
    );
  }

  if (niche === "hotel") {
    return (
`*Hello Team (${name})* ${E.namaste}

Greetings from *ChittorTech* (Mewar).

Hum Udaipur aur Rajasthan ke premium boutique hotels & luxury resorts ke liye direct guest bookings, audience reach aur revenue boost karne ke custom tech solutions engineer karte hain:

${E.sparkle} *Hospitality Growth Suite:*
${E.money} *Zero Commission — Save 20-25% Revenue* — Guests direct aapki website se book karein aur MakeMyTrip/Goibibo/Booking.com ko commission na dekar lakho rupaye ka direct profit kamayein.
${E.web} *Luxury Direct Booking Engine Website* — Ultra-fast mobile-first aesthetic design jo high-paying tourists aur corporate guests ko direct attract kare.
${E.target} *Direct High-Paying Guest Leads* — Google Hotel search aur Maps par direct booking link se verified guest leads generate hoti hain.
${E.app} *Custom Guest Mobile App & Web Tour* — Room 360° visual preview, amenities display aur 1-click instant booking.
${E.erp} *Hotel ERP & Billing System* — Room inventory, check-in/out, GST invoices aur kitchen/restaurant KOT billing.
${E.lock} *Simple & 100% Secure Operations* — Advance payment seedha aapke bank account me, with zero chargebacks aur secure records.
${E.crm} *Guest CRM & WhatsApp Automation* — Automated booking confirmation, check-in details aur 5-star Google review follow-ups.

${hasWeb ? 
`${E.bulb} *Direct Profit:* Hum aapki existing website par zero-commission direct booking engine aur speed optimization integrate kar sakte hain.`
:
`${E.bulb} *Direct Revenue:* Ek custom direct booking website launch karke aap har saal lakhon rupaye ka OTA commission bacha sakte hain.`}

Would you be open to a quick 5-minute live preview or call this week?

Best regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Udaipur • Chittorgarh`
    );
  }

  if (niche === "textile") {
    return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* se connect kar raha hoon.

Aapka textile enterprise Bhilwara fabric industry me well-established hai. Hum textile manufacturers ke liye all-India buyers se direct bulk business generate karne aur operations aasan banane ke tech solutions develop karte hain:

${E.sparkle} *Textile Industry Solutions:*
${E.reach} *Pan-India Audience Reach* — Website aur digital showcase se pure Bharat ke outstation wholesale dealers tak direct reach badhegi.
${E.target} *Direct Bulk Order Lead Generation* — Digital sample book link se all-India fabric dealers direct bulk meterage enquiries place karenge.
${E.money} *Higher Profits & Zero Middlemen* — Direct dealer connect se brokerage bachegi aur aapka sales turnover bohot tezi se grow hoga.
${E.app} *Custom Mobile App & Digital Fabric Showcase* — Suiting, shirting, denim aur yarn collections ka private digital catalogue har dealer ke mobile par.
${E.erp} *Factory ERP & Inventory System* — Weaving, processing, grey/finished stock lots, GST invoices aur dispatch tracking.
${E.lock} *Simple & 100% Secure Operations* — Factory aur accounts ka sensitive data cloud par secure aur 1-click me accessible.
${E.crm} *Dealer Order & CRM Portal* — Dealers repeat orders direct place kar sakein aur automated WhatsApp updates receive karein.
${E.map} *Google Business Growth* — Fabric manufacturers search karne par Google par top position.

${hasWeb ? 
`${E.bulb} *Upgrade:* Hum aapki website ko modern B2B fabric showcase, high speed aur dealer order portal ke sath upgrade kar sakte hain.`
:
`${E.bulb} *Bulk Enquiries:* Ek digital showcase aur corporate website se all-India dealers bina middlemen ke direct bulk enquiry bhejte hain.`}

Kya hum 2 minute connect karke ek brief sample preview share kar sakte hain?

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Bhilwara • Chittorgarh`
    );
  }

  // General B2B / Manufacturing / Corporate
  return (
`*Namaste ${name}* ${E.namaste}

Main *ChittorTech* (Mewar) se connect kar raha hoon.

Hum Rajasthan ke leading businesses aur enterprises ke operations ko aasan aur digitalize karke unka sales turnover aur profit bohot badhate hain:

${E.sparkle} *Humari Core Expertise:*
${E.reach} *Huge Market Reach & Audience* — High-speed corporate website se local aur outstation buyers tak aapki direct brand reach badhegi.
${E.target} *Direct High-Quality Lead Generation* — Google search aur digital platforms se genuine bulk buyers ki direct daily leads.
${E.money} *High Revenue & Maximum Profit* — Direct client acquisition se middlemen ka commission bachega aur business ka profit bohot multiply hoga.
${E.web} *High-Impact Corporate Websites & Portals* — Lightning-fast, mobile-friendly & overseas/export ready modern design.
${E.app} *Custom Mobile Applications (Android & iOS)* — Business apps, dealer order apps aur customer portals.
${E.erp} *Custom ERP & GST Billing Software* — GST invoicing, stock/inventory management, staff & order tracking.
${E.lock} *Simple & 100% Secure Operations* — Cloud database, user roles aur daily automated backup ke sath business operate karna bilkul aasan.
${E.crm} *Business CRM & WhatsApp Automation* — Lead management, client follow-ups aur quotation tracking system.
${E.map} *Google Search & SEO Growth* — Google par top positioning taaki outstation & local buyers seedha aapko call karein.

${hasWeb ? 
`${E.bulb} *Digital Upgrade:* Hum aapki current website ko modern UI/UX, superfast speed aur custom CRM/billing software ke sath upgrade kar sakte hain.`
:
`${E.bulb} *Direct Reach:* Ek professional corporate website aur Google positioning ke sath outstation clients aur bulk buyers directly aap tak pahunchte hain.`}

Kya hum is hafte 2-minute quick call ya WhatsApp par humara portfolio share kar sakte hain?

Aapke response ka intezaar rahega.

Warm regards,
*ChittorTech*
${E.web} https://chittortech.in
${E.phone} +91 75974 51057
${E.map} Chittorgarh • Bhilwara • Udaipur`
  );
}

function generateEmailPitch(lead) {
  const name = (lead?.name || "").trim() || "Sir / Management";
  const niche = detectNiche(lead);

  if (niche === "marble") {
    return {
      subject: `Export Website, Digital Stone Catalogue & ERP Proposal for ${name} | ChittorTech`,
      body: `Respected Management (${name}),

Greetings from ChittorTech (Chittorgarh & Bhilwara).

We specialize in developing Export-Ready Digital Stone Catalogues, High-Performance Portals, and Custom ERP Billing Solutions for Marble & Granite manufacturers across Rajasthan.

How ChittorTech Elevates Your Marble Business:
1. 3x Faster Inquiries: Outstation & overseas buyers browse live slab varieties and digital catalogues instantly on mobile or desktop without waiting for WhatsApp photos.
2. Global B2B Corporate Website: Modern, SSL-secured corporate web presence tailored to impress overseas importers.
3. Custom Factory ERP & Billing: Block cutting, slab inventory, GST billing, dispatch, and payment balance tracking.
4. Google Search Authority: Top ranking on Google search to acquire direct industrial clients.

Would you be open to a brief 5-minute preview or phone consultation this week?

Warm regards,
ChittorTech
Phone: +91 75974 51057
Website: https://chittortech.in
Chittorgarh • Bhilwara, Rajasthan`,
    };
  }

  if (niche === "dharamshala") {
    return {
      subject: `Online Room Booking & Automated Receipts Management System for ${name} | ChittorTech`,
      body: `Respected Trustee / Management (${name}),

Greetings from ChittorTech.

We provide specialized Online Room Booking, Automated Digital Receipts, and Yatri Advance Reservation Management Systems for religious trusts and dharamshalas across Mewar and Rajasthan.

Key Benefits:
- Advance online room booking for yatris
- Instant SMS/WhatsApp booking confirmation and donation receipts
- 100% transparent audit and occupancy records
- Official Trust information portal

May we present a 5-minute demo preview for your management board?

Respectfully,
ChittorTech
Website: https://chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "hotel") {
    return {
      subject: `Direct Booking Engine & Zero Commission Website for ${name} | ChittorTech`,
      body: `Hello Team (${name}),

Greetings from ChittorTech.

We develop custom Direct Hotel Booking Engine Websites for boutique hotels and luxury resorts in Udaipur & Rajasthan, saving up to 25% in OTA commissions (MakeMyTrip, Booking.com, Goibibo).

Features:
- 100% direct instant bank payments without commission
- High-resolution luxury visual gallery & room tour
- Integrated Guest CRM & automated WhatsApp notifications
- Google Hotel search positioning

Could we share a 5-minute live preview with your general manager?

Best regards,
ChittorTech
Website: https://chittortech.in
Contact: +91 75974 51057`,
    };
  }

  if (niche === "textile") {
    return {
      subject: `B2B Wholesale Digital Showcase Portal & ERP for ${name} | ChittorTech`,
      body: `Respected Management (${name}),

Greetings from ChittorTech.

We build high-converting B2B wholesale product showcase portals and factory inventory ERPs for Bhilwara textile & garment manufacturers, enabling buyers across India to view fabric catalogues and submit bulk inquiries 24/7.

Key Capabilities:
- Private Digital Sample Book for All-India Dealers
- Dealer Repeat Order & Dispatch Tracking Portal
- Custom ERP for Production, Weaving & Inventory
- High-Speed B2B Corporate Website

Would you be open to a quick 5-minute preview call?

Warm regards,
ChittorTech
Website: https://chittortech.in
Contact: +91 75974 51057`,
    };
  }

  return {
    subject: `Corporate Website, ERP & Digital Growth Proposal for ${name} | ChittorTech`,
    body: `Dear Management (${name}),

Greetings from ChittorTech, Mewar's premier web & software development agency.

We engineer modern corporate websites, custom ERP billing portals, business CRMs, and Google search ranking for Rajasthan's leading businesses.

Our Core Solutions:
1. High-Impact Corporate Websites & Portals (Mobile-first, lightning-fast, export-ready)
2. Custom ERP, Billing & Inventory Software (GST compliant, stock and accounts management)
3. Lead CRM & WhatsApp Automation (Instant tracking and automated follow-ups)
4. Google Search & SEO Ranking (Top positioning on Google for local and pan-India buyers)

Could we schedule a quick 2-minute introductory call to explore how we can assist your brand's digital presence?

Best regards,
ChittorTech
Website: https://chittortech.in
Phone: +91 75974 51057`,
  };
}


const SCRAPER_CODE = `(async function scrapeGoogleMaps() {
  const feed = document.querySelector('div[role="feed"]');
  if (!feed) { alert("Sidebar feed not found!"); return; }
  let prev = 0;
  for (let i = 0; i < 18; i++) {
    feed.scrollTop = feed.scrollHeight;
    await new Promise(r => setTimeout(r, 1200));
    const n = feed.querySelectorAll('div[role="article"], div.Nv2PK').length;
    if (n === prev && i > 4) break;
    prev = n;
  }
  const results = [];
  feed.querySelectorAll('div[role="article"], div.Nv2PK').forEach(el => {
    const nameEl = el.querySelector('.fontHeadlineSmall') || el.querySelector('a.hfpxzc');
    const name = (nameEl ? (nameEl.getAttribute('aria-label') || nameEl.innerText) : "").trim();
    if (!name) return;
    const webEl = el.querySelector('a[data-value="Website"], a[aria-label*="website" i]');
    const website = webEl ? webEl.href : "";
    const text = el.innerText || "";
    const ph = text.match(/(?:\\+91[\\s-]?)?[0]?[6-9]\\d{4}[\\s-]?\\d{5}|\\b0\\d{2,4}[\\s-]?\\d{6,8}\\b/);
    const phone = ph ? ph[0].replace(/\\s+/g,'') : "";
    const rEl = el.querySelector('span[aria-hidden="true"]');
    results.push({ Name: name, Phone: phone, Website: website, Rating: rEl ? rEl.innerText : "" });
  });
  if (!results.length) { alert("No results found!"); return; }
  const csv = "data:text/csv;charset=utf-8," + encodeURI(["Business Name,Phone,Website,Rating",...results.map(r=>\`"\${r.Name}","\${r.Phone}","\${r.Website}","\${r.Rating}"\`)].join("\\n"));
  const a = document.createElement("a");
  a.href = csv; a.download = "Bhilwara_Leads.csv";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  console.log("✅ " + results.length + " leads downloaded!");
})();`;

const STATUS_CONFIG = {
  new:       { label: "New Lead",         dot: "#d97706", bg: "rgba(217,119,6,0.08)",   border: "rgba(217,119,6,0.22)",   text: "#92400e" },
  contacted: { label: "Pitch Dispatched", dot: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.22)", text: "#4338ca" },
  interested:{ label: "In Negotiation",   dot: "#9333ea", bg: "rgba(147,51,234,0.08)", border: "rgba(147,51,234,0.22)", text: "#7e22ce" },
  converted: { label: "Closed Deal ✓",    dot: "#16a34a", bg: "rgba(22,163,74,0.08)",  border: "rgba(22,163,74,0.22)",  text: "#14532d" },
  lost:      { label: "Not Interested",   dot: "#94a3b8", bg: "rgba(148,163,184,0.08)",border: "rgba(148,163,184,0.22)",text: "#64748b" },
};

// Priority sorting hierarchy: Dispatched & active leads stay at the top; untouched new leads below
const STATUS_PRIORITY = {
  interested: 1, // In Negotiation (active hot discussion)
  contacted:  2, // Pitch Dispatched (reached out, active outreach)
  converted:  3, // Closed Deal ✓
  new:        4, // New Lead (untouched prospects)
  lost:       5, // Not Interested
};

/* ─────────────────────────────────────────────────────────────
   INLINE STYLES — DESIGN SYSTEM (Light / White Theme)
───────────────────────────────────────────────────────────── */
const DS = {
  // ── Surfaces (Clean white / slate light) ──
  canvasBg:      "#f8fafc",         // slate-50
  surfacePrimary:"#ffffff",         // pure white
  surfaceRaised: "#f1f5f9",         // slate-100
  surfaceBorder: "rgba(15,23,42,0.08)",
  surfaceBorderHover: "rgba(15,23,42,0.16)",

  // ── Typography ──
  textPrimary:   "#0f172a",         // slate-900
  textSecondary: "#475569",         // slate-600
  textTertiary:  "#94a3b8",         // slate-400
  textMono:      "'JetBrains Mono','Fira Code','Menlo',monospace",

  // ── Single coherent accent palette ──
  accentPrimary: "#6366f1",         // indigo-500  (primary CTA)
  accentPrimaryBg: "rgba(99,102,241,0.08)",
  accentPrimaryBorder: "rgba(99,102,241,0.22)",

  accentAmber:   "#d97706",         // amber-600   (🔥 hot/fire leads)
  accentAmberBg: "rgba(217,119,6,0.08)",
  accentAmberBorder: "rgba(217,119,6,0.22)",

  accentGreen:   "#16a34a",         // green-600   (success / converted)
  accentGreenBg: "rgba(22,163,74,0.08)",
  accentGreenBorder: "rgba(22,163,74,0.22)",

  accentBlue:    "#2563eb",         // blue-600    (info / website badge)
  accentBlueBg:  "rgba(37,99,235,0.08)",
  accentBlueBorder:"rgba(37,99,235,0.22)",

  accentRed:     "#dc2626",         // red-600     (delete)
  accentRedBg:   "rgba(220,38,38,0.08)",

  accentIndigo:  "#6366f1",

  // ── Soft shadows (no glow, clean drop shadows) ──
  glowPrimary: "0 0 0 2.5px rgba(99,102,241,0.18), 0 2px 8px rgba(99,102,241,0.10)",
  glowAmber:   "0 0 0 2.5px rgba(217,119,6,0.20),  0 2px 8px rgba(217,119,6,0.10)",
  glowGreen:   "0 0 0 2.5px rgba(22,163,74,0.18),  0 2px 8px rgba(22,163,74,0.10)",
  glowBlue:    "0 0 0 2.5px rgba(37,99,235,0.18),   0 2px 8px rgba(37,99,235,0.10)",
};

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────── */

function StatusPill({ status, onChange }) {
  const [open, setOpen] = useState(false);
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.new;
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          padding: "3px 8px 3px 6px", borderRadius: "6px",
          background: cfg.bg, border: `1px solid ${cfg.border}`,
          color: cfg.text, fontSize: "0.72rem", fontWeight: 700,
          cursor: "pointer", letterSpacing: "0.2px", whiteSpace: "nowrap",
          transition: "all 0.15s ease",
        }}
      >
        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: cfg.dot, boxShadow: `0 0 6px ${cfg.dot}`, flexShrink: 0 }} />
        {cfg.label}
        <i className="fas fa-chevron-down" style={{ fontSize: "8px", opacity: 0.7 }}></i>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 500,
          background: DS.surfaceRaised, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "10px", padding: "4px", minWidth: "176px",
          boxShadow: "0 16px 40px rgba(0,0,0,0.5)", backdropFilter: "blur(12px)",
        }}>
          {Object.entries(STATUS_CONFIG).map(([key, c]) => (
            <button
              key={key}
              onClick={() => { onChange(key); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                width: "100%", padding: "7px 10px", borderRadius: "7px",
                background: status === key ? "rgba(255,255,255,0.06)" : "transparent",
                border: "none", color: c.text, fontSize: "0.78rem",
                fontWeight: status === key ? 700 : 500, cursor: "pointer",
                textAlign: "left", transition: "background 0.1s ease",
              }}
              onMouseOver={e => { if(status !== key) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              onMouseOut={e => { if(status !== key) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: c.dot, boxShadow: `0 0 6px ${c.dot}`, flexShrink: 0 }} />
              {c.label}
              {status === key && <i className="fas fa-check" style={{ marginLeft: "auto", fontSize: "10px", opacity: 0.8 }}></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating }) {
  const num = parseFloat(rating) || 0;
  if (!num) return null;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.72rem", fontWeight: 700, color: DS.accentAmber }}>
      <i className="fas fa-star" style={{ fontSize: "9px" }}></i>
      {num.toFixed(1)}
    </span>
  );
}

function KpiCard({ label, value, sub, accent, icon, glow }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        background: hovered ? DS.surfaceRaised : DS.surfacePrimary,
        border: `1px solid ${hovered && glow ? accent + "44" : DS.surfaceBorder}`,
        borderRadius: "12px", padding: "16px 18px",
        transition: "all 0.2s ease",
        boxShadow: hovered && glow ? `0 0 18px ${accent}22` : "none",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: DS.textSecondary, textTransform: "uppercase", letterSpacing: "0.8px" }}>{label}</span>
        <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${accent}18`, border: `1px solid ${accent}30`, display: "flex", alignItems: "center", justifyContent: "center", color: accent, fontSize: "12px", flexShrink: 0 }}>
          <i className={`fas ${icon}`}></i>
        </span>
      </div>
      <div style={{ fontSize: "1.75rem", fontWeight: 800, color: DS.textPrimary, letterSpacing: "-1px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {sub && <div style={{ fontSize: "0.72rem", color: glow ? accent : DS.textSecondary, fontWeight: 600, marginTop: "5px" }}>{sub}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function B2BLeadGenerator() {
  // State
  const [leads, setLeads] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [scraperOpen, setScraperOpen] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [activeView, setActiveView] = useState("table");
  const [editingId, setEditingId] = useState(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [toast, setToast] = useState(null); // { leadId, name, type }
  const [copiedPitchId, setCopiedPitchId] = useState(null);

  // Filters
  const [search, setSearch] = useState("");
  const [cityF, setCityF] = useState("all");
  const [webF, setWebF] = useState("all");
  const [statusF, setStatusF] = useState("all");

  const fileRef = useRef(null);

  // ── Firestore Real-time Sync ──
  useEffect(() => {
    const unsub = subscribeToB2BLeads(
      (data) => { setLeads(data); setIsLoaded(true); },
      (err)  => { console.error("B2B leads sync error:", err); setIsLoaded(true); }
    );
    return () => unsub && unsub();
  }, []);

  // ── CSV Parser ──
  const parseAndImport = useCallback((text, fileName = "") => {
    if (!text || !text.trim()) {
      alert("CSV file khali hai!");
      return;
    }
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) {
      alert("CSV file empty lag rahi hai. Pehle scraper script se leads download karein.");
      return;
    }

    const splitRow = (str) => {
      const arr = []; let q = false, col = "";
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c === '"') {
          if (q && str[i+1] === '"') { col += '"'; i++; }
          else q = !q;
        } else if (c === ',' && !q) {
          arr.push(col.trim());
          col = "";
        } else {
          col += c;
        }
      }
      arr.push(col.trim());
      return arr;
    };

    const headers = splitRow(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g,""));
    const idx = (keys) => headers.findIndex(h => keys.some(k => h.includes(k)));
    const nameI  = idx(["name","title","business"]);
    const phoneI = idx(["phone","tel","mobile","contact"]);
    const emailI = idx(["email","mail"]);
    const webI   = idx(["web","url","site","link"]);
    const rateI  = idx(["rate","star","score"]);

    const fn = (fileName || "").toLowerCase();
    const city = fn.includes("udaipur") ? "Udaipur" : fn.includes("chittor") ? "Chittorgarh" : "Bhilwara";
    const cat  = fn.includes("marble") || fn.includes("granite") ? "Marble & Granite"
               : fn.includes("dharamshala") || fn.includes("trust") ? "Dharamshala & Trusts"
               : fn.includes("hotel") || fn.includes("resort") ? "Hotels & Resorts"
               : fn.includes("textile") ? "Textile & Manufacturing" : "General";

    const batch = [];

    lines.slice(1).forEach(line => {
      const cols = splitRow(line);
      const name = (nameI !== -1 ? cols[nameI] : cols[0]) || "";
      if (!name.trim()) return;
      const phone = (phoneI !== -1 ? cols[phoneI] : cols[1]) || "";
      const email = (emailI !== -1 ? cols[emailI] : "") || "";
      const website = (webI !== -1 ? cols[webI] : cols[2]) || "";
      const rating = (rateI !== -1 ? cols[rateI] : cols[3]) || "";
      batch.push({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        website: website.trim(),
        rating: rating.trim(),
        city,
        category: cat,
        notes: !website.trim() ? "NO WEBSITE — Prime outreach target." : "",
      });
    });

    if (!batch.length) {
      alert("CSV mein koi valid leads nahi mili.");
      return;
    }

    setIsImporting(true);

    // Save to Firestore (cloud)
    addB2BLeads(batch)
      .then(({ added, skipped }) => {
        setIsImporting(false);
        alert(`✅ ${added} new leads Firestore Cloud mein save ho gaye!${skipped ? ` (${skipped} duplicate phones skip kiye)` : ""}`);
      })
      .catch((err) => {
        setIsImporting(false);
        alert(`❌ Firestore save failed: ${err.message || "Error"}. Browser console check karein.`);
        console.error("Firestore save error:", err);
      });
  }, []);

  const handleFile = (file) => {
    if (!file) return;
    const r = new FileReader();
    r.onload = e => parseAndImport(e.target.result, file.name);
    r.onerror = err => {
      console.error("FileReader error:", err);
      alert("File read karne mein error aayi!");
    };
    r.readAsText(file, "UTF-8");
  };

  // ── Lead Operations (Firestore) ──
  const updateStatus = (id, s) => updateB2BLeadStatus(id, s);
  const saveNotes = (id, notes) => { updateB2BLeadNotes(id, notes); setEditingId(null); };
  const deleteLead = (id, name) => {
    if (window.confirm(`Delete "${name}"?`)) deleteB2BLead(id);
  };

  // ── Scraper Clipboard Helper ──
  const copyCode = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(SCRAPER_CODE);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2500);
    }
  };

  // ── 1-Click Pitch Clipboard Helper (with emojis) ──
  const copyPitch = (lead) => {
    const text = generateWhatsAppPitch(lead);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPitchId(lead.id);
      setTimeout(() => setCopiedPitchId(null), 2500);
    }
  };

  // ── WhatsApp ──
  const waLink = (lead) => {
    let ph = lead.phone?.replace(/\D/g,"") || "";
    if (ph.length === 10) ph = "91" + ph;
    if (ph.length === 11 && ph[0] === "0") ph = "91" + ph.slice(1);
    if (!ph) return "";
    const text = generateWhatsAppPitch(lead);
    // Direct link to avoid wa.me 302 redirect which corrupts 4-byte UTF-8 emojis into %EF%BF%BD ()
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const base = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
    return `${base}?phone=${ph}&text=${encodeURIComponent(text)}`;
  };

  // ── 1-Click Pre-filled Email Pitch ──
  const emailLink = (lead) => {
    if (!lead.email) return "";
    const { subject, body } = generateEmailPitch(lead);
    return `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // ── Export ──
  const exportCSV = () => {
    if (!leads.length) return;
    const h = ["Business Name","Phone","Website","Rating","City","Category","Status","Notes","Imported"];
    const rows = leads.map(l => [`"${(l.name||"").replace(/"/g,'""')}"`,"\""+l.phone+"\"","\""+l.website+"\"","\""+l.rating+"\"","\""+l.city+"\"","\""+l.category+"\"","\""+l.status+"\"","\""+((l.notes||"").replace(/"/g,'""'))+"\"","\""+l.importedAt+"\""]);
    const csv = "data:text/csv;charset=utf-8,"+encodeURI([h.join(","),...rows.map(r=>r.join(","))].join("\n"));
    const a = document.createElement("a"); a.href=csv; a.download=`ChittorTech_B2B_Leads_${Date.now()}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  // ── Contact Action (Trigger Outreach & Auto-Mark Contacted) ──
  const onContactClick = (lead, type) => {
    setToast({ leadId: lead.id, name: lead.name, type });
    if (!lead.status || lead.status === "new") {
      updateStatus(lead.id, "contacted");
    }
  };

  // ── Filtered & Prioritized Leads ──
  // Dispatched ("Pitch Dispatched", "In Negotiation") float to the top; untouched new leads stay below.
  const filtered = useMemo(() => {
    const list = leads.filter(l => {
      if (search.trim()) {
        const q = search.toLowerCase();
        if (![(l.name||""),(l.phone||""),(l.website||""),(l.notes||"")].some(v=>v.toLowerCase().includes(q))) return false;
      }
      if (cityF !== "all" && l.city !== cityF) return false;
      if (statusF !== "all" && (l.status||"new") !== statusF) return false;
      if (webF === "no_web" && l.website?.trim()) return false;
      if (webF === "has_web" && !l.website?.trim()) return false;
      return true;
    });

    return list.sort((a, b) => {
      const pA = STATUS_PRIORITY[a.status] || STATUS_PRIORITY.new;
      const pB = STATUS_PRIORITY[b.status] || STATUS_PRIORITY.new;
      if (pA !== pB) return pA - pB;

      // Within same status tier: Most recent activity / update or import at top
      const timeA = a.updatedAtDate?.getTime?.() || (a.updatedAt?.toMillis ? a.updatedAt.toMillis() : (a.importedAtDate?.getTime?.() || 0));
      const timeB = b.updatedAtDate?.getTime?.() || (b.updatedAt?.toMillis ? b.updatedAt.toMillis() : (b.importedAtDate?.getTime?.() || 0));
      return timeB - timeA;
    });
  }, [leads, search, cityF, statusF, webF]);

  // ── Stats ──
  const stats = useMemo(() => ({
    total:     leads.length,
    noWeb:     leads.filter(l => !l.website?.trim()).length,
    hasWeb:    leads.filter(l =>  l.website?.trim()).length,
    contacted: leads.filter(l => l.status === "contacted").length,
    interested:leads.filter(l => l.status === "interested").length,
    converted: leads.filter(l => l.status === "converted").length,
    lost:      leads.filter(l => l.status === "lost").length,
  }), [leads]);

  /* ─────────────────────── RENDER ─────────────────────── */
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: DS.textPrimary, animation: "b2bFadeIn 0.25s ease" }}>
      <style>{`
        @keyframes b2bFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulseGlow { 0%,100% { opacity:1; } 50% { opacity:0.35; } }
        @keyframes toastSlideDown { from { transform: translate(-50%, -36px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        .b2b-row:hover { background: #f8fafc !important; }
        .b2b-action-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .b2b-chip:hover { background: rgba(99,102,241,0.08) !important; border-color: rgba(99,102,241,0.3) !important; color: #6366f1 !important; transform: translateY(-1px); }
        .b2b-preset:hover { border-color: rgba(99,102,241,0.3) !important; background: rgba(99,102,241,0.06) !important; }
        .b2b-wa-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: rgba(15,23,42,0.18); border-radius: 4px; }
        .b2b-note-input:focus { outline: none; border-color: ${DS.accentPrimary} !important; box-shadow: ${DS.glowPrimary}; }
        .b2b-search:focus { outline: none; border-color: ${DS.accentPrimary} !important; box-shadow: ${DS.glowPrimary}; }
        select { appearance: none; background-color: #ffffff; }
        select:focus { outline: none; border-color: ${DS.accentPrimary} !important; }
      `}</style>

      {/* ══════════════════════════════════════════
          FLOATING TOP TOAST NOTIFICATION
      ══════════════════════════════════════════ */}
      {toast && (
        <div style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999999,
          width: "calc(100% - 32px)",
          maxWidth: "740px",
          background: "#ffffff",
          border: "1.5px solid rgba(34, 197, 94, 0.35)",
          borderRadius: "16px",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.22), 0 4px 14px rgba(22, 163, 74, 0.16)",
          animation: "toastSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", flexShrink: 0,
              boxShadow: "0 4px 12px rgba(34, 197, 94, 0.35)",
            }}>
              <i className={toast.type === "whatsapp" ? "fab fa-whatsapp" : "fas fa-envelope"}></i>
            </span>
            <div>
              <div style={{ fontSize: "0.86rem", fontWeight: 800, color: "#0f172a", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <span>{toast.type === "whatsapp" ? "WhatsApp Pitch Sent" : "Email Sent"}</span>
                <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "#16a34a", background: "rgba(34, 197, 94, 0.12)", border: "1px solid rgba(34, 197, 94, 0.25)", padding: "1px 8px", borderRadius: "20px" }}>
                  {toast.name}
                </span>
              </div>
              <div style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "1px" }}>
                Outcome select karein (Firestore Cloud par real-time save hoga):
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
            {[
              { label: "Contacted", val: "contacted", bg: "rgba(99,102,241,0.1)", color: "#4338ca", border: "rgba(99,102,241,0.25)" },
              { label: "Interested", val: "interested", bg: "rgba(147,51,234,0.1)", color: "#7e22ce", border: "rgba(147,51,234,0.25)" },
              { label: "Closed Deal ✓", val: "converted", bg: "rgba(34,197,94,0.12)", color: "#15803d", border: "rgba(34,197,94,0.3)" },
              { label: "Not Interested", val: "lost", bg: "rgba(100,116,139,0.1)", color: "#475569", border: "rgba(100,116,139,0.2)" },
            ].map(opt => (
              <button
                key={opt.val}
                onClick={() => {
                  updateStatus(toast.leadId, opt.val);
                  setToast(null);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: `1px solid ${opt.border}`,
                  background: opt.bg,
                  color: opt.color,
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Mark {opt.label}
              </button>
            ))}
            <button
              onClick={() => setToast(null)}
              style={{
                background: "rgba(15,23,42,0.06)",
                border: "none",
                color: "#64748b",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                cursor: "pointer",
                marginLeft: "2px",
                fontWeight: 700,
              }}
              title="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════
          1. COMMAND BAR
      ══════════════════════════════════════════ */}
      <div style={{
        background: DS.surfacePrimary,
        border: `1px solid ${DS.surfaceBorder}`,
        borderRadius: "14px", marginBottom: "16px",
        padding: "18px 22px",
        boxShadow: "0 1px 4px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)",
      }}>
        {/* Row 1: Title + Action Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "9px",
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              border: `1px solid ${DS.accentPrimaryBorder}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(99,102,241,0.3)", flexShrink: 0,
            }}>
              <i className="fas fa-satellite-dish" style={{ color: "#ffffff", fontSize: "15px" }}></i>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: DS.textPrimary, margin: 0, letterSpacing: "-0.3px" }}>
                  B2B Outbound Lead Engine
                </h2>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "5px",
                  background: DS.accentGreenBg, border: `1px solid ${DS.accentGreenBorder}`,
                  color: DS.accentGreen, fontSize: "0.62rem", fontWeight: 800,
                  padding: "2px 8px", borderRadius: "20px", letterSpacing: "0.6px",
                  textTransform: "uppercase",
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: DS.accentGreen, animation: "pulseGlow 1.8s ease infinite" }}></span>
                  ACTIVE
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.75rem", color: DS.textSecondary }}>
                Mewar B2B Growth Machine — Google Maps → Prospect → Pitch → Close
              </p>
            </div>
          </div>

          <button
            onClick={copyCode}
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "7px 14px", borderRadius: "8px",
              background: codeCopied ? DS.accentGreenBg : "rgba(99,102,241,0.08)",
              border: `1px solid ${codeCopied ? DS.accentGreenBorder : DS.accentPrimaryBorder}`,
              color: codeCopied ? DS.accentGreen : DS.accentPrimary,
              fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            title="Google Maps console (F12) mein paste karne ke liye extractor script copy karein"
          >
            <i className={`fas ${codeCopied ? "fa-check" : "fa-copy"}`} style={{ fontSize: "11px" }}></i>
            <span>{codeCopied ? "Scraper Code Copied! ✓" : "Copy Scraper Code"}</span>
          </button>
        </div>

        {/* Row 2: Target Niche Presets */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", alignItems: "center" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.8px", marginRight: "4px", whiteSpace: "nowrap" }}>
            Quick Launch →
          </span>
          {TARGET_PRESETS.map(p => (
            <a
              key={p.id}
              href={`https://www.google.com/maps/search/${encodeURIComponent(p.query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="b2b-chip"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "5px 11px", borderRadius: "8px", textDecoration: "none",
                background: "rgba(255,255,255,0.04)", border: `1px solid ${DS.surfaceBorder}`,
                color: DS.textSecondary, fontSize: "0.76rem", fontWeight: 600,
                transition: "all 0.15s ease", cursor: "pointer",
              }}
            >
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: p.color, boxShadow: `0 0 8px ${p.color}` }}></span>
              <i className={`fas ${p.icon}`} style={{ color: p.color, fontSize: "11px" }}></i>
              {p.label}
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "8px", opacity: 0.5 }}></i>
            </a>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          2. KPI STAT STRIP
      ══════════════════════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))", gap: "10px", marginBottom: "16px" }}>
        <KpiCard label="Saved in Engine" value={stats.total} sub="Total prospects" accent={DS.accentPrimary} icon="fa-database" />
        <KpiCard label="🔥 No Website" value={stats.noWeb} sub="Needs web presence" accent={DS.accentAmber} icon="fa-fire" glow />
        <KpiCard label="Has Website" value={stats.hasWeb} sub="SEO & Redesign" accent={DS.accentBlue} icon="fa-globe" />
        <KpiCard label="Pitch Dispatched" value={stats.contacted} sub="Messages sent" accent={DS.accentPrimary} icon="fa-paper-plane" />
        <KpiCard label="Interested" value={stats.interested} sub="In active discussion" accent={DS.accentGreen} icon="fa-handshake" glow />
        <KpiCard label="Not Interested" value={stats.lost} sub="Cold / dropped leads" accent="#64748b" icon="fa-ban" />
      </div>

      {/* Hidden file input triggered by fileRef */}
      <input
        type="file"
        ref={fileRef}
        accept=".csv,text/csv,application/vnd.ms-excel"
        style={{ display: "none" }}
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {/* ══════════════════════════════════════════
          3. DROPZONE (CSV Upload & Drag-and-Drop)
      ══════════════════════════════════════════ */}
      <div
        onDragEnter={e => { e.preventDefault(); e.stopPropagation(); setDragOver(true); }}
        onDragOver={e => { e.preventDefault(); e.stopPropagation(); setDragOver(true); }}
        onDragLeave={e => { e.preventDefault(); e.stopPropagation(); setDragOver(false); }}
        onDrop={e => {
          e.preventDefault();
          e.stopPropagation();
          setDragOver(false);
          const f = e.dataTransfer?.files?.[0];
          if (f) handleFile(f);
        }}
        onClick={() => {
          if (!isImporting) fileRef.current?.click();
        }}
        style={{
          border: `1.5px dashed ${dragOver ? DS.accentPrimary : DS.surfaceBorder}`,
          background: dragOver ? DS.accentPrimaryBg : "transparent",
          borderRadius: "12px", padding: "16px 20px",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "16px", cursor: isImporting ? "wait" : "pointer", marginBottom: "14px",
          transition: "all 0.2s ease",
          boxShadow: dragOver ? DS.glowPrimary : "none",
          opacity: isImporting ? 0.7 : 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <i className={`fas ${isImporting ? "fa-spinner fa-spin" : "fa-cloud-arrow-up"}`} style={{ color: dragOver || isImporting ? DS.accentPrimary : DS.textTertiary, fontSize: "1.2rem", transition: "color 0.2s" }}></i>
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: dragOver || isImporting ? DS.accentPrimary : DS.textSecondary }}>
              {isImporting ? "Saving leads to Firestore Cloud..." : "Drop Google Maps CSV here — or click to browse"}
            </div>
            <div style={{ fontSize: "0.72rem", color: DS.textTertiary }}>
              Auto-detects columns • Deduplicates phone numbers • Saves to Firestore Cloud ☁️
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          4. FILTER & SEARCH BAR
      ══════════════════════════════════════════ */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        gap: "8px", marginBottom: "12px",
      }}>
        {/* Search */}
        <div style={{ position: "relative", flex: "1 1 280px", minWidth: "200px" }}>
          <i className="fas fa-magnifying-glass" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: DS.textTertiary, fontSize: "12px", pointerEvents: "none" }}></i>
          <input
            className="b2b-search"
            type="text"
            placeholder="Search leads, phones, notes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "8px 10px 8px 34px",
              background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
              borderRadius: "8px", color: DS.textPrimary, fontSize: "0.82rem",
              transition: "all 0.15s ease", boxSizing: "border-box",
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "11px" }}>✕</button>
          )}
        </div>

        {/* City */}
        <select value={cityF} onChange={e => setCityF(e.target.value)} style={{ padding: "7px 10px", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", color: DS.textSecondary, fontSize: "0.78rem", cursor: "pointer" }}>
          <option value="all">All Cities</option>
          <option value="Bhilwara">Bhilwara</option>
          <option value="Chittorgarh">Chittorgarh</option>
          <option value="Udaipur">Udaipur</option>
        </select>

        {/* Web status */}
        <select value={webF} onChange={e => setWebF(e.target.value)} style={{ padding: "7px 10px", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", color: DS.textSecondary, fontSize: "0.78rem", cursor: "pointer" }}>
          <option value="all">All Targets</option>
          <option value="no_web">🔥 No Website (Prime)</option>
          <option value="has_web">Has Website</option>
        </select>

        {/* Status */}
        <select value={statusF} onChange={e => setStatusF(e.target.value)} style={{ padding: "7px 10px", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", color: DS.textSecondary, fontSize: "0.78rem", cursor: "pointer" }}>
          <option value="all">All Statuses</option>
          {Object.entries(STATUS_CONFIG).map(([k, c]) => <option key={k} value={k}>{c.label}</option>)}
        </select>

        {/* View toggle */}
        <div style={{ display: "flex", background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "8px", padding: "3px", marginLeft: "auto" }}>
          {[["table","fa-list"],["cards","fa-th-large"]].map(([v, ico]) => (
            <button key={v} onClick={() => setActiveView(v)} style={{ padding: "5px 11px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "0.76rem", fontWeight: 700, transition: "all 0.15s ease", background: activeView === v ? "rgba(255,255,255,0.08)" : "transparent", color: activeView === v ? DS.textPrimary : DS.textTertiary, display: "flex", alignItems: "center", gap: "5px" }}>
              <i className={`fas ${ico}`} style={{ fontSize: "10px" }}></i>
              {v === "table" ? "Table" : "Cards"}
            </button>
          ))}
        </div>

        {/* Lead count chip */}
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: DS.textTertiary, whiteSpace: "nowrap" }}>
          {filtered.length} / {leads.length}
        </span>

        {/* Reset / Clear */}
        {leads.length > 0 && (
          <button
            onClick={() => { if (window.confirm("Clear all leads?")) { setLeads([]); localStorage.removeItem("ct_b2b_leads_store_v1"); } }}
            style={{ background: "none", border: `1px solid rgba(248,113,113,0.25)`, color: DS.accentRed, padding: "6px 10px", borderRadius: "8px", fontSize: "0.72rem", cursor: "pointer", transition: "all 0.15s ease" }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        )}
      </div>

      {/* ══════════════════════════════════════════
          5. LEADS DISPLAY
      ══════════════════════════════════════════ */}
      {filtered.length === 0 ? (
        <div style={{
          background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`,
          borderRadius: "14px", padding: "52px 24px", textAlign: "center",
        }}>
          <i className="fas fa-inbox" style={{ fontSize: "2rem", color: DS.textTertiary, marginBottom: "12px", display: "block" }}></i>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: DS.textSecondary, marginBottom: "6px" }}>No leads match your filters</div>
          <div style={{ fontSize: "0.8rem", color: DS.textTertiary, marginBottom: "18px" }}>Upload a Google Maps CSV or adjust the filters above</div>
          <button onClick={() => { setSearch(""); setCityF("all"); setWebF("all"); setStatusF("all"); }} style={{ background: DS.accentPrimary, color: "#09090b", border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: 800, fontSize: "0.82rem", cursor: "pointer" }}>
            Clear All Filters
          </button>
        </div>
      ) : activeView === "table" ? (
        /* ── TABLE VIEW ── */
        <div style={{ background: DS.surfacePrimary, border: `1px solid ${DS.surfaceBorder}`, borderRadius: "14px", overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", tableLayout: "auto" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${DS.surfaceBorder}` }}>
                  {["Business Entity","City","Contact & Outreach","Opportunity","Status","Notes","—"].map((h, i) => (
                    <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "0.65rem", color: DS.textTertiary, textTransform: "uppercase", letterSpacing: "0.8px", whiteSpace: "nowrap", background: "#f8fafc" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(lead => {
                  const hasWeb = Boolean(lead.website?.trim());
                  const wa = waLink(lead);
                  const isEditing = editingId === lead.id;
                  const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
                  const isPitched = lead.status === "contacted" || lead.status === "interested";

                  return (
                    <tr
                      key={lead.id}
                      className="b2b-row"
                      style={{
                        borderBottom: `1px solid ${DS.surfaceBorder}`,
                        borderLeft: isPitched ? `3px solid ${lead.status === "interested" ? "#9333ea" : "#6366f1"}` : "3px solid transparent",
                        background: isPitched ? (lead.status === "interested" ? "rgba(147,51,234,0.025)" : "rgba(99,102,241,0.02)") : "transparent",
                        transition: "all 0.12s ease",
                      }}
                    >
                      {/* Entity */}
                      <td style={{ padding: "12px 14px", maxWidth: "240px" }}>
                        <div style={{ fontWeight: 700, color: DS.textPrimary, marginBottom: "3px", lineHeight: 1.3 }}>{lead.name}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "0.65rem", color: DS.textTertiary, background: "rgba(255,255,255,0.05)", padding: "1px 7px", borderRadius: "4px", fontWeight: 600 }}>
                            {lead.category || "Enterprise"}
                          </span>
                          <StarRating rating={lead.rating} />
                        </div>
                      </td>

                      {/* City */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: "0.76rem", color: DS.textSecondary, fontWeight: 600 }}>
                          <i className="fas fa-location-dot" style={{ color: DS.accentRed, marginRight: "5px", fontSize: "10px" }}></i>
                          {lead.city}
                        </span>
                      </td>

                      {/* Contact & Outreach (WhatsApp + Email) */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "6px" }}>
                          <span style={{ fontFamily: DS.textMono, fontSize: "0.78rem", color: DS.textSecondary, letterSpacing: "0.5px" }}>
                            {lead.phone || <span style={{ color: DS.textTertiary, fontStyle: "italic" }}>No phone</span>}
                          </span>
                          {lead.email && (
                            <span style={{ fontSize: "0.72rem", color: DS.accentIndigo, overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px" }}>
                              <i className="fas fa-envelope" style={{ fontSize: "9px", marginRight: "4px" }}></i>
                              {lead.email}
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                          {lead.phone && (
                            <>
                              <a href={wa} target="_blank" rel="noopener noreferrer"
                                onClick={() => onContactClick(lead, "whatsapp")}
                                className="b2b-wa-btn"
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "5px",
                                  padding: "4px 10px", borderRadius: "6px",
                                  background: "rgba(34,197,94,0.12)", border: `1px solid ${DS.accentGreenBorder}`,
                                  color: DS.accentGreen, fontSize: "0.72rem", fontWeight: 700,
                                  textDecoration: "none", transition: "all 0.15s ease",
                                }}
                              >
                                <i className="fab fa-whatsapp" style={{ fontSize: "12px" }}></i> WhatsApp
                              </a>
                              <button
                                type="button"
                                onClick={() => copyPitch(lead)}
                                title="Copy pitch message with emojis to clipboard"
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "4px",
                                  padding: "4px 8px", borderRadius: "6px",
                                  background: copiedPitchId === lead.id ? "rgba(34,197,94,0.15)" : "rgba(15,23,42,0.05)",
                                  border: `1px solid ${copiedPitchId === lead.id ? DS.accentGreenBorder : DS.surfaceBorder}`,
                                  color: copiedPitchId === lead.id ? DS.accentGreen : DS.textSecondary,
                                  fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                <i className={`fas ${copiedPitchId === lead.id ? "fa-check" : "fa-copy"}`} style={{ fontSize: "10px" }}></i>
                                <span>{copiedPitchId === lead.id ? "Copied! ✓" : "Copy"}</span>
                              </button>
                              <a href={`tel:${lead.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "4px 8px", borderRadius: "6px", background: "rgba(15,23,42,0.05)", border: `1px solid ${DS.surfaceBorder}`, color: DS.textSecondary, fontSize: "0.72rem", fontWeight: 600, textDecoration: "none" }}>
                                <i className="fas fa-phone-alt" style={{ fontSize: "10px" }}></i>
                              </a>
                            </>
                          )}
                          {lead.email && (
                            <a
                              href={emailLink(lead)}
                              onClick={() => onContactClick(lead, "email")}
                              title={`Send Pre-filled Pitch Email to ${lead.email}`}
                              style={{
                                display: "inline-flex", alignItems: "center", gap: "4px",
                                padding: "4px 9px", borderRadius: "6px",
                                background: "rgba(37,99,235,0.08)", border: `1px solid ${DS.accentBlueBorder}`,
                                color: DS.accentBlue, fontSize: "0.72rem", fontWeight: 700,
                                textDecoration: "none", transition: "all 0.15s ease",
                              }}
                            >
                              <i className="fas fa-envelope" style={{ fontSize: "11px" }}></i> Email
                            </a>
                          )}
                        </div>
                      </td>

                      {/* Opportunity */}
                      <td style={{ padding: "12px 14px" }}>
                        {hasWeb ? (
                          <div>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: DS.accentBlueBg, border: `1px solid ${DS.accentBlueBorder}`, color: DS.accentBlue, padding: "3px 8px", borderRadius: "5px", fontSize: "0.68rem", fontWeight: 700 }}>
                              <i className="fas fa-globe" style={{ fontSize: "9px" }}></i> Has Website
                            </span>
                            <div style={{ marginTop: "4px" }}>
                              <a href={lead.website.startsWith("http") ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" style={{ color: DS.accentIndigo, fontSize: "0.72rem", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "3px", maxWidth: "130px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {lead.website.replace(/^https?:\/\//i,"").split("/")[0]}
                                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "8px" }}></i>
                              </a>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <span style={{
                              display: "inline-flex", alignItems: "center", gap: "5px",
                              background: DS.accentAmberBg, border: `1px solid ${DS.accentAmberBorder}`,
                              color: DS.accentAmber, padding: "3px 8px", borderRadius: "5px",
                              fontSize: "0.68rem", fontWeight: 800,
                              boxShadow: "0 0 14px rgba(245,158,11,0.12)",
                            }}>
                              🔥 NO WEBSITE
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Status pill */}
                      <td style={{ padding: "12px 14px", whiteSpace: "nowrap" }}>
                        <StatusPill status={lead.status || "new"} onChange={s => updateStatus(lead.id, s)} />
                      </td>

                      {/* Inline Notes */}
                      <td style={{ padding: "12px 14px", minWidth: "200px", maxWidth: "280px" }}>
                        {isEditing ? (
                          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                            <input
                              className="b2b-note-input"
                              autoFocus
                              type="text"
                              value={notesDraft}
                              onChange={e => setNotesDraft(e.target.value)}
                              onKeyDown={e => { if (e.key === "Enter") saveNotes(lead.id, notesDraft); if (e.key === "Escape") setEditingId(null); }}
                              placeholder="Add follow-up note..."
                              style={{
                                flex: 1, padding: "5px 9px", borderRadius: "6px",
                                background: DS.surfaceRaised, border: `1px solid ${DS.surfaceBorder}`,
                                color: DS.textPrimary, fontSize: "0.78rem",
                                fontFamily: "inherit", transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                              }}
                            />
                            <button onClick={() => saveNotes(lead.id, notesDraft)} style={{ background: DS.accentPrimary, border: "none", color: "#09090b", padding: "5px 9px", borderRadius: "6px", cursor: "pointer", fontWeight: 800, fontSize: "12px" }}>✓</button>
                            <button onClick={() => setEditingId(null)} style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "12px" }}>✕</button>
                          </div>
                        ) : (
                          <div
                            onClick={() => { setEditingId(lead.id); setNotesDraft(lead.notes || ""); }}
                            style={{ cursor: "text", fontSize: "0.76rem", color: lead.notes ? DS.textSecondary : DS.textTertiary, fontStyle: lead.notes ? "normal" : "italic", lineHeight: 1.45, padding: "3px 0" }}
                            title="Click to edit"
                          >
                            {lead.notes || "+ Add note"}
                          </div>
                        )}
                      </td>

                      {/* Delete */}
                      <td style={{ padding: "12px 10px", textAlign: "center" }}>
                        <button
                          onClick={() => deleteLead(lead.id, lead.name)}
                          style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", fontSize: "12px", padding: "4px", borderRadius: "4px", transition: "color 0.1s" }}
                          onMouseOver={e => e.currentTarget.style.color = DS.accentRed}
                          onMouseOut={e => e.currentTarget.style.color = DS.textTertiary}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ── CARDS VIEW ── */
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "12px" }}>
          {filtered.map(lead => {
            const hasWeb = Boolean(lead.website?.trim());
            const wa = waLink(lead);
            const isPitched = lead.status === "contacted" || lead.status === "interested";
            return (
              <div
                key={lead.id}
                style={{
                  background: isPitched ? (lead.status === "interested" ? "rgba(147,51,234,0.02)" : "rgba(99,102,241,0.02)") : DS.surfacePrimary,
                  border: isPitched
                    ? `1.5px solid ${lead.status === "interested" ? "rgba(147,51,234,0.35)" : "rgba(99,102,241,0.35)"}`
                    : `1px solid ${hasWeb ? DS.surfaceBorder : DS.accentAmberBorder}`,
                  borderRadius: "12px", padding: "16px",
                  display: "flex", flexDirection: "column", gap: "10px",
                  transition: "all 0.15s ease",
                  boxShadow: isPitched ? "0 4px 16px rgba(99,102,241,0.08)" : (hasWeb ? "none" : "0 0 18px rgba(245,158,11,0.06)"),
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <div>
                    <div style={{ fontWeight: 800, color: DS.textPrimary, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: "4px" }}>{lead.name}</div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: "0.65rem", color: DS.textTertiary, background: "rgba(255,255,255,0.05)", padding: "1px 7px", borderRadius: "4px", fontWeight: 600 }}>{lead.category}</span>
                      <span style={{ fontSize: "0.72rem", color: DS.textTertiary }}>📍 {lead.city}</span>
                      <StarRating rating={lead.rating} />
                    </div>
                  </div>
                  <button onClick={() => deleteLead(lead.id, lead.name)} style={{ background: "none", border: "none", color: DS.textTertiary, cursor: "pointer", padding: "2px", flexShrink: 0 }} onMouseOver={e=>e.currentTarget.style.color=DS.accentRed} onMouseOut={e=>e.currentTarget.style.color=DS.textTertiary}>
                    <i className="fas fa-times" style={{ fontSize: "12px" }}></i>
                  </button>
                </div>

                {/* Opportunity strip */}
                {hasWeb ? (
                  <div style={{ padding: "7px 10px", borderRadius: "7px", background: "rgba(56,189,248,0.07)", border: `1px solid rgba(56,189,248,0.15)`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: DS.accentBlue, display: "flex", alignItems: "center", gap: "5px", background: DS.accentBlueBg, padding: "5px 9px", borderRadius: "6px" }}>
                      <i className="fas fa-globe" style={{ fontSize: "10px" }}></i> Has Website
                    </span>
                    <a href={lead.website.startsWith("http")?lead.website:`https://${lead.website}`} target="_blank" rel="noopener noreferrer" style={{ color: DS.accentIndigo, fontSize: "0.7rem", textDecoration: "none", fontWeight: 700 }}>View ↗</a>
                  </div>
                ) : (
                  <div style={{ padding: "7px 10px", borderRadius: "7px", background: DS.accentAmberBg, border: `1px solid ${DS.accentAmberBorder}`, display: "flex", alignItems: "center", gap: "7px", boxShadow: "0 0 14px rgba(245,158,11,0.08)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: DS.accentAmber }}>🔥 NO WEBSITE</span>
                  </div>
                )}

                {/* Notes */}
                <div onClick={() => { setEditingId(lead.id); setNotesDraft(lead.notes||""); }} style={{ fontSize: "0.75rem", color: lead.notes?DS.textSecondary:DS.textTertiary, fontStyle: lead.notes?"normal":"italic", lineHeight: 1.4, cursor: "text", background: "rgba(255,255,255,0.025)", padding: "8px 10px", borderRadius: "7px", minHeight: "36px" }}>
                  {editingId===lead.id ? (
                    <div onClick={e=>e.stopPropagation()} style={{display:"flex",gap:"5px"}}>
                      <input autoFocus type="text" value={notesDraft} onChange={e=>setNotesDraft(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")saveNotes(lead.id,notesDraft);if(e.key==="Escape")setEditingId(null);}} style={{flex:1,background:"transparent",border:"none",color:DS.textPrimary,fontSize:"0.75rem",fontFamily:"inherit"}} />
                      <button onClick={()=>saveNotes(lead.id,notesDraft)} style={{background:DS.accentBlue,border:"none",color:"#0d1117",padding:"2px 7px",borderRadius:"4px",cursor:"pointer",fontWeight:800,fontSize:"11px"}}>✓</button>
                    </div>
                  ) : (lead.notes || "+ Add strategy note")}
                </div>

                {/* Footer actions */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", borderTop: `1px solid ${DS.surfaceBorder}`, paddingTop: "10px" }}>
                  <StatusPill status={lead.status||"new"} onChange={s=>updateStatus(lead.id,s)} />
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                    {lead.phone && (
                      <>
                        <a href={wa} target="_blank" rel="noopener noreferrer" onClick={()=>onContactClick(lead, "whatsapp")} className="b2b-wa-btn" style={{ display:"inline-flex",alignItems:"center",gap:"5px",padding:"5px 10px",borderRadius:"7px",background:DS.accentGreenBg,border:`1px solid ${DS.accentGreenBorder}`,color:DS.accentGreen,fontSize:"0.74rem",fontWeight:700,textDecoration:"none",transition:"all 0.15s ease" }}>
                          <i className="fab fa-whatsapp" style={{fontSize:"12px"}}></i> WhatsApp
                        </a>
                        <button
                          type="button"
                          onClick={() => copyPitch(lead)}
                          title="Copy pitch message with emojis to clipboard"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            padding: "5px 8px", borderRadius: "7px",
                            background: copiedPitchId === lead.id ? "rgba(34,197,94,0.15)" : "rgba(15,23,42,0.05)",
                            border: `1px solid ${copiedPitchId === lead.id ? DS.accentGreenBorder : DS.surfaceBorder}`,
                            color: copiedPitchId === lead.id ? DS.accentGreen : DS.textSecondary,
                            fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          <i className={`fas ${copiedPitchId === lead.id ? "fa-check" : "fa-copy"}`} style={{ fontSize: "10px" }}></i>
                          <span>{copiedPitchId === lead.id ? "Copied! ✓" : "Copy"}</span>
                        </button>
                        <a href={`tel:${lead.phone}`} style={{ display:"inline-flex",alignItems:"center",padding:"5px 8px",borderRadius:"7px",background:"rgba(15,23,42,0.05)",border:`1px solid ${DS.surfaceBorder}`,color:DS.textSecondary,textDecoration:"none" }}>
                          <i className="fas fa-phone-alt" style={{fontSize:"10px"}}></i>
                        </a>
                      </>
                    )}
                    {lead.email && (
                      <a href={emailLink(lead)} onClick={()=>onContactClick(lead, "email")} title={`Send Pre-filled Pitch Email to ${lead.email}`} style={{ display:"inline-flex",alignItems:"center",gap:"4px",padding:"5px 9px",borderRadius:"7px",background:"rgba(37,99,235,0.08)",border:`1px solid ${DS.accentBlueBorder}`,color:DS.accentBlue,fontSize:"0.74rem",fontWeight:700,textDecoration:"none" }}>
                        <i className="fas fa-envelope" style={{fontSize:"11px"}}></i> Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


