import { Calendar, ClipboardList, CreditCard, Clock, CheckCircle, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Book a Time",
    description:
      "Select your preferred dates using the online booking calendar. See real-time availability and choose what works best for your schedule.",
    note: "Powered by Calendly",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Provide Details",
    description:
      "Tell me about your pets, home, and any special requirements. The booking form captures everything I need to provide the best care.",
    note: "Custom intake form",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Pay & Confirm",
    description:
      "Complete secure payment via Stripe and receive instant confirmation. Your booking is secured once payment is processed.",
    note: "Instant confirmation",
  },
];

const importantInfo = [
  {
    icon: Clock,
    title: "Advance Notice",
    description: "Book at least 48 hours in advance for guaranteed availability",
  },
  {
    icon: CheckCircle,
    title: "First-Time Clients",
    description: "Free meet-and-greet before your first booking to ensure a perfect fit",
  },
  {
    icon: Info,
    title: "Service Area",
    description: "Available throughout Gran Canaria - Las Palmas, Maspalomas, and more",
  },
];

function StepCard({ step, isLast }: { step: (typeof steps)[0]; isLast: boolean }) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* Step Number Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
        {step.number}
      </div>

      <Card className="h-full w-full pt-6">
        <CardHeader className="text-center pb-2">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-xl">{step.title}</CardTitle>
          <CardDescription className="text-sm">{step.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
            {step.note}
          </span>
        </CardContent>
      </Card>

      {/* Connector Arrow (hidden on mobile and for last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-muted/50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Booking your house and pet sitter is simple. Just three easy steps 
            and you&apos;ll have peace of mind while you&apos;re away.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16 pt-4">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-background rounded-xl p-8 border">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Good to Know
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {importantInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment & Cancellation Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            <strong>Payment:</strong> Secure online payment via Stripe. All major credit and debit cards accepted.
          </p>
          <p className="mt-2">
            <strong>Cancellation:</strong> Free cancellation up to 48 hours before your booking. 
            See full terms during checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
