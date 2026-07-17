import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy — AVENQ',
  description: 'AVENQ Privacy Policy and Data Protection standard.',
  alternates: {
    canonical: 'https://avenq.pro/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — AVENQ',
    description: 'AVENQ Privacy Policy and Data Protection standard.',
    url: 'https://avenq.pro/privacy',
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Privacy Policy', item: '/privacy' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full py-12 md:py-24">
        <Container size="narrow" className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-8">
            <Typography variant="mono" muted>
              LEGAL INFORMATION
            </Typography>
            <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl">Privacy Policy</Typography>
            <Typography variant="caption" muted>
              Effective Date: July 16, 2026 | Domain: https://avenq.pro
            </Typography>
          </div>

          <div className="flex flex-col gap-8 text-[var(--text-secondary)] text-sm leading-relaxed">
            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                1. Data Minimization
              </Typography>
              <Typography variant="body" muted>
                AVENQ operates under strict data minimization principles. We do not sell personal data or use invasive cross-site tracking algorithms on <code>avenq.pro</code>.
              </Typography>
            </section>

            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                2. Information Collected
              </Typography>
              <Typography variant="body" muted>
                When you submit contact or career forms on <code>avenq.pro</code>, we collect only the details you provide (Name, Email, Organization, Message). This information is used solely to respond to your inquiry.
              </Typography>
            </section>

            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                3. Data Security
              </Typography>
              <Typography variant="body" muted>
                All web traffic to <code>avenq.pro</code> is encrypted using standard TLS protocol. Data submitted via forms is restricted to authorized personnel.
              </Typography>
            </section>

            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                4. Contact for Privacy Inquiries
              </Typography>
              <Typography variant="body" muted>
                For questions regarding our privacy practices, contact us at <code>contact@avenq.pro</code>.
              </Typography>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
