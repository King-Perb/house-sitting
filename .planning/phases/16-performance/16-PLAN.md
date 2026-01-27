---
phase: 16-performance
plan: 16
type: execute
wave: 4
depends_on:
  - 15-technical-seo
files_modified:
  - next.config.ts
  - src/app/layout.tsx
  - src/app/globals.css
  - src/components/**/*.tsx
  - public/images/**/*
autonomous: true

must_haves:
  truths:
    - Lighthouse performance score > 90
    - PageSpeed Insights score > 90
    - Page load time < 3 seconds
    - All images optimized and using WebP format
    - Fonts load without layout shift
  artifacts:
    - next.config.ts with image optimization settings
    - Optimized images in WebP format
    - Font configuration with preloading
    - CSS optimizations applied
    - JavaScript bundle analysis report
  key_links:
    - Images -> Next.js Image component (all images must use optimized loading)
    - Fonts -> next/font (must eliminate FOUT/FOIT)
    - Components -> dynamic imports (non-critical components lazy loaded)
---

<objective>
Optimize website performance for fast loading and excellent Core Web Vitals scores.

Purpose: Ensure the house & pet sitter website loads quickly on all devices, providing excellent user experience and meeting Google's performance requirements for SEO. Fast loading is critical for mobile users in Gran Canaria who may have varying network conditions.

Output: Fully optimized website with Lighthouse score >90, PageSpeed score >90, and load time <3 seconds.
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
  <name>Task 1: Image Optimization</name>
  <files>
    next.config.ts
    src/components/**/*.tsx (all components with images)
    public/images/**/*
  </files>
  <action>
    Optimize all images for performance:

    1. Configure Next.js Image Optimization in next.config.ts:
       - Enable WebP format output
       - Configure image sizes for responsive breakpoints
       - Set device sizes for srcset generation
       - Enable image optimization caching

    2. Convert all images to use Next.js Image component:
       - Replace all <img> tags with <Image> from next/image
       - Set explicit width and height to prevent layout shift
       - Add priority prop to above-the-fold images (hero, logo)
       - Add loading="lazy" to below-the-fold images
       - Configure placeholder="blur" for large images

    3. Image format optimization:
       - Convert existing images to WebP format where beneficial
       - Ensure all images have appropriate quality settings (75-85 for photos)
       - Remove unused images from public folder

    4. Implement lazy loading for image galleries:
       - Use Intersection Observer for testimonial photos
       - Defer loading of service icons until section is in viewport
  </action>
  <verify>
    Run Lighthouse audit and verify:
    - "Properly size images" passes
    - "Serve images in next-gen formats" passes
    - "Defer offscreen images" passes
    - No Cumulative Layout Shift (CLS) from images
    Check Network tab to confirm WebP format is served.
  </verify>
  <done>
    All images use Next.js Image component, WebP format served, lazy loading implemented, no layout shift from images.
  </done>
</task>

<task type="auto">
  <name>Task 2: Font and CSS Optimization</name>
  <files>
    src/app/layout.tsx
    src/app/globals.css
    tailwind.config.ts
  </files>
  <action>
    Optimize font loading and CSS delivery:

    1. Font optimization using next/font:
       - Import fonts using next/font/google or next/font/local
       - Configure font display: 'swap' for text visibility
       - Preload critical font weights (400, 600, 700)
       - Apply font variables to body/html element
       - Remove any external font CDN links

    2. CSS optimization:
       - Ensure Tailwind CSS purges unused styles (production build)
       - Verify tailwind.config.ts content paths include all component files
       - Review globals.css and remove any unused custom CSS
       - Inline critical CSS for above-the-fold content
       - Consider extracting critical CSS using critters or similar

    3. Reduce CSS specificity and complexity:
       - Audit for duplicate or conflicting styles
       - Simplify complex selectors where possible
       - Use CSS custom properties efficiently

    4. Remove render-blocking resources:
       - Verify no external CSS blocking render
       - Ensure fonts don't block first contentful paint
  </action>
  <verify>
    Run Lighthouse audit and verify:
    - "Ensure text remains visible during webfont load" passes
    - "Reduce unused CSS" shows minimal unused CSS
    - "Eliminate render-blocking resources" passes
    - First Contentful Paint (FCP) is under 1.8s
    - No Flash of Unstyled Text (FOUT) or Flash of Invisible Text (FOIT)
  </verify>
  <done>
    Fonts load via next/font without layout shift, CSS is optimized and purged, no render-blocking resources.
  </done>
