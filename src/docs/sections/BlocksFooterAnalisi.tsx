import Demo from '../ui/Demo'
import { Footer } from '../../components'

const flush = { margin: '-32px' } as const

export default function BlocksFooterAnalisi() {
  return (
    <section id="blocks-footer-analisi" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Footer Analisi</span>
      <h2>Footer Analisi</h2>
      <p className="dx-lead">
        La chiusura obbligata di ogni landing di studio e di ogni documento di analisi: wordmark,
        payoff, condizioni d'uso e riga legale. È la variante «analisi» del footer — quella con il
        disclaimer — e in un'analisi non si usa la variante standard.
      </p>

      <Demo
        title="Footer Analisi"
        description="In React è il componente Footer con variant=&quot;analisi&quot;. Nelle pagine statiche (casi studio, report esportati) si scrive il markup qui sotto: stesse classi, stesso risultato."
        code={`<!-- React -->
import { Footer } from '@/components'
<Footer variant="analisi" />

<!-- HTML statico -->
<footer class="oe-footer oe-footer--analisi">
  <div class="oe-footer__inner">
    <div class="oe-footer__top">
      <div class="oe-footer__brand">
        <svg class="oe-footer__logo">…</svg>   <!-- wordmark bianco -->
        <p class="oe-footer__tagline">Enabling adaptation. Empowering impact.
          With platforms, strategy, and trust.</p>
      </div>
      <div class="oe-footer__disclaimer">
        <span class="oe-footer__disclaimer-label">Condizioni d'uso</span>
        Il presente documento e tutte le informazioni in esso contenute possono
        essere divulgati, a condizione che la distribuzione avvenga citando
        OpenEconomics come fonte. …
      </div>
    </div>
    <hr class="oe-footer__rule">
    <div class="oe-footer__bottom">
      <p class="oe-footer__meta">© 2026 OpenEconomics&nbsp;| Partita Iva 12504821005</p>
      <nav class="oe-footer__links" aria-label="Note legali">
        <a class="oe-footer__link" href="https://www.openeconomics.eu/privacy-policy"
           target="_blank" rel="noopener">Privacy Policy</a>
        <a class="oe-footer__link" href="https://www.openeconomics.eu/cookie-policy"
           target="_blank" rel="noopener">Cookie Policy</a>
      </nav>
    </div>
  </div>
</footer>`}
      >
        <div style={flush}>
          <Footer variant="analisi" />
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Variante</span>
          <h3 className="oe-card__title">Analisi, non standard</h3>
          <p className="oe-card__body">
            Se la pagina contiene stime, modelli o dati elaborati, il footer è quello con le
            condizioni d'uso. Lo standard resta per sito e landing commerciali.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Contenuto</span>
          <h3 className="oe-card__title">Wordmark, payoff, disclaimer</h3>
          <p className="oe-card__body">
            Nell'ordine: wordmark bianco e payoff a sinistra, condizioni d'uso a destra; sotto la
            riga, copyright con partita IVA e i due link legali. Niente selettore di lingua.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Link</span>
          <h3 className="oe-card__title">Al sito, non a pagine locali</h3>
          <p className="oe-card__body">
            Privacy e cookie policy puntano alle pagine di
            <code> openeconomics.eu</code>, in scheda nuova: sono quelle ufficiali, non se ne
            duplicano copie dentro il progetto.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Allineamento</span>
          <h3 className="oe-card__title">Stessa colonna di tutto il resto</h3>
          <p className="oe-card__body">
            La fascia è full-bleed ma il contenuto cade sulla colonna condivisa: il footer non ha
            un wrapper interno e usa il token <code>--oe-band-pad</code>, che risolve alla stessa
            larghezza di <code>.oe-container</code>. Il bordo sinistro del wordmark deve stare
            esattamente sotto quello del logo in testa alla pagina.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Testo</span>
          <h3 className="oe-card__title">Il disclaimer non va in corsivo</h3>
          <p className="oe-card__body">
            È il punto in cui il corsivo rientra dalla finestra: non si usa. Il disclaimer è testo
            piccolo ma dritto, con l'etichetta «Condizioni d'uso» in mono uppercase a fare da
            attacco.
          </p>
        </article>
      </div>
    </section>
  )
}
