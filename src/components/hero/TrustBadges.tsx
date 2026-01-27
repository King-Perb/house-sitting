import { Shield, BadgeCheck, Award } from "lucide-react";

const badges = [
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
];

export function TrustBadges() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
      role="list"
      aria-label="Trust indicators"
    >
      {badges.map((badge) => (
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
