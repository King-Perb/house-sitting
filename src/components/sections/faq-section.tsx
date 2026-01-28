import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData, generateFAQSchema } from "@/lib/data/faq-data";

export function FAQSection() {
  const faqSchema = generateFAQSchema(faqData);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Find answers to the most common questions about
            house and pet sitting services in Gran Canaria.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              Contact me directly
            </a>{" "}
            and I&apos;ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
