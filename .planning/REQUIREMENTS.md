# Requirements: House & Pet Sitter Website

## Scope: MVP (Minimum Viable Product)

This document defines the scoped requirements for the initial launch of the personal house and pet sitter website for Gran Canaria.

## Core Features (P0 - Must Have)

### 1. Hero Section
**Goal:** Immediately communicate value proposition and provide clear CTA

**Requirements:**
- Large, attention-grabbing headline addressing main value proposition
- Subheadline explaining key benefit (peace of mind, reliable care)
- Primary CTA button ("Book Now" or "Get Started")
- Trust indicators/badges (e.g., "Fully Insured", "Background Checked", "X Years Experience")
- High-quality hero image (pets, home, or professional photo)
- Location mention: "Serving Gran Canaria"

**Acceptance Criteria:**
- Hero section visible above the fold on all devices
- CTA button is prominent and clickable
- Trust badges are clearly visible
- Mobile-responsive layout
- Page load time < 3 seconds

### 2. About You Section
**Goal:** Build trust and personal connection

**Requirements:**
- Personal introduction and story
- Professional photo
- Credentials and qualifications
- Years of experience
- Why clients should trust you
- Service area/availability (Gran Canaria focus)

**Acceptance Criteria:**
- Personal, authentic tone
- Professional yet approachable
- Builds emotional connection
- Establishes credibility
- Mentions Gran Canaria naturally

### 3. Services Section
**Goal:** Clearly communicate what services are offered

**Requirements:**
- Card-based layout showcasing services
- Clear service descriptions
- Services to include:
  - Pet Care (feeding, walking, medication administration)
  - House Care (mail collection, plant watering, security checks)
  - Additional Services (garden care, pool maintenance, etc.)
- What's included vs. what's not included
- Service area coverage (Gran Canaria areas)

**Acceptance Criteria:**
- Each service clearly explained
- Visual icons or images for each service
- Mobile-responsive card layout
- Easy to scan and understand
- Location-specific (Gran Canaria)

### 4. Pricing Section
**Goal:** Transparent pricing information

**Requirements:**
- Transparent, simple pricing structure
- Clear rate display (daily, weekly, or per service)
- What's included in the price
- Payment terms and methods
- No hidden fees

**Acceptance Criteria:**
- Pricing is clear and easy to understand
- No confusion about what's included
- Transparent about additional fees (if any)

### 5. How It Works Section
**Goal:** Explain the booking process clearly

**Requirements:**
- Simple 3-step process visualization:
  1. Book a Time - Select available date/time via Calendly
  2. Provide Details - Enter pet info, house details, special requests
  3. Pay & Confirm - Secure payment via Stripe (integrated in Calendly)
- Clear explanation of each step
- Timeline expectations
- Booking requirements (minimum stay, advance notice, etc.)
- Payment information (when payment is collected, accepted methods)

**Acceptance Criteria:**
- Process is easy to understand
- Visual flow (icons or illustrations)
- Sets clear expectations
- Mentions Calendly booking

### 6. Testimonials/Reviews Section
**Goal:** Build social proof and trust

**Requirements:**
- Client testimonials with:
  - Client name (or first name + last initial)
  - Star ratings (5-star system)
  - Specific details (pet types, services used, results)
  - Client photos (optional but preferred)
- Multiple testimonials (minimum 3-5)
- Mix of pet care and house care testimonials
- Social proof indicators (e.g., "Trusted by X+ families")

**Acceptance Criteria:**
- Testimonials feel authentic
- Include specific details
- Display prominently
- Mobile-responsive layout

### 7. FAQ Section
**Goal:** Address common concerns and improve SEO

**Requirements:**
- Common questions and answers:
  - Insurance coverage
  - Emergency procedures
  - What happens if pet gets sick
  - References available
  - Availability and booking timeline
  - Payment methods
  - Cancellation policy
  - Gran Canaria-specific questions
- Accordion or expandable format
- Easy to find and navigate
- SEO-optimized (FAQPage schema)

**Acceptance Criteria:**
- Addresses common concerns
- Reduces need for initial inquiry calls
- Builds trust through transparency
- Includes location-specific questions

### 8. Contact/Booking Section
**Goal:** Enable easy booking and contact

**Requirements:**
- **Primary Booking Method**: Calendly embedded iframe
  - Integrated booking calendar with real-time availability
  - Custom intake questions (pet types, house details, service dates, special requests)
  - Payment collection via Stripe (integrated in Calendly)
  - Automatic email confirmations and reminders
  - Calendar sync (Google Calendar, Outlook)
- **Calendly Setup**:
  - Calendly Professional plan ($10/month) required for payment collection
  - Stripe account connected to Calendly
  - Payment amount and timing configured (before/after booking)
  - Custom questions enabled for service details
