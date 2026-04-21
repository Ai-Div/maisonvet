# Maison Vet Improvement Plan

This plan outlines the steps to improve the Maison Vet codebase, focusing on architectural consistency, security, performance, and strict adherence to the **Accessibility & Semantic HTML Standards**.

## Phase 1: Accessibility & Semantic HTML Overhaul

**Goal:** Achieve 100/100 Lighthouse scores and provide a best-in-class experience for all users and AI agents.

### 1.1 Semantic Component Migration
- [ ] **Section Layouts:** Audit all components in `src/components/sections/` and replace generic `<div>` wrappers with `<section>`, `<article>`, `<header>`, and `<footer>` as appropriate.
- [ ] **Descriptive Classes:** Add semantic, descriptive class names to remaining `<div>` elements (e.g., `hero-container`, `timeline-grid`).
- [ ] **ARIA Enhancements:** Ensure all sections have `aria-labelledby` or `aria-label`. Add `aria-current="step"` to the active phase in the Timeline component.
- [ ] **Skip Link:** Verify the "Skip to primary content" link in `layout.tsx` correctly targets the `#primary-content` ID in `page.tsx`.

### 1.2 Heading & Content Hierarchy
- [ ] **Heading Audit:** Ensure exactly one `<h1>` exists per page. Check that `<h2>` and `<h3>` levels are logically nested and not skipped.
- [ ] **Image Optimization:** Audit `public/` and `src/` for images. Ensure all `<img>` tags have meaningful `alt` text, explicit `width`/`height`, and `loading="lazy"` for below-fold content.

### 1.3 Interactive Element Refinement
- [ ] **Focus States:** Implement consistent, high-visibility focus states across all buttons and links using Tailwind `focus-visible:` classes.
- [ ] **Navigation Accessibility:** Ensure `Nav.tsx` and `NavMobileMenu.tsx` are fully keyboard-navigable and provide clear state indications to screen readers.

## Phase 2: Architectural & Code Quality Improvements

### 2.1 Next.js 15+ Optimization
- [ ] **Server Components:** Audit `src/app/` to ensure maximum use of React Server Components (RSC) to minimize client-side JavaScript.
- [ ] **Metadata API:** Refine the `metadata` object in `layout.tsx` and individual pages for better SEO and social sharing.

### 2.2 Security Hardening
- [ ] **Auth Audit:** Review `src/auth.ts` and NextAuth implementation for session security and CSRF protection.
- [ ] **Environment Variables:** Verify `.env.local` and `.env.production.local` contain no secrets and that all sensitive keys are managed via Vercel/Secrets.

## Phase 3: Performance & Developer Experience

### 3.1 Asset Optimization
- [ ] **Font Loading:** Review the `localFont` implementation in `layout.tsx`. Ensure fonts are correctly preloaded and use `font-display: swap` to prevent FOIT.
- [ ] **Bundle Analysis:** Run a production build and analyze the bundle size. Identify and refactor any large third-party dependencies.

### 3.2 Documentation & Standards
- [ ] **README Update:** Enhance `README.md` with setup instructions, architectural overview, and the new accessibility standards.
- [ ] **Cursor Rules:** Ensure `.cursorrules` (if present) is updated to enforce the `ACCESSIBILITY_STANDARDS.md` for all future development.

## Phase 4: Verification & Deployment

- [ ] **Lighthouse Audit:** Run full audits on mobile and desktop.
- [ ] **Keyboard Testing:** Manually verify full site navigability using only the keyboard.
- [ ] **Screen Reader Test:** Verify content flow and interactive element descriptions using VoiceOver/NVDA.
- [ ] **Vercel Preview:** Deploy to a preview environment for final stakeholder (Tim) approval.

---
**Verification Status:** Plan drafted on 2026-03-26 based on the project audit and provided Accessibility Standards.
