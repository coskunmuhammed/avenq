# AVENQ Motion System — Technical Specification v2.0

The AVENQ Motion System defines timing, curves, interactions, and accessibility rules across all AVENQ applications. Motion is used exclusively to communicate physical state changes and focus transitions—never for decorative entrance effects.

---

## 1. Timing Curves & Durations

```typescript
export const motionTokens = {
  ease: {
    natural: [0.16, 1, 0.3, 1] as const, // Custom smooth decel
    linear: [0, 0, 1, 1] as const,
    sharp: [0.4, 0, 0.6, 1] as const,
  },
  duration: {
    instant: 100, // Micro state changes (toggles, active scale)
    fast: 200,    // Hover states, dropdowns, tooltips
    normal: 350,  // Modal entrances, drawer slide-ins
    slow: 500,    // Page transitions, layout morphs
  },
  stagger: 50,    // Per-item delay for list and grid entrances
};
```

---

## 2. Micro-Interactions

### Buttons & Interactive Surfaces
- **Hover**: Background opacity shifts from 0% to `3.5%` (`rgba(255,255,255,0.035)`), border color shifts from `var(--border-subtle)` to `var(--border-medium)` over `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Active Click**: `transform: scale(0.985); transition-duration: 100ms;`.
- **Focus Visible**: `outline: 1px solid rgba(255, 255, 255, 0.9); outline-offset: 3px;`.

### Page & Section Entrances
- **Distance**: `8px` to `12px` vertical translation (`translateY(10px) -> translateY(0)`).
- **Opacity**: `0 -> 1` over `350ms`.
- **Grid Staggering**: Sequential item delay of `50ms` up to a maximum cap of `400ms` total sequence.

---

## 3. Reduced Motion Safety Rules
Every motion component wraps Framer Motion or CSS transitions with `prefers-reduced-motion: reduce` handling:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
In Framer Motion:
```tsx
const shouldReduceMotion = useReducedMotion();
const animateProps = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };
```
