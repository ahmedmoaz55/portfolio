# Ahmed Portfolio

Premium single-page portfolio for Ahmed, a full-stack web and mobile app developer. Built with Next.js App Router, TypeScript, Tailwind CSS v4, and a server-validated contact pipeline.

## Stack

- Next.js App Router with Turbopack
- TypeScript with strict mode
- Tailwind CSS v4
- React Hook Form and Zod
- Nodemailer with Gmail SMTP
- Optional Upstash Redis rate limiting
- Vercel Analytics and Speed Insights

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer
- A Gmail account with 2-Step Verification for production contact delivery
- An Upstash Redis database for shared rate limiting in multi-instance production deployments

## Local setup

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On macOS/Linux, copy the environment file with `cp .env.example .env.local`. The local app works without SMTP credentials, but contact delivery intentionally returns a clear configuration error until they are added.

Run the production gate:

```bash
npm run predeploy
```

For formatting verification, run `npm run format:check`.

## Editing content

Portfolio content lives in typed files under `src/data/`:

- `site.ts` — identity, links, availability, and stats
- `skills.ts` — technology groups and marquee items
- `services.ts` — service offerings
- `projects.ts` — project cards and filters
- `process.ts` — delivery stages
- `testimonials.ts` — testimonial content

Replace every `TODO(ahmed)` placeholder before launch. Project images currently use locally stored Unsplash stock photos; credits and source context are documented in `scripts/download-images.mjs`. Add real project images and verified testimonials before launch. To replace a project image without code changes, add a 1600x1000 WebP with the matching slug under `public/images/projects/`.

The resume CTA currently points to the contact section so it cannot produce a 404. If a downloadable resume is required, add the final file at `public/resume.pdf` and change the CTA back to `/resume.pdf`.

### Project image credits

The current local stock images are downloaded from Unsplash and converted to WebP by `scripts/download-images.mjs`:

- Northstar Analytics — Lukas Blazek
- Nomad Notes — freestocks
- Bloom Commerce — Blake Wisz
- Careline — Nastuh Aboott
- Pocket Pantry — Daniel Romero
- Signal Studio — Andrew Neel

## Contact email setup

The contact form sends through Gmail SMTP. Use a Gmail App Password, not your normal account password:

1. Sign in to the Google account that will send portfolio messages.
2. Enable **2-Step Verification** in Google Account security.
3. Open **App passwords**.
4. Create an app password named `Ahmed Portfolio`.
5. Copy the generated 16-character password into `SMTP_PASS` in `.env.local`.
6. Set `SMTP_USER` and `CONTACT_TO_EMAIL` to the appropriate Gmail addresses.

The API returns a clean error when SMTP credentials are missing and never exposes server internals to visitors.

## Optional Upstash rate limiting

Create a Redis database in Upstash and add its REST URL and token:

```env
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

Without these values, the API uses a safe in-memory limiter suitable for local development and single-instance deployments. Configure Upstash before scaling to multiple serverless instances.

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use `npm run build` as the Vercel build command, or leave the default.
4. Add the variables from `.env.example` in Vercel Project Settings. Use separate values for Production, Preview, and Development when needed.
5. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain for Production. Preview requests are also accepted safely by the contact API.
6. Add the Gmail App Password and Upstash values.
7. Deploy a Preview first, complete the checklist, then promote to Production.
8. Add the custom domain and confirm HTTPS, redirects, sitemap, robots, and metadata routes.
9. Send a production contact-form test and confirm the reply-to address works.

## Pre-deploy checklist

See [`PRE-DEPLOY-CHECKLIST.md`](./PRE-DEPLOY-CHECKLIST.md) for the full release checklist covering secrets, content, Vercel variables, build verification, accessibility, responsive QA, and rollback hygiene.

## Security and deployment notes

- `.env*`, build output, dependencies, logs, local caches, and TypeScript metadata are ignored by `.gitignore`; `.env.example` is intentionally tracked.
- The contact route validates payload size, origin, schema, honeypot, timing, and rate limits before sending mail.
- Production headers include HSTS, CSP, clickjacking protection, MIME sniffing protection, a restrictive referrer policy, and a permissions policy.
- Vercel Analytics and Speed Insights domains are explicitly allowed by the production CSP.
- The contact origin check accepts both the configured public site URL and the actual deployment origin, which keeps Preview deployments testable without allowing arbitrary origins.
- `npm run predeploy` runs lint, typecheck, and a production build.
