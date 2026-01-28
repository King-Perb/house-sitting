"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, BadgeCheck, Clock, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const credentials = [
  {
    icon: Clock,
    label: "5+ Years Experience",
    description: "Caring for pets and homes",
  },
  {
    icon: Shield,
    label: "Fully Insured",
    description: "Complete liability coverage",
  },
  {
    icon: BadgeCheck,
    label: "Background Checked",
    description: "Verified and trusted",
  },
  {
    icon: Heart,
    label: "Pet First Aid Certified",
    description: "Emergency preparedness",
  },
];

const aboutImages = [
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80",
];

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === aboutImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="relative">
            {/* Photo carousel */}
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border border-primary/20 bg-background relative">
              <div className="w-full h-full relative">
                {aboutImages.map((url, index) => (
                  <div
                    key={url}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url('${url}')` }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Carousel controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {aboutImages.map((url, index) => (
                  <button
                    key={url}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-primary/40 transition-colors ${
                      index === activeIndex
                        ? "bg-primary"
                        : "bg-background/70 hover:bg-primary/40"
                    }`}
                    aria-label={`Show photo ${index + 1}`}
                    aria-pressed={index === activeIndex}
                  />
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              Meet Your House &amp; Pet Sitter
            </h2>

            {/* Personal Story */}
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Hi, I&apos;m here to give you peace of mind while you&apos;re away. With over
                5 years of experience caring for pets and homes across{" "}
                <strong className="text-foreground">Gran Canaria</strong>, I understand
                that your pets are family and your home is your sanctuary.
              </p>
              <p className="text-lg leading-relaxed">
                My journey into pet and house sitting began with a deep love for
                animals and a genuine desire to help pet owners travel without worry.
                Whether it&apos;s daily walks, medication administration, or simply
                providing companionship, I treat every pet as if they were my own.
              </p>
              <p className="text-lg leading-relaxed">
                Based in Gran Canaria, I serve all areas including{" "}
                <strong className="text-foreground">Las Palmas</strong>,{" "}
                <strong className="text-foreground">Maspalomas</strong>,{" "}
                <strong className="text-foreground">Playa del Inglés</strong>, and
                surrounding communities. I&apos;m familiar with the local vets, pet-friendly
                parks, and everything your pet might need.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential) => (
                <div
                  key={credential.label}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <credential.icon
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {credential.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">View My Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
