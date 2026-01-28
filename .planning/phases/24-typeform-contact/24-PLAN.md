---
phase: 24-typeform-contact
plan: 24
type: execute
wave: 3
depends_on:
  - 10-contact-form
  - 11-calendly-integration
files_modified:
  - src/components/sections/typeform-section.tsx
  - src/app/page.tsx
  - src/lib/section-visibility.ts
autonomous: true

must_haves:
  truths:
    - Visitors can choose between booking and general enquiry from a single contact hub.
    - Each choice loads the correct Typeform with no page reload.
    - Typeform URLs are configurable via environment variables.
    - The section is visually consistent with the rest of the site and fully responsive.
    - The flow remains accessible (keyboard + screen readers).
  artifacts:
    - src/components/sections/typeform-section.tsx Typeform contact hub section.
    - src/lib/section-visibility.ts flag to toggle the section on/off.
    - src/app/page.tsx integration of the section in the homepage flow.
  key_links:
    - TypeformSection -> section-visibility (feature flag).
    - TypeformSection -> environment variables for Typeform URLs.
    - page.tsx -> TypeformSection (render order with Contact/Booking).
---

<objective>
Create a dedicated Typeform contact "phase" on the homepage that lets visitors choose between a booking flow and a general enquiry flow, each backed by its own Typeform, while keeping the experience on-brand, accessible, and easy to configure.

Purpose: Centralize contact and enquiry flows into a single, simple choice for visitors:
- “Book Me” for people ready to book.
- “General Enquiry” for questions and clarifications.

Output: A reusable Typeform section with a clear heading (“Contact Me” / “How can I help?”), two toggle buttons, and an embedded Typeform iframe area that switches between two forms without navigating away from the page.
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
  <name>Task 1: Define configurable Typeform endpoints</name>
  <files>
    .env.example
    src/components/sections/typeform-section.tsx
  </files>
  <action>
    Add environment variables so Typeform URLs are configurable without code changes:
    - NEXT_PUBLIC_TYPEFORM_BOOKING_URL
    - NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL

    Implementation details:
    - Update .env.example with commented placeholders and a short note on where to find the Typeform IDs.
    - In typeform-section.tsx, read from process.env.NEXT_PUBLIC_TYPEFORM_BOOKING_URL and process.env.NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL with safe fallbacks.
    - Make sure the component still renders a sane default if env vars are missing (e.g., placeholder URLs or a short warning message).
  </action>
  <verify>
    - TypeScript compiles without errors.
    - TypeformSection builds successfully even when env vars are absent.
    - Updating the env vars changes the iframe URLs without code changes.
  </verify>
  <done>
    Typeform URLs are fully configurable via NEXT_PUBLIC_TYPEFORM_BOOKING_URL and NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL, with safe fallbacks.
  </done>
</task>

<task type="auto">
  <name>Task 2: Implement TypeformSection contact hub</name>
  <files>
    src/components/sections/typeform-section.tsx
    src/lib/section-visibility.ts
  </files>
  <action>
    Implement the TypeformSection with:
    - Heading: "Contact Me"
    - Subheading: "How can I help?"
    - Two buttons:
      - "Book Me" → selects booking Typeform.
      - "General Enquiry" → selects enquiry Typeform.
    - A single iframe area that switches src based on the active selection.

    Implementation details:
    - Use React state (useState) to track the active form ("booking" | "enquiry").
    - Style buttons to clearly indicate which option is active (primary vs outline).
    - Wrap the iframe in a card-style container consistent with the new visual system (rounded corners, subtle border, background, and shadow).
    - Ensure the iframe area has a fixed, reasonable height (e.g. 600–700px) and is responsive.
    - Add aria labels and titles so the embed is understandable to assistive technologies.
    - Add a small helper text explaining that forms are powered by Typeform.

    Add a visibility flag:
    - Extend SECTION_VISIBILITY with typeformContact: boolean.
    - Default to true so the section is visible by default.
  </action>
  <verify>
    - Switching between “Book Me” and “General Enquiry” updates the iframe without reloading the page.
    - The section looks visually consistent on mobile, tablet, and desktop.
    - Keyboard users can tab to both buttons and switch forms.
    - Screen readers announce an appropriate title/label for the iframe.
  </verify>
  <done>
    TypeformSection implemented with heading, toggle buttons, embedded Typeform iframe, and visibility flag.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate TypeformSection into homepage flow</name>
  <files>
    src/app/page.tsx
  </files>
  <action>
    Integrate the TypeformSection into the existing homepage layout.

    Implementation details:
    - Import TypeformSection from "@/components/sections".
    - Render it in a sensible place in the flow, e.g. after the traditional ContactSection and before/after BookingSection, depending on UX preference.
    - Wrap the render in SECTION_VISIBILITY.typeformContact so it can be toggled from config.
    - Ensure spacing between adjacent sections remains consistent.
  </action>
  <verify>
    - Homepage renders without errors.
    - TypeformSection appears in the intended place.
    - Toggling SECTION_VISIBILITY.typeformContact to false hides the section cleanly.
    - Smooth scrolling and navigation still behave as expected.
  </verify>
  <done>
    TypeformSection is integrated into the homepage and controlled by the section visibility config.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors.
2. `npm run build` succeeds without TypeScript errors.
3. The Typeform contact hub appears on the homepage with:
   - "Contact Me" heading and "How can I help?" subheading.
   - Two clear buttons: "Book Me" and "General Enquiry".
   - A single iframe area that switches between two Typeforms.
4. Env vars correctly control which Typeforms are loaded.
5. Section is fully responsive across breakpoints.
6. Section is accessible to keyboard and screen reader users.
7. Hiding the section via SECTION_VISIBILITY works without layout issues.
</verification>

<success_criteria>
- [ ] NEXT_PUBLIC_TYPEFORM_BOOKING_URL and NEXT_PUBLIC_TYPEFORM_ENQUIRY_URL documented and wired into the component.
- [ ] TypeformSection renders heading, subheading, toggle buttons, and iframe area.
- [ ] Clicking "Book Me" loads the booking Typeform; clicking "General Enquiry" loads the enquiry Typeform.
- [ ] Styling matches the rest of the site (cards, colors, spacing).
- [ ] Section is mobile-responsive.
- [ ] Accessibility basics verified (labels, focus states, keyboard navigation).
- [ ] `npm run dev` and `npm run build` both succeed.
</success_criteria>

<output>
After completion, create `.planning/phases/24-typeform-contact/24-SUMMARY.md` documenting:
- Typeform URLs and how they are configured.
- UI/UX decisions for the contact hub.
- Any accessibility considerations.
- Files created/modified.
- Known follow-ups or future enhancements (e.g., analytics tracking, form completion goals).
</output>
