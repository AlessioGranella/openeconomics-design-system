# OpenEconomics — Stile dei post social

Norma per **caroselli LinkedIn**, **infografiche singole** e **card editoriali**.
Derivata dai formati approvati: `LKD_280726_Aerospazio e difesa_FONDI` (carosello),
`LKD_200926_t33 – l'effetto leva` (carosello), `Linkedin_OE_FITP_SROI_BNL_Internazionali_2026`
(infografica, 7 varianti cromatiche), card "Friday Reading".

Tutti i valori sono token del design system (`src/styles/colors_and_type.css`).
**Niente colori o font fuori token.** Misure espresse su tela **1080 × 1350** (4:5): su altri
formati si scalano in proporzione.

---

## 1. Formati in uso

Quattro formati, ognuno con un mestiere diverso. Non sono intercambiabili: il carosello
argomenta, l'infografica riassume, la card editoriale rimanda, l'animata ferma lo scroll.

| Formato | Tela | Export | Estensione | Quando |
|---|---|---|---|---|
| **Carosello verticale 4:5** | 1080 × 1350 | PDF multipagina, 900 × 1125 pt | 5–7 slide | Formato principale. Un ragionamento in più passaggi: policy, studi, cambi di scenario |
| **Carosello quadrato 1:1** | 1080 × 1080 | PDF multipagina, 900 × 900 pt | 6–8 slide | Temi di attualità a presa rapida, con foto forte |
| **Infografica singola 4:5** | 1080 × 1350 | PDF o PNG, 810 × 1012 pt | 1 tavola | Un intero studio in una tavola: molti dati, letta zoomando |
| **Card editoriale 4:5** | 1200 × 1500 | PNG | 1 card | Rilancio di un contenuto esterno (rubriche tipo *Friday Reading*) |
| **Infografica animata** | 1080 × 1350 · 30 fps · 8 s | MP4 H.264 + PNG dell'ultimo frame | 1 clip | Quando il dato cresce fino al valore finale. Variante 16:9 1920×1080 per il cliente |

Il rapporto **4:5 è il default**: è il formato che occupa più altezza nel feed LinkedIn.
Si passa all'1:1 solo quando l'immagine conta più del testo.

### 1.1 Margini e griglia

| | |
|---|---|
| Margine esterno | **64 px** (carosello) · **72 px** (infografica) |
| Griglia | modulare 8 px, come da brand manual |
| Corpo minimo | **12 px** — mai sotto, nemmeno nelle didascalie micro |
| Angoli | **spigolo vivo** ovunque: chip, bande, card, box. Nessun border-radius |

Ogni slide è uno `.stage` a dimensione fissa, centrato in viewport, con `overflow:hidden`.
Pattern di partenza in [`progetti/Infografica FITP SROI/index-linkedin.html`](../progetti/Infografica%20FITP%20SROI/index-linkedin.html).

### 1.2 Nomi dei file

Convenzione in uso: **`LKD_DDMMYY_Tema.pdf`**, con la data di pubblicazione.

```
LKD_280726_Aerospazio e difesa_FONDI.pdf
LKD_200926_t33 - l'effetto leva degli strumenti finanziari.pdf
LKD_290426_Italia Fuori dai Mondiali.pdf
LKD_100726_Friday Reading_Guida economia circolare.png
LKD_280526_PNRR 55 giorni alla chiusura_Infografica.pdf
```

Il tipo si aggiunge in coda solo se non è ovvio (`_Infografica`). Per le consegne al cliente
esiste la variante `Linkedin_OE_CLIENTE_TEMA_ANNO` (es. `Linkedin_OE_FITP_SROI_BNL_Internazionali_2026`):
usarla quando il file esce dallo studio e serve che sia leggibile da chi non conosce la sigla.

### 1.3 Come si consegna

- **Carosello** → un **unico PDF multipagina**, una slide per pagina, nell'ordine di lettura.
  LinkedIn lo pubblica come documento sfogliabile. Niente PDF separati per slide.
- **Cover alternative** → si consegnano **dentro lo stesso PDF, in testa**, come pagine
  successive (es. 5 cover + 6 slide = 11 pagine). Chi pubblica sceglie e cancella le altre.
- **Infografica** → una tavola per variante cromatica, tutte nello stesso PDF, dalla più neutra
  alla più satura. Serve a far scegliere l'intensità, non a proporre impaginati diversi:
  **contenuto e impianto restano identici tra le varianti**.
