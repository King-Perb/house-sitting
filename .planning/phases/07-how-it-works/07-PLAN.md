---
phase: 07-how-it-works
plan: 07
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/how-it-works-section.tsx
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - How It Works section renders without errors
    - 3-step process is visually clear and easy to follow
    - Timeline expectations are communicated
    - Booking requirements are stated
    - Payment information is visible
    - Section is mobile-responsive
  artifacts:
    - src/components/sections/how-it-works-section.tsx with complete process visualization
    - Updated src/app/page.tsx with HowItWorksSection integrated
  key_links:
    - HowItWorksSection -> page.tsx (component must be imported and rendered)
    - shadcn/ui Card -> how-it-works-section.tsx (for step cards layout)
    - lucide-react icons -> how-it-works-section.tsx (for step icons)
    - Tailwind utilities -> responsive design classes
---

<objective>
Create How It Works section with clear 3-step booking process visualization, timeline expectations, and payment information.

Purpose: Guide potential clients through the booking journey by clearly explaining what to expect at each step. Reduce uncertainty and friction by setting clear expectations for the booking process, timeline, requirements, and payment flow via Calendly/Stripe.

Output: Fully functional How It Works section component integrated into the homepage, featuring a visual 3-step process flow, timeline expectations, booking requirements, and payment information.
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
  <name>Task 1: Create 3-step process visualization component</name>
  <files>
    src/components/sections/how-it-works-section.tsx
  </files>
  <action>
    Create the HowItWorksSection component with a clear 3-step process visualization:

    1. Section container with appropriate padding and max-width
    2. Section heading ("How It Works" or "Simple Booking Process")
    3. Subheading explaining the ease of booking
    4. Three-step process cards/tiles:

       Step 1: Book a Time
       - Icon: Calendar (lucide-react)
       - Title: "Book a Time"
       - Description: Select your preferred date and time via the online booking calendar
       - Mention: Calendly integration for real-time availability

       Step 2: Provide Details
       - Icon: ClipboardList or FileText (lucide-react)
       - Title: "Provide Details"
       - Description: Enter information about your pets, home, and any special requirements
       - Mention: Custom intake form captures all necessary details

       Step 3: Pay & Confirm
       - Icon: CreditCard or CheckCircle (lucide-react)
       - Title: "Pay & Confirm"
       - Description: Secure payment via Stripe, instant confirmation email
       - Mention: Booking is confirmed once payment is received

    5. Visual flow indicators (arrows, numbers, or connecting lines between steps)
    6. Use shadcn/ui Card components for each step
    7. Implement responsive layout:
       - Horizontal flow on desktop (3 columns)
       - Vertical stack on mobile (single column)

    Use lucide-react icons for visual clarity at each step.
  </action>
  <verify>
    Component renders without TypeScript errors.
    All three steps display with icons, titles, and descriptions.
    Visual flow between steps is clear.
    Responsive design works (horizontal on desktop, vertical on mobile).
  </verify>
  <done>
    HowItWorksSection component created with 3-step process visualization and responsive layout.
  </done>
</task>

<task type="auto">
  <name>Task 2: Add timeline expectations, booking requirements, and payment info</name>
  <files>
    src/components/sections/how-it-works-section.tsx
  </files>
  <action>
    Extend the How It Works section to include additional information:

    1. Timeline Expectations subsection:
       - Advance booking notice required (e.g., "Book at least 48 hours in advance")
       - Response time for inquiries (e.g., "Confirmation within 24 hours")
       - When to expect pre-visit consultation

    2. Booking Requirements subsection:
       - Minimum stay duration (if applicable)
       - Service area confirmation (Gran Canaria)
       - Information needed for booking (pet types, dates, special needs)
       - Meet-and-greet requirement for first-time clients (if applicable)

    3. Payment Information subsection:
       - Payment timing (collected at booking via Calendly/Stripe)
       - Accepted payment methods (credit/debit cards via Stripe)
       - Deposit vs. full payment policy
       - Brief cancellation policy reference

    Layout options:
    - Use a secondary Card or info box below the 3 steps
    - Use icons (Clock, CheckSquare, CreditCard) to highlight key points
    - Keep information scannable with bullet points or icon-text pairs

    Ensure the additional information complements rather than overwhelms the main 3-step flow.
  </action>
  <verify>
    Timeline expectations are clearly stated.
    Booking requirements are visible and understandable.
    Payment information is transparent.
    Layout remains clean and not overwhelming.
    Information is scannable (not walls of text).
  </verify>
  <done>
    How It Works section includes timeline, requirements, and payment information in scannable format.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate How It Works section into homepage</name>
  <files>
    src/app/page.tsx
  </files>
  <action>
    Import and add the HowItWorksSection component to the homepage:

    1. Import HowItWorksSection from "@/components/sections/how-it-works-section"
    2. Place in logical order (after Pricing section):
       - Hero
       - About
       - Services
       - Pricing
       - How It Works (new)
       - Testimonials (future)
       - FAQ (future)
       - Contact (future)
    3. Add appropriate section ID for navigation anchoring: id="how-it-works"
    4. Ensure consistent spacing between sections
    5. Verify visual flow from Pricing to How It Works makes sense contextually

    The section should answer "Now that I know the price, how do I book?" naturally following the Pricing section.
  </action>
  <verify>
    HowItWorksSection renders on homepage without errors.
    Section appears in correct position in page flow (after Pricing).
    Section ID "how-it-works" is set for anchor links.
    Spacing is consistent with other sections.
    Full page scrolls smoothly through all sections.
    Contextual flow from Pricing to How It Works feels natural.
  </verify>
  <done>
    How It Works section integrated into homepage with proper positioning and navigation anchor.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. How It Works section displays on homepage with:
   - Clear 3-step visual process (Book, Details, Pay)
   - Icons for each step
   - Visual flow indicators between steps
   - Timeline expectations stated
   - Booking requirements listed
   - Payment information visible
   - Mention of Calendly booking system
4. Section is mobile-responsive (test at 375px, 768px, 1024px widths)
5. Section has id="how-it-works" for anchor navigation
6. Visual consistency with other homepage sections
7. Natural contextual flow from Pricing section
</verification>

<success_criteria>
- [ ] HowItWorksSection component created at src/components/sections/how-it-works-section.tsx
- [ ] 3-step process visualization with icons (Book, Details, Pay)
- [ ] Visual flow indicators between steps
- [ ] Timeline expectations clearly communicated
- [ ] Booking requirements stated
- [ ] Payment information transparent
- [ ] Calendly booking mentioned
- [ ] Section integrated into homepage after Pricing
- [ ] Section ID "how-it-works" set for navigation
- [ ] Mobile-responsive layout verified (horizontal to vertical)
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
</success_criteria>

<output>
After completion, create `.planning/phases/07-how-it-works/07-SUMMARY.md` documenting:
- What was created
- Component structure and styling decisions
- Placeholder content that needs finalization
- Any deviations from plan
- Files created/modified
</output>
