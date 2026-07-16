import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { CapabilityBlock } from '@/components/solution/CapabilityBlock';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'AVENQ engineering capabilities: AI Systems, Software Engineering, Cloud Infrastructure, Automation, Digital Transformation, Cybersecurity, IT Operations.',
  alternates: {
    canonical: 'https://avenq.pro/solutions',
  },
};

export default function SolutionsPage() {
  const capabilities = [
    {
      number: '01',
      title: 'AI Solutions',
      description: 'Practical artificial intelligence tools for text processing, data analysis, and workflow automation.',
      outcomes: ['Language model integration', 'Document parsing', 'Workflow automation'],
    },
    {
      number: '02',
      title: 'Software Engineering',
      description: 'Custom web application development, API design, and structured software architecture.',
      outcomes: ['Web applications', 'Structured REST/GraphQL APIs', 'Modular codebases'],
    },
    {
      number: '03',
      title: 'Cloud Infrastructure',
      description: 'Cloud deployment, containerized hosting, and server management.',
      outcomes: ['Cloud server setup', 'Automated deployments', 'Uptime monitoring'],
    },
    {
      number: '04',
      title: 'Automation Systems',
      description: 'Process automation, data synchronization pipelines, and system integrations.',
      outcomes: ['Data pipelines', 'API integrations', 'Task automation'],
    },
    {
      number: '05',
      title: 'Digital Transformation',
      description: 'Updating legacy software systems and migrating databases to modern cloud platforms.',
      outcomes: ['Database migration', 'Monolith refactoring', 'UI modernization'],
    },
    {
      number: '06',
      title: 'Cybersecurity',
      description: 'Security reviews, access control policies, data protection, and SSL/TLS configuration.',
      outcomes: ['Security audits', 'Access control setup', 'Data encryption'],
    },
    {
      number: '07',
      title: 'IT Operations',
      description: 'System health monitoring, backup management, and incident response.',
      outcomes: ['Server health telemetry', 'Automated backups', 'Incident logging'],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24">
      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              TECHNICAL CAPABILITIES
            </Typography>
            <Typography variant="display" className="max-w-4xl">
              Engineering Capabilities.
            </Typography>
            <Typography variant="lead" muted className="max-w-2xl text-lg md:text-xl mt-2">
              We present our technical work as engineering capabilities focused on building reliable digital products.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Grid of Capabilities */}
      <section>
        <Container size="normal">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.number}>
                <CapabilityBlock
                  number={cap.number}
                  title={cap.title}
                  description={cap.description}
                  outcomes={cap.outcomes}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
