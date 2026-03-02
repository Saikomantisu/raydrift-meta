import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fastContainerVariants, cardVariants } from '@/lib/animations';
import {
  LinkIcon,
  DocumentIcon,
  FolderIcon,
  QuestionIcon,
  GridIcon,
} from '@/icons';

function BentoCard({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <motion.article
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-stone-700 ${className}`}
      tabIndex={0}
      aria-labelledby={`feature-${id}-title`}
      aria-describedby={`feature-${id}-desc`}
    >
      {/* hover glow blobs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/4 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/4 blur-2xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.article>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      className="py-32 border-t border-stone-800"
      aria-labelledby="features-title"
    >
      <div className="rd-container">
        <div className="max-w-3xl mb-16">
          <h2
            id="features-title"
            className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-4"
          >
            Features
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
            <span className="font-display">Built for SEO Excellence</span>
          </p>
          <p className="text-lg text-stone-400 mt-4 leading-relaxed">
            Every component generates semantic HTML5 with proper ARIA labels,
            Schema.org structured data, and accessibility built-in.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={fastContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[240px_220px_180px]"
          style={{
            gridTemplateAreas: `
              "seo      seo      article"
              "faq      bread    article"
              "custom   custom   custom"
            `,
          }}
        >
          {/* ── SEOHead ─ wide top-left ─────────────────────── */}
          <BentoCard
            id="seo-head"
            className="[grid-area:seo] max-md:[grid-area:unset]"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-150 group-hover:rotate-[5deg] group-hover:scale-110"
              aria-hidden="true"
            >
              <LinkIcon className="h-5 w-5 text-cyan-400" />
            </div>
            <h3
              id="feature-seo-head-title"
              className="font-display mb-2 text-lg font-semibold text-white"
            >
              SEOHead
            </h3>
            <p
              id="feature-seo-head-desc"
              className="text-sm leading-relaxed text-stone-400"
            >
              Comprehensive meta tags, Open Graph, Twitter Cards, and Schema.org
              JSON-LD structured data in a single drop-in component.
            </p>
          </BentoCard>

          {/* ── ArticleSchema ─ tall right column ──────────── */}
          <BentoCard
            id="article-schema"
            className="[grid-area:article] max-md:[grid-area:unset] lg:row-span-2"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 transition-all duration-150 group-hover:rotate-[5deg] group-hover:scale-110"
              aria-hidden="true"
            >
              <DocumentIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <h3
              id="feature-article-schema-title"
              className="font-display mb-2 text-lg font-semibold text-white"
            >
              ArticleSchema
            </h3>
            <p
              id="feature-article-schema-desc"
              className="text-sm leading-relaxed text-stone-400"
            >
              Complete Article and BlogPosting Schema.org markup for better
              search visibility and rich results.
            </p>
            <div
              className="mt-auto rounded-xl border border-stone-800/60 bg-stone-950/80 p-4 font-mono text-[11px] leading-[1.6] text-stone-500"
              aria-hidden="true"
            >
              <div><span className="text-yellow-400/70">{'<'}</span><span className="text-cyan-400/70">ArticleSchema</span></div>
              <div>{'  '}<span className="text-purple-400/70">headline</span><span className="text-stone-600">=</span><span className="text-emerald-400/70">"My Post"</span></div>
              <div>{'  '}<span className="text-purple-400/70">authorName</span><span className="text-stone-600">=</span><span className="text-emerald-400/70">"Jane"</span></div>
              <div>{'  '}<span className="text-purple-400/70">datePublished</span><span className="text-stone-600">=</span><span className="text-emerald-400/70">"2026-03-01"</span></div>
              <div>{'  '}<span className="text-purple-400/70">image</span><span className="text-stone-600">=</span><span className="text-emerald-400/70">"/cover.png"</span></div>
              <div>{'  '}<span className="text-purple-400/70">publisherName</span><span className="text-stone-600">=</span><span className="text-emerald-400/70">"Acme"</span></div>
              <div><span className="text-yellow-400/70">{'/>'}</span></div>
            </div>
          </BentoCard>

          {/* ── FAQSchema ─ middle-left ────────────────────── */}
          <BentoCard
            id="faq-schema"
            className="[grid-area:faq] max-md:[grid-area:unset]"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 transition-all duration-150 group-hover:rotate-[5deg] group-hover:scale-110"
              aria-hidden="true"
            >
              <QuestionIcon className="h-5 w-5 text-orange-400" />
            </div>
            <h3
              id="feature-faq-schema-title"
              className="font-display mb-2 text-lg font-semibold text-white"
            >
              FAQSchema
            </h3>
            <p
              id="feature-faq-schema-desc"
              className="text-sm leading-relaxed text-stone-400"
            >
              Accessible accordion with FAQPage Schema.org markup for rich
              search results.
            </p>
          </BentoCard>

          {/* ── Breadcrumb ─ middle-center ─────────────────── */}
          <BentoCard
            id="breadcrumb"
            className="[grid-area:bread] max-md:[grid-area:unset]"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 transition-all duration-150 group-hover:rotate-[5deg] group-hover:scale-110"
              aria-hidden="true"
            >
              <FolderIcon className="h-5 w-5 text-emerald-400" />
            </div>
            <h3
              id="feature-breadcrumb-title"
              className="font-display mb-2 text-lg font-semibold text-white"
            >
              Breadcrumb
            </h3>
            <p
              id="feature-breadcrumb-desc"
              className="text-sm leading-relaxed text-stone-400"
            >
              Structured breadcrumb navigation with Schema.org BreadcrumbList
              markup.
            </p>
          </BentoCard>

          {/* ── Customisable ─ full-width bottom ───────────── */}
          <BentoCard
            id="customizable"
            className="[grid-area:custom] max-md:[grid-area:unset]"
          >
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 transition-all duration-150 group-hover:rotate-[5deg] group-hover:scale-110"
              aria-hidden="true"
            >
              <GridIcon className="h-5 w-5 text-purple-400" />
            </div>
            <h3
              id="feature-customizable-title"
              className="font-display mb-2 text-lg font-semibold text-white"
            >
              Customisable
            </h3>
            <p
              id="feature-customizable-desc"
              className="text-sm leading-relaxed text-stone-400"
            >
              Theme tokens, slot-friendly layouts, and props for complete
              control of schema output. Override defaults, inject your own
              markup, or compose primitives into higher-level components.
            </p>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
