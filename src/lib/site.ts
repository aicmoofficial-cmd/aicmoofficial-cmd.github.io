/**
 * Everything that changes between launch stages lives here.
 * Before going public: set CONTACT_EMAIL, LEGAL_NAME and, once billing is live, SIGNUP_OPEN = true.
 */
export const SITE = {
  name: 'AICMO',
  title: 'AICMO — your AI Chief Marketing Officer: research, strategy, content and analytics',
  description:
    'AICMO is an all-in-one AI marketing team for startups and D2C brands: it researches your market and competitors, analyzes reviews, plans your strategy, creates on-brand content, publishes to 9 channels and measures what works.',
  /** The product (sign-up / sign-in). */
  appUrl: 'https://aicmo-delta.vercel.app',
  /** API that stores early-access requests (POST /api/waitlist). */
  apiUrl: 'https://aicmo.onrender.com',
  /** false: CTAs collect early-access requests. true: CTAs start the 7-day trial in the app. */
  signupOpen: false,
  contactEmail: 'hello@aicmo.app', // TODO: replace with a mailbox you own before launch
  legalName: 'AICMO', // TODO: registered business name for the legal pages
  country: 'India',
  /** Optional Google Analytics 4 measurement ID (G-XXXX). Empty = no analytics script. */
  ga4: '',
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

export const CHANNELS = ['Instagram', 'Facebook', 'LinkedIn', 'X', 'Bluesky', 'Mastodon', 'Telegram', 'Discord', 'Slack'];

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
    price: 999,
    usd: 19,
    annual: 9990,
    credits: 75,
    blurb: 'For founders who want steady, on-brand posting without the blank page.',
    features: [
      '1 brand, 3 channels',
      '75 credits a month (≈ 60 posts, or 40 posts + 10 AI images)',
      'Unlimited product photo cards',
      'Brand Brain, marketing strategy and content calendar',
      'Conversation radar and website health',
      'Approve every post before it goes out',
      'Post performance and tracked links',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 2499,
    usd: 49,
    annual: 24990,
    credits: 250,
    popular: true,
    blurb: 'Your full-time AI marketing team: plans, writes, publishes and learns.',
    features: [
      '1 brand, every channel',
      '250 credits a month (≈ 120 posts + 40 AI images)',
      'Full autopilot with brand-score and fact-check gates',
      'Competitor watch and review analysis',
      'App install attribution and review replies',
      'Growth experiments with statistical readouts',
      '20+ strategy documents (launch plans, ASO, pitch deck…)',
      '2 team members',
    ],
  },
  {
    id: 'pro',
    name: 'Pro / Agency',
    price: 5999,
    usd: 119,
    annual: 59990,
    credits: 900,
    blurb: 'For agencies and founders running several brands.',
    features: [
      '3 brands, every channel',
      '900 credits a month, shared across brands',
      'Everything in Growth',
      '10 team members',
      'Priority support',
    ],
  },
];

export const CREDIT_COSTS: [string, string][] = [
  ['Write or rewrite a post (per channel)', '1'],
  ['AI-generated image', '3'],
  ['Strategy document', '3'],
  ['Review reply draft', '1'],
  ['Marketing strategy or re-plan', '5'],
  ['Brand Brain website read (first one free)', '5'],
  ['Product photo cards and your own uploads', 'Free'],
  ['Publishing, analytics, fact checks, daily review', 'Free'],
  ['Chat with your AI CMO (fair use)', 'Free'],
];

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
