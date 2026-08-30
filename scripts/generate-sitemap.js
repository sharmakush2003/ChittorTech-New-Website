const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');
const getDirectories = srcPath => fs.readdirSync(srcPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const excludeFolders = new Set(['api', 'cities', 'city', '[slug]', 'pos_bill', '404', 'blog-details', 'blog-master']);
const staticPages = getDirectories(appDir).filter(f => !excludeFolders.has(f));

const citiesData = JSON.parse(fs.readFileSync('src/data/cities.json', 'utf8'));
const citySlugs = Object.keys(citiesData).map(c => 'cities/' + c);

const chittorgarhServicesData = JSON.parse(fs.readFileSync('src/data/chittorgarhServices.json', 'utf8'));
const chittorgarhSlugs = Object.keys(chittorgarhServicesData);

const oldSitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const oldUrls = (oldSitemap.match(/<loc>(.*?)<\/loc>/gi) || []).map(u => u.replace(/<\/?loc>/g, '').trim());

const allUniquePaths = new Set();
allUniquePaths.add(''); // Home page
allUniquePaths.add('contact-us');
allUniquePaths.add('demo');
allUniquePaths.add('about-us');

staticPages.forEach(p => allUniquePaths.add(p));
citySlugs.forEach(c => allUniquePaths.add(c));
chittorgarhSlugs.forEach(s => allUniquePaths.add(s));

oldUrls.forEach(u => {
  const p = u.replace('https://chittortech.online/', '').replace(/^\//, '');
  if (p && !p.startsWith('pos_bill') && !p.startsWith('api/')) {
    allUniquePaths.add(p);
  }
});

const today = new Date().toISOString().split('T')[0];

const coreServices = new Set([
  'erp', 'pos', 'crm', 'accounting', 'inventory', 'payroll', 'invoicing', 
  'omnichannel', 'smart-retail', 'lead-management', 'logistics', 
  'web-development-services', 'search-engine-optimization', 'digital-marketing-services', 
  'custom-crm-solutions', 'e-commerce-website-development', 'android-application', 
  'ai-solutions', 'ai-manufacturing', 'ai-knowledge', 'ai-business'
]);

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

Array.from(allUniquePaths).sort().forEach(p => {
  let url = p ? 'https://chittortech.online/' + p : 'https://chittortech.online/';
  let priority = '0.7';
  let changefreq = 'weekly';

  if (!p) {
    priority = '1.0';
    changefreq = 'daily';
  } else if (p === 'contact-us' || p === 'demo' || coreServices.has(p) || chittorgarhServicesData[p]) {
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
console.log(`Successfully generated public/sitemap.xml with ${allUniquePaths.size} URLs.`);
