import { LucideIcon, PawPrint, Home, Sparkles } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "pet-care" | "house-care" | "additional";
  includedItems: string[];
}

export const services: ServiceItem[] = [
  {
    id: "pet-care",
    title: "Pet Care",
    description:
      "Comprehensive care for your beloved pets, ensuring they stay happy, healthy, and comfortable while you're away.",
    icon: PawPrint,
    category: "pet-care",
    includedItems: [
      "Daily feeding and fresh water",
      "Regular walks and exercise",
      "Medication administration",
      "Playtime and companionship",
      "Overnight stays available",
      "Daily photo and video updates",
    ],
  },
  {
    id: "house-care",
    title: "House Care",
    description:
      "Keep your home safe, secure, and well-maintained with regular checks and attentive property care.",
    icon: Home,
    category: "house-care",
    includedItems: [
      "Daily security checks",
      "Mail and package collection",
      "Plant watering and care",
      "Lighting and blind management",
      "Ventilation and temperature monitoring",
      "Emergency contact availability",
    ],
  },
  {
    id: "additional",
    title: "Additional Services",
    description:
      "Extra services to make your time away even more worry-free. Customize your care package to fit your needs.",
    icon: Sparkles,
    category: "additional",
    includedItems: [
      "Garden maintenance",
      "Pool and spa monitoring",
      "Grocery shopping before arrival",
      "Pet transport to vet/groomer",
      "Key holding and access management",
      "Custom requests welcome",
    ],
  },
];

export const serviceAreas = [
  "Las Palmas de Gran Canaria",
  "Maspalomas",
  "Playa del Inglés",
  "San Agustín",
  "Meloneras",
  "Puerto Rico",
  "Mogán",
  "Telde",
  "Vecindario",
  "Agüimes",
];
