import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CREDIT_COSTS, PLANS, SITE, url } from '../lib/site';
import { COMING_NEXT, STAGES } from '../lib/platform';
import { FAQ } from '../lib/faq';

// A plain-text summary for AI assistants and answer engines (llmstxt.org).
export async function GET({ site }: APIContext) {
  const link = (p: string) => new URL(url(p), site).href;
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const body = `# ${SITE.name}

> ${SITE.description}

AdMobot is an all-in-one AI Chief Marketing Officer for startups, D2C/Shopify brands and agencies, built in India with prices in INR. It is not only a social media scheduler: it covers research, analysis, planning, creation, publishing, measurement and comparison.

## What it does
${STAGES.map((s) => `### ${s.name}: ${s.verb}\n${s.summary}\n${s.tools.map(([t, b]) => `- ${t}: ${b}`).join('\n')}`).join('\n\n')}

### Coming next (not available yet)
${COMING_NEXT.map(([t, b]) => `- ${t}: ${b}`).join('\n')}

## Questions and answers
${FAQ.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Pricing (INR per month${SITE.gstPercent ? ', excluding GST' : ''}; 7-day trial, card or UPI Autopay)
${PLANS.map((p) => `- ${p.name}: ₹${p.price} (${p.credits} credits/month; ₹${p.annual}/year)`).join('\n')}
- Credits: ${CREDIT_COSTS.map(([a, c]) => `${a} = ${c}`).join('; ')}

## Pages
- [Home](${link('/')})
- [Platform](${link('/platform')})
- [Pricing](${link('/pricing')})
- [For D2C & Shopify brands](${link('/for/d2c-brands')})
- [For startups & apps](${link('/for/startups')})
- [For agencies](${link('/for/agencies')})
${posts.map((p) => `- [${p.data.title}](${link(`/blog/${p.id}`)}): ${p.data.description}`).join('\n')}

## Contact
- Website: ${link('/')}
- Email: ${SITE.contactEmail}
- Built and managed by: ${SITE.company.name} (${SITE.company.url})
- Contact page: ${link('/contact')}
- Cancellation and refunds: ${link('/refund-policy')}
- Full text of the blog for AI assistants: ${link('/llms-full.txt')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
