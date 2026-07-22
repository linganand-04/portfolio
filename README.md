# Linganand — Portfolio

A premium, animated personal portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Customize your content

Everything on the site is driven by plain data files — you shouldn't need to touch component code to update your info.

| What to edit | File |
| --- | --- |
| Name, roles, bio, contact info, resume link, stats | `src/data/profile.js` |
| Skills & proficiency levels | `src/data/skills.js` |
| Work experience & education timeline | `src/data/timeline.js` |
| Projects (title, description, links, tech) | `src/data/projects.js` |
| Certifications & services | `src/data/misc.js` |
| Nav links | `src/constants/navigation.js` |

### Adding your resume

Drop your PDF at `public/resume.pdf` (referenced by `profile.resumeUrl`).

### Adding project screenshots

Add images to `public/projects/` and point each project's `image` field in
`src/data/projects.js` at the file (e.g. `/projects/omnifood.jpg`). Until a
real image is added, cards gracefully fall back to a styled placeholder.

### Certifications

`src/data/misc.js` ships with placeholder certification entries — replace
the `title`, `issuer` and `year` fields with your real certificates.

### Colors & type

Design tokens (colors, fonts, animation keyframes) live in
`src/styles/index.css` under `@theme`. Change a value there and it updates
everywhere the corresponding Tailwind utility (`bg-primary`, `font-display`,
etc.) is used.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion for animation
- Lucide React for icons
- React Router for routing (404 page)

## Deployment

**Vercel:** import the repo, framework preset "Vite", default build command
(`npm run build`) and output directory (`dist`) work out of the box.

**GitHub Pages:** run `npm run build`, then deploy the `dist/` folder (e.g.
with the `gh-pages` package or GitHub Actions). If deploying to a
sub-path (`username.github.io/repo-name`), set `base: '/repo-name/'` in
`vite.config.js`.