- **Animata** → MP4 (`libx264`, `crf 17`, `yuv420p`, `+faststart`) **più** il PNG dell'ultimo
  frame, che vale come statica di riserva. Il video si ferma sull'infografica completa:
  l'ultimo fotogramma deve reggere da solo.

**PDF da HTML, con testo editabile in Canva.** Chrome esporta il testo scritto con un font
**variabile** come font Type3 — glifi disegnati parola per parola: in PDF non è più testo, e
Canva lo importa come forme. I font del design system sono variabili, quindi serve un foglio
di stile di export che dichiari **istanze statiche** sotto **nomi di famiglia propri**
(`OE Sans` / `OE Mono` / `OE Serif`) e rimappi `--oe-font-*`. Ridichiarare la stessa famiglia
non basta: la faccia variabile continua a vincere. Esempio funzionante:
`progetti/Infografiche FITP Industria/fonts-static.css`.
Prima di importare in Canva vanno caricati lì gli stessi font (Brand → Font), altrimenti li
sostituisce.

---

## 2. Ordine compositivo (invariante)

Sempre lo stesso, dall'alto:

```
[↘] CHIP (mono, lime)  →  NUMERO o TITOLO (serif)  →  CORPO (sans)  →  DATO/GRAFICA  →  FOOTER (logo + fonte)
```

- Il **lockup box ↘ + chip mono lime in alto a sinistra** apre ogni slide: è l'ancora fissa
  del formato (§5.1).
  Nel carosello nomina la *sezione* (`LA SCALA`, `L'ARCHITETTURA · QFP 2028–2034`,
  `I FATTORI DETERMINANTI`, `INSIGHT`), non il contenuto.
- Il **monogramma OE in basso a sinistra** chiude ogni slide, senza eccezioni.
- **Un solo messaggio per slide.** Se servono due idee, servono due slide.

---

## 3. Gerarchia tipografica

Tre famiglie, tre ruoli separati. Non si scambiano mai.

| Ruolo | Font | Size (1080×1350) | Trattamento |
|---|---|---|---|
| Numero eroe (cover) | `--oe-font-serif` | 180–210 px | line-height .85, tracking −.02em, unità (`mld`, `€`, `×`) in serif più piccolo (~45 %) |
| Titolo slide | `--oe-font-serif` | 76–88 px | line-height .98–1.05, max 3 righe |
| Titolo infografica | `--oe-font-serif` | 60–68 px | + sottotitolo sans 28–32 px |
| KPI / dato in card | `--oe-font-serif` | 46–56 px | tracking −.015em |
| Micro-KPI in box | `--oe-font-serif` | 22–26 px | caption mono 12 px sotto |
| Corpo | `--oe-font-sans` | 24–28 px | line-height 1.45, max ~60 caratteri per riga |
| Didascalia / label | `--oe-font-sans` | 18–20 px | line-height 1.38 |
| Chip, kicker, label dato | `--oe-font-mono` | 15–18 px | **UPPERCASE**, letter-spacing .16–.20em |
| Fonte / nota | `--oe-font-sans` *italic* | 13–14 px | `--oe-bluette-700` su chiaro, `--oe-bluette-200` su scuro |

**Regola d'oro:** i numeri sono **sempre serif**, le loro etichette **sempre mono maiuscolo**.
È questo contrasto — grazia editoriale contro monospace tecnico — a firmare il formato.

---

## 4. Colore

### 4.1 Le due modalità

**Scura** (cover, slide di rottura, chiusura, quote)
- Fondo `--oe-bluette-900` (`#270065`), oppure foto/pattern desaturati e tinti dello stesso viola.
- Titolo **bianco**; numero eroe e parole-chiave **lime** (`--oe-pop`).
- Corpo bianco; testo attenuato `--oe-on-dark-muted` (`--oe-bluette-200`).
- Card interne `--oe-bluette-600`; bande secondarie `--oe-bluette-800`.

**Chiara** (slide di dati, confronti, liste, infografica)
- Fondo `--oe-white` o `#F5F5F9` con pattern puntinato tenue.
- Titolo **nero**, con **una** parola o numero in `--oe-bluette-700`.
- Corpo `--oe-gray-800`; label `--oe-gray-600`; hairline `--oe-gray-300` (1–2 px).
- Riempimenti dato: `--oe-bluette-700` (testo bianco) e `--oe-pop` (testo nero).

### 4.2 Regole di contrasto

