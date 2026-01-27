---
phase: 12-trust-footer
plan: 12
type: execute
wave: 3
depends_on:
  - 02-core-ui
  - 03-hero-section
files_modified:
  - src/components/trust-indicators.tsx
  - src/components/trust-badge.tsx
  - src/components/footer.tsx
  - src/app/page.tsx
  - src/app/globals.css
autonomous: true

must_haves:
  truths:
    - Trust indicators display correctly throughout the site
    - Footer renders with all required content sections
    - Trust badges appear in hero section and footer
    - Components are mobile-responsive
    - All trust information is prominent and visible
  artifacts:
    - src/components/trust-indicators.tsx with trust badges component
    - src/components/trust-badge.tsx with individual badge component
    - src/components/footer.tsx with complete footer layout
    - Trust badges integrated into hero section
    - Trust indicators integrated into footer
  key_links:
    - TrustIndicators -> Hero section (badges must render in hero)
    - TrustIndicators -> Footer (badges must render in footer)
    - Footer -> Layout (footer must be in root layout or page)
    - TrustBadge -> TrustIndicators (individual badges compose into group)
---

<objective>
Create trust indicators and footer components to establish credibility and provide essential site information.

Purpose: Build confidence in the service by prominently displaying trust signals (insurance, background checks, experience) and provide a professional footer with contact information, navigation, and legal links.

Output: Reusable trust indicators component displayed in hero and footer, complete footer component with contact info, links, and copyright.
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
  <name>Task 1: Create TrustBadge and TrustIndicators components</name>
  <files>
    src/components/trust-badge.tsx
    src/components/trust-indicators.tsx
  </files>
  <action>
    Create individual TrustBadge component with:
    - Icon display (using lucide-react icons)
    - Label text
    - Optional description/detail text
    - Consistent visual styling (badge-style appearance)
    - Support for different sizes (sm, md, lg)

    Create TrustIndicators component that:
    - Displays a row/grid of trust badges
    - Includes these key indicators:
      - "Fully Insured" (Shield icon)
      - "Background Checked" (CheckCircle or BadgeCheck icon)
      - "X+ Years Experience" (Award or Star icon)
      - "X+ Happy Clients" (Users or Heart icon)
    - Supports horizontal and vertical layouts
    - Supports compact mode for hero section
    - Supports expanded mode for footer

    Style considerations:
    - Use shadcn/ui design tokens for consistency
    - Muted background with subtle borders for badges
    - Icons in primary or accent color
    - Text in foreground color
  </action>
  <verify>
    Import and render TrustIndicators in page.tsx temporarily.
    Verify all trust badges display with correct icons and text.
    Verify responsive behavior on mobile and desktop.
    Run `npm run build` to check for TypeScript errors.
  </verify>
  <done>
    TrustBadge and TrustIndicators components render correctly with all required trust signals.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create Footer component with all required sections</name>
  <files>
    src/components/footer.tsx
    src/app/globals.css
  </files>
  <action>
    Create comprehensive Footer component with:

    1. Contact Information Section:
       - Business name
       - Location (Gran Canaria, Spain)
       - Email address (clickable mailto link)
       - Phone number (clickable tel link)

    2. Quick Links Section:
       - About
       - Services
       - Pricing
       - FAQ
       - Contact/Book Now

    3. Trust Indicators Section:
       - Embed TrustIndicators component in footer
       - Expanded display showing all trust badges

    4. Bottom Bar:
       - Copyright notice with current year
       - Privacy Policy link (placeholder)
       - Terms of Service link (placeholder)

    Layout requirements:
    - Multi-column layout on desktop (3-4 columns)
    - Stacked layout on mobile
    - Consistent padding and spacing
    - Subtle background color differentiation from main content
    - Proper semantic HTML (footer element, nav for links)

    Accessibility:
    - Proper heading hierarchy within footer
    - ARIA labels for navigation sections
    - Focus states for all links
  </action>
  <verify>
    Add Footer to page.tsx or layout.tsx.
    Verify all sections render correctly.
    Verify links are clickable and properly styled.
    Test responsive layout on mobile and desktop.
    Verify trust indicators display in footer.
  </verify>
  <done>
    Footer component displays all required sections with proper layout, trust indicators, and responsive design.
  </done>
</task>

<task type="auto">
  <name>Task 3: Integrate trust badges into Hero section and finalize layout</name>
  <files>
    src/components/hero.tsx
    src/app/page.tsx
    src/app/layout.tsx
  </files>
  <action>
    Update Hero section (from Phase 03) to include trust badges:
    - Add TrustIndicators component below the hero CTA
    - Use compact mode for hero display
    - Position badges prominently but not overwhelming
    - Ensure badges don't push content below the fold

    Integrate Footer into site layout:
    - Add Footer to root layout.tsx OR
    - Add Footer to main page.tsx below all sections
    - Ensure footer appears at bottom of page
    - Verify footer doesn't overlap with other content

    Final integration checks:
    - Trust badges visible in hero section
    - Trust badges visible in footer (expanded view)
    - Consistent styling between hero and footer badges
    - Proper spacing throughout the page
  </action>
  <verify>
    Load the homepage and verify:
    - Trust badges appear below hero CTA
    - Trust badges appear in footer
    - Footer displays at bottom of page
    - No layout issues or overlapping content
    - Responsive on all device sizes
    Run `npm run build` to verify no errors.
  </verify>
  <done>
    Trust indicators integrated into hero and footer, complete page layout with footer at bottom.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Trust badges component renders with all indicators (insurance, background check, experience, clients)
2. Trust badges appear in hero section (compact view)
3. Trust badges appear in footer (expanded view)
4. Footer contains all required sections:
   - Contact information
   - Quick links
   - Trust indicators
   - Copyright and legal links
5. Mobile-responsive layout works correctly
6. All links are functional and accessible
7. `npm run build` succeeds without errors
</verification>

<success_criteria>
- [ ] TrustBadge component created with icon, label, and styling
- [ ] TrustIndicators component displays all required trust signals
- [ ] Footer component created with contact, links, trust, and copyright sections
- [ ] Trust badges integrated into hero section
- [ ] Trust badges integrated into footer
- [ ] Footer added to site layout
- [ ] Mobile-responsive design for all components
- [ ] All links functional (mailto, tel, navigation)
- [ ] `npm run build` succeeds
- [ ] Accessible with proper ARIA labels and focus states
</success_criteria>

<output>
After completion, create `.planning/phases/12-trust-footer/12-SUMMARY.md` documenting:
- What was created
- Trust indicators included
- Footer sections implemented
- Integration points (hero, footer)
- Any deviations from plan
- Files created/modified
</output>
