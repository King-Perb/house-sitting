---
phase: 17-accessibility
plan: 17
type: execute
wave: 4
depends_on:
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
  - 16-performance
files_modified:
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/components/**/*.tsx
  - src/components/ui/**/*.tsx
  - src/app/globals.css
autonomous: false

must_haves:
  truths:
    - Website passes WCAG 2.1 AA accessibility audit
    - All interactive elements are keyboard accessible
    - Screen reader announces all content correctly
    - Color contrast meets WCAG AA standards (4.5:1 for text, 3:1 for UI)
    - Focus indicators are visible on all focusable elements
    - All images have descriptive alt text
    - All form inputs have associated labels
    - ARIA labels and roles used appropriately
    - Website works correctly in Chrome, Firefox, Safari, Edge
    - Website works correctly on iOS and Android devices
  artifacts:
    - Accessibility audit report (Lighthouse, axe DevTools, WAVE)
    - ARIA attributes added to components
    - Keyboard navigation tested and documented
    - Screen reader testing completed
    - Cross-browser testing checklist completed
    - Mobile device testing checklist completed
    - Color contrast verification report
  key_links:
    - Components -> ARIA attributes (semantic HTML and ARIA roles)
    - Forms -> Labels (all inputs have associated labels)
    - Images -> Alt text (descriptive alt text for all images)
    - Interactive elements -> Keyboard navigation (tab order and focus management)
    - Color -> Contrast ratios (meets WCAG AA standards)
---

<objective>
Ensure the house & pet sitter website is fully accessible and compatible across all browsers and devices, meeting WCAG 2.1 AA standards.

Purpose: Make the website usable by everyone, including people with disabilities, and ensure it works consistently across different browsers and mobile devices. Accessibility is not only a legal and ethical requirement but also improves SEO and user experience for all visitors.

Output: Fully accessible website that passes WCAG 2.1 AA compliance, works with keyboard navigation, is screen reader compatible, has proper color contrast, and functions correctly across all major browsers and mobile devices.
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
  <name>Task 1: Semantic HTML and ARIA Implementation</name>
  <files>
    src/app/layout.tsx
    src/app/page.tsx
    src/components/**/*.tsx
    src/components/ui/**/*.tsx
  </files>
  <action>
    Implement semantic HTML and ARIA attributes throughout the website:

    1. Review and update semantic HTML structure:
       - Ensure proper use of header, nav, main, section, article, aside, footer
       - Use proper heading hierarchy (h1 → h2 → h3, no skipping levels)
       - Use landmark regions (header, nav, main, footer)
       - Ensure each page has exactly one h1 element

    2. Add ARIA labels and roles where needed:
       - Add aria-label to icon-only buttons
       - Add aria-labelledby for form sections
       - Add aria-describedby for form help text
       - Add role="navigation" to nav elements (redundant but explicit)
       - Add role="banner" to header (redundant but explicit)
       - Add role="contentinfo" to footer (redundant but explicit)
       - Add aria-expanded to collapsible elements (FAQ accordion, mobile menu)
       - Add aria-controls linking controls to their targets
       - Add aria-live regions for dynamic content updates

    3. Form accessibility:
       - Ensure all form inputs have associated <label> elements
       - Use htmlFor/id linking for labels
       - Add aria-required="true" for required fields
       - Add aria-invalid="true" for invalid fields with error messages
       - Link error messages using aria-describedby
       - Add aria-label to custom checkboxes/radios if needed

    4. Navigation accessibility:
       - Add aria-current="page" to current page link in navigation
       - Ensure skip links are present (skip to main content)
       - Add aria-label to navigation landmarks

    5. Interactive elements:
       - Ensure all buttons have accessible names (text or aria-label)
       - Ensure links have descriptive text (not just "click here")
       - Add aria-label to icon buttons
       - Ensure focusable elements are keyboard accessible
  </action>
  <verify>
    Run accessibility audit tools:
    - Lighthouse accessibility audit (should score > 90)
    - axe DevTools browser extension (no critical issues)
    - WAVE browser extension (no errors, minimal warnings)
    - Check that all interactive elements have accessible names
    - Verify semantic HTML structure with browser DevTools
  </verify>
  <done>
    All components use semantic HTML, ARIA attributes added where needed, forms have proper labels, navigation is accessible, Lighthouse accessibility score > 90.
  </done>
</task>

