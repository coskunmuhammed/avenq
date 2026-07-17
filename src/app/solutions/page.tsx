import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

export const metadata: Metadata = {
  title: 'Engineering Capabilities',
  description: 'AVENQ engineering capabilities across products, platforms, AI systems, and cloud infrastructure.',
  alternates: {
    canonical: 'https://avenq.pro/solutions',
  },
};

export default function SolutionsPage() {
  const capabilities = [
    { number: '01', title: 'Digital Products', description: 'End-user web engines and software applications built for sub-second performance.' },
    { number: '02', title: 'Business Platforms', description: 'Multi-tenant operational environments for enterprise workflows and multi-role access.' },
    { number: '03', title: 'Artificial Intelligence', description: 'Applied machine learning pipelines for language processing and automated document extraction.' },
    { number: '04', title: 'Automation Systems', description: 'Event-driven background processing and real-time database synchronization.' },
    { number: '05', title: 'Cloud Infrastructure', description: 'Containerized deployment infrastructure and global edge network distribution.' },
    { number: '06', title: 'Infrastructure & Security', description: 'Network perimeter configuration, TLS 1.3 encryption, and identity protection.' },
    { number: '07', title: 'Mobile Applications', description: 'Native iOS and Android client applications focused on offline persistence and hardware speed.' },
    { number: '08', title: 'Enterprise Software', description: 'Custom internal administrative software, inventory control, and backend databases.' },
    { number: '09', title: 'System Integration', description: 'Structured REST and GraphQL Web APIs for legacy database migration.' },
    { number: '10', title: 'Analytics & Reporting', description: 'Privacy-focused server telemetry and real-time operational dashboarding.' },
  ];

  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24 pt-12 md:pt-16">
      {/* Header */}
      <section>
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              TECHNICAL SCOPE
            </Typography>
            <Typography variant="display" className="max-w-4xl tracking-[-0.035em]">
              Engineering Capabilities.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Grid of Capabilities */}
      <section>
        <Container size="normal">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.number}>
                <div className="p-8 rounded-[4px] border border-[var(--border-subtle)] bg-[#141414] hover:border-[var(--border-medium)] transition-colors flex flex-col justify-between gap-4 h-full">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-[var(--text-tertiary)] tracking-widest">
                      CAPABILITY // {cap.number}
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
