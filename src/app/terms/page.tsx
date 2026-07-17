import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Terms of Service — AVENQ',
  description: 'AVENQ Terms of Service and platform guidelines.',
  alternates: {
    canonical: 'https://avenq.pro/terms',
  },
  openGraph: {
    title: 'Terms of Service — AVENQ',
    description: 'AVENQ Terms of Service and platform guidelines.',
    url: 'https://avenq.pro/terms',
  },
};

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Terms of Service', item: '/terms' },
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
            <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl">Terms of Service</Typography>
            <Typography variant="caption" muted>
              Effective Date: July 16, 2026 | Domain: https://avenq.pro
            </Typography>
          </div>

          <div className="flex flex-col gap-8 text-[var(--text-secondary)] text-sm leading-relaxed">
            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                1. Acceptable Use
              </Typography>
              <Typography variant="body" muted>
                By visiting <code>avenq.pro</code>, you agree to use the site for legitimate business inquiry and evaluation. Any attempts to compromise site availability or security are prohibited.
              </Typography>
            </section>

            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                2. Intellectual Property
              </Typography>
              <Typography variant="body" muted>
                The AVENQ wordmark, product descriptions for Satkirala and QR Menu, and website design assets belong to AVENQ.
              </Typography>
            </section>

            <section className="flex flex-col gap-3">
              <Typography variant="h3" className="text-xl text-[var(--text-primary)]">
                3. Disclaimer
              </Typography>
              <Typography variant="body" muted>
                This website is provided for informational purposes. Product specifications represent current platform capabilities and planned updates.
              </Typography>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