<task type="auto">
  <name>Task 2: Keyboard Navigation and Focus Management</name>
  <files>
    src/components/**/*.tsx
    src/components/ui/**/*.tsx
    src/app/globals.css
  </files>
  <action>
    Implement comprehensive keyboard navigation and focus management:

    1. Ensure logical tab order:
       - Review tab order on all pages (should flow top to bottom, left to right)
       - Fix any tab order issues (use tabIndex manipulation if needed)
       - Ensure skip links work correctly
       - Test tab navigation through entire page

    2. Visible focus indicators:
       - Add clear focus styles to all interactive elements
       - Ensure focus outline is visible (not removed with outline: none)
       - Use focus-visible for mouse/keyboard distinction if desired
       - Add custom focus styles that meet contrast requirements
       - Test focus visibility on all buttons, links, form inputs

    3. Keyboard shortcuts and interactions:
       - Ensure mobile menu can be opened/closed with keyboard (Enter/Space)
       - Ensure FAQ accordion can be toggled with keyboard
       - Ensure modal dialogs (if any) trap focus
       - Ensure modals can be closed with Escape key
       - Ensure dropdown menus work with arrow keys

    4. Focus management:
       - Manage focus when opening/closing modals
       - Return focus to trigger element when closing modals
       - Manage focus for dynamic content updates
       - Ensure focus is not lost during page transitions

    5. Skip links:
       - Add "Skip to main content" link at top of page
       - Ensure skip link is visible on focus
       - Test skip link functionality
  </action>
  <verify>
    Manual keyboard testing:
    - Tab through entire website without mouse
    - Verify all interactive elements are reachable
    - Verify focus indicators are visible
    - Test Enter/Space on buttons and links
    - Test Escape key on modals/dropdowns
    - Test arrow keys on navigation menus
    - Verify skip links work
    - Use only keyboard to complete contact form
    - Use only keyboard to navigate Calendly iframe (if possible)
  </verify>
  <done>
    All interactive elements keyboard accessible, focus indicators visible, logical tab order, skip links functional, keyboard shortcuts work correctly.
  </done>
</task>

<task type="auto">
  <name>Task 3: Color Contrast and Visual Accessibility</name>
  <files>
    src/app/globals.css
    src/components/**/*.tsx
    tailwind.config.ts
  </files>
  <action>
    Ensure color contrast meets WCAG AA standards and visual accessibility:

    1. Color contrast verification:
       - Check all text against background colors
       - Ensure normal text (16px+) has 4.5:1 contrast ratio
       - Ensure large text (18pt+ or 14pt+ bold) has 3:1 contrast ratio
       - Ensure UI components and graphics have 3:1 contrast ratio
       - Use online tools (WebAIM Contrast Checker, Colour Contrast Analyser)
       - Fix any contrast issues by adjusting colors

    2. Color independence:
       - Ensure information is not conveyed by color alone
       - Add icons, text, or patterns in addition to color
       - Example: Form errors should have text + icon, not just red color
       - Example: Links should have underline or other indicator, not just color

    3. Visual focus indicators:
       - Ensure focus indicators have sufficient contrast
       - Focus outline should be at least 2px and clearly visible
       - Test focus indicators on all background colors

    4. Text readability:
       - Ensure text is readable (appropriate font size, line height)
       - Ensure text can be resized up to 200% without loss of functionality
       - Test with browser zoom at 200%
       - Verify layout doesn't break with larger text

    5. Visual hierarchy:
       - Use proper heading hierarchy (not just font size)
       - Ensure visual hierarchy matches semantic hierarchy
  </action>
  <verify>
    Use accessibility tools:
    - WebAIM Contrast Checker for all text/background combinations
    - Colour Contrast Analyser (CCA) for comprehensive checking
    - Lighthouse accessibility audit (color contrast checks)
    - Browser zoom test (200% zoom, verify functionality)
    - Test with high contrast mode (Windows/Mac)
    - Verify information not conveyed by color alone
  </verify>
  <done>
    All text meets WCAG AA contrast ratios, information not conveyed by color alone, focus indicators visible, text resizable to 200% without breaking layout.
  </done>
</task>

