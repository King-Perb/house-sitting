---
phase: 01-project-setup
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - package.json
  - tsconfig.json
  - next.config.ts
  - tailwind.config.ts
  - postcss.config.mjs
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/app/globals.css
  - src/lib/utils.ts
  - components.json
  - .gitignore
autonomous: true

must_haves:
  truths:
    - Next.js development server runs without errors
    - TypeScript compilation succeeds
    - Tailwind CSS classes apply correctly
    - shadcn/ui components can be imported and rendered
  artifacts:
    - package.json with Next.js 16, TypeScript, Tailwind dependencies
    - tsconfig.json with strict TypeScript configuration
    - tailwind.config.ts with shadcn/ui configuration
    - src/app/layout.tsx with root layout
    - src/app/page.tsx with test content
    - src/lib/utils.ts with cn utility function
    - components.json with shadcn/ui configuration
  key_links:
    - Tailwind config -> globals.css (directives must be present)
    - shadcn/ui -> components.json (paths must match project structure)
    - TypeScript -> tsconfig paths (@ alias must resolve)
---

<objective>
Set up Next.js 16 project with TypeScript, Tailwind CSS, and shadcn/ui foundation.

Purpose: Establish the core development environment and tooling for the house & pet sitter website. This is the foundation all other phases build upon.

Output: Working Next.js application with TypeScript, Tailwind CSS configured, and shadcn/ui ready for component installation.
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
  <name>Task 1: Initialize Next.js 16 project with TypeScript</name>
  <files>
    package.json
    tsconfig.json
    next.config.ts
    src/app/layout.tsx
    src/app/page.tsx
    src/app/globals.css
    .gitignore
  </files>
  <action>
    Create a new Next.js 16 project with TypeScript using create-next-app.

    Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`

    This initializes:
    - Next.js 16 with App Router
    - TypeScript configuration
    - Tailwind CSS (basic setup)
    - ESLint
    - src/ directory structure
    - @ import alias

    After initialization, verify the default page loads.
  </action>
  <verify>
    Run `npm run dev` and verify http://localhost:3000 loads without errors.
    Run `npm run build` to verify TypeScript compilation succeeds.
  </verify>
  <done>
    Next.js dev server starts successfully, default page renders, TypeScript compiles without errors.
  </done>
</task>

<task type="auto">
  <name>Task 2: Configure shadcn/ui</name>
  <files>
    components.json
    tailwind.config.ts
    src/app/globals.css
    src/lib/utils.ts
  </files>
  <action>
    Initialize shadcn/ui in the project.

    Run: `npx shadcn@latest init`

    When prompted, select:
    - Style: Default
    - Base color: Neutral (or Slate for a professional look)
    - CSS variables: Yes
    - tailwind.config.ts location: tailwind.config.ts
    - components alias: @/components
    - utils alias: @/lib/utils
    - React Server Components: Yes

    This creates:
    - components.json configuration
    - Updates tailwind.config.ts with shadcn/ui theme
    - Updates globals.css with CSS variables
    - Creates src/lib/utils.ts with cn() utility

    After initialization, install a test component to verify the setup:
    Run: `npx shadcn@latest add button`
  </action>
  <verify>
    Verify components.json exists and contains correct paths.
    Verify src/lib/utils.ts exists with cn() function.
    Verify src/components/ui/button.tsx exists.
    Import and render the Button component in page.tsx to confirm it works.
  </verify>
  <done>
    shadcn/ui is configured, Button component installed and renders correctly with Tailwind styling.
  </done>
</task>

<task type="auto">
  <name>Task 3: Create initial page with verification content</name>
  <files>
    src/app/page.tsx
    src/app/layout.tsx
  </files>
  <action>
    Update the default page.tsx to include:
    - Import and render the shadcn/ui Button component
    - A heading with Tailwind classes to verify styling works
    - Basic responsive layout (flex, padding, centering)

    Update layout.tsx metadata:
    - title: "House & Pet Sitter | Gran Canaria"
    - description: "Professional house and pet sitting services in Gran Canaria"

    This serves as verification that:
    - Tailwind CSS classes work
    - shadcn/ui components render
    - TypeScript is properly configured
    - The app structure is correct
  </action>
  <verify>
    Run `npm run dev` and verify:
    - Page renders with styled heading
    - Button component renders with proper shadcn/ui styling
    - Responsive layout works (check mobile and desktop)
    Run `npm run build` to ensure no TypeScript errors.
  </verify>
  <done>
    Homepage displays styled content with working shadcn/ui Button, Tailwind classes apply correctly, build succeeds.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. `npm run dev` starts without errors
2. `npm run build` succeeds without TypeScript errors
3. Homepage renders with:
   - Styled heading using Tailwind
   - Working shadcn/ui Button component
   - Responsive layout
4. Project structure follows Next.js App Router conventions
5. All configuration files present and valid
</verification>

<success_criteria>
- [ ] Next.js 16 project initialized with TypeScript
- [ ] Tailwind CSS configured and working
- [ ] shadcn/ui initialized with components.json
- [ ] Button component installed and renders correctly
- [ ] Homepage displays verification content
- [ ] `npm run dev` works
- [ ] `npm run build` succeeds
- [ ] Project structure: src/app/, src/components/, src/lib/
</success_criteria>

<output>
After completion, create `.planning/phases/01-project-setup/01-SUMMARY.md` documenting:
- What was created
- Configuration choices made
- Any deviations from plan
- Files created/modified
</output>
