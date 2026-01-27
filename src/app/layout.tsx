import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Layout } from "@/components/layout";
import { JsonLd } from "@/components/seo";
import { generateLocalBusinessSchema, generateWebSiteSchema, generatePersonSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "House & Pet Sitter | Gran Canaria",
    template: "%s | House & Pet Sitter Gran Canaria",
  },
  description: "Professional house and pet sitting services in Gran Canaria. Trusted, insured, and experienced care for your home and pets.",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "House & Pet Sitter Gran Canaria",
    title: "House & Pet Sitter | Gran Canaria",
    description: "Professional house and pet sitting services in Gran Canaria. Trusted, insured, and experienced care for your home and pets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "House & Pet Sitter | Gran Canaria",
    description: "Professional house and pet sitting services in Gran Canaria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Generate site-wide schemas
const siteSchemas = [
  generateLocalBusinessSchema(),
  generateWebSiteSchema(),
  generatePersonSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={siteSchemas} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
