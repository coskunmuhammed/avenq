import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo/schema';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B0B0B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://avenq.pro'),
  title: {
    default: 'AVENQ — Technology Company',
    template: '%s — AVENQ',
  },
  description:
    'AVENQ is a technology company building software products, business platforms, AI systems, and cloud infrastructure.',
  keywords: [
    'AVENQ',
    'AVENQ Technology',
    'Technology Company',
    'Satkirala',
    'QR Menu',
    'Mülkünühesapla',
    'Kastyörem',
    'Software Engineering',
    'AI Systems',
    'Cloud Infrastructure',
    'Enterprise Operating Systems',
  ],
  authors: [{ name: 'AVENQ', url: 'https://avenq.pro' }],
  creator: 'AVENQ',
  publisher: 'AVENQ',
  alternates: {
    canonical: 'https://avenq.pro',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avenq.pro',
    siteName: 'AVENQ',
    title: 'AVENQ — Technology Company',
    description:
      'Software built to endure. We build software products, business platforms, and digital infrastructure.',
    images: [
      {
        url: 'https://avenq.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVENQ — Technology Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVENQ — Technology Company',
    description:
      'Software built to endure. We build software products, business platforms, and digital infrastructure.',
    images: ['https://avenq.pro/og-image.png'],
    creator: '@avenq',
    site: '@avenq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-grow pt-16 sm:pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
