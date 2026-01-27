export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "booking" | "pet-care" | "house-care" | "local";
}

export const faqData: FAQItem[] = [
  // General Services
  {
    id: "services-offered",
    question: "What services do you offer?",
    answer:
      "I offer comprehensive pet sitting and house sitting services including daily pet feeding, dog walking, medication administration, house security checks, plant watering, mail collection, and photo/video updates. Services can be customized to your specific needs.",
    category: "general",
  },
  {
    id: "experience",
    question: "How long have you been pet and house sitting?",
    answer:
      "I have been providing professional pet and house sitting services in Gran Canaria for over 5 years. During this time, I've cared for hundreds of pets and homes, building a reputation for reliability and genuine care.",
    category: "general",
  },
  {
    id: "insurance",
    question: "Are you insured?",
    answer:
      "Yes, I carry comprehensive liability insurance that covers both pet care and house sitting services. This gives you peace of mind knowing you're protected in the unlikely event of any incidents.",
    category: "general",
  },
  {
    id: "references",
    question: "Do you have references?",
    answer:
      "Absolutely! I'm happy to provide references from previous clients upon request. You can also see testimonials from satisfied families on this website. Many of my clients are repeat customers who trust me with their pets and homes year after year.",
    category: "general",
  },

  // Booking & Availability
  {
    id: "booking-advance",
    question: "How far in advance should I book?",
    answer:
      "I recommend booking at least 2 weeks in advance, especially during peak holiday seasons like summer and Christmas. For last-minute requests, please contact me directly - I'll do my best to accommodate your needs if my schedule allows.",
    category: "booking",
  },
  {
    id: "cancellation",
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation is available up to 48 hours before your booking starts. Cancellations made less than 48 hours in advance may be subject to a partial charge. Please see the full terms during the booking process.",
    category: "booking",
  },
  {
    id: "rates",
    question: "What are your rates?",
    answer:
      "My daily rate is €35 per day, with a discounted weekly rate of €210 per week (save 15%). This includes all standard services. Additional services or special requirements may incur extra charges - contact me for a custom quote.",
    category: "booking",
  },
  {
    id: "payment",
    question: "How do I pay for services?",
    answer:
      "Payment is collected securely through Stripe when you book via the online calendar. All major credit and debit cards are accepted. Payment is required at the time of booking to confirm your reservation.",
    category: "booking",
  },

  // Pet Care
  {
    id: "pet-sick",
    question: "What happens if my pet gets sick or injured?",
    answer:
      "Your pet's health is my top priority. I'm familiar with local veterinary clinics in Gran Canaria and will contact you immediately if any health concerns arise. For emergencies, I'll take your pet to the nearest vet and keep you informed every step of the way.",
    category: "pet-care",
  },
  {
    id: "medication",
    question: "Can you administer medication to pets?",
    answer:
      "Yes, I'm experienced in administering oral medications, eye drops, and other routine pet medications. Please provide detailed instructions and any necessary supplies. For more complex medical needs, let's discuss during our meet-and-greet.",
    category: "pet-care",
  },
  {
    id: "pet-types",
    question: "Do you take care of all types of pets?",
    answer:
      "I care for dogs, cats, and most small pets including rabbits, guinea pigs, birds, fish, and reptiles. If you have an unusual pet, please contact me to discuss your specific needs - I'm always happy to learn!",
    category: "pet-care",
  },
  {
    id: "emergencies",
    question: "How do you handle pet emergencies?",
    answer:
      "I maintain a list of emergency contacts including local vets, 24-hour animal hospitals, and your preferred emergency contact. I'm available 24/7 during your booking and will act quickly and calmly in any emergency situation.",
    category: "pet-care",
  },

  // House Care
  {
    id: "house-tasks",
    question: "What house care tasks are included?",
    answer:
      "Standard house care includes security checks (lights, locks, windows), plant watering, mail and package collection, taking bins in/out, and general property monitoring. I'll alert you to any issues like leaks, alarms, or maintenance needs.",
    category: "house-care",
  },
  {
    id: "plants-mail",
    question: "Will you water my plants and collect mail?",
    answer:
      "Yes! Plant watering and mail collection are included in all house sitting packages. Just provide instructions for your specific plants, and I'll ensure everything stays healthy and your mailbox doesn't overflow.",
    category: "house-care",
  },
  {
    id: "security",
    question: "Do you provide security checks?",
    answer:
      "Absolutely. I perform regular security checks including verifying all doors and windows are locked, checking that alarm systems are functioning, varying lighting to give an occupied appearance, and monitoring for any unusual activity around your property.",
    category: "house-care",
  },

  // Gran Canaria Specific
  {
    id: "service-areas",
    question: "What areas of Gran Canaria do you serve?",
    answer:
      "I provide services throughout Gran Canaria including Las Palmas de Gran Canaria, Maspalomas, Playa del Inglés, Telde, San Bartolomé de Tirajana, Mogán, and surrounding areas. If your location isn't listed, please contact me to discuss coverage.",
    category: "local",
  },
  {
    id: "local-vets",
    question: "Are you familiar with local veterinarians?",
    answer:
      "Yes, I have established relationships with several veterinary clinics across Gran Canaria, including 24-hour emergency facilities. I can recommend trusted vets in your area if needed.",
    category: "local",
  },
  {
    id: "languages",
    question: "Do you speak Spanish?",
    answer:
      "Yes, I speak both English and Spanish fluently. This is particularly helpful for communicating with local services, veterinarians, and emergency contacts in Gran Canaria.",
    category: "local",
  },
  {
    id: "climate",
    question: "Can you handle the local climate needs for pets?",
    answer:
      "Absolutely. I'm well-versed in caring for pets in Gran Canaria's climate, including ensuring adequate hydration, scheduling walks during cooler parts of the day, providing shade, and recognizing signs of heat stress in pets.",
    category: "local",
  },
];

// Helper to generate FAQ schema
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
