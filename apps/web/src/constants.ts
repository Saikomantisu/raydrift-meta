export const COMPANY_NAME = 'Raydrift Meta';

export const COMPANY_DESCRIPTION =
  'A library of Schema Elements for Astro. Make your website SEO friendly with structured data primitives like SEOHead, ArticleSchema, Breadcrumb, and FAQSchema.';

export const FOOTER_TAGLINE =
  'A library of Schema Elements built exclusively for Astro. We believe great SEO should be a core primitive — every element generates proper HTML5 semantics, Schema.org structured data, and accessibility compliance out of the box.';

export const COPYRIGHT_TEXT = {
  line1: 'Built with Astro. Designed for Schema-first SEO.',
  line2: 'Open source under MIT License.',
};

export const NAV_LINKS = [
  { label: 'Primitives', href: '/docs/primitives' },
  { label: 'Features', href: '/#features' },
  { label: 'Guides', href: '/docs' },
  { label: 'GitHub', href: '#' },
] as const;

export const FOOTER_LINK_GROUPS = [
  {
    title: 'Schema Elements',
    links: [
      { label: 'SEOHead', href: '/docs/seohead' },
      { label: 'ArticleSchema', href: '/docs/articleschema' },
      { label: 'Breadcrumb', href: '/docs/breadcrumbs' },
      { label: 'FAQSchema', href: '/docs/faqschema' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'GitHub Repository', href: '#' },
      { label: 'NPM Package', href: '#' },
      { label: 'Astro Integration', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord Server', href: '#' },
      { label: 'GitHub Issues', href: '#' },
    ],
  },
] as const;

export const SOCIAL_LINKS = {
  github: { href: '#', ariaLabel: 'GitHub' },
  discord: { href: '#', ariaLabel: 'Discord' },
} as const;
