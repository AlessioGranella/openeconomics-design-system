import Demo from '../ui/Demo'
import { Button, Tag, Wordmark } from '../../components'

const flush = { margin: '-32px' } as const

export default function CardsNav() {
  return (
    <section id="cards-nav" className="dx-section">
      <span className="oe-eyebrow">Componenti UI</span>
      <h2>Card &amp; Navigazione</h2>
      <p className="dx-lead">
        Card (base, feature, news), header del sito e navigazione laterale dashboard. Tutto a
        spigolo vivo e con l'accento del brand attivo.
      </p>

      <h3>Card</h3>
      <Demo
        title="Base · Feature · News"
        description="Stessa primitiva .oe-card; feature ha la fascia accento in alto, news mette la media in cima."
        code={`<article class="oe-card">
  <span class="oe-card__eyebrow">Impatto</span>
  <h3 class="oe-card__title">Titolo della scheda</h3>
  <p class="oe-card__body">Descrizione breve…</p>
</article>

<article class="oe-card oe-card--feature">…</article>

<article class="oe-card">
  <span class="oe-card__media"></span>
  <span class="oe-card__meta">12 GIU 2026</span>
  <h3 class="oe-card__title">Titolo notizia</h3>
</article>`}
      >
        <div className="dx-grid-3" style={{ alignItems: 'stretch' }}>
          <article className="oe-card">
            <span className="oe-card__eyebrow">Impatto</span>
            <h3 className="oe-card__title">Valutazione socioeconomica</h3>
            <p className="oe-card__body">Analisi d'impatto su un programma di finanziamento pubblico.</p>
            <div className="oe-card__foot"><Button variant="ghost">Approfondisci →</Button></div>
          </article>
          <article className="oe-card oe-card--feature">
            <span className="oe-card__eyebrow">In evidenza</span>
            <h3 className="oe-card__title">Sonar — early warning</h3>
            <p className="oe-card__body">Monitoraggio dei rischi su territori e settori.</p>
            <div className="oe-card__foot"><Tag tone="lime">Sonar</Tag></div>
          </article>
          <article className="oe-card">
            <span className="oe-card__media" />
            <span className="oe-card__meta">12 GIU 2026</span>
            <h3 className="oe-card__title">Pubblicato il nuovo report regionale</h3>
            <p className="oe-card__body">Dati aggiornati su 30+ aree geografiche.</p>
          </article>
        </div>
      </Demo>

      <h3>Header sito</h3>
      <Demo
        title="Top nav marketing"
        description="Logo a sinistra, link, CTA a destra. Attivo/hover sull'accento."
        code={`<header class="oe-header">
  <a class="oe-header__logo">…logo…</a>
  <nav class="oe-header__links">
    <a class="oe-header__link is-active">Soluzioni</a> …
  </nav>
  <span class="oe-header__cta"><button class="oe-btn oe-btn--primary">Contattaci</button></span>
</header>`}
      >
        <div style={flush}>
          <header className="oe-header">
            <Wordmark className="oe-header__logo" />
            <nav className="oe-header__links">
              <a className="oe-header__link is-active" href="#cards-nav">Soluzioni</a>
              <a className="oe-header__link" href="#cards-nav">Piattaforme</a>
              <a className="oe-header__link" href="#cards-nav">Chi siamo</a>
            </nav>
            <span className="oe-header__cta"><Button variant="primary">Contattaci</Button></span>
          </header>
        </div>
      </Demo>

      <h3>Navigazione dashboard</h3>
      <Demo
        title="Sidebar dashboard"
        description="Fondo grigio, voce attiva = bordo sinistro + testo sull'accento. Lo sfondo non cambia su hover/attivo."
        code={`<nav class="oe-dashnav">
  <div class="oe-dashnav__title">Sintesi</div>
  <button class="oe-dashnav__item is-active">Panoramica</button>
  <div class="oe-dashnav__title">Indicatori</div>
  <button class="oe-dashnav__item">PIL</button> …
</nav>`}
      >
        <div style={flush}>
          <nav className="oe-dashnav">
            <div className="oe-dashnav__title">Sintesi</div>
            <button className="oe-dashnav__item is-active">Panoramica</button>
            <div className="oe-dashnav__title">Indicatori</div>
            <button className="oe-dashnav__item">PIL</button>
            <button className="oe-dashnav__item">Inflazione</button>
            <button className="oe-dashnav__item">Lavoro</button>
            <button className="oe-dashnav__item">Conti pubblici</button>
          </nav>
        </div>
      </Demo>
    </section>
  )
}
