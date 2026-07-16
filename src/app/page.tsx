import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { ProductShowcaseCard } from '@/components/product/ProductShowcaseCard';
import { CapabilityBlock } from '@/components/solution/CapabilityBlock';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-24 md:gap-36 pb-20">
      {/* 1. Hero Section (Clean viewport fit across 1366x768, 1440x900, 1920x1080) */}
      <section className="pt-12 sm:pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-12">
        <Container size="normal" className="flex flex-col gap-6 md:gap-8">
          <FadeIn direction="up" distance={10}>
            <Typography variant="display" className="max-w-4xl tracking-[-0.035em]">
              Building Digital Businesses.
            </Typography>
          </FadeIn>

          <FadeIn direction="up" distance={8} delay={0.05}>
            <Typography variant="lead" muted className="max-w-2xl text-xl md:text-2xl font-normal leading-relaxed">
              We build companies through technology.
            </Typography>
          </FadeIn>

          <FadeIn direction="up" distance={6} delay={0.1}>
            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <Button href="/products" variant="primary" size="lg">
                Explore Products
              </Button>
              <Link
                href="/about"
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 min-h-[44px]"
              >
                Our Philosophy →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 2. Product Ecosystem */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-6">
            <div className="flex flex-col gap-2">
              <Typography variant="mono" muted>
                PROPRIETARY PLATFORMS
              </Typography>
              <Typography variant="h2">Product Ecosystem</Typography>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 self-start md:self-auto min-h-[44px]"
            >
              View All Products & Roadmap →
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <ProductShowcaseCard
                name="SATKIRALA"
                positioning="The operating system for the Turkish real estate industry."
                audience="Property owners, real estate consultants and brokerage businesses."
                purpose="Helps property owners discover suitable consultants and gives consultants a structured digital presence."
                capabilities={[
                  'Consultant discovery',
                  'Consultant profiles',
                  'Location-based pages',
                  'Verification-focused trust structure',
                  'Real estate discovery tools',
                ]}
                linkHref="/products#satkirala"
              />
            </StaggerItem>

            <StaggerItem>
              <ProductShowcaseCard
                name="QR MENU"
                positioning="A digital menu and restaurant operations platform."
                audience="Restaurants, cafés, hotels and hospitality businesses."
                purpose="Helps businesses publish digital menus and manage key operational content from one system."
                capabilities={[
                  'QR menu publishing',
                  'Category and product management',
                  'Campaigns & Events',
                  'Reservations management',
                  'Business administration',
                ]}
                linkHref="/products#qrmenu"
              />
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* 3. Capabilities */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-6">
            <Typography variant="mono" muted>
              ENGINEERING CAPABILITIES
            </Typography>
            <Typography variant="h2">What We Build</Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <CapabilityBlock
                number="01"
                title="AI Systems"
                description="Custom language processing, document extraction, and workflow automation."
                outcomes={['Custom model integration', 'Document extraction', 'Automated workflows']}
              />
            </StaggerItem>

            <StaggerItem>
              <CapabilityBlock
                number="02"
                title="Software Engineering"
                description="Enterprise platform design, structured APIs, and web application architecture."
                outcomes={['Web application development', 'Structured Web APIs', 'Modular architecture']}
              />
            </StaggerItem>

            <StaggerItem>
              <CapabilityBlock
                number="03"
                title="Cloud Infrastructure"
                description="Cloud platform setup, deployment automation, and system reliability."
                outcomes={['Cloud deployment', 'Automated pipelines', 'System uptime monitoring']}
              />
            </StaggerItem>
          </StaggerContainer>

          <div className="pt-4 flex justify-center">
            <Button href="/solutions" variant="secondary" size="lg">
              Explore All 7 Engineering Capabilities →
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. Philosophy Statement */}
      <section className="py-20 border-y border-[var(--border-subtle)] bg-[#141414]">
        <Container size="narrow">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <Typography variant="mono" muted>
                OUR OPERATING PHILOSOPHY
              </Typography>
              <Typography variant="h2" className="text-2xl md:text-4xl leading-tight">
                AVENQ is a technology company.
              </Typography>
              <Typography variant="lead" muted className="text-base md:text-lg leading-relaxed">
                We create software products, build platforms, and engineer technology systems for long-term growth. We solve real business problems through software engineering.
              </Typography>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 5. Contact Statement */}
      <section>
        <Container size="normal">
          <div className="border border-[var(--border-medium)] rounded-[6px] p-8 md:p-14 bg-[#141414] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <Typography variant="h2" className="text-2xl md:text-3xl">
                Initiate Engineering Contact
              </Typography>
              <Typography variant="body" muted>
                Engage directly with AVENQ leadership regarding product inquiries or technical requirements.
              </Typography>
            </div>
            <Button href="/contact" variant="primary" size="lg" className="shrink-0">
              Contact Leadership
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
