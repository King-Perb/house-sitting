---
phase: 02-core-ui
plan: 02
type: execute
wave: 2
depends_on:
  - 01-project-setup
files_modified:
  - src/components/layout/Header.tsx
  - src/components/layout/Footer.tsx
  - src/components/layout/Layout.tsx
  - src/components/layout/MobileNav.tsx
  - src/components/ui/card.tsx
  - src/app/layout.tsx
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - All layout components render without errors
    - Responsive design works on mobile, tablet, and desktop
    - Navigation is accessible via keyboard
    - Mobile navigation toggles correctly
    - shadcn/ui components integrate seamlessly
  artifacts:
    - src/components/layout/Header.tsx with responsive navigation
    - src/components/layout/Footer.tsx with contact info and links
    - src/components/layout/Layout.tsx wrapping all pages
    - src/components/layout/MobileNav.tsx with hamburger menu
    - src/components/ui/card.tsx via shadcn/ui
  key_links:
    - Layout.tsx -> Header.tsx + Footer.tsx (must wrap page content)
    - Header.tsx -> MobileNav.tsx (hamburger menu on mobile)
    - All components -> Tailwind config (responsive breakpoints)
    - Card component -> shadcn/ui components.json (paths must match)
---

<objective>
Build reusable UI components and page layout structure for the house & pet sitter website.

Purpose: Create the foundational layout components (Header, Footer, Layout wrapper) and install essential shadcn/ui components (Button, Card) that will be used across all pages. Establish responsive design patterns including mobile navigation.

Output: Complete layout system with Header (desktop + mobile navigation), Footer, Layout wrapper, and reusable Card components. All components responsive and accessible.
</objective>

<execution_context>
@.agents/skills/gsd/workflows/execute-plan.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-project-setup/01-SUMMARY.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Install shadcn/ui components and create Card component</name>
  <files>
    src/components/ui/card.tsx
    src/components/ui/sheet.tsx
  </files>
  <action>
    Install required shadcn/ui components for this phase.

    Run: `npx shadcn@latest add card sheet`

    This installs:
    - Card component (for service cards, testimonials, etc.)
    - Sheet component (for mobile navigation slide-out menu)

    The Button component should already be installed from Phase 01.

    Verify the components are installed correctly in src/components/ui/.
  </action>
  <verify>
    Verify src/components/ui/card.tsx exists with Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter exports.
    Verify src/components/ui/sheet.tsx exists with Sheet components.
    Import both in page.tsx temporarily to confirm they render without errors.
  </verify>
  <done>
    Card and Sheet components installed via shadcn/ui, imports work correctly.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create Header with responsive navigation and mobile menu</name>
  <files>
    src/components/layout/Header.tsx
    src/components/layout/MobileNav.tsx
  </files>
  <action>
    Create the Header component with:

    Header.tsx:
    - Logo/site name on the left ("House & Pet Sitter")
    - Desktop navigation links on the right (Home, About, Services, Pricing, FAQ, Contact)
    - Primary CTA button "Book Now" (using shadcn/ui Button)
    - Sticky header with backdrop blur effect
    - Hide navigation on mobile, show hamburger menu button
    - Responsive breakpoint at md (768px)
    - Semantic nav element with proper ARIA labels

    MobileNav.tsx:
    - Use shadcn/ui Sheet component for slide-out menu
    - Hamburger menu icon (use Menu icon from lucide-react)
    - Full navigation links in vertical layout
    - "Book Now" CTA button
    - Close button (X icon)
    - Smooth animation (handled by Sheet component)
    - Focus trap for accessibility

    Navigation links should use Next.js Link component.
    Use Tailwind for all styling with responsive utilities.
  </action>
  <verify>
    Import Header in layout.tsx and verify:
    - Desktop: Logo visible, navigation links displayed horizontally, Book Now button visible
    - Mobile (< 768px): Logo visible, hamburger icon visible, navigation hidden
    - Click hamburger: Sheet slides in with navigation links
    - All links are keyboard accessible (Tab navigation works)
    - Header remains sticky on scroll
  </verify>
  <done>
    Header component renders with desktop navigation, mobile hamburger menu opens Sheet with navigation, all links accessible.
  </done>
</task>

<task type="auto">
  <name>Task 3: Create Footer and Layout wrapper</name>
  <files>
    src/components/layout/Footer.tsx
    src/components/layout/Layout.tsx
    src/app/layout.tsx
    src/app/page.tsx
  </files>
  <action>
    Create the Footer component with:

    Footer.tsx:
    - Three-column layout on desktop (About, Quick Links, Contact)
    - Single column on mobile (stacked)
    - About column: Brief description of service, "Serving Gran Canaria"
    - Quick Links column: Navigation links (same as header)
    - Contact column: Email, phone (placeholder), location "Gran Canaria, Spain"
    - Bottom bar with copyright: "(c) 2025 House & Pet Sitter. All rights reserved."
    - Dark background with light text for contrast
    - Semantic footer element

    Layout.tsx:
    - Wrapper component that includes Header and Footer
    - Main content area with proper min-height (ensures footer at bottom)
    - Accepts children prop for page content
    - Flex column layout with footer pushed to bottom

    Update layout.tsx:
    - Import and use the Layout wrapper component
    - Ensure proper structure: html > body > Layout > children

    Update page.tsx:
    - Create a simple test page demonstrating:
      - A heading "Welcome to House & Pet Sitter"
      - A Card component with sample content
      - Responsive layout verification
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Header appears at top of every page
    - Footer appears at bottom (pushed down even with little content)
    - Footer is responsive (3 columns on desktop, stacked on mobile)
    - Card component displays correctly on test page
    - Page structure is correct (Header -> Content -> Footer)
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Layout wrapper integrates Header and Footer, footer stays at bottom, page structure is correct, all components responsive.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Header component:
   - Displays logo and navigation on desktop
   - Shows hamburger menu on mobile
   - Mobile menu opens/closes correctly
   - Sticky on scroll
4. Footer component:
   - Three-column layout on desktop
   - Single column on mobile
   - Contains About, Links, Contact sections
   - Copyright at bottom
5. Layout wrapper:
   - Header at top
   - Footer at bottom (even with short content)
   - Content area properly sized
6. Card component renders correctly
7. All components are keyboard accessible
8. Responsive design works at all breakpoints
</verification>

<success_criteria>
- [ ] Card and Sheet components installed from shadcn/ui
- [ ] Header component with desktop navigation
- [ ] MobileNav component with Sheet slide-out menu
- [ ] Footer component with three-column responsive layout
- [ ] Layout wrapper integrating Header and Footer
- [ ] All navigation links use Next.js Link component
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Keyboard navigation works for all interactive elements
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] Components located in src/components/layout/
</success_criteria>

<output>
After completion, create `.planning/phases/02-core-ui/02-SUMMARY.md` documenting:
- What was created
- Component structure and hierarchy
- Responsive breakpoints used
- Any deviations from plan
- Files created/modified
</output>
