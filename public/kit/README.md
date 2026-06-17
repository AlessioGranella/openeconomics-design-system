# OpenEconomics Design System

A design system distilled from the OpenEconomics 2025 brand refresh — the Bluette + Lime visual identity, Atkinson Hyperlegible + Hedvig Letters Serif typography, and the website component library shipped in Figma.

> "Enabling adaptation. Empowering impact. With platforms, strategy, and trust."
> — Footer slogan, openeconomics.eu

---

## 1. Company context

**OpenEconomics** is an Italian (Rende, CS + Milano) economics & policy consultancy. They turn data into evidence so clients can navigate high-stakes choices — public funding, impact assessment, ESG strategy, regulation. Customers include FIFA, Terna, Snam, Enel, Muzinich & Co, FIT.

The brand voice is **rigorous-but-warm**: serif headlines that read editorial, sans body that reads clinical, and a single shot of electric lime to keep it from feeling like a bank.

### Products represented in the source files

| Surface | What it is |
|---|---|
| **openeconomics.eu** (marketing site, EN + IT) | Homepage, Company, Offer ("Cosa offriamo"), Contact, Insight Wall (blog), Thank You / Download flows |
| **Sonar** | Internal product surface — "Pagina Sonar" — appears to be a scenario / impact analysis app |
| **Externalytics** | Internal product surface — "Pagina Externalytics" — dashboard for externalities & impact metrics, rendered on a Mac Studio mockup |
| **Dashboard System** | Platform dashboard UI (Figma file: `OpenEconomics_Dashboard System.fig`) — side navigation, top nav, tabs, KPI cards, tables, charts, form controls |

The design system is centered on the **marketing website**; the two products are previewed as device-mounted screenshots inside the marketing pages. We build a UI kit for the website.

### Sources used to build this DS

- **Figma file** — `OpenEconomics — Website (Copy).fig` (mounted as VFS during build). 1920px desktop canvas, 1453-line Homepage frame, 54-frame Components page, 6-frame Icons page, 163 local components + 852 page-scoped library components.
- **Brand Manual — Colour** (PDF in `assets/Brand-Manual-Colour.pdf`) — the source of truth for the Bluette / Lime / Gray / secondary palettes and their shades 050 → 900.
- **Logo SVGs** — Black, White, Pittogramma White (in `assets/`).
- **Font files** — Atkinson Hyperlegible Next (full weight range), Atkinson Hyperlegible Mono variable, Hedvig Letters Serif (in `fonts/`).

---

## 2. Content fundamentals

**Language.** The live site is bilingual EN / IT — every page has an `ENG` toggle in the footer. Most public-facing copy is English. Compliance, legal and operational links (e.g. "Modello di organizzazione e di gestione ex D.Lgs. 231/01", "Politica parità di genere") stay in Italian.

**Voice.** First-person plural — "We bring", "We solve", "We've worked with" — addressed to **you** (the prospective client). Direct, declarative, often paired in two-beat sentences:

> "We don't just advise — we solve."
> "Mitigate risks. Decide mindfully. Negotiate from a stronger position. Communicate effectively."
> "Quantify what matters: risks, externalities, returns for all the stakeholders."

**Casing.**
- **Hero / display:** Sentence case ("Mitigate risks, adapt with confidence").
- **Section H2:** Sentence case ("Be inspired by the most relevant projects").
- **CTA buttons:** UPPERCASE ("TALK TO AN EXPERT", "FIND THE RIGHT PATH") with light letter-spacing.
- **Category / chip text:** ALL CAPS in **mono** ("FLAGSHIP ANALYSIS", "IMPACT ASSESSMENT"). Mono is reserved for chips and figure numbering only — see *Monospace usage* below.
- **Section eyebrows / pre-titles:** ALL CAPS in **sans** (Atkinson Next), not mono.
- **The wordmark:** "OpenEconomics" — closed-up, capital O and E.

**Tone keywords from the brand book.** Innovation, energy, future vision, transparency, method, clarity, precision, accessibility, recognizability, modular, hierarchical.

**Em dashes are part of the voice.** Used to set off the proof point: "We bring a rare mix of deep, specialist skills — from economics to policy, finance, and regulation."

**No emoji. No exclamation points.** Calm authority — the bright lime does the shouting.