- **Alternative Contact Methods** (for inquiries, not booking):
  - Contact form with fields:
    - Name (required)
    - Email (required)
    - Phone (optional but preferred)
    - Message/Inquiry details (optional)
  - Phone number (clickable on mobile)
  - Email address
- Form implementation (for contact form only):
  - React Hook Form for form state management
  - Zod for validation schemas
  - shadcn/ui form components
  - Next.js Server Actions for submission
  - Email notifications via Resend
  - Spam protection (hCaptcha)
- Clear call-to-action for booking
- Response time expectations (e.g., "I'll respond within 24 hours")
- Success/error messaging with clear feedback

**Acceptance Criteria:**
- Calendly iframe loads correctly and is mobile-responsive
- Booking flow is seamless (select time → enter details → pay → confirm)
- Payment processing works correctly via Stripe
- Custom intake questions collect necessary service information
- Email confirmations sent automatically
- Alternative contact form works for general inquiries
- Mobile-friendly on all devices
- Accessible (WCAG compliant)

### 9. Trust Indicators
**Goal:** Establish credibility throughout the site

**Requirements:**
- Display throughout the site:
  - Insurance status
  - Background check verification
  - Years of experience
  - Number of satisfied clients
  - Certifications (if applicable)
  - Professional associations (if applicable)
- Badge-style visual elements
- Visible in hero section and footer

**Acceptance Criteria:**
- Trust indicators are prominent
- Credible and verifiable
- Build confidence in the service

## SEO Requirements (P0 - Must Have)

### 10. Local SEO for Gran Canaria
**Goal:** Maximize discoverability in Gran Canaria

**Requirements:**
- Google Business Profile created and optimized
- Location-specific keywords integrated naturally
- Service area pages (Las Palmas, Maspalomas, Playa del Inglés, etc.)
- Local references throughout content
- Structured data (LocalBusiness schema)
- Location in title tags and meta descriptions

**Acceptance Criteria:**
- Google Business Profile live and optimized
- Location keywords in all key pages
- Service area pages created
- Schema markup validates correctly

### 11. AI-Ready SEO
**Goal:** Optimize for AI search and featured snippets

**Requirements:**
- Structured data (Schema.org):
  - LocalBusiness schema
  - Service schema for each service type
  - Person schema for sitter profile
  - Review schema for testimonials
  - FAQPage schema for FAQ section
  - BreadcrumbList schema for navigation
- Semantic HTML:
  - Proper heading hierarchy (H1, H2, H3)
  - Semantic elements (`<article>`, `<section>`, `<nav>`, etc.)
  - Alt text for all images
  - Descriptive link text
- Technical SEO:
  - XML sitemap
  - robots.txt file
  - Canonical URLs
  - Open Graph tags
  - Twitter Card meta tags
  - Language tags

**Acceptance Criteria:**
- All schema markup validates
- Semantic HTML structure correct
- Technical SEO elements in place
- Page passes Google's Rich Results Test

## Technical Requirements

### 12. Performance
**Goal:** Fast, responsive website

**Requirements:**
- Page load time: < 3 seconds
- Mobile-friendly: Responsive on all screen sizes
- Optimized images (WebP format, lazy loading)
- Fast Time to First Byte (TTFB)

**Acceptance Criteria:**
- Lighthouse performance score > 90
- Mobile-friendly test passes
- PageSpeed Insights score > 90

### 13. Accessibility
**Goal:** Accessible to all users

**Requirements:**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Proper ARIA labels
- Color contrast compliance

**Acceptance Criteria:**
- Accessibility audit passes
- Keyboard navigation works
- Screen reader tested

## Out of Scope (Post-MVP)

- Blog/content marketing section (Phase 2)
- Gallery section (Phase 2)
- Availability calendar (Phase 2)
- Custom booking system (Phase 2, only if Calendly limitations arise)
- Client portal (Phase 3)
- Automated email workflows (Phase 3)
- Multi-language support (Phase 3, if needed)
- Social media feed integration (Phase 3)
- Live chat functionality (Phase 3)

## Success Metrics

### Launch Success
- Website is live and accessible
- All core features functional
- Mobile-responsive
- Calendly booking iframe working correctly
- Payment processing via Stripe functional
- Contact form working
- Professional appearance
- SEO elements in place

### Business Success (3-6 months)
- 10+ inquiries per month
- 3-5 bookings per month
- Positive client feedback
- Low bounce rate (<50%)
- High time on site (2+ minutes)

### SEO Success (3-6 months)
- Ranking in top 10 for "pet sitter Gran Canaria"
- Ranking in top 10 for "house sitter Gran Canaria"
- 10+ Google reviews with 4.5+ star average
- 100+ organic visitors per month
- 30%+ of traffic from organic search
