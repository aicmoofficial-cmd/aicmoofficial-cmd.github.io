import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { CREDIT_COSTS, PLANS, SITE, url } from '../lib/site';

// A plain-text summary for AI assistants and answer engines (llmstxt.org).
export async function GET({ site }: APIContext) {
  const link = (p: string) => new URL(url(p), site).href;
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const body = `# ${SITE.name}

> ${SITE.description}

AICMO is an AI Chief Marketing Officer for startups, D2C/Shopify brands and agencies, built in India with prices in INR.

## What it does
- Brand Brain: reads the brand's website to learn voice, audience, products, offers and competitors; imports Shopify products and prices.
- Strategy: positioning, messaging pillars and a weekly posting cadence per channel.
- Content: writes posts per channel, with product photo cards, AI images or uploads.
- Fact check: discount codes, prices, percentages, deadlines and names are checked against the brand's own sources before publishing.
- Approvals and autonomy: suggest only, ask before posting, or full autopilot per channel, with a kill switch.
- Publishing: Instagram, Facebook Pages, LinkedIn, X, Bluesky, Mastodon, Telegram, Discord, Slack.
- Measurement: reads likes, comments, shares, saves and reach per post and feeds results into the next plan.
- Growth tools: tracked links and app installs, review replies, competitor watch, growth experiments, strategy documents.

## Pricing (INR per month, excluding GST; 7-day trial, card or UPI Autopay)
${PLANS.map((p) => `- ${p.name}: ₹${p.price} (${p.credits} credits/month; ₹${p.annual}/year)`).join('\n')}
- Credits: ${CREDIT_COSTS.map(([a, c]) => `${a} = ${c}`).join('; ')}

## Pages
- [Home](${link('/')})
- [Pricing](${link('/pricing')})
- [For D2C & Shopify brands](${link('/for/d2c-brands')})
- [For startups & apps](${link('/for/startups')})
- [For agencies](${link('/for/agencies')})
${posts.map((p) => `- [${p.data.title}](${link(`/blog/${p.id}`)})`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
