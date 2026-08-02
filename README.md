# BIU-Racing Website

Bar-Ilan University's Formula Student team website, built with **React + Vite**.

## Project structure

```
├── index.html              Vite entry HTML (loads Google Fonts + mounts React)
├── public/assets/          Images (logo, hero, media gallery, etc.)
├── src/
│   ├── main.jsx             React entry point
│   ├── App.jsx               Assembles all sections
│   ├── index.css             All site styling (design tokens, layout, components)
│   ├── data/                 Content arrays (departments, updates, media)
│   └── components/           One component per section (Header, Hero, About,
│                              Team, Sponsors, Media, Updates, Contact, Footer)
```

## Running locally

You'll need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot reload.

## Building for production

```bash
npm run build
```

This outputs a static, production-ready site into the `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Connecting your domain

The site is a static build (`dist/`), so it works with any static host. A few common options:

**Vercel / Netlify (easiest)**

1. Import the GitHub repo in Vercel or Netlify.
2. Build command: `npm run build` - Output directory: `dist`.
3. Once deployed, go to the project's Domain settings and add your custom domain, then update your domain's DNS (usually a CNAME or A record) as instructed by the platform.

**GitHub Pages**

1. `npm install -D gh-pages`, add a `"deploy": "gh-pages -d dist"` script to `package.json`.
2. Run `npm run build && npm run deploy`.
3. In your repo's Settings → Pages, point it at the `gh-pages` branch, then add your custom domain (this creates a `CNAME` file automatically).

**Any other static host** (e.g. your own server, Cloudflare Pages, S3 + CloudFront): upload the contents of `dist/` after running `npm run build`, and point your domain's DNS at that host.

## Notes for next steps

- The contact form (`src/components/Contact.jsx`) currently just prevents the default submit - wire up `handleSubmit` to your email service or backend of choice (e.g. Formspree, a serverless function, etc.).
- Social links in the footer and "Stay in the Loop" card currently point to `#` - swap in your real Instagram/LinkedIn/Facebook/Linktree URLs.
- Department bios and the "Product Mgmt" lead name in `src/data/departments.js` are placeholders - update with real copy whenever you have it.
