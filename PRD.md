# Product Requirements Document (PRD)
## Personal House & Pet Sitter Website

**Version:** 1.0  
**Date:** 2024  
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Product Overview
A personal website for an individual house and pet sitter service provider. The website serves as a sales funnel to attract and convert potential clients who need pet care and house sitting services while they're away.

### 1.2 Problem Statement
Pet owners and homeowners need a trustworthy, reliable individual to care for their pets and home while traveling. They want to see credentials, reviews, and clear service offerings before making contact.

### 1.3 Solution
A professional, conversion-focused website that:
- Establishes trust and credibility
- Clearly communicates services and pricing
- Provides an easy path to contact and book
- Showcases testimonials and credentials

---

## 2. Goals and Objectives

### 2.1 Primary Goals
- **Generate Leads**: Convert visitors into potential clients who contact for services
- **Build Trust**: Establish credibility through credentials, testimonials, and transparency
- **Clarify Services**: Clearly communicate what services are offered and pricing
- **Reduce Friction**: Make it easy for clients to understand the process and book

### 2.2 Success Metrics
- Contact form submissions per month
- Phone/email inquiries per month
- Time on site (target: 2+ minutes)
- Bounce rate (target: <50%)
- Conversion rate (target: 3-5% of visitors contact)

---

## 3. Target Audience

### 3.1 Primary Personas

**Persona 1: Pet Owner Planning Travel**
- Age: 30-60
- Needs: Reliable pet care while away (dogs, cats, or other pets)
- Concerns: Trust, reliability, pet safety, home security
- Decision factors: Reviews, credentials, availability, pricing

**Persona 2: Homeowner Needing House Care**
- Age: 35-65
- Needs: House maintenance, security, plant care while traveling
- Concerns: Home security, property maintenance, trustworthiness
- Decision factors: Insurance, background checks, experience

### 3.2 User Journey
1. **Discovery**: Find website via search, referral, or social media
2. **Evaluation**: Review services, credentials, testimonials
3. **Decision**: Compare with alternatives (kennels, other sitters)
4. **Action**: Contact via form, phone, or email
5. **Booking**: Schedule meet & greet, finalize booking

---

## 4. Features and Requirements

### 4.1 Core Features

#### 4.1.1 Hero Section
**Priority:** P0 (Must Have)

**Requirements:**
- Large, attention-grabbing headline addressing main value proposition
- Subheadline explaining key benefit (peace of mind, reliable care)
- Primary CTA button ("Book a Free Consultation" or "Get a Quote")
- Trust indicators/badges (e.g., "Fully Insured", "Background Checked", "X Years Experience")
- High-quality hero image (pets, home, or professional photo)

**Acceptance Criteria:**
- Hero section visible above the fold on all devices
- CTA button is prominent and clickable
- Trust badges are clearly visible
- Mobile-responsive layout

---

#### 4.1.2 About You Section
**Priority:** P0 (Must Have)

**Requirements:**
- Personal introduction and story
- Professional photo
- Credentials and qualifications
- Years of experience
- Why clients should trust you
- Service area/availability

**Acceptance Criteria:**
- Personal, authentic tone
- Professional yet approachable
- Builds emotional connection
- Establishes credibility

---

#### 4.1.3 Services Section
**Priority:** P0 (Must Have)

**Requirements:**
- Card-based layout showcasing services
- Clear service descriptions
- Services to include:
  - Pet Care (feeding, walking, medication administration)
  - House Care (mail collection, plant watering, security checks)
  - Additional Services (garden care, pool maintenance, etc.)
- What's included vs. what's not included
- Service area coverage

**Acceptance Criteria:**
- Each service clearly explained
- Visual icons or images for each service
- Mobile-responsive card layout
- Easy to scan and understand

---

#### 4.1.4 Pricing Section
**Priority:** P0 (Must Have)

