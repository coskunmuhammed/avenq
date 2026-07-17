import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { CareersForm } from '@/components/careers/CareersForm';

export const metadata: Metadata = {
  title: 'Engineering Careers',
  description: 'How we write software, review code, document decisions, and hire engineers at AVENQ.',
  alternates: {
    canonical: 'https://avenq.pro/careers',
  },
};

const engineeringPractices = [
  {
    number: '01',
    title: 'How We Write Software',
    description: 'We write strongly typed, self-documenting code with zero unnecessary dependencies.',
  },
  {
    number: '02',
    title: 'How We Review Code',
    description: 'Pull requests are evaluated for architectural clarity and edge-case coverage.',
  },
  {
    number: '03',
    title: 'How We Document',
    description: 'Architectural decisions are written in markdown before code is committed.',
  },
  {
    number: '04',
    title: 'How We Make Decisions',
    description: 'Decisions are grounded in benchmarks and telemetry—never hierarchy or trends.',
  },
];

const whoThrives = [
  'Engineers who prefer writing software to sitting in status meetings.',
  'Architects who take personal pride in sub-100ms response times.',
  'Pragmatists who understand that deleting code is better than writing new code.',
  'Builders who take full end-to-end ownership of production systems.',
];

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col gap-24 md:gap-36 pb-24 pt-12 md:pt-16">
      {/* Header */}
      <section>
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              TALENT & PRACTICE
            </Typography>
            <Typography variant="display" className="max-w-4xl tracking-[-0.035em]">
              Engineering at AVENQ.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Engineering Practices Grid */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-6">
            <Typography variant="mono" muted>
              ENGINEERING CULTURE
            </Typography>
            <Typography variant="h2">How We Work</Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringPractices.map((practice) => (
              <StaggerItem key={practice.number}>
                <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-3">
                  <Typography variant="mono" muted>
                    PRACTICE // {practice.number}
                  </Typography>
                  <Typography variant="h3">{practice.title}</Typography>
                  <Typography variant="body" muted className="leading-relaxed">
                    {practice.description}
                  </Typography>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Who Thrives at AVENQ */}
      <section className="py-20 border-y border-[var(--border-subtle)] bg-[#141414]">
        <Container size="narrow" className="flex flex-col gap-8">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <Typography variant="mono" muted>
                PROFILE ALIGNMENT
              </Typography>
              <Typography variant="h2" className="text-2xl md:text-4xl font-semibold tracking-tight">
                Who Thrives at AVENQ
              </Typography>
              <ul className="flex flex-col gap-4 pt-2">
                {whoThrives.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-[var(--text-secondary)] leading-relaxed">
                    <span className="font-mono text-xs text-[var(--text-primary)] pt-1">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Talent Submission Form */}
      <section>
        <Container size="narrow">
          <Card variant="bordered" padding="lg" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Typography variant="mono" muted>
                TALENT NETWORK
              </Typography>
              <Typography variant="h2" className="text-2xl md:text-3xl">
                Submit Engineering Profile
              </Typography>
            </div>

            <CareersForm />
          </Card>
        </Container>
      </section>
    </div>
  );
}
