---
phase: 13-seo-structured-data
plan: 13
type: execute
wave: 3
depends_on:
  - 03-hero-section
  - 04-about-section
  - 05-services-section
  - 06-pricing-section
  - 07-how-it-works
  - 08-testimonials-section
  - 09-faq-section
files_modified:
  - src/lib/schema.ts
  - src/components/seo/json-ld.tsx
  - src/app/layout.tsx
  - src/app/page.tsx
autonomous: true

must_haves:
  truths:
    - All schema markup validates with Google Rich Results Test
    - JSON-LD scripts render correctly in page source
    - LocalBusiness schema includes accurate Gran Canaria location data
    - Service schema properly describes all offered services
    - Review schema displays star ratings for testimonials
    - FAQPage schema includes all FAQ content
  artifacts:
    - src/lib/schema.ts with schema generation functions
    - src/components/seo/json-ld.tsx with JSON-LD component
    - Updated layout.tsx with organization schema
    - Updated page.tsx with page-specific schemas
  key_links:
    - Schema functions -> JSON-LD component (data must flow correctly)
    - JSON-LD component -> page layout (must render in head or body)
    - Content sections -> Schema data (content must match schema)
---

<objective>
Implement comprehensive Schema.org structured data markup for AI-ready SEO.

Purpose: Enable rich search results, improve visibility in Google and AI-powered search engines, and provide machine-readable data about the house & pet sitting business in Gran Canaria.

Output: Complete JSON-LD structured data implementation including LocalBusiness, Service, Person, Review, FAQPage, and BreadcrumbList schemas that validate with Google's Rich Results Test.
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
  <name>Task 1: Create schema generation utilities</name>
  <files>
    src/lib/schema.ts
  </files>
  <action>
    Create a schema utilities file that generates Schema.org compliant JSON-LD data.

    Implement the following schema generators:

    1. **LocalBusiness Schema**
       - @type: LocalBusiness (or PetSitter if available)
       - name: Business name
       - description: Service description
       - image: Professional photo URL
       - address: Gran Canaria address
       - areaServed: Gran Canaria regions (Las Palmas, Maspalomas, Playa del Ingles, etc.)
       - geo: Latitude/longitude for Gran Canaria
       - telephone: Contact phone
       - email: Contact email
       - url: Website URL
       - priceRange: Price indicator (e.g., "$$")
       - openingHours: Availability
       - sameAs: Social media links (if applicable)

    2. **Service Schema** (for each service type)
       - @type: Service
       - serviceType: Pet Care / House Care / Additional Services
       - provider: Reference to LocalBusiness
       - areaServed: Gran Canaria
       - description: Service details
       - offers: Pricing information

    3. **Person Schema** (for the sitter)
       - @type: Person
       - name: Sitter name
       - jobTitle: House & Pet Sitter
       - description: Professional bio
       - image: Photo URL
       - worksFor: Reference to LocalBusiness
       - knowsAbout: Pet care, house sitting expertise

    4. **Review Schema** (for testimonials)
       - @type: Review
       - reviewRating: Star rating (1-5)
       - author: Client name
       - reviewBody: Testimonial text
       - itemReviewed: Reference to LocalBusiness

    5. **FAQPage Schema**
       - @type: FAQPage
       - mainEntity: Array of Question/Answer pairs
       - Each question with @type: Question, name, acceptedAnswer

    6. **BreadcrumbList Schema**
       - @type: BreadcrumbList
       - itemListElement: Array of breadcrumb items
       - position, name, item for each level

    Export typed functions for each schema type.
    Use TypeScript interfaces for type safety.
  </action>
  <verify>
    Verify all schema functions export correctly.
    Test that generated JSON matches Schema.org specifications.
    Validate output structure matches Google's expected format.
  </verify>
  <done>
    Schema utility file created with all six schema generators, properly typed and exporting valid JSON-LD structures.
  </done>
</task>

