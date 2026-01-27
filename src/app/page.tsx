import { HeroSection } from "@/components/hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder for upcoming sections */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">About section coming soon...</p>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Services section coming soon...</p>
        </div>
      </section>

      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Pricing section coming soon...</p>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Testimonials section coming soon...</p>
        </div>
      </section>

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