**Numbers as proof.** When numbers appear they're concrete and unfussy: "more than 30 countries", "Via J. F. Kennedy, 57/59", ISO certificate numbers spelled out. **All numbers are set in Atkinson Hyperlegible Next (sans), tabular figures** — never mono. Number color follows the background: on white or gray → `--oe-black`; on lime → `--oe-black`; on dark (any Bluette shade) → `--oe-white`. Helper: `.oe-num` (+ `.on-light` / `.on-lime` / `.on-dark`).

**Number formatting by locale.**
- **Italiano (default):** separatore delle migliaia = `.` (punto); separatore decimale = `,` (virgola).
  - Es: `1.000` · `100.000` · `1.000.000` · `1.234.567,89`
- **English:** thousands separator = `,` (comma); decimal separator = `.` (period).
  - E.g.: `1,000` · `100,000` · `1,000,000` · `1,234,567.89`

Use the `formatNumber(value, locale, decimals)` utility from `utils/format-number.js` (see file for API). Never hardcode raw unformatted large numbers in copy or data visualizations.

---

## 3. Visual foundations

### Color

Built on **black + white** as the neutral floor, with **Bluette** (`#4400B3` — a deep, tech-forward indigo-violet) carrying the brand and **Lime** (`#B9FF69`) as the single accent that earns attention.

- **Bluette-700 `#4400B3`** — primary buttons, headings inside cards, accent fills.
- **Bluette-900 `#270065`** — large dark sections, footer, hero overlays.
- **Bluette-050 `#EFE5FF`** — soft panel backgrounds for feature cards.
- **Lime-400 `#B9FF69`** — CTA fills, eyebrow chip backgrounds, arrow tips, hero buttons over dark.
- **Gray-700 `#545454`** — body copy on white.
- **White** — canvas default.

The brand book also defines secondary scales (Magenta / Blu / Yellow / Green / Cyan, 050 → 900) — these are "for scenarios where more color depth is needed", typically data viz. The marketing site itself stays Bluette + Lime + neutrals.

### Type

| Role | Family | Weight | Size |
|---|---|---|---|
| Hero / display | **Hedvig Letters Serif** | Regular 400 | 48 – 80 px |
| Page H1 | Atkinson Hyperlegible Next | Regular 400 | 40 – 56 px |
| Card H2 | Atkinson Hyperlegible Next | Bold 700 | 36 px, Bluette-700 |
| Body | Atkinson Hyperlegible Next | **Light 300** | 22 px |
| Body sm | Atkinson Hyperlegible Next | Light 300 | 18 px |
| Eyebrow / pre-title | Atkinson Hyperlegible Next (sans) | Medium 500 | 16 px, UPPERCASE |
| Chip / figure label | Atkinson Hyperlegible Mono | chips 500 · figures 500 | chips 16 px · figures 12 px, UPPERCASE |

**Monospace usage (`--oe-font-mono`, Atkinson Hyperlegible Mono) — two uses only:**
1. **Chip / category text** (`.oe-tag` / `.oe-chip`) — Medium 500, 16 px, uppercase.
2. **Figure numbering / pre-title** for charts, maps and tables (`.oe-figure-label`) — Medium 500, 12 px, uppercase, black: `GRAFICO 1`, `TABELLA 1`, `MAPPA 1`.
Mono appears nowhere else — eyebrows, labels, dates, code and data callouts are all sans.

**The lime rule.** Lime is never used as a horizontal band/rule to frame or separate blocks (no lime strips above or below content). It is allowed only as a **vertical** side accent next to content, plus its established roles (chip fills, CTA fills, arrow tiles).

Light 300 is the dominant body weight — this is the part most teams get wrong. Atkinson is an accessibility-first family from the Braille Institute; the brand commits to it as a deliberate stance on legibility.

### Data figures (charts, tables, maps)

Charts, tables and maps share one figure system — see `preview/chart.html`, `preview/table.html`, `preview/map.html`.

- **Pre-title / numbering:** `GRAFICO 1` · `TABELLA 1` · `MAPPA 1` — mono Medium 500, 12 px, uppercase, `--oe-black` (`.oe-figure-label`).
- **Charts & maps** sit on a `--oe-gray-100` (`#F1F1F1`) area. Pre-title, title, subtitle and note are all **left-aligned inside the area**, title preferably placed within it.
  - Title → sans Regular 16 px, `--oe-black`.
  - Subtitle → sans 14 px, `#2C2C2C`.
  - Disclaimer / footer note → sans 10 px, `#2C2C2C`.
  - Footer note structure: `Elaborazione OpenEconomics | Fonti: [..., ..., ...] | Aggiornamento: [mese, anno]`.
