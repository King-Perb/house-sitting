import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s()-]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
  hcaptchaToken: z
    .string()
    .min(1, "Please complete the captcha verification"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Schema for server-side validation (same rules)
export const serverContactSchema = contactFormSchema;
