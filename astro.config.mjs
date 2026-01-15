// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), mdx(), icon(), react({
    include: ['**/react/*', '**/FaultyTerminal.jsx']
  })],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false
    }
  }),
});