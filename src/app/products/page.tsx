import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { ProductShowcaseCard } from '@/components/product/ProductShowcaseCard';
import {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
  generateSoftwareSchema,
} from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Products — AVENQ',
  description: 'Public products, business solutions, creative engineering, and future platform horizons engineered by AVENQ.',
  alternates: {
    canonical: 'https://avenq.pro/products',
  },
  openGraph: {
    title: 'Products — AVENQ',
    description: 'Public products, business platforms, and software engineering ecosystem.',
    url: 'https://avenq.pro/products',
  },
};

export default function ProductsPage() {
  const collectionSchema = generateCollectionPageSchema(
    'Products — AVENQ',
    'Public products, business platforms, and software engineering ecosystem.',
    '/products'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Products', item: '/products' },
  ]);

  const softwareSchemas = [
    generateSoftwareSchema('SATKIRALA', 'Operating system for the Turkish real estate industry.', 'BusinessApplication', 'https://avenq.pro/products#satkirala'),
    generateSoftwareSchema('MÜLKÜNÜHESAPLA', 'Property valuation and market intelligence platform.', 'FinanceApplication', 'https://avenq.pro/products#mulkunuhesapla'),
    generateSoftwareSchema('KASTYÖREM', 'Digital commerce platform for regional and local products.', 'ShoppingApplication', 'https://avenq.pro/products#kastyorem'),
    generateSoftwareSchema('QUIZ OF THE SEAS', 'Interactive hospitality and entertainment experience.', 'EntertainmentApplication', 'https://avenq.pro/products#quizoftheseas'),
  ];

  const publicProducts = [
    {
      id: 'satkirala',
      name: 'SATKIRALA',
      sentence: 'Operating system for the Turkish real estate industry.',
      philosophy: 'Trust requires structure, not advertising.',
      purpose: 'Connects property owners directly with verified real estate consultants.',
      statusLabel: 'Live',
    },
    {
      id: 'mulkunuhesapla',
      name: 'MÜLKÜNÜHESAPLA',
      sentence: 'Property valuation and market intelligence platform.',
      philosophy: 'Decisions require data, not speculation.',
      purpose: 'Algorithmic property valuation and real estate location intelligence.',
      statusLabel: 'Live',
    },
    {
      id: 'kastyorem',
      name: 'KASTYÖREM',
      sentence: 'Digital commerce platform for regional and local products.',
      philosophy: 'Authenticity belongs in modern digital infrastructure.',
      purpose: 'Connects regional producers directly to digital commerce networks.',
      statusLabel: 'Live',
    },
    {
      id: 'quizoftheseas',
      name: 'QUIZ OF THE SEAS',
      sentence: 'Interactive hospitality and entertainment experience.',
      philosophy: 'Engagement should feel effortless.',
      purpose: 'Interactive digital trivia and guest engagement for maritime venues.',
      statusLabel: 'Live',
    },
  ];

  const businessSolutions = [
    { title: 'QR MENU', tag: 'HOSPITALITY OS', description: 'Digital menu publishing and restaurant operational administration.' },
    { title: 'AI Automation Systems', tag: 'ARTIFICIAL INTELLIGENCE', description: 'Language processing models and automated document parsing.' },
    { title: 'Enterprise Software', tag: 'BACKOFFICE ARCHITECTURE', description: 'Custom administrative tools, inventory management, and databases.' },
    { title: 'Business Platforms', tag: 'MULTI-TENANT SYSTEMS', description: 'Multi-tenant operational software for enterprise workflows.' },
    { title: 'Workflow Automation', tag: 'PROCESS PIPELINES', description: 'Event-driven background processing and data synchronization.' },
    { title: 'Cloud Infrastructure', tag: 'SYSTEM RELIABILITY', description: 'Containerized deployment infrastructure and edge distribution.' },
    { title: 'System Integration', tag: 'API CONNECTORS', description: 'Structured Web APIs for legacy database migration.' },
    { title: 'Internal Operational Systems', tag: 'PRIVATE SOFTWARE', description: 'Bespoke operational software built for partner enterprises.' },
    { title: 'iOS Applications', tag: 'MOBILE ENGINEERING', description: 'Native Swift client applications focused on speed and security.' },
    { title: 'Android Applications', tag: 'MOBILE ENGINEERING', description: 'Native Kotlin enterprise applications optimized for field devices.' },
  ];

  const creativeDigital = [
    { title: 'ALTUNMEDYA', tag: 'MEDIA & STRATEGY', description: 'Digital media strategy, brand identity, and corporate production.' },
    { title: 'Brand Identity Systems', tag: 'VISUAL SYSTEM', description: 'Design tokens, typography hierarchies, and visual guidelines.' },
    { title: 'Corporate Websites', tag: 'WEB ENGINES', description: 'High-performance web applications built for sub-second load times.' },
    { title: 'Digital Commerce', tag: 'TRANSACTION SYSTEMS', description: 'Custom e-commerce platforms and payment gateway workflows.' },
    { title: 'SEO Infrastructure', tag: 'SEARCH OPTIMIZATION', description: 'Search engine optimization and structured schema markup.' },
    { title: 'Performance Optimization', tag: 'CORE WEB VITALS', description: 'Server-side rendering and performance tuning for high-traffic apps.' },
  ];

  const futureHorizons = [
    { title: 'AVENQ Identity', status: 'In Development', description: 'Centralized single sign-on (SSO) across AVENQ systems.' },
    { title: 'AVENQ Cloud', status: 'Concept', description: 'Edge compute infrastructure for low-latency caching.' },
    { title: 'AVENQ Workspace', status: 'Concept', description: 'Internal operational suite for multi-project management.' },
    { title: 'AVENQ AI', status: 'In Development', description: 'Domain-specific model engine for technical document extraction.' },
    { title: 'AVENQ Docs', status: 'Live', description: 'Public knowledge base and technical specifications portal.' },
    { title: 'AVENQ Analytics', status: 'Private', description: 'Privacy-focused server-side telemetry logging engine.' },
  ];

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Live':
        return 'border-[rgba(16,185,129,0.3)] text-[#10B981] bg-[rgba(16,185,129,0.06)]';
      case 'In Development':
        return 'border-[rgba(245,158,11,0.3)] text-[#FBBF24] bg-[rgba(245,158,11,0.06)]';
      case 'Private':
        return 'border-[rgba(129,140,248,0.3)] text-[#818CF8] bg-[rgba(129,140,248,0.06)]';
      case 'Concept':
      default:
        return 'border-[var(--border-medium)] text-[var(--text-tertiary)] bg-[var(--bg-elevated)]';
    }
  };

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
      {softwareSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="w-full flex flex-col gap-16 md:gap-32 pb-24 pt-4 md:pt-16">
        {/* Header & Typographic ASCII Diagram */}
        <section>
          <Container size="normal" className="flex flex-col gap-8">
            <FadeIn>
              <Typography variant="mono" muted className="mb-2">
                ECOSYSTEM ARCHITECTURE
              </Typography>
              <Typography variant="display" className="max-w-4xl tracking-[-0.035em] text-3xl sm:text-5xl md:text-6xl">
                Product Ecosystem.
              </Typography>
            </FadeIn>

            {/* Typographic Connector Diagram */}
            <FadeIn delay={0.1}>
              <div className="p-4 sm:p-8 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] font-mono text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed select-none overflow-x-auto">
                <div className="text-[var(--text-tertiary)] mb-2">// AVENQ ECOSYSTEM STRUCTURE</div>
                <pre className="text-[var(--text-primary)] font-semibold">
{`                   AVENQ

        ├── Public Products
        ├── Business Solutions
        └── Creative & Digital`}
                </pre>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* 1. Public Products */}
        <section id="public">
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                GROUP 01 // STANDALONE PLATFORMS
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">Public Products</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {publicProducts.map((prod) => (
                <StaggerItem key={prod.id}>
                  <ProductShowcaseCard
                    id={prod.id}
                    name={prod.name}
                    sentence={prod.sentence}
                    philosophy={prod.philosophy}
                    purpose={prod.purpose}
                    statusLabel={prod.statusLabel}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* 2. Business Solutions */}
        <section id="business">
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                GROUP 02 // PLATFORM CAPABILITIES
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">Business Solutions</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {businessSolutions.map((sol, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--border-medium)] transition-colors flex flex-col justify-between gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-widest uppercase">
                        {sol.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                        {sol.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* 3. Creative & Digital */}
        <section id="creative">
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                GROUP 03 // CREATIVE ENGINEERING
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">Creative & Digital</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {creativeDigital.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--border-medium)] transition-colors flex flex-col justify-between gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-[var(--text-tertiary)] tracking-widest uppercase">
                        {item.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* 4. Future Expansion Horizons */}
        <section id="future">
          <Container size="normal" className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-4 md:pb-6">
              <Typography variant="mono" muted>
                FUTURE EXPANSION
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">System Horizons</Typography>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {futureHorizons.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-5 sm:p-6 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] flex flex-col justify-between gap-4 sm:gap-6 h-full">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                        <span className="font-mono text-[10px] sm:text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                          HORIZON // 0{idx + 1}
                        </span>
                        <span
                          className={`font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded border ${getBadgeStyle(item.status)}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
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
      </div>
    </>
  );
}
