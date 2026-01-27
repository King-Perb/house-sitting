---
phase: 04-about-section
plan: 04
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/about-section.tsx
  - src/app/page.tsx
  - public/images/profile.jpg
autonomous: true

must_haves:
  truths:
    - About section renders without errors
    - Personal story content is authentic and trust-building
    - Photo displays correctly and is optimized
    - Credentials and experience are clearly visible
    - Gran Canaria service area is mentioned naturally
    - Section is fully responsive on mobile, tablet, and desktop
  artifacts:
    - src/components/sections/about-section.tsx with complete About section component
    - Updated src/app/page.tsx with About section integrated
    - Placeholder image in public/images/ (to be replaced with real photo)
  key_links:
    - About section -> Layout component (must use site-wide container/spacing)
    - About section -> Tailwind config (uses theme colors and typography)
    - Photo -> Next.js Image component (optimized loading)
---

<objective>
Build the About You section that establishes personal trust and connection with potential clients.

Purpose: Create a compelling personal introduction section that humanizes the service, builds emotional connection, and establishes credibility for the house and pet sitting services in Gran Canaria.

Output: Fully responsive About section component with personal story content, professional photo integration, credentials display, and natural Gran Canaria service area mention.
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
  <name>Task 1: Create About Section component with layout and photo</name>
  <files>
    src/components/sections/about-section.tsx
    public/images/profile.jpg
  </files>
  <action>
    Create the AboutSection component with a two-column layout (photo + content):

    1. Create src/components/sections/about-section.tsx:
       - Use semantic HTML with <section> element and proper id="about"
       - Two-column layout: photo on left/top, content on right/bottom
       - Use Next.js Image component for optimized photo loading
       - Apply consistent section padding and container from site layout
       - Ensure mobile-first responsive design (stacks on mobile)

    2. Photo integration:
       - Create placeholder image path public/images/profile.jpg
       - Use Next.js Image with priority loading for above-fold content
       - Apply rounded corners or circular crop styling
       - Add appropriate alt text for accessibility

    3. Layout structure:
       - Section wrapper with id and aria-labelledby
       - Container with max-width matching site design
       - Responsive grid: single column mobile, two columns tablet+
       - Proper spacing between photo and content areas
  </action>
  <verify>
    Component renders without errors.
    Photo placeholder displays with proper sizing.
    Layout is responsive - stacks on mobile, side-by-side on larger screens.
    Accessibility: proper semantic HTML and alt text.
  </verify>
  <done>
    AboutSection component created with responsive two-column layout and photo integration.
  </done>
</task>

<task type="auto">
  <name>Task 2: Add personal story content and credentials</name>
  <files>
    src/components/sections/about-section.tsx
  </files>
  <action>
    Add content sections within the AboutSection component:

    1. Heading and introduction:
       - Section heading "About Me" or "Meet Your House & Pet Sitter"
       - Personal introduction paragraph with warm, authentic tone
       - Brief personal story that builds connection

    2. Personal story content:
       - Why they chose this profession (passion for animals/homes)
       - Background and experience highlights
       - What makes their service special/different
       - Personal touch (love of animals, attention to detail, etc.)

    3. Credentials display:
       - Years of experience
       - Key qualifications or training
       - Insurance status mention
       - Background check reference
       - Use badge/icon style for visual credentials

    4. Service area mention:
       - Natural mention of Gran Canaria
       - Areas served (Las Palmas, Maspalomas, etc.)
       - Local knowledge and availability

    5. Call-to-action:
       - Soft CTA inviting to learn more or book
       - Link to contact or booking section

    Content should be placeholder but realistic - written in first person, warm and professional tone.
  </action>
  <verify>
    All content sections render correctly.
    Tone is personal, authentic, and professional.
    Gran Canaria is mentioned naturally (not forced).
    Credentials are clearly visible and scannable.
    Typography and spacing are consistent with site design.
  </verify>
  <done>
    Personal story content, credentials display, and service area information added with authentic, trust-building tone.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate About section into homepage and verify</name>
  <files>
    src/app/page.tsx
    src/components/sections/about-section.tsx
  </files>
  <action>
    1. Import and add AboutSection to the homepage:
       - Import AboutSection component
       - Place after Hero section in page layout
       - Ensure proper spacing between sections

    2. Verify integration:
       - Test responsive layout at all breakpoints
       - Verify photo loads and displays correctly
       - Check content readability and hierarchy
       - Ensure smooth scroll if linked from navigation

    3. Final polish:
       - Adjust spacing/padding if needed
       - Ensure visual consistency with other sections
       - Check accessibility (heading levels, landmarks)
  </action>
  <verify>
    Run `npm run dev` and verify:
    - About section appears after Hero section
    - Photo displays correctly
    - Content is readable and well-formatted
    - Responsive on mobile, tablet, and desktop
    - No console errors or warnings
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    About section integrated into homepage, fully responsive, and visually consistent with site design.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. About section displays on homepage with:
   - Professional photo (or placeholder)
   - Personal story content with authentic tone
   - Credentials clearly displayed
   - Gran Canaria service area mentioned naturally
   - Responsive layout (mobile, tablet, desktop)
4. Section is accessible (proper headings, alt text, landmarks)
5. Visual design consistent with site theme
</verification>

<success_criteria>
- [ ] AboutSection component created at src/components/sections/about-section.tsx
- [ ] Two-column responsive layout (photo + content)
- [ ] Photo integration with Next.js Image component
- [ ] Personal story content with authentic, warm tone
- [ ] Credentials displayed (experience, insurance, background check)
- [ ] Gran Canaria service area mentioned naturally
- [ ] Section integrated into homepage after Hero
- [ ] Fully responsive on all device sizes
- [ ] Accessible (semantic HTML, alt text, proper heading hierarchy)
- [ ] `npm run dev` works without errors
- [ ] `npm run build` succeeds
</success_criteria>

<output>
After completion, create `.planning/phases/04-about-section/04-SUMMARY.md` documenting:
- What was created
- Content decisions made
- Any deviations from plan
- Files created/modified
- Notes on photo placeholder (to be replaced with real photo)
</output>
