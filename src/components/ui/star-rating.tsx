import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  readonly rating: number;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
}

const sizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function StarRating({ rating, size = "md", className }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div
      className={cn("flex gap-0.5", className)}
      aria-hidden="true"
      data-rating={rating}
    >
      {stars.map((star) => (
        <Star
          key={star}
          className={cn(
            sizeClasses[size],
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
