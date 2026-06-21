# ReLoop — Turning Waste Into Worth

A premium, mobile-first React site for ReLoop: a circular-economy platform connecting
schools, colleges, and companies into a shared plastic-collection and impact network,
with a recycled-material product store for the public and partner institutions.

## Stack

- React 18 + Vite
- React Router 6
- Tailwind CSS
- No backend — all data is local (`src/data/*.js`); cart and institution login persist
  to `localStorage` in the browser.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. `vercel.json` is already configured to rewrite all routes to `index.html` so
   client-side routing (React Router) works on refresh and direct links.

## Demo institution logins

| Type | Institution | ID | Password |
|---|---|---|---|
| School | Vidya Mandir Estancia | `VME2026` | `demo123` |
| Corporate | TEA TIDES | `TT2026` | `demo456` |

Use these on `/restore/login` to reach the School or Corporate dashboards.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, Logo, LoopRing, ProductCard, etc.
  context/      AppContext — cart + institution auth (localStorage-backed)
  data/         Static data: ReBin locations, all three product catalogs, institutions
  pages/        One file per route — see App.jsx for the full route table
```

## Notes

- Product imagery is original SVG illustration (`ProductGlyph`, `CrisisIllustration`)
  rather than stock photography, to keep the visual language consistent and avoid
  licensing concerns.
- Consultation booking is fully client-side: submitting generates a demo reference ID
  (`RL-XXXXX`) and shows a confirmation screen. Wire `Consultation.jsx`'s `handleSubmit`
  to a real backend/email service when you're ready to collect real submissions.
- Contact forms similarly simulate submission client-side — connect to your form
  backend of choice (e.g. Formspree, a serverless function, etc).
