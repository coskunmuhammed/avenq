# AVENQ Internal Engineering Standards v2.0

Permanent engineering guidelines, repository conventions, release workflows, and compliance checklists across all AVENQ codebases.

---

## 1. Repository Structure
```
/src
  /app                  # Next.js App Router pages, APIs, and routes
  /components           # Reusable UI & domain components
    /ui                 # Core Design System atomic primitives
    /layout             # Navbar, Footer, Container
    /product            # Product showcase primitives
    /solution           # Capability blocks
  /lib                  # Design tokens, SEO schema, utilities
/public                 # Static assets, SVG brand packages
```

---

## 2. Commit & Branch Conventions
- **Commit Messages**: Conventional commits format.
  - `feat: add principles page route`
  - `fix: correct focus ring outline in globals.css`
  - `docs: update design system tokens`
- **Branch Strategy**:
  - `main`: Production-ready, passing all CI checks.
  - `feature/<name>`: Isolated capability development.

---

## 3. Mandatory Engineering Checklists

### Accessibility (a11y) Checklist
- [x] All interactive elements have minimum tap target size of `44px x 44px`.
- [x] High-contrast visible focus rings (`:focus-visible`) enabled.
- [x] Proper ARIA roles and labels on mobile navigation toggles and forms.
- [x] `prefers-reduced-motion` respected in all animations.

### Performance Checklist
- [x] Server-side static pre-rendering (SSG) prioritized.
- [x] Zero uncompressed stock images or heavy client-side bundles.
- [x] Sub-100ms initial response target.

### Security Checklist
- [x] Honeypot anti-spam verification on public forms.
- [x] Rate-limiting headers and 429 response handling on APIs.
- [x] Data minimization: no invasive tracking cookies or third-party pixels.

### SEO Checklist
- [x] Unique `<title>` and `<meta description>` per route.
- [x] Canonical URL tag defined for every public page.
- [x] Structured JSON-LD schema (`SoftwareApplication`, `Organization`).
- [x] `robots.ts`, `sitemap.ts`, and `manifest.ts` generated.
