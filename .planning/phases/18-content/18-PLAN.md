---
phase: 18-content
plan: 18
type: execute
wave: 1
depends_on:
  - 03-hero-section
  - 04-about-section
  - 05-services-section
  - 06-pricing-section
  - 09-faq-section
files_modified:
  - src/app/page.tsx
  - src/components/hero.tsx
  - src/components/about.tsx
  - src/components/services.tsx
  - src/components/pricing.tsx
  - src/components/faq.tsx
  - src/app/layout.tsx
  - public/images/* (alt text updates)
autonomous: false

must_haves:
  truths:
    - All placeholder text replaced with final content
    - Hero headline and subheadline are compelling and mention Gran Canaria
    - Service descriptions are clear and complete
    - FAQ answers address common customer concerns
    - Meta descriptions include location keywords
    - All images have descriptive alt text
  artifacts:
    - Finalized hero content (headline, subheadline, CTA)
    - Complete about section content (personal story, credentials)
    - Service descriptions for all service categories
    - Pricing information display
    - FAQ questions and answers (minimum 8-10)
    - Meta descriptions for all pages
    - Alt text for all images
  key_links:
    - Hero content -> SEO keywords (Gran Canaria, pet sitter, house sitter)
    - Service descriptions -> Pricing section (consistent terminology)
    - FAQ content -> Common customer concerns (insurance, availability, etc.)
---

<objective>
Finalize all website content and copywriting for the house & pet sitter website.

Purpose: Replace all placeholder content with compelling, SEO-optimized copy that establishes trust, communicates value, and converts visitors into clients. Content should naturally incorporate Gran Canaria location references and maintain a warm, professional, trustworthy tone.

Output: Complete website content ready for launch with no placeholder text remaining, all meta descriptions written, and all images with proper alt text.
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

<task type="checkpoint">
  <name>Task 1: Gather personal content from user</name>
  <files>
    content-inputs.md (temporary working document)
  </files>
  <action>
    Before writing final content, collect essential information from the user:

    **Required Information:**
    1. Personal Information:
       - Full name (or preferred display name)
       - Years of experience in pet/house sitting
       - Background/credentials (certifications, training, relevant experience)
       - Personal story (why they started, what they love about it)
       - Professional photo availability

    2. Service Details:
       - Specific services offered (confirm list)
       - Service area within Gran Canaria (specific towns/areas)
       - Availability (full-time, part-time, seasonal)
       - Any services NOT offered (exclusions)

    3. Pricing Information:
       - Daily rates for house sitting
       - Daily rates for pet sitting
       - Combined house + pet sitting rates
       - Any additional fees (travel, holidays, special care)
       - Payment terms (deposit, when payment due)

    4. Trust Indicators:
       - Insurance provider/coverage details
       - Background check status
       - References availability
       - Any certifications or memberships

    5. FAQ Specifics:
       - Emergency contact procedures
       - Cancellation policy
       - Minimum booking duration
       - Advance notice required
       - What happens if pet gets sick

    **CHECKPOINT: Agent must pause and request this information from the user before proceeding.**
  </action>
  <verify>
    User has provided sufficient information to write authentic, accurate content.
    All pricing details confirmed.
    Personal story and credentials documented.
  </verify>
  <done>
    User has provided all required content inputs, documented in working notes.
  </done>
</task>

<task type="auto">
  <name>Task 2: Write and implement all page content</name>
  <files>
    src/components/hero.tsx
    src/components/about.tsx
    src/components/services.tsx
    src/components/pricing.tsx
    src/components/how-it-works.tsx
    src/components/faq.tsx
    src/app/layout.tsx
  </files>
  <action>
    Using the gathered content, write and implement final copy for all sections:

    **Hero Section:**
    - Compelling headline (max 10 words, include value proposition)
    - Subheadline (1-2 sentences, mention Gran Canaria, key benefit)
    - CTA button text
    - Trust badge text (3-4 badges)

    **About Section:**
    - Personal introduction (2-3 paragraphs)
    - Credentials list
    - Service area description
    - Personal touch that builds connection

    **Services Section:**
    - Pet Care services (detailed list with descriptions)
    - House Care services (detailed list with descriptions)
    - Additional Services (if applicable)
    - What's included vs. excluded

    **Pricing Section:**
    - Clear rate display
    - What's included in each rate
    - Additional fees disclosure
    - Payment terms

    **How It Works Section:**
    - Step 1: Book description
    - Step 2: Details description
    - Step 3: Confirm description
    - Timeline expectations

    **FAQ Section (minimum 8-10 questions):**
    - Insurance coverage
    - Emergency procedures
    - Availability and booking
    - Payment and cancellation
    - Pet care specifics
    - House care specifics
    - Gran Canaria-specific questions
    - References and trust

    **Content Guidelines:**
    - Tone: Warm, professional, trustworthy
    - Include Gran Canaria naturally (not forced)
    - Use active voice
    - Keep sentences concise
    - Address customer concerns directly
    - Include specific details (builds trust)
  </action>
  <verify>
    All placeholder text replaced.
    Content reads naturally and professionally.
    Gran Canaria mentioned in key areas (hero, about, services).
    FAQ covers common concerns.
    Pricing is clear and transparent.
  </verify>
  <done>
    All page sections contain final, polished content with no placeholders.
  </done>
</task>

<task type="auto">
  <name>Task 3: Write meta descriptions and alt text</name>
  <files>
    src/app/layout.tsx
    src/app/page.tsx
    src/components/*.tsx (image components)
  </files>
  <action>
    Write SEO-optimized meta content:

    **Meta Descriptions:**
    - Homepage: 150-160 characters, include "Gran Canaria", "pet sitter", "house sitter", call-to-action
    - Format: "[Value proposition] in Gran Canaria. [Key benefit]. [CTA]."

    **Title Tags:**
    - Homepage: "Professional Pet & House Sitter | Gran Canaria | [Name]"
    - Keep under 60 characters

    **Open Graph Tags:**
    - og:title (same as title tag)
    - og:description (same as meta description)
    - og:image (professional photo or hero image)
    - og:locale: "en_GB" (or appropriate)

    **Alt Text for Images:**
    - Hero image: Descriptive, include context
    - Profile photo: "[Name], professional pet and house sitter in Gran Canaria"
    - Service images: Describe the service being shown
    - Trust badges: Describe what the badge represents
    - Any decorative images: Use empty alt="" or aria-hidden

    **Alt Text Guidelines:**
    - Be specific and descriptive
    - Include location where relevant
    - Don't start with "Image of" or "Picture of"
    - Keep under 125 characters
    - Convey the purpose of the image
  </action>
  <verify>
    All meta descriptions are 150-160 characters.
    Title tags are under 60 characters.
    All images have appropriate alt text.
    Open Graph tags are complete.
    No duplicate meta content.
  </verify>
  <done>
    All meta descriptions written, all images have alt text, Open Graph tags configured.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Search entire codebase for placeholder text patterns (Lorem ipsum, TODO, TBD, [placeholder])
2. Verify all sections have final content
3. Check meta descriptions in page source
4. Verify all images have alt attributes
5. Read through all content for tone consistency
6. Verify Gran Canaria is mentioned naturally in key areas
7. Confirm pricing information is complete and clear
8. Verify FAQ covers minimum 8 questions
</verification>

<success_criteria>
- [ ] All placeholder text replaced with final content
- [ ] Hero headline and subheadline are compelling
- [ ] About section tells authentic personal story
- [ ] Services are clearly described with inclusions/exclusions
- [ ] Pricing is transparent and easy to understand
- [ ] FAQ has minimum 8-10 questions covering key concerns
- [ ] Meta descriptions written for all pages (150-160 chars)
- [ ] All images have descriptive alt text
- [ ] Gran Canaria mentioned naturally throughout
- [ ] Tone is consistent: warm, professional, trustworthy
- [ ] No remaining placeholder text in codebase
</success_criteria>

<output>
After completion, create `.planning/phases/18-content/18-SUMMARY.md` documenting:
- Content created/updated for each section
- User-provided information used
- SEO elements implemented
- Any content decisions made
- Files modified
</output>
