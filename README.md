# real-estate-template

Premium, production-oriented real-estate website template built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Multi-page marketing site (home, about, services, contact)
- Property directory with lightweight filters
- **One reusable property-page system** at `/properties/[slug]`
- Structured property data (local mock source, CMS-ready repository boundary)
- SEO metadata, sitemap, robots, and JSON-LD per property
- Project Cursor skills for design and engineering standards

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

See **[docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md)**. Use the **project** URL from the Vercel dashboard (not the bare team subdomain). Set `NEXT_PUBLIC_SITE_URL` to that URL.

## Adding a property

1. Add a record to `src/content/properties/properties.ts`
2. Set a unique `slug`
3. The listing appears in `/properties` and the detail page is generated automatically

Do **not** create a new page file per property.

## Images

See **[docs/IMAGES.md](docs/IMAGES.md)** for folder layout and how to replace Unsplash URLs with files under `public/images/`.

## Contact (WhatsApp)

Default enquiries go to **+504 9678-4674** via WhatsApp. Update `whatsapp` in `src/content/site/config.ts`.

## CMS later

See **[docs/CMS.md](docs/CMS.md)** for how to swap the local repository for a headless CMS without rewriting the UI.

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and sitemap (default `http://localhost:3000`) |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint

## Cursor skills

See `.cursor/skills/` for `real-estate-web-design`, `property-page-system`, and `frontend-quality`.
