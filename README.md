# UniBook site

Landing page for [UniBook](https://github.com/sx66627/unibook), published with GitHub Pages.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Deploy (GitHub Pages)

Remote already points to `https://github.com/sx66627/unibook`.

**Option A — GitHub Actions** (workflow `.github/workflows/pages.yml`):

1. Push to `master` / `main`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.

**Option B — branch root:**

1. **Settings → Pages → Source: Deploy from a branch**
2. Branch `master` / `main`, folder `/ (root)`.

Expected URL: `https://sx66627.github.io/unibook/`

Asset paths are relative, so the site works both at the repo root and under `/unibook/`.
