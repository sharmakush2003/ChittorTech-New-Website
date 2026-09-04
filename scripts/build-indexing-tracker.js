const fs = require('fs');
const path = require('path');

const validUrls = fs.readFileSync('valid_urls.txt', 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
const blogs = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8')).map(b => 'https://chittortech.online' + (b.link.startsWith('/') ? b.link : '/' + b.link));

// Helper to prioritize high-value pages
function prioritize(urls, excludeSet) {
  const corePages = [];
  const blogPages = [];
  const cityPages = [];
  const cityServicePages = [];

  urls.forEach(u => {
    if (excludeSet.has(u)) return;
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

// ----------------------------------------------------
// BATCH 2: SUBMITTED ON SEP 04, 2026 (SHIFTED TO DONE)
// ----------------------------------------------------
const bingPoolSep4 = prioritize(validUrls, new Set(bingInitial));
const bingBatchSep4 = bingPoolSep4.slice(0, 100);

const yandexPoolSep4 = prioritize(validUrls, new Set(yandexInitial));
const yandexBatchSep4 = yandexPoolSep4.slice(0, 150);

// TOTAL ALL-TIME SUBMITTED (DONE) SETS
const allBingDone = [...bingInitial, ...bingBatchSep4];
const allYandexDone = [...yandexInitial, ...yandexBatchSep4];

// ----------------------------------------------------
// BATCH 3: NEXT QUEUE (FOR NEXT ROUND / TOMORROW)
// ----------------------------------------------------
const bingPoolNext = prioritize(validUrls, new Set(allBingDone));
const bingBatchNext100 = bingPoolNext.slice(0, 100);

const yandexPoolNext = prioritize(validUrls, new Set(allYandexDone));
const yandexBatchNext150 = yandexPoolNext.slice(0, 150);

let doc = `# 🌐 Search Engine URL Indexing Tracker & Submission Log

This file permanently tracks all submitted URLs across **Bing Webmaster Tools**, **Yandex Webmaster**, and **Google Search Console** to ensure **zero duplicates** and 100% crawl coverage.

- **Total Active URLs in Site Index:** ${validUrls.length} URLs
- **Last Updated:** September 4, 2026 (Batch 2 Marked as DONE)

---

## 📊 Overall Submission Progress

| Search Engine | Total Quota Used | Done / Submitted | Remaining in Pool | Completion % |
| :--- | :--- | :--- | :--- | :--- |
| **Bing Webmaster Tools** | 100 / day | **${allBingDone.length} URLs** | ${validUrls.length - allBingDone.length} URLs | ${((allBingDone.length / validUrls.length) * 100).toFixed(1)}% |
| **Yandex Webmaster** | 150 / day | **${allYandexDone.length} URLs** | ${validUrls.length - allYandexDone.length} URLs | ${((allYandexDone.length / validUrls.length) * 100).toFixed(1)}% |
| **Google Search Console** | 10-20 / day | Top 20 Core URLs | On-Demand Priority | Active |

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

## 🚀 NEXT BATCH READY (For Tomorrow / Next Round)
> **Note:** None of these URLs have ever been submitted. They are 100% fresh and deduplicated from the completed lists above.

### 🟢 Next 100 URLs for Bing Webmaster Tools (Quota: 100)
\`\`\`text
${bingBatchNext100.join('\n')}
\`\`\`

---

### 🟢 Next 150 URLs for Yandex Webmaster (Quota: 150)
\`\`\`text
${yandexBatchNext150.join('\n')}
\`\`\`

---

## 🔍 Google Search Console Priority Inspection (Top 20 Critical Hubs)
\`\`\`text
${prioritize(validUrls, new Set()).slice(0, 20).join('\n')}
\`\`\`
`;

fs.writeFileSync('SEARCH_ENGINE_INDEXING_TRACKER.md', doc, 'utf8');
console.log('Successfully updated SEARCH_ENGINE_INDEXING_TRACKER.md with batches shifted to DONE!');
console.log('Bing Done:', allBingDone.length, '| Bing Next:', bingBatchNext100.length);
console.log('Yandex Done:', allYandexDone.length, '| Yandex Next:', yandexBatchNext150.length);
