// Schema.org structured data generation utilities

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://housepetsitter.com";
const BUSINESS_NAME = "House & Pet Sitter Gran Canaria";

// Business information (update with real data)
export const businessInfo = {
  name: BUSINESS_NAME,
  description: "Professional house and pet sitting services in Gran Canaria. Trusted care for your home and pets while you travel.",
  email: "info@housepetsitter.com",
  telephone: "+34 600 000 000",
  url: SITE_URL,
  priceRange: "€€",
  image: `${SITE_URL}/images/sitter-photo.jpg`,
  address: {
    streetAddress: "",
    addressLocality: "Las Palmas de Gran Canaria",
    addressRegion: "Las Palmas",
    postalCode: "35000",
    addressCountry: "ES",
  },
  geo: {
    latitude: 27.9202,
    longitude: -15.5474,
  },
  areaServed: [
    "Las Palmas de Gran Canaria",
    "Maspalomas",
    "Playa del Inglés",
    "Telde",
    "San Bartolomé de Tirajana",
    "Mogán",
  ],
};

// Generate LocalBusiness schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    image: businessInfo.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    areaServed: businessInfo.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  };
}

// Generate Person schema for the sitter
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#sitter`,
    name: "Your Name",
    jobTitle: "Professional House & Pet Sitter",
    description: "Experienced house and pet sitter serving Gran Canaria with over 5 years of professional experience.",
    image: businessInfo.image,
    worksFor: {
      "@id": `${SITE_URL}/#business`,
    },
    knowsAbout: [
      "Pet Care",
      "House Sitting",
      "Dog Walking",
      "Cat Care",
      "Plant Care",
      "Home Security",
    ],
    areaServed: businessInfo.areaServed,
  };
}

// Service type definitions
export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceType: string;
}

// Generate Service schema
export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: businessInfo.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

// Generate multiple services schema
export function generateServicesSchema() {
  const services: ServiceSchemaInput[] = [
    {
      name: "Pet Sitting",
      description: "Daily pet care including feeding, medication administration, dog walking, and companionship for your furry friends.",
      serviceType: "PetCare",
    },
    {
      name: "House Sitting",
      description: "Comprehensive home care including security checks, plant watering, mail collection, and property monitoring.",
      serviceType: "HouseSitting",
    },
    {
      name: "Dog Walking",
      description: "Professional dog walking services with exercise and outdoor time for your canine companions.",
      serviceType: "DogWalking",
    },
  ];

  return services.map((service) => generateServiceSchema(service));
}

// Review interface
export interface ReviewInput {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

// Generate Review schema
export function generateReviewSchema(review: ReviewInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished || new Date().toISOString().split("T")[0],
    itemReviewed: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

// Generate aggregate rating schema
export function generateAggregateRatingSchema(reviews: ReviewInput[]) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 5;

  return {
    "@type": "AggregateRating",
    ratingValue: averageRating.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };
}

// FAQ interface
export interface FAQInput {
  question: string;
  answer: string;
}

// Generate FAQPage schema
export function generateFAQPageSchema(faqs: FAQInput[]) {
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

// Breadcrumb interface
export interface BreadcrumbInput {
  name: string;
  url: string;
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: BreadcrumbInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate WebSite schema for sitelinks searchbox
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

// Generate combined homepage schema
export function generateHomepageSchema(reviews: ReviewInput[], faqs: FAQInput[]) {
  const localBusiness = generateLocalBusinessSchema();
  const aggregateRating = generateAggregateRatingSchema(reviews);

  // Add aggregate rating to local business
  const localBusinessWithRating = {
    ...localBusiness,
    aggregateRating,
  };

  return [
    localBusinessWithRating,
    generateWebSiteSchema(),
    generatePersonSchema(),
    ...generateServicesSchema(),
    ...reviews.map((review) => generateReviewSchema(review)),
    generateFAQPageSchema(faqs),
  ];
}
