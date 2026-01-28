import { Users } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
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
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Don&apos;t just take my word for it. Here&apos;s what clients
            across Gran Canaria have to say about their experience.
          </p>

          {/* Social Proof Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Users className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium">
              Trusted by 50+ clients in Gran Canaria
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to experience the same peace of mind?{" "}
            <a
              href="#booking"
              className="text-primary font-medium hover:underline"
            >
              Book your consultation today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