- **Tables** are full Atkinson Next (numbers included). The **header row has a different background** from the body rows (Bluette-700 header / alternating white + gray-100 body). Number color follows the *Numbers* rule: white on the dark header, black on light rows.

### Layout

- **1920 px desktop canvas** with **80 px page padding** → 1760 px content width.
- **40 px column gap**, 24 px between stacked cards within a column.
- **Two-up card grids** sit at 860 × ~300 px.
- **Section vertical rhythm:** 80 / 120 / 160 px between major blocks.

### Backgrounds

- Mostly **flat white** or **flat dark Bluette-900**.
- The hero uses a **large photographic background** (compass / abstract macro) with a **white-→-transparent-→-white gradient** masking top and bottom — `linear-gradient(rgb(255,255,255) 0%, rgba(255,255,255,0) 51%, rgb(255,255,255) 100%)`.
- Card backgrounds: solid Bluette-050 (soft purple), solid Bluette-700, or photographic with a **Bluette-700 → transparent vertical gradient** overlay (top-anchored).
- **No mesh gradients, no glow, no glassmorphism.** No textures.

### Borders & cards

- Cards use a **1 px solid black hairline** or **none**, with **4 px corner radius** (`--oe-radius-sm`).
- Photo cards: **16 px radius** for the photo block.
- Dark CTA buttons: **sharp 0 px radius** with a separate **lime arrow tile** to the right.
- The radius vocabulary is intentionally small: 0 / 2 / 4 / 16 — no in-between.

### Shadows

The brand is **flat**. Shadows are reserved for the few floating elements:
- `0 1px 2px rgba(0,0,0,0.06)` — small chips
- `0 4px 12px rgba(39,0,101,0.08)` — hovered cards
- `0 16px 40px rgba(39,0,101,0.18)` — popovers

### Animation

