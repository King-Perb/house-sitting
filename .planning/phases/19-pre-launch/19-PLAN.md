---
phase: 19-pre-launch
plan: 19
type: execute
wave: 1
depends_on:
  - 18-content-copywriting
files_modified:
  - .env.local
  - src/app/layout.tsx
  - src/components/calendly-embed.tsx
  - src/app/api/contact/route.ts
autonomous: false

user_setup:
  calendly:
    required: true
    plan: Professional ($10/month minimum)
    steps:
      - Sign up at https://calendly.com
      - Upgrade to Professional plan for payment collection
      - Create event type for house/pet sitting consultations
      - Configure custom intake questions (pet types, house details, dates, special requests)
      - Set availability and timezone (Canary Islands Time)
    provides:
      - NEXT_PUBLIC_CALENDLY_URL (your scheduling page URL)

  stripe:
    required: true
    steps:
      - Sign up at https://stripe.com
      - Complete business verification
      - Connect Stripe to Calendly (in Calendly Settings > Integrations > Stripe)
      - Configure payment amount and timing in Calendly event type
      - Enable live mode (test thoroughly first)
    provides:
      - Payment processing via Calendly (no direct API keys needed)

  google_business_profile:
    required: true
    steps:
      - Go to https://business.google.com
      - Create or claim your business listing
      - Set business category (Pet Sitting Service, House Sitting Service)
      - Add business name, address, phone, website
      - Set service areas (Las Palmas, Maspalomas, Playa del Ingles, etc.)
      - Add business hours
      - Upload professional photos
      - Write business description with keywords
      - Verify ownership (postcard, phone, or instant verification)
    provides:
      - Google Maps presence
      - Local search visibility
      - Review collection platform

  google_search_console:
    required: true
    steps:
      - Go to https://search.google.com/search-console
      - Add property using URL prefix method
      - Verify ownership via DNS, HTML file, or meta tag
      - Submit sitemap (https://yourdomain.com/sitemap.xml)
      - Monitor indexing status
    provides:
      - Search performance data
      - Indexing monitoring
      - Sitemap submission

  google_analytics:
    required: true
    steps:
      - Go to https://analytics.google.com
      - Create GA4 property
      - Configure data stream for website
      - Copy Measurement ID (G-XXXXXXXXXX)
    provides:
      - NEXT_PUBLIC_GA_MEASUREMENT_ID

  domain_hosting:
    required: true
    steps:
      - Purchase domain from registrar (Namecheap, Google Domains, etc.)
      - Configure DNS to point to hosting provider
      - Deploy to Vercel (recommended for Next.js)
      - Configure custom domain in Vercel dashboard
      - Enable HTTPS (automatic on Vercel)
    provides:
      - Production URL
      - SSL certificate

  resend:
    required: true
    steps:
      - Sign up at https://resend.com
      - Verify domain ownership (add DNS records)
      - Create API key
      - Configure sender email address
    provides:
      - RESEND_API_KEY
      - Verified sender domain

must_haves:
  truths:
    - Calendly booking widget loads and functions correctly
    - Stripe payments are connected and tested in Calendly
    - Google Business Profile is verified and live
    - Google Search Console shows site as indexed
    - Google Analytics tracking is active
    - Domain resolves correctly with HTTPS
    - Resend email delivery is working
  artifacts:
    - .env.local with all required environment variables
    - Verified Calendly Professional account with Stripe connected
    - Live Google Business Profile
    - Verified Google Search Console property
    - Configured GA4 property with tracking
    - Production domain with SSL
    - Configured Resend account with verified domain
  key_links:
    - Calendly -> Stripe (payment collection enabled)
    - Website -> Google Analytics (tracking script active)
    - Domain -> DNS -> Hosting (proper resolution)
    - Resend -> Contact Form (email delivery working)
---

<objective>
Complete all pre-launch account setup, third-party integrations, and infrastructure configuration.

Purpose: Ensure all external services are properly configured, connected, and tested before the website goes live. This phase focuses on the operational infrastructure that enables bookings, payments, analytics, and email communication.

Output: Fully configured external services with verified connections, production-ready environment variables, and tested integrations.
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

<task type="user">
  <name>Task 1: Set up Calendly Professional with Stripe Payment Integration</name>
  <files>
    .env.local
    src/components/calendly-embed.tsx
  </files>
  <action>
    This task requires user action to set up external accounts.

    **Calendly Setup:**
    1. Sign up or log in at https://calendly.com
    2. Upgrade to Professional plan ($10/month) - required for payment collection
    3. Create a new event type:
       - Name: "House & Pet Sitting Consultation" (or similar)
       - Duration: 30 minutes (or preferred length)
       - Location: Phone call or Video (Google Meet/Zoom)
    4. Configure custom intake questions:
       - Pet types and number of pets
       - House/property details
       - Service dates (start and end)
       - Special requests or requirements
       - Emergency contact information
    5. Set availability:
       - Configure working hours
       - Set timezone to Canary Islands Time (Atlantic/Canary)
       - Set minimum scheduling notice (e.g., 24-48 hours)
       - Set date range for availability

    **Stripe Connection:**
    1. Sign up at https://stripe.com if you don't have an account
    2. Complete Stripe business verification
    3. In Calendly: Settings > Integrations > Stripe > Connect
    4. Authorize Calendly to use your Stripe account
    5. In your event type settings:
       - Enable "Collect payment"
       - Set payment amount (deposit or full amount)
       - Configure payment timing (before or after booking)
    6. Test the booking flow end-to-end using Stripe test mode first

    **Environment Variables:**
    Add to .env.local:
    ```
    NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-type
    ```

    After setup, verify the Calendly embed component works with the new URL.
  </action>
  <verify>
    - Calendly Professional account is active
    - Event type is created with custom questions
    - Stripe is connected and payment collection is enabled
    - Test booking flow works (use Stripe test mode)
    - Email confirmations are sent automatically
    - Calendly embed on website loads correctly
  </verify>
  <done>
    Calendly Professional is set up with Stripe connected, event type configured with custom questions, and embed working on the website.
  </done>
</task>

<task type="user">
  <name>Task 2: Configure Google Services (Business Profile, Search Console, Analytics)</name>
  <files>
    .env.local
    src/app/layout.tsx
  </files>
  <action>
    This task requires user action to set up Google services.

    **Google Business Profile:**
    1. Go to https://business.google.com
    2. Click "Manage now" and sign in with Google account
    3. Search for your business or create new listing
    4. Enter business information:
       - Business name: [Your business name]
       - Category: "Pet Sitting Service" and "House Sitting Service"
       - Service area: Gran Canaria (specify municipalities: Las Palmas de Gran Canaria, Maspalomas, Playa del Ingles, San Bartolome de Tirajana, Telde, etc.)
       - Contact info: Phone, email, website URL
       - Business hours
    5. Write compelling business description (include keywords: house sitter, pet sitter, Gran Canaria)
    6. Upload professional photos (profile, services, happy pets)
    7. Complete verification (postcard, phone, or instant)
    8. Once verified, respond to any reviews and keep profile updated

    **Google Search Console:**
    1. Go to https://search.google.com/search-console
    2. Click "Add property"
    3. Choose "URL prefix" method
    4. Enter your website URL (https://yourdomain.com)
    5. Verify ownership using one of these methods:
       - HTML file upload (download and add to public folder)
       - HTML meta tag (add to layout.tsx head)
       - DNS TXT record
       - Google Analytics (if already set up)
    6. After verification:
       - Submit sitemap: https://yourdomain.com/sitemap.xml
       - Request indexing for main pages
       - Monitor Coverage report for errors

    **Google Analytics (GA4):**
    1. Go to https://analytics.google.com
    2. Click "Start measuring" or create new property
    3. Enter property name and configure settings
    4. Set up web data stream:
       - Enter website URL
       - Name the stream
    5. Copy the Measurement ID (format: G-XXXXXXXXXX)
    6. Add to .env.local:
       ```
       NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
       ```
    7. Implement tracking in layout.tsx (or use next/script):
       - Add Google Analytics script tag
       - Configure for page views and events
    8. Verify tracking is working in GA4 Realtime report

    **Implementation for GA4 in layout.tsx:**
    Add the Google Analytics script using next/script component with the strategy="afterInteractive" setting.
  </action>
  <verify>
    - Google Business Profile is verified and shows in Google Maps search
    - Search Console shows property as verified
    - Sitemap is submitted and pages are being indexed
    - GA4 is tracking visits (check Realtime report)
    - All environment variables are set correctly
  </verify>
  <done>
    All Google services are set up: Business Profile verified and live, Search Console configured with sitemap submitted, GA4 tracking active and verified.
  </done>
</task>

<task type="user">
  <name>Task 3: Configure Domain, Hosting, and Resend Email</name>
  <files>
    .env.local
    src/app/api/contact/route.ts
  </files>
  <action>
    This task requires user action for domain, hosting, and email setup.

    **Domain Registration:**
    1. Choose a domain registrar (Namecheap, Google Domains, Cloudflare, etc.)
    2. Purchase domain (e.g., yourbusinessname.com or .es for Spain)
    3. Consider also registering common variations to protect your brand

    **Vercel Deployment (Recommended for Next.js):**
    1. Sign up at https://vercel.com
    2. Connect your GitHub repository
    3. Import the project
    4. Configure build settings (Next.js auto-detected)
    5. Add environment variables in Vercel dashboard:
       - NEXT_PUBLIC_CALENDLY_URL
       - NEXT_PUBLIC_GA_MEASUREMENT_ID
       - RESEND_API_KEY
       - HCAPTCHA_SECRET_KEY
       - NEXT_PUBLIC_HCAPTCHA_SITE_KEY
       - Any other required variables
    6. Deploy (automatic on push to main branch)
    7. Configure custom domain:
       - Go to Project Settings > Domains
       - Add your custom domain
       - Configure DNS at your registrar:
         - A record: 76.76.21.21 (Vercel)
         - Or CNAME: cname.vercel-dns.com
       - SSL certificate auto-provisioned
    8. Verify domain is working with HTTPS

    **Resend Email Configuration:**
    1. Sign up at https://resend.com
    2. Add and verify your domain:
       - Go to Domains > Add Domain
       - Add DNS records (SPF, DKIM, DMARC) at your registrar
       - Wait for verification (usually minutes, up to 48 hours)
    3. Create API key:
       - Go to API Keys > Create API Key
       - Name it (e.g., "House Sitter Website")
       - Copy the key (shown only once)
    4. Add to .env.local and Vercel environment variables:
       ```
       RESEND_API_KEY=re_xxxxxxxxxxxx
       ```
    5. Configure sender email in contact form API route:
       - From: noreply@yourdomain.com (or similar)
       - Reply-To: your personal email
    6. Test email delivery:
       - Submit test contact form
       - Check email delivery
       - Verify no spam folder issues

    **Final Environment Variables Checklist:**
    Ensure all these are set in both .env.local (local dev) and Vercel (production):
    ```
    # Calendly
    NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-type

    # Google Analytics
    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

    # Resend
    RESEND_API_KEY=re_xxxxxxxxxxxx

    # hCaptcha (for spam protection)
    HCAPTCHA_SECRET_KEY=your_secret_key
    NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key
    ```
  </action>
  <verify>
    - Domain resolves to website with HTTPS
    - No SSL/certificate warnings
    - All environment variables are set in Vercel
    - Resend domain is verified
    - Contact form sends emails successfully
    - Emails are delivered (not in spam)
    - Production build works correctly
  </verify>
  <done>
    Domain is configured with HTTPS, site is deployed to Vercel, Resend is configured and sending emails, all environment variables are set for production.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. **Calendly Integration**
   - Visit website and click Book Now
   - Calendly widget loads correctly
   - Can select date/time
   - Custom questions appear
   - Payment step shows (Stripe connected)

2. **Google Services**
   - Google Business Profile appears in Google Maps search for "pet sitter Gran Canaria"
   - Search Console shows site as verified and indexing
   - GA4 Realtime shows your visit when browsing the site

3. **Domain & Hosting**
   - https://yourdomain.com loads correctly
   - No SSL warnings or errors
   - All pages load correctly
   - Mobile site works

4. **Email**
   - Submit contact form
   - Email received within minutes
   - Email not in spam folder
   - Reply works correctly

5. **End-to-End Test**
   - Complete a full booking flow (test mode)
   - Verify all confirmation emails
   - Check analytics records the visit
</verification>

<success_criteria>
- [ ] Calendly Professional account active and configured
- [ ] Stripe connected to Calendly with payment collection enabled
- [ ] Event type created with custom intake questions
- [ ] Google Business Profile verified and live
- [ ] Google Search Console property verified
- [ ] Sitemap submitted to Search Console
- [ ] Google Analytics (GA4) tracking active
- [ ] Domain purchased and configured
- [ ] Website deployed to Vercel (or chosen host)
- [ ] HTTPS working correctly
- [ ] Resend account configured with verified domain
- [ ] Contact form sending emails successfully
- [ ] All environment variables set in production
- [ ] End-to-end booking flow tested
</success_criteria>

<output>
After completion, create `.planning/phases/19-pre-launch/19-SUMMARY.md` documenting:
- All accounts created and their configuration
- Environment variables added (names only, not values)
- Any issues encountered during setup
- Verification results
- Remaining items before launch
</output>
