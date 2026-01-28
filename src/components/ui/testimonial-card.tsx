import Image from "next/image";
import { Quote, MapPin, PawPrint, Home, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { Testimonial } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
  readonly className?: string;
}

const serviceTypeConfig = {
  "pet-care": {
    label: "Pet Care",
    icon: PawPrint,
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  "house-care": {
    label: "House Care",
    icon: Home,
    className: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  both: {
    label: "Pet & House Care",
    icon: Heart,
    className: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
};

function ClientAvatar({
  name,
  imageUrl,
}: {
  readonly name: string;
  readonly imageUrl?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (imageUrl) {
    return (
      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
        <Image
          src={imageUrl}
          alt={`${name} testimonial photo`}
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="text-lg font-semibold text-primary">{initials}</span>
    </div>
  );
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const serviceConfig = serviceTypeConfig[testimonial.serviceType];
  const ServiceIcon = serviceConfig.icon;

  return (
    <Card
      className={cn(
        "h-full flex flex-col border border-primary/10 bg-background/95 shadow-sm",
        className
      )}
    >
      <CardHeader className="pb-4">
        {/* Quote Icon */}
        <div className="mb-2">
          <Quote className="h-8 w-8 text-primary/20" aria-hidden="true" />
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-sm text-muted-foreground leading-relaxed">
          &ldquo;{testimonial.testimonialText}&rdquo;
        </blockquote>
      </CardHeader>

      <CardContent className="mt-auto pt-0">
        {/* Client Info */}
        <div className="flex items-center gap-3 mb-4">
          <ClientAvatar
            name={testimonial.clientName}
            imageUrl={testimonial.clientImage}
          />
          <div>
            <p className="font-semibold">{testimonial.clientName}</p>
            <StarRating rating={testimonial.rating} size="sm" />
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-2">
          {/* Service Type Badge */}
          <span
            className={cn(
              "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
              serviceConfig.className
            )}
          >
            <ServiceIcon className="h-3 w-3" aria-hidden="true" />
            {serviceConfig.label}
          </span>

          {/* Pet Type */}
          {testimonial.petType && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs">
              <PawPrint className="h-3 w-3" aria-hidden="true" />
              {testimonial.petType}
            </span>
          )}

          {/* Location */}
          {testimonial.location && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {testimonial.location}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
