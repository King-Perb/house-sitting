---
phase: 15-seo-technical
plan: 15
type: execute
wave: 5
depends_on:
  - 01-project-setup
  - 02-core-ui
  - 03-hero-section
  - 04-about-section
  - 05-services-section
  - 06-pricing-section
  - 07-how-it-works
  - 08-testimonials
  - 09-faq-section
  - 10-contact-form
  - 11-calendly-integration
  - 12-trust-footer
  - 13-seo-structured-data
  - 14-seo-local
files_modified:
  - src/app/sitemap.ts
  - src/app/robots.ts
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/components/seo/OpenGraphTags.tsx
  - src/components/seo/TwitterCardTags.tsx
  - src/lib/seo/metadata.ts
  - next.config.ts
  - public/robots.txt
autonomous: true

must_haves:
  truths:
    - XML sitemap is generated dynamically and accessible at /sitemap.xml
    - robots.txt is accessible at /robots.txt and correctly configured
    - All pages have canonical URLs set
    - Open Graph tags present on all pages for social sharing
    - Twitter Card meta tags present for Twitter previews
    - Language tags (hreflang, lang attribute) correctly set for Spanish/English
    - Semantic HTML elements used throughout (header, nav, main, section, article, footer)
    - All images have descriptive alt text
  artifacts:
    - src/app/sitemap.ts with dynamic sitemap generation
    - src/app/robots.ts or public/robots.txt with crawler directives
    - src/lib/seo/metadata.ts with reusable metadata utilities
    - Updated layout.tsx with language tags
    - All page components with proper semantic HTML structure
  key_links:
    - sitemap.ts -> All page routes (must include all content pages)
    - robots.txt -> sitemap.xml location reference
    - metadata.ts -> layout.tsx and page.tsx (consistent metadata application)
    - Open Graph -> Social sharing previews (Facebook, LinkedIn)
    - Twitter Card -> Twitter sharing previews
---

<objective>
Implement technical SEO elements to maximize search engine crawlability, indexing, and social media sharing.

Purpose: Ensure the house & pet sitter website is fully optimized for search engine crawlers and AI systems, with proper metadata for social sharing. This phase focuses on the technical infrastructure that enables search engines to discover, understand, and index all content correctly.

Output: Complete technical SEO implementation including dynamic XML sitemap, robots.txt, canonical URLs, Open Graph and Twitter Card tags, language tags, semantic HTML structure, and optimized images with alt text.
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
  <name>Task 1: Implement XML Sitemap and robots.txt</name>
  <files>
    src/app/sitemap.ts
    src/app/robots.ts
    next.config.ts
  </files>
  <action>
    Create dynamic XML sitemap generation using Next.js App Router conventions.

    1. Create `src/app/sitemap.ts`:
       - Export a default function that returns MetadataRoute.Sitemap
       - Include all public pages: home, about, services, pricing, contact, FAQ
       - Include service area pages (Las Palmas, Maspalomas, Playa del Ingles, etc.)
       - Set appropriate lastModified dates
       - Set changeFrequency (weekly for main pages, monthly for static content)
       - Set priority (1.0 for home, 0.8 for main sections, 0.6 for service areas)

    2. Create `src/app/robots.ts`:
       - Export a default function that returns MetadataRoute.Robots
       - Allow all search engine crawlers
       - Disallow /api/ routes
       - Reference sitemap location: https://yourdomain.com/sitemap.xml
       - Block common non-content paths (/admin, /_next/static)

    3. Update `next.config.ts` if needed:
       - Ensure static file serving is configured correctly
       - Add any necessary headers for SEO

    The sitemap and robots.txt will be automatically served by Next.js at:
    - /sitemap.xml
    - /robots.txt
  </action>
  <verify>
    Run `npm run build` and verify sitemap.xml and robots.txt are generated.
    Start dev server and access http://localhost:3000/sitemap.xml - verify XML is valid.
    Access http://localhost:3000/robots.txt - verify content is correct.
    Validate sitemap XML structure with an online validator.
  </verify>
  <done>
    Dynamic XML sitemap generates all pages with proper metadata. robots.txt correctly configured with sitemap reference. Both accessible via browser.
  </done>
</task>

<task type="auto">
  <name>Task 2: Implement Open Graph, Twitter Cards, and Canonical URLs</name>
  <files>
    src/lib/seo/metadata.ts
    src/app/layout.tsx
    src/app/page.tsx
    src/app/[service-area-pages]/page.tsx
  </files>
  <action>
    Create centralized metadata utilities and implement social sharing tags.

    1. Create `src/lib/seo/metadata.ts`:
       - Export generateMetadata helper function
       - Define base metadata (site name, default description, base URL)
       - Create Open Graph metadata generator:
         - og:title, og:description, og:image, og:url, og:type, og:locale
         - og:site_name for consistent branding
       - Create Twitter Card metadata generator:
         - twitter:card (summary_large_image for main pages)
         - twitter:title, twitter:description, twitter:image
         - twitter:site and twitter:creator if applicable
       - Create canonical URL generator
       - Support for page-specific overrides

    2. Update `src/app/layout.tsx`:
       - Add default metadata export using Next.js Metadata API
       - Include default Open Graph configuration
       - Include default Twitter Card configuration
       - Set canonical URL for homepage
       - Add viewport and theme-color meta tags

    3. Update `src/app/page.tsx` and other page components:
       - Export page-specific metadata using generateMetadata function
       - Override title, description, and images as appropriate
       - Ensure canonical URLs are unique per page
       - Include location-specific metadata for service area pages

    4. Create default OG image:
       - Ensure a default social sharing image exists (1200x630px recommended)
       - Place in public/images/og-default.jpg or similar

    Metadata structure for each page:
    ```typescript
    export const metadata: Metadata = {
      title: 'Page Title | House & Pet Sitter Gran Canaria',
      description: 'Page-specific description...',
      alternates: {
        canonical: 'https://yourdomain.com/page-path',
      },
      openGraph: {
        title: 'Page Title',
        description: 'Page-specific description...',
        url: 'https://yourdomain.com/page-path',
        siteName: 'House & Pet Sitter Gran Canaria',
        images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
        locale: 'en_ES',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Page Title',
        description: 'Page-specific description...',
        images: ['/images/og-image.jpg'],
      },
    };
    ```
  </action>
  <verify>
    Use browser dev tools to inspect <head> section - verify all meta tags present.
    Use Facebook Sharing Debugger (developers.facebook.com/tools/debug/) to test OG tags.
    Use Twitter Card Validator (cards-dev.twitter.com/validator) to test Twitter tags.
    Verify canonical URLs are absolute and correct for each page.
    Check that metadata varies appropriately between pages.
  </verify>
  <done>
    All pages have complete Open Graph and Twitter Card metadata. Canonical URLs set correctly. Social sharing previews display properly in validation tools.
  </done>
