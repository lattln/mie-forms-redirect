# Redirect

A minimal Vite + React page that automatically redirects visitors to [https://forms-doc.os.mieweb.org/](https://forms-doc.os.mieweb.org/).

## How It Works

- **HTML meta-refresh** — instant redirect before JavaScript loads
- **React `useEffect`** — `window.location.replace()` as a JS fallback
- **Tailwind CSS** — lightweight styling for the brief redirect message

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production output is in the `dist/` folder, ready to deploy to any static hosting provider.
