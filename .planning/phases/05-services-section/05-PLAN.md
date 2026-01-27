---
phase: 05-services-section
plan: 05
type: execute
wave: 2
depends_on:
  - 02-core-ui-components
files_modified:
  - src/components/sections/services.tsx
  - src/components/ui/service-card.tsx
  - src/app/page.tsx
  - src/lib/data/services.ts
autonomous: true

must_haves:
  truths:
    - Services section renders without errors
    - All three service categories display correctly (Pet Care, House Care, Additional)
    - Service cards are responsive on mobile, tablet, and desktop
    - Each service includes icon, title, description, and included items
    - Service area coverage mentions Gran Canaria locations
  artifacts:
    - src/components/sections/services.tsx with main services section component
    - src/components/ui/service-card.tsx with reusable service card component
    - src/lib/data/services.ts with service data structure
    - Updated src/app/page.tsx importing and rendering services section
  key_links:
    - Services section -> page.tsx (must be imported and positioned correctly)
    - Service cards -> services data (data structure must match card props)
    - Icons -> lucide-react (icon imports must be valid)
---

<objective>
Build the Services section showcasing Pet Care, House Care, and Additional Services in a clear, scannable card-based layout.

Purpose: Clearly communicate the range of services offered to potential clients in Gran Canaria, making it easy for them to understand what's available and what's included in each service category.

Output: Fully responsive Services section with service cards containing icons, descriptions, and included items list, integrated into the main page.
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
  <name>Task 1: Create service data structure and service card component</name>
  <files>
    src/lib/data/services.ts
    src/components/ui/service-card.tsx
  </files>
  <action>
    Create the service data structure in src/lib/data/services.ts:
    - Define TypeScript interface for Service (id, title, description, icon, includedItems, category)
    - Create services array with three categories:
      1. Pet Care: feeding, walking, medication administration, playtime, overnight stays
      2. House Care: mail collection, plant watering, security checks, lighting management
      3. Additional Services: garden care, pool maintenance, grocery shopping, transportation
    - Include Gran Canaria service area coverage data

    Create the ServiceCard component in src/components/ui/service-card.tsx:
    - Accept service data as props
    - Display icon (using lucide-react icons)
    - Display title with proper heading level
    - Display description text
    - Display "What's Included" list with checkmarks
    - Use shadcn/ui Card component as base
    - Apply consistent styling with Tailwind CSS
    - Ensure accessibility (proper heading hierarchy, ARIA labels)
  </action>
  <verify>
    Verify src/lib/data/services.ts exports services array with all three categories.
    Verify ServiceCard component imports and renders without TypeScript errors.
    Verify Card component from shadcn/ui is used correctly.
  </verify>
  <done>
    Service data structure defined with all service categories. ServiceCard component renders service information with icon, title, description, and included items list.
  </done>
</task>

<task type="auto">
  <name>Task 2: Build Services section component with responsive layout</name>
  <files>
    src/components/sections/services.tsx
    src/app/page.tsx
  </files>
  <action>
    Create the Services section component in src/components/sections/services.tsx:
    - Import ServiceCard component and services data
    - Create section with semantic HTML (section element with proper id)
    - Add section heading (h2) with descriptive title
    - Add introductory paragraph mentioning Gran Canaria
    - Create responsive grid layout for service cards:
      - Mobile: 1 column
      - Tablet: 2 columns
      - Desktop: 3 columns
    - Add service area coverage subsection:
      - List of areas served (Las Palmas, Maspalomas, Playa del Ingles, etc.)
      - Map placeholder or text description of coverage area
    - Apply consistent spacing and styling

    Integrate into src/app/page.tsx:
    - Import Services section component
    - Add to page in appropriate position (after About section or Hero)
    - Ensure proper section spacing
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Services section displays with all three service categories
    - Grid layout responds correctly to viewport changes
    - Service cards display all information (icon, title, description, included items)
    - Service area coverage is visible
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Services section renders with responsive card grid, all service categories display correctly, service area coverage shown, integrated into main page.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Services section displays:
   - Section heading and introductory text
   - Three service cards (Pet Care, House Care, Additional Services)
   - Each card shows icon, title, description, and included items
   - Service area coverage with Gran Canaria locations
4. Responsive layout works:
   - 1 column on mobile (< 640px)
   - 2 columns on tablet (640px - 1024px)
   - 3 columns on desktop (> 1024px)
5. Accessibility:
   - Proper heading hierarchy (h2 for section, h3 for cards)
   - Semantic HTML structure
   - Sufficient color contrast
</verification>

<success_criteria>
- [ ] Services data structure created with all three categories
- [ ] ServiceCard component renders with icon, title, description, included items
- [ ] Services section component with responsive grid layout
- [ ] Service area coverage displays Gran Canaria locations
- [ ] Mobile-responsive card layout (1/2/3 columns)
- [ ] Each service clearly explained with what's included
- [ ] Integrated into main page
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] Proper accessibility (heading hierarchy, semantic HTML)
</success_criteria>

<output>
After completion, create `.planning/phases/05-services-section/05-SUMMARY.md` documenting:
- What was created
- Service categories and their included items
- Component structure decisions
- Any deviations from plan
- Files created/modified
</output>
