/**
 * SEO & Structured Data (JSON-LD) Generators for AVENQ
 */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AVENQ',
    url: 'https://avenq.pro',
    logo: 'https://avenq.pro/brand/avenq-mark.png',
    description: 'AVENQ is a technology company building digital products, AI solutions, cloud infrastructure, and software platforms.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Istanbul, Türkiye',
    },
    slogan: 'Building Digital Businesses.',
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Cloud Infrastructure',
      'Enterprise Operating Systems',
    ],
  };
}

export function generateSoftwareSchema(name: string, description: string, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    applicationCategory: category,
    operatingSystem: 'All Cloud & Web Environments',
    description: description,
    author: {
      '@type': 'Organization',
      name: 'AVENQ',
      url: 'https://avenq.pro',
    },
  };
}
