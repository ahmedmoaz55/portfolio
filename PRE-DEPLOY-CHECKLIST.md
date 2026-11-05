# Pre-deploy checklist

Run this checklist before every production release. The automated gate is:

```bash
npm run predeploy
```

## Repository and secrets

- [ ] Confirm `.gitignore` excludes `.env*`, `.next`, `node_modules`, build output, logs, caches, and TypeScript build metadata.
- [ ] Confirm `.env.example` contains names only, never real passwords or tokens.
- [ ] Search the repository for accidentally committed secrets before pushing.
- [ ] Push to a private or public GitHub repository intentionally and verify the correct branch is connected to Vercel.

## Content and links

- [ ] Replace every `TODO(ahmed)` placeholder in `src/data/`.
- [ ] Replace synthetic project descriptions, demo links, and repository links with verified URLs.
- [ ] Add verified testimonials or remove the testimonial section.
- [ ] Add `public/resume.pdf` if a downloadable resume is required.
- [ ] Add the real GitHub and LinkedIn URLs in `src/data/site.ts`.
- [ ] Confirm the contact email and displayed identity details are correct.
- [ ] Confirm all project images exist under `public/images/projects/` and have meaningful alt text.

## Vercel environment variables

Set these in the Vercel project settings for Production, Preview, and Development as appropriate:

- [ ] `NEXT_PUBLIC_SITE_URL` — final HTTPS site URL for production.
- [ ] `SMTP_HOST` — normally `smtp.gmail.com`.
- [ ] `SMTP_PORT` — normally `465`.
- [ ] `SMTP_USER` — the Gmail account used to send messages.
- [ ] `SMTP_PASS` — a Gmail App Password, never the normal account password.
- [ ] `CONTACT_TO_EMAIL` — inbox that receives contact submissions.
- [ ] `UPSTASH_REDIS_REST_URL` — recommended for multi-instance production deployments.
- [ ] `UPSTASH_REDIS_REST_TOKEN` — recommended for multi-instance production deployments.

## Build and runtime verification

- [ ] Run `npm run predeploy`.
- [ ] Run `npm run format:check`.
- [ ] Deploy a Preview build and open the site on desktop and mobile.
- [ ] Confirm `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/icon`, and `/opengraph-image` return successfully.
- [ ] Confirm all six project images load without 404s.
- [ ] Confirm there are no browser console errors or failed critical network requests.
- [ ] Submit the contact form with valid data and confirm delivery.
- [ ] Verify invalid fields, honeypot handling, rate limiting, origin rejection, and SMTP failure states.

## Accessibility and responsive QA

- [ ] Test 320px, 375px, 768px, 1024px, 1440px, and 1920px widths.
- [ ] Test keyboard navigation, visible focus states, skip link, dialogs, and form errors.
- [ ] Test dark mode, light mode, and reduced motion.
- [ ] Run Lighthouse for mobile and desktop.
- [ ] Confirm no horizontal overflow, clipped content, or layout shift.

## Release hygiene

- [ ] Inspect the final Vercel deployment logs.
- [ ] Confirm the custom domain, HTTPS certificate, redirects, and canonical URL.
- [ ] Confirm analytics and Speed Insights are enabled only on the intended Vercel project.
- [ ] Record the deployment URL and rollback target.
