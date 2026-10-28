# Casi d'uso del design system

Ogni asset web OpenEconomics o Civiqa appartiene a **uno** di questi sei tipi. Il tipo si decide
**prima di tutto**, prima del brand e prima di qualsiasi scelta di layout: ognuno ha un obiettivo
diverso e alcuni segni particolari che lo rendono riconoscibile.

> **REGOLA #0 — Che cosa devi fare?** Chiunque lavori con questo design system (o con la skill
> `oe-frontend-brand`) chiede per prima cosa quale di questi casi d'uso serve. Se la richiesta lo
> dice già, anche con parole sue («una pagina per i risultati dello studio» = analisi one-page), si
> va avanti; altrimenti si presentano i sei tipi e si chiede. Si può anche **allineare al brand**
> una pagina esistente, partendo dal suo codice sorgente.

Fonte: «I casi d'uso della skill oe-frontend-brand — Riassunto» (ottobre 2026).

| Tipo | Obiettivo | Hero |
|---|---|---|
| [Analisi one-page](#1-analisi-one-page) | Far parlare il dato: risultati di un'analisi o di uno studio, testo essenziale | `.oe-hero-analisi` |
| [Web report (minireport)](#2-web-report-minireport) | Portare sul web un report con i testi fedeli all'originale | Immersiva a tutto schermo |
| [Presentazione a scroll](#3-presentazione-a-scroll) | Raccontare un tema con una sola idea per sezione | Immersiva + puntini di navigazione |
| [Minisito verticale](#4-minisito-verticale) | Presentare un verticale o un prodotto in più pagine, tono editoriale e persuasivo | Home immersiva, pagine interne più strette |
| [Dashboard](#5-dashboard) | Leggere i dati a colpo d'occhio, seguirne andamento e confronti | Compatta |
| [Repository](#6-repository) | Libreria di asset con ricerca, filtri e download | Compatta |

---

## 1. Analisi one-page

Serve a far parlare il dato: mostra i risultati di un'analisi o di uno studio con testo essenziale.
Può essere fatta per un cliente (chip lime **«Caso studio»**) o per OpenEconomics (chip lime
**«Studio indipendente»**). Si chiede sempre quale dei due.

**Segni particolari**
1. **Hero** (`.oe-hero-analisi`): chip, titolo, sottotitolo; sotto il sottotitolo una linea sottile
   e gli indicatori di classificazione dello studio. Se lo studio è per un cliente, il **logo del
   cliente** sta in alto a destra.
2. **Indicatori della hero**: set chiuso di cinque — tipo di analisi, modello / metodologia, fonti,
   anno di riferimento, ultimo aggiornamento. Si omettono quelli mancanti, non se ne aggiungono.
3. **Executive Summary** subito sotto: i risultati in card (`.oe-kpis` + `.oe-kpi--flip`); al
   passaggio del mouse la card mostra la spiegazione.
4. **Alta densità di grafici**, ognuno con la sua spiegazione.
5. **Note di highlight** (`.oe-note--evidente`), spesso a commento e chiusura dei paragrafi. Per ogni
   nota si chiede se va evidente o neutra.
6. **Nota metodologica su fondo viola chiaro** (`.oe-band--nota`, bluette-050).
7. **Footer Analisi** con le condizioni d'uso.

Blocchi: Navigazione Analisi · Hero Analisi · Executive Summary · Nota metodologica · CTA Analisi
(facoltativa) · Footer Analisi. Template: `progetti/_template-caso-studio/`.

## 2. Web report (minireport)

Porta sul web un report mantenendo i testi **fedeli all'originale**: l'interattività è un supporto,
non una riscrittura. Testi verbatim dal Word, nessuna parafrasi.

**Segni particolari**
1. **Copertina immersiva a tutto schermo** e un **indice laterale o un menu in alto** che segue la
   lettura (scroll-spy, voce attiva evidenziata).
2. **Sintesi delle evidenze** in forma testuale ma schematica (es. «6 cose che il report evidenzia»:
   card numerate con titolo e due righe).
3. **Alterna sezioni orizzontali e verticali**: layout a 2 colonne (es. tabella + commento) e layout
   a 1 colonna (capitolo su fascia grigia), per rendere la lettura movimentata.
4. **Cassetti**: le sezioni si possono richiudere (accordion).
5. **Focus point**: citazioni e dati chiave hanno riquadri dedicati (callout).

## 3. Presentazione a scroll

Racconta un tema con **una sola idea per sezione**, in modo sintetico e d'impatto.

**Segni particolari**
1. **Hero** immersiva con i **puntini di navigazione** sulla destra.
2. **Sezioni quasi a tutto schermo**, con fondo alternato **bianco, grigio e viola scuro**
   (`--oe-bg-dark`), **numeri grandi** in Hedvig. Testo ridotto al minimo.
3. **Animazioni sulle card e contenuti interattivi** (es. tabelle con filtri) aiutano la
   presentazione.

## 4. Minisito verticale

Presenta un verticale o un prodotto **in più pagine**, con tono editoriale e persuasivo.

**Segni particolari**
1. **Home con copertina immersiva**: foto con sfumatura viola, pretitolo lime, titolo in serif e
   **due bottoni** (freccia accanto all'etichetta) che portano alle due sottosezioni del sito.
2. **Menu fisso a due livelli**: in alto le pagine del sito, sotto le sezioni della pagina in cui ti
   trovi, con la voce attiva evidenziata. **Ogni pagina ha la sua copertina**, con una hero più
   stretta di quella della home.
3. **Numeri in evidenza in card**, con microanimazioni ed effetti. Sotto è ammessa una citazione con
   la barra lime.
4. **Card editoriali** con illustrazioni su fondo viola puntinato, che rimandano agli
   approfondimenti.
5. **Metafora grafica** per evidenziare alcuni concetti chiave (es. due cerchi in proporzione per
   un confronto tra programmazioni).

## 5. Dashboard

Un ambiente web dedicato alla presentazione di dati: permette di leggerli a colpo d'occhio e di
seguirne l'andamento e i confronti, con note di commento.

**Segni particolari**
1. **Hero compatta** (non copre tutta l'area above the fold) con foto, pretitolo lime e titolo in
   serif. I **comandi tecnici** (Backup, impostazioni, Upload) stanno nella **barra in alto**.
2. **Indicatori in card** (`.oe-kpi`): icona del brand, **numero nero**, etichetta in maiuscolo e un
   **badge di variazione**: verde se il valore sale, rosa se scende, grigio se è stabile.
3. **Grafici in riquadri** o su fondo bianco; ogni grafico ha etichetta «GRAFICO X», titolo, unità
   ed eventuale nota sotto.
4. **Classifiche e tabelle** oltre ai grafici: per esempio la categoria in un chip e il valore a
   destra, per leggere subito i risultati migliori e peggiori. Tabella ordinabile, filtri che
   ricalcolano KPI, grafici e tabella.
5. **Commenti importanti su fondo viola scuro** (`--oe-bg-dark`), con pretitolo lime, elenchi di
   apprendimenti e suggerimenti e i termini chiave evidenziati in lime.

## 6. Repository

Libreria di asset: la trovabilità viene prima di tutto.

**Segni particolari**
1. Hero compatta; ricerca full-text e filtri combinabili (brand, obiettivo, formato).
2. Card asset piatte con filetto, con tipo, formato e data visibili subito.
3. CTA di download sull'accento, mai nera.

---

## Tratti comuni a tutti i casi

- **Titoli grandi e numeri grandi in Hedvig** (serif); tutto il resto in Atkinson, con il peso
  leggero (300) come base.
- **Pretitolo in box lime**, Atkinson Mono, maiuscolo, sopra i titoli principali.
- **Titoli con la sola iniziale maiuscola.**
- **Card e bottoni a spigolo vivo.**
- **Bottoni con la freccia accanto all'etichetta, mai neri.**
- **Sezioni scure sempre in viola scuro**, mai nero.
- **Icone del brand, mai emoji.**
- **Nessun testo in corsivo**, nemmeno nelle note.
- **Grafici solo dal motore del design system** (OE Charts), con una sola tinta per grafico.
- **Variante Civiqa**: stessa struttura, accento blu e logo Civiqa (`.theme-civiqa`).

## Cosa chiedere, in ordine

1. **Che cosa devi fare?** Uno dei sei tipi, oppure allineare al brand una pagina esistente.
2. **Brand**: OpenEconomics o Civiqa (prima di ogni scelta di colore).
3. **Solo per le analisi**: caso studio per un cliente o studio indipendente?
4. **Materiali**: testi da un file di testo (Word, markdown, Excel, testo incollato) usati verbatim;
   numeri solo dall'Excel, con foglio e cella; PDF e immagini solo come riferimento grafico. Le
   incongruenze tra testo e dati si segnalano, non si colmano.
5. **Mappa delle sezioni** (e dei grafici, con tipo e foglio di origine) da approvare **prima** di
   scrivere codice.
6. Per ogni nota: **evidente o neutra?**
