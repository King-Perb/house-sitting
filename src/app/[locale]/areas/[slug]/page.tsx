import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Check, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/seo";
import {
  serviceAreas,
  getServiceArea,
  getServiceAreaSlugs,
  generateServiceAreaSchema,
} from "@/lib/seo/service-areas";
import { generateLocalBusinessSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  // Generate area-specific LocalBusiness schema
  const localBusinessSchema = {
    ...generateLocalBusinessSchema(),
    areaServed: [generateServiceAreaSchema(area)],
  };

  return (
    <div className="min-h-screen">
      {/* Schema */}
      <JsonLd data={localBusinessSchema} />

      {/* Back Navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/areas">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Service Areas
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{area.shortName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet & House Sitting in {area.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Extended Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Professional Pet & House Sitting Services in {area.shortName}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {area.extendedDescription}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Services in {area.shortName}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {area.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhoods */}
              {area.neighborhoods && area.neighborhoods.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Areas Covered in {area.shortName}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.neighborhoods.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking CTA */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Book Your Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ready to book pet or house sitting in {area.shortName}?
                    Select your dates and get instant confirmation.
                  </p>
                  <Link href="/book">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                  <Link href="/#contact">
                    <Button variant="outline" className="w-full">
                      Ask a Question
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Other Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {serviceAreas
                      .filter((a) => a.slug !== slug)
                      .map((otherArea) => (
                        <li key={otherArea.slug}>
                          <Link
                            href={`/areas/${otherArea.slug}`}
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                          >
                            <MapPin className="h-4 w-4" />
                            {otherArea.shortName}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Pet or House Sitting in {area.shortName}?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            I&apos;m here to help. Book online for instant confirmation or
            reach out with any questions about my services in {area.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="secondary">
                Book Your Service
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