<task type="checkpoint">
  <name>Task 4: Screen Reader Testing</name>
  <files>
    src/components/**/*.tsx
    src/app/page.tsx
  </files>
  <action>
    Test website with screen readers to ensure content is properly announced:

    1. Test with NVDA (Windows, free):
       - Download and install NVDA screen reader
       - Navigate through entire website using screen reader
       - Verify all content is announced correctly
       - Verify headings are announced
       - Verify links are announced with context
       - Verify form labels are announced
       - Verify buttons are announced with accessible names
       - Verify images are announced with alt text
       - Verify dynamic content updates are announced

    2. Test with VoiceOver (macOS/iOS, built-in):
       - Enable VoiceOver (Cmd+F5 on Mac, Settings on iOS)
       - Navigate through website using VoiceOver gestures
       - Verify all content is accessible
       - Test on both desktop and mobile

    3. Test with JAWS (if available):
       - Similar testing as NVDA
       - Verify compatibility with most common screen reader

    4. Screen reader specific fixes:
       - Ensure decorative images have empty alt="" (not missing alt)
       - Ensure informative images have descriptive alt text
       - Ensure icons used as buttons have aria-label
       - Ensure ARIA live regions work correctly
       - Ensure form errors are announced
       - Ensure success messages are announced

    5. Document screen reader experience:
       - Note any issues found
       - Fix any problems identified
       - Verify fixes work with screen reader
  </action>
  <verify>
    Screen reader testing:
    - Navigate entire website with NVDA
    - Navigate entire website with VoiceOver
    - Verify all content is announced correctly
    - Verify form interactions work with screen reader
    - Verify navigation works with screen reader
    - Verify dynamic content is announced
    - No content is skipped or inaccessible
  </verify>
  <done>
    Website fully tested with NVDA and VoiceOver, all content properly announced, forms work with screen reader, navigation accessible, no accessibility barriers found.
  </done>
</task>

<task type="checkpoint">
  <name>Task 5: Cross-Browser Testing</name>
  <files>
    Production website (or local build)
  </files>
  <action>
    Test website functionality across all major browsers:

    1. Google Chrome (latest):
       - Test all pages load correctly
       - Test all interactive features (forms, buttons, navigation)
       - Test Calendly integration
       - Test contact form submission
       - Verify styling is consistent
       - Check for console errors
       - Test responsive design

    2. Mozilla Firefox (latest):
       - Same tests as Chrome
       - Verify CSS Grid and Flexbox work correctly
       - Verify JavaScript functionality
       - Check for Firefox-specific issues

    3. Safari (latest, macOS/iOS):
       - Test on macOS Safari
       - Test on iOS Safari (iPhone and iPad)
       - Verify WebKit-specific features work
       - Test touch interactions on iOS
       - Verify Calendly iframe works on iOS
       - Check for Safari-specific CSS issues

    4. Microsoft Edge (latest):
       - Same tests as Chrome (Chromium-based)
       - Verify no Edge-specific issues

    5. Browser compatibility fixes:
       - Add vendor prefixes if needed (though modern CSS should work)
       - Fix any browser-specific JavaScript issues
       - Ensure CSS Grid and Flexbox work in all browsers
       - Test CSS custom properties (should work in all modern browsers)

    6. Document browser compatibility:
       - Create checklist of tested browsers
       - Note any known issues or limitations
       - Verify all critical features work in all browsers
  </action>
  <verify>
    Cross-browser testing checklist:
    - [ ] Chrome: All features work, no console errors
    - [ ] Firefox: All features work, styling consistent
    - [ ] Safari (macOS): All features work
    - [ ] Safari (iOS): All features work, touch interactions work
    - [ ] Edge: All features work
    - [ ] No critical bugs in any browser
    - [ ] Styling is consistent across browsers
    - [ ] JavaScript functionality works in all browsers
  </verify>
  <done>
    Website tested and working correctly in Chrome, Firefox, Safari (macOS/iOS), and Edge. No critical browser compatibility issues found.
  </done>
</task>