**Requirements:**
- Transparent, simple pricing structure
- Clear rate display (daily, weekly, or per service)
- What's included in the price
- Payment terms and methods
- No hidden fees
- Optional: Pricing calculator or quote request

**Acceptance Criteria:**
- Pricing is clear and easy to understand
- No confusion about what's included
- Transparent about additional fees (if any)

---

#### 4.1.5 How It Works Section
**Priority:** P0 (Must Have)

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

---

#### 4.1.6 Testimonials/Reviews Section
**Priority:** P0 (Must Have)

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

---

#### 4.1.7 FAQ Section
**Priority:** P1 (Should Have)

**Requirements:**
- Common questions and answers:
  - Insurance coverage
  - Emergency procedures
  - What happens if pet gets sick
  - References available
  - Availability and booking timeline
  - Payment methods
  - Cancellation policy
- Accordion or expandable format
- Easy to find and navigate

**Acceptance Criteria:**
- Addresses common concerns
- Reduces need for initial inquiry calls
- Builds trust through transparency

---

#### 4.1.8 Contact/Booking Section
**Priority:** P0 (Must Have)

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
  - Optional: Social media links
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

---

#### 4.1.9 Trust Indicators
**Priority:** P0 (Must Have)

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

---

### 4.2 Secondary Features

#### 4.2.1 Blog/Resources Section (Optional)
**Priority:** P2 (Nice to Have)

**Requirements:**
- Pet care tips
- Travel preparation guides
- House sitting best practices
- SEO content to attract organic traffic

---

#### 4.2.2 Gallery Section (Optional)
**Priority:** P2 (Nice to Have)

**Requirements:**
- Photos of pets cared for (with permission)
- Before/after service photos
- Home care examples
- Builds visual trust and connection

---

#### 4.2.3 Availability Calendar (Optional)
**Priority:** P2 (Nice to Have)

**Requirements:**
- Show available dates
- Booking status
- Reduces back-and-forth communication

---

## 5. UI/UX Requirements

### 5.1 Design Principles
- **Clean & Modern**: Professional appearance without being corporate
- **Trustworthy**: Warm, approachable, yet professional
- **Mobile-First**: Responsive design for all devices
- **Fast Loading**: Optimized images and code
- **Clear Hierarchy**: Easy to scan and navigate
- **Accessible**: WCAG 2.1 AA compliance

### 5.2 Visual Design
- **Color Scheme**: Warm, trustworthy colors (blues, greens, or earth tones)
- **Typography**: Readable, professional fonts
- **Imagery**: High-quality photos of pets, homes, and the sitter
- **Icons**: Simple, clear icons for services
- **Whitespace**: Adequate spacing for readability

### 5.3 User Experience Flow

**Homepage Flow:**
1. Hero → Immediate value proposition and CTA
2. About → Build trust and connection
3. Services → Understand what's offered
4. Pricing → Know the cost
5. How It Works → Understand the process
6. Testimonials → Social proof
7. FAQ → Address concerns
8. Contact → Final CTA

**Mobile Considerations:**
- Sticky header with contact button
- Simplified navigation (hamburger menu)
- Large, touch-friendly buttons
- Optimized images for mobile
- Fast page load times

---

## 6. Technical Requirements

### 6.1 Platform & Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod validation
- **Form Submission**: Next.js Server Actions
- **Email Service**: Resend (or SendGrid for free tier)
- **Spam Protection**: hCaptcha (or reCAPTCHA v3)
- **Hosting**: Vercel (recommended) or Netlify
- **Booking System**: 
  - **Recommended (MVP)**: Calendly Professional with embedded iframe + native Stripe payments
  - **Payment Processing**: Stripe integration through Calendly (built-in)
  - **Calendly Plan**: Professional tier ($10/month) required for payment collection
  - **Alternative (Post-Launch)**: Custom booking system with calendar integration (only if needed)
  - **Other Options**: Cal.com (self-hosted) or Acuity Scheduling

