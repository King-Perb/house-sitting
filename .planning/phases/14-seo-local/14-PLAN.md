---
phase: 14-seo-local
plan: 14
type: execute
wave: 3
depends_on:
  - 13-seo-structured-data
files_modified:
  - src/app/areas/page.tsx
  - src/app/areas/las-palmas/page.tsx
  - src/app/areas/maspalomas/page.tsx
  - src/app/areas/playa-del-ingles/page.tsx
  - src/app/layout.tsx
  - src/components/schema/local-business-schema.tsx
  - src/lib/seo/keywords.ts
  - src/lib/seo/service-areas.ts
autonomous: true
user_setup:
  - Create and verify Google Business Profile at business.google.com
  - Add business name, address, phone, and service area (Gran Canaria)
  - Upload business photos to Google Business Profile
  - Set business hours and service categories
  - Request verification (postcard, phone, or email)

must_haves:
  truths:
    - Service area pages render correctly for each location
    - LocalBusiness schema includes serviceArea definitions
    - Location-specific keywords appear naturally in content
    - Meta titles and descriptions include location references
  artifacts:
    - src/app/areas/page.tsx - Service areas index page
    - src/app/areas/las-palmas/page.tsx - Las Palmas service page
    - src/app/areas/maspalomas/page.tsx - Maspalomas service page
    - src/app/areas/playa-del-ingles/page.tsx - Playa del Ingles service page
    - src/lib/seo/keywords.ts - Location-specific keyword mappings
    - src/lib/seo/service-areas.ts - Service area data and metadata
    - src/components/schema/local-business-schema.tsx - Enhanced LocalBusiness schema with service areas
  key_links:
    - Service area pages -> layout.tsx (navigation links)
    - LocalBusiness schema -> service-areas.ts (area data consumed)
    - Keywords -> all content sections (integrated naturally)
---

<objective>
Implement local SEO optimization targeting Gran Canaria and its key service areas.

Purpose: Maximize discoverability in local search results for pet sitting and house sitting services in Gran Canaria. This includes creating location-specific landing pages, integrating local keywords naturally throughout the site, and enhancing structured data with service area information.

Output: Service area pages for Las Palmas, Maspalomas, and Playa del Ingles with location-optimized content, LocalBusiness schema enhanced with service areas, and location keywords integrated throughout existing content.
</objective>

<execution_context>
@.agents/skills/gsd/workflows/execute-plan.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/13-seo-structured-data/13-PLAN.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create location keyword system and service area data</name>
  <files>
    src/lib/seo/keywords.ts
    src/lib/seo/service-areas.ts
  </files>
  <action>
    Create a centralized system for managing location-specific keywords and service area data.

    In src/lib/seo/keywords.ts:
    - Define primary keywords: "pet sitter Gran Canaria", "house sitter Gran Canaria"
    - Define secondary keywords for each service area (Las Palmas, Maspalomas, Playa del Ingles)
    - Create keyword variations: "pet sitting", "house sitting", "pet care", "home watch"
    - Include Spanish variations: "cuidador de mascotas", "cuidador de casas"
    - Export functions for getting location-specific keyword sets

    In src/lib/seo/service-areas.ts:
    - Define ServiceArea type with: name, slug, description, coordinates, keywords, metaTitle, metaDescription
    - Create data for three primary service areas:
      1. Las Palmas de Gran Canaria (capital city, urban area)
      2. Maspalomas (tourist area, south coast)
      3. Playa del Ingles (resort area, adjacent to Maspalomas)
    - Include geographic coordinates for schema markup
    - Define unique selling points for each area (e.g., "urban pet care", "vacation home watching")
  </action>
  <verify>
    TypeScript compiles without errors.
    All service areas have complete data (name, slug, coordinates, meta info).
    Keywords are relevant and not spammy.
  </verify>
  <done>
    Keyword system and service area data files created with complete, type-safe data for all three service areas.
  </done>
</task>