</task>

<task type="auto">
  <name>Task 3: Implement Language Tags, Semantic HTML, and Image Optimization</name>
  <files>
    src/app/layout.tsx
    src/components/**/*.tsx
    src/app/**/page.tsx
    next.config.ts
  </files>
  <action>
    Complete technical SEO implementation with language tags, semantic HTML audit, and image optimization.

    1. Implement Language Tags in `src/app/layout.tsx`:
       - Set html lang attribute: <html lang="en">
       - Add hreflang tags if multi-language is planned:
         ```typescript
         alternates: {
           languages: {
             'en': 'https://yourdomain.com',
             'es': 'https://yourdomain.com/es',
           },
         }
         ```
       - For single language site, ensure lang="en" is set correctly
       - Consider adding x-default hreflang for international targeting

    2. Audit and Update Semantic HTML across all components:
       - Verify <header> wraps site header/navigation
       - Verify <nav> wraps navigation menus
       - Verify <main> wraps main content (one per page)
       - Verify <section> wraps distinct content sections (with aria-label or heading)
       - Verify <article> wraps self-contained content where appropriate
       - Verify <aside> for sidebar content if present
       - Verify <footer> wraps site footer
       - Ensure proper heading hierarchy (single H1 per page, logical H2-H6 structure)
       - Add aria-labels to sections without visible headings

    3. Image Optimization:
       - Audit all <Image> components for alt text:
         - Ensure all images have descriptive, meaningful alt text
         - Use empty alt="" for purely decorative images
         - Include keywords naturally where appropriate
       - Configure Next.js Image Optimization in next.config.ts:
         ```typescript
         images: {
           formats: ['image/avif', 'image/webp'],
           deviceSizes: [640, 750, 828, 1080, 1200, 1920],
           imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
         }
         ```
       - Ensure images use next/image component for automatic optimization
       - Verify lazy loading is enabled (default in Next.js)
       - Add priority prop to above-the-fold images (hero, header logo)

    4. Additional Technical SEO elements:
       - Add structured breadcrumb navigation if not present
       - Ensure all internal links use meaningful anchor text
       - Verify no broken links exist
       - Add rel="noopener noreferrer" to external links
       - Consider adding preconnect hints for external resources (Calendly, fonts)
  </action>
  <verify>
    Inspect HTML source to verify semantic structure is correct.
    Run Lighthouse SEO audit - target 100 score.
    Use W3C HTML Validator to check semantic markup.
    Verify all images have alt text using browser accessibility tools.
    Check that images are served in WebP/AVIF format via Network tab.
    Verify lang attribute is present on <html> tag.
    Test heading structure with a heading map tool or browser extension.
  </verify>
  <done>
    Language tags correctly implemented. All components use semantic HTML. All images optimized with proper alt text and WebP/AVIF delivery. Lighthouse SEO score is 100.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Access /sitemap.xml and verify all pages are listed with correct metadata
2. Access /robots.txt and verify crawler directives are correct
3. Run full site through Google's Rich Results Test
4. Test social sharing with Facebook Debugger and Twitter Card Validator
5. Run Lighthouse audit - SEO score should be 100
6. Verify semantic HTML structure with W3C Validator
7. Check all images have alt text and are served as WebP/AVIF
8. Verify canonical URLs are correct and unique per page
9. Inspect lang attribute on html element
10. Test with browser accessibility tools for proper heading hierarchy
</verification>

<success_criteria>
- [ ] XML sitemap generated dynamically at /sitemap.xml with all pages
- [ ] robots.txt accessible at /robots.txt with correct directives
- [ ] All pages have unique canonical URLs
- [ ] Open Graph tags present and validate correctly
- [ ] Twitter Card tags present and validate correctly
- [ ] HTML lang attribute set correctly
- [ ] Semantic HTML used throughout (header, nav, main, section, article, footer)
- [ ] Proper heading hierarchy (single H1, logical H2-H6)
- [ ] All images have descriptive alt text
- [ ] Images served in WebP/AVIF format via Next.js Image optimization
- [ ] Lighthouse SEO score is 100
- [ ] No broken internal links
- [ ] External links have rel="noopener noreferrer"
</success_criteria>

<output>
After completion, create `.planning/phases/15-seo-technical/15-SUMMARY.md` documenting:
- Technical SEO elements implemented
- Sitemap structure and pages included
- Metadata configuration choices
- Image optimization settings
- Any semantic HTML changes made
- Lighthouse SEO audit results
- Files created/modified
</output>
