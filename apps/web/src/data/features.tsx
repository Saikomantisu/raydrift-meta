import {
  LinkIcon,
  DocumentIcon,
  FolderIcon,
  QuestionIcon,
  GridIcon,
} from '@/icons';
import type { Feature, FeatureColor, ColorClasses } from '@/types';

/**
 * Feature data for the landing page features section.
 * Used as a reference; the bento grid in FeaturesSection is hardcoded
 * for pixel-perfect layout control.
 */
export const features: Feature[] = [
  {
    id: 'seo-head',
    icon: <LinkIcon className="w-5 h-5" />,
    title: 'SEOHead',
    description:
      'Comprehensive meta tags, Open Graph, Twitter Cards, and Schema.org JSON-LD structured data.',
    color: 'cyan',
  },
  {
    id: 'article-schema',
    icon: <DocumentIcon className="w-5 h-5" />,
    title: 'ArticleSchema',
    description:
      'Complete Article and BlogPosting Schema.org markup for better search visibility.',
    color: 'yellow',
  },
  {
    id: 'breadcrumb',
    icon: <FolderIcon className="w-5 h-5" />,
    title: 'Breadcrumb',
    description:
      'Structured breadcrumb navigation with Schema.org BreadcrumbList markup.',
    color: 'emerald',
  },
  {
    id: 'faq-schema',
    icon: <QuestionIcon className="w-5 h-5" />,
    title: 'FAQSchema',
    description:
      'Accessible accordion with FAQPage Schema.org markup for rich search results.',
    color: 'orange',
  },
  {
    id: 'customizable',
    icon: <GridIcon className="w-5 h-5" />,
    title: 'Customisable',
    description:
      'Theme tokens, slot-friendly layouts, and props for complete control of schema output.',
    color: 'purple',
  },
];

/**
 * Color class mappings for feature cards.
 */
export const featureColorClasses: Record<FeatureColor, ColorClasses> = {
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
  },
  fuchsia: {
    bg: 'bg-fuchsia-500/10',
    text: 'text-fuchsia-400',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
  },
  orange: {
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
  },
};
