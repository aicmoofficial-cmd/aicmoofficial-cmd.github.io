import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, url } from '../lib/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site }: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const link = (path: string) => new URL(url(path), site).href;
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${link(`/blog/${p.id}`)}</link>
      <guid>${link(`/blog/${p.id}`)}</guid>
      <description>${esc(p.data.description)}</description>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE.name)} blog</title>
    <link>${link('/blog')}</link>
    <description>Marketing playbooks for founders.</description>
    <language>en-in</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
