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
- GitHub Pages uses **GitHub Actions** as its deployment source
- `.github/workflows/deploy.yml` builds and publishes the generated `dist/` artifact on every push to `main`
- App is single-page section navigation (no client router)

### Deploy with GitHub Actions

Push to `main`, or run the workflow manually from the Actions tab. The workflow installs dependencies, builds the Vite app, and deploys `dist/` to GitHub Pages.

The checked-in root `assets/` files are legacy artifacts and are not the production deployment source.

## Editing content

Main content is centralized in:

- `src/data/portfolioData.js`

Update this file to change experience, projects, skills, leadership, and links without touching layout components.
