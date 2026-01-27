---
phase: 03-hero-section
plan: 03
type: execute
wave: 1
depends_on:
  - 02-core-ui-components
files_modified:
  - src/components/hero/HeroSection.tsx
  - src/components/hero/TrustBadges.tsx
  - src/components/hero/index.ts
  - src/app/page.tsx
  - public/images/hero.webp
autonomous: true

must_haves:
  truths:
    - Hero section renders above the fold on all devices
    - CTA button is prominent and functional
    - Trust badges display clearly
    - Hero loads in under 1 second
    - Proper heading hierarchy (H1 for main headline)
    - Gran Canaria mentioned in hero content
  artifacts:
    - src/components/hero/HeroSection.tsx with headline, subheadline, CTA
    - src/components/hero/TrustBadges.tsx with trust indicator badges
    - src/components/hero/index.ts barrel export
    - Optimized hero image in public/images/
  key_links:
    - HeroSection -> Button component (shadcn/ui)
    - HeroSection -> TrustBadges component
    - page.tsx -> HeroSection (imported and rendered)
    - Hero image -> Next.js Image component (optimized loading)
---

<objective>
Create a compelling hero section with trust indicators and primary CTA for the house & pet sitter website.

Purpose: The hero section is the first thing visitors see. It must immediately communicate the value proposition (reliable pet and house sitting in Gran Canaria), establish trust through badges, and provide a clear call-to-action for booking.

Output: Fully functional, mobile-responsive hero section component with headline, subheadline, CTA button, trust badges, and optimized hero image.
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
  <name>Task 1: Create TrustBadges component</name>
  <files>
    src/components/hero/TrustBadges.tsx
    src/components/hero/index.ts
  </files>
  <action>
    Create the TrustBadges component that displays trust indicators.

    The component should include badges for:
    - "Fully Insured" - with shield/checkmark icon
    - "Background Checked" - with verification icon
    - "X+ Years Experience" - with star/badge icon

    Implementation details:
    - Use Tailwind CSS for styling
    - Use Lucide React icons (already included with shadcn/ui)
    - Make badges responsive (stack on mobile, row on desktop)
    - Use semantic HTML with appropriate ARIA labels
    - Style with muted/subtle colors that don't compete with CTA

    Create barrel export file (index.ts) for clean imports.
  </action>
  <verify>
    Import TrustBadges in a test page and verify:
    - All three badges render with icons
    - Responsive layout works (mobile stack, desktop row)
    - Accessible with screen reader
  </verify>
  <done>
    TrustBadges component renders all trust indicators with icons, responsive layout, and proper accessibility.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create HeroSection component with CTA</name>
  <files>
    src/components/hero/HeroSection.tsx
    src/components/hero/index.ts
    public/images/hero.webp
  </files>
  <action>
    Create the main HeroSection component with all required elements.

    Structure:
    - H1 headline: Compelling value proposition (e.g., "Your Trusted Pet & House Sitter in Gran Canaria")
    - Subheadline: Supporting message about peace of mind and reliable care
    - Primary CTA button: "Book Now" or "Get Started" using shadcn/ui Button
    - TrustBadges component integrated below CTA
    - Hero image: Use Next.js Image component with priority loading

    Implementation details:
    - Use Next.js Image component for optimized image loading
    - Set priority={true} for above-the-fold loading
    - Implement responsive design (mobile-first)
    - Use proper semantic HTML (section, h1, p)
    - Style CTA button prominently (large, high contrast)
    - Include location mention "Serving Gran Canaria" or similar
    - Consider overlay or gradient for text readability over image

    For hero image:
    - Use a placeholder image initially (can be replaced later)
    - Optimize for WebP format
    - Set appropriate width/height for aspect ratio
    - Add meaningful alt text

    Update barrel export to include HeroSection.
  </action>
  <verify>
    Render HeroSection and verify:
    - H1 headline displays prominently
    - Subheadline is readable
    - CTA button is visually prominent and clickable
    - Trust badges display below CTA
    - Hero image loads with priority
    - Gran Canaria is mentioned
    - Responsive layout works on mobile, tablet, desktop
  </verify>
  <done>
    HeroSection component renders complete hero with headline, subheadline, CTA, trust badges, and optimized image. Mobile-responsive and accessible.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate HeroSection into homepage</name>
  <files>
    src/app/page.tsx
  </files>
  <action>
    Update the homepage to render the HeroSection component.

    Implementation:
    - Import HeroSection from @/components/hero
    - Replace placeholder content with HeroSection
    - Ensure HeroSection is the first content element
    - Keep within the existing layout structure (Header, main, Footer)

    The hero should:
    - Appear immediately below the header
    - Take up significant viewport height (min-h-[80vh] or similar)
    - Be the dominant visual element above the fold
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Homepage loads with hero section
    - Hero is visible above the fold
    - All elements render correctly (headline, subheadline, CTA, badges, image)
    - Page loads quickly (hero should appear within 1 second)
    - Responsive design works on all breakpoints
    - No console errors or warnings
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Homepage displays complete hero section above the fold with all elements working correctly.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Hero section displays above the fold on all devices
4. All hero elements present:
   - H1 headline with value proposition
   - Subheadline with supporting message
   - Gran Canaria location mention
   - Primary CTA button (prominent and clickable)
   - Trust badges (Insured, Background Checked, Experience)
   - Hero image (optimized, loads quickly)
5. Responsive design works (mobile, tablet, desktop)
6. Accessibility: proper heading hierarchy, alt text, keyboard navigation
7. Performance: hero loads in under 1 second
</verification>

<success_criteria>
- [ ] HeroSection component created and renders correctly
- [ ] TrustBadges component created with 3 trust indicators
- [ ] H1 headline displays compelling value proposition
- [ ] Subheadline provides supporting message
- [ ] Gran Canaria mentioned in hero content
- [ ] Primary CTA button is prominent and functional
- [ ] Trust badges display clearly (Insured, Background Checked, Experience)
- [ ] Hero image loads with Next.js Image optimization
- [ ] Mobile-responsive design (works on all screen sizes)
- [ ] Accessible (proper heading structure, alt text, ARIA labels)
- [ ] Hero visible above the fold on all devices
- [ ] `npm run dev` works without errors
- [ ] `npm run build` succeeds
</success_criteria>

<output>
After completion, create `.planning/phases/03-hero-section/03-SUMMARY.md` documenting:
- Components created (HeroSection, TrustBadges)
- Design decisions made
- Content/copy used for headline, subheadline
- Any deviations from plan
- Files created/modified
- Performance metrics (if measured)
</output>
