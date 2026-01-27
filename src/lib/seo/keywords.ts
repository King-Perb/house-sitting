// Location-specific keyword system for Gran Canaria local SEO

export interface KeywordSet {
  primary: string[];
  secondary: string[];
  longTail: string[];
  spanish: string[];
}

// Island-wide keywords
export const granCanariaKeywords: KeywordSet = {
  primary: [
    "pet sitter Gran Canaria",
    "house sitter Gran Canaria",
    "pet sitting Gran Canaria",
    "house sitting Gran Canaria",
  ],
  secondary: [
    "dog walker Gran Canaria",
    "cat sitter Gran Canaria",
    "home watch Gran Canaria",
    "pet care Gran Canaria",
    "vacation pet care Canary Islands",
  ],
  longTail: [
    "professional pet sitter Gran Canaria",
    "trusted house sitter Gran Canaria",
    "insured pet sitter Canary Islands",
    "experienced pet care Gran Canaria",
    "reliable house sitting service Gran Canaria",
  ],
  spanish: [
    "cuidador de mascotas Gran Canaria",
    "cuidador de casas Gran Canaria",
    "paseador de perros Gran Canaria",
    "cuidado de gatos Gran Canaria",
  ],
};

// Location-specific keywords
export const locationKeywords: Record<string, KeywordSet> = {
  "las-palmas": {
    primary: [
      "pet sitter Las Palmas",
      "house sitter Las Palmas de Gran Canaria",
      "pet sitting Las Palmas",
    ],
    secondary: [
      "dog walker Las Palmas",
      "cat sitter Las Palmas",
      "pet care Las Palmas",
      "apartment pet sitting Las Palmas",
    ],
    longTail: [
      "professional pet sitter Las Palmas de Gran Canaria",
      "urban pet care Las Palmas",
      "city dog walker Las Palmas",
      "apartment cat sitter Las Palmas",
    ],
    spanish: [
      "cuidador de mascotas Las Palmas",
      "paseador de perros Las Palmas",
    ],
  },
  maspalomas: {
    primary: [
      "pet sitter Maspalomas",
      "house sitter Maspalomas",
      "vacation pet care Maspalomas",
    ],
    secondary: [
      "holiday home watch Maspalomas",
      "pet sitting south Gran Canaria",
      "vacation house sitter Maspalomas",
    ],
    longTail: [
      "vacation home pet sitter Maspalomas",
      "holiday house sitting Maspalomas Gran Canaria",
      "trusted pet care Maspalomas tourist area",
    ],
    spanish: [
      "cuidador de mascotas Maspalomas",
      "cuidado de casa vacaciones Maspalomas",
    ],
  },
  "playa-del-ingles": {
    primary: [
      "pet sitter Playa del Ingles",
      "house sitter Playa del Inglés",
      "holiday pet care Playa del Ingles",
    ],
    secondary: [
      "resort pet sitting Playa del Ingles",
      "vacation home care Playa del Inglés",
      "tourist area pet sitter south Gran Canaria",
    ],
    longTail: [
      "resort area pet sitter Playa del Ingles",
      "holiday apartment pet care Playa del Inglés",
      "beach area house sitter Gran Canaria",
    ],
    spanish: [
      "cuidador de mascotas Playa del Inglés",
      "cuidado de casa Playa del Inglés",
    ],
  },
};

// Get combined keywords for a location
export function getLocationKeywords(slug: string): KeywordSet | null {
  return locationKeywords[slug] || null;
}

// Get all keywords for metadata
export function getAllKeywords(): string[] {
  const allKeywords = new Set<string>();

  // Add Gran Canaria keywords
  [...granCanariaKeywords.primary, ...granCanariaKeywords.secondary].forEach(
    (kw) => allKeywords.add(kw)
  );

  // Add location keywords
  Object.values(locationKeywords).forEach((kwSet) => {
    [...kwSet.primary, ...kwSet.secondary].forEach((kw) => allKeywords.add(kw));
  });

  return Array.from(allKeywords);
}
