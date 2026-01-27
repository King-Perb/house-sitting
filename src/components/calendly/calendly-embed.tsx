"use client";

import { useState } from "react";
import { getCalendlyUrl, defaultEmbedOptions } from "@/lib/calendly";
import { cn } from "@/lib/utils";

interface CalendlyEmbedProps {
  url?: string;
  height?: string;
  className?: string;
}

export function CalendlyEmbed({
  url,
  height = defaultEmbedOptions.height,
  className,
}: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const calendlyUrl = url || getCalendlyUrl();

  // Check if URL is the placeholder
  const isPlaceholder = calendlyUrl.includes("your-username");

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg bg-muted/50",
          className
        )}
        style={{ minHeight: defaultEmbedOptions.minHeight }}
      >
        <div className="text-center p-8">
          <p className="text-muted-foreground mb-2">
            Calendly booking widget will appear here
          </p>
          <p className="text-sm text-muted-foreground/75">
            Configure NEXT_PUBLIC_CALENDLY_URL in your environment
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg animate-pulse"
          style={{ minHeight: defaultEmbedOptions.minHeight }}
        >
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading booking calendar...</p>
          </div>
        </div>
      )}

      {/* Calendly iframe */}
      <iframe
        src={calendlyUrl}
        width="100%"
        height={height}
        frameBorder="0"
        title="Schedule a booking"
        aria-label="Calendly scheduling widget - Book your house and pet sitting service"
        onLoad={() => setIsLoading(false)}
        className={cn(
          "rounded-lg transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        style={{ minHeight: defaultEmbedOptions.minHeight }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