### 6.2 Performance Requirements
- Page load time: < 3 seconds
- Mobile-friendly: Responsive on all screen sizes
- SEO optimized: Comprehensive local SEO and AI-ready optimization (see Section 6.6)
- Analytics: Google Analytics or similar

### 6.3 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 6.4 Security & Privacy
- HTTPS required
- GDPR compliance (if applicable)
- Privacy policy page
- Secure form submissions
- No collection of unnecessary personal data

### 6.5 Cost Structure (Monthly Operating Costs)
- **Calendly Professional**: $10/month (required for payment collection)
- **Stripe Processing Fees**: 2.9% + $0.30 per transaction (standard Stripe rates)
- **Email Service (Resend)**: $20/month (50k emails) or Free tier (3k emails/month)
- **Spam Protection (hCaptcha)**: Free (up to 1M requests/month)
- **Hosting (Vercel)**: Free tier available, or $20/month for Pro
- **Domain**: ~$10-15/year (one-time annual cost)

**Total MVP Monthly Cost**: ~$30-50/month (depending on email volume and hosting tier)
**Transaction Costs**: Additional 2.9% + $0.30 per booking payment

### 6.6 SEO & Local Discovery Strategy (Gran Canaria Focus)

#### 6.6.1 AI-Ready SEO Requirements

**Structured Data (Schema.org):**
- **LocalBusiness schema** with:
  - Business name, description, address (Gran Canaria)
  - Service area (Gran Canaria, specific areas/neighborhoods)
  - Service offerings (Pet Sitting, House Sitting)
  - Price range
  - Opening hours/availability
  - Aggregate rating (when reviews are available)
- **Service schema** for each service type
- **Person schema** for the sitter profile
- **Review schema** for testimonials
- **FAQPage schema** for FAQ section
- **BreadcrumbList schema** for navigation

