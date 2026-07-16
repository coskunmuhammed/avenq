import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { CareersForm } from '@/components/careers/CareersForm';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Engineering culture and open career opportunities at AVENQ.',
  alternates: {
    canonical: 'https://avenq.pro/careers',
  },
};

export default function CareersPage() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24">
      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              TALENT & CULTURE
            </Typography>
            <Typography variant="display" className="max-w-4xl">
              Engineering at AVENQ.
            </Typography>
            <Typography variant="lead" muted className="max-w-2xl text-lg md:text-xl mt-2">
              We operate with small, focused engineering teams. We value autonomy, clear technical communication, and practical problem solving.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Cultural Foundations */}
      <section>
        <Container size="normal">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  01 / AUTONOMY
                </Typography>
                <Typography variant="h3">Total Ownership</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  Engineers own their code from design through testing to production deployment.
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  02 / RIGOR
                </Typography>
                <Typography variant="h3">Clean Architecture</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  We write readable, testable, and well-structured code. Maintainability is a priority.
                </Typography>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card variant="subtle" padding="lg" className="h-full flex flex-col gap-4">
                <Typography variant="mono" muted>
                  03 / FOCUS
                </Typography>
                <Typography variant="h3">Direct Execution</Typography>
                <Typography variant="body" muted className="leading-relaxed">
                  We minimize unnecessary meetings and focus on building functional products.
                </Typography>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Talent Submission Form */}
      <section>
        <Container size="narrow">
          <Card variant="bordered" padding="lg" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="mono" muted>
                TALENT NETWORK
              </Typography>
              <Typography variant="h2" className="text-2xl md:text-3xl">
                Submit Your Profile
              </Typography>
              <Typography variant="body" muted>
                We are interested in software engineers, designers, and systems architects. Share your work with us.
              </Typography>
            </div>

            <CareersForm />
          </Card>
        </Container>
      </section>
    </div>
  );
}
