# JSON Diff Checker

A free, privacy-first JSON comparison tool. Paste or upload two JSON documents and instantly see what was added, removed, or changed — all processed client-side, with no upload to a server.

**Live site:** [jsondiffchecker.com](https://jsondiffchecker.com)

## Features

- Side-by-side and unified diff views for JSON objects
- Highlights added, removed, and modified keys/values
- Runs entirely in the browser — no data leaves the client
- Fast, dependency-light diff algorithm (see `src/lib/json-diff.ts`)
- SEO-optimized static pages (About, Privacy Policy, Terms, Contact)
- Dark mode support

## Tech Stack

- [Astro](https://astro.build) — static site generation with islands
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- TypeScript for the diff engine and client scripts
- [Cloudflare Workers](https://workers.cloudflare.com) — deployment/runtime adapter (`@astrojs/cloudflare`)
- [Vitest](https://vitest.dev) — unit tests for the diff engine

## Project Structure

```text
/
├── public/               # static assets (favicons, robots.txt, ads.txt)
├── src/
│   ├── components/       # Astro UI components (Hero, DiffPanel, EditorPane, ...)
│   ├── layouts/           # Base page layouts
│   ├── lib/               # Core JSON diff engine + tests
│   ├── pages/             # Routes (index, about, contact, privacy, terms, API)
│   ├── scripts/           # Client-side scripts (diff-checker, theme toggle)
│   ├── styles/            # Global CSS
│   ├── middleware.ts      # Astro middleware
│   └── worker.ts          # Cloudflare Worker entry point
├── astro.config.mjs
├── wrangler.jsonc         # Cloudflare Workers config
└── package.json
```

## Getting Started

```sh
npm install
npm run dev       # start local dev server at localhost:4321
```

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start local dev server                        |
| `npm run build`    | Build production site to `./dist/`            |
| `npm run preview`  | Preview the production build locally          |
| `npm test`         | Run unit tests (Vitest)                       |
| `npm run deploy`   | Build and deploy to Cloudflare Workers         |

## Testing

The core diff engine is covered by unit tests:

```sh
npm test
```

## Deployment

This project deploys to Cloudflare Workers via the Astro Cloudflare adapter. Configuration lives in `wrangler.jsonc`. Deploying requires a Cloudflare account authenticated via `wrangler login` (not included in this repo).

## License

This project is provided as-is for personal/portfolio use.
