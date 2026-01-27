---
phase: 09-faq-section
plan: 09
type: execute
wave: 3
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/faq-section.tsx
  - src/components/ui/accordion.tsx
  - src/data/faq-data.ts
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - FAQ section renders with accordion functionality
    - All FAQ items expand and collapse correctly
    - FAQPage schema markup is valid JSON-LD
    - Gran Canaria-specific questions are included
    - Accordion is keyboard accessible
  artifacts:
    - src/components/sections/faq-section.tsx with FAQ component
    - src/components/ui/accordion.tsx shadcn/ui accordion component
    - src/data/faq-data.ts with Q&A content
    - FAQPage schema markup embedded in section
  key_links:
    - FAQ section -> Accordion component (UI interaction)
    - FAQ data -> FAQ section (content rendering)
    - FAQPage schema -> Google Rich Results (SEO validation)
---

<objective>
Create an FAQ section with accordion/expandable format, common Q&A content, and FAQPage schema markup.

Purpose: Address common client concerns upfront, reduce repetitive inquiry questions, build trust through transparency, and improve SEO with structured FAQ data that enables rich results in search engines.

Output: Fully functional FAQ section with accessible accordion UI, comprehensive Q&A content including Gran Canaria-specific questions, and valid FAQPage schema markup.
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
  <name>Task 1: Install shadcn/ui Accordion component and create FAQ data</name>
  <files>
    src/components/ui/accordion.tsx
    src/data/faq-data.ts
  </files>
  <action>
    Install the shadcn/ui Accordion component:
    Run: `npx shadcn@latest add accordion`

    Create FAQ data file at src/data/faq-data.ts containing an array of FAQ items with:
    - Question text
    - Answer text (can include formatted content)
    - Category (optional, for organization)

    Include these FAQ categories and questions:

    **General Services:**
    - What services do you offer?
    - How long have you been pet/house sitting?
    - Are you insured?
    - Do you have references?

    **Booking & Availability:**
    - How far in advance should I book?
    - What is your cancellation policy?
    - What are your rates?
    - How do I pay for services?

    **Pet Care:**
    - What happens if my pet gets sick or injured?
    - Can you administer medication to pets?
    - Do you take care of all types of pets?
    - How do you handle pet emergencies?

    **House Care:**
    - What house care tasks are included?
    - Will you water my plants and collect mail?
    - Do you provide security checks?

    **Gran Canaria Specific:**
    - What areas of Gran Canaria do you serve?
    - Are you familiar with local veterinarians?
    - Do you speak Spanish?
    - Can you handle the local climate needs for pets?

    Export the FAQ data as a typed array for use in the FAQ section.
  </action>
  <verify>
    Verify src/components/ui/accordion.tsx exists after shadcn installation.
    Verify src/data/faq-data.ts exports properly typed FAQ data.
    Verify TypeScript compilation succeeds with the new data file.
  </verify>
  <done>
    Accordion component installed, FAQ data file created with comprehensive Q&A content including Gran Canaria-specific questions.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create FAQ section component with accordion and schema markup</name>
  <files>
    src/components/sections/faq-section.tsx
  </files>
  <action>
    Create the FAQ section component at src/components/sections/faq-section.tsx:

    **Component Structure:**
    - Section wrapper with id="faq" for navigation
    - Section heading (H2): "Frequently Asked Questions"
    - Optional subheading with brief intro text
    - Accordion component rendering FAQ items
    - FAQPage JSON-LD schema markup

    **Accordion Implementation:**
    - Use shadcn/ui Accordion component
    - Each FAQ item as AccordionItem with AccordionTrigger and AccordionContent
    - Allow multiple items open (type="multiple") or single (type="single" collapsible)
    - Style questions as clear, readable triggers
    - Style answers with proper spacing and typography

    **FAQPage Schema Markup:**
    - Implement JSON-LD structured data for FAQPage schema
    - Include @context, @type, and mainEntity array
    - Each FAQ item should be a Question type with acceptedAnswer
    - Embed schema in a script tag with type="application/ld+json"

    **Styling:**
    - Consistent with site design system
    - Clear visual hierarchy
    - Hover and focus states for accessibility
    - Mobile-responsive layout
    - Adequate spacing between items

    **Accessibility:**
    - Proper ARIA attributes (handled by shadcn/ui)
    - Keyboard navigation support
    - Focus indicators
    - Screen reader friendly
  </action>
  <verify>
    Import and render FAQ section in isolation to verify:
    - Accordion expands/collapses correctly
    - All FAQ items display properly
    - Keyboard navigation works (Tab, Enter, Space)
    - Schema markup is present in page source
    Validate schema at https://validator.schema.org/ or Google Rich Results Test
  </verify>
  <done>
    FAQ section component created with working accordion, styled content, and valid FAQPage schema markup.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate FAQ section into main page</name>
  <files>
    src/app/page.tsx
  </files>
  <action>
    Import and add the FAQ section to the main page:

    **Integration:**
    - Import FAQSection from @/components/sections/faq-section
    - Add FAQSection to the page in appropriate position (typically after testimonials, before contact)
    - Ensure proper section spacing and visual flow with surrounding sections

    **Navigation (if applicable):**
    - Verify id="faq" allows anchor link navigation
    - Update any navigation components to include FAQ link if needed

    **Final Review:**
    - Check visual consistency with other sections
    - Verify responsive behavior on mobile/tablet/desktop
    - Test accordion functionality in context of full page
    - Verify schema markup appears in page source
  </action>
  <verify>
    Run `npm run dev` and verify:
    - FAQ section renders in correct position on page
    - Accordion functionality works in full page context
    - Styling is consistent with other sections
    - Mobile responsive layout works
    - Schema markup is present in page source (View Source or DevTools)
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    FAQ section integrated into main page, fully functional, styled consistently, with valid schema markup.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. FAQ section renders on homepage with:
   - Clear "Frequently Asked Questions" heading
   - Working accordion with expand/collapse functionality
   - All FAQ items display correctly
   - Gran Canaria-specific questions included
4. FAQPage schema markup:
   - Present in page source as JSON-LD
   - Validates at schema.org validator or Google Rich Results Test
5. Accessibility:
   - Keyboard navigation works (Tab through items, Enter/Space to toggle)
   - Focus states visible
   - Screen reader announces accordion state
6. Responsive design works on mobile, tablet, and desktop
</verification>

<success_criteria>
- [ ] shadcn/ui Accordion component installed
- [ ] FAQ data file created with comprehensive Q&A content
- [ ] Gran Canaria-specific questions included
- [ ] FAQ section component created with accordion UI
- [ ] FAQPage JSON-LD schema markup implemented
- [ ] Schema markup validates correctly
- [ ] FAQ section integrated into main page
- [ ] Accordion expand/collapse works correctly
- [ ] Keyboard accessible
- [ ] Mobile responsive
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
</success_criteria>

<output>
After completion, create `.planning/phases/09-faq-section/09-SUMMARY.md` documenting:
- What was created
- FAQ questions included
- Schema markup implementation details
- Any deviations from plan
- Files created/modified
</output>
