import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { generateOrganizationSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://avenq.pro'),
  title: {
    default: 'AVENQ — Building Digital Businesses.',
    template: '%s | AVENQ',
  },
  description:
    'AVENQ is a technology company focused on building software products, AI solutions, cloud infrastructure, automation systems and digital transformation platforms.',
  keywords: [
    'AVENQ',
    'Technology Company',
    'Digital Businesses',
    'Satkirala',
    'QR Menu',
    'Software Engineering',
    'AI Systems',
    'Cloud Infrastructure',
    'Enterprise Operating Systems',
  ],
  authors: [{ name: 'AVENQ' }],
  creator: 'AVENQ',
  publisher: 'AVENQ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avenq.pro',
    siteName: 'AVENQ',
    title: 'AVENQ — Building Digital Businesses.',
    description:
      'We build software, AI systems and digital infrastructure for ambitious companies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AVENQ — Building Digital Businesses.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVENQ — Building Digital Businesses.',
    description:
      'We build software, AI systems and digital infrastructure for ambitious companies.',
    images: ['/og-image.png'],
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

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
