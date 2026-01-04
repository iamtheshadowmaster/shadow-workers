// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false
    }
  }),
});

