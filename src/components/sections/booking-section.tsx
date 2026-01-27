import { Calendar, Shield, CreditCard, Clock } from "lucide-react";
import { CalendlyEmbed } from "@/components/calendly";

const trustIndicators = [
  {
    icon: Shield,
    text: "Secure booking",
  },
  {
    icon: CreditCard,
    text: "Pay online via Stripe",
  },
  {
    icon: Clock,
    text: "Instant confirmation",
  },
];

export function BookingSection() {
  return (
    <section
      id="booking"
      className="py-16 md:py-24"
      aria-labelledby="booking-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Online Booking</span>
          </div>
          <h2
            id="booking-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Book Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your dates and complete your booking in minutes. 
            You&apos;ll receive instant confirmation and can pay securely online.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="max-w-4xl mx-auto mb-8">
          <CalendlyEmbed height="700px" className="shadow-lg" />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {trustIndicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div
                key={indicator.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span>{indicator.text}</span>
              </div>
            );
          })}
        </div>

        {/* Alternative Contact */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer to ask questions first?{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              Send me a message
            </a>{" "}
            and I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
