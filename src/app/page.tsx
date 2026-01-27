import { HeroSection } from "@/components/hero";
import {
  AboutSection,
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

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">FAQ section coming soon...</p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Contact section coming soon...</p>
        </div>
      </section>

      <section id="booking" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Booking section coming soon...</p>
        </div>
      </section>
    </>
  );
}
