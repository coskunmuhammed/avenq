import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'About',
  description: 'AVENQ is a technology company focused on building software products, AI solutions, cloud infrastructure and digital transformation platforms.',
  alternates: {
    canonical: 'https://avenq.pro/about',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24">
      {/* Hero Header */}
      <section className="pt-12 md:pt-16">
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              ABOUT AVENQ
            </Typography>
            <Typography variant="display" className="max-w-3xl">
              Engineered to Build.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Main Philosophy Block */}
      <section className="py-16 border-y border-[var(--border-subtle)] bg-[#141414]">
        <Container size="narrow" className="flex flex-col gap-8">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <Typography variant="h2" className="text-2xl md:text-4xl leading-tight">
                AVENQ doesn't sell websites.
                <br />
                AVENQ builds digital businesses.
              </Typography>
              <Typography variant="lead" muted className="text-base md:text-lg leading-relaxed">
                We create software products, build platforms, and solve real business problems through software engineering.
              </Typography>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Operating Principles Grid */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-6">
            <Typography variant="mono" muted>
              OPERATING PRINCIPLES
            </Typography>
            <Typography variant="h2">How We Work</Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  01 / RIGOR
                </Typography>
                <Typography variant="h3">Engineering Rigor</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  We focus on system stability, security, and maintainability. Code quality and clean architecture are primary requirements.
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  02 / OWNERSHIP
                </Typography>
                <Typography variant="h3">Product Ownership</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  We take responsibility for the long-term maintenance, security, and performance of every product we build.
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  03 / FOCUS
                </Typography>
                <Typography variant="h3">Decisive Execution</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  We operate with small, focused engineering teams that ship clean software without bureaucracy.
                </Typography>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
