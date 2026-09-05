const fs = require('fs');
const path = require('path');

const trackerPath = path.join(__dirname, '..', 'SEARCH_ENGINE_INDEXING_TRACKER.md');
const validUrlsPath = path.join(__dirname, '..', 'valid_urls.txt');

const validUrls = fs.readFileSync(validUrlsPath, 'utf8').trim().split(/\r?\n/).map(s => s.trim()).filter(Boolean);
const tracker = fs.readFileSync(trackerPath, 'utf8');
const lines = tracker.split(/\r?\n/);

const bingToday = lines.slice(26, 126);
const yandexToday = lines.slice(136, 286);
const bingDonePrev = lines.slice(300, 407);
const yandexDonePrev = lines.slice(420, 573);

const allBingDone = [...bingDonePrev, ...bingToday];
const allYandexDone = [...yandexDonePrev, ...yandexToday];

const bingRemaining = validUrls.filter(u => !new Set(allBingDone).has(u));
const yandexRemaining = validUrls.filter(u => !new Set(allYandexDone).has(u));

const bingTomorrow = bingRemaining.slice(0, 100);
const yandexTomorrow = yandexRemaining.slice(0, 150);

const content = `# 🌐 Search Engine URL Indexing Tracker & Submission Log

This file tracks all submitted URLs across **Bing Webmaster Tools**, **Yandex Webmaster**, and **Google Search Console** to ensure **zero duplicates** and maximum crawl efficiency.

- **Total Active URLs in Site Index:** 830 URLs (Includes all 44 new Technology pages)
- **Last Updated:** September 5, 2026
- **Status:** **September 5, 2026 Batch Processed & Recorded** | **September 6, 2026 Batch Queued**

---

## 📊 Overall Submission Progress

| Search Engine | Daily Quota | Total Done (Completed) | Prepared for Tomorrow (Sep 6) | Remaining in Queue |
| :--- | :--- | :--- | :--- | :--- |
| **Bing Webmaster Tools** | 100 / day | **207 URLs** | **100 URLs** | ${bingRemaining.length - bingTomorrow.length} URLs |
| **Yandex Webmaster** | 150 / day | **303 URLs** | **150 URLs** | ${yandexRemaining.length - yandexTomorrow.length} URLs |
| **Google Search Console** | 10-20 / day | Top 20 Core URLs | On-Demand Daily Inspections | Active |

---

## 🚀 TOMORROW'S BATCH (September 6, 2026): Bing Webmaster Tools (100 URLs Quota)
> **Instructions for Tomorrow:** Copy the 100 URLs below and paste directly into [Bing Webmaster Tools URL Submission](https://www.bing.com/webmasters/submiturl?siteUrl=https://chittortech.online/).

\`\`\`text
${bingTomorrow.join('\n')}
\`\`\`

---

## 🚀 TOMORROW'S BATCH (September 6, 2026): Yandex Webmaster (150 URLs Quota)
> **Instructions for Tomorrow:** Copy the 150 URLs below and paste directly into [Yandex Webmaster Reindex Pages](https://webmaster.yandex.com/site/https:chittortech.online:443/indexing/reindex/).

\`\`\`text
${yandexTomorrow.join('\n')}
\`\`\`

---

## ✅ DONE / COMPLETED SUBMISSIONS (Never Repeat These)

### 🔹 Bing Webmaster Tools — All Completed URLs (${allBingDone.length} Total)
* **Batch 1 (Initial):** 7 URLs
* **Batch 2 (Sep 4, 2026):** 100 URLs
* **Batch 3 (Sep 5, 2026):** 100 URLs (All 44 Tech pages + 56 City pages)

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
* **Batch 3 (Sep 5, 2026):** 150 URLs (All 44 Tech pages + 106 City pages)

<details>
<summary><b>Click to Expand All ${allYandexDone.length} Submitted URLs for Yandex</b></summary>

\`\`\`text
${allYandexDone.join('\n')}
\`\`\`
</details>

---

## 🔍 Google Search Console Priority Inspection (Top 20 Critical Hubs)
\`\`\`text
https://chittortech.online/technology/javascript
https://chittortech.online/technology/typescript
https://chittortech.online/technology/html5
https://chittortech.online/technology/css3
https://chittortech.online/technology/react
https://chittortech.online/technology/nextjs
https://chittortech.online/technology/vuejs
https://chittortech.online/technology/angular
https://chittortech.online/technology/nodejs
https://chittortech.online/technology/python
https://chittortech.online/google-play-store-publishing-guide-compliance-launch
https://chittortech.online/beyond-automation-why-agentic-ai-erp-is-the-best-retail-software-move-for-2026
https://chittortech.online/affiliate-marketing-app-mewari-achaar
https://chittortech.online/visit-chittorgarh-app-tourism
https://chittortech.online/shabari-mata-temple-hubli-invoice-system
https://chittortech.online/dharamshala-billing-system
https://chittortech.online/chittorgarh-tourism-website-development
https://chittortech.online/autonomous-ai-agents-2026
https://chittortech.online/large-reasoning-models-vs-llm
https://chittortech.online/rag-systems-enterprise-knowledge
\`\`\`
`;

fs.writeFileSync(trackerPath, content, 'utf8');
console.log('Update finished successfully! Bing total done:', allBingDone.length, 'Yandex total done:', allYandexDone.length);
