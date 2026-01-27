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

export default function Home() {
  return (
    <>
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
