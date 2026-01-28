"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const TYPEFORM_BOOKING_URL =
  process.env.NEXT_PUBLIC_TYPEFORM_BOOKING_URL ||
  "https://form.typeform.com/to/BOOKING_FORM_ID";

const TYPEFORM_ENQUIRY_URL =
  process.env.NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL ||
  "https://form.typeform.com/to/ENQUIRY_FORM_ID";

type FormType = "booking" | "enquiry";

export function TypeformSection() {
  const [activeForm, setActiveForm] = useState<FormType>("booking");

  const iframeSrc =
    activeForm === "booking" ? TYPEFORM_BOOKING_URL : TYPEFORM_ENQUIRY_URL;

  return (
    <section
      id="typeform-contact"
      className="py-16 md:py-24 bg-background scroll-mt-24"
      aria-labelledby="typeform-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            id="typeform-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How can I help?
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button
            type="button"
            variant={activeForm === "booking" ? "default" : "outline"}
            size="lg"
            className="min-w-[160px]"
            onClick={() => setActiveForm("booking")}
          >
            Book Me
          </Button>
          <Button
            type="button"
            variant={activeForm === "enquiry" ? "default" : "outline"}
            size="lg"
            className="min-w-[160px]"
            onClick={() => setActiveForm("enquiry")}
          >
            General Enquiry
          </Button>
        </div>

        {/* Typeform Embed */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-primary/10 bg-background/95 shadow-sm overflow-hidden">
          <iframe
            title={
              activeForm === "booking"
                ? "Booking enquiry form"
                : "General enquiry form"
            }
            src={iframeSrc}
            className="w-full h-[600px]"
            style={{ border: "0" }}
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>

        {/* Note */}
        <p className="mt-4 text-xs text-muted-foreground text-center">
          You can configure the Typeform URLs via{" "}
          <code>NEXT_PUBLIC_TYPEFORM_BOOKING_URL</code> and{" "}
          <code>NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL</code>.
        </p>
      </div>
    </section>
  );
}
