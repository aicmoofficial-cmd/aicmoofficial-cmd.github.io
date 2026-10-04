// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

// SITE_URL: the public address (custom domain or https://<user>.github.io). BASE_PATH: "/" for a custom
// domain or a <user>.github.io repo, "/<repo>" for a project page. Both are set by the deploy workflow.
const site = process.env.SITE_URL || 'https://admobot.com';
const base = process.env.BASE_PATH || '/';

// Last-modified date per blog post (front matter `updated`, else `date`) for the sitemap.
const postDates = Object.fromEntries(
  readdirSync('src/content/blog')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const head = readFileSync(`src/content/blog/${f}`, 'utf8').split('---')[1] ?? '';
      const pick = (k) => head.match(new RegExp(`^${k}:\\s*'?"?([0-9-]+)`, 'm'))?.[1];
      const d = pick('updated') ?? pick('date');
      return [f.replace(/\.md$/, ''), d ? new Date(d).toISOString() : undefined];
    }),
);

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // Blog posts carry their own date; everything else is stamped with the build date.
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/?$/)?.[1];
        const meta = slug ? postDates[slug] : undefined;
        return { ...item, lastmod: meta ?? new Date().toISOString() };
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
