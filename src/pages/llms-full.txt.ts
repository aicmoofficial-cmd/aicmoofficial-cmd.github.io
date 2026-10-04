import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, url } from '../lib/site';

// Every blog post in full, as Markdown, for AI assistants that read llms-full.txt (llmstxt.org).
export async function GET({ site }: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const body = [
    `# ${SITE.name}: full articles`,
    `> ${SITE.description}`,
    `Summary and product facts: ${new URL(url('/llms.txt'), site).href}`,
    ...posts.map((p) => `---\n\n## ${p.data.title}\n\nURL: ${new URL(url(`/blog/${p.id}`), site).href}\nPublished: ${p.data.date.toISOString().slice(0, 10)}\n\n${p.body ?? ''}`),
  ].join('\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
