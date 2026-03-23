export {
  SEOHead,
  ArticleSchema,
  FAQSchema,
  Breadcrumbs,
} from './components/seo';
export type {
  SEOImage,
  SEOTwitter,
  AlternateLang,
  SEOHeadProps,
  ArticleSchemaProps,
  FAQItem,
  FAQSchemaProps,
  BreadcrumbItem,
  BreadcrumbsProps,
} from './components/seo';
export { toJsonLd } from './lib/seo';
export {
  createSEOConfig,
  defaultSEO,
  seoDefaults,
  type SEOConfig,
  type SEOConfigOptions,
  type SEODefaults,
} from './seo.config';
