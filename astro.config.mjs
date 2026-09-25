// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL: the public address (custom domain or https://<user>.github.io). BASE_PATH: "/" for a custom
// domain or a <user>.github.io repo, "/<repo>" for a project page. Both are set by the deploy workflow.
const site = process.env.SITE_URL || 'https://aicmoofficial-cmd.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