<task type="auto">
  <name>Task 2: Build service area pages</name>
  <files>
    src/app/areas/page.tsx
    src/app/areas/las-palmas/page.tsx
    src/app/areas/maspalomas/page.tsx
    src/app/areas/playa-del-ingles/page.tsx
  </files>
  <action>
    Create service area landing pages optimized for local search.

    In src/app/areas/page.tsx (index page):
    - Hero section: "Pet & House Sitting Services Across Gran Canaria"
    - Map or visual showing service coverage
    - Cards linking to each service area page
    - Brief overview of island-wide availability
    - Generate metadata using service-areas.ts data

    For each area page (las-palmas, maspalomas, playa-del-ingles):
    - Location-specific hero with area name prominently featured
    - Unique content describing services in that area (200-400 words)
    - Local landmarks or neighborhoods mentioned naturally
    - Services offered section (reuse Services component with area context)
    - Local testimonials section (filter or highlight relevant reviews)
    - CTA section with Calendly booking link
    - Generate dynamic metadata (title, description) from service-areas.ts
    - Include LocalBusiness schema with specific areaServed

    Content guidelines:
    - Each page must have unique, valuable content (not just keyword variations)
    - Mention specific neighborhoods, landmarks, or local context
    - Include natural language variations (not keyword stuffing)
    - Las Palmas: urban setting, apartment pet care, city professionals
    - Maspalomas: vacation homes, tourist area, extended stays
    - Playa del Ingles: resort properties, holiday pet care, beach area
  </action>
  <verify>
    All four pages render without errors.
    Each page has unique, substantial content (not duplicate).
    Metadata is properly generated for each page.
    Internal links work between pages.
    Pages are responsive on mobile.
  </verify>
  <done>
    Service area index and three location pages created with unique content, proper metadata, and local SEO optimization.
  </done>
</task>

<task type="auto">
  <name>Task 3: Enhance LocalBusiness schema with service areas and integrate local references</name>
  <files>
    src/components/schema/local-business-schema.tsx
    src/app/layout.tsx
    src/app/page.tsx
  </files>
  <action>
    Enhance the LocalBusiness schema markup to include service area definitions.

    In src/components/schema/local-business-schema.tsx:
    - Update or create LocalBusiness schema component
    - Add areaServed property with GeoCircle or AdministrativeArea for each service area
    - Include geo coordinates for the primary business location
    - Add serviceArea array with all three areas
    - Ensure schema follows Schema.org LocalBusiness specification
    - Add hasOfferCatalog with service offerings by area

    Schema structure:
    ```json
    {
      "@type": "LocalBusiness",
      "areaServed": [
        {
          "@type": "City",
          "name": "Las Palmas de Gran Canaria",
          "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." }
        },
        // ... other areas
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": { "latitude": "...", "longitude": "..." },
        "geoRadius": "50 km"
      }
    }
    ```

    In src/app/layout.tsx:
    - Ensure LocalBusiness schema is included in the root layout
    - Add navigation links to service area pages (in header/footer)

    In src/app/page.tsx (homepage):
    - Add "Areas We Serve" section or enhance existing location references
    - Link to service area pages from homepage
    - Ensure "Gran Canaria" appears naturally in key positions (H1, first paragraph)

    Local reference integration:
    - Review existing sections (Hero, About, Services) for natural location mentions
    - Add specific area mentions where appropriate without keyword stuffing
    - Ensure location appears in: page title, H1, first 100 words, conclusion
  </action>
  <verify>
    LocalBusiness schema validates at schema.org validator or Google Rich Results Test.
    Service areas appear correctly in schema output.
    Navigation includes links to area pages.
    Location mentions feel natural and not forced.
    No duplicate schema issues (only one LocalBusiness per page).
  </verify>
  <done>
    LocalBusiness schema enhanced with service areas, navigation updated, and local references integrated naturally throughout the site.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Service area pages accessible at /areas, /areas/las-palmas, /areas/maspalomas, /areas/playa-del-ingles
2. Each page has unique meta title and description with location keywords
3. LocalBusiness schema validates without errors
4. Schema includes all three service areas with coordinates
5. Navigation provides access to area pages
6. Location keywords appear naturally (not stuffed) in content
7. All pages pass Lighthouse SEO audit (90+)
8. No console errors or hydration mismatches
</verification>

<success_criteria>
- [ ] src/lib/seo/keywords.ts created with location-specific keyword system
- [ ] src/lib/seo/service-areas.ts created with complete area data
- [ ] /areas index page displays all service areas
- [ ] /areas/las-palmas page with unique local content
- [ ] /areas/maspalomas page with unique local content
- [ ] /areas/playa-del-ingles page with unique local content
- [ ] LocalBusiness schema includes serviceArea and areaServed
- [ ] Schema validates at Google Rich Results Test
- [ ] Navigation updated with area page links
- [ ] Location keywords integrated naturally throughout site
- [ ] All pages responsive and accessible
- [ ] No duplicate content across area pages
</success_criteria>

<output>
After completion, create `.planning/phases/14-seo-local/14-SUMMARY.md` documenting:
- Service area pages created and their URLs
- Keyword strategy implemented
- Schema enhancements made
- Local references added throughout site
- Any deviations from plan
- Recommendations for Google Business Profile setup (user action required)
</output>
