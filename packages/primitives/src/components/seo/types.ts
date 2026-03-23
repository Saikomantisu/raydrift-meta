export interface SEOImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface SEOTwitter {
  card?: 'summary' | 'summary_large_image';
  site?: string;
  creator?: string;
}

export interface AlternateLang {
  lang: string;
  url: string;
}

export interface SEOHeadProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  siteName?: string;
  image?: SEOImage;
  locale?: string;
  type?: 'website' | 'article';
  twitter?: SEOTwitter;
  noIndex?: boolean;
  viewport?: string;
  themeColor?: string;
  keywords?: string[];
  alternateLangs?: AlternateLang[];
  prevUrl?: string;
  nextUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  config?: import('../../seo.config').SEODefaults;
}

export interface ArticleSchemaProps {
  headline: string;
  description?: string;
  image?: string | string[];
  authorName: string | string[];
  datePublished: string;
  dateModified?: string;
  publisherName?: string;
  publisherLogo?: string;
  canonicalUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaProps {
  items: FAQItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
