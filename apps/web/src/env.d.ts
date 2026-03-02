/// <reference types="astro/client" />

declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server';
  const component: AstroComponentFactory;
  export default component;
}

declare module 'raydrift-meta/seo/*' {
  import type { AstroComponentFactory } from 'astro/runtime/server';
  const component: AstroComponentFactory;
  export default component;
}
