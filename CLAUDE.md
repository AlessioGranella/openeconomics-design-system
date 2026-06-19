# OpenEconomics Design System

Design system condiviso di OpenEconomics: token, font, componenti e una pagina-libreria (UI kit) consultabile. Usato su più progetti — onepage di analisi, dashboard, mini-siti di report — e ospita **due brand**: **OpenEconomics** (default) e **Civiqa** (brand di prodotto).

> Questo file dà a Claude Code il contesto per lavorare on-brand con questo design system. Sito live: https://alessiogranella.github.io/openeconomics-design-system/

## Come si avvia

```bash
npm install      # dipendenze (serve Node 20+)
npm run dev      # libreria su http://localhost:5173
npm run build    # build di produzione in dist/
```

## REGOLA #1 — Quale brand?

All'inizio di **ogni nuovo progetto/asset**, prima di scegliere gli stili, **chiedere sempre**:
**«Brand OpenEconomics o brand Civiqa?»**

I due brand condividono TUTTO (font, spaziatura, griglia, componenti: card, checkbox, input, ecc.). **Cambia solo il colore accento.**

- **OpenEconomics** → nessuna classe extra. Accenti: **Bluette** `#4400B3` + **Lime** `#B9FF69`.
- **Civiqa** → applicare la classe **`.theme-civiqa`** sulla root (es. `<body class="theme-civiqa">`). Rimappa l'accento in **blu elettrico Civiqa** `#0000FF` su tutti i componenti, in automatico. Non serve modificare i componenti.

## Regole di brand non negoziabili

- **Spigolo vivo ovunque** — `border-radius: 0`, nessuna eccezione.
- **Due accenti per brand soli.** OE: Bluette + Lime. Civiqa: scala Blu (`--cv-blu-*`, primario `#0000FF`). Le palette data-viz (magenta, blu, giallo, verde, ciano) sono SOLO per i grafici (2–3 colori max), mai come palette di brand.
- **Tipografia:** Hedvig Letters Serif per H1/voce; **Atkinson Hyperlegible Next** per il testo; **Atkinson Hyperlegible Mono** per dati/tag/valute (uppercase). Mai testo sotto i **12px**.
- **Fondo bianco vero** `#FFFFFF` — mai cream/sand/beige.
- **Numeri in locale IT** (migliaia `.`, decimale `,`, sempre `useGrouping: "always"` — altrimenti i numeri a 4 cifre non hanno il separatore).
- **Chip/tag:** mono uppercase, niente icone né frecce dentro il chip (eccezione: i chip Civiqa `.cv-chip` hanno un quadratino/pixel iniziale, parte dell'identità).
- **Logo** piccolo, alto contrasto (nero o bianco pieno), mai in scala di grigi, mai l'elemento più prominente.
- **Mai generare immagini AI senza conferma esplicita dell'utente**; no stock generici, render irrealistici, B/N artistico.
- **Contrasto WCAG**: body ≥ 4.5:1, large ≥ 3:1.

## Dove vivono le cose

- **Token (fonte di verità):** `src/styles/colors_and_type.css` — custom properties `--oe-*` (OpenEconomics) e `--cv-*` (Civiqa). Il tema Civiqa è il blocco `.theme-civiqa` in questo file.
- **Token in JS** (grafici/dashboard): `src/tokens.ts` — specchio dei `--oe-*`. Tenerlo allineato al CSS.
- **Stili componenti:** `src/components/components.css` — usa SEMPRE `var(--oe-space-*)` per padding/gap/margin (scala 4px), niente px hardcoded.
- **Componenti React:** `src/components/` (Button, Tag, KpiCard, Accordion, FigureLabel, Footer, Wordmark, CiviqaWordmark) + barrel `index.ts`.
- **Pagina-libreria / UI kit:** `src/docs/` (sezioni in `src/docs/sections/`, incluse `Footers.tsx` e `Civiqa.tsx`).
- **Kit Figma (snapshot consultabile):** `public/kit/` (anteprime componenti, icone, loghi). Asset Civiqa in `public/civiqa/`.

## Griglia e layout

- Utility concreta: classi **`.oe-grid` + `.oe-col-1..12`** (responsive 12/8/4 colonne, span `.oe-col-m-*` tablet e `.oe-col-s-*` mobile). Usare questa invece di reinventare `grid-template-columns`.
- La griglia si adatta anche al **contenitore** (non solo al viewport) via `@container`: se un layout ha una sidebar fissa, dichiarare il contenitore dei contenuti `container-type: inline-size` e non capparlo con un `max-width` allineato a sinistra.

## Footer

Componente `Footer` con prop `variant`:
- `standard` — brand + copyright + link legali.
- `analisi` — in più la colonna "Condizioni d'uso" con disclaimer (per report/documenti di analisi).

## Civiqa — pezzi specifici

Oltre al tema `.theme-civiqa`, esistono componenti Civiqa-specifici dal Figma del brand (classi `.cv-*` in `components.css`, mostrati nella sezione "Civiqa" della libreria): `.cv-chip`, `.cv-btn` (varianti `--primary/--dark/--outline/--tint/--link/--ghost-light`), `.cv-nav`, `.cv-footer`, `.cv-icon` (icone outline, tratto `--cv-blu-100` su quadrato `--cv-blu-800`).

## Aggiungere componenti

Token e utility additivi e retrocompatibili: non rompere i `--oe-*` esistenti. Quando aggiungi un componente, riusa i token (spigolo vivo, font, spacing, accento del brand attivo) invece di reinventare stili.
