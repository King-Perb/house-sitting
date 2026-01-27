import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, BadgeCheck, Clock, Heart } from "lucide-react";

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

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="relative">
            {/* Placeholder photo - using gradient background until real photo is available */}
            <div className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-muted shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm">Professional photo coming soon</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10" />
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
              <p className="leading-relaxed">
                My journey into pet and house sitting began with a deep love for
                animals and a genuine desire to help pet owners travel without worry.
                Whether it&apos;s daily walks, medication administration, or simply
                providing companionship, I treat every pet as if they were my own.
              </p>
              <p className="leading-relaxed">
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
