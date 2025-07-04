// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cosmic1330.github.io',
  base: '/HongYao',
  outDir: 'docs',
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
