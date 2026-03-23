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
  viewport?: string;
  themeColor?: string;
  keywords?: string[];
}

export interface SEOConfigOptions extends Partial<SEODefaults> {
  validate?: boolean;
  env?: 'development' | 'production' | 'auto';
}

export interface SEOConfig extends SEODefaults {
  _validated: boolean;
  _environment: 'development' | 'production';
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
  viewport: undefined,
  themeColor: undefined,
  keywords: undefined,
};

function detectEnvironment(): 'development' | 'production' {
  try {
    if (import.meta.env?.PROD) return 'production';
    if (import.meta.env?.DEV) return 'development';
    if (import.meta.env?.MODE === 'production') return 'production';
    return 'development';
  } catch {
    return 'development';
  }
}

function validateConfig(options: SEOConfigOptions): void {
  if (options.validate === false) return;

  if (options.canonicalBase) {
    try {
      const url = new URL(options.canonicalBase);
      if (!['http:', 'https:'].includes(url.protocol)) {
        throw new Error(`Invalid protocol: ${url.protocol}`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Invalid URL';
      throw new Error(
        `Invalid canonicalBase URL: "${options.canonicalBase}". ${message}. Must be a valid absolute URL with http:// or https:// protocol.`
      );
    }
  }

  if (options.image?.url) {
    try {
      new URL(options.image.url);
    } catch {
      throw new Error(
        `Invalid image URL: "${options.image.url}". Must be a valid absolute or relative URL.`
      );
    }
  }

  if (options.twitter?.site && !options.twitter.site.startsWith('@')) {
    throw new Error(
      `Invalid twitter.site: "${options.twitter.site}". Must start with @ (e.g., @username).`
    );
  }
}

export function createSEOConfig(options: SEOConfigOptions = {}): SEOConfig {
  const env = options.env === 'auto' || options.env === undefined
    ? detectEnvironment()
    : options.env;

  validateConfig(options);

  const { validate: _, env: __, ...seoDefaults } = options;

  return {
    ...defaultSEO,
    ...seoDefaults,
    noIndex: options.noIndex ?? env === 'development',
    _validated: options.validate !== false,
    _environment: env,
  };
}

export const seoDefaults: SEODefaults = defaultSEO;
