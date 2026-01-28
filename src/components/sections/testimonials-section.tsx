import { getTranslations } from "next-intl/server";
import { Users } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

export async function TestimonialsSection() {
  const t = await getTranslations("testimonials");
  const tCommon = await getTranslations("common");

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("subtitle")}
          </p>

          {/* Social Proof Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Users className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium">
              {t("socialProof")}
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const reviewKey = testimonial.id === "1" ? "maria" :
                             testimonial.id === "2" ? "thomas" :
                             testimonial.id === "3" ? "elena" :
                             testimonial.id === "4" ? "peter" : "sarah";

            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={{
                  ...testimonial,
                  clientName: t(`reviews.${reviewKey}.name`),
                  testimonialText: t(`reviews.${reviewKey}.text`),
                  location: t(`reviews.${reviewKey}.location`),
                  date: t(`reviews.${reviewKey}.date`),
                  petType: t(`reviews.${reviewKey}.service`),
                  // Keep original serviceType from testimonial data
                }}
              />
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            {t("cta")}{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              {tCommon("getInTouch")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
