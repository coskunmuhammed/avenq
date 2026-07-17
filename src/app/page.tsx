import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { ProductShowcaseCard } from '@/components/product/ProductShowcaseCard';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'AVENQ — Technology Company',
  description:
    'AVENQ is a technology company building software products, business platforms, AI systems, and cloud infrastructure.',
  alternates: {
    canonical: 'https://avenq.pro',
  },
  openGraph: {
    title: 'AVENQ — Technology Company',
    description:
      'Software built to endure. We build software products, business platforms, and digital infrastructure.',
    url: 'https://avenq.pro',
  },
};

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
  ]);

  const ecosystemPillars = [
    {
      id: 'public',
      title: 'Public Products',
      subtitle: 'STANDALONE PLATFORMS',
      count: '4 PLATFORMS',
      description: 'Independent software products engineered for targeted industry domains.',
      items: ['SATKIRALA', 'MÜLKÜNÜHESAPLA', 'KASTYÖREM', 'QUIZ OF THE SEAS'],
      href: '/products#public',
    },
    {
      id: 'business',
      title: 'Business Solutions',
      subtitle: 'PLATFORM CAPABILITIES',
      count: '10 DISCIPLINES',
      description: 'Custom software architectures, process automation, and cloud infrastructure.',
      items: ['QR MENU', 'AI Automation Systems', 'Enterprise Software', 'iOS & Android Apps'],
      href: '/products#business',
    },
    {
      id: 'creative',
      title: 'Creative & Digital',
      subtitle: 'CREATIVE ENGINEERING',
      count: '6 CAPABILITIES',
      description: 'Brand identity systems, corporate web engines, and commerce infrastructure.',
      items: ['ALTUNMEDYA', 'Brand Identity Systems', 'Corporate Systems', 'SEO Infrastructure'],
      href: '/products#creative',
    },
  ];

  const industries = [
    'Real Estate',
    'Hospitality',
    'Retail',
    'Manufacturing',
    'Professional Services',
    'Legal',
    'Education',
    'Healthcare',
    'Technology',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-32 pb-16 md:pb-24">
        {/* 1. Hero Section */}
        <section className="pt-2 sm:pt-6 md:pt-16 pb-4 md:pb-8">
          <Container size="normal" className="flex flex-col gap-5 md:gap-8">
            <FadeIn direction="up" distance={10}>
              <Typography variant="display" className="max-w-4xl tracking-[-0.035em] text-4xl sm:text-6xl md:text-7xl">
                Software built to endure.
              </Typography>
            </FadeIn>

            <FadeIn direction="up" distance={8} delay={0.05}>
              <Typography variant="lead" muted className="max-w-2xl text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
                We build software products, business platforms, and digital infrastructure.
              </Typography>
            </FadeIn>

            <FadeIn direction="up" distance={6} delay={0.1}>
              <div className="flex items-center gap-4 sm:gap-6 pt-2 flex-wrap">
                <Button href="/products" variant="primary" size="lg" className="w-full sm:w-auto text-center justify-center">
                  Explore Product Ecosystem
                </Button>
                <Link
                  href="/about"
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 min-h-[44px]"
                >
                  Read Manifesto →
                </Link>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 2. Ecosystem Overview */}
        <section className="border-t border-[var(--border-subtle)] pt-10 md:pt-24">
          <Container size="normal" className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
              <div className="flex flex-col gap-2 max-w-xl">
                <Typography variant="mono" muted>
                  PRODUCT ECOSYSTEM
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-4xl md:text-5xl tracking-tight">
                  Technology Across Industries.
                </Typography>
              </div>
              <Link
                href="/products"
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 shrink-0 min-h-[44px]"
              >
                Inspect Ecosystem →
              </Link>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {ecosystemPillars.map((pillar) => (
                <StaggerItem key={pillar.id}>
                  <Link
                    href={pillar.href}
                    className="group p-6 sm:p-8 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--text-primary)] transition-all flex flex-col justify-between gap-6 h-full block"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
                        <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-tertiary)] tracking-widest uppercase">
                          {pillar.subtitle}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-secondary)] font-medium">
                          {pillar.count}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                        FEATURED NODES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.items.map((item, idx) => (
                          <span key={idx} className="font-mono text-xs text-[var(--text-secondary)] bg-[#1C1C1C] px-2 py-1 rounded border border-[var(--border-subtle)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* 3. Manifesto — Short Statements */}
        <section className="py-12 md:py-24 border-y border-[var(--border-subtle)] bg-[#141414]">
          <Container size="narrow">
            <FadeIn>
              <div className="flex flex-col gap-6 md:gap-8">
                <Typography variant="mono" muted>
                  BRAND MANIFESTO
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                  Why AVENQ Exists
                </Typography>
                <div className="flex flex-col gap-3 md:gap-4 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-medium leading-snug">
                  <p className="text-[var(--text-primary)]">We build products.</p>
                  <p>Not billable hours.</p>
                  <p>We remove complexity.</p>
                  <p>We solve operational problems permanently.</p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 4. Flagship Showcase */}
        <section>
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <div className="flex flex-col gap-1 md:gap-2">
                <Typography variant="mono" muted>
                  PUBLIC PLATFORMS
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">
                  Ecosystem Showcase
                </Typography>
              </div>
              <Link
                href="/products#public"
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 self-start md:self-auto min-h-[44px]"
              >
                View All Platforms →
              </Link>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <StaggerItem>
                <ProductShowcaseCard
                  name="SATKIRALA"
                  sentence="Operating system for the Turkish real estate industry."
                  philosophy="Trust requires structure, not advertising."
                  purpose="Connects property owners directly with verified real estate consultants."
                  statusLabel="Live"
                  linkHref="/products#satkirala"
                />
              </StaggerItem>

              <StaggerItem>
                <ProductShowcaseCard
                  name="MÜLKÜNÜHESAPLA"
                  sentence="Property valuation and market intelligence platform."
                  philosophy="Decisions require data, not speculation."
                  purpose="Algorithmic property valuation and real estate location intelligence."
                  statusLabel="Live"
                  linkHref="/products#mulkunuhesapla"
                />
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </section>

        {/* 5. Operating Stance */}
        <section className="py-12 md:py-24 border-y border-[var(--border-subtle)] bg-[#0F0F0F]">
          <Container size="narrow">
            <FadeIn>
              <div className="flex flex-col gap-4 md:gap-6">
                <Typography variant="mono" muted>
                  OPERATING STANCE
                </Typography>
                <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                  We Build More Than Products.
                </Typography>
                <div className="flex flex-col gap-2.5 md:gap-3 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  <p>Some systems become public products.</p>
                  <p>Others remain internal platforms built for specific organizations.</p>
                  <p className="text-[var(--text-primary)] font-medium">
                    Sometimes the best software is the software no one notices.
                  </p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 6. Industry Experience Grid */}
        <section>
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-1 md:gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                DOMAIN KNOWLEDGE
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">
                Industries We've Worked With
              </Typography>
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
              {industries.map((ind, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-4 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] flex flex-col gap-1 md:gap-2">
                    <span className="font-mono text-[10px] sm:text-xs text-[var(--text-tertiary)]">
                      SECTOR // 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-primary)]">
                      {ind}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* 7. Direct Engineering Contact */}
        <section>
          <Container size="normal">
            <div className="border border-[var(--border-medium)] rounded-[6px] p-6 sm:p-8 md:p-14 bg-[#141414] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-3 max-w-xl">
                <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl">
                  Direct Engineering Inquiries
                </Typography>
                <Typography variant="body" muted className="text-sm sm:text-base">
                  Engage directly with AVENQ leadership regarding custom software architecture or platform inquiries.
                </Typography>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center text-center shrink-0">
                Contact Leadership
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
