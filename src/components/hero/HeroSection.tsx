import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "./TrustBadges";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            Your Trusted Pet &amp; House Sitter in{" "}
            <span className="text-primary">Gran Canaria</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Peace of mind while you&apos;re away. Professional, reliable care for your
            beloved pets and home. Serving all areas of Gran Canaria with
            personalized attention and genuine love for animals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#booking">Book Your Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="#services">View Services</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}
