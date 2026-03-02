# Raydrift Meta

SEO-first Astro components with Schema.org JSON-LD helpers.

## Structure

- `apps/web`: Astro site
- `packages/primitives`: Base primitives and SEO helpers

## Usage

### SEO Configuration

Run the CLI to scaffold the default configuration file in your app:

```bash
pnpm dlx @raydrift-meta/primitives init
```

This creates `src/seo.config.ts` in the current project. You can edit it to match your site.

If you prefer manual setup, create a `seo.config.ts` file in your app (e.g., `apps/web/src/seo.config.ts`) to define default SEO values:

```typescript
export const seoDefaults = {
  siteName: 'My Site',
  description: 'Default site description.',
  canonicalBase: 'https://example.com',
  image: {
    url: 'https://example.com/og-image.jpg',
    alt: 'Site logo',
    width: 1200,
    height: 630,
  },
  locale: 'en_US',
  type: 'website' as const,
  twitter: {
    card: 'summary_large_image' as const,
    site: '@mysite',
    creator: '@author',
  },
  noIndex: false,
};
```

Then add the path alias to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/seo.config": ["./src/seo.config.ts"]
    }
  }
}
```

If the config already lives at `src/seo.config.ts`, the CLI will skip creation.

### SEO Head

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import ArticleSchema from '@raydrift-meta/primitives/seo/ArticleSchema.astro';
---

<BaseLayout title="My Article" description="A great article about Astro.">
  <ArticleSchema
    slot="head"
    headline="My Article"
    authorName="Jane Doe"
    datePublished="2026-03-01"
  />
  <main>...</main>
</BaseLayout>
```

### Article Schema

```astro
---
import ArticleSchema from '@raydrift-meta/primitives/seo/ArticleSchema.astro';
---

<ArticleSchema
  headline="My Article"
  description="A great article about Astro."
  authorName="Jane Doe"
  datePublished="2026-03-01"
  dateModified="2026-03-02"
  canonicalUrl="https://example.com/blog/my-article"
  image="https://example.com/og-image.jpg"
  publisherName="Raydrift Meta"
  publisherLogo="https://example.com/logo.png"
/>
```

### FAQ Schema

```astro
---
import FAQSchema from '@raydrift-meta/primitives/seo/FAQSchema.astro';
---

<FAQSchema
  items={[
    {
      question: 'Does Raydrift Meta support Astro?',
      answer: 'Yes, every primitive is built for Astro.',
    },
    {
      question: 'Do I get JSON-LD out of the box?',
      answer: 'Yes, structured data is rendered automatically.',
    },
  ]}
/>
```

### Breadcrumbs

```astro
---
import Breadcrumbs from '@raydrift-meta/primitives/seo/Breadcrumbs.astro';
---

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'SEO', href: '/docs/seo' },
  ]}
/>
```

## Commands

| Command             | Action                         |
| :------------------ | :----------------------------- |
| `pnpm install`      | Installs dependencies          |
| `pnpm dev`          | Starts local dev server        |
| `pnpm build`        | Build production outputs       |
| `pnpm preview`      | Preview build locally          |
| `pnpm typecheck`    | Run typechecks across packages |
| `pnpm format`       | Format codebase                |
| `pnpm format:check` | Check formatting               |
