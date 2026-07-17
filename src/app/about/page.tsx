import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { generateAboutPageSchema, generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'About AVENQ',
  description: 'An engineering company built around products and designed for longevity. Why AVENQ exists, ecosystem snapshot, and permanent engineering principles.',
  alternates: {
    canonical: 'https://avenq.pro/about',
  },
  openGraph: {
    title: 'About AVENQ',
    description: 'An engineering company built around products and designed for longevity.',
    url: 'https://avenq.pro/about',
  },
};

export default function AboutPage() {
  const aboutSchema = generateAboutPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ]);

  const snapshotCategories = [
    { title: 'Public Products', tag: 'STANDALONE PLATFORMS' },
    { title: 'Business Platforms', tag: 'MULTI-TENANT SYSTEMS' },
    { title: 'Private Systems', tag: 'INTERNAL ENTERPRISE' },
    { title: 'Industries', tag: 'CROSS-SECTOR DOMAINS' },
    { title: 'Mobile Applications', tag: 'NATIVE SWIFT & KOTLIN' },
    { title: 'AI Systems', tag: 'LLM & AUTOMATION' },
  ];

  const whatWeBuild = [
    { title: 'Software Products', description: 'End-user web engines and standalone platforms.' },
    { title: 'Business Platforms', description: 'Multi-tenant operational environments for complex workflows.' },
    { title: 'Artificial Intelligence', description: 'Applied machine learning and automated document extraction.' },
    { title: 'Automation', description: 'Event-driven background workers and data integration.' },
    { title: 'Enterprise Systems', description: 'Custom administrative backoffices and transactional databases.' },
    { title: 'Cloud Infrastructure', description: 'Containerized edge server networks and continuous deployment.' },
    { title: 'Mobile Applications', description: 'Native iOS and Android client apps optimized for speed.' },
    { title: 'Digital Commerce', description: 'Custom e-commerce platforms and transaction infrastructure.' },
  ];

  const principles = [
    { number: '01', headline: 'We build products.', subline: 'Not presentations.' },
    { number: '02', headline: 'We document decisions.', subline: 'Not assumptions.' },
    { number: '03', headline: 'We remove complexity.', subline: 'Not add features.' },
    { number: '04', headline: 'We measure.', subline: 'Before we optimize.' },
    { number: '05', headline: 'We prefer systems.', subline: 'Over shortcuts.' },
    { number: '06', headline: 'We value maintenance.', subline: 'As much as shipping.' },
    { number: '07', headline: 'We build slowly.', subline: 'So products last longer.' },
    { number: '08', headline: 'We earn trust.', subline: 'We never ask for it.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-36 pb-16 md:pb-24 pt-2 sm:pt-6 md:pt-16">
        {/* Section 1 — Hero */}
        <section className="pt-2 sm:pt-4 md:pt-8">
          <Container size="normal" className="flex flex-col gap-4">
            <FadeIn>
              <Typography variant="mono" muted className="mb-2">
                THE AVENQ STORY
              </Typography>
              <Typography variant="display" className="max-w-4xl tracking-[-0.035em] text-3xl sm:text-5xl md:text-6xl">
                An Engineering Company.
              </Typography>
              <Typography variant="lead" muted className="max-w-2xl text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mt-2">
                Built around products. Designed for longevity.
              </Typography>
            </FadeIn>
          </Container>
        </section>

        {/* Section 2 — Why We Exist */}
        <section className="py-12 md:py-24 border-y border-[var(--border-subtle)] bg-[#141414]">
          <Container size="narrow">
            <FadeIn>
              <div className="flex flex-col gap-6 md:gap-8">
                <Typography variant="mono" muted>
                  FOUNDATIONAL PURPOSE
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-4xl md:text-5xl tracking-tight">
                  Why We Exist
                </Typography>
                <div className="flex flex-col gap-3 md:gap-4 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                  <p className="text-[var(--text-primary)]">We don't sell hours.</p>
                  <p className="text-[var(--text-primary)]">We build products.</p>
                  <p className="text-[var(--text-secondary)] font-normal">Products demand discipline.</p>
                  <p className="text-[var(--text-secondary)] font-normal">Every system should outlive the technology used to build it.</p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Section 3 — Ecosystem Snapshot */}
        <section className="py-12 md:py-24 border-y border-[var(--border-subtle)] bg-[#141414]">
          <Container size="normal" className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                STRUCTURE
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">Ecosystem Snapshot</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {snapshotCategories.map((cat, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#0B0B0B] flex flex-col justify-between h-28 sm:h-32">
                    <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-widest uppercase">
                      {cat.tag}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Section 4 — What We Build */}
        <section>
          <Container size="normal" className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                CAPABILITIES
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">What We Build</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whatWeBuild.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] flex flex-col justify-between gap-3 sm:gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-widest">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Section 5 — Principles */}
        <section className="py-12 md:py-24 border-y border-[var(--border-subtle)] bg-[#141414]">
          <Container size="normal" className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                CULTURE
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">Permanent Principles</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
              {principles.map((p) => (
                <StaggerItem key={p.number} className="flex flex-col gap-2 sm:gap-3 border-t border-[var(--border-subtle)] pt-4 sm:pt-6">
                  <span className="font-mono text-[10px] sm:text-xs text-[var(--text-tertiary)] tracking-widest uppercase">
                    PRINCIPLE // {p.number}
                  </span>
                  <div className="flex flex-col text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                    <span className="text-[var(--text-primary)]">{p.headline}</span>
                    <span className="text-[var(--text-secondary)] font-normal">{p.subline}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Section 6 — Looking Forward */}
        <section>
          <Container size="narrow">
            <FadeIn>
              <div className="flex flex-col gap-4 sm:gap-6">
                <Typography variant="mono" muted>
                  HORIZON
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold">
                  Looking Forward.
                </Typography>
                <div className="flex flex-col gap-2.5 sm:gap-3 text-base sm:text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-snug">
                  <p className="text-[var(--text-primary)]">We're still at the beginning.</p>
                  <p>Everything we build today becomes the foundation for what comes next.</p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
      </div>
    </>
  );
}
