"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, ContactFormData } from "@/lib/schemas/contact";
import { submitContactForm } from "@/lib/actions/contact";

export function ContactSection() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      hcaptchaToken: "",
    },
  });

  const onHCaptchaVerify = (token: string) => {
    form.setValue("hcaptchaToken", token);
    form.clearErrors("hcaptchaToken");
  };

  const onHCaptchaExpire = () => {
    form.setValue("hcaptchaToken", "");
  };

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitContactForm(data);
      setSubmitResult(result);

      if (result.success) {
        form.reset();
        captchaRef.current?.resetCaptcha();
      } else if (result.errors) {
        // Set field-specific errors
        Object.entries(result.errors).forEach(([field, messages]) => {
          form.setError(field as keyof ContactFormData, {
            type: "server",
            message: messages[0],
          });
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: t("form.errorDesc"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/50 scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border-2 border-primary/30 bg-card shadow-lg shadow-primary/5 p-6 sm:p-8">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>{t("responseTime")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>{t("availableForCalls")}</span>
            </div>
          </div>

          {/* Success/Error Message */}
          {submitResult && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                submitResult.success
                  ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                  : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
              }`}
              role="alert"
            >
              {submitResult.success ? (
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              )}
              <p>{submitResult.message}</p>
            </div>
          )}

          {/* Contact Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.nameRequired")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("form.namePlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.emailRequired")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("form.emailPlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.phone")}</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder={t("form.phonePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("form.messagePlaceholder")}
                        className="min-h-[120px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* hCaptcha */}
              <FormField
                control={form.control}
                name="hcaptchaToken"
                render={() => (
                  <FormItem>
                    <div className="flex justify-center">
                      <HCaptcha
                        ref={captchaRef}
                        sitekey={hcaptchaSiteKey}
                        onVerify={onHCaptchaVerify}
                        onExpire={onHCaptchaExpire}
                      />
                    </div>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("form.sending")}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t("form.submit")}
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Privacy Note */}
          <p className="mt-6 text-xs text-muted-foreground text-center">
            {t("privacy")}
          </p>
        </div>
      </div>
    </section>
  );
}
