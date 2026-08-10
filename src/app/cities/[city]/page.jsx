import React from "react";
import citiesData from "@/data/cities.json";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const cityData = citiesData[city.toLowerCase()];

  if (!cityData) {
    return {
      title: "AI & IT Solutions Solutions - ChittorTech",
      description: "Predictive Retail AI Automation & billing software.",
    };
  }

  return {
    title: cityData.pageTitle,
    description: cityData.pageDescription,
    keywords: cityData.pageKeywords,
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const cityData = citiesData[city.toLowerCase()];

  if (!cityData) {
    notFound();
  }

  return (
    <div className="city-page-content">
      {/* Renders the extracted legacy template dynamically */}
      <div dangerouslySetInnerHTML={{ __html: cityData.html }} />
    </div>
  );
}
