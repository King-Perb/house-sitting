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
  TypeformSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo";
import { generateServicesSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SECTION_VISIBILITY } from "@/lib/section-visibility";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";

// Page-specific schemas
const servicesSchema = generateServicesSchema();
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_URL },
]);

export default async function Home() {
  return (
    <>
      {/* Page-specific structured data */}
      <JsonLd data={servicesSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      {SECTION_VISIBILITY.hero && <HeroSection />}

      {/* About Section */}
      {SECTION_VISIBILITY.about && <AboutSection />}

      {/* Services Section */}
      {SECTION_VISIBILITY.services && <ServicesSection />}

      {/* Pricing Section */}
      {SECTION_VISIBILITY.pricing && <PricingSection />}

      {/* How It Works Section */}
      {SECTION_VISIBILITY.howItWorks && <HowItWorksSection />}

      {/* Testimonials Section */}
      {SECTION_VISIBILITY.testimonials && <TestimonialsSection />}

      {/* FAQ Section */}
      {SECTION_VISIBILITY.faq && <FAQSection />}

      {/* Contact Section */}
      {SECTION_VISIBILITY.contact && <ContactSection />}

      {/* Typeform Contact Section */}
      {SECTION_VISIBILITY.typeformContact && <TypeformSection />}

      {/* Booking Section */}
      {SECTION_VISIBILITY.booking && <BookingSection />}
    </>
  );
}
