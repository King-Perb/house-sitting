---
phase: 20-launch
plan: 20
type: execute
wave: 1
depends_on:
  - 19-pre-launch-setup
files_modified:
  - Vercel deployment (production)
  - DNS configuration
  - Environment variables (production)
autonomous: false

must_haves:
  truths:
    - Website is live and accessible at production URL
    - All pages load without errors
    - Calendly booking flow completes successfully
    - Stripe payment processing works in live mode
    - Contact form submissions deliver emails
    - Mobile responsiveness verified on real devices
    - Cross-browser compatibility confirmed
    - Performance meets requirements (Lighthouse > 90)
  artifacts:
    - Live production website URL
    - Successful test booking confirmation
    - Successful test payment receipt
    - Contact form test email received
    - Lighthouse performance report
    - Cross-browser test checklist completed
    - Mobile device test checklist completed
  key_links:
    - Vercel deployment -> production domain (DNS properly configured)
    - Calendly embed -> Stripe live mode (payments functional)
    - Contact form -> Resend API (emails delivered)
    - Google Search Console -> sitemap (indexed)
---

<objective>
Launch the house & pet sitter website to production and verify all features work correctly in the live environment.

Purpose: Complete the final phase of the MVP by deploying to production and conducting comprehensive verification testing. This ensures the website is ready for real users and all integrations function correctly with live services.

Output: Fully functional, live website accessible to the public with all booking, payment, and contact features operational.
</objective>

<execution_context>
@.agents/skills/gsd/workflows/execute-plan.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/REQUIREMENTS.md
@.planning/phases/19-pre-launch-setup/19-SUMMARY.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Deploy to Production</name>
  <files>
    Vercel dashboard
    Environment variables (production)
    DNS settings
  </files>
  <action>
    Deploy the website to production environment.

    Steps:
    1. Ensure all environment variables are configured in Vercel production:
       - RESEND_API_KEY (live key)
       - HCAPTCHA_SECRET_KEY
       - NEXT_PUBLIC_HCAPTCHA_SITE_KEY
       - Any other required environment variables

    2. Trigger production deployment:
       - Push to main branch, OR
       - Manually deploy via Vercel dashboard

    3. Verify DNS configuration:
       - Custom domain points to Vercel
       - SSL certificate is active
       - www and non-www both work (redirect configured)

    4. Verify deployment succeeded:
       - Check Vercel deployment logs for errors
       - Confirm build completed successfully
       - Access production URL
  </action>
  <verify>
    - Production URL is accessible (no 404 or 500 errors)
    - SSL certificate shows as valid (green padlock)
    - All pages load without errors
    - No console errors in browser developer tools
    - Environment variables are properly loaded (features work)
  </verify>
  <done>
    Website is live at production URL with valid SSL, all pages accessible, no deployment errors.
  </done>
</task>

<task type="checkpoint">
  <name>Task 2: Production Feature Verification</name>
  <files>
    Production website
    Calendly dashboard
    Stripe dashboard
    Resend dashboard
    Email inbox
  </files>
  <action>
    Conduct comprehensive testing of all features in production environment.

    **Calendly Booking Test:**
    1. Navigate to booking section on live site
    2. Verify Calendly iframe loads correctly
    3. Select an available time slot
    4. Fill in custom intake questions
    5. Complete payment via Stripe (use live mode - small test amount)
    6. Verify confirmation email received
    7. Check Calendly dashboard for booking
    8. Check Stripe dashboard for payment
    9. Cancel test booking if needed (refund test payment)

    **Contact Form Test:**
    1. Navigate to contact section on live site
    2. Fill in all form fields
    3. Complete hCaptcha verification
    4. Submit form
    5. Verify success message displayed
    6. Check email inbox for notification
    7. Check Resend dashboard for delivery confirmation

    **Performance Test:**
    1. Run Lighthouse audit on production URL (Performance, Accessibility, Best Practices, SEO)
    2. Run PageSpeed Insights test
    3. Document scores

    **SEO Verification:**
    1. Verify meta tags render correctly (view page source)
    2. Check structured data with Google Rich Results Test
    3. Verify sitemap is accessible at /sitemap.xml
    4. Verify robots.txt is accessible at /robots.txt
    5. Confirm Google Search Console shows no errors
  </action>
  <verify>
    - Calendly booking completes successfully with payment
    - Booking confirmation email received
    - Payment appears in Stripe dashboard
    - Contact form submission triggers email notification
    - Lighthouse performance score > 90
    - Lighthouse accessibility score > 90
    - Structured data validates correctly
    - Sitemap and robots.txt accessible
  </verify>
  <done>
    All production features verified working: booking with payment, contact form, performance targets met, SEO elements functional.
  </done>
