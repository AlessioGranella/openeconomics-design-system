import Demo from '../ui/Demo'
import { Wordmark } from '../../components'

const flush = { margin: '-32px' } as const

const STUDIES_URL = 'https://studies.openeconomics.sites.oeapp.eu/'

const sezioni = [
  ['executive-summary', 'Executive Summary'],
  ['punto-di-partenza', 'Il punto di partenza'],
  ['metodo', 'Il metodo'],
  ['risultati', 'I risultati'],
  ['consegnato', 'Consegnato'],
  ['nota-metodologica', 'Nota metodologica'],
]

export default function BlocksNavAnalisi() {
  return (
    <section id="blocks-nav-analisi" className="dx-section">
      <span className="oe-eyebrow">UI Blocks · Navigazione Analisi</span>
      <h2>Navigazione Analisi</h2>
      <p className="dx-lead">
        La testata di ogni landing di studio o analisi, prima della hero. Due righe: la barra
        bianca, uguale in tutte le pagine Studies (logo, Metodologia e Studi pubblicati a
        sinistra, cerca e Accedi a destra), poi il menu grigio con un'ancora per ogni sezione
        della pagina.
      </p>

      <Demo
        title="Navigazione Analisi"
        description="Stessa impostazione della barra della home Studies: pannello sospeso sopra la hero. Nell'anteprima il pannello non è fissato in alto e la voce attiva è ferma sulla seconda sezione; nella pagina lo script la sposta mentre si scorre."
        code={`<header class="oe-nav-analisi">
  <div class="oe-container">
    <!-- riquadro bianco sospeso, largo quanto il contenitore -->
    <div class="oe-nav-analisi__inner">
      <div class="oe-nav-analisi__brand">
        <!-- logo OpenEconomics (svg del DS): porta sempre al sito OpenEconomics -->
        <a class="oe-logo-link" href="https://www.openeconomics.eu" target="_blank" rel="noopener">
          <svg class="oe-nav-analisi__logo" viewBox="0 0 1789 226" …>…</svg>
        </a>
      </div>
      <!-- a sinistra, accanto al logo; sotto i 900px si nascondono -->
      <ul class="oe-nav-analisi__links">
        <li><a class="oe-nav-analisi__link" href="${STUDIES_URL}metodologia/approccio-oe.html">Metodologia</a></li>
        <li><a class="oe-nav-analisi__link" href="${STUDIES_URL}#report">Studi pubblicati</a></li>
      </ul>
      <!-- a destra: cerca e Accedi (su mobile resta solo l'icona) -->
      <div class="oe-nav-analisi__icons">
        <a class="oe-nav-analisi__icon" href="${STUDIES_URL}#report" aria-label="Cerca uno studio"><svg …>…</svg></a>
        <a class="oe-nav-analisi__icon" href="${STUDIES_URL}private/index.html" aria-label="Accedi all'area riservata"><svg …>…</svg><span>Accedi</span></a>
      </div>
    </div>
  </div>
</header>

<!-- riquadro grigio attaccato sotto: una voce per ogni sezione con il chip lime,
     stesso testo del chip, nello stesso ordine della pagina. Fuori: hero, CTA, footer -->
<nav class="oe-nav-sezioni" aria-label="Sezioni della pagina">
  <div class="oe-container">
    <div class="oe-nav-sezioni__inner">
      <!-- sotto i 768px la lista si chiude dietro l'hamburger;
           il testo diventa la sezione in vista -->
      <button class="oe-nav-sezioni__toggle" type="button" aria-expanded="false" aria-controls="oe-nav-sezioni-lista">
        <span class="oe-nav-sezioni__current">Sezioni</span>
        <span class="oe-nav-sezioni__burger" aria-hidden="true"></span>
      </button>
      <ul class="oe-nav-sezioni__list" id="oe-nav-sezioni-lista">
        <li><a class="oe-nav-sezioni__link" href="#executive-summary">Executive Summary</a></li>
        <li><a class="oe-nav-sezioni__link" href="#punto-di-partenza">Il punto di partenza</a></li>
        <li><a class="oe-nav-sezioni__link" href="#metodo">Il metodo</a></li>
        <!-- … -->
      </ul>
    </div>
  </div>
</nav>

<!-- subito dopo la hero: lascia spazio al pannello da sola -->
<section class="oe-hero-analisi"> … </section>

<!-- ogni sezione indicata dal menu porta l'id dell'ancora -->
<section class="band" id="executive-summary">
  <div class="oe-container">
    <span class="oe-tag-chip oe-tag-chip--lime">Executive Summary</span>
    …

<!-- in fondo alla pagina: voce attiva, ombra allo scorrimento, hamburger, misure del pannello -->
<script src="ds-kit/oe-nav-sezioni.js" defer></script>`}
      >
        <div style={{ ...flush, background: 'var(--oe-bg-dark)', padding: '24px 0' }}>
          <header className="oe-nav-analisi" style={{ position: 'static' }}>
            <div className="oe-container">
              <div className="oe-nav-analisi__inner">
                <div className="oe-nav-analisi__brand">
                  <a className="oe-logo-link" href="https://www.openeconomics.eu" target="_blank" rel="noopener">
                    <Wordmark className="oe-nav-analisi__logo" />
                  </a>
                </div>
                <ul className="oe-nav-analisi__links">
                  <li><a className="oe-nav-analisi__link" href={`${STUDIES_URL}metodologia/approccio-oe.html`} target="_blank" rel="noreferrer">Metodologia</a></li>
                  <li><a className="oe-nav-analisi__link" href={`${STUDIES_URL}#report`} target="_blank" rel="noreferrer">Studi pubblicati</a></li>
                </ul>
                <div className="oe-nav-analisi__icons">
                  <a className="oe-nav-analisi__icon" href={`${STUDIES_URL}#report`} target="_blank" rel="noreferrer" aria-label="Cerca uno studio">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.4-3.4" /></svg>
                  </a>
                  <a className="oe-nav-analisi__icon" href={`${STUDIES_URL}private/index.html`} target="_blank" rel="noreferrer" aria-label="Accedi all'area riservata">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
                    <span>Accedi</span>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <nav className="oe-nav-sezioni" aria-label="Sezioni della pagina (anteprima)" style={{ position: 'static' }}>
            <div className="oe-container">
              <div className="oe-nav-sezioni__inner">
                <button className="oe-nav-sezioni__toggle" type="button" aria-expanded="false">
                  <span className="oe-nav-sezioni__current">{sezioni[1][1]}</span>
                  <span className="oe-nav-sezioni__burger" aria-hidden="true" />
                </button>
                <ul className="oe-nav-sezioni__list">
                  {sezioni.map(([id, label], i) => (
                    <li key={id}>
                      <a
                        className={'oe-nav-sezioni__link' + (i === 1 ? ' is-active' : '')}
                        href={`#blocks-nav-analisi`}
                        aria-current={i === 1 ? 'location' : undefined}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Demo>

      <h3>Le regole</h3>
      <div className="oe-grid" style={{ maxWidth: 'none', paddingInline: 0 }}>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Barra</span>
          <h3 className="oe-card__title">Uguale in tutte le pagine Studies</h3>
          <p className="oe-card__body">
            Riquadro bianco sospeso sopra la hero, largo quanto il contenitore. A sinistra il logo
            OpenEconomics (porta sempre a openeconomics.eu) e le label «Metodologia» e «Studi
            pubblicati»; a destra cerca e «Accedi». Niente etichetta «Studies» accanto al logo.
            Sotto i 900px le label si nascondono.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Menu</span>
          <h3 className="oe-card__title">Riquadro grigio sotto la barra</h3>
          <p className="oe-card__body">
            Attaccato sotto la barra bianca, della stessa larghezza. Fondo
            <code> --oe-bg-elev</code>, voci allineate al logo, nell'ordine della pagina.
          </p>
        </article>
        <article className="oe-card oe-col-4 oe-col-m-4">
          <span className="oe-card__eyebrow">Voci</span>
          <h3 className="oe-card__title">Una per chip, stesso testo</h3>
          <p className="oe-card__body">
            Ogni sezione con il chip lime ha la sua voce, e la voce ripete il testo del chip. Ogni
            voce è un'ancora all'<code>id</code> della sezione. Hero, CTA e footer restano fuori.
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Scorrimento</span>
          <h3 className="oe-card__title">Sospeso, con la voce attiva</h3>
          <p className="oe-card__body">
            Il pannello resta fisso in alto (16px dal bordo, 8 su mobile) e dopo i primi 24px di
            scorrimento prende filetto e ombra leggera, come in Studies. La voce della sezione in
            vista diventa Bluette con il filetto sotto; la hero lascia spazio al pannello e le
            ancore si fermano sotto (<code>oe-nav-sezioni.js</code>).
          </p>
        </article>
        <article className="oe-card oe-col-6 oe-col-m-8">
          <span className="oe-card__eyebrow">Responsive</span>
          <h3 className="oe-card__title">A capo su desktop, hamburger su mobile</h3>
          <p className="oe-card__body">
            Su desktop si vedono tutte le voci: se non stanno in una riga vanno a capo. Sotto i
            768px il menu si chiude dietro il pulsante hamburger, che mostra la sezione in vista
            e apre la lista in una colonna; si richiude scegliendo una voce o con Esc.
          </p>
        </article>
      </div>

      <p className="dx-lead" style={{ marginTop: 'var(--oe-space-l)' }}>
        Lo script sta in <code>src/components/oe-nav-sezioni.js</code> e si copia nel
        <code> ds-kit/</code> della pagina insieme a <code>components.css</code>. Punto di
        partenza pronto in <code>progetti/_template-caso-studio/</code>.
      </p>
    </section>
  )
}
