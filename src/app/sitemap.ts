import type { MetadataRoute } from "next";

const baseUrl = "https://everythingauto.com";

const staticRoutes = [
  "",
  "about",
  "services",
  "engine-repair",
  "brake-service",
  "diagnostics",
  "electrical-systems",
  "oil-changes",
  "wheeltire",
  "transmission",
  "air-conditioning",
  "preventative-maintenance",
  "battery-services",
  "ny-state-inspection",
  "suspensionsteering",
  "car-care-plans",
  "reviews",
  "videos",
  "faqs",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
