/**
 * AVENQ Design System Tokens (Architectural Minimalism Edition)
 * Pure Solid Surfaces, Architectural Spacing, and Factual Typography
 */

export const colors = {
  bg: {
    primary: '#0B0B0B',
    surface: '#141414',
    elevated: '#1C1C1C',
    hover: 'rgba(255, 255, 255, 0.04)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#888888',
    tertiary: '#555555',
    muted: '#333333',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.16)',
    active: 'rgba(255, 255, 255, 0.32)',
  },
  accent: {
    interactive: '#FFFFFF',
    statusActive: '#10B981',
    statusRoadmap: '#818CF8',
  }
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
    mono: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace)',
  },
  scale: {
    display: 'text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] leading-[1.03] tracking-[-0.035em] font-semibold text-balance',
    h1: 'text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.06] tracking-[-0.03em] font-medium text-balance',
    h2: 'text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] font-medium text-balance',
    h3: 'text-[18px] sm:text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.015em] font-medium text-balance',
    bodyLead: 'text-[16px] sm:text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.01em] font-normal text-pretty',
    body: 'text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[0] font-normal text-pretty',
    caption: 'text-[11px] sm:text-[12px] md:text-[13px] leading-[1.4] tracking-[0.03em] font-mono uppercase',
  }
} as const;

export const spacing = {
  sectionPadding: 'py-20 md:py-32 lg:py-40',
  containerPadding: 'px-5 sm:px-8 md:px-12 lg:px-16',
  gutter: 'gap-6 md:gap-8 lg:gap-10',
} as const;

export const radius = {
  none: 'rounded-none',
  xs: 'rounded-[2px]',
  sm: 'rounded-[4px]',
  default: 'rounded-[6px]',
  full: 'rounded-full',
} as const;

export const motion = {
  cubicEase: [0.16, 1, 0.3, 1] as const,
  durationDefault: 0.35,
  staggerDelay: 0.05,
} as const;

export const shadows = {
  none: 'shadow-none',
} as const;
