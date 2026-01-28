import { getTranslations } from "next-intl/server";
import { Check, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, serviceAreas, ServiceItem } from "@/lib/data/services";

function ServiceCard({
  service,
  title,
  description,
  items,
  whatsIncluded
}: {
  readonly service: ServiceItem;
  readonly title: string;
  readonly description: string;
  readonly items: Record<string, string>;
  readonly whatsIncluded: string;
}) {
  const Icon = service.icon;

  return (
    <Card className="h-full border border-primary/10 bg-background/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-semibold mb-3 text-foreground">
          {whatsIncluded}
        </h4>
        <ul className="space-y-2">
          {Object.values(items).map((item: string) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export async function ServicesSection() {
  const t = await getTranslations("services");
  const tAreas = await getTranslations("areas.locations");

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-primary/5 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service) => {
            // Map kebab-case id to camelCase translation key
            const serviceKeyMap: Record<string, "petCare" | "houseCare" | "additional"> = {
              "pet-care": "petCare",
              "house-care": "houseCare",
              "additional": "additional",
            };
            const serviceKey = serviceKeyMap[service.id] || service.id;
            // Get items object using raw() to access nested object
            const itemsObj = t.raw(`${serviceKey}.items`) as Record<string, string>;
            return (
              <ServiceCard
                key={service.id}
                service={service}
                title={t(`${serviceKey}.title`)}
                description={t(`${serviceKey}.description`)}
                items={itemsObj}
                whatsIncluded={t("whatsIncluded")}
              />
            );
          })}
        </div>

        {/* Service Area Coverage */}
        <div className="bg-background/90 rounded-2xl p-8 border border-primary/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t("serviceArea.title")}</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {t("serviceArea.description")}
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => {
              // Map area names to translation keys
              type AreaTranslationKey =
                | "lasPalmas"
                | "maspalomas"
                | "playaDelIngles"
                | "sanAgustin"
                | "meloneras"
                | "puertoRico"
                | "mogan"
                | "telde"
                | "vecindario"
                | "aguimes";

              const areaKeyMap: Record<string, AreaTranslationKey> = {
                "Las Palmas de Gran Canaria": "lasPalmas",
                "Maspalomas": "maspalomas",
                "Playa del Inglés": "playaDelIngles",
                "San Agustín": "sanAgustin",
                "Meloneras": "meloneras",
                "Puerto Rico": "puertoRico",
                "Mogán": "mogan",
                "Telde": "telde",
                "Vecindario": "vecindario",
                "Agüimes": "aguimes",
              };
              const areaKey = areaKeyMap[area];
              const translatedArea = areaKey ? tAreas(areaKey) : area;
              return (
                <span
                  key={area}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {translatedArea}
                </span>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {t("serviceArea.notListed")}
          </p>
        </div>
      </div>
    </section>
  );
}
