import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { generateCollectionPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Public Documentation — AVENQ',
  description: 'Technical specifications, architecture standards, security protocols, API definitions, and deployment checklists for AVENQ platforms.',
  alternates: {
    canonical: 'https://avenq.pro/docs',
  },
  openGraph: {
    title: 'Public Documentation — AVENQ',
    description: 'Technical specifications, security, deployment, and API architecture.',
    url: 'https://avenq.pro/docs',
  },
};

const docSections = [
  {
    code: 'DOC-01',
    title: 'Architecture Standards',
    description: 'Layered system separation, state encapsulation, and domain modularity.',
  },
  {
    code: 'DOC-02',
    title: 'Security & Compliance',
    description: 'TLS 1.3 encryption, CSP headers, rate-limiting, and input sanitization.',
  },
  {
    code: 'DOC-03',
    title: 'Performance Benchmarks',
    description: 'Sub-100ms API latency targets, server-side caching, and bundle optimization.',
  },
  {
    code: 'DOC-04',
    title: 'Deployment & CI/CD',
    description: 'Automated test suites, preview environments, and zero-downtime production releases.',
  },
  {
    code: 'DOC-05',
    title: 'API Conventions',
    description: 'REST and GraphQL contract definitions, error structures, and rate limits.',
  },
  {
    code: 'DOC-06',
    title: 'Accessibility Standard',
    description: 'WCAG 2.1 AA compliance, keyboard navigation, and ARIA attributes.',
  },
  {
    code: 'DOC-07',
    title: 'Changelog & Releases',
    description: 'Version history, release notes, and operational system upgrades.',
  },
];

export default function DocsPage() {
  const collectionSchema = generateCollectionPageSchema(
    'Public Documentation — AVENQ',
    'Technical specifications, security, deployment, and API architecture.',
    '/docs'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Docs', item: '/docs' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-28 pb-24 pt-4 md:pt-16">
        {/* Header */}
        <section>
          <Container size="normal" className="flex flex-col gap-4">
            <FadeIn>
              <Typography variant="mono" muted className="mb-2">
                SYSTEM SPECIFICATIONS
              </Typography>
              <Typography variant="display" className="max-w-4xl tracking-[-0.035em] text-3xl sm:text-5xl md:text-6xl">
                Public Documentation.
              </Typography>
            </FadeIn>
          </Container>
        </section>

        {/* Documentation Index */}
        <section>
          <Container size="normal">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docSections.map((doc) => (
                <StaggerItem key={doc.code}>
                  <div className="p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--border-medium)] transition-colors flex flex-col justify-between gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-[var(--text-tertiary)] tracking-widest uppercase">
                        {doc.code}
                      </span>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>
      </div>
    </>
  );
}
