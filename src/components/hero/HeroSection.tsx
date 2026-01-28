import { Button } from "@/components/ui/button";
import { TrustBadges } from "./TrustBadges";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25"
        aria-hidden="true"
      />

      {/* Color overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-primary/40" aria-hidden="true" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Copy + CTAs */}
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Your Trusted Pet &amp; House Sitter in{" "}
              <span className="text-primary">Gran Canaria</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Peace of mind while you&apos;re away. Professional, reliable care for your
              beloved pets and home. Serving all areas of Gran Canaria with
              personalized attention and genuine love for animals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center mb-10">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/20">
                <a href="#booking">Book Your Consultation</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-background/80 backdrop-blur border-primary/30 hover:bg-primary/10"
              >
                <a href="#services">View Services</a>
              </Button>
            </div>

            <TrustBadges />
          </div>

          {/* Visual card */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-sm rounded-3xl bg-background/80 backdrop-blur shadow-2xl border border-primary/20 overflow-hidden">
              <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
              <div className="p-5 space-y-2">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Trusted house &amp; pet sitting
                </p>
                <p className="text-sm text-muted-foreground">
                  Real homes, happy pets, and a sitter who treats your place like their own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
