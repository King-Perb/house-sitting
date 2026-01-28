---
phase: 08-testimonials
plan: 08
type: execute
wave: 2
depends_on:
  - 02-core-ui
files_modified:
  - src/components/sections/Testimonials.tsx
  - src/components/ui/testimonial-card.tsx
  - src/components/ui/star-rating.tsx
  - src/data/testimonials.ts
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - Testimonials section renders with 3-5 client testimonials
    - Star ratings display correctly (1-5 stars)
    - Client information displays properly (name, optional photo)
    - Testimonials feel authentic with specific service details
    - Section is mobile-responsive
  artifacts:
    - src/components/sections/Testimonials.tsx main section component
    - src/components/ui/testimonial-card.tsx reusable card component
    - src/components/ui/star-rating.tsx star rating display component
    - src/data/testimonials.ts testimonial data with typed interface
  key_links:
    - Testimonials.tsx -> testimonial-card.tsx (renders cards in grid)
    - testimonial-card.tsx -> star-rating.tsx (displays rating)
    - Testimonials.tsx -> testimonials.ts (imports data)
    - page.tsx -> Testimonials.tsx (section integrated in page)
---

<objective>
Build the Testimonials section with client testimonials, star ratings, and social proof indicators.

Purpose: Establish social proof and trust through authentic client testimonials. This section showcases satisfied clients from Gran Canaria who have used house and pet sitting services, helping potential clients feel confident in booking.

Output: Complete testimonials section with 3-5 testimonial cards displaying client names, star ratings, specific service details, and optional photos, plus social proof indicators like "Trusted by X+ families."
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
  <name>Task 1: Create testimonial data structure and sample content</name>
  <files>
    src/data/testimonials.ts
  </files>
  <action>
    Create the testimonials data file with TypeScript interfaces and sample testimonial content.

    Define TypeScript interface for Testimonial:
    - id: string
    - clientName: string (first name + last initial, e.g., "Maria S.")
    - rating: number (1-5)
    - testimonialText: string (specific, authentic-sounding feedback)
    - serviceType: "pet-care" | "house-care" | "both"
    - petType?: string (e.g., "2 dogs", "cat", "tropical fish")
    - location?: string (Gran Canaria area, e.g., "Las Palmas", "Maspalomas")
    - date?: string (month/year)
    - clientImage?: string (optional path to client photo)

    Create 5 sample testimonials with:
    - Mix of pet care, house care, and combined services
    - Specific details (pet names, service duration, what made it great)
    - Various Gran Canaria locations
    - All 5-star ratings (or 4-5 star range for authenticity)
    - Authentic, natural language (not overly promotional)

    Export testimonials array and interface.
  </action>
  <verify>
    TypeScript compiles without errors.
    All testimonials have required fields.
    Testimonials include specific, believable details.
  </verify>
  <done>
    Testimonials data file created with typed interface and 5 sample testimonials covering pet care, house care, and combined services across Gran Canaria locations.
  </done>
</task>

<task type="auto">
  <name>Task 2: Build star rating and testimonial card components</name>
  <files>
    src/components/ui/star-rating.tsx
    src/components/ui/testimonial-card.tsx
  </files>
  <action>
    Create the StarRating component:
    - Props: rating (number 1-5), size (optional: "sm" | "md" | "lg")
    - Display filled/empty stars using Lucide React icons (Star)
    - Accessible with aria-label (e.g., "5 out of 5 stars")
    - Use gold/yellow color for filled stars

    Create the TestimonialCard component:
    - Props: testimonial (Testimonial interface)
    - Display client name prominently
    - Display star rating using StarRating component
    - Display testimonial text in quotation style
    - Display service type badge/tag
    - Display pet type if applicable
    - Display location if applicable
    - Optional client photo (with fallback avatar/initials)
    - Use shadcn/ui Card component as base
    - Apply consistent styling with existing UI components

    Both components should be:
    - Fully typed with TypeScript
    - Accessible (proper ARIA labels, semantic HTML)
    - Mobile-responsive
  </action>
  <verify>
    Components compile without TypeScript errors.
    StarRating displays correct number of filled/empty stars.
    TestimonialCard renders all testimonial data properly.
    Components are accessible (check ARIA labels).
  </verify>
  <done>
    StarRating and TestimonialCard components created with proper TypeScript types, accessibility features, and consistent styling.
  </done>
</task>

<task type="auto">
  <name>Task 3: Build Testimonials section and integrate into page</name>
  <files>
    src/components/sections/Testimonials.tsx
    src/app/page.tsx
  </files>
  <action>
    Create the Testimonials section component:
    - Section heading: "What My Clients Say" or similar
    - Social proof indicator: "Trusted by X+ families in Gran Canaria"
    - Grid layout for testimonial cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
    - Import and render TestimonialCard for each testimonial
    - Consistent section styling (padding, max-width, centering)
    - Semantic HTML (section element, proper heading hierarchy)

    Layout considerations:
    - Cards should have equal height in each row
    - Adequate spacing between cards
    - Section background that distinguishes it from adjacent sections
    - Optional subtle decorative elements (quote icon, gradient, etc.)

    Integrate into page.tsx:
    - Import Testimonials section
    - Add to page in appropriate location (after Services or How It Works)
    - Ensure proper spacing between sections
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Testimonials section renders on homepage
    - All 5 testimonials display correctly
    - Grid layout is responsive (check mobile, tablet, desktop)
    - Star ratings display correctly
    - Client information is visible and readable
    - Section has proper heading hierarchy

    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Testimonials section integrated into homepage with responsive grid layout, social proof indicator, and all testimonial cards displaying correctly across devices.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Testimonials section displays on homepage with:
   - Section heading and social proof indicator
   - 5 testimonial cards in responsive grid
   - Star ratings (visual 5-star system)
   - Client names and testimonial text
   - Service type indicators
   - Location mentions (Gran Canaria areas)
4. Mobile-responsive layout (1/2/3 column grid)
5. Accessible (proper ARIA labels, semantic HTML)
6. Testimonials feel authentic with specific details
</verification>

<success_criteria>
- [ ] Testimonials data file with TypeScript interface created
- [ ] 5 sample testimonials with specific, authentic content
- [ ] StarRating component displays 1-5 stars correctly
- [ ] TestimonialCard component renders all testimonial data
- [ ] Testimonials section component with responsive grid layout
- [ ] Social proof indicator displayed (e.g., "Trusted by X+ families")
- [ ] Section integrated into homepage
- [ ] Mobile-responsive (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Accessible with proper ARIA labels
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
</success_criteria>

<output>
After completion, create `.planning/phases/08-testimonials/08-SUMMARY.md` documenting:
- What was created
- Component architecture decisions
- Sample testimonial content approach
- Any deviations from plan
- Files created/modified
</output>
