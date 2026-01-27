"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormData } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

async function verifyHCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.HCAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("HCAPTCHA_SECRET_KEY not configured");
    // In development without key, allow submissions
    return process.env.NODE_ENV === "development";
  }

  try {
    const response = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("hCaptcha verification error:", error);
    return false;
  }
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactActionResult> {
  // Validate input data
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    const errors: Record<string, string[]> = {};
    validationResult.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field].push(issue.message);
    });

    return {
      success: false,
      message: "Please check your input and try again.",
      errors,
    };
  }

  const { name, email, phone, message, hcaptchaToken } = validationResult.data;

  // Verify hCaptcha token
  const isHCaptchaValid = await verifyHCaptcha(hcaptchaToken);
  if (!isHCaptchaValid) {
    return {
      success: false,
      message: "Captcha verification failed. Please try again.",
      errors: {
        hcaptchaToken: ["Please complete the captcha verification again"],
      },
    };
  }

  // Send email notification
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.FROM_EMAIL || "noreply@example.com";

  if (!contactEmail) {
    console.error("CONTACT_EMAIL not configured");
    return {
      success: false,
      message: "Configuration error. Please try again later.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return {
      success: false,
      message: "Configuration error. Please try again later.",
    };
  }

  try {
    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Atlantic/Canary",
      dateStyle: "full",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: `House Sitter Contact Form <${fromEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Received:</strong> ${timestamp}</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br />") : "No message provided"}</p>
        <hr />
        <p><small>This message was sent via the contact form on your website.</small></p>
      `,
      text: `
New Contact Form Submission
Received: ${timestamp}

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message || "No message provided"}

---
This message was sent via the contact form on your website.
      `.trim(),
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    };
  }
}
