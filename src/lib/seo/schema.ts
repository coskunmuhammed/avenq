/**
 * SEO & Structured Data (JSON-LD) Generators for AVENQ Brand Entity
 */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://avenq.pro/#organization',
    name: 'AVENQ',
    legalName: 'AVENQ Technology',
    url: 'https://avenq.pro',
    logo: {
      '@type': 'ImageObject',
      url: 'https://avenq.pro/assets/brand/wordmark-horizontal.svg',
      width: '512',
      height: '512',
    },
    image: 'https://avenq.pro/og-image.png',
    description: 'AVENQ is a technology company building software products, business platforms, AI systems, and cloud infrastructure.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Istanbul, Türkiye',
    },
    slogan: 'Software built to endure.',
    email: 'contact@avenq.pro',
    sameAs: [
      'https://github.com/coskunmuhammed/avenq',
      'https://linkedin.com/company/avenq',
      'https://x.com/avenq',
      'https://instagram.com/avenq',
    ],
    knowsAbout: [
      'Software Engineering',
      'Artificial Intelligence',
      'Cloud Infrastructure',
      'Enterprise Operating Systems',
      'Real Estate Technology',
      'Hospitality Software',
      'Digital Commerce Platforms',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://avenq.pro/#website',
    url: 'https://avenq.pro',
    name: 'AVENQ',
    description: 'Software built to endure. AVENQ builds software products, business platforms, and digital infrastructure.',
    publisher: {
      '@id': 'https://avenq.pro/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://avenq.pro/docs?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((el, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: el.name,
      item: el.item.startsWith('http') ? el.item : `https://avenq.pro${el.item}`,
    })),
  };
}

export function generateSoftwareSchema(name: string, description: string, category: string, url?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    applicationCategory: category,
    operatingSystem: 'All Cloud & Web Environments',
    description: description,
    url: url || 'https://avenq.pro/products',
    author: {
      '@id': 'https://avenq.pro/#organization',
    },
    publisher: {
      '@id': 'https://avenq.pro/#organization',
    },
  };
}

export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://avenq.pro/about/#webpage',
    url: 'https://avenq.pro/about',
    name: 'About AVENQ',
    description: 'An engineering company built around products and designed for longevity.',
    isPartOf: {
      '@id': 'https://avenq.pro/#website',
    },
    about: {
      '@id': 'https://avenq.pro/#organization',
    },
  };
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://avenq.pro/contact/#webpage',
    url: 'https://avenq.pro/contact',
    name: 'Contact AVENQ',
    description: 'Initiate direct engineering and product inquiries with AVENQ leadership.',
    isPartOf: {
      '@id': 'https://avenq.pro/#website',
    },
    mainEntity: {
      '@id': 'https://avenq.pro/#organization',
    },
  };
}

export function generateCollectionPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://avenq.pro${url}/#webpage`,
    url: `https://avenq.pro${url}`,
    name: title,
    description: description,
    isPartOf: {
      '@id': 'https://avenq.pro/#website',
    },
  };
}