Solo gli accoppiamenti canonici del brand manual:
**bluette su bianco · lime su nero · bianco su bluette · nero su lime.**
Lime e bluette non si toccano mai come testo-su-fondo.

### 4.3 Il lime è un accento, non una superficie

Il lime marca **una cosa sola per slide**: il chip di sezione, il numero eroe, il valore
massimo del grafico, il bottone. Se in una slide risaltano due elementi lime, uno è di troppo.
Eccezione: nelle liste numerate ogni bullet quadrato è lime — lì è un segno ripetuto, non un accento.

### 4.4 Varianti cromatiche dell'infografica

Le 7 varianti FITP/BNL sono lo spettro ammesso, in ordine di intensità:

1. **Neutra** — fasce bluette-700 su card `--oe-gray-100`. Default per dati fitti.
2. **Tinta** — sezioni su `--oe-accent-soft` / lime-050, fasce colorate per tema.
3. **Piena** — pagina interamente `--oe-bluette-700`, testo bianco, numeri lime.

Dentro una singola variante la codifica colore deve restare **semantica e costante**:
se il blocco "sanitari" è lime, lo è in tutta la tavola.

---

## 5. Elementi ricorrenti

### 5.1 Lockup di sezione: box ↘ + chip
L'elemento che apre ogni slide. Due pezzi **affiancati e separati da un filo di spazio**,
allineati in alto a sinistra al margine:

```
[ ↘ ]  [ NOME SEZIONE ]
 box      chip
```

- **Box icona**: quadrato ~44 px, fondo lime, freccia diagonale a tratto singolo.
  Tratto bluette su chiaro, nero su scuro. Può anche essere solo contornato.
- **Chip**: rettangolo pieno lime, mono uppercase, padding ~`10px 20px`,
  letter-spacing .18em. Testo nero su chiaro, nero su scuro (il chip resta sempre lime).

Entrambi a **spigolo vivo**. La freccia sta **solo nel box**, mai dentro il chip:
il chip è testo e basta. Il box può mancare (caroselli T33 e Difesa), il chip mai.

### 5.2 Box ↘ nelle card KPI
Lo stesso box icona apre ogni card KPI dell'infografica, sopra l'etichetta mono.
Stesso disegno, stessa regola: box lime, tratto singolo, nessuna variante colorata.

### 5.3 Card KPI (infografica)
```
[box ↘]
LABEL MONO UPPERCASE
466 mln €          ← serif, --oe-bluette-700
50 %   Sportivi    ← righe divise da hairline tratteggiato
```
Le righe interne si separano con hairline `--oe-gray-300`, continue o tratteggiate.

### 5.4 Strip di micro-KPI
Fila di 2–4 box bianchi bordati (o pieni bluette-600 nella variante scura):
numero serif sopra, caption mono 12 px sotto. Servono a *qualificare* il KPI grande
accanto a cui stanno, non a competerci.

### 5.5 Banda di sezione
Barra piena a tutta larghezza, altezza ~32 px, mono uppercase.
`--oe-bluette-700` + testo bianco per i blocchi principali;
`--oe-pop` + testo nero per il blocco che si vuole isolare (es. "Benefici sanitari").
Variante leggera: fondo tinta + **barra verticale lime 4 px** a sinistra del titolo.

### 5.6 Confronto prima/dopo
Due colonne pari altezza: sinistra **grigia** (`--oe-gray-100`, testo nero, bullet trattino `–`),
destra **bluette-700** (testo bianco, kicker mono lime, bullet freccia `→`).
Tra le due, una piccola freccia bluette. Il "dopo" è sempre a destra e sempre pieno.

### 5.7 Catena gerarchica
Bande impilate separate da `↓`, dal generale allo specifico, con il colore che si intensifica:
`--oe-bluette-050` → `--oe-bluette-400` → `--oe-bluette-700` → `--oe-pop` (il focus).
Label mono + descrittore sans a sinistra, importo serif a destra.

### 5.8 Lista numerata
Quadrato lime ~52 px con cifra nera, voce sans 28–30 px a destra, molta aria tra le righe.

### 5.9 Bottone di avanzamento (carosello)
In basso a destra: bottone lime `AVANTI` (mono uppercase nero) **+ quadrato separato** con
bordo lime e freccia ↘. Presente su ogni slide tranne l'ultima, dove lo sostituisce la CTA.

