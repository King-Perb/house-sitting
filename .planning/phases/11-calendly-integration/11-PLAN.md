---
phase: 11-calendly-integration
plan: 11
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/calendly/calendly-embed.tsx
  - src/components/calendly/calendly-inline.tsx
  - src/components/sections/booking-section.tsx
  - src/app/book/page.tsx
  - src/lib/calendly.ts
autonomous: true
user_setup:
  - Calendly Professional account ($10/month) required for payment collection
  - Stripe account connected to Calendly for payment processing
  - Calendly event type configured with custom intake questions
  - Payment settings configured in Calendly (amount, timing)

must_haves:
  truths:
    - Calendly iframe loads correctly on all devices
    - Booking flow works end-to-end (select time -> enter details -> pay -> confirm)
    - Iframe is mobile-responsive and scales properly
    - Calendly embed URL is configurable via environment variable
  artifacts:
    - src/components/calendly/calendly-embed.tsx with reusable embed component
    - src/components/calendly/calendly-inline.tsx with inline widget variant
    - src/components/sections/booking-section.tsx with booking CTA and embed
    - src/app/book/page.tsx dedicated booking page
    - src/lib/calendly.ts with configuration and utility functions
  key_links:
    - Calendly embed -> environment variable (NEXT_PUBLIC_CALENDLY_URL)
    - Booking section -> Core UI layout components (Phase 02)
    - Mobile responsiveness -> Tailwind responsive utilities
---

<objective>
Integrate Calendly booking system with payment capability into the website.

Purpose: Enable visitors to book house and pet sitting services directly through an embedded Calendly widget, with payment collection via Stripe integration. This is the primary conversion point of the website.

Output: Fully functional Calendly integration with mobile-responsive iframe embed, dedicated booking page, and booking section component for homepage use.
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
  <name>Task 1: Create Calendly embed components</name>
  <files>
    src/components/calendly/calendly-embed.tsx
    src/components/calendly/calendly-inline.tsx
    src/lib/calendly.ts
  </files>
  <action>
    Create reusable Calendly embed components for the website.

    1. Create src/lib/calendly.ts:
       - Export Calendly URL from environment variable (NEXT_PUBLIC_CALENDLY_URL)
       - Export default embed options (height, background color, text color)
       - Export utility function to construct embed URL with prefill parameters

    2. Create src/components/calendly/calendly-embed.tsx:
       - Accept props: url (optional, defaults to env), height, className
       - Render iframe with Calendly embed URL
       - Include proper sandbox attributes for security
       - Apply responsive styling with min-height for mobile
       - Add loading state with skeleton placeholder

    3. Create src/components/calendly/calendly-inline.tsx:
       - Alternative inline widget using Calendly's inline embed script
       - Load Calendly widget script dynamically
       - Accept props for customization (hide event type details, hide landing page, etc.)
       - Handle script loading and cleanup on unmount

    Both components should:
    - Be client components ('use client')
    - Support custom styling via className prop
    - Handle missing URL gracefully with fallback message
  </action>
  <verify>
    Verify components compile without TypeScript errors.
    Verify iframe renders with placeholder URL.
    Verify responsive styles apply on different viewport sizes.
    Test that loading state displays while iframe loads.
  </verify>
  <done>
    Calendly embed components created, typed correctly, and render with placeholder/configured URL.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create booking section and dedicated page</name>
  <files>
    src/components/sections/booking-section.tsx
    src/app/book/page.tsx
  </files>
  <action>
    Create the booking section component and dedicated booking page.

    1. Create src/components/sections/booking-section.tsx:
       - Section heading: "Book Your Service"
       - Brief description of the booking process
       - Embed the CalendlyEmbed component
       - Include trust indicators below the embed
       - Responsive layout with proper padding/margins
       - Use shadcn/ui Card component for framing (optional)

    2. Create src/app/book/page.tsx:
       - Dedicated full-page booking experience
       - Page metadata (title, description) for SEO
       - Header with back navigation
       - CalendlyInline component for better full-page experience
       - Additional information sidebar (what to expect, contact info)
       - Mobile-responsive layout (stack on mobile, side-by-side on desktop)

    Styling considerations:
    - Minimum iframe height: 650px on desktop, 700px on mobile
    - Allow iframe to grow with content if possible
    - Ensure booking section has clear visual hierarchy
  </action>
  <verify>
    Verify booking section renders with Calendly embed.
    Verify /book page is accessible and displays properly.
    Test responsive layout on mobile and desktop viewports.
    Verify page metadata is correctly set.
  </verify>
  <done>
    Booking section and dedicated page created, Calendly embeds display correctly, layout is mobile-responsive.
  </done>
</task>

<task type="auto">
  <name>Task 3: Configure environment and verify mobile responsiveness</name>
  <files>
    .env.example
    .env.local
    src/components/calendly/calendly-embed.tsx
    src/components/calendly/calendly-inline.tsx
  </files>
  <action>
    Configure environment variables and verify full mobile responsiveness.

    1. Update .env.example (or create if not exists):
       - Add NEXT_PUBLIC_CALENDLY_URL placeholder
       - Add comments explaining the required Calendly Professional setup
       - Document the URL format (https://calendly.com/username/event-type)

    2. Create/update .env.local for development:
       - Set NEXT_PUBLIC_CALENDLY_URL to user's Calendly URL (or placeholder)

    3. Mobile responsiveness verification:
       - Test iframe at 320px, 375px, 414px, 768px, 1024px, 1440px widths
       - Ensure no horizontal scrolling within iframe container
       - Verify touch interactions work on mobile
       - Test iframe height adjusts appropriately per device

    4. Cross-browser considerations:
       - Verify iframe renders in Chrome, Firefox, Safari, Edge
       - Test sandbox attribute compatibility
       - Ensure Calendly widget functions correctly in all browsers

    5. Accessibility:
       - Add proper aria-label to iframe
       - Include title attribute for screen readers
       - Ensure focus management works with keyboard navigation
  </action>
  <verify>
    Verify .env.example contains Calendly URL placeholder with documentation.
    Test on multiple viewport sizes using browser dev tools.
    Verify no console errors related to Calendly embed.
    Test keyboard navigation to iframe element.
  </verify>
  <done>
    Environment configured, mobile responsiveness verified across breakpoints, accessibility attributes in place.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Calendly embed components render without errors
2. Booking section displays embedded Calendly widget
3. /book page is accessible and functional
4. Iframe is mobile-responsive (test at 320px, 768px, 1024px)
5. Environment variable configuration is documented
6. No TypeScript errors in any new files
7. Components integrate with existing layout from Phase 02
</verification>

<success_criteria>
- [ ] CalendlyEmbed component created and functional
- [ ] CalendlyInline component created and functional
- [ ] Booking section component displays Calendly widget
- [ ] Dedicated /book page created with full booking experience
- [ ] Mobile-responsive iframe (no horizontal scroll, proper scaling)
- [ ] Environment variable NEXT_PUBLIC_CALENDLY_URL configured
- [ ] Loading state displays while Calendly loads
- [ ] Accessibility attributes (aria-label, title) in place
- [ ] Components compile without TypeScript errors
- [ ] Integration with Phase 02 layout components verified
</success_criteria>

<output>
After completion, create `.planning/phases/11-calendly-integration/11-SUMMARY.md` documenting:
- What was created
- Calendly configuration requirements
- Environment variables needed
- Any deviations from plan
- Files created/modified
- User setup steps required (Calendly Professional account, Stripe connection)
</output>
