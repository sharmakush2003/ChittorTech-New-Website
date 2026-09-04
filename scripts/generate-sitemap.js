const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');
const getDirectories = srcPath => fs.readdirSync(srcPath, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Exclude internal routing helpers and non-page folders
const excludeFolders = new Set([
  'api', 'cities', 'city', '[slug]', 'pos_bill', '404', 'blog-details', 'blog-master', '.system_generated'
]);

const staticPages = getDirectories(appDir).filter(f => !excludeFolders.has(f) && fs.existsSync(path.join(appDir, f, 'page.js') || path.join(appDir, f, 'page.jsx')));

// City dynamic pages
let citySlugs = [];
if (fs.existsSync('src/data/cities.json')) {
  const citiesData = JSON.parse(fs.readFileSync('src/data/cities.json', 'utf8'));
  citySlugs = Object.keys(citiesData).map(c => 'cities/' + c);
}

// Chittorgarh Local & City Service Slugs
let cityServiceSlugs = [];
if (fs.existsSync('src/data/cityServices.json')) {
  const servicesData = JSON.parse(fs.readFileSync('src/data/cityServices.json', 'utf8'));
  cityServiceSlugs = Object.keys(servicesData);
}

// Blog Posts Slugs
let blogSlugs = [];
if (fs.existsSync('src/data/blogPosts.json')) {
  const blogsData = JSON.parse(fs.readFileSync('src/data/blogPosts.json', 'utf8'));
  blogSlugs = blogsData.map(b => b.link ? b.link.replace(/^\//, '') : '').filter(Boolean);
}

const allUniquePaths = new Set();
allUniquePaths.add(''); // Homepage

staticPages.forEach(p => allUniquePaths.add(p));
citySlugs.forEach(c => allUniquePaths.add(c));
cityServiceSlugs.forEach(s => allUniquePaths.add(s));
blogSlugs.forEach(b => allUniquePaths.add(b));

// Delete any known bad paths
['404', 'city', 'blog-details', 'blog-master', 'undefined', 'null'].forEach(bad => allUniquePaths.delete(bad));

const today = new Date().toISOString().split('T')[0];

const coreServices = new Set([
  'erp', 'pos', 'crm', 'accounting', 'inventory', 'payroll', 'invoicing', 
  'omnichannel', 'smart-retail', 'lead-management', 'logistics', 
  'web-development-services', 'search-engine-optimization', 'digital-marketing-services', 
  'custom-crm-solutions', 'e-commerce-website-development', 'android-application', 
  'ai-solutions', 'ai-manufacturing', 'ai-chatbot-development'
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
console.log(`Successfully generated public/sitemap.xml with ${allUniquePaths.size} clean, active URLs.`);
