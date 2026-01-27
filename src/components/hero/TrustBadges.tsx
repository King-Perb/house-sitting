import { Shield, BadgeCheck, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrustBadge {
  icon: typeof Shield;
  label: string;
  description: string;
}

export const trustBadges: TrustBadge[] = [
  {
    icon: Shield,
    label: "Fully Insured",
    description: "Complete liability coverage",
  },
  {
    icon: BadgeCheck,
    label: "Background Checked",
    description: "Verified and trusted",
  },
  {
    icon: Award,
    label: "5+ Years Experience",
    description: "Professional service",
  },
  {
    icon: Users,
    label: "50+ Happy Clients",
    description: "Trusted by families",
  },
];

interface TrustBadgesProps {
  variant?: "compact" | "expanded";
  className?: string;
  showAll?: boolean;
}

export function TrustBadges({
  variant = "compact",
  className,
  showAll = false,
}: TrustBadgesProps) {
  // In compact mode, show only first 3 badges unless showAll is true
  const badgesToShow = showAll ? trustBadges : trustBadges.slice(0, 3);

  if (variant === "expanded") {
    return (
      <div
        className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}
        role="list"
        aria-label="Trust indicators"
      >
        {badgesToShow.map((badge) => (
          <div
            key={badge.label}
            className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border"
            role="listitem"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <badge.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <span className="font-medium block">{badge.label}</span>
              <span className="text-sm text-muted-foreground">
                {badge.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8",
        className
      )}
      role="list"
      aria-label="Trust indicators"
    >
      {badgesToShow.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 text-muted-foreground"
          role="listitem"
        >
          <badge.icon className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-sm font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
