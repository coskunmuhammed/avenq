import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'Documentation Portal',
  description: 'AVENQ public technical documentation, architecture specifications, API contracts, security standards, and changelog.',
  alternates: {
    canonical: 'https://avenq.pro/docs',
  },
};

const docCategories = [
  {
    title: 'Engineering Principles',
    tag: 'FOUNDATION',
    href: '/principles',
    description: 'Eight permanent rules governing software architecture, code quality, and decision discipline at AVENQ.',
  },
  {
    title: 'System Architecture',
    tag: 'INFRASTRUCTURE',
    href: '/docs#architecture',
    description: 'Server-side static rendering, multi-tenant database isolation, and edge delivery specs.',
  },
  {
    title: 'Security & Compliance',
    tag: 'PROTECTION',
    href: '/docs#security',
    description: 'TLS 1.3 protocol standards, zero third-party tracking, data encryption at rest, and access control.',
  },
  {
    title: 'Performance Telemetry',
    tag: 'METRICS',
    href: '/docs#performance',
    description: 'Sub-100ms response targets, Core Web Vitals targets, and zero-cookie performance logging.',
  },
  {
    title: 'Deployment & CI/CD',
    tag: 'PIPELINES',
    href: '/docs#deployment',
    description: 'Automated containerized build pipelines, immutable releases, and zero-downtime rollouts.',
  },
  {
    title: 'API Specification',
    tag: 'INTERFACES',
    href: '/docs#api',
    description: 'RESTful and GraphQL OpenAPI specifications for Satkirala and QR Menu web services.',
  },
  {
    title: 'Accessibility Standard',
    tag: 'INCLUSION',
    href: '/docs#a11y',
    description: 'WCAG 2.1 AAA high-contrast colors, keyboard navigation, and aria-label enforcement.',
  },
  {
    title: 'Changelog & Release Notes',
    tag: 'HISTORY',
    href: '/docs#changelog',
    description: 'Chronological platform updates, security patches, and structural system releases.',
  },
];

export default function DocsPage() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24 pt-12 md:pt-16">
      {/* Header */}
      <section>
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              PUBLIC KNOWLEDGE BASE
            </Typography>
            <Typography variant="display" className="max-w-4xl tracking-[-0.035em]">
              Documentation Portal.
            </Typography>
            <Typography variant="lead" muted className="max-w-2xl text-lg md:text-xl mt-2 leading-relaxed">
              Open technical specifications, architecture contracts, security guarantees, and engineering documentation for the AVENQ platform ecosystem.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Docs Grid */}
      <section>
        <Container size="normal">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docCategories.map((doc, idx) => (
              <StaggerItem key={idx}>
                <Link
                  href={doc.href}
                  className="group p-8 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--text-primary)] transition-all flex flex-col justify-between gap-6 h-full block"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                      <span className="font-mono text-xs text-[var(--text-tertiary)] tracking-widest uppercase">
                        DOC // {doc.tag}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        Inspect →
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Detailed Spec Sections */}
      <section className="border-t border-[var(--border-subtle)] pt-16">
        <Container size="normal" className="flex flex-col gap-16">
          {/* Architecture Spec */}
          <div id="architecture" className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-12">
            <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
              SPECIFICATION 01
            </span>
            <Typography variant="h2" className="text-2xl md:text-3xl">
              System Architecture Standard
            </Typography>
            <div className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed space-y-4 max-w-3xl">
              <p>
                AVENQ platforms are built using Next.js App Router on static, edge-rendered Node.js runtime environments. Data access layers enforce strict tenant isolation at the database query level.
              </p>
              <ul className="list-disc list-inside font-mono text-xs text-[var(--text-tertiary)] space-y-2">
                <li>Server-Side Rendering (SSR) & Static Site Generation (SSG) default</li>
                <li>Edge compute middleware for request sanitization & auth verification</li>
                <li>PostgreSQL database instances with row-level security (RLS)</li>
              </ul>
            </div>
          </div>

          {/* Security Spec */}
          <div id="security" className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-12">
            <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
              SPECIFICATION 02
            </span>
            <Typography variant="h2" className="text-2xl md:text-3xl">
              Security & Data Protection Protocol
            </Typography>
            <div className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed space-y-4 max-w-3xl">
              <p>
                We enforce strict zero-tracking telemetry across all public web properties. No third-party tracking pixels or behavioral profiling cookies are executed on <code>avenq.pro</code>.
              </p>
              <ul className="list-disc list-inside font-mono text-xs text-[var(--text-tertiary)] space-y-2">
                <li>End-to-end TLS 1.3 encryption on all ingress traffic</li>
                <li>Strict Content Security Policy (CSP) headers without inline script evaluation</li>
                <li>Daily encrypted database snapshots with 30-day retention</li>
              </ul>
            </div>
          </div>

          {/* Changelog */}
          <div id="changelog" className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
              SYSTEM LOGS
            </span>
            <Typography variant="h2" className="text-2xl md:text-3xl">
              Platform Changelog
            </Typography>
            <div className="flex flex-col gap-6 pt-4">
              <div className="p-6 border border-[var(--border-subtle)] bg-[#141414] rounded-[4px] flex flex-col gap-2">
                <div className="flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
                  <span>v1.6.0 // PLATFORM REPOSITIONING</span>
                  <span>2026-07-17</span>
                </div>
                <h4 className="text-base font-semibold text-[var(--text-primary)]">
                  AVENQ V1.6 Ecosystem & Engineering Capability Launch
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Established permanent Brand Identity, Beyond Products capability grid, 8 Permanent Engineering Principles, and public Documentation Portal.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
