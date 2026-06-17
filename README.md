# OpenEconomics — Design System

Fonte di verità per UI/UX di web page, minisiti di analisi e dashboard OpenEconomics.
Contiene i token, i font, i componenti e la **pagina-libreria** (UI kit consultabile, stile Catalyst).

## Struttura

```
design-system/
├── src/
│   ├── styles/                 ← CANONICO: token + font (file REALI vivono qui)
│   │   ├── colors_and_type.css
│   │   └── fonts/
│   ├── tokens.ts               ← stessi valori in JS (grafici, dashboard, logica)
│   ├── components/             ← primitive React on-brand (Button, Tag, KpiCard, …)
│   └── docs/                   ← la pagina-libreria (Foundations + Componenti)
├── index.html
└── package.json
```

## Una sola fonte, niente duplicazione

I token e i font vivono **solo** in `src/styles/`. Gli altri progetti li raggiungono via **symlink**:

- `OpenEconomics/src/styles` → `../design-system/src/styles` (sito)
- `OpenEconomics/progetti/Eni Analisi/src/styles` → `../../../design-system/src/styles`

Modifichi un token una volta → vale ovunque. (Eni ha `server.fs.allow` nel `vite.config` perché il symlink punta fuori dalla sua root.)

## Comandi

```bash
npm install      # una volta
npm run dev      # apre la pagina-libreria in locale
npm run build    # build statico (dist/) — base relativa, deployabile ovunque
```

## Usare il design system in un nuovo progetto

```ts
// token CSS (in index.css)
@import "<path>/design-system/src/styles/colors_and_type.css";

// token JS per i grafici
import { chartSeries, color, formatNumber } from '.../design-system/src/tokens'

// componenti
import { Button, KpiCard, Tag } from '.../design-system/src/components'
```

## Riferimenti brand

Specifiche complete in `../Contesto/BRAND_OpenEconomics.md` e `../Contesto/CONTESTO_OpenEconomics.md`.
