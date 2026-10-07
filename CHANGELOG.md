# Changelog

Tutte le modifiche rilevanti al design system. Formato basato su
[Keep a Changelog](https://keepachangelog.com/it/1.1.0/); versioni in [SemVer](https://semver.org/lang/it/).

Installazione di una versione fissa (consigliata nei progetti):

```bash
npm i github:AlessioGranella/openeconomics-design-system#v0.5.0
```

## [0.5.0] — 2026-10-07

### Added
- **Componente Note** (`.oe-note`): richiamo di una nota a margine del testo, in due varianti —
  `--lime` (fondo Lime, filetto verticale **Bluette**) e `--grey` (fondo grigio, filetto Lime).
  Usa `--oe-pop` / `--oe-pop-rule`, quindi si tematizza da sola sotto `.theme-civiqa`.
- **Card KPI interattive**: `.oe-kpi` reagisce a mouse e tastiera andando **in negativo su
  Bluette 900** (`--oe-bg-dark`). Con `.oe-kpi--flip` la card ospita la propria spiegazione:
  al passaggio del mouse i dati sfumano e al loro posto compare `.oe-kpi__tip`, dentro la card
  e non in un tooltip esterno. Variante `.oe-kpi--titled` + `.oe-kpi__unit` per le card con
  etichetta su due righe.
- **`.oe-text-2col`**: utility per il testo corrente su due colonne (una sola sotto 768px),
  strumento della nuova *Full-Band Text Rule*.
- **`SOCIAL.md`**: norma di stile per i post social codificata dai formati approvati.
  Censisce i **cinque formati in uso** (carosello 4:5 e 1:1, infografica singola, card
  editoriale, infografica animata) con tela, export, estensione e regole di consegna;
  convenzione di nome file `LKD_DDMMYY_Tema`; ordine compositivo lockup↘+chip → numero →
  corpo → dato → footer; gerarchia serif/sans/mono; modalità chiara e scura; elementi
  ricorrenti (lockup di sezione, card KPI, bande, confronto prima/dopo, catena gerarchica,
  cover, chiusura); tre trattamenti fotografici distinti; regole loghi e fonti; sequenza
  del carosello verticale e di quello quadrato.
- **UI Blocks → Hero Analisi**: nuovo blocco `.oe-hero-analisi` in `components.css`, con la
  propria scheda nella libreria. È la hero normata delle landing di studi e analisi: fascia
  full-bleed con immagine e doppio velo (costruito con `color-mix` sui token, quindi
  tematizzabile), riga alta con chip e logo del cliente, titolo, sottotitolo facoltativo,
  indicatori in griglia. Due punti di rottura (768 e 440px) e fallback `prefers-reduced-motion`
  inclusi. Il caso studio «Impatto Audiovisivo» e il template lo consumano al posto del CSS locale.
- **UI Blocks → Caso studio**: nuova scheda della libreria che documenta lo standard delle
  pagine caso studio (impianto delle fasce, anatomia della hero, sequenza delle dieci sezioni,
  figura, numeri, interazione). Template di partenza in `progetti/_template-caso-studio/`.
  La hero è normata: chip «Caso studio» o «Studio indipendente», logo del cliente in alto a
  destra, titolo, sottotitolo facoltativo e un set chiuso di cinque indicatori (tipo di analisi,
  modello / metodologia, fonti, anno di riferimento, ultimo aggiornamento).
- **Immagini**: nuova sezione della libreria (Brand → Immagini) con 34 mappe a griglia di
  quadratini in stile Civiqa (Europa, Italia, Piemonte, comune; aree evidenziate in blu Civiqa,
  blu scuro e lime), download SVG/PNG per ciascuna e zip completo.
- **Icone**: 4 nuove icone nel set (`programmazione`, `progettazione-documento`,
  `finanziamento`, `approfondimento`), stesso formato 524 · fondo Bluette 900.
- **Declinazioni colore** per le 4 nuove icone: `-bluette-lime` (fondo Bluette `#4400B3`,
  icona Lime) e `-lime` (fondo Lime `#B9FF69`, icona Bluette). `programmazione` (calendario con lente) e `finanziamento` usano il
  nuovo disegno (`finanziamento`: cerchio aperto con €).
- **Download icone** nella libreria: clic su un'icona scarica l'SVG; pulsante
  "Scarica tutte le icone (.zip)". Lo zip è generato da `npm run icons:zip`
  (eseguito in automatico prima di `dev` e `build`).

### Changed
- **Testo a fascia piena** (regola "The Full-Band Text Rule"): il testo corrente non si cappa
  più a una misura. Paragrafi, lead, note ed elenchi delle landing di analisi passano da
  `max-width: 70ch` (62/78 per lead e note) a `max-width: none` e occupano tutta la larghezza
  del contenitore; dove il passaggio è lungo si usa la nuova utility `.oe-text-2col`, che
  riporta la riga a una lunghezza leggibile dividendola in due colonne invece di restringere
  la colonna e lasciare mezza fascia vuota. Il testo dentro una colonna di griglia è già
  contenuto dalla colonna. Aggiornati `colors_and_type.css`, la scheda Tipografia della
  libreria, `DESIGN.md` e il mirror Impeccable.
- **Aria intorno ai grafici** (regola fissa dei casi studio): il riquadro di una figura ha
  sempre 32px di margine sopra e **40px sotto** (`--oe-space-l` / `--oe-space-xl`; 24/32 su
  mobile), così il testo che segue non tocca il bordo del riquadro. Un `h3` subito dopo una
  figura rientra a 32px. Documentata nella scheda «Caso studio» e nel template.
- **Nota metodologica su bluette-050**: regola fissa per le landing di analisi — ogni sezione
  di nota metodologica usa `--oe-bg-tint` (bluette-050) come fondo, fuori dall'alternanza
  bianco/grigio delle altre sezioni. Utility `.band--nota` nel template dei casi studio.
- **Niente corsivo nelle analisi** (regola "The No-Italics Rule"): in analisi, report e landing
  di studi il corsivo non si usa — testo, note, didascalie e disclaimer compresi. L'enfasi si fa
  con il peso, con l'accento o con un chip. Tolto l'unico corsivo rimasto nei componenti
  (`.oe-recap__note`).
- **Numerazione figure sull'accento**: `.oe-figure-label` (GRAFICO 1 · TABELLA 1 · MAPPA 1)
  passa da nero a `--oe-accent`, con la variante su fondo scuro che usa `--oe-on-dark-accent`.
  Si tematizza da sola sotto `.theme-civiqa`.
- **Contenitore unico di pagina** (regola "The Shared-Container Rule"): una sola larghezza per
  tutte le fasce. `--oe-max-width` passa da 1760 a **1440px** e `--oe-page-pad` da 80 a **32px**
  (16px sotto 768), quindi `.oe-container` cappa a 1440 con margine 32. Nuovo token
  `--oe-band-pad` per le fasce full-bleed senza wrapper interno: `.oe-header`, `.oe-stats`,
  `.oe-cta` e `.oe-footer` lo usano al posto dei 40px fissi e ora cadono sulla stessa colonna
  del contenuto. `--oe-grid-margin` passa da 12px a `--oe-page-pad`, e una `.oe-grid` dentro
  `.oe-container` non riapplica cap e padding. `--oe-canvas-width` (1760) resta come
  riferimento al canvas Figma. Aggiornati `colors_and_type.css`, `components.css`, `tokens.ts`,
  `DESIGN.md` e il mirror Impeccable.
- **Numeri display in Hedvig** (regola "The Display-Number Rule"): i numeri grandi —
  valori KPI, stat band, cifre in hero e le etichette di valore dentro i grafici — passano
  da Atkinson Next a **Hedvig Letters Serif**, peso 400, cifre tabulari. Nuova utility
  `.oe-num--display`; `.oe-kpi__value` e `.oe-stat__num` la incorporano. I numeri in linea,
  nelle tabelle e nei dati fitti restano in Atkinson Next tabulare (`.oe-num`); unità, tag e
  valute restano in Atkinson Mono. Hedvig ha un solo peso: non applicare `font-weight` > 400.
  Soglia indicativa: 28px. Restano in Atkinson le etichette di valore sulle barre, i tick
  degli assi, le classifiche e le tabelle — se un numero è a corpo di lettura è un dato, non
  un titolo. Aggiornati `colors_and_type.css`, `components.css`, `tokens.ts` (`numberFont`),
  `DESIGN.md` e il mirror Impeccable `.impeccable/design.json`.


## [0.4.0] — 2026-06-20

### Added
- **KpiCard**: props opzionali `icon` (icona sopra il valore) e `note` (descrizione sotto
  l'etichetta) — per le card di sintesi nei report. Additivo, retrocompatibile.

### Notes
- Emerso ricostruendo il progetto "Eni Analisi v2" sull'ultima versione del DS.

## [0.3.0] — 2026-06-20

Refactor architetturale dei token (Fase 2): nessun cambiamento visivo.

### Added
- **Layer di token semantici**: `--oe-accent-border`, `--oe-accent-on`, `--oe-pop-strong`,
  `--oe-pop-on`, `--oe-on-dark-accent`, `--oe-on-dark-muted`. I componenti ora usano SOLO
  token semantici (mai `--oe-bluette-*`/`--oe-lime-*` diretti).

### Changed
- **Tema `.theme-civiqa` rimappa solo token**: rimossi tutti gli override per-componente
  (i fix di contrasto sul lime). Aggiungere/cambiare un brand = solo un set di token.

### Notes
- Output visivo invariato in entrambi i brand (verificato). Cambiamento additivo e
  retrocompatibile sui token `--oe-*`.

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

## [0.1.0] — 2026-06-17

- Foundations consolidate (colori, tipografia, spacing, **griglia** `.oe-grid` responsive +
  container query), token unificati (`--oe-*`), sidebar libreria chiara, marchio OE.

## [0.0.0] — 2026-06-17

- UI kit consultabile iniziale: prima versione della pagina-libreria + token e font di base,
  deploy su GitHub Pages.

[0.4.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.4.0
[0.3.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.3.0
[0.2.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.2.0
[0.1.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.1.0
[0.0.0]: https://github.com/AlessioGranella/openeconomics-design-system/releases/tag/v0.0.0
