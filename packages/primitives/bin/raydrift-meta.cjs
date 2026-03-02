#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const defaultConfig = `export const seoDefaults = {
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
`;

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === '--help' || command === '-h') {
  console.log('Usage: raydrift-meta init');
  process.exit(0);
}

if (command !== 'init') {
  console.error(`Unknown command: ${command}`);
  process.exit(1);
}

const target = path.join(process.cwd(), 'src', 'seo.config.ts');

if (fs.existsSync(target)) {
  console.log(`seo.config.ts already exists at ${target}`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, defaultConfig, 'utf8');
console.log(`Created ${target}`);
