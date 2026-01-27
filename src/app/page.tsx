import { HeroSection } from "@/components/hero";
import {
  AboutSection,
  BookingSection,
  ContactSection,
  FAQSection,
  HowItWorksSection,
  PricingSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { generateServicesSchema, generateBreadcrumbSchema } from "@/lib/schema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

// Page-specific schemas
const servicesSchema = generateServicesSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
]);

export default function Home() {
  return (
    <>
      {/* Page-specific structured data */}
      <JsonLd data={servicesSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Booking Section */}
      <BookingSection />
    </>
  );
}
