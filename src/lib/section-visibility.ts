export const SECTION_VISIBILITY = {
  hero: true,
  about: true,
  services: true,
  pricing: false,
  howItWorks: false,
  testimonials: true,
  faq: true,
  contact: true,
  booking: false,
  typeformContact: false,
} as const;

export type SectionKey = keyof typeof SECTION_VISIBILITY;
