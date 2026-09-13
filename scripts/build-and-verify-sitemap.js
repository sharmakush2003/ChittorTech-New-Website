const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');

// 1. Gather all potential candidates
const excludeFolders = new Set([
  'api', 'admin', 'cities', 'city', '[slug]', 'pos_bill', '404', 'blog-details', 'blog-master', '.system_generated'
]);

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

const staticDirs = getDirectories(appDir).filter(f => {
  if (excludeFolders.has(f)) return false;
  const hasPageJs = fs.existsSync(path.join(appDir, f, 'page.js'));
  const hasPageJsx = fs.existsSync(path.join(appDir, f, 'page.jsx'));
  return hasPageJs || hasPageJsx;
});

let citySlugs = [];
if (fs.existsSync('src/data/cities.json')) {
  const citiesData = JSON.parse(fs.readFileSync('src/data/cities.json', 'utf8'));
  citySlugs = Object.keys(citiesData).map(c => 'cities/' + c);
}

let cityServiceSlugs = [];
if (fs.existsSync('src/data/cityServices.json')) {
  const servicesData = JSON.parse(fs.readFileSync('src/data/cityServices.json', 'utf8'));
  cityServiceSlugs = Object.keys(servicesData);
}

let blogSlugs = [];
if (fs.existsSync('src/data/blogPosts.json')) {
  const blogsData = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));
  blogSlugs = blogsData.map(b => b.link ? b.link.replace(/^\//, '') : '').filter(Boolean);
}

let techSlugs = [];
if (fs.existsSync('src/data/technologies.json')) {
  const techData = JSON.parse(fs.readFileSync('src/data/technologies.json', 'utf8'));
  techSlugs = techData.map(t => 'technology/' + t.slug);
}

const candidates = new Set();
candidates.add(''); // Homepage

staticDirs.forEach(p => candidates.add(p));
citySlugs.forEach(c => candidates.add(c));
cityServiceSlugs.forEach(s => candidates.add(s));
blogSlugs.forEach(b => candidates.add(b));
techSlugs.forEach(t => candidates.add(t));

// Pre-filter known non-indexable or deleted slugs
const knownExclusions = new Set([
  '404', 'city', 'blog-details', 'blog-master', 'undefined', 'null',
  'affiliate-marketing-app-mewari-achaar'
]);
knownExclusions.forEach(k => candidates.delete(k));

console.log(`Gathered ${candidates.size} candidate URLs to verify against local server...`);

// 2. Test every URL against local dev server
async function testUrl(slug) {
  const localUrl = 'http://localhost:3000/' + slug;
  try {
    const res = await fetch(localUrl, { method: 'HEAD' });
    if (res.status === 200) return true;
    // Retry with GET if HEAD was not 200
    const resGet = await fetch(localUrl, { method: 'GET' });
    return resGet.status === 200;
  } catch (err) {
    try {
      const resGet = await fetch(localUrl, { method: 'GET' });
      return resGet.status === 200;
    } catch (e2) {
      return false;
    }
  }
}

async function run() {
  const verifiedUrls = [];
  const rejectedUrls = [];
  const candidateArray = Array.from(candidates);

  const concurrency = 6;
  for (let i = 0; i < candidateArray.length; i += concurrency) {
    const chunk = candidateArray.slice(i, i + concurrency);
    const results = await Promise.all(
      chunk.map(async slug => {
        const ok = await testUrl(slug);
        return { slug, ok };
      })
    );

    for (const r of results) {
      if (r.ok) {
        verifiedUrls.push(r.slug);
      } else {
        rejectedUrls.push(r.slug);
        console.log(`❌ EXCLUDED (Non-200): /${r.slug}`);
      }
    }

    if ((i + concurrency) % 60 < concurrency || i + concurrency >= candidateArray.length) {
      console.log(`Progress: ${Math.min(i + concurrency, candidateArray.length)}/${candidateArray.length} tested (${verifiedUrls.length} verified 200 OK, ${rejectedUrls.length} rejected)`);
    }
  }

  console.log(`\nVerification Complete!`);
  console.log(`Total Candidates: ${candidateArray.length}`);
  console.log(`Verified 200 OK URLs: ${verifiedUrls.length}`);
  console.log(`Rejected URLs: ${rejectedUrls.length}`);

  // 3. Generate clean sitemap.xml with ONLY 100% verified 200 OK URLs
  const today = new Date().toISOString().split('T')[0];
  const coreServices = new Set([
    'erp', 'crm', 'accounting', 'inventory', 'payroll', 'invoicing', 
    'omnichannel', 'smart-retail', 'lead-management', 'logistics', 
    'web-development-services', 'search-engine-optimization', 'digital-marketing-services', 
    'custom-crm-solutions', 'e-commerce-website-development', 'android-application', 
    'ai-solutions', 'ai-manufacturing', 'ai-chatbot-development', 'antigravity', 'render', 'cloudflare', 'vercel', 'groq',
    'enterprise-ai-agents', 'dedicated-tech-teams', '4-week-saas-mvp', 'timezone-overlap'
  ]);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  verifiedUrls.sort().forEach(p => {
    let url = p ? 'https://chittortech.in/' + p : 'https://chittortech.in/';
    let priority = '0.7';
    let changefreq = 'weekly';

    if (!p) {
      priority = '1.0';
      changefreq = 'daily';
    } else if (p === 'contact-us' || p === 'demo' || coreServices.has(p)) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (p.startsWith('cities/')) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (p === 'privacy-policy' || p === 'terms') {
      priority = '0.3';
      changefreq = 'monthly';
    }

    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
  console.log(`\n🎉 Successfully saved public/sitemap.xml with exactly ${verifiedUrls.length} URLs.`);
  console.log(`All ${verifiedUrls.length} URLs are 100% verified to return HTTP 200 OK.`);
}

run();
