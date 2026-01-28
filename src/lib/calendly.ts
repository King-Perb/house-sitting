// Calendly configuration and utilities

/**
 * Get Calendly URL from environment variable
 * Falls back to a placeholder for development
 */
export function getCalendlyUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/your-username/house-pet-sitting"
  );
}

/**
 * Default embed options for Calendly widget
 */
export const defaultEmbedOptions = {
  height: "700px",
  minHeight: "650px",
  backgroundColor: "ffffff",
  textColor: "374151",
  primaryColor: "0ea5e9",
};

/**
 * Build a Calendly URL with optional prefill parameters
 */
export function buildCalendlyUrl(
  baseUrl?: string,
  prefill?: {
    name?: string;
    email?: string;
    phone?: string;
    customAnswers?: Record<string, string>;
  }
): string {
  const url = new URL(baseUrl || getCalendlyUrl());

  if (prefill?.name) {
    url.searchParams.set("name", prefill.name);
  }
  if (prefill?.email) {
    url.searchParams.set("email", prefill.email);
  }
  if (prefill?.phone) {
    // Calendly uses a1 for phone number
    url.searchParams.set("a1", prefill.phone);
  }
  if (prefill?.customAnswers) {
    Object.entries(prefill.customAnswers).forEach(([, value], index) => {
      // Custom answers use a2, a3, etc.
      url.searchParams.set(`a${index + 2}`, value);
    });
  }

  return url.toString();
}

/**
 * Check if Calendly URL is configured (not placeholder)
 */
export function isCalendlyConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  return !!url && !url.includes("your-username");
}
