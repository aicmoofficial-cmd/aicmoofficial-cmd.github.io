/**
 * Everything that changes between launch stages lives here.
 * Before going public: set CONTACT_EMAIL, LEGAL_NAME and, once billing is live, SIGNUP_OPEN = true.
 */
export const SITE = {
  name: 'AdMobot',
  title: 'AdMobot — your AI CMO: research, strategy, content and analytics in one platform',
  description:
    'AdMobot is an all-in-one AI marketing team for startups and D2C brands: it researches your market and competitors, analyzes reviews, plans your strategy, creates on-brand content, publishes to 13 channels plus email and measures what works.',
  /** The product (sign-up / sign-in). */
  appUrl: 'https://app.admobot.com',
  /** API that stores early-access requests (POST /api/waitlist). */
  apiUrl: 'https://aicmo.onrender.com',
  /** false: CTAs collect early-access requests. true: CTAs start the 7-day trial in the app. */
  signupOpen: false,
  /** Needs email forwarding on admobot.com (e.g. Cloudflare Email Routing or the registrar's forwarding). */
  contactEmail: 'hello@admobot.com',
  legalName: 'AdMobot', // TODO: registered business name for the legal pages
  country: 'India',
  /** Optional Google Analytics 4 measurement ID (G-XXXX). Empty = no analytics script. */
  ga4: 'G-B64K05QE45',
  /** IndexNow key (public by design): Bing, Yandex and others re-crawl changed pages on deploy. File: public/<key>.txt */
  indexNowKey: 'b5d71dd307cf9d82adaf7cb604ccdd10',
};

/** Prefix a site path with the base path (GitHub project pages live under /<repo>/). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^https?:|^mailto:|^#/.test(path)) return path;
  // Pages are served as /page/; link there directly so visitors and crawlers skip the redirect.
  let [p, hash = ''] = path.split('#');
  if (!p.startsWith('/')) p = `/${p}`;
  if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) p += '/';
  return `${base}${p}${hash ? `#${hash}` : ''}`;
}

export const CTA = SITE.signupOpen
  ? { label: 'Start 7-day trial', href: `${SITE.appUrl}/?signup=1` }
  : { label: 'Get early access', href: '#early-access' };

export const CHANNELS = ['Instagram', 'Facebook', 'LinkedIn', 'X', 'Threads', 'Pinterest', 'Google Business', 'Bluesky', 'Mastodon', 'Telegram', 'Discord', 'Slack', 'Your blog'];

export interface Plan {
  id: string;
  name: string;
  price: number;
  usd: number;
  annual: number;
  credits: number;
  blurb: string;
  features: string[];
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 1499,
    usd: 25,
    annual: 14990,
    credits: 100,
    blurb: 'For founders who want steady, on-brand marketing without the blank page.',
    features: [
      '1 brand, 3 channels',
      '100 credits a month (≈ 80 posts, or 60 posts + 10 AI images)',
      'Brand Brain, marketing strategy and 30-day content calendar',
      'Design Studio: branded images, carousels, asset library',
      'Email marketing (1,000 emails a month), landing pages and lead CRM',
      'SEO audit and articles, ad campaign builder',
      'Unified inbox, post performance and weekly reports',
      'Approve every post before it goes out',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 3999,
    usd: 59,
    annual: 39990,
    credits: 300,
    popular: true,
    blurb: 'Your full-time AI marketing team: plans, writes, publishes and learns.',
    features: [
      '1 brand, every channel',
      '300 credits a month (≈ 200 posts + 30 AI images)',
      'Full autopilot with brand-score and fact-check gates',
      'Everything in Starter, with 5,000 emails a month',
      'Competitor watch, review analysis and tracked links',
      'Launch playbooks, influencer outreach and affiliate program',
      'Growth experiments, custom domains, 20+ strategy documents',
      '3 team members',
    ],
  },
  {
    id: 'pro',
    name: 'Pro / Agency',
    price: 9999,
    usd: 149,
    annual: 99990,
    credits: 900,
    blurb: 'For agencies and founders running several brands.',
    features: [
      '3 brands, every channel',
      '900 credits a month, shared across brands',
      'Everything in Growth, with 20,000 emails a month',
      'White-label client approval page and report PDFs',
      'X post metrics, API keys and MCP access',
      '10 team members',
      'Priority support',
    ],
  },
];

export const CREDIT_COSTS: [string, string][] = [
  ['Write or rewrite a post (per channel)', '1'],
  ['Carousel, email or review / inbox reply written by AI', '1'],
  ['Landing page written by AI', '2'],
  ['AI-generated image', '3'],
  ['SEO article, ad campaign or strategy document', '3'],
  ['Marketing strategy or re-plan', '5'],
  ['Keep a link in an X post (X posts go out without links by default, because X charges for each post with a link)', '6'],
  ['Brand Brain website read (first one free)', '5'],
  ['Product photo cards, Design Studio templates and your own uploads', 'Free'],
  ['Publishing, analytics, reports, fact checks, SEO audit', 'Free'],
  ['Chat with your AI CMO (fair use)', 'Free'],
];

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
