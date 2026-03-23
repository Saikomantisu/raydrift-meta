# raydrift-meta

## 0.4.0

### Minor Changes

- New Features
  - **SEOHead Component**: Added 8 new props for enhanced SEO control:
    - `viewport` - customizable viewport meta (default: `width=device-width,initial-scale=1`)
    - `themeColor` - mobile browser theme color
    - `keywords` - meta keywords (comma-joined array)
    - `alternateLangs` - hreflang alternate links with automatic `x-default`
    - `prevUrl` / `nextUrl` - pagination rel links
    - `publishedTime` / `modifiedTime` - article date meta (when `type="article"`)
    - `config` - accept configuration from `createSEOConfig()` factory
  - **Configuration Factory**: New `createSEOConfig()` function with:
    - Environment-based defaults (`env: 'auto' | 'development' | 'production'`)
    - Automatic `noIndex: true` in development mode
    - URL validation for `canonicalBase` and `image.url`
    - Twitter handle validation (requires `@` prefix)
  - **Type Exports**: All component prop types now exported:
    - `SEOHeadProps`, `SEOImage`, `SEOTwitter`, `AlternateLang`
    - `ArticleSchemaProps`
    - `FAQSchemaProps`, `FAQItem`
    - `BreadcrumbsProps`, `BreadcrumbItem`

  Documentation
  - Added `/docs/seo-config` page documenting the configuration factory
  - Updated `/docs/seohead` with new props and usage examples

## 0.3.0

### Minor Changes

- d70cf86: remove github actions

## 0.2.2

### Patch Changes

- 26b80f9: updated workflow for github

## 0.2.1

### Patch Changes

- 3fbc0be: updated the github workflow

## 0.2.0

### Minor Changes

- 86bb81b: update package name to raydrift-meta
