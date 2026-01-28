import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing, locales, type Locale } from "@/i18n/routing";
import { Layout } from "@/components/layout";
import { JsonLd } from "@/components/seo";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generatePersonSchema,
} from "@/lib/schema";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Map locales to OpenGraph locale format
const ogLocaleMap: Record<Locale, string> = {
  en: "en_GB",
  es: "es_ES",
  de: "de_DE",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generate metadata with locale-specific alternates
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  // Generate alternates for hreflang
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${SITE_URL}/${loc}`;
  }

  return {
    title: {
      default: "House & Pet Sitter | Gran Canaria",
      template: "%s | House & Pet Sitter Gran Canaria",
    },
    description:
      "Professional house and pet sitting services in Gran Canaria. Trusted, insured, and experienced care for your home and pets.",
    keywords: [
      "house sitter Gran Canaria",
      "pet sitter Gran Canaria",
      "pet sitting Las Palmas",
      "house sitting Maspalomas",
      "dog walker Gran Canaria",
      "cat sitter Gran Canaria",
      "pet care Canary Islands",
    ],
    authors: [{ name: "House & Pet Sitter Gran Canaria" }],
    alternates: {
      canonical: `${SITE_URL}/${validLocale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[validLocale],
      alternateLocale: locales
        .filter((l) => l !== validLocale)
        .map((l) => ogLocaleMap[l]),
      siteName: "House & Pet Sitter Gran Canaria",
      title: "House & Pet Sitter | Gran Canaria",
      description:
        "Professional house and pet sitting services in Gran Canaria. Trusted, insured, and experienced care for your home and pets.",
    },
    twitter: {
      card: "summary_large_image",
      title: "House & Pet Sitter | Gran Canaria",
      description:
        "Professional house and pet sitting services in Gran Canaria.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate site-wide schemas
const siteSchemas = [
  generateLocalBusinessSchema(),
  generateWebSiteSchema(),
  generatePersonSchema(),
];

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for this locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to external services for faster loading */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <JsonLd data={siteSchemas} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
