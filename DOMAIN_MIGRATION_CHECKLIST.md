# 🚀 Domain Migration Checklist: chittortech.online ➔ chittortech.in

> **Target Domain:** `chittortech.in`  
> **Previous Domain:** `chittortech.online`  
> **Date Initiated:** 10 September 2026  
> **Objective:** Zero traffic drop, seamless SEO transition, active business email delivery, and flawless authentication.

---

## 1. 🌐 Cloudflare & DNS Configuration ✅ (COMPLETED)
- [x] **DNS Records for `chittortech.in`:**
  - [x] Point `A` record (`199.36.158.100`) to Firebase Hosting.
  - [x] Add **SPF Record** (`TXT`): `v=spf1 include:secureserver.net -all` (Verified in GoDaddy ✅).
  - [x] Add **DKIM Records** (`CNAME`):
    - `secureserver1._domainkey` ➔ `s1.dkim.chittortech_in.56c.onsecureserver.net` (DNS only) ✅
    - `secureserver2._domainkey` ➔ `s2.dkim.chittortech_in.56c.onsecureserver.net` (DNS only) ✅
  - [x] Add **MX Records** for GoDaddy Email (`smtp.secureserver.net`, `mailstore1.secureserver.net`).
- [ ] **Old Domain (`chittortech.online`) Action:**
  - [ ] Option A: Delete site from Cloudflare (if abandoning `.online` cleanly).
  - [ ] Option B: Set 301 Redirect Rule to `chittortech.in` (if maintaining traffic bridge).

---

## 2. 🔥 Firebase Hosting & Authentication ✅ (COMPLETED)
- [x] **Firebase Hosting:**
  - [x] Custom domain `chittortech.in` added and verified.
  - [x] SSL Certificate minted and live (HTTP 200 OK).
- [x] **Firebase Authentication (Authorized Domains):**
  - [x] `chittortech.in` added to Authorised Domains.
- [ ] **Old Domain Cleanup:**
  - [ ] Delete `chittortech.online` from Firebase Hosting custom domains list.
  - [ ] Delete `chittortech.online` from Firebase Auth Authorised domains list.

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
