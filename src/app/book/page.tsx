import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { CalendlyInline } from "@/components/calendly";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book Your House & Pet Sitter | Gran Canaria",
  description:
    "Book your professional house and pet sitting service in Gran Canaria. Select your dates, provide details, and pay securely online. Instant confirmation.",
  openGraph: {
    title: "Book Your House & Pet Sitter | Gran Canaria",
    description:
      "Book your professional house and pet sitting service in Gran Canaria. Select your dates, provide details, and pay securely online.",
  },
};

const whatToExpect = [
  "Select your preferred dates and times",
  "Fill in details about your pets and home",
  "Complete secure payment via Stripe",
  "Receive instant booking confirmation",
  "Get a follow-up email with next steps",
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px] lg:gap-12">
          {/* Calendly Widget - Main Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Select an available time slot to schedule your house and pet
              sitting service in Gran Canaria.
            </p>

            <CalendlyInline
              height="750px"
              className="border rounded-lg overflow-hidden"
            />
          </div>

          {/* Sidebar - What to Expect */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* What to Expect */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-4">What to Expect</h2>
              <ul className="space-y-3">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-4">Need Help?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions before booking? Get in touch and I&apos;ll be
                happy to help.
              </p>
              <div className="space-y-3">
                <a
                  href="/#contact"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  Send a message
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  Response within 24 hours
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-2">Cancellation Policy</p>
              <p>
                Free cancellation up to 48 hours before your booking starts.
                See full terms during checkout.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
