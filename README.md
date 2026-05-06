# Fernando Acevedo Portfolio (Vite + React + Tailwind)

Modern one-page software engineering portfolio focused on internship and new grad recruiting.

## Stack

- Vite + React
- Tailwind CSS
- Static assets only (GitHub Pages compatible)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## GitHub Pages deployment

This repo is configured for a GitHub Pages custom domain at:

`https://fernando-ace.com/`

Key config:

- `vite.config.js` uses `base: "/"`
- `public/CNAME` preserves the custom domain during Pages deployments
- App is single-page section navigation (no client router)

### Deploy manually

1. Run `npm install`
2. Run `npm run build`
3. Publish `dist/` to `gh-pages` branch (or configure Pages to deploy from GitHub Actions artifact)

### Deploy with GitHub Actions (included)

1. In GitHub repo settings, enable Pages and set source to **GitHub Actions**.
2. Push to `main`.
3. Workflow `.github/workflows/deploy.yml` will build and deploy automatically.

## Editing content

Main content is centralized in:

- `src/data/portfolioData.js`

Update this file to change experience, projects, skills, leadership, and links without touching layout components.
