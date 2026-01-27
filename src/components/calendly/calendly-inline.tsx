"use client";

import { useEffect, useRef } from "react";
import { getCalendlyUrl, defaultEmbedOptions } from "@/lib/calendly";
import { cn } from "@/lib/utils";

interface CalendlyInlineProps {
  url?: string;
  height?: string;
  className?: string;
  hideEventTypeDetails?: boolean;
  hideLandingPageDetails?: boolean;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

export function CalendlyInline({
  url,
  height = defaultEmbedOptions.height,
  className,
  hideEventTypeDetails = false,
  hideLandingPageDetails = false,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = url || getCalendlyUrl();

  // Check if URL is the placeholder
  const isPlaceholder = calendlyUrl.includes("your-username");

  useEffect(() => {
    if (isPlaceholder || !containerRef.current) return;

    // Load Calendly CSS
    const linkId = "calendly-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Load Calendly script
    const scriptId = "calendly-script";
    const existingScript = document.getElementById(scriptId);

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = "";

        // Build URL with options
        let embedUrl = calendlyUrl;
        const params = new URLSearchParams();
        if (hideEventTypeDetails) params.set("hide_event_type_details", "1");
        if (hideLandingPageDetails) params.set("hide_landing_page_details", "1");

        const paramString = params.toString();
        if (paramString) {
          embedUrl += (embedUrl.includes("?") ? "&" : "?") + paramString;
        }

        window.Calendly.initInlineWidget({
          url: embedUrl,
          parentElement: containerRef.current,
        });
      }
    };

    if (existingScript) {
      initWidget();
    } else {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up container content on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [calendlyUrl, hideEventTypeDetails, hideLandingPageDetails, isPlaceholder]);

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
    <div
      ref={containerRef}
      className={cn("calendly-inline-widget", className)}
      style={{ minWidth: "320px", height }}
      role="application"
      aria-label="Calendly scheduling widget - Book your house and pet sitting service"
    />
  );
}
