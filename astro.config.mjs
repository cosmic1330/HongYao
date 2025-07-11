// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmic1330.github.io/HongYao/',
  base: '/HongYao/',
  outDir: 'docs',
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Removed additionalData as it caused @use rule order issues
        },
      },
    },
  },
});
