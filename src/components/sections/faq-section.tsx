import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData, generateFAQSchema } from "@/lib/data/faq-data";

export async function FAQSection() {
  const t = await getTranslations("faq");
  const tCommon = await getTranslations("common");

  // Map FAQ IDs to translation keys
  const faqKeyMap: Record<string, string> = {
    "services-offered": "services",
    "experience": "experience",
    "insurance": "insurance",
    "references": "references",
    "booking-advance": "advanceBooking",
    "cancellation": "cancellation",
    "rates": "rates",
    "payment": "payment",
    "pet-sick": "sickPet",
    "medication": "medication",
    "pet-types": "petTypes",
    "emergencies": "emergencies",
    "house-tasks": "houseTasks",
    "plants-mail": "plantsMail",
    "security": "securityChecks",
    "service-areas": "areas",
    "local-vets": "vets",
    "languages": "spanish",
    "climate": "climate",
  };

  const translatedFaqs = faqData.map((faq) => {
    const key = faqKeyMap[faq.id] || faq.id;
    return {
      ...faq,
      question: t(`questions.${key}.q`),
      answer: t(`questions.${key}.a`),
    };
  });

  const faqSchema = generateFAQSchema(translatedFaqs);

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
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {translatedFaqs.map((faq) => (
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
            {t("stillHaveQuestions")}{" "}
            <a
              href="#contact"
              className="text-primary font-medium hover:underline"
            >
              {tCommon("contactMe")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
