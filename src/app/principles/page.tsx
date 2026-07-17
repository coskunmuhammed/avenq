import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'Engineering Principles',
  description: 'The eight permanent principles that define how AVENQ builds software.',
  alternates: {
    canonical: 'https://avenq.pro/principles',
  },
};

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

export default function PrinciplesPage() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-28 pb-24 pt-12 md:pt-16">
      {/* Header */}
      <section>
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              ENGINEERING CULTURE
            </Typography>
            <Typography variant="display" className="max-w-4xl tracking-[-0.035em]">
              Engineering Principles.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Principles List */}
      <section>
        <Container size="normal">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {principles.map((p) => (
              <StaggerItem key={p.number} className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-6">
                <span className="font-mono text-xs text-[var(--text-tertiary)] tracking-widest uppercase">
                  PRINCIPLE // {p.number}
                </span>
                <div className="flex flex-col text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
                  <span className="text-[var(--text-primary)]">{p.headline}</span>
                  <span className="text-[var(--text-secondary)] font-normal">{p.subline}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
