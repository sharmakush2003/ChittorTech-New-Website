const fs = require('fs');
const path = require('path');

const validUrls = fs.readFileSync('valid_urls.txt', 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
const blogs = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8')).map(b => 'https://chittortech.online' + (b.link.startsWith('/') ? b.link : '/' + b.link));
const techs = JSON.parse(fs.readFileSync('src/data/technologies.json', 'utf8')).map(t => `https://chittortech.online/technology/${t.slug}`);

// ----------------------------------------------------
// BATCH 1: PREVIOUS SUBMISSIONS
// ----------------------------------------------------
const bingInitial = [
  'https://chittortech.online/cities/visakhapatnam',
  'https://chittortech.online/blog',
  'https://chittortech.online/bridal-store',
  'https://chittortech.online/cities/kanpur',
  'https://chittortech.online/pos',
  'https://chittortech.online/retaile-store',
  'https://chittortech.online/trading-overview'
];

const yandexInitial = [
  'https://chittortech.online/cities/ahmedabad',
  'https://chittortech.online/cities/hyderabad',
  'https://chittortech.online/cities/bengaluru'
];

// Helper to prioritize high-value pages for previous Sep 4 batch
function prioritizeSep4(urls, excludeSet) {
  const corePages = [];
  const blogPages = [];
  const cityPages = [];
  const cityServicePages = [];

  urls.forEach(u => {
    if (excludeSet.has(u)) return;
    if (u.includes('/technology/')) return; // Tech pages were not part of Sep 4 batch
    if (blogs.includes(u)) {
      blogPages.push(u);
    } else if (u.includes('/cities/')) {
      cityPages.push(u);
    } else if (u.split('/').length === 4 && !u.includes('-in-')) {
      corePages.push(u);
    } else {
      cityServicePages.push(u);
    }
  });

  return [...corePages, ...blogPages, ...cityPages, ...cityServicePages];
}

// BATCH 2: SUBMITTED ON SEP 04, 2026 (MARKED AS DONE)
const bingPoolSep4 = prioritizeSep4(validUrls, new Set(bingInitial));
const bingBatchSep4 = bingPoolSep4.slice(0, 100);

const yandexPoolSep4 = prioritizeSep4(validUrls, new Set(yandexInitial));
const yandexBatchSep4 = yandexPoolSep4.slice(0, 150);

// TOTAL ALL-TIME COMPLETED (DONE)
const allBingDone = [...bingInitial, ...bingBatchSep4];
const allYandexDone = [...yandexInitial, ...yandexBatchSep4];

// ----------------------------------------------------
// BATCH 3: TOMORROW (SEP 05, 2026) — PRIORITY #1: 44 TECH PAGES
// ----------------------------------------------------
function prioritizeTomorrow(urls, excludeSet) {
  const techPages = [];
  const remainingPages = [];

  // 1. Put all 44 technology pages first
  techs.forEach(u => {
    if (!excludeSet.has(u)) {
      techPages.push(u);
    }
  });

  // 2. Put other unsubmitted high-value pages next
  urls.forEach(u => {
    if (!excludeSet.has(u) && !techs.includes(u)) {
      remainingPages.push(u);
    }
  });

  return [...techPages, ...remainingPages];
}

const bingPoolTomorrow = prioritizeTomorrow(validUrls, new Set(allBingDone));
const bingBatchTomorrow100 = bingPoolTomorrow.slice(0, 100);

const yandexPoolTomorrow = prioritizeTomorrow(validUrls, new Set(allYandexDone));
const yandexBatchTomorrow150 = yandexPoolTomorrow.slice(0, 150);

let doc = `# 🌐 Search Engine URL Indexing Tracker & Submission Log

This file tracks all submitted URLs across **Bing Webmaster Tools**, **Yandex Webmaster**, and **Google Search Console** to ensure **zero duplicates** and maximum crawl efficiency.

- **Total Active URLs in Site Index:** ${validUrls.length} URLs (Includes all 44 new Technology pages)
- **Last Updated:** September 4, 2026
- **Prepared For:** **Tomorrow's Daily Quota (September 5, 2026)**

---

## 📊 Overall Submission Progress

| Search Engine | Daily Quota | Total Done (Completed) | Prepared for Tomorrow | Remaining in Queue |
| :--- | :--- | :--- | :--- | :--- |
| **Bing Webmaster Tools** | 100 / day | **${allBingDone.length} URLs** | **100 URLs** (All 44 Techs + 56 Cities) | ${validUrls.length - allBingDone.length - bingBatchTomorrow100.length} URLs |
| **Yandex Webmaster** | 150 / day | **${allYandexDone.length} URLs** | **150 URLs** (All 44 Techs + 106 Cities) | ${validUrls.length - allYandexDone.length - yandexBatchTomorrow150.length} URLs |
| **Google Search Console** | 10-20 / day | Top 20 Core URLs | On-Demand Daily Inspections | Active |

---

## 🚀 TOMORROW'S BATCH (September 5, 2026): Bing Webmaster Tools (100 URLs Quota)
> **Instructions for Tomorrow:** Copy the 100 URLs below and paste directly into [Bing Webmaster Tools URL Submission](https://www.bing.com/webmasters/submiturl?siteUrl=https://chittortech.online/).
> 
> ⭐ **Features all 44 brand-new Technology pages at the top (#1 to #44) for immediate indexing, followed by 56 next city landing pages.**

\`\`\`text
${bingBatchTomorrow100.join('\n')}
\`\`\`

---

## 🚀 TOMORROW'S BATCH (September 5, 2026): Yandex Webmaster (150 URLs Quota)
> **Instructions for Tomorrow:** Copy the 150 URLs below and paste directly into [Yandex Webmaster Reindex Pages](https://webmaster.yandex.com/site/https:chittortech.online:443/indexing/reindex/).
> 
> ⭐ **Features all 44 brand-new Technology pages at the top (#1 to #44) for immediate indexing, followed by 106 next city landing pages.**

\`\`\`text
${yandexBatchTomorrow150.join('\n')}
\`\`\`

---

## ✅ DONE / COMPLETED SUBMISSIONS (Never Repeat These)

### 🔹 Bing Webmaster Tools — All Completed URLs (${allBingDone.length} Total)
* **Batch 1 (Initial):** 7 URLs
* **Batch 2 (Sep 4, 2026):** 100 URLs

<details>
<summary><b>Click to Expand All ${allBingDone.length} Submitted URLs for Bing</b></summary>

\`\`\`text
${allBingDone.join('\n')}
\`\`\`
</details>

---

### 🔹 Yandex Webmaster — All Completed URLs (${allYandexDone.length} Total)
* **Batch 1 (Initial):** 3 URLs
* **Batch 2 (Sep 4, 2026):** 150 URLs

<details>
<summary><b>Click to Expand All ${allYandexDone.length} Submitted URLs for Yandex</b></summary>

\`\`\`text
${allYandexDone.join('\n')}
\`\`\`
</details>

---

## 🔍 Google Search Console Priority Inspection (Top 20 Critical Hubs)
\`\`\`text
${techs.slice(0, 10).concat(blogs.slice(0, 10)).join('\n')}
\`\`\`
`;

fs.writeFileSync('SEARCH_ENGINE_INDEXING_TRACKER.md', doc, 'utf8');
console.log('Successfully updated SEARCH_ENGINE_INDEXING_TRACKER.md with tomorrow batch prioritized!');
console.log(`Tomorrow Bing Batch: ${bingBatchTomorrow100.length} URLs (First 44 are Technologies)`);
console.log(`Tomorrow Yandex Batch: ${yandexBatchTomorrow150.length} URLs (First 44 are Technologies)`);
