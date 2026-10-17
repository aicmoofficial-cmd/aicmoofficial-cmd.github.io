/**
 * Everything that changes between launch stages lives here.
 * Before going public: set CONTACT_EMAIL, LEGAL_NAME and, once billing is live, SIGNUP_OPEN = true.
 */
export const SITE = {
  name: 'AdMobot',
  title: 'AdMobot — Your Marketing Autopilot is just one command away',
  description:
    'AdMobot is your AI CMO. Give it your brand, budget and goal in one command and it researches your market, plans your marketing with projected sales, writes and designs the content, launches ads in your own Meta and Google accounts, publishes to 13 channels plus email and WhatsApp, and reports what worked. You approve before anything goes out.',
  /** The product (sign-up / sign-in). */
  appUrl: 'https://app.admobot.com',
  /** API that stores early-access requests (POST /api/waitlist). */
  apiUrl: 'https://api.admobot.com',
  /** false: CTAs collect early-access requests. true: CTAs start the 3-day trial in the app. */
  signupOpen: false,
  /** Needs email forwarding on admobot.com (e.g. Cloudflare Email Routing or the registrar's forwarding). */
  contactEmail: 'hello@admobot.com',
  /** The business that owns and runs AdMobot (shown on every page; payment gateways check it). */
  legalName: 'Tharun Tech Solutions',
  company: {
    name: 'Tharun Tech Solutions',
    url: 'https://tharuntechsolutions.in',
    email: 'support@tharuntechsolutions.in',
    /** Registered business address and phone, shown on /contact. Razorpay and Cashfree expect both; empty = not shown. */
    address: ['3-4-696/1, Om Sai Colony', 'Near Progress High School', 'Hanamkonda, Telangana 506001', 'India'].join('\n'),
    phone: '+91 97014 25215',
  },
  country: 'India',
  /** GST added to prices (percent). 0 while the business isn't GST-registered; set it (and AICMO_GST_PERCENT on the API) after registering. */
  gstPercent: 0,
  /** Udyam (MSME) registration, shown on /contact. */
  udyam: 'UDYAM-TS-31-0060745',
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
  ? { label: 'Start 3-day trial', href: `${SITE.appUrl}/?signup=1` }
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
    price: 2199,
    usd: 29,
    annual: 21990,
    credits: 150,
    blurb: 'The one-command AI CMO for one brand. You approve every step.',
    features: [
      '1 brand, 3 channels',
      '150 credits a month (a full marketing plan and its first month of posts)',
      'One-command marketing plan: website, SEO and competitor research, budget split and sales projection',
      'Meta + Google ads launched from your own ad accounts and optimised daily, up to ₹50,000 ad budget a month',
      'AdMobot Wallet and a 9 PM report of the day’s results',
      'Design Studio, email marketing (2,000 emails a month), landing pages and lead CRM',
      'SEO audit and articles, unified inbox, weekly reports',
      'Approve every post and every campaign before it goes out',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 4999,
    usd: 69,
    annual: 49990,
    credits: 400,
    popular: true,
    blurb: 'Your marketing on autopilot: plans, creates, launches, optimises and reports.',
    features: [
      '1 brand, every channel',
      '400 credits a month (full autopilot, AI ad images and brand carousels)',
      'Full autopilot with brand-score and fact-check gates',
      'Meta + Google ads up to ₹3,00,000 ad budget a month',
      'Everything in Starter, with 10,000 emails a month',
      'Competitor watch, review analysis and tracked links',
      'Launch playbooks, influencer outreach and affiliate program',
      'Growth experiments, custom domains, 20+ strategy documents',
      '3 team members',
    ],
  },
  {
    id: 'pro',
    name: 'Pro / Agency',
    price: 13499,
    usd: 179,
    annual: 134990,
    credits: 1200,
    blurb: 'For agencies and founders running several brands on autopilot.',
    features: [
      '3 brands, every channel',
      '1,200 credits a month, shared across brands',
      'Meta + Google ads up to ₹5,00,000 ad budget a month per brand',
      'Everything in Growth, with 30,000 emails a month',
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
  ['AI-generated image (post image or AI ad scene)', '3'],
  ['AI brand carousel for a Meta ad', '3 per card'],
  ['Marketing plan from your one-line brief (research, budget split, projection)', '5'],
  ['SEO article, ad campaign or strategy document', '3'],
  ['Marketing strategy or re-plan', '5'],
  ['Keep a link in an X post (X posts go out without links by default, because X charges for each post with a link)', '6'],
  ['Brand Brain website read (first one free)', '5'],
  ['Product photo cards and carousels, Design Studio templates and your own uploads', 'Free'],
  ['Publishing, analytics, reports, fact checks, SEO audit', 'Free'],
  ['Ad launch, daily optimisation, Wallet pacing and the 9 PM report', 'Free'],
  ['Chat or voice notes with your AI CMO: 100 / 300 / 600 a month included, then', '1'],
];

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
