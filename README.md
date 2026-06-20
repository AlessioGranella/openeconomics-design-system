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

## Installazione & versioni

Nei progetti **pinna una versione** (così gli aggiornamenti non rompono nulla a sorpresa):

```bash
npm i github:AlessioGranella/openeconomics-design-system#v0.2.0
```

La libreria espone un'**API di consumo** stabile (campo `exports`); il pacchetto si chiama `oe-design-system`:

```ts
// token CSS (in index.css / entry del progetto)
import 'oe-design-system/tokens.css'
import 'oe-design-system/components.css'   // se usi le classi .oe-* / .cv-*

// token JS per i grafici
import { chartSeries, color, formatNumber } from 'oe-design-system/tokens'

// componenti React
import { Button, KpiCard, Tag, Footer } from 'oe-design-system/components'
```

> Brand **Civiqa**: aggiungi `class="theme-civiqa"` sulla root → l'accento diventa blu su tutti i componenti.
> Le versioni sono elencate nel [CHANGELOG](./CHANGELOG.md). `react`/`react-dom` sono `peerDependencies` (li porta il progetto).

**Sito versionato:** la libreria online pubblica l'ultima versione alla root e uno snapshot per ogni release in sottocartella (`/v0.3.0/`, `/v0.2.0/`…); il **selettore di versione** in alto nella sidebar permette di navigarle.

### In sviluppo, dentro `Operativa/` (senza pinnare)

Per i progetti nello stesso workspace puoi ancora agganciare i file via percorso/symlink (vedi sotto), così le modifiche al DS si riflettono subito.

```ts
@import "<path>/design-system/src/styles/colors_and_type.css";
import { Button } from '.../design-system/src/components'
```

## Riferimenti brand

Specifiche complete in `../Contesto/BRAND_OpenEconomics.md` e `../Contesto/CONTESTO_OpenEconomics.md`.
