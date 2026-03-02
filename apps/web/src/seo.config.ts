export const seoDefaults = {
  siteName: 'Raydrift Meta',
  description:
    'A semantic component library for Astro. Build websites with incredible SEO performance through proper HTML5 semantics, Schema.org structured data, and accessibility built-in.',
  canonicalBase: 'https://raydrift-meta.com',
  image: {
    url: 'https://raydrift-meta.com/og/cover.png',
    alt: 'Raydrift Meta SEO-first Astro components',
    width: 1200,
    height: 630,
  },
  locale: 'en_US',
  type: 'website' as const,
  twitter: {
    card: 'summary_large_image' as const,
    site: '@raydriftmeta',
    creator: '@raydriftmeta',
  },
  noIndex: false,
};
