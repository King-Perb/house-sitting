---
phase: 10-contact-form
plan: 10
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/contact-form.tsx
  - src/components/ui/form.tsx
  - src/components/ui/input.tsx
  - src/components/ui/textarea.tsx
  - src/components/ui/label.tsx
  - src/lib/schemas/contact.ts
  - src/lib/actions/contact.ts
  - src/app/api/contact/route.ts
  - .env.local
  - .env.example
  - package.json
autonomous: true

must_haves:
  truths:
    - Contact form renders correctly on all devices
    - Form validation works with real-time error messages
    - Form submission triggers Server Action successfully
    - Email notification sent via Resend on valid submission
    - hCaptcha prevents spam submissions
    - Success and error states display appropriately
  artifacts:
    - src/components/sections/contact-form.tsx with React Hook Form integration
    - src/lib/schemas/contact.ts with Zod validation schema
    - src/lib/actions/contact.ts with Server Action for form handling
    - src/components/ui/form.tsx (shadcn/ui form components)
    - .env.example documenting required environment variables
  key_links:
    - Contact form -> Zod schema (validation must match form fields)
    - Server Action -> Resend API (email must send on valid submission)
    - hCaptcha -> Server Action (token must be verified server-side)
---

<objective>
Implement a contact form for general inquiries with validation, email notifications, and spam protection.

Purpose: Provide an alternative contact method for visitors who have questions before booking. This complements the Calendly booking system by handling general inquiries, special requests, and pre-booking questions.

Output: Fully functional contact form with client-side validation, server-side processing, email notifications via Resend, and hCaptcha spam protection.
</objective>

<execution_context>
@.agents/skills/gsd/workflows/execute-plan.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/REQUIREMENTS.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Install dependencies and create form schema</name>
  <files>
    package.json
    src/lib/schemas/contact.ts
    src/components/ui/form.tsx
    src/components/ui/input.tsx
    src/components/ui/textarea.tsx
    src/components/ui/label.tsx
  </files>
  <action>
    Install required dependencies for form handling and email:

    Run: `npm install react-hook-form @hookform/resolvers zod resend @hcaptcha/react-hcaptcha`

    Add shadcn/ui form components:
    Run: `npx shadcn@latest add form input textarea label`

    Create the Zod validation schema at src/lib/schemas/contact.ts:
    - name: string, required, min 2 characters, max 100 characters
    - email: string, required, valid email format
    - phone: string, optional, valid phone format if provided
    - message: string, optional, max 1000 characters
    - hcaptchaToken: string, required (for spam protection)

    The schema should export both the schema and inferred TypeScript types.
  </action>
  <verify>
    Verify package.json includes react-hook-form, @hookform/resolvers, zod, resend, and @hcaptcha/react-hcaptcha.
    Verify src/lib/schemas/contact.ts exports ContactFormSchema and ContactFormData type.
    Verify shadcn/ui form components exist in src/components/ui/.
  </verify>
  <done>
    Dependencies installed, Zod schema created with proper validation rules, shadcn/ui form components available.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create Server Action and email integration</name>
  <files>
    src/lib/actions/contact.ts
    .env.local
    .env.example
  </files>
  <action>
    Create the Server Action at src/lib/actions/contact.ts:

    1. Mark as 'use server' at the top
    2. Import the Zod schema for validation
    3. Implement submitContactForm action that:
       - Validates input data against Zod schema
       - Verifies hCaptcha token with hCaptcha API
       - Sends email notification via Resend API
       - Returns success/error response with appropriate messages

    Email should include:
    - Sender name and email
    - Phone number (if provided)
    - Message content
    - Timestamp of submission

    Create .env.example with required variables:
    - RESEND_API_KEY=your_resend_api_key
    - CONTACT_EMAIL=email_to_receive_notifications
    - HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key
    - NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key

    Note: User must set up Resend account and obtain API key before testing.
    Note: User must set up hCaptcha account and obtain site/secret keys.
  </action>
  <verify>
    Verify src/lib/actions/contact.ts exports submitContactForm function.
    Verify .env.example documents all required environment variables.
    Verify Server Action includes proper error handling for:
    - Validation failures
    - hCaptcha verification failures
    - Email sending failures
  </verify>
  <done>
    Server Action created with Resend integration and hCaptcha verification, environment variables documented.
  </done>
</task>

<task type="auto">
  <name>Task 3: Build contact form component with UI</name>
  <files>
    src/components/sections/contact-form.tsx
    src/app/page.tsx
  </files>
  <action>
    Create the ContactForm component at src/components/sections/contact-form.tsx:

    1. Use React Hook Form with Zod resolver for validation
    2. Implement form fields:
       - Name (required) - text input
       - Email (required) - email input
       - Phone (optional) - tel input
       - Message (optional) - textarea
    3. Integrate hCaptcha widget
    4. Display real-time validation errors under each field
    5. Handle form submission:
       - Show loading state during submission
       - Display success message on successful submission
       - Display error message on failure
       - Reset form on success
    6. Style with Tailwind CSS:
       - Responsive layout (single column on mobile, potentially 2 columns for name/email on desktop)
       - Proper spacing and visual hierarchy
       - Clear focus states
       - Accessible labels and error messages

    Add the ContactForm to the main page in the appropriate section.
    Include section heading: "Get in Touch" or "Contact Us"
    Include helper text explaining this is for inquiries (booking should use Calendly).
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Form renders correctly on desktop and mobile
    - Validation errors appear when submitting empty required fields
    - Email validation rejects invalid formats
    - hCaptcha widget loads and is interactive
    - Form shows loading state during submission
    - Success/error messages display appropriately

    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Contact form component complete with validation, hCaptcha integration, loading states, and success/error messaging. Form is responsive and accessible.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Contact form renders with all fields (name, email, phone, message)
4. Client-side validation works:
   - Required field validation for name and email
   - Email format validation
   - Error messages display under invalid fields
5. hCaptcha widget loads and functions
6. Form submission (with valid Resend API key):
   - Shows loading state
   - Sends email notification
   - Displays success message
   - Resets form
7. Form is mobile-responsive
8. Form is accessible (proper labels, ARIA attributes, keyboard navigation)
</verification>

<success_criteria>
- [ ] React Hook Form and Zod installed and configured
- [ ] Resend and hCaptcha packages installed
- [ ] Zod schema validates all form fields correctly
- [ ] Server Action handles form submission
- [ ] hCaptcha token verified server-side
- [ ] Email sent via Resend on successful submission
- [ ] Contact form renders with all required fields
- [ ] Real-time validation with helpful error messages
- [ ] Loading state during submission
- [ ] Success message after successful submission
- [ ] Error message on submission failure
- [ ] Form is mobile-responsive
- [ ] Form is accessible (WCAG compliant)
- [ ] Environment variables documented in .env.example
</success_criteria>

<output>
After completion, create `.planning/phases/10-contact-form/10-SUMMARY.md` documenting:
- What was created
- Dependencies installed
- Environment variables required
- Any deviations from plan
- Files created/modified
- Setup instructions for Resend and hCaptcha
</output>
