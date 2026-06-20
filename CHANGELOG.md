# Changelog

Tutte le modifiche rilevanti al design system. Formato basato su
[Keep a Changelog](https://keepachangelog.com/it/1.1.0/); versioni in [SemVer](https://semver.org/lang/it/).

Installazione di una versione fissa (consigliata nei progetti):

```bash
npm i github:AlessioGranella/openeconomics-design-system#v0.2.0
```

## [0.2.0] — 2026-06-20

Prima versione versionata con API di consumo stabile.

### Added
- **API di consumo** (`exports`): `oe-design-system/tokens.css`, `…/components.css`,
  `…/tokens` (token JS), `…/components` (componenti React). `react`/`react-dom` come
  `peerDependencies`.
- **Secondo brand: Civiqa** — scala blu `--cv-blu-*` e tema **`.theme-civiqa`** che rimappa
  l'accento su tutti i componenti; pezzi specifici `.cv-*` (chip, button, nav, footer, icone).
- **Componenti** (classi `.oe-*` + componenti React): Card, Form & input (input/select/
  textarea/checkbox/radio/switch/search), Tabella, Tabs, Badge, Paginazione, Filtri,
  Header sito, Nav dashboard, Topbar, Footer (varianti `standard`/`analisi`), Slogan,
  Client strip, Wordmark/CiviqaWordmark, e le tabelle dashboard (CapEx, KPI editabile,
  Moltiplicatori, Recap).
- **UI Blocks** (stile Tailwind UI): Sito, Report, Dashboard.
- **Foundations**: Elevation & Radii.
- Utility griglia `.oe-grid`/`.oe-col-*` responsive + adattamento al contenitore (container query).
- `CLAUDE.md` nel repo + guida d'uso per Claude Code.

### Changed
- La libreria è ora **100% componenti reali con codice** (rimosso il catalogo ad anteprime
  Figma a iframe e i prototipi).
- Variante `Button` aggiuntiva: `inverse` (bianco su accento/scuro).

### Fixed
- Wordmark **bianco su sfondo scuro** (le props `style`/SVG ora vengono inoltrate).
- Card KPI con **sfondo bianco** (prima trasparenti sul grigio dashboard).
- Contrasto del tema Civiqa dove il lime non si replica (testo bianco su riempimenti,
  blu chiaro `--cv-blu-200` per gli accenti su fondo scuro).

### Brand rules
- Chip-kicker **sopra h1/h2 sempre lime**.
- Logo bianco su scuro / nero su chiaro, mai grayscale.

## [0.1.0] — 2026-06

- UI kit consultabile iniziale: foundations (colori, tipografia, spacing, griglia),
  token unificati (`--oe-*`), utility `.oe-grid`, deploy su GitHub Pages.

[0.2.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.2.0
[0.1.0]: https://github.com/AlessioGranella/openeconomics-design-system
