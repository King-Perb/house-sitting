import { Check, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, serviceAreas, ServiceItem } from "@/lib/data/services";

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <Card className="h-full border border-primary/10 bg-background/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-semibold mb-3 text-foreground">
          What&apos;s Included:
        </h4>
        <ul className="space-y-2">
          {service.includedItems.map((item) => (
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

export function ServicesSection() {
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
            Services Tailored to Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need pet care, house sitting, or both, I offer flexible
            services to give you complete peace of mind while you&apos;re away from
            your Gran Canaria home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Area Coverage */}
        <div className="bg-background/90 rounded-2xl p-8 border border-primary/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Service Area Coverage</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            I provide house and pet sitting services throughout Gran Canaria, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Don&apos;t see your area listed? Contact me to discuss coverage in
            other parts of Gran Canaria.
          </p>
        </div>
      </div>
    </section>
  );
}
