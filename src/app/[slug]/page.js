import React from "react";
import fs from "fs";
import path from "path";
import DynamicBlogClient from "./DynamicBlogClient";

export async function generateStaticParams() {
  const sitemapPath = path.join(process.cwd(), "public/sitemap.xml");
  try {
    const content = fs.readFileSync(sitemapPath, "utf8");
    const lines = content.split("\n");
    const paths = [];

    // Static routes to skip as they are handled by static pages
    const skipRoutes = new Set([
      "",
      "index",
      "about-us",
      "search-engine-optimization",
      "digital-marketing-services",
      "social-media-optimization",
      "on-page-seo-services",
      "off-page-seo-services",
      "technical-seo-services",
      "modern-responsive-website-design",
      "e-commerce-website-development",
      "custom-crm-solutions",
      "web-development-services",
      "android-application",
      "pos",
      "erp",
      "accounting",
      "inventory",
      "omnichannel",
      "crm",
      "smart-retail",
      "lead-management",
      "payroll",
      "education",
      "invoicing",
      "logistics",
      "bridal-store",
      "boutique-store",
      "readymade-garment",
      "footwear-store",
      "book-store",
      "stationery-store",
      "cosmetic-store",
      "home-decor-furniture",
      "imitation-jewellery",
      "india-temple",
      "convenience-store",
      "departmental-hypermarket-store",
      "fruits-vegetable-shop",
      "grocery-store",
      "kirana-store",
      "supermarket",
      "gift-toy-sports-shop",
      "hardware-shopping-store",
      "retaile-store",
      "ai-manufacturing",
      "textile",
      "pharma",
      "consumer-goods",
      "garments",
      "electronics-smartphones",
      "industrial-products",
      "trading-overview",
      "After-Sale-Service",
      "schools-educational-institutions",
      "employee-background-verification",
      "hospitals",
      "ai-business",
      "blog",
      "contact-us",
      "demo"
    ]);

    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      // Extract the slug after the domain
      const slugPath = line.replace("https://chittortech.online/", "");
      
      // Skip empty, main routes, inquiry forms, and cities sub-routes
      if (!slugPath || skipRoutes.has(slugPath) || slugPath.startsWith("cities/") || slugPath.startsWith("pos_bill/")) {
        continue;
      }

      paths.push({
        slug: slugPath,
      });
    }

    return paths;
  } catch (err) {
    console.error("Failed to read sitemap.xml for generateStaticParams:", err);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = await params;

  // Convert slug to clean title
  const getCleanTitle = (s) => {
    if (!s) return "ChittorTech Enterprise AI & IT Solutions";
    let clean = s.replace(/-/g, " ");
    clean = clean.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    clean = clean.replace(/Erp/g, "ERP");
    clean = clean.replace(/Pos/g, "POS");
    clean = clean.replace(/Gst/g, "GST");
    clean = clean.replace(/Bom/g, "BOM");
    clean = clean.replace(/Ai/g, "AI");
    clean = clean.replace(/Smes/g, "SMEs");
    clean = clean.replace(/By Chittortech/g, "by ChittorTech");
    return clean;
  };

  const cleanTitle = getCleanTitle(slug);

  return <DynamicBlogClient slug={slug} cleanTitle={cleanTitle} />;
}
