import type { ReactNode } from 'react';

/**
 * Color theme options for feature cards.
 */
export type FeatureColor =
  | 'cyan'
  | 'fuchsia'
  | 'yellow'
  | 'emerald'
  | 'orange'
  | 'purple';

/**
 * Feature item data structure.
 */
export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  color: FeatureColor;
}

/**
 * Navigation link structure.
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Footer link group structure.
 */
export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

/**
 * Social link with accessibility label.
 */
export interface SocialLink {
  href: string;
  ariaLabel: string;
}

/**
 * Copyright text structure.
 */
export interface CopyrightText {
  line1: string;
  line2: string;
}

/**
 * Color classes for feature cards.
 */
export interface ColorClasses {
  bg: string;
  text: string;
}