**Semantic HTML:**
- Proper heading hierarchy (H1, H2, H3)
- Semantic elements (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`)
- Alt text for all images
- Descriptive link text (no "click here")
- ARIA labels where appropriate

**Technical SEO:**
- XML sitemap (auto-generated by Next.js)
- robots.txt file
- Canonical URLs
- Open Graph tags for social sharing
- Twitter Card meta tags
- Language tags (`lang="es"` or `lang="en"` depending on content)
- hreflang tags if multi-language

#### 6.6.2 Local SEO for Gran Canaria

**Primary Target Keywords:**
- "pet sitter Gran Canaria"
- "house sitter Gran Canaria"
- "pet sitting Las Palmas" (main city)
- "house sitting Gran Canaria"
- "pet care Gran Canaria"
- "dog sitter Gran Canaria"
- "cat sitter Gran Canaria"
- "house sitter Maspalomas" (popular area)
- "pet sitter Playa del Inglés" (popular area)
- "house sitting Canary Islands"

**Location-Specific Content:**
- Service area page listing all areas served:
  - Las Palmas de Gran Canaria
  - Maspalomas
  - Playa del Inglés
  - Puerto Rico
  - Puerto de Mogán
  - Other specific neighborhoods
- Local references in content naturally
- "Serving Gran Canaria" messaging throughout site

**Google Business Profile (Essential):**
- Create and optimize Google Business Profile
- Business category: "Pet Sitter" / "House Sitter"
- Service area: Gran Canaria (and specific areas)
- Add photos (professional, pets, services)
- Collect and respond to reviews
- Regular posts/updates
- Q&A section management
- Business hours/availability

**Local Business Listings:**
- Google Business Profile (priority #1)
- Bing Places for Business
- Yelp (if available in Spain)
- Local Gran Canaria directories
- Expat/English-speaking community directories
- Pet-related directories
- Travel/tourism directories

**Content Strategy:**
- Blog posts targeting local searches:
  - "Pet Sitting Services in Gran Canaria: Complete Guide"
  - "House Sitting in Las Palmas: What You Need to Know"
  - "Finding a Trusted Pet Sitter in Maspalomas"
  - "Holiday Pet Care Options in Gran Canaria"
- FAQ section with location-specific questions
- Service pages with local context

#### 6.6.3 On-Page SEO Elements

**Title Tags (Optimized):**
- Homepage: "Professional Pet & House Sitter in Gran Canaria | [Your Name]"
- Services: "Pet Sitting Services in Gran Canaria | [Service Type]"
- About: "Trusted House & Pet Sitter in Gran Canaria | About [Your Name]"

**Meta Descriptions:**
- Include location (Gran Canaria)
- Include primary service keywords
- Include call-to-action
- 150-160 characters
- Unique for each page

**Header Tags:**
- H1: Include location and primary keyword
- H2-H6: Proper hierarchy with relevant keywords
- Natural keyword usage (avoid stuffing)

**URL Structure:**
- Clean, descriptive URLs:
  - `/services/pet-sitting-gran-canaria`
  - `/services/house-sitting-gran-canaria`
  - `/areas/las-palmas`
  - `/areas/maspalomas`

**Image Optimization:**
- Descriptive filenames: `pet-sitter-gran-canaria.jpg`
- Alt text with location and keywords
- Compressed images (WebP format)
- Lazy loading

#### 6.6.4 Content for AI Search & Discovery

**AI-Ready Content Structure:**
- Clear, direct answers to common questions
- Structured information (lists, tables, FAQs)
- Natural language that answers "what", "where", "how", "when"
- Entity-focused content (mention specific places, services clearly)

**Voice Search Optimization:**
- Target conversational queries:
  - "Where can I find a pet sitter in Gran Canaria?"
  - "Who provides house sitting services in Las Palmas?"
  - "How much does pet sitting cost in Gran Canaria?"
- Use question-answer format in content
- FAQ section with natural language questions

**Featured Snippet Optimization:**
- Target "People Also Ask" questions
- Use lists, tables, and step-by-step guides
- Answer questions directly in first paragraph
- Use schema markup to help AI understand content

#### 6.6.5 Link Building Strategy

**Local Link Building:**
- Gran Canaria expat community websites
- Pet-related forums and communities
- Travel blogs mentioning Gran Canaria
- Local business directories
- Partner with local pet businesses (vets, pet stores)
- Guest posts on local blogs

**Citation Building:**
- Consistent NAP (Name, Address, Phone) across all listings
- Local business directories
- Industry-specific directories

#### 6.6.6 Multi-Language Considerations

**Language Strategy:**
- Primary: English (targeting expats and tourists)
- Secondary: Spanish (targeting local residents)
- Consider: German (large tourist/expat population)
- Use hreflang tags for language targeting
- Option: Separate pages or language switcher

**Content Localization:**
- Spanish keywords: "cuidado de mascotas Gran Canaria"
- Spanish meta descriptions
- Spanish service descriptions (if targeting locals)

#### 6.6.7 SEO Tools & Monitoring

**Required Tools:**
- Google Search Console (essential)
- Google Analytics 4
- Google Business Profile Insights
- Schema markup validator
- PageSpeed Insights
- Mobile-Friendly Test

**Key Metrics to Track:**
- Organic search traffic
- Keyword rankings (local keywords)
- Google Business Profile views and actions
- Local search impressions
- Click-through rate (CTR)
- Bounce rate
- Conversion rate from organic traffic
- "Gran Canaria" keyword performance

#### 6.6.8 Implementation Checklist

**Pre-Launch:**
- [ ] Research and finalize target keywords
- [ ] Set up Google Business Profile
- [ ] Create location-specific content
- [ ] Implement structured data (Schema.org)
- [ ] Optimize all meta tags
- [ ] Create XML sitemap
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics
- [ ] Optimize images with alt text
- [ ] Create location/service area pages

**Post-Launch:**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] List on local business directories
- [ ] Start collecting Google reviews
- [ ] Create and publish location-focused blog content
- [ ] Monitor keyword rankings
- [ ] Track local search performance
- [ ] Update Google Business Profile regularly
- [ ] Build local citations
- [ ] Engage with local communities online

---

## 7. Content Requirements

### 7.1 Copywriting Guidelines
- **Tone**: Warm, professional, trustworthy, personal
- **Voice**: First person ("I", "me") to emphasize personal service
- **Clarity**: Simple, clear language (avoid jargon)
- **Benefits-focused**: Emphasize client benefits, not just features
- **Action-oriented**: Clear CTAs throughout

### 7.2 Required Content
- Hero headline and subheadline
- About section (personal story)
- Service descriptions (3-5 services)
- Pricing information
- Process explanation
- 3-5 testimonials
- 5-10 FAQ items
- Contact form labels and messaging
- Footer content (copyright, links)

---

## 8. Launch Requirements

### 8.1 Pre-Launch Checklist
- [ ] All content written and reviewed
- [ ] Professional photos obtained
- [ ] Testimonials collected and formatted
- [ ] Calendly Professional account set up ($10/month)
- [ ] Stripe account created and connected to Calendly
- [ ] Calendly event type configured with payment enabled
- [ ] Custom intake questions added to Calendly (pet info, dates, services)
- [ ] Calendly iframe embedded and tested on site
- [ ] Payment flow tested end-to-end (test mode)
- [ ] Contact form tested and working (for general inquiries)
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing completed
- [ ] SEO optimization (meta tags, descriptions, structured data)
- [ ] Google Business Profile created and optimized for Gran Canaria
- [ ] Location-specific content created (service areas, local keywords)
- [ ] Schema markup implemented (LocalBusiness, Service, Review schemas)
- [ ] XML sitemap generated and submitted
- [ ] Google Search Console and Analytics configured
- [ ] Location/service area pages created (Las Palmas, Maspalomas, etc.)
- [ ] Target keywords researched and integrated into content
- [ ] Privacy policy and terms (if needed)
- [ ] Domain and hosting configured
- [ ] Email service (Resend) configured

### 8.2 Post-Launch
- [ ] Monitor analytics for user behavior
- [ ] Track form submissions and inquiries
- [ ] Gather feedback from early visitors
- [ ] Iterate based on performance data
- [ ] Update content regularly (testimonials, availability)
- [ ] **SEO Post-Launch (see Section 6.6.8 for full checklist):**
  - [ ] Submit sitemap to Google Search Console
  - [ ] Submit to Bing Webmaster Tools
  - [ ] List on local Gran Canaria business directories
  - [ ] Start collecting Google reviews
  - [ ] Create and publish location-focused blog content
  - [ ] Monitor keyword rankings (Gran Canaria keywords)
  - [ ] Track local search performance
  - [ ] Update Google Business Profile regularly
  - [ ] Build local citations
  - [ ] Engage with Gran Canaria expat/tourist communities online

---

## 9. Future Enhancements (Out of Scope for MVP)

### 9.1 Phase 2: Booking System (3-6 months post-launch)
- **Custom booking calendar** with availability management
- **Automated booking confirmations** via email
- **Calendar integration** (Google Calendar, iCal sync)
- **Booking management dashboard** for sitter
- **Client booking history** and preferences
- **Automated reminders** (24 hours before service)

### 9.2 Phase 3: Advanced Features
- **Payment processing** - ✅ Already included in MVP via Calendly native Stripe integration
- **Client portal** for existing clients
- **Automated email responses** and workflows
- **Blog/content marketing** section for SEO
- **Social media feed** integration
- **Live chat** functionality
- **Multi-language support** (if expanding service area)

### 9.3 Booking System Options (Post-MVP - Only if Calendly doesn't meet needs)
- **Option A**: Custom Next.js booking system
  - Full control and customization
  - No monthly fees
  - Perfect brand integration
  - **When needed:** Complex booking logic, advanced analytics, full design control
- **Option B**: Cal.com (self-hosted)
  - Open source, embeddable
  - Good balance of features and control
  - More customization than Calendly
- **Option C**: Acuity Scheduling
  - Professional service provider features
  - Payment processing included
  - Monthly subscription required
  - **When needed:** Advanced service provider features immediately

**Note:** Calendly iframe handles 90% of use cases. Only consider alternatives if specific limitations arise.

---

## 10. References & Inspiration

### 10.1 Example Sites Analyzed
1. **Hayley at Home** (https://hayleyathome.com/)
   - Excellent trust badges and service cards
   - Strong testimonials section
   - Professional design

2. **Home Sweet Home Sitting** (https://www.homesweethomesitting.co.uk/)
   - Personal, authentic approach
   - Transparent pricing
   - Clear terms and expectations

### 10.2 Design Patterns to Adopt
- Trust badges in hero section
- Card-based service layout
- Step-by-step process visualization
- Testimonial carousel or grid
- Simple, clear contact form
- Mobile-first responsive design

---

## 11. Success Criteria

### 11.1 Launch Success
- Website is live and accessible
- All core features functional
- Mobile-responsive
- Calendly booking iframe working correctly
- Payment processing via Stripe functional (tested in test mode)
- Contact form working (for general inquiries)
- Professional appearance

### 11.2 Business Success (3-6 months)
- 10+ inquiries per month
- 3-5 bookings per month
- Positive client feedback
- Low bounce rate (<50%)
- High time on site (2+ minutes)

### 11.3 SEO Success Metrics (3-6 months)
- **Local Search Visibility:**
  - Ranking in top 10 for "pet sitter Gran Canaria"
  - Ranking in top 10 for "house sitter Gran Canaria"
  - Ranking for 5+ location-specific keywords (Las Palmas, Maspalomas, etc.)
- **Google Business Profile:**
  - 10+ reviews with 4.5+ star average
  - 50+ monthly profile views
  - 10+ monthly actions (calls, website clicks, directions)
- **Organic Traffic:**
  - 100+ organic visitors per month
  - 30%+ of traffic from organic search
  - 20%+ of bookings from organic search
- **AI Search Readiness:**
  - Featured snippet for at least 1 query
  - Appearing in "People Also Ask" boxes
  - Rich snippets displaying correctly (reviews, business info)

---

## 12. Open Questions

- [ ] What is the service area/geographic coverage? **→ Gran Canaria (specific areas/neighborhoods?)**
- [ ] What are the exact pricing rates?
- [ ] What credentials/certifications are available?
- [ ] What insurance coverage exists?
- [ ] What is the preferred contact method (form, phone, email)?
- [ ] Are there specific pet types or services to highlight?
- [ ] What is the minimum booking duration?
- [ ] What is the advance booking notice required?
- [ ] **What specific areas/neighborhoods in Gran Canaria will you serve?** (Las Palmas, Maspalomas, Playa del Inglés, etc.)
- [ ] **What languages should the site support?** (English primary, Spanish secondary, German?)
- [ ] **Do you have a physical address for Google Business Profile?** (or service area only?)
- [ ] **What local communities/directories should we target?** (expat groups, pet communities, etc.)

---

## Appendix A: User Stories

**As a pet owner**, I want to:
- See clear pricing so I can budget for my trip
- Read testimonials from other pet owners so I feel confident
- Understand what services are included so I know what to expect
- Easily contact the sitter so I can ask questions and book

**As a homeowner**, I want to:
- See credentials and insurance so I trust the sitter
- Understand the booking process so I know how to proceed
- See availability so I know if the sitter can help me
- Contact the sitter easily so I can schedule a meet & greet

---

**Document Owner:** [Your Name]  
**Last Updated:** [Date]  
**Next Review:** [Date]
