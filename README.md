# AICMO website

Marketing site for AICMO (the app lives in a separate private repo). Static [Astro](https://astro.build) + Tailwind v4, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run check    # astro type check
```

Node 22+.

## Where things live

| What | File |
|---|---|
| Site name, URLs, contact email, plans, credit costs, "signup open" switch, GA4 id | `src/lib/site.ts` |
| FAQ (also emitted as FAQPage JSON-LD) | `src/lib/faq.ts` |
| SEO head, JSON-LD, analytics | `src/layouts/Base.astro` |
| Home page | `src/pages/index.astro` |
| Use-case pages | `src/pages/for/*.astro` (template: `src/components/UseCase.astro`) |
| Blog posts (Markdown) | `src/content/blog/*.md` |
| Legal (privacy, terms, data deletion) | `src/pages/*.astro` |

## Early access

Until billing is live (`SITE.signupOpen = false`), every CTA is an email form that posts to the app API at `POST {SITE.apiUrl}/api/waitlist`. Requests appear in the owner workspace's activity feed and the `waitlist` table. When billing launches, set `signupOpen: true` and the CTAs become "Start 7-day trial" buttons to the app.

## Writing a blog post

Add `src/content/blog/<slug>.md`:

```md
---
title: "…"
description: "… (≈150 characters, shown in Google)"
date: 2026-09-26
category: Guides
readMinutes: 6
---
```

Rules: no made-up statistics, customer names or testimonials. Link to `/#early-access` for the CTA.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages (Settings → Pages → Source: GitHub Actions). The site URL and base path come from Pages automatically; for a custom domain set repository variables `SITE_URL=https://yourdomain.com` and `BASE_PATH=/`, and add the domain in Settings → Pages.

After the first deploy: add the site to Google Search Console and Bing Webmaster Tools and submit `/sitemap-index.xml`. Each deploy pings IndexNow (key in `SITE.indexNowKey`, file `public/<key>.txt`). For AI assistants the site serves `/llms.txt` (summary + FAQ) and `/llms-full.txt` (every post).
