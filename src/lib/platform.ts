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
      ['Brand Brain', 'Reads your website, pitch deck or documents to learn your voice, audience, products, offers and competitors. Shopify stores bring their catalogue and prices.'],
      ['Competitor watch', "Tracks competitors' websites and alerts you when their pricing, offers or messaging change."],
      ['Conversation radar', 'Finds what people are saying about your space on Reddit, Hacker News and Mastodon, so you post about what your market cares about.'],
      ['Website health', "Speed, SEO and accessibility scores for your site from Google PageSpeed, with the fixes that matter most."],
      ['App store listings', 'Reads your Google Play and App Store listings and reviews to understand how your app is presented and received.'],
      ['SEO audit & keywords', 'Checks up to 30 pages of your site for SEO problems and scores them, and finds keywords from real Google search suggestions.'],
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
      ['Sunday review', 'Every week: what went out, what worked, measured numbers only, and one-tap changes to cadence and posting times.'],
      ['Inbox triage', 'Comments, mentions, reviews and messages sorted into leads, questions, complaints and praise. Legal threats, refunds and safety issues are flagged to you straight away.'],
    ],
  },
  {
    id: 'plan',
    name: 'Plan',
    verb: 'Decide what to do',
    summary: 'Writes your marketing strategy and the playbooks to execute it, grounded in your own brand and data.',
    icon: 'M4 6h16M4 12h10M4 18h7',
    tools: [
      ['Marketing strategy', 'Positioning, ideal customer, messaging pillars, a 90-day roadmap and a posting cadence for each channel. Edit a pillar and future drafts are re-planned.'],
      ['30-day content plan', 'A topic, hook and call to action for every slot in the next 30 days, around your goals, festivals and key dates. Each Monday you get the week to approve in one go.'],
      ['Campaign planning', '“Plan next week around our summer collection” — tell your AI CMO the goal and it fills the calendar.'],
      ['Launch playbooks', 'Product Hunt, app, fundraising, feature, rebrand, event and seasonal launches. Every step creates its post, email, landing page or ad on the right day.'],
      ['20+ ready playbooks', 'Referral programmes, pricing experiments, WhatsApp broadcasts, festival calendars, partnership pitches, press kits, pitch decks and investor updates.'],
      ['Ad campaigns', 'Meta, Google Search and LinkedIn campaigns with audiences, keywords and ad variants, approved against your monthly budget and exported as files that import paused into your ads account.'],
    ],
  },
  {
    id: 'create',
    name: 'Create',
    verb: 'Make the content',
    summary: 'Writes and designs on-brand content for every channel, fact-checked against your own sources.',
    icon: 'M4 20l4-1 11-11-3-3L5 16l-1 4Z',
    tools: [
      ['Posts for every channel', 'Channel-native copy for Instagram, LinkedIn, X and more, written from your Brand Brain, in English, Hindi or regional languages. Rewrite or translate any post with one instruction.'],
      ['Design Studio', 'Branded images and carousels in your colours and logo on a drag-and-drop canvas, exported at every platform size, with a library for your images and logos.'],
      ['Product photo cards', 'Your real product photos turned into branded post images with name and price. Or AI images, or your own uploads.'],
      ['Repurposing', 'Paste a blog post, changelog or announcement and get ready posts for every channel at once.'],
      ['SEO articles', '1,200 to 1,800-word articles for your keywords, fact-checked and published to your WordPress, Ghost or Shopify blog.'],
      ['Email campaigns', 'Newsletters and a welcome series written from your Brand Brain, with sign-up forms, unsubscribe links and open and click tracking.'],
      ['Landing pages', 'Pages with a sign-up form and an A/B headline test, built from your real products and reviews. Every sign-up lands in your leads.'],
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
      ['13 channels', 'Instagram, Facebook, LinkedIn, X, Threads, Pinterest, Google Business Profile, Bluesky, Mastodon, Telegram, Discord, Slack and your WordPress, Ghost or Shopify blog, with one-click sign-in for the big networks. YouTube, TikTok and WhatsApp posts come to you ready to post by hand.'],
      ['Content calendar', 'Every planned, scheduled and published post in one view. Upload a CSV to schedule many posts at once.'],
      ['Approval inbox', 'Approve, edit or reject each post from your phone, with the reason it was written. Agencies can send clients an approval link.'],
      ['Autopilot with guardrails', 'Suggest only, ask first or full auto, per channel and per task. Blocked topics, a monthly AI spending cap, brand-score and fact-check gates, and a kill switch that stops everything.'],
      ['Best time & UTM tags', 'Posts move to the hours your audience actually responds, and links to your site get UTM tags automatically.'],
      ['Event triggers', 'New products, blog posts, release notes and milestones turn into post drafts without you asking.'],
      ['Unified inbox', 'Reply to Facebook, Instagram, Bluesky and Mastodon comments and imported reviews from one place, with drafted replies and FAQ rules.'],
    ],
  },
  {
    id: 'measure',
    name: 'Measure',
    verb: 'See what worked',
    summary: 'Reads real results from each network and follows clicks all the way to sign-ups and installs.',
    icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    tools: [
      ['Post performance', 'Likes, comments, shares, saves and reach read from Instagram, Facebook, X, Threads, Pinterest, Bluesky and Mastodon, per post and per channel.'],
      ['Goals & analytics', 'Sessions and conversions from Google Analytics, search queries from Search Console and payments from your Razorpay account, measured against your goal.'],
      ['Tracked links', 'Short links with UTM tags for every campaign, with click counts by channel.'],
      ['App install attribution', 'Deep links that route to the right app store and attribute clicks, installs and opens to the post that drove them.'],
      ['Campaign dashboard', 'Clicks, installs and engagement per campaign in one place, with only measured numbers.'],
      ['Reports', 'Weekly and monthly reports against the previous period, as a PDF, with your own branding for agencies.'],
      ['Lead CRM', 'Every sign-up, form and message becomes a lead with a stage, notes, email history and a score that explains itself.'],
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
      ['Influencer & PR outreach', 'Find creators, score their fit, send a pitch with two follow-ups, and track deals with promo codes and UTM links.'],
      ['Affiliates & referrals', 'Partner links, an application form, commission tracking and a stats page for each partner.'],
    ],
  },
];

export const COMING_NEXT: [string, string][] = [
  ['Video creation', 'Short videos and reels made from your brand kit and product photos.'],
  ['YouTube & TikTok uploads', 'Publishing videos directly; today these posts come to you ready to post by hand.'],
  ['WhatsApp Business broadcasts', 'Sending campaigns through the WhatsApp Business API.'],
  ['Launch ads from AICMO', 'Connecting your ad accounts to launch and adjust campaigns directly; today you import the files AICMO builds.'],
];