</task>

<task type="checkpoint">
  <name>Task 3: Cross-Platform Verification</name>
  <files>
    Production website
    Multiple browsers
    Mobile devices
  </files>
  <action>
    Verify website works correctly across different browsers and devices.

    **Mobile Verification (Real Devices):**
    1. Test on iOS device (iPhone Safari):
       - All pages load correctly
       - Navigation menu works (hamburger menu)
       - Calendly iframe is usable
       - Contact form is fillable
       - Buttons and links are tappable
       - Text is readable without zooming
    2. Test on Android device (Chrome):
       - Same checks as iOS
    3. Verify touch interactions work correctly
    4. Verify no horizontal scrolling issues

    **Cross-Browser Testing (Desktop):**
    1. Google Chrome - full functionality test
    2. Mozilla Firefox - full functionality test
    3. Safari (if available) - full functionality test
    4. Microsoft Edge - full functionality test

    For each browser verify:
    - All pages render correctly
    - Calendly embed loads and functions
    - Contact form works
    - No layout issues
    - No JavaScript errors in console

    **Final Visual Review:**
    1. Review all sections for professional appearance
    2. Check for any placeholder content remaining
    3. Verify all images load correctly
    4. Confirm consistent branding throughout
  </action>
  <verify>
    - Website functions correctly on iOS Safari
    - Website functions correctly on Android Chrome
    - Website functions correctly on desktop Chrome, Firefox, Safari, Edge
    - No layout breaks on any tested device/browser
    - All features work across platforms
    - Professional appearance confirmed
  </verify>
  <done>
    Cross-platform testing complete: mobile devices verified, all major browsers tested, no critical issues found.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Website is live and accessible at production URL
2. SSL certificate is valid
3. Calendly booking flow works with Stripe payment (live mode)
4. Contact form delivers email notifications
5. Performance: Lighthouse score > 90
6. Mobile: Works on iOS and Android devices
7. Browsers: Works on Chrome, Firefox, Safari, Edge
8. SEO: Structured data validates, sitemap accessible
9. No placeholder content remaining
10. Professional appearance throughout
</verification>

<success_criteria>
- [ ] Website deployed to production successfully
- [ ] Production URL accessible with valid SSL
- [ ] Calendly booking tested with live payment
- [ ] Payment processed successfully via Stripe
- [ ] Contact form tested and email received
- [ ] Lighthouse performance score > 90
- [ ] Mobile verification on iOS device
- [ ] Mobile verification on Android device
- [ ] Cross-browser test: Chrome
- [ ] Cross-browser test: Firefox
- [ ] Cross-browser test: Safari
- [ ] Cross-browser test: Edge
- [ ] Structured data validates
- [ ] Sitemap and robots.txt accessible
- [ ] No critical bugs or issues
- [ ] User has verified and approved live site
</success_criteria>

<output>
After completion, create `.planning/phases/20-launch/20-SUMMARY.md` documenting:
- Production URL
- Deployment details
- Test results (booking, payment, contact form)
- Performance scores (Lighthouse, PageSpeed)
- Cross-platform test results
- Any issues found and resolved
- Final launch status

Update `.planning/STATE.md`:
- Mark Phase 20 as complete
- Update project status to "LAUNCHED"
- Record launch date
</output>
