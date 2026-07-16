import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { ProductShowcaseCard } from '@/components/product/ProductShowcaseCard';
import { RoadmapCard } from '@/components/product/RoadmapCard';
import { generateSoftwareSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Proprietary platforms engineered by AVENQ including Satkirala and QR Menu.',
  alternates: {
    canonical: 'https://avenq.pro/products',
  },
};

export default function ProductsPage() {
  const satkiralaSchema = generateSoftwareSchema(
    'Satkirala',
    'The operating system for the Turkish real estate industry.',
    'RealEstateApplication'
  );
  const qrMenuSchema = generateSoftwareSchema(
    'QR Menu',
    'A digital menu and restaurant operations platform.',
    'BusinessApplication'
  );

  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([satkiralaSchema, qrMenuSchema]) }}
      />

      {/* Header */}
      <section className="pt-12 md:pt-16">
        <Container size="normal" className="flex flex-col gap-4">
          <FadeIn>
            <Typography variant="mono" muted className="mb-2">
              PROPRIETARY PLATFORMS
            </Typography>
            <Typography variant="display" className="max-w-4xl">
              Products & Systems.
            </Typography>
            <Typography variant="lead" muted className="max-w-2xl text-lg md:text-xl mt-2">
              We build independent software products and platforms. Each product solves specific operational challenges through software engineering.
            </Typography>
          </FadeIn>
        </Container>
      </section>

      {/* Active Platforms */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-6">
            <Typography variant="mono" muted>
              ACTIVE PRODUCTS
            </Typography>
            <Typography variant="h2">Ecosystem Products</Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <ProductShowcaseCard
                id="satkirala"
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
                statusLabel="Active Platform"
              />
            </StaggerItem>

            <StaggerItem>
              <ProductShowcaseCard
                id="qrmenu"
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
                statusLabel="Active Platform"
              />
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Product Roadmap */}
      <section>
        <Container size="normal" className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 border-b border-[var(--border-subtle)] pb-6">
            <Typography variant="mono" muted>
              PLANNED DEVELOPMENT
            </Typography>
            <Typography variant="h2">Long-Term Roadmap</Typography>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <RoadmapCard
                title="AI Operations Helper"
                category="Automation Tools"
                targetTimeline="In Development"
                description="Internal tool to help automate routine system monitoring and cloud maintenance tasks."
              />
            </StaggerItem>

            <StaggerItem>
              <RoadmapCard
                title="Edge Compute Platform"
                category="Infrastructure"
                targetTimeline="In Development"
                description="Regional compute network for low-latency content distribution and database caching."
              />
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
