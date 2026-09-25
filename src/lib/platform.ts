/**
 * What AICMO does, grouped by the marketing loop. Shared by the home page, /platform and llms.txt.
 * Only list what the app really does today; unbuilt modules go in COMING_NEXT.
 */
export interface Stage {
  id: string;
  name: string;
  verb: string;
  summary: string;
  icon: string;
  tools: [string, string][];
}

export const STAGES: Stage[] = [
  {
    id: 'research',
    name: 'Research',
    verb: 'Know your market',
    summary: 'Learns your brand from your website and keeps watch on competitors and the conversations your customers are having.',
    icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
    tools: [
      ['Brand Brain', 'Reads your website to learn your voice, audience, products, offers and competitors. Shopify stores bring their catalogue and prices.'],
      ['Competitor watch', "Tracks competitors' websites and alerts you when their pricing, offers or messaging change."],
      ['Conversation radar', 'Finds what people are saying about your space on Reddit, Hacker News and Mastodon, so you post about what your market cares about.'],
      ['Website health', "Speed, SEO and accessibility scores for your site from Google PageSpeed, with the fixes that matter most."],
      ['App store listings', 'Reads your Google Play and App Store listings and reviews to understand how your app is presented and received.'],
    ],
  },
  {
    id: 'analyze',
    name: 'Analyze',
    verb: 'Find what matters',
    summary: 'Turns reviews, post results and competitor moves into plain-English insights you can act on.',
    icon: 'M4 19h16M7 15l3-4 3 2 4-6',
    tools: [
      ['Review analysis', 'Sentiment and recurring themes across your app store reviews: what customers love, and what they keep asking for.'],
      ['Daily insights', 'Your AI CMO reviews what was published and how it performed, and writes up what to do more and less of.'],
      ['App store optimization', 'Rewrites for your Google Play and App Store listings: title, description and keywords, based on your reviews and competitors.'],
      ['Brand & compliance audit', 'Checks your content against your brand guardrails and flags risky claims before they go out.'],
    ],
  },
  {
    id: 'plan',
    name: 'Plan',
    verb: 'Decide what to do',
    summary: 'Writes your marketing strategy and the playbooks to execute it, grounded in your own brand and data.',
    icon: 'M4 6h16M4 12h10M4 18h7',
    tools: [
      ['Marketing strategy', 'Positioning, ideal customer, messaging pillars, a 90-day roadmap and a posting cadence for each channel.'],
      ['Campaign planning', '“Plan next week around our summer collection” — tell your AI CMO the goal and it fills the calendar.'],
      ['20+ ready playbooks', 'Launch plans, referral programmes, pricing experiments, WhatsApp broadcasts, festival calendars, partnership pitches, press kits, pitch decks and investor updates.'],
      ['Ad campaign plans', 'Audiences, angles and creative briefs for app-install and competitor counter-campaigns, ready for your ads account.'],
    ],
  },
  {
    id: 'create',
    name: 'Create',
    verb: 'Make the content',
    summary: 'Writes and designs on-brand content for every channel, fact-checked against your own sources.',
    icon: 'M4 20l4-1 11-11-3-3L5 16l-1 4Z',
    tools: [
      ['Posts for every channel', 'Channel-native copy for Instagram, LinkedIn, X and more, written from your Brand Brain.'],
      ['Product photo cards', 'Your real product photos turned into branded post images with name and price. Or AI images, or your own uploads.'],
      ['Repurposing', 'Paste a blog post, changelog or announcement and get ready posts for every channel at once.'],
      ['Review replies', 'Drafted replies to app store reviews in your voice, ready for you to send.'],
      ['Scripts & templates', 'UGC video scripts, podcast and long-form outlines, customer surveys and case-study templates.'],
      ['Fact check', 'Prices, discount codes, deadlines and names are checked against your website, notes and catalogue before anything is published.'],
    ],
  },
  {
    id: 'publish',
    name: 'Publish',
    verb: 'Ship it on time',
    summary: 'Schedules and publishes across your channels, with as much or as little approval as you want.',
    icon: 'M5 12h14M12 5l7 7-7 7',
    tools: [
      ['9 channels', 'Instagram, Facebook, LinkedIn, X, Bluesky, Mastodon, Telegram, Discord and Slack, with one-click sign-in for the big four.'],
      ['Content calendar', 'Every planned, scheduled and published post in one view.'],
      ['Approval inbox', 'Approve, edit or reject each post from your phone, with the reason it was written.'],
      ['Autopilot with guardrails', 'Suggest only, ask first, or full auto per channel. Auto-publishing needs a passing brand score and fact check, and a kill switch stops everything.'],
    ],
  },
  {
    id: 'measure',
    name: 'Measure',
    verb: 'See what worked',
    summary: 'Reads real results from each network and follows clicks all the way to sign-ups and installs.',
    icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    tools: [
      ['Post performance', 'Likes, comments, shares, saves and reach read from Instagram, Facebook, X, Bluesky and Mastodon, per post and per channel.'],
      ['Tracked links', 'Short links with UTM tags for every campaign, with click counts by channel.'],
      ['App install attribution', 'Deep links that route to the right app store and attribute clicks, installs and opens to the post that drove them.'],
      ['Campaign dashboard', 'Clicks, installs and engagement per campaign in one place, with only measured numbers.'],
    ],
  },
  {
    id: 'compare',
    name: 'Compare',
    verb: 'Do more of what wins',
    summary: 'Tests ideas against each other and feeds every result back into the next plan.',
    icon: 'M7 4v16M17 4v16M3 8h8M13 16h8',
    tools: [
      ['Growth experiments', 'Plan an A/B test, track it with links or your own numbers, and get a statistical readout of whether it won.'],
      ['Best vs weakest posts', "Your top and bottom performers go into next week's plan, so the content keeps improving."],
      ['Channel comparison', 'Engagement per channel side by side, so your time goes to the networks that actually respond.'],
    ],
  },
];

export const COMING_NEXT: [string, string][] = [
  ['Email campaigns', 'Newsletters and drip sequences written from your Brand Brain.'],
  ['SEO', 'Keyword research, blog articles and rank tracking.'],
  ['Ads manager', 'Launch and optimise Meta and Google ads.'],
  ['Unified inbox', 'Comments and DMs from every channel in one place.'],
];
