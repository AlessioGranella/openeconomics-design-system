import Demo from '../ui/Demo'

export default function BlocksCaseStudy() {
  return (
    <section id="blocks-case-study" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Caso studio</span>
      <h2>Blocchi — Pagina caso studio</h2>
      <p className="dx-lead">
        Struttura standard di una pagina caso studio OpenEconomics: una sola scroll,
        fasce full-bleed e contenuto sempre sulla stessa colonna. Punto di partenza pronto:
        <code> progetti/_template-caso-studio/</code>.
      </p>

      <h3>1. Impianto della pagina — la regola che viene prima di tutte</h3>
      <Demo
        title="Fascia full-bleed + contenitore interno"
        description="Ogni fascia (header, hero, sezione, CTA, footer) porta solo sfondo e padding VERTICALE. Il padding orizzontale e il cap a 1440px stanno sul wrapper interno .oe-container. Così tutti i bordi sinistri cadono sulla stessa colonna."
        code={`<header class="site">                       <!-- fascia: sfondo + bordo, a tutta larghezza -->
  <div class="oe-container site__inner"> … </div>   <!-- contenuto: 1440 + 32px -->
</header>

<section class="band band--tint">           <!-- fascia: solo padding verticale -->
  <div class="oe-container"> … </div>
</section>

<!-- I componenti-fascia del DS non hanno wrapper interno:
     usano --oe-band-pad e cadono sulla stessa colonna da soli -->
<section class="oe-cta"> … </section>
<footer class="oe-footer oe-footer--analisi"> … </footer>`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          <strong>Trappola ricorrente:</strong> scrivere <code>padding: 16px 0</code> sulla fascia
          che è anche <code>.oe-container</code>. La shorthand azzera il{' '}
          <code>padding-inline</code> del contenitore e quella fascia esce 32px più larga per lato.
          Usare sempre <code>padding-block</code> quando il padding orizzontale arriva dal
          contenitore.
        </p>
      </Demo>

      <h3>2. Hero</h3>
      <Demo
        title="Hero Analisi"
        description="La hero è un UI Block a sé: .oe-hero-analisi. Markup, regole e responsive stanno nella scheda «Hero Analisi» della libreria."
        code={`<section class="oe-hero-analisi">
  <div class="oe-hero-analisi__media"><img src="assets/hero.jpg" alt="" aria-hidden="true"></div>
  <div class="oe-container">
    <div class="oe-hero-analisi__top">
      <span class="oe-tag-chip oe-tag-chip--lime">Caso studio</span>
      <img class="oe-hero-analisi__client" src="assets/logo-cliente.svg" alt="Nome cliente">
    </div>
    <h1 class="oe-hero-analisi__title">…</h1>
    <p class="oe-hero-analisi__sub">…</p>          <!-- facoltativo -->
    <dl class="oe-hero-analisi__meta"> … </dl>     <!-- set chiuso di cinque indicatori -->
  </div>
  <p class="oe-hero-analisi__cue" aria-hidden="true">Scorri<span></span></p>
</section>`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          Il chip dice di che cosa si tratta: <strong>Caso studio</strong> per un cliente,
          <strong> Studio indipendente</strong> per uno studio di OpenEconomics — da chiarire
          prima di impostare la pagina. Gli indicatori sono un set chiuso (tipo di analisi,
          modello / metodologia, fonti, anno di riferimento, ultimo aggiornamento) valido per
          tutte le landing di studi e analisi.
        </p>
      </Demo>

      <h3>3. Sequenza delle sezioni</h3>
      <Demo
        title="Ordine standard"
        description="Dieci fasce, sempre in quest'ordine. Le sezioni interne alternano bianco e grigio (--oe-bg-elev) per scandire la lettura; scure solo hero e «consegnato»."
        code={`1.  header          fascia bianca, solo il logo OpenEconomics a sinistra
2.  hero            immagine + velo; chip lime, logo cliente, H1, sottotitolo, indicatori
3.  sintesi KPI     chip «Executive Summary» + .oe-kpi — l'ultimo in variante --dark
4.  contesto        chip + H2 + testo su due colonne, sotto 2–3 .oe-card affiancate
5.  metodo          due colonne: i modelli usati, con la catena input → output → outcome
6.  dati di input   il perimetro dell'analisi + primo grafico
7.  risultati       grafici con controlli, commento a fianco, tabella dati sotto
8.  geografia       mappa + classifica sincronizzata (se l'analisi è territoriale)
9.  consegnato      fascia scura: cosa è stato prodotto + numeri di lavorazione
10. CTA + footer    .oe-cta e footer "analisi": wordmark, payoff, disclaimer
                    + riga legale (© · P.IVA · privacy · cookie)

Ritmo: le sezioni interne alternano BIANCO e GRIGIO (--oe-bg-elev).
Le uniche fasce scure sono la hero e «consegnato».
Le sezioni di NOTA METODOLOGICA fanno eccezione: fondo bluette-050
(--oe-bg-tint), il colore che distingue questo tipo di sezione.

Kicker di sezione: chip lime sopra l'H2, non .oe-eyebrow —
<span class="oe-tag-chip oe-tag-chip--lime">Il punto di partenza</span>`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          Il caso studio racconta <strong>il lavoro</strong>, non solo i risultati: contesto e
          metodo stanno prima dei numeri, e la fascia “consegnato” chiude dicendo cosa il cliente
          ha in mano.
        </p>
      </Demo>

      <h3>4. Figura</h3>
      <Demo
        title="Grafico con controllo e fonte"
        description="Ogni grafico sta in una .fig: etichetta mono numerata, titolo, eventuale controllo segmentato, il grafico, la fonte. Sotto i grafici principali va la tabella dati (.oe-table) come vista alternativa."
        code={`<div class="fig">
  <div class="fig__head">
    <span class="oe-figure-label">Grafico 1</span>
    <p class="fig__title">Titolo che dice cosa mostra il grafico</p>
  </div>
  <div class="fig__ctrl">
    <span class="fig__ctrl-label">Anno</span>
    <div class="oe-segment" role="tablist"> … </div>
  </div>
  <div data-oe-chart="spesa"></div>
</div>

<div class="oe-table__wrap">
  <table class="oe-table oe-table--numeric"> … </table>
</div>`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          Colore dei grafici: rampa ordinale di una sola tinta per le serie ordinate
          (diretto → indiretto → indotto), accento pieno per la serie singola, scala sequenziale
          per le mappe. Legenda sempre presente e tabella sotto, perché i passi chiari della rampa
          non arrivano a 3:1 sul bianco.
        </p>
        <p className="oe-card__body" style={{ marginBottom: 0 }}>
          <strong>Aria intorno alla figura — regola fissa.</strong> Il riquadro ha sempre 32px di
          margine sopra e 40px sotto ({'--oe-space-l'} / {'--oe-space-xl'}), 24/32 su mobile: il
          testo che segue non tocca mai il bordo. Un h3 subito dopo una figura rientra a 32px
          (.fig + h3).
        </p>
      </Demo>

      <h3>5. Numeri</h3>
      <Demo
        title="Display e dati"
        description="Hedvig solo sui numeri in evidenza; tutto il resto in Atkinson tabulare (vedi The Display-Number Rule)."
        code={`Hedvig  → .oe-kpi__value · .oe-stat__num · .oe-num--display · cifra-titolo di un grafico
Atkinson → etichette di valore sulle barre, classifiche, tooltip, tabelle, testo corrente
Mono     → chip, .oe-figure-label, label KPI, unità`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          Soglia indicativa: 28px. Numeri sempre in locale IT — migliaia “.”, decimale “,”.
        </p>
      </Demo>

      <h3>6. Interazione</h3>
      <Demo
        title="Cosa deve fare la pagina"
        description="Il motore dei grafici sta nel template (js/charts.js): SVG disegnato a runtime, nessuna dipendenza, dati inline così la pagina funziona anche da file://."
        code={`• controlli segmentati (.oe-segment) per cambiare vista sullo stesso grafico
• tooltip su mouse, tocco e Tab: scomposizione, denominazione estesa, quota
• legenda attiva: puntare una voce isola la serie
• mappa e classifica sincronizzate nei due sensi
• ogni animazione ha il suo fallback in prefers-reduced-motion`}
      >
        <p className="oe-card__body" style={{ margin: 0 }}>
          Un caso studio si legge a colpo d'occhio e si esplora: i numeri di dettaglio stanno nel
          tooltip e nella tabella, non nel grafico.
        </p>
      </Demo>
    </section>
  )
}
