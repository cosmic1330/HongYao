// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/HongYao/',
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
