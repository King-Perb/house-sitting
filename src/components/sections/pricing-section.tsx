import { Check, CreditCard, Clock, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Pricing data - placeholder values to be finalized in content phase
const pricingPlans = [
  {
    id: "daily",
    name: "Daily Rate",
    price: 35,
    period: "per day",
    description: "Perfect for short trips and weekend getaways",
    highlighted: false,
  },
  {
    id: "weekly",
    name: "Weekly Rate",
    price: 210,
    period: "per week",
    description: "Save €35 with our weekly package",
    discount: "Save 15%",
    highlighted: true,
  },
];

const includedItems = [
  "Daily visits (1-2 times per day)",
  "Pet feeding, water & medication",
  "Dog walking & exercise",
  "House security checks",
  "Plant watering & garden care",
  "Mail & package collection",
  "Photo & video updates",
  "24/7 emergency contact",
];

const paymentTerms = [
  {
    icon: CreditCard,
    title: "Easy Online Payment",
    description: "Secure payment via Stripe when booking through Calendly",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Book at least 48 hours in advance for guaranteed availability",
  },
  {
    icon: Shield,
    title: "Cancellation Policy",
    description: "Free cancellation up to 48 hours before your booking starts",
  },
];

function PricingCard({
  plan,
}: {
  readonly plan: (typeof pricingPlans)[0];
}) {
  return (
    <Card
      className={`h-full relative border border-primary/10 bg-background/95 shadow-sm ${
        plan.highlighted
          ? "border-primary shadow-lg scale-[1.02]"
          : ""
      }`}
    >
      {plan.discount && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {plan.discount}
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold">€{plan.price}</span>
          <span className="text-muted-foreground ml-1">{plan.period}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. Just honest, straightforward pricing
            for quality house and pet sitting services in Gran Canaria.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-muted/50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What&apos;s Included
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="grid gap-6 md:grid-cols-3">
          {paymentTerms.map((term) => {
            const Icon = term.icon;
            return (
              <div
                key={term.title}
                className="text-center p-6 rounded-lg border bg-background"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{term.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {term.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Need something extra?</strong> Additional services like
            extended overnight stays, multiple pets, or special requirements
            can be accommodated. Contact me for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}
