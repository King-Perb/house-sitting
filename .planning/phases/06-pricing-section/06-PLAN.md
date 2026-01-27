---
phase: 06-pricing-section
plan: 06
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/pricing-section.tsx
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - Pricing section renders without errors
    - Rate information is clearly displayed
    - Inclusions list is visible and scannable
    - Payment terms are transparent
    - Section is mobile-responsive
  artifacts:
    - src/components/sections/pricing-section.tsx with complete pricing component
    - Updated src/app/page.tsx with PricingSection integrated
  key_links:
    - PricingSection -> page.tsx (component must be imported and rendered)
    - shadcn/ui Card -> pricing-section.tsx (for pricing card layout)
    - Tailwind utilities -> responsive design classes
---

<objective>
Create transparent pricing section displaying daily/weekly rates with clear inclusions and payment terms.

Purpose: Provide potential clients with clear, honest pricing information that builds trust and reduces friction in the booking decision. Transparency in pricing eliminates confusion and sets proper expectations.

Output: Fully functional pricing section component integrated into the homepage, displaying rates, what's included, and payment terms in a professional, easy-to-understand format.
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
  <name>Task 1: Create pricing section component structure</name>
  <files>
    src/components/sections/pricing-section.tsx
  </files>
  <action>
    Create the PricingSection component with the following structure:

    1. Section container with appropriate padding and max-width
    2. Section heading ("Pricing" or "Transparent Pricing")
    3. Subheading explaining the pricing philosophy (no hidden fees, clear rates)
    4. Pricing card(s) using shadcn/ui Card component displaying:
       - Daily rate prominently displayed
       - Weekly rate with discount indication
       - Currency (EUR for Gran Canaria)
    5. Use consistent styling with other sections
    6. Implement responsive layout (stacked on mobile, side-by-side on larger screens if multiple cards)

    Use shadcn/ui components:
    - Card, CardHeader, CardTitle, CardDescription, CardContent
    - Badge for highlighting features or discounts

    Placeholder pricing values are acceptable (to be finalized in content phase).
  </action>
  <verify>
    Component renders without TypeScript errors.
    Card layout displays correctly.
    Rates are prominently visible.
    Responsive design works on mobile viewport.
  </verify>
  <done>
    PricingSection component created with rate display structure and responsive card layout.
  </done>
</task>

<task type="auto">
  <name>Task 2: Add inclusions and payment terms</name>
  <files>
    src/components/sections/pricing-section.tsx
  </files>
  <action>
    Extend the pricing section to include:

    1. "What's Included" section with checkmark list:
       - Daily visits (frequency)
       - Pet feeding and care
       - House security checks
       - Plant watering
       - Mail collection
       - Photo/video updates
       - Emergency contact availability

    2. "Payment Terms" section explaining:
       - When payment is collected (booking confirmation)
       - Accepted payment methods (via Calendly/Stripe)
       - Deposit requirements (if any)
       - Cancellation policy overview

    3. Optional: "Additional Services" note for services with extra fees
       - Extended stays
       - Multiple pets
       - Special requirements

    Use visual indicators:
    - Checkmark icons for included items (lucide-react Check icon)
    - Clear typography hierarchy
    - Appropriate spacing for scanability
  </action>
  <verify>
    Inclusions list renders with checkmarks.
    Payment terms are clearly visible.
    Additional services noted if applicable.
    Layout remains clean and scannable.
  </verify>
  <done>
    Pricing section includes comprehensive inclusions list and transparent payment terms.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate pricing section into homepage</name>
  <files>
    src/app/page.tsx
  </files>
  <action>
    Import and add the PricingSection component to the homepage:

    1. Import PricingSection from "@/components/sections/pricing-section"
    2. Place in logical order (typically after Services section):
       - Hero
       - About
       - Services
       - Pricing (new)
       - How It Works (future)
       - Testimonials (future)
       - FAQ (future)
       - Contact (future)
    3. Add appropriate section ID for navigation anchoring: id="pricing"
    4. Ensure consistent spacing between sections

    Verify the section fits naturally in the page flow and maintains visual consistency with existing sections.
  </action>
  <verify>
    PricingSection renders on homepage without errors.
    Section appears in correct position in page flow.
    Section ID "pricing" is set for anchor links.
    Spacing is consistent with other sections.
    Full page scrolls smoothly through all sections.
  </verify>
  <done>
    Pricing section integrated into homepage with proper positioning and navigation anchor.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Pricing section displays on homepage with:
   - Clear daily and weekly rate display
   - Visible "What's Included" checklist
   - Transparent payment terms
   - Professional, trustworthy appearance
4. Section is mobile-responsive (test at 375px, 768px, 1024px widths)
5. Section has id="pricing" for anchor navigation
6. Visual consistency with other homepage sections
</verification>

<success_criteria>
- [ ] PricingSection component created at src/components/sections/pricing-section.tsx
- [ ] Daily and weekly rates displayed prominently
- [ ] "What's Included" section with checkmark list
- [ ] Payment terms clearly explained
- [ ] Section integrated into homepage
- [ ] Section ID "pricing" set for navigation
- [ ] Mobile-responsive layout verified
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
</success_criteria>

<output>
After completion, create `.planning/phases/06-pricing-section/06-SUMMARY.md` documenting:
- What was created
- Component structure and styling decisions
- Placeholder content that needs finalization
- Any deviations from plan
- Files created/modified
</output>