<task type="checkpoint">
  <name>Task 6: Mobile Device Testing</name>
  <files>
    Production website (or local build accessible on mobile network)
  </files>
  <action>
    Test website on real mobile devices to ensure functionality and usability:

    1. iOS Device Testing (iPhone):
       - Test on actual iPhone device (not just simulator)
       - Test Safari browser
       - Test Chrome browser on iOS (if users might use it)
       - Verify touch interactions work correctly
       - Test tap targets are large enough (minimum 44x44px)
       - Test scrolling and navigation
       - Test form input (keyboard appears correctly)
       - Test Calendly iframe on mobile
       - Test contact form on mobile
       - Verify mobile menu works correctly
       - Test pinch-to-zoom (should work, layout shouldn't break)
       - Verify text is readable without zooming

    2. Android Device Testing:
       - Test on actual Android device
       - Test Chrome browser
       - Test Samsung Internet (if common in target market)
       - Same tests as iOS
       - Verify Android-specific behaviors

    3. Mobile-specific accessibility:
       - Verify touch targets are at least 44x44px
       - Verify spacing between touch targets is adequate
       - Test with mobile screen reader (TalkBack on Android, VoiceOver on iOS)
       - Verify mobile keyboard doesn't cover form inputs
       - Test landscape and portrait orientations

    4. Mobile performance:
       - Test on slower mobile networks (3G throttling)
       - Verify page loads in acceptable time
       - Verify images load correctly
       - Test with limited data connection

    5. Mobile usability:
       - Verify navigation is intuitive on mobile
       - Verify content is readable without horizontal scrolling
       - Verify buttons and links are easy to tap
       - Verify forms are easy to fill out on mobile
       - Verify Calendly booking works on mobile

    6. Document mobile testing:
       - Create checklist of tested devices
       - Note any mobile-specific issues
       - Verify all critical features work on mobile
  </action>
  <verify>
    Mobile device testing checklist:
    - [ ] iPhone (Safari): All features work, touch interactions work
    - [ ] iPhone (Chrome): All features work
    - [ ] Android (Chrome): All features work
    - [ ] Touch targets are adequate size (44x44px minimum)
    - [ ] Mobile menu works correctly
    - [ ] Forms are usable on mobile
    - [ ] Calendly integration works on mobile
    - [ ] No horizontal scrolling issues
    - [ ] Text is readable without zooming
    - [ ] Mobile screen reader works (VoiceOver/TalkBack)
    - [ ] Performance acceptable on mobile networks
  </verify>
  <done>
    Website tested on real iOS and Android devices, all features work correctly, touch interactions work, mobile accessibility verified, no critical mobile issues found.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Run comprehensive accessibility audit:
   - Lighthouse accessibility score > 90
   - axe DevTools: No critical or serious issues
   - WAVE: No errors, minimal warnings
   - WCAG 2.1 AA compliance verified

2. Keyboard navigation testing:
   - Entire website navigable with keyboard only
   - All interactive elements reachable
   - Focus indicators visible
   - Skip links functional

3. Screen reader testing:
   - NVDA: All content announced correctly
   - VoiceOver: All content accessible
   - Forms work with screen reader
   - Navigation works with screen reader

4. Color contrast verification:
   - All text meets WCAG AA contrast ratios
   - Information not conveyed by color alone
   - Focus indicators have sufficient contrast

5. Cross-browser testing:
   - Chrome: All features work
   - Firefox: All features work
   - Safari (macOS/iOS): All features work
   - Edge: All features work

6. Mobile device testing:
   - iOS: All features work, touch interactions work
   - Android: All features work
   - Mobile accessibility verified
   - Performance acceptable on mobile

7. Final accessibility checklist:
   - Semantic HTML structure correct
   - ARIA attributes used appropriately
   - All images have alt text
   - All forms have labels
   - Keyboard navigation works
   - Screen reader compatible
   - Color contrast meets standards
   - Works across all browsers
   - Works on mobile devices
</verification>

<success_criteria>
- [ ] Lighthouse accessibility score > 90
- [ ] WCAG 2.1 AA compliance verified
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all focusable elements
- [ ] Screen reader tested with NVDA (all content accessible)
- [ ] Screen reader tested with VoiceOver (all content accessible)
- [ ] All text meets WCAG AA color contrast ratios (4.5:1 normal, 3:1 large)
- [ ] Information not conveyed by color alone
- [ ] All images have descriptive alt text (or empty alt for decorative)
- [ ] All form inputs have associated labels
- [ ] ARIA attributes used appropriately
- [ ] Cross-browser testing: Chrome ✓
- [ ] Cross-browser testing: Firefox ✓
- [ ] Cross-browser testing: Safari (macOS) ✓
- [ ] Cross-browser testing: Safari (iOS) ✓
- [ ] Cross-browser testing: Edge ✓
- [ ] Mobile testing: iOS device ✓
- [ ] Mobile testing: Android device ✓
- [ ] Touch targets are adequate size (44x44px minimum)
- [ ] Mobile screen reader tested (VoiceOver/TalkBack)
- [ ] No critical accessibility barriers
- [ ] No critical browser compatibility issues
- [ ] No critical mobile usability issues
</success_criteria>

<output>
After completion, create `.planning/phases/17-accessibility/17-SUMMARY.md` documenting:
- Accessibility audit results (Lighthouse, axe, WAVE scores)
- Keyboard navigation testing results
- Screen reader testing results (NVDA, VoiceOver)
- Color contrast verification results
- Cross-browser testing checklist and results
- Mobile device testing checklist and results
- Any accessibility issues found and resolved
- Browser compatibility issues found and resolved
- Mobile usability issues found and resolved
- Final accessibility compliance status
</output>
