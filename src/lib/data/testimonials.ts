export interface Testimonial {
  id: string;
  clientName: string;
  rating: number;
  testimonialText: string;
  serviceType: "pet-care" | "house-care" | "both";
  petType?: string;
  location?: string;
  date?: string;
  clientImage?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Maria S.",
    rating: 5,
    testimonialText:
      "We left our two dogs, Max and Luna, for two weeks while we visited family in Madrid. The daily photo updates were wonderful, and the dogs were so happy and well-cared for. We couldn't have asked for better care!",
    serviceType: "pet-care",
    petType: "2 dogs",
    location: "Las Palmas",
    date: "December 2025",
    clientImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    clientName: "Thomas K.",
    rating: 5,
    testimonialText:
      "As an expat who travels frequently for work, finding reliable house sitting in Gran Canaria was essential. My home and garden are always in perfect condition when I return. Highly professional service.",
    serviceType: "house-care",
    location: "Maspalomas",
    date: "November 2025",
    clientImage:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    clientName: "Elena R.",
    rating: 5,
    testimonialText:
      "Our cat Mimi can be quite particular, but she was completely at ease. The meet-and-greet beforehand made all the difference. We received updates every day and could enjoy our holiday worry-free.",
    serviceType: "pet-care",
    petType: "Cat",
    location: "Playa del Inglés",
    date: "October 2025",
    clientImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "4",
    clientName: "Peter & Anna M.",
    rating: 5,
    testimonialText:
      "We needed both pet sitting for our elderly dog and house care while we were away for a month. Everything was handled perfectly - plants watered, mail collected, and our sweet Bruno was treated like family.",
    serviceType: "both",
    petType: "Dog",
    location: "Telde",
    date: "September 2025",
    clientImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "5",
    clientName: "Sarah L.",
    rating: 5,
    testimonialText:
      "Transparent pricing, excellent communication, and genuine love for animals. My three rescue cats were in wonderful hands. I've already booked for my next trip. Absolutely recommended!",
    serviceType: "pet-care",
    petType: "3 cats",
    location: "Las Palmas",
    date: "January 2026",
    clientImage:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=300&q=80",
  },
];
