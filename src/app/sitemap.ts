import { MetadataRoute } from "next";
import { getServiceAreaSlugs } from "@/lib/seo/service-areas";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceAreaSlugs = getServiceAreaSlugs();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/book`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service area pages
  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreaSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Section anchors (for reference, though not typically in sitemap)
  // These are included for comprehensive coverage
  const sectionPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/#pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...corePages, ...serviceAreaPages, ...sectionPages];
}
