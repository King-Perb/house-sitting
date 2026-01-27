import { Check, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, serviceAreas } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-muted/50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Services Tailored to Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need pet care, house sitting, or both, I offer
            comprehensive services across{" "}
            <strong className="text-foreground">Gran Canaria</strong> to give you
            complete peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className="h-full transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-sm text-foreground mb-3">
                  What&apos;s Included:
                </p>
                <ul className="space-y-2">
                  {service.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-background rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Service Areas in Gran Canaria
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            I provide services throughout Gran Canaria, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Don&apos;t see your area?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contact me
            </a>{" "}
            to discuss availability.
          </p>
        </div>
      </div>
    </section>
  );
}
