// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [
        function remarkWrapTables() {
          return (tree) => {
            tree.children = tree.children.map((node) => {
              if (node.type === 'table') {
                return {
                  type: 'mdxJsxFlowElement',
                  name: 'div',
                  attributes: [
                    {
                      type: 'mdxJsxAttribute',
                      name: 'class',
                      value: 'table-wrap',
                    },
                  ],
                  children: [node],
                };
              }
              return node;
            });
          };
        },
        function remarkCodeMetadata() {
          return (tree) => {
            tree.children = tree.children.map((node) => {
              if (node.type === 'code' && node.meta) {
                const filenameMatch = node.meta.match(/filename="([^"]+)"/);
                if (filenameMatch) {
                  node.meta = node.meta.replace(filenameMatch[0], '').trim();
                  node.data ||= {};
                  node.data.hProperties ||= {};
                  node.data.hProperties['data-filename'] = filenameMatch[1];
                }
              }
              return node;
            });
          };
        },
      ],
    }),
  ],
});
