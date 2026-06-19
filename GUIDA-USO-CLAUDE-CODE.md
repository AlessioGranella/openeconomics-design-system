# Guida: usare il Design System OpenEconomics in Claude Code

Passaggi precisi per iniziare a usare il design system (OpenEconomics + Civiqa) nei tuoi progetti con Claude Code.

---

## 0. Prerequisiti (una volta sola)

Assicurati di avere installato:

- **Node.js 20+** → verifica con `node -v`. Se manca: https://nodejs.org (scarica la versione "LTS").
- **Git** → verifica con `git -v`. Se manca: https://git-scm.com
- **Claude Code** → l'estensione/CLI che stai già usando.

---

## 1. Scarica il design system

Apri il terminale e clona il repo nella cartella dove tieni i progetti:

```bash
git clone https://github.com/AlessioGranella/openeconomics-design-system.git
cd openeconomics-design-system
```

> In alternativa, se hai ricevuto lo **zip**: scompattalo e apri la cartella `design-system`. (Il metodo `git clone` è meglio: ti permette di aggiornarti con `git pull`.)

---

## 2. Guarda la libreria (UI kit) nel browser

Sempre dentro la cartella del design system:

```bash
npm install      # installa le dipendenze (la prima volta, ~1 min)
npm run dev
```

Apri il link che compare (di solito **http://localhost:5173**). Vedrai colori, tipografia, griglia, componenti e la sezione **Civiqa**. Per fermarlo: `Ctrl + C` nel terminale.

> Puoi anche consultarlo online senza installare nulla: https://alessiogranella.github.io/openeconomics-design-system/

---

## 3. Apri la cartella in Claude Code

Apri la cartella `openeconomics-design-system` in Claude Code.
Appena la apri, Claude Code legge automaticamente il file **`CLAUDE.md`** incluso nel repo: da quel momento conosce le regole di brand (i due brand OpenEconomics/Civiqa, lo spigolo vivo, i font, ecc.).

✅ Verifica veloce: chiedi a Claude Code *"che design system è questo e quali brand supporta?"*. Se risponde citando OpenEconomics e Civiqa, è tutto a posto.

---

## 4. Usarlo in un TUO progetto

Hai due modi, scegli in base a dove vive il tuo progetto.

### Modo A — Progetto nella stessa cartella superiore (consigliato per iniziare)
Tieni il tuo progetto **accanto** alla cartella del design system, così:

```
miei-progetti/
├── openeconomics-design-system/      ← il design system
└── mio-progetto/                     ← il tuo progetto
```

Nel tuo progetto, collega i token CSS con un percorso relativo. Esempio in un file HTML/CSS:

```html
<link rel="stylesheet" href="../openeconomics-design-system/src/styles/colors_and_type.css">
```

oppure in un CSS:

```css
@import "../openeconomics-design-system/src/styles/colors_and_type.css";
```

### Modo B — Installarlo come dipendenza (per progetti React/Vite)
Dentro il tuo progetto:

```bash
npm install github:AlessioGranella/openeconomics-design-system
```

e poi importi token e componenti dal pacchetto.

---

## 5. Il passo IMPORTANTE: di' a Claude Code di usarlo

Quando inizi un progetto, dai a Claude Code un'istruzione tipo:

> «Per questo progetto usa il design system OpenEconomics che trovi in `../openeconomics-design-system` (token, font, componenti). Rispetta le regole del suo `CLAUDE.md`.»

Claude Code, seguendo le regole del design system, **ti chiederà sempre prima: vuoi il brand OpenEconomics o il brand Civiqa?**

- **OpenEconomics** → accento viola/lime, nessuna classe extra.
- **Civiqa** → stesso design, accento blu: basta aggiungere la classe **`theme-civiqa`** sull'elemento radice (di solito `<body class="theme-civiqa">`). Tutti i componenti diventano blu in automatico.

---

## 6. Tenere aggiornato il design system

Quando viene rilasciata una nuova versione, dentro la cartella del design system:

```bash
git pull
npm install      # solo se sono cambiate le dipendenze
```

I tuoi progetti che lo collegano via percorso (Modo A) prenderanno gli aggiornamenti subito.

---

## Promemoria regole di brand (le applica già Claude Code)

- Spigolo vivo ovunque (niente angoli arrotondati).
- Due accenti per brand: OE = Bluette + Lime; Civiqa = blu `#0000FF`.
- Font: Hedvig serif (titoli), Atkinson Hyperlegible Next (testo), Atkinson Mono (dati/tag).
- Fondo bianco vero, mai cream/beige.
- Numeri in formato italiano (migliaia con `.`, decimali con `,`).
- Mai immagini generate con AI senza chiedere prima.

---

## In difficoltà?

- La libreria non parte? Controlla `node -v` (serve 20+) e di aver fatto `npm install`.
- Vuoi solo *vedere* i componenti senza installare? Usa il sito: https://alessiogranella.github.io/openeconomics-design-system/
- Per dubbi sul codice, chiedi direttamente a Claude Code dentro la cartella del design system: conosce già tutto grazie al `CLAUDE.md`.