### 5.10 Cover
- Foto o texture a destra, testo a sinistra.
- Lockup box+chip in alto a sinistra al margine.
- Numero eroe lime **oppure** titolo serif bianco — non tutti e due.
- Sottotitolo sans, se serve preceduto da una **barra verticale lime 4 px** a sinistra.
- Monogramma OE in basso a sinistra; `AVANTI` in basso a destra.

### 5.11 Slide di chiusura
- Riprende **la stessa foto della cover**: apre e chiude il giro.
- **Wordmark esteso OpenEconomics** in alto a sinistra (unico posto dove si usa esteso),
  monogramma comunque in basso a sinistra.
- Claim in **sans**, non in serif: è una presa di posizione, non un titolo.
- Nessun dato nuovo, nessun `AVANTI`.
- CTA: lockup **box ↘ + chip lime** con l'invito o il recapito
  (`MARKETING@OPENECONOMICS.EU`, `PARLIAMO DEL POSIZIONAMENTO DELLA TUA IMPRESA`,
  `LINK AL RAPPORTO NEL PRIMO COMMENTO`).
  Formulata come invito, mai come imperativo di vendita.

---

## 6. Loghi

| | |
|---|---|
| Monogramma OE | **sempre in basso a sinistra**, ~52–70 px, bianco su scuro / nero su chiaro |
| Wordmark esteso | solo sulla **slide di chiusura**, in alto a sinistra. Mai altrove nel carosello |
| Logo cliente | in alto a destra sull'infografica (allineato al titolo), oppure nella fascia footer accanto all'OE |
| Colore | solo bianco o nero, mai grigio, mai il logo colorato |
| Clearance | pari alla dimensione della "O" |
| Gerarchia | il logo non è mai l'elemento più evidente della tavola |
| Co-branding | fascia footer `--oe-gray-100` (o bluette-700 in variante piena) con i marchi a sinistra e la fonte a destra |

---

## 7. Immagini

Tre trattamenti distinti, uno per mestiere.

**1. Foto a colori, soggetto caldo su viola freddo** — cover e chiusura del carosello.
Il soggetto (atleta, mano, oggetto) è caldo e saturo, lo sfondo è un viola sfocato che sfuma
verso il bluette. Occupa la **metà destra** a tutta altezza, il testo sta a sinistra e non ci
finisce mai sopra. È la regola fotografica del brand manual, ed è ciò che rende riconoscibile
una cover OE a distanza.

**2. Soggetto scontornato in bianco e nero** — infografiche dati.
Sempre **a destra**, sconfina oltre il bordo della card o della fascia. La colonna testo ha
larghezza fissa e la figura vive nello spazio residuo, così il dato non ci va mai sopra.

**3. Texture fotografica** — cover scure senza soggetto (paesaggi, satellitari, astratti).
Desaturata e tinta bluette-900, contrasto abbassato: deve leggersi come fondo, non come
fotografia. Sopra ci va testo, quindi va tenuta sotto il 25% di luminanza.

**Pattern** (alternativa alla foto): forme modulari del brand — blocchi "Fora", scacchiera di
quadrati — in `--oe-gray-100` su chiaro, `--oe-bluette-800` su scuro. Ancorati a un lato, mai
centrati. Su fondo chiaro va bene anche il retino puntinato tenue a tutta tela.

**Vietato**: stock generico, foto sfocate, bassa risoluzione, atleti riconoscibili o marchi di
sponsor in campo. Il brand manual **sconsiglia le immagini generate da AI**: se si usano (come
nel tennista dell'infografica FITP, scelta consapevole) va detto, e per un pezzo definitivo
l'alternativa pulita è chiedere una foto ufficiale al cliente.

---

## 8. Fonti e note

Chiudono ogni tavola, mai facoltative.

- Nota di fonte per singolo dato: sans *italic* 13–14 px, allineata a destra sotto il dato,
  `--oe-bluette-700` su chiaro / `--oe-bluette-200` su scuro.
  Forma: `fonte: WELLBY Italia – Nielsen su Paralimpiadi 2024`.
- Nota generale in footer: 13 px, grigia, a destra, con **titolarità + perimetro + data**.
  Forma: `Elaborazioni e stime di OpenEconomics su dati FITP. Dati riferiti agli Internazionali
  BNL d'Italia 2026. Ultimo aggiornamento: maggio 2026.`
- Numeri in formato italiano: `237.775`, `152,9 mln €`, `7,14`.
  Usare l'helper `formatNumber` di `tokens.ts` con `useGrouping: "always"` (le regole it-IT
  non raggruppano i numeri a 4 cifre di default).

---

## 9. Struttura del carosello

