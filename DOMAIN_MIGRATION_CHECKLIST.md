# 🚀 Domain Migration Checklist: chittortech.online ➔ chittortech.in

> **Target Domain:** `chittortech.in`  
> **Previous Domain:** `chittortech.online`  
> **Date Initiated:** 10 September 2026  
> **Objective:** Zero traffic drop, seamless SEO transition, active business email delivery, and flawless authentication.

---

## 1. 🌐 Cloudflare & DNS Configuration
- [ ] **DNS Records for `chittortech.in`:**
  - [ ] Point `A` / `CNAME` records to Hosting server (Firebase / Vercel / VPS).
  - [ ] Add **SPF Record** (`TXT`):
    - **Name:** `@`
    - **Content:** `v=spf1 include:secureserver.net -all`
    - **TTL:** `Auto`
  - [ ] Add **DKIM Records** (`CNAME`):
    - **Host 1:** `s1._domainkey` (from GoDaddy)
    - **Target 1:** (from GoDaddy)
    - **Proxy status:** ⚠️ **DNS Only (Grey Cloud ☁️)** — DO NOT proxy!
    - **Host 2:** `s2._domainkey` (from GoDaddy)
    - **Target 2:** (from GoDaddy)
    - **Proxy status:** ⚠️ **DNS Only (Grey Cloud ☁️)**
  - [ ] Add **MX Records** for GoDaddy Email if not already configured.
- [ ] **Permanent 301 Redirect (Old Domain ➔ New Domain):**
  - [ ] In Cloudflare under `chittortech.online` domain settings:
    - Go to **Rules** ➔ **Redirect Rules** (or Page Rules).
    - Rule: When URL matches `*chittortech.online/*` ➔ Dynamic redirect to `https://chittortech.in/${1}` with status **301 (Moved Permanently)**.
    - *Crucial for passing SEO authority, backlinks, and existing visitor bookmarks!*

---

## 2. 🔥 Firebase Hosting & Authentication
- [ ] **Firebase Hosting:**
  - [ ] Open Firebase Console ➔ Select Project.
  - [ ] Go to **Hosting** ➔ **Add Custom Domain**.
  - [ ] Enter `chittortech.in` (and also check "Redirect `www.chittortech.in` to `chittortech.in`").
  - [ ] Add the verification TXT/A records provided by Firebase into Cloudflare DNS.
  - [ ] Wait until SSL status shows *Active*.
- [ ] **Firebase Authentication (Authorized Domains):**
  - [ ] Go to **Authentication** ➔ **Settings** ➔ **Authorized domains**.
  - [ ] Click **Add domain** and enter `chittortech.in`.
  - [ ] *(Prevents OAuth/Google sign-in/Phone authentication failure).*
- [ ] **Backend CORS & Security Rules:**
  - [ ] Update allowed origin header in Node/Cloud Functions from `https://chittortech.online` to `https://chittortech.in`.

---

## 3. 🔍 Search Engines & Webmaster Tools (SEO Transfer)
- [ ] **Google Search Console (GSC):**
  - [ ] Add property for `https://chittortech.in` (Domain or URL Prefix).
  - [ ] Verify ownership (DNS TXT in Cloudflare or HTML tag).
  - [ ] Submit sitemap: `https://chittortech.in/sitemap.xml`.
  - [ ] In old property `chittortech.online` ➔ Go to **Settings** ➔ **Change of Address** tool ➔ Select `chittortech.in` to notify Google of site move.
- [ ] **Bing Webmaster Tools:**
  - [ ] Add & verify `https://chittortech.in` (or import directly from GSC).
  - [ ] Submit sitemap URL.
  - [ ] Use **Diagnostics & Tools** ➔ **Site Move** feature to inform Bing.
- [ ] **Yandex Webmaster:**
  - [ ] Add `chittortech.in` and submit sitemap.
  - [ ] Go to **Indexing** ➔ **Site Relocation** to transfer indexation.

---

## 4. 📍 Google Business Profile (Google My Business) & Local Citations
- [ ] **Website URL:** Edit profile ➔ change website to `https://chittortech.in`.
- [ ] **Contact Email:** Update business email to `@chittortech.in`.
- [ ] **Map Links / Services:** Verify booking/landing page links point to `.in`.
- [ ] **Local Directories (JustDial, IndiaMART, Sulekha, etc.):** Update company website URL.

---

## 5. 💻 Next.js Codebase & Asset References ✅ (DONE)
- [x] **Canonical URLs & Metadata:**
  - [x] Changed all occurrences of `https://chittortech.online` to `https://chittortech.in` across all pages and layouts.
  - [x] Updated OpenGraph (`og:url`, `og:image`) and Twitter Card links.
- [x] **Structured Data (Schema Markup):**
  - [x] Updated JSON-LD `Organization` schema (`url`, `logo`, `sameAs`).
- [x] **Public Sitemaps & Robots:**
  - [x] Updated `public/sitemap.xml` and generators to emit `https://chittortech.in/...`.
  - [x] Updated `public/robots.txt` Sitemap reference line.
- [x] **UI Emails & Contact Info:**
  - [x] Updated `business@chittortech.online` ➔ `business@chittortech.in`.
  - [x] Updated `contact@chittortech.online` ➔ `contact@chittortech.in`.
  - [x] Updated Footer (`src/components/Footer.jsx`).
  - [x] Updated Legal Pages (`LegalPageLayout.jsx`, `PolicyModal.jsx`, `PrintContractView.jsx`, `payment-terms`).
  - [x] Updated Chatbot system prompt & fallback (`src/components/Chatbot.jsx`).
  - [x] Updated Search engine indexing tracker (`SEARCH_ENGINE_INDEXING_TRACKER.md`).

---

## 6. 🏛️ Business Portals, Cloud Services & Analytics
- [ ] **Supabase:**
  - [ ] Project Settings ➔ **Authentication** ➔ **URL Configuration**:
  - [ ] **Site URL:** Update to `https://chittortech.in`
  - [ ] **Redirect URLs:** Add `https://chittortech.in/**`
- [ ] **Google Analytics 4 (GA4):**
  - [ ] Admin ➔ **Data Streams** ➔ Web Stream:
  - [ ] Update **Stream URL** to `https://chittortech.in`
  - [ ] Update Stream Name if needed.
- [ ] **Vercel (if deployed):**
  - [ ] Project Settings ➔ **Domains** ➔ Add `chittortech.in`.
- [ ] **GitHub Repository:**
  - [ ] Repo main page ➔ About (gear icon) ➔ Update Website URL to `https://chittortech.in`.
- [ ] **iStart Rajasthan Portal:**
  - [ ] Log in to iStart profile ➔ Startup Profile ➔ Update Company Website to `https://chittortech.in`.

---

## 7. 💳 Payment Gateways & Social Media Profiles
- [ ] **Payment Gateway Portals (Razorpay, Stripe, Cashfree, etc.):**
  - [ ] Update Registered Business Website URL to `https://chittortech.in`.
  - [ ] Update Webhook notification endpoints to `.in` domain if using server webhooks.
- [ ] **LinkedIn:**
  - [ ] ChittorTech Company Page ➔ Edit Page ➔ Overview ➔ Update Website URL to `https://chittortech.in`.
- [ ] **Other Social Profiles:**
  - [ ] Instagram Bio website link.
  - [ ] Facebook Page, YouTube About, and Twitter profile link.
  - [ ] WhatsApp Business Catalog & profile link.
