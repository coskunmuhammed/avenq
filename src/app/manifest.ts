import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AVENQ',
    short_name: 'AVENQ',
    description: 'Software built to endure. AVENQ builds software products, business platforms, and digital infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0B',
    theme_color: '#0B0B0B',
    categories: ['technology', 'software', 'productivity', 'business'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/brand/monogram-app-icon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