</task>

<task type="auto">
  <name>Task 3: JavaScript Bundle Optimization and Code Splitting</name>
  <files>
    next.config.ts
    src/app/page.tsx
    src/components/**/*.tsx
  </files>
  <action>
    Optimize JavaScript bundle size and implement code splitting:

    1. Analyze current bundle:
       - Run `npm run build` and review bundle analysis
       - Use `npx @next/bundle-analyzer` to visualize bundle composition
       - Identify large dependencies that can be optimized

    2. Implement dynamic imports for non-critical components:
       - Use next/dynamic for below-the-fold sections
       - Lazy load Calendly integration (heavy third-party script)
       - Lazy load FAQ accordion (not visible on initial load)
       - Lazy load testimonials carousel if applicable
       - Example: `const FAQ = dynamic(() => import('@/components/sections/FAQ'))`

    3. Third-party script optimization:
       - Use next/script with strategy="lazyOnload" for analytics
       - Defer Calendly script until user scrolls to booking section
       - Implement script loading only when needed (intersection observer)

    4. Tree shaking and dead code elimination:
       - Ensure ES modules are used for better tree shaking
       - Review imports for tree-shakeable patterns
       - Avoid importing entire libraries when only subset needed
       - Example: import { Button } from '@/components/ui/button' not entire ui

    5. Configure Next.js optimizations:
       - Ensure SWC minification is enabled (default in Next.js 16)
       - Review and optimize next.config.ts settings
       - Enable experimental optimizeCss if stable
  </action>
  <verify>
    Run `npm run build` and verify:
    - Total bundle size is reasonable (First Load JS < 100kB for main page)
    - Dynamic imports show as separate chunks
    - Lighthouse "Reduce JavaScript execution time" passes
    - Time to Interactive (TTI) is under 3.8s

    Run full Lighthouse performance audit:
    - Performance score > 90
    - LCP (Largest Contentful Paint) < 2.5s
    - FID (First Input Delay) < 100ms
    - CLS (Cumulative Layout Shift) < 0.1

    Run PageSpeed Insights and verify score > 90.
  </verify>
  <done>
    JavaScript bundles optimized, code splitting implemented, third-party scripts deferred, Lighthouse score >90.
  </done>
</task>

</tasks>

<verification>
After all tasks complete:
1. Run full Lighthouse performance audit:
   - Performance score > 90
   - Best Practices score > 90
   - SEO score > 90
   - Accessibility score (should remain high from Phase 17)

2. Run PageSpeed Insights on production URL:
   - Mobile score > 90
   - Desktop score > 90

3. Test page load time:
   - First Contentful Paint < 1.8s
   - Largest Contentful Paint < 2.5s
   - Time to Interactive < 3.8s
   - Total page load < 3s

4. Core Web Vitals check:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

5. Network analysis:
   - Images served as WebP
   - No render-blocking resources
   - JavaScript chunks properly split
   - Fonts preloaded

6. Mobile performance:
   - Test on 3G throttling
   - Verify acceptable performance on slower networks
</verification>

<success_criteria>
- [ ] All images use Next.js Image component with WebP optimization
- [ ] Lazy loading implemented for below-the-fold images
- [ ] Fonts optimized with next/font (no FOUT/FOIT)
- [ ] CSS purged and optimized
- [ ] Dynamic imports for non-critical components
- [ ] Third-party scripts deferred appropriately
- [ ] JavaScript bundle size < 100kB First Load JS
- [ ] Lighthouse Performance score > 90
- [ ] PageSpeed Insights score > 90
- [ ] Page load time < 3 seconds
- [ ] Core Web Vitals all in "Good" range
- [ ] No render-blocking resources
</success_criteria>

<output>
After completion, create `.planning/phases/16-performance/16-SUMMARY.md` documenting:
- Performance metrics achieved (Lighthouse scores, load times)
- Optimization techniques applied
- Bundle size before/after
- Any performance bottlenecks identified and resolved
- Recommendations for ongoing performance monitoring
</output>
