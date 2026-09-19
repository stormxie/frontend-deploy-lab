# Frontend Deploy Lab

This is a small Vite + React project for practicing a real frontend release
flow.

## Local workflow

```bash
npm install
npm run dev
npm run build
npm run preview
```

## What to learn from this repo

- `npm run build` creates static assets in `dist`.
- `.github/workflows/ci.yml` verifies pull requests and pushes to `main`.
- `.github/workflows/deploy-github-pages.yml` deploys `dist` to GitHub Pages.
- `deploy/nginx.conf` shows how the same static assets can be served by Nginx.
- The app shows the short commit SHA as its version when built in GitHub Actions.

## Deployment path

1. Create a GitHub repository.
2. Push this project to the repository.
3. Enable GitHub Pages with "GitHub Actions" as the source.
4. Push to `main`.
5. Check the Actions tab and open the Pages URL.
