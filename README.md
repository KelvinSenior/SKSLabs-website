# SKS Labs — Digital Products, AI Solutions & Scalable Systems

A premium landing site and starter template for **SKS Labs** — a technology-focused startup studio building modern software products, AI-powered systems, and scalable digital infrastructure from Ghana to the world.

---

## Features

- Premium, dark luxury UI with glassmorphism and subtle neon accents
- Responsive design (mobile & desktop)
- Smooth animations with Framer Motion
- Modular, reusable components built with Tailwind CSS
- SEO-ready App Router metadata, Open Graph, and Twitter/X card
- `robots.txt` and `sitemap.xml` implemented as app routes

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vercel (recommended deployment)


## Deployment

This project is optimized for deployment on **Vercel**. When the repository is connected and the production branch is set to `main`, pushing to `main` triggers a build and deploy automatically.

Quick steps:

1. Create a GitHub repository and push this project.
2. Connect the repository to Vercel and set the production branch to `main`.
3. Add your custom domain in Vercel (if you have one) — existing domain settings persist across redeploys.
4. Vercel will build & deploy on every push to `main`.

Notes:
- Metadata is configured in `app/layout.tsx` — update `metadataBase` if your production domain is different.
- `app/robots.txt/route.ts` and `app/sitemap.xml/route.ts` are served at `/robots.txt` and `/sitemap.xml` respectively.


## Project Structure

- `app/` — App Router pages, layouts, and routes
	- `app/layout.tsx` — Global layout, font loading and SEO `metadata`
	- `app/page.tsx` — Home page composition
	- `app/globals.css` — Global styles and Tailwind utilities
	- `app/robots.txt/route.ts` — Robots route
	- `app/sitemap.xml/route.ts` — Sitemap route
- `components/` — Reusable UI components (Navbar, Hero, Projects, Founder, Values, Footer)
- `public/` — Static assets (logos, founder image, favicon)
- `package.json` — Scripts and dependencies
- `tailwind.config.js` — Tailwind configuration
- `tsconfig.json` — TypeScript configuration


## Local Setup

Prerequisites:
- Node.js 18+ (or LTS)
- npm (or yarn)

Run locally:

```bash
# install dependencies
npm install

# development server
npm run dev

# build for production
npm run build

# run production server
npm start
```

Open http://localhost:3000


## SEO & Social Preview

- App Router metadata is configured for improved indexing and social previews.
- Open Graph and Twitter/X card use `/SKS_Labs_Logo_no_text-bg.png` as the preview image.
- `robots.txt` and `sitemap.xml` are generated dynamically for search engines.


## Roadmap

- Add dynamic project pages and optional CMS integration (e.g., Sanity, Contentful)
- Implement contact form backed by serverless functions
- Accessibility audits and improvements (WCAG)
- Add unit/integration tests and CI checks


## Contributing

Contributions are welcome — please open issues or pull requests on the GitHub repository.


## License

This project is provided under the MIT License. See `LICENSE` for details.

---

If you want, I can commit and push this `README.md` for you and trigger a Vercel redeploy.
