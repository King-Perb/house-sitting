import { HeroSection } from "@/components/hero";
import {
  AboutSection,
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

      <section id="booking" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Booking section coming soon...</p>
        </div>
      </section>
    </>
  );
}
