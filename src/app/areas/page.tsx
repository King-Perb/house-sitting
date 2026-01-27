import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/lib/seo/service-areas";

export const metadata: Metadata = {
  title: "Service Areas | Pet & House Sitting Gran Canaria",
  description:
    "Professional pet sitting and house sitting services across Gran Canaria. Serving Las Palmas, Maspalomas, Playa del Inglés, and surrounding areas.",
  openGraph: {
    title: "Service Areas | Pet & House Sitting Gran Canaria",
    description:
      "Professional pet sitting and house sitting services across Gran Canaria. Serving Las Palmas, Maspalomas, Playa del Inglés, and surrounding areas.",
  },
};

export default function AreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Island-Wide Coverage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet & House Sitting Services Across Gran Canaria
            </h1>
            <p className="text-lg text-muted-foreground">
              From the bustling capital of Las Palmas to the sunny south coast
              of Maspalomas, I provide trusted pet and house sitting services
              throughout the island. Select your area below to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Card key={area.slug} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">{area.shortName}</span>
                  </div>
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {area.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/areas/${area.slug}`}>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas Note */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-muted-foreground mb-6">
            I also serve Telde, San Bartolomé de Tirajana, Mogán, Agüimes, and
            other areas across Gran Canaria. Contact me to discuss your
            location.
          </p>
          <Link href="/#contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
