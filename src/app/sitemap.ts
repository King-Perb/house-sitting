import { MetadataRoute } from "next";
import { getServiceAreaSlugs } from "@/lib/seo/service-areas";
import { locales } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

// Helper to generate alternates for all locales
function generateAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  // Add x-default pointing to English
  languages["x-default"] = `${SITE_URL}/en${path}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceAreaSlugs = getServiceAreaSlugs();
  const entries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale
  for (const locale of locales) {
    // Homepage
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: generateAlternates(""),
    });

    // Book page
    entries.push({
      url: `${SITE_URL}/${locale}/book`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: generateAlternates("/book"),
    });

    // Areas index page
    entries.push({
      url: `${SITE_URL}/${locale}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: generateAlternates("/areas"),
    });

    // Service area pages
    for (const slug of serviceAreaSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/areas/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: generateAlternates(`/areas/${slug}`),
      });
    }
  }

  return entries;
}