Sequenza collaudata, 5–7 slide:

1. **Cover** — scura, numero eroe lime, kicker mono, titolo serif, una riga di sottotitolo.
2. **La scala** — chiara, un confronto visivo che dimensiona il numero della cover.
3. **L'architettura** — chiara, catena gerarchica: dove si colloca il tema.
4. **Le regole / il contesto** — scura, due card affiancate + banda di sintesi.
5. **Il cambio** — chiara, confronto prima/dopo.
6. **Gli strumenti** — chiara, strip di KPI + righe di dettaglio: il livello operativo.
7. **Chiusura** — scura, tesi in serif grande + CTA. Nessun dato nuovo.

L'alternanza **scuro / chiaro** scandisce il ritmo: le slide scure aprono e chiudono e
segnano i cambi di capitolo, le chiare portano i dati.

**Variante quadrata (1:1)**, per i temi di attualità: la cover è una foto a colori a tutta tela
e il ragionamento si accorcia a 6 slide — contesto → shock → impatto → danno allargato →
metodologia → chiusura. La metodologia qui è una slide a sé, non una nota: è ciò che distingue
un'analisi OE da un commento.

**Cover alternative**: quando il tema regge più di un'immagine, si producono 3–5 cover diverse
(stesso testo, foto diversa) e si mettono in testa al PDF. Cambia solo la foto: testo, gerarchia
e posizioni restano identici.

---

## 10. Errori da non fare

- Serif per il testo lungo o piccolo (è solo da display).
- Mono per qualcosa che non sia chip, label, codice o cifra tecnica.
- Più di un accento lime per slide.
- Frecce o icone dentro i chip.
- Numeri senza etichetta mono, o etichette senza unità di misura.
- Tavole senza fonte e senza data di aggiornamento.
- Testo sopra il soggetto fotografico.
- Angoli arrotondati su chip e bande (il formato è a spigolo vivo).
- Grigi diversi da `--oe-gray-*` per "ammorbidire" il viola.
- Logo OE spostato dall'angolo in basso a sinistra.
- Wordmark esteso su una slide che non sia la chiusura.
- Foto in B/N sulla cover del carosello (lì la foto è a colori, soggetto caldo su viola).
- Claim di chiusura in serif (va in sans).
- Carosello consegnato come PDF separati anziché un unico multipagina.
- Varianti cromatiche con impaginati diversi: cambia il colore, non il layout.

---

## 11. Boilerplate

```html
<link rel="stylesheet" href="../../design-system/src/styles/colors_and_type.css" />
<style>
  .stage{
    position:relative; width:1080px; height:1350px; overflow:hidden;
    padding:64px; display:flex; flex-direction:column;
    font-family:var(--oe-font-sans);
    background:var(--oe-white); color:var(--oe-black);
  }
  .stage--dark{ background:var(--oe-bluette-900); color:var(--oe-white); }

  .chip{
    align-self:flex-start; background:var(--oe-pop); color:var(--oe-pop-on);
    font-family:var(--oe-font-mono); font-size:17px; font-weight:600;
    letter-spacing:.18em; text-transform:uppercase; padding:10px 20px 9px;
  }
  .hero{ font-family:var(--oe-font-serif); font-size:200px; line-height:.85;
         letter-spacing:-.02em; color:var(--oe-pop); }
  .hero .u{ font-size:45%; }
  .title{ font-family:var(--oe-font-serif); font-size:84px; line-height:1;
          letter-spacing:-.015em; }
  .title em{ font-style:normal; color:var(--oe-bluette-700); }   /* chiara */
  .stage--dark .title em{ color:var(--oe-pop); }                  /* scura  */
  .lead{ font-size:26px; line-height:1.45; max-width:24em; }
  .label{ font-family:var(--oe-font-mono); font-size:15px; letter-spacing:.2em;
          text-transform:uppercase; color:var(--oe-gray-600); }
  .src{ font-size:13px; font-style:italic; color:var(--oe-bluette-700); text-align:right; }
  .foot{ margin-top:auto; display:flex; align-items:flex-end;
         justify-content:space-between; gap:40px; }
</style>
```

---

## Vedi anche

- `README.md` — struttura e uso del design system
- `src/tokens.ts` — stessi valori in JS (`color`, `chartSeries`, `formatNumber`)
- `../Contesto/BRAND_OpenEconomics.md` — brand manual completo
- `../progetti/Infografica FITP SROI/` — infografica animata di riferimento (HTML + render)