<task type="auto">
  <name>Task 2: Create JSON-LD component and integrate schemas</name>
  <files>
    src/components/seo/json-ld.tsx
    src/app/layout.tsx
    src/app/page.tsx
  </files>
  <action>
    Create a reusable JSON-LD component for rendering structured data.

    1. **Create JSON-LD Component** (src/components/seo/json-ld.tsx)
       - Accept schema data as prop
       - Render script tag with type="application/ld+json"
       - Properly escape and stringify JSON data
       - Support single schema or array of schemas

    2. **Integrate in Layout** (src/app/layout.tsx)
       - Add Organization/LocalBusiness schema (site-wide)
       - Add Person schema for the sitter
       - These schemas apply to all pages

    3. **Integrate in Homepage** (src/app/page.tsx)
       - Add Service schemas for each service type
       - Add Review schemas for testimonials section
       - Add FAQPage schema for FAQ section
       - Add BreadcrumbList schema for navigation

    Ensure schemas reference each other correctly:
    - Services reference the LocalBusiness as provider
    - Reviews reference the LocalBusiness as itemReviewed
    - Person references LocalBusiness via worksFor

    Use actual content from existing sections:
    - Pull FAQ questions from FAQ section data
    - Pull testimonials from Testimonials section data
    - Pull service info from Services section data
  </action>
  <verify>
    View page source and verify JSON-LD scripts are present.
    Copy JSON-LD content and validate at https://validator.schema.org/
    Check that all schemas are properly linked via @id references.
  </verify>
  <done>
    JSON-LD component created, schemas integrated into layout and homepage, all schemas render correctly in page source.
  </done>
</task>

<task type="auto">
  <name>Task 3: Validate and test structured data</name>
  <files>
    src/lib/schema.ts
    src/components/seo/json-ld.tsx
  </files>
  <action>
    Perform comprehensive validation of all structured data.

    1. **Schema Validation**
       - Test each schema with Google's Rich Results Test
       - Validate JSON-LD syntax is correct
       - Verify all required properties are present
       - Check for warnings and resolve them

    2. **Content Accuracy**
       - Verify LocalBusiness address is accurate for Gran Canaria
       - Verify geo coordinates are correct
       - Verify service descriptions match actual content
       - Verify FAQ content matches FAQ section
       - Verify testimonials match Reviews section

    3. **Cross-Reference Validation**
       - Verify @id references are consistent
       - Verify provider/itemReviewed references work
       - Test that aggregated data (like aggregate rating) is correct

    4. **Edge Cases**
       - Handle missing optional fields gracefully
       - Ensure special characters in content are escaped
       - Verify URLs are absolute, not relative

    Create test data constants for development:
    - Sample business info
    - Sample services array
    - Sample testimonials array
    - Sample FAQ array

    Document any known limitations or placeholders that need real data.
  </action>
  <verify>
    Run Google Rich Results Test on deployed/preview URL.
    Verify no errors in any schema type.
    Document any warnings with explanations.
    Test with Schema.org validator for completeness.
  </verify>
  <done>
    All schemas validate without errors, content is accurate, cross-references work correctly, documentation updated with any notes.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Page source contains valid JSON-LD script tags
2. Google Rich Results Test shows no errors for:
   - LocalBusiness
   - Service (multiple)
   - Person
   - Review (multiple)
   - FAQPage
   - BreadcrumbList
3. Schema data accurately reflects website content
4. All @id references resolve correctly
5. TypeScript compilation succeeds with no errors
6. Schemas render on both development and production builds
</verification>

<success_criteria>
- [ ] src/lib/schema.ts created with all schema generators
- [ ] src/components/seo/json-ld.tsx component created
- [ ] LocalBusiness schema implemented with Gran Canaria data
- [ ] Service schema implemented for all service types
- [ ] Person schema implemented for sitter profile
- [ ] Review schema implemented for testimonials
- [ ] FAQPage schema implemented with FAQ content
- [ ] BreadcrumbList schema implemented
- [ ] All schemas validate with Google Rich Results Test
- [ ] No TypeScript errors
- [ ] Schemas integrate actual content from sections
</success_criteria>

<output>
After completion, create `.planning/phases/13-seo-structured-data/13-SUMMARY.md` documenting:
- Schemas implemented
- Validation results
- Any warnings or limitations
- Files created/modified
- Notes on required real data (addresses, coordinates, etc.)
</output>
