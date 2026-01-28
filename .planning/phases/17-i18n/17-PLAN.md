# Phase 17: Internationalization (i18n)

## Goal

Implement multilanguage support for English (primary), Spanish (secondary), and German (optional) to serve expats, tourists, and local residents in Gran Canaria.

## What Must Be TRUE

1. Users can view the site in English, Spanish, or German
2. Language can be switched via a visible language selector
3. URLs reflect the language (e.g., `/en/`, `/es/`, `/de/`)
4. Search engines see proper hreflang tags for each language
5. User's language preference persists across sessions
6. All existing content has translations (or fallback to English)

## Deliverables

### Infrastructure
- [ ] Install and configure `next-intl` library
- [ ] Set up locale routing with `[locale]` segment
- [ ] Create middleware for locale detection and redirects
- [ ] Configure supported locales: `en`, `es`, `de`
- [ ] Set up translation file structure

### Translation Files
- [ ] Create `/messages/en.json` - English translations (extract from current content)
- [ ] Create `/messages/es.json` - Spanish translations
- [ ] Create `/messages/de.json` - German translations (optional, can start with English fallback)

### Components
- [ ] Create `LanguageSwitcher` component for header
- [ ] Update all components to use translation functions
- [ ] Update all hardcoded strings in:
  - Header/Navigation
  - Hero section
  - About section
  - Services section
  - Pricing section
  - How It Works section
  - Testimonials section
  - FAQ section
  - Contact form
  - Footer
  - Trust badges
  - Service area pages

### SEO
- [ ] Add hreflang tags to all pages
- [ ] Update sitemap to include all language variants
- [ ] Update OpenGraph/meta tags per locale
- [ ] Update structured data (Schema.org) per locale

### Content Migration
- [ ] Extract all hardcoded English strings to translation files
- [ ] Translate FAQ content to Spanish
- [ ] Translate service descriptions to Spanish
- [ ] Translate UI strings to Spanish
- [ ] (Optional) German translations

## Technical Approach

### Library: next-intl
Recommended for Next.js App Router. Provides:
- Server and client component support
- Middleware for locale detection
- Type-safe translations
- ICU message format support

### File Structure
```
src/
├── app/
│   └── [locale]/           # All routes wrapped in locale segment
│       ├── layout.tsx      # Locale-aware layout
│       ├── page.tsx        # Homepage
│       ├── book/
│       ├── areas/
│       └── ...
├── i18n/
│   ├── request.ts          # Server-side i18n config
│   └── routing.ts          # Routing config
├── messages/
│   ├── en.json             # English translations
│   ├── es.json             # Spanish translations
│   └── de.json             # German translations
└── middleware.ts           # Locale detection middleware
```

### Translation Key Structure
```json
{
  "common": {
    "bookNow": "Book Now",
    "contactMe": "Contact Me",
    "learnMore": "Learn More"
  },
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "pricing": "Pricing",
    "faq": "FAQ",
    "contact": "Contact"
  },
  "hero": {
    "title": "Professional House & Pet Sitting in Gran Canaria",
    "subtitle": "..."
  },
  // ... etc
}
```

## Tasks

### Task 17.1: Install and Configure next-intl
**Goal:** Set up i18n infrastructure

1. Install next-intl: `npm install next-intl`
2. Create `src/i18n/routing.ts` with locale config
3. Create `src/i18n/request.ts` for server-side config
4. Create `src/middleware.ts` for locale detection
5. Create initial `messages/en.json` with placeholder structure

**Verification:** App builds without errors, middleware runs

### Task 17.2: Restructure Routes for Locale
**Goal:** All routes use `[locale]` segment

1. Create `src/app/[locale]/` directory
2. Move all page files under `[locale]/`
3. Update layout.tsx to use locale-aware providers
4. Update all internal links to use locale
5. Test navigation works with `/en/`, `/es/` prefixes

**Verification:** All pages accessible at `/en/*`, `/es/*`

### Task 17.3: Extract English Content to Translation Files
**Goal:** No hardcoded strings remain

1. Create comprehensive `messages/en.json`
2. Update Header component to use `useTranslations`
3. Update Footer component
4. Update HeroSection
5. Update AboutSection
6. Update ServicesSection
7. Update PricingSection
8. Update HowItWorksSection
9. Update TestimonialsSection
10. Update FAQSection
11. Update ContactSection
12. Update TrustBadges
13. Update service area pages

**Verification:** Changing locale shows different (placeholder) content

### Task 17.4: Create Spanish Translations
**Goal:** Full Spanish language support

1. Create `messages/es.json` with all translations
2. Translate navigation strings
3. Translate hero content
4. Translate about content
5. Translate services content
6. Translate pricing content
7. Translate FAQ content
8. Translate form labels and messages
9. Translate footer content

**Verification:** Full site viewable in Spanish

### Task 17.5: Create Language Switcher Component
**Goal:** Users can easily switch languages

1. Create `LanguageSwitcher` component
2. Add to Header (desktop and mobile)
3. Style to match site design
4. Persist language preference
5. Handle locale switching without full page reload

**Verification:** Language switcher visible, functional on all devices

### Task 17.6: Update SEO for i18n
**Goal:** Search engines properly index all languages

1. Add hreflang link tags to layout
2. Update sitemap.ts to generate URLs for all locales
3. Update OpenGraph locale tags
4. Update structured data to include language
5. Test with Google Rich Results Test

**Verification:** hreflang tags present, sitemap includes all locales

### Task 17.7: German Translations (Optional)
**Goal:** German language support

1. Create `messages/de.json`
2. Translate core content
3. Test German locale

**Verification:** Site viewable in German

## Dependencies

- Requires Phases 01-16 complete (core site built)
- Content translations may need professional review

## Success Criteria

1. **Locale Routing Works:** `/en/`, `/es/`, `/de/` all load correctly
2. **Language Switcher:** Visible in header, persists preference
3. **Full Spanish Support:** All content translated and displaying
4. **SEO Compliance:** hreflang tags validate, sitemap includes all locales
5. **No Hardcoded Strings:** All user-facing text comes from translation files
6. **Fallback Works:** Missing translations fall back to English gracefully

## Estimated Scope

- 7 tasks
- Medium complexity (routing restructure is the biggest change)
- Spanish translations need quality review

## Notes

- Start with English + Spanish, add German later if needed
- Consider professional translation review for marketing content
- FAQ and testimonials may need cultural adaptation, not just translation
- Phone number formatting may differ by locale
