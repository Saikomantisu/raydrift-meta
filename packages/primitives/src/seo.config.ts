export interface SEODefaults {
  siteName?: string;
  description?: string;
  canonicalBase?: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  locale?: string;
  type?: 'website' | 'article';
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    site?: string;
    creator?: string;
  };
  noIndex?: boolean;
}

export const defaultSEO: SEODefaults = {
  siteName: undefined,
  description: undefined,
  canonicalBase: undefined,
  image: undefined,
  locale: 'en_US',
  type: 'website',
  twitter: undefined,
  noIndex: false,
};

export const seoDefaults: SEODefaults = defaultSEO;
