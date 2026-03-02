# raydrift-meta

SEO-first Astro primitives with Schema.org JSON-LD helpers.

## Install

```bash
pnpm add raydrift-meta
```

## Quick start

```bash
pnpm dlx raydrift-meta init
```

Creates `src/seo.config.ts` in your app. Add a path alias so components can read it:

```json
{
  "compilerOptions": {
    "paths": {
      "@/seo.config": ["./src/seo.config.ts"]
    }
  }
}
```

## Components

### SEO Head

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import SEOHead from 'raydrift-meta/seo/SEOHead.astro';
---

<BaseLayout>
  <SEOHead
    slot="head"
    title="My Article"
    description="A great article about Astro."
  />
  <main>...</main>
</BaseLayout>
```

### Article Schema

```astro
---
import ArticleSchema from 'raydrift-meta/seo/ArticleSchema.astro';
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
import FAQSchema from 'raydrift-meta/seo/FAQSchema.astro';
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
import Breadcrumbs from 'raydrift-meta/seo/Breadcrumbs.astro';
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

| Command          | Action                         |
| :--------------- | :----------------------------- |
| `pnpm typecheck` | Run typechecks across packages |
