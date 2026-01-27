// Service area data for Gran Canaria local SEO

export interface ServiceArea {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  extendedDescription: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  neighborhoods?: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Las Palmas de Gran Canaria",
    slug: "las-palmas",
    shortName: "Las Palmas",
    description:
      "Professional pet and house sitting services in the capital city of Gran Canaria.",
    extendedDescription:
      "As the largest city in Gran Canaria, Las Palmas offers a vibrant urban environment for pet owners. Whether you live in the historic Vegueta quarter, the beachfront Las Canteras area, or the residential zones of Ciudad Jardín and Tafira, I provide reliable pet care and house sitting tailored to city living. From apartment cats to dogs needing daily walks along the promenade, your pets receive attentive care while you're away.",
    coordinates: {
      latitude: 28.1235,
      longitude: -15.4363,
    },
    metaTitle: "Pet Sitter & House Sitter Las Palmas | Gran Canaria",
    metaDescription:
      "Professional pet sitting and house sitting services in Las Palmas de Gran Canaria. Trusted care for your pets and home in the city. Insured & experienced.",
    highlights: [
      "Urban apartment pet care",
      "Daily dog walks along Las Canteras beach",
      "City professional schedule flexibility",
      "Short and long-term sitting available",
    ],
    neighborhoods: [
      "Vegueta",
      "Triana",
      "Las Canteras",
      "Ciudad Jardín",
      "Tafira",
      "Santa Catalina",
    ],
  },
  {
    name: "Maspalomas",
    slug: "maspalomas",
    shortName: "Maspalomas",
    description:
      "Vacation home and pet sitting services in the popular Maspalomas tourist area.",
    extendedDescription:
      "Maspalomas is home to many vacation properties and expat residents who need trusted care for their homes and pets while traveling. From the famous dunes area to the quieter residential zones of Meloneras and Campo Internacional, I offer comprehensive house watching and pet care services. Whether you have a villa with a garden, an apartment near the beach, or a holiday home you rent out, your property stays secure and your pets stay happy.",
    coordinates: {
      latitude: 27.7606,
      longitude: -15.5865,
    },
    metaTitle: "Pet Sitter & House Sitter Maspalomas | South Gran Canaria",
    metaDescription:
      "Trusted pet sitting and vacation home care in Maspalomas, Gran Canaria. Professional house sitting for holiday properties. Insured & reliable service.",
    highlights: [
      "Vacation property security checks",
      "Holiday home maintenance",
      "Pool and garden monitoring",
      "Extended stay pet care",
    ],
    neighborhoods: [
      "Meloneras",
      "Campo Internacional",
      "Sonneland",
      "El Tablero",
      "San Fernando",
    ],
  },
  {
    name: "Playa del Inglés",
    slug: "playa-del-ingles",
    shortName: "Playa del Inglés",
    description:
      "Resort area pet and house sitting in one of Gran Canaria's most popular destinations.",
    extendedDescription:
      "Playa del Inglés, adjacent to Maspalomas, is a bustling resort area with a mix of holiday apartments, residential complexes, and commercial properties. Many property owners here need reliable care during their absence, whether for pets left in care or homes that need regular checking. I serve the entire area from the beachfront to the surrounding residential zones, providing the same professional service that keeps both pets and properties in excellent condition.",
    coordinates: {
      latitude: 27.7560,
      longitude: -15.5713,
    },
    metaTitle: "Pet Sitter & House Sitter Playa del Inglés | Gran Canaria",
    metaDescription:
      "Professional pet sitting and house sitting in Playa del Inglés, Gran Canaria. Reliable care for resort apartments and vacation homes. Fully insured.",
    highlights: [
      "Resort apartment pet care",
      "Short-term holiday sitting",
      "Regular property checks",
      "Beach area dog walking",
    ],
    neighborhoods: [
      "Playa del Inglés Centro",
      "San Agustín",
      "Bahía Feliz",
      "Las Burras",
    ],
  },
];

// Get service area by slug
export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

// Get all service area slugs
export function getServiceAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug);
}

// Generate schema for a service area
export function generateServiceAreaSchema(area: ServiceArea) {
  return {
    "@type": "City",
    name: area.name,
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.coordinates.latitude,
      longitude: area.coordinates.longitude,
    },
  };
}
