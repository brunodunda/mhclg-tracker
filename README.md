
# MHCLG Document Tracker

A Vite + React app that visualizes MHCLG documents in a timeline and list view, with local persistence and a GOV.UK import modal.

## Local Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment

Create `.env` with:

```bash
VITE_ANTHROPIC_API_KEY=sk-ant-....
```

## Deploy Options

### Vercel
- Import the repo in Vercel. Build output is `dist`.

### Netlify
- Uses `netlify.toml` (build: `npm run build`, publish: `dist`).

### GitHub Pages
- Use Vite static deploy guide; set base if deploying under `/repo`.

