// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), partytown({ config: { forward: ['dataLayer.push'] } })],
  output: 'server',
  adapter: vercel(),
});

