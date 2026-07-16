import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Initiate direct engineering and product inquiries with AVENQ leadership.',
  alternates: {
    canonical: 'https://avenq.pro/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-28 pb-24">
      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              DIRECT INQUIRIES
            </Typography>
            <Typography variant="display" className="max-w-4xl">
              Contact Leadership.
            </Typography>
            <Typography variant="lead" muted className="max-w-2xl text-lg md:text-xl mt-2">
              Reach out directly to AVENQ engineering leadership regarding product inquiries or technical requirements.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Main Grid */}
      <section>
        <Container size="normal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Info Box */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Card variant="subtle" padding="lg" className="flex flex-col gap-6">
                <div>
                  <Typography variant="mono" muted className="mb-2">
                    BUSINESS EMAIL
                  </Typography>
                  <a
                    href="mailto:contact@avenq.pro"
                    className="text-xl md:text-2xl font-medium text-[var(--text-primary)] hover:underline tracking-tight min-h-[44px] inline-flex items-center"
                  >
                    contact@avenq.pro
                  </a>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                  <Typography variant="mono" muted>
                    LOCATION & ORIGIN
                  </Typography>
                  <Typography variant="body">Istanbul, Türkiye</Typography>
                  <Typography variant="caption" muted>
                    Built in Türkiye. Designed for the world.
                  </Typography>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                  <Typography variant="mono" muted>
                    RESPONSE COMMITMENT
                  </Typography>
                  <Typography variant="body" muted className="text-sm">
                    Direct response within 24 hours.
                  </Typography>
                </div>
              </Card>
            </div>

            {/* Form Box */}
            <div className="lg:col-span-7">
              <Card variant="bordered" padding="lg">
                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
