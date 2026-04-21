# Abhinav Srivastav — Portfolio

A terminal-themed, single-page portfolio + blog built with React 19, TypeScript,
Vite, and Framer Motion. MDX drives the blog so posts are authored as plain
Markdown with React components mixed in.

Live site: https://abhinavsrivastav.com

## Features

- **TUI aesthetic** — file-listing output, ASCII brackets, monospace type,
  blinking cursor, and a GitHub-Dark-inspired palette defined as `tui-*`
  Tailwind tokens.
- **MDX blog** — drop a `.mdx` file into `content/blog/` and it shows up on
  `/blog` automatically. Frontmatter is typed end-to-end.
- **Route-level animations** — page transitions via Framer Motion's
  `AnimatePresence`; staggered reveals on lists and cards.
- **Accessibility** — skip-to-content link, keyboard-focusable landmarks,
  ARIA labels on navs and external links, `aria-current` on the active nav
  item, and decorative ASCII hidden from assistive tech.
- **SEO** — Open Graph, Twitter Card, canonical URL, Schema.org Person
  JSON-LD, `robots.txt`, and `sitemap.xml`.
- **Hardening** — nested `ErrorBoundary` so a render error in a routed view
  doesn't take down the chrome, and another at the app root.
- **Strict TypeScript** — `strict`, `noUnusedLocals`, `noUnusedParameters`,
  `noFallthroughCasesInSwitch`, `noImplicitOverride`.

## Tech Stack

| Area              | Choice                                                 |
| ----------------- | ------------------------------------------------------ |
| Framework         | React 19                                               |
| Language          | TypeScript 5.8 (strict mode)                           |
| Build             | Vite 6                                                 |
| Routing           | React Router 7                                         |
| Animation         | Framer Motion 12                                       |
| Content           | MDX (`@mdx-js/rollup`, `@mdx-js/react`)                |
| Styling           | Tailwind utility classes via `index.css`               |
| Lint / Format     | ESLint 9 (flat config) + Prettier 3                    |

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev

# 3. Build for production (runs typecheck first, then bundles to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Available Scripts

| Script                 | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start Vite dev server on port 3000            |
| `npm run build`        | Type-check, then produce a production bundle  |
| `npm run preview`      | Serve the production bundle locally           |
| `npm run typecheck`    | Run `tsc --noEmit`                            |
| `npm run lint`         | Lint with ESLint (fails on any warning)       |
| `npm run lint:fix`     | Lint and auto-fix where possible              |
| `npm run format`       | Rewrite files with Prettier                   |
| `npm run format:check` | Verify formatting without writing             |

## Project Structure

```
.
├── App.tsx                 # Router, error boundaries, layout chrome
├── index.tsx               # React root entry point
├── index.html              # HTML shell, meta tags, JSON-LD
├── index.css               # Tailwind tokens + custom CSS
├── constants.ts            # Portfolio data (bio, experience, skills, links)
├── types.ts                # Shared TypeScript interfaces
├── mdx.d.ts                # Ambient module typing for *.mdx imports
├── components/
│   ├── Header.tsx          # Top nav
│   ├── Footer.tsx          # Socials + copyright
│   ├── Hero.tsx            # Landing hero with glitch typing
│   ├── Home.tsx            # Landing page composition
│   ├── Projects.tsx        # /projects view
│   ├── BlogList.tsx        # /blog index
│   ├── BlogPost.tsx        # /blog/:slug MDX renderer
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── ErrorBoundary.tsx   # Class-based error boundary
│   ├── animations.ts       # Shared Framer Motion variants
│   └── ui/                 # Box, Prompt, Tag primitives
├── hooks/
│   ├── useDocumentTitle.ts # Per-route <title> with cleanup
│   └── useGlitchTyping.ts  # Typing-effect hook used by Hero
├── content/
│   └── blog/               # MDX posts — each filename becomes a slug
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── vite.config.ts          # Vite + MDX plugin configuration
```

## Customizing Content

All personal data (name, title, experience, skills, socials, nav links, and
projects) lives in [`constants.ts`](./constants.ts). Edit the `PORTFOLIO_DATA`
object and the site picks it up on the next render. Shapes are defined in
[`types.ts`](./types.ts).

```ts
// constants.ts
export const PORTFOLIO_DATA: ProfileData = {
  name: "Your Name",
  title: "Your Title",
  summary: "...",
  navLinks: [...],
  experience: [...],
  projects: [...],
  skills: [...],
  socials: [...],
};
```

## Adding a Blog Post

1. Create `content/blog/<slug>.mdx`. The filename (without extension) becomes
   the URL slug.
2. Add frontmatter at the top:

   ```mdx
   ---
   title: "Your Post Title"
   publishedAt: "2026-04-21"
   summary: "One-line description shown on the blog index."
   ---

   Your content here. Plain Markdown works, and so do React components.
   ```

3. That's it — the post appears on `/blog`, sorted by `publishedAt` (newest
   first), and is reachable at `/blog/<slug>`.

> **Note:** Add the new URL to `public/sitemap.xml` so search engines can
> discover it.

## Deployment

The production build is a fully static site in `dist/`. It works on any static
host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3+CloudFront, etc.
The only requirement is **SPA fallback**: unknown paths must serve
`index.html` so React Router can handle the route client-side.

- **Netlify / Vercel** — drop in a `_redirects` (`/* /index.html 200`) or use
  the default SPA rewrite.
- **Cloudflare Pages** — enabled by default.
- **GitHub Pages** — ship a `404.html` that mirrors `index.html`.

Before deploying, update the canonical URL and JSON-LD in
[`index.html`](./index.html) and the `<loc>` entries in
[`public/sitemap.xml`](./public/sitemap.xml) if you're hosting on a different
domain.

## License

All code in this repository is © Abhinav Srivastav. Portfolio content
(copy, personal details, blog posts) is not licensed for reuse. If you want
to use the scaffolding as a starting point for your own site, open an issue.
