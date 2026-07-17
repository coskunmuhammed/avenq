# AVENQ Design System — Architectural Specification v2.0

The AVENQ Design System is the single source of truth for all current and future AVENQ digital products, platforms, and interfaces. Built on architectural minimalism, high contrast, monospaced telemetry, and zero decorative fluff.

---

## 1. Core Principles
- **Monochrome Dominance**: Interfaces are built using pure dark tones (`#0B0B0B`, `#141414`, `#1C1C1C`) and pure white (`#FFFFFF`) with functional state accents.
- **Typographic Authority**: Hierarchy is established strictly through font scale, weight, and tracking—never decorative backgrounds or gradients.
- **Component Restraint**: Every UI element must serve an operational purpose. If a border or badge can be removed without losing clarity, it must be removed.

---

## 2. Token Architecture

### Color Tokens
```typescript
export const colors = {
  bg: {
    primary: '#0B0B0B',     // Base background
    surface: '#141414',     // Card / Section background
    elevated: '#1C1C1C',    // Elevated modals / Flyouts
    hover: 'rgba(255, 255, 255, 0.04)',
  },
  text: {
    primary: '#FFFFFF',     // Headlines & Primary text
    secondary: '#888888',   // Body & Secondary descriptions
    tertiary: '#555555',    // Captions & Metadata
    muted: '#333333',       // Subtle dividers / Inactive text
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.16)',
    active: 'rgba(255, 255, 255, 0.32)',
  },
  accent: {
    interactive: '#FFFFFF',
    statusActive: '#10B981',
    statusWarning: '#FBBF24',
    statusError: '#F87171',
    statusRoadmap: '#818CF8',
  }
};
```

---

## 3. Typography Hierarchy

| Style | Scale | Line Height | Tracking | Weight | Font Family |
|---|---|---|---|---|---|
| **Display** | 36px / 68px / 80px | 1.03 | -0.035em | SemiBold (600) | Sans-serif |
| **H1** | 32px / 52px / 60px | 1.06 | -0.03em | Medium (500) | Sans-serif |
| **H2** | 24px / 38px / 42px | 1.10 | -0.02em | Medium (500) | Sans-serif |
| **H3** | 18px / 20px / 24px | 1.25 | -0.015em | Medium (500) | Sans-serif |
| **Body Lead** | 16px / 18px / 20px | 1.55 | -0.01em | Regular (400) | Sans-serif |
| **Body** | 14px / 15px / 16px | 1.60 | 0em | Regular (400) | Sans-serif |
| **Caption / Mono** | 11px / 12px / 13px | 1.40 | +0.03em | Medium (500) | Monospace |

---

## 4. Spacing & Layout Grid
- **Global Container Sizes**:
  - `normal`: `max-w-6xl` (1152px)
  - `narrow`: `max-w-3xl` (768px)
  - `wide`: `max-w-7xl` (1280px)
- **Section Padding**: `py-16 md:py-24 lg:py-32`
- **Grid Gutter**: `gap-6 md:gap-8 lg:gap-10`

---

## 5. Corner Radius & Elevation
- **Radius Tokens**:
  - `none`: `0px`
  - `xs`: `2px`
  - `sm`: `4px`
  - `default`: `6px`
  - `full`: `9999px`
- **Elevation**: Pure solid backgrounds (`#141414`, `#1C1C1C`) paired with 1px `var(--border-subtle)` borders. Zero drop shadows.

---

## 6. Component Rules

### Buttons
- **Primary**: Background `#FFFFFF`, text `#0B0B0B`. Hover: `opacity: 0.92`. Active scale: `0.985`.
- **Secondary**: Background transparent, border `var(--border-medium)`, text `#FFFFFF`. Hover: border `#FFFFFF`, bg `rgba(255,255,255,0.035)`.
- **Ghost**: Background transparent, text `#888888`. Hover: text `#FFFFFF`, bg `rgba(255,255,255,0.03)`.
- **Touch Target**: Minimum height `44px` across all sizes.

### Forms & Validation
- **Input Fields**: Background `#141414`, border `var(--border-subtle)`, text `#FFFFFF`, font size `14px`.
- **Focus Ring**: `outline: 1px solid rgba(255, 255, 255, 0.9); outline-offset: 3px;`
- **Error State**: Border `rgba(239,68,68,0.4)`, text `#F87171`. Direct error messages (*"Valid work email required"*).

### Cards & Containers
- Structural cards use background `#141414` with `1px` subtle border `rgba(255,255,255,0.08)`.
- Hover transition: Smooth border color shift to `rgba(255,255,255,0.16)`.

### Badges & Status Indicators
- **Active / Live**: Border `rgba(16,185,129,0.3)`, text `#10B981`, bg `rgba(16,185,129,0.06)`. Pulsing indicator.
- **In Development**: Border `rgba(245,158,11,0.3)`, text `#FBBF24`, bg `rgba(245,158,11,0.06)`.
- **Available / Custom**: Border `var(--border-medium)`, text `#888888`, bg `#1C1C1C`.

### Tables & Data Structures
- Minimal 1px bottom borders (`var(--border-subtle)`). Monospaced headers (`uppercase tracking-wider text-[11px]`).

### Motion Principles
- `cubic-bezier(0.16, 1, 0.3, 1)` timing curve.
- Hover duration: `200ms`. Page entrance stagger: `50ms` delay per item.
- Respect `prefers-reduced-motion: reduce` by setting animation durations to `0.01ms`.

---

## 7. Accessibility & Internationalization Rules
- WCAG 2.1 AAA contrast ratio for text on dark backgrounds (`#FFFFFF` on `#0B0B0B` is 21:1).
- Keyboard focus indicators on all interactive elements.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
