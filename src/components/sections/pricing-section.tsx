import { getTranslations } from "next-intl/server";
import { Check, CreditCard, Clock, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PricingCard({
  name,
  price,
  period,
  description,
  discount,
  highlighted,
}: {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly discount?: string;
  readonly highlighted: boolean;
}) {
  return (
    <Card
      className={`h-full relative border border-primary/10 bg-background/95 shadow-sm ${
        highlighted
          ? "border-primary shadow-lg scale-[1.02]"
          : ""
      }`}
    >
      {discount && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {discount}
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">{period}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export async function PricingSection() {
  const t = await getTranslations("pricing");

  const pricingPlans = [
    {
      id: "daily",
      name: t("daily.name"),
      price: t("daily.price"),
      period: t("daily.period"),
      description: t("daily.description"),
      highlighted: false,
    },
    {
      id: "weekly",
      name: t("weekly.name"),
      price: t("weekly.price"),
      period: t("weekly.period"),
      description: t("weekly.description"),
      discount: t("weekly.badge"),
      highlighted: true,
    },
  ];

  const includedItems = [
    t("included.items.visits"),
    t("included.items.feeding"),
    t("included.items.walking"),
    t("included.items.security"),
    t("included.items.plants"),
    t("included.items.mail"),
    t("included.items.updates"),
    t("included.items.emergency"),
  ];

  const paymentTerms = [
    {
      icon: CreditCard,
      title: t("terms.payment.title"),
      description: t("terms.payment.description"),
    },
    {
      icon: Clock,
      title: t("terms.booking.title"),
      description: t("terms.booking.description"),
    },
    {
      icon: Shield,
      title: t("terms.cancellation.title"),
      description: t("terms.cancellation.description"),
    },
  ];

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
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              discount={plan.discount}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-muted/50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t("included.title")}
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
            {t("additionalNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