- Transitions are **subtle and quick** — opacity / color in 140 – 220 ms.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` for general motion, `ease-out` for entries.
- Hover state on buttons: the lime arrow tile **shifts +4 px horizontally**; on dark buttons the Bluette-700 deepens to Bluette-900.
- Press state: 0.96 scale + immediate color settle.
- **No bouncing**, **no overshoot**, **no spinning logos**.

### Imagery

- Editorial photography, often **architectural / industrial** (railway infrastructure, stadium grass, wind turbines, server rooms).
- **Cool color palette** — purples, blues, neutral grays — with the occasional warm sunset shot used full-bleed.
- Product surfaces (Sonar, Externalytics) are shown as **Mac Studio + Studio Display** mockups, never floating screenshots.
- Client logos rendered **monochrome black** in a single horizontal strip with a top + bottom divider.

### Iconography

See `ICONOGRAPHY` below.

### Use of transparency / blur

Almost none. The only transparency is the **white → transparent → white vertical fade** on background photos in section headers — it's a "protection gradient" so text stays legible. No backdrop-filter blur in the source files.

### Fixed elements

The header is fixed at the top of every page; everything else scrolls. The footer is one tall dark Bluette-900 block.

---

## 4. Iconography

### What the brand uses

The icon set in `/ICONS` in Figma is **Carbon Design System icons** (IBM Carbon — `Activity`, `Compare`, `IBM-cloud--direct-link-1--exchange`, `IBM--streamsets`, `Sunrise`, `Circle-packing`) and a handful of **Untitled UI / Lucide-style line icons** (`chevron-left`, `chevron-down`, `marker-02`, `file-check-01`, `umbrella`, `pen-tool-03`, `folder-shield`, `file-branch`, `lightning-02`, `message-chat-01`, `server-05`, `alarm-check`, `wind-03`, `align-vertical-center-01`, `text-input-01`, `user-profile-square`).

Icons are always rendered:
- **Monoline**, **1.5 – 2 px stroke**.
- **Solid color** — Bluette-700, Bluette-900, white on Bluette tile, or black.
- Sized **42 × 42 px** inside a **62 × 62 px tile** with even padding.
- The tile itself is one of: white, Bluette-700, Bluette-900, or Bluette-050 — never gradient.

### What we use in this DS

Because no proprietary icon font ships with the brand, **we substitute Lucide** (`lucide.dev`) from CDN — same monoline stroke language, free, well-mapped to Carbon by name. Concrete substitutions:

| Source (Carbon / Untitled UI) | Lucide |
|---|---|
| `activity` | `activity` |
| `compare` | `arrow-left-right` |
| `chevron-left` / `chevron-right` / `chevron-down` | same |
| `IBM-cloud--direct-link-1--exchange` | `unplug` |
| `IBM--streamsets` | `git-fork` |
| `sunrise` | `sunrise` |
| `circle-packing` | `chart-scatter` |
| `marker-02` | `map-pin` |
| `umbrella` | `umbrella` |
| `lightning-02` | `zap` |
| `server-05` | `server` |
| `folder-shield` | `folder-lock` |
| `wind-03` | `wind` |
| `user-profile-square` | `circle-user-round` |

> **Flag:** these are visual-language matches, not 1:1 ports. If pixel-perfect fidelity to the original Carbon icons matters, swap Lucide for the official `@carbon/icons` SVG set.

### Other icon decisions

- **No emoji anywhere.**
- **No unicode glyphs as icons.** The em-dash is used as a typographic separator in copy, but never as an icon.
- Social icons are flat white SVGs on the Bluette-900 footer — LinkedIn + YouTube only.

---

## 5. File index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Agent-Skill entry point (cross-compat w/ Claude Code)
├── colors_and_type.css        ← all design tokens (--oe-*) + base type roles
├── assets/
│   ├── logo-black.svg
│   ├── logo-white.svg
│   ├── logo-mark-white.svg    ← pittogramma (mark only)
│   ├── hero-bg.png            ← homepage hero photo
│   ├── grid-bg.png            ← dotted grid background
│   ├── compass.png            ← editorial photo used in homepage
│   ├── card-featured.png      ← flagship-analysis card photo
│   ├── news-card.jpg          ← default news card photo
│   ├── externalytics-device.png ← Mac Studio + Studio Display product mockup
│   └── Brand-Manual-Colour.pdf
├── fonts/                      ← all .ttf files (Atkinson Next, Atkinson Mono, Hedvig)
├── preview/                    ← Design-System-tab cards (one HTML per token group)
└── ui_kits/
    ├── website/                ← OpenEconomics.eu website UI kit
    │   ├── README.md
    │   ├── index.html          ← interactive homepage prototype
    │   └── *.jsx               ← component files
    └── dashboard/              ← Dashboard platform UI kit
        ├── index.html          ← interactive dashboard prototype
        ├── Components.bundle.js← Figma-materialized bundle
        ├── Components.d.ts     ← bundle API catalog
        └── fig-tokens.css      ← 345 design tokens from Figma Variables
        ├── index.html          ← interactive homepage prototype
        ├── Header.jsx
        ├── Footer.jsx
        ├── Hero.jsx
        ├── CtaButton.jsx
        ├── FeatureCard.jsx
        ├── ProjectCard.jsx
        ├── NewsCard.jsx
        └── CoinvestBlock.jsx
```

### Quick links

- **Tokens:** `colors_and_type.css` → `--oe-bluette-*`, `--oe-lime-*`, `--oe-gray-*`, `--oe-font-sans`, etc.
- **`.oe-container`** — boxed `1760px` centred content wrapper with `80px` inline padding. Put this on the inner `<div>` of every section; let the `<section>` itself be full-bleed. A narrower `**`.oe-container--text`**` variant (max `900px`) is available for long-form articles.
- **Type roles:** `.oe-display`, `.oe-h1` … `.oe-h5`, `.oe-body`, `.oe-body-sm`, `.oe-eyebrow` (sans), `.oe-tag`/`.oe-chip` (mono chips), `.oe-figure-label` (mono figure numbering), `.oe-num` (numbers).
- **UI kit (website):** open `ui_kits/website/index.html` for the interactive marketing-site prototype.
- **UI kit (dashboard):** open `ui_kits/dashboard/index.html` for the interactive dashboard prototype — side nav (collapsed/expanded), top nav, KPI cards, chart, table.

---

## 6. Known caveats

- The Figma file is `(Copy)` — most page-level frames are intact; a few `PAGINE-X-SVILUPPO` and `BACKUP` frames are work-in-progress duplicates.
- Brand Manual sections 2 + (typography, logo lockup, spacing rules) were **not provided** — only the Colour book. Type rules in this DS are reverse-engineered from the Figma usage counts in `METADATA.md`. If you have the full brand manual, please attach it.
- Iconography uses **Lucide as a substitute** for the Carbon / Untitled-UI mix in the original — see § 4.
- Product UI for **Sonar** and **Externalytics** is only available as device-mounted hero photos in the marketing pages — there are no component-level UIs in the Figma file. We don't ship a UI kit for them.
