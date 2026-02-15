import type { MetadataRoute } from "next";

// TODO: Replace with your actual domain before deployment
const SITE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
