/* Catalogo dei preview del kit ufficiale (public/kit/preview/*.html).
   Ogni voce è una scheda consultabile, renderizzata con i token reali. */

export interface CatalogItem {
  file: string // nome senza estensione, in public/kit/preview/
  label: string
}
export interface CatalogGroup {
  id: string
  title: string
  items: CatalogItem[]
}

export const previewBase = 'kit/preview'

export const catalog: CatalogGroup[] = [
  {
    id: 'cat-brand',
    title: 'Brand',
    items: [
      { file: 'logo', label: 'Logo' },
      { file: 'slogan', label: 'Slogan' },
      { file: 'client-strip', label: 'Client strip' },
    ],
  },
  {
    id: 'cat-componenti-sito',
    title: 'Componenti — Sito',
    items: [
      { file: 'header', label: 'Header' },
      { file: 'cta-buttons', label: 'CTA buttons' },
      { file: 'chips', label: 'Chips / Tag' },
      { file: 'feature-card', label: 'Feature card' },
      { file: 'news-card', label: 'News card' },
      { file: 'borders-cards', label: 'Borders & cards' },
      { file: 'form-inputs', label: 'Form inputs' },
      { file: 'table', label: 'Table' },
      { file: 'chart', label: 'Chart' },
      { file: 'map', label: 'Map' },
    ],
  },
  {
    id: 'cat-componenti-dashboard',
    title: 'Componenti — Dashboard',
    items: [
      { file: 'dashboard-nav', label: 'Side / top nav' },
      { file: 'dashboard-tabs', label: 'Tabs' },
      { file: 'dashboard-kpi', label: 'KPI cards' },
      { file: 'dashboard-buttons', label: 'Buttons' },
      { file: 'dashboard-badges', label: 'Badges' },
      { file: 'dashboard-accordions', label: 'Accordions' },
      { file: 'dashboard-filters', label: 'Filters' },
      { file: 'dashboard-forms', label: 'Forms' },
      { file: 'dashboard-pagination', label: 'Pagination' },
      { file: 'dashboard-tables', label: 'Tables' },
      { file: 'dashboard-table-kpi', label: 'Table · KPI' },
      { file: 'dashboard-table-capex', label: 'Table · CapEx' },
      { file: 'dashboard-table-moltipl', label: 'Table · Moltiplicatori' },
      { file: 'dashboard-table-recap', label: 'Table · Recap' },
    ],
  },
]

export const prototypes = [
  {
    href: 'kit/ui_kits/dashboard/index.html',
    title: 'Dashboard — prototipo interattivo',
    desc: 'Side nav (collassabile), top nav, tabs, KPI, chart, tabelle. Render React dal vivo.',
  },
  {
    href: 'kit/ui_kits/website/index.html',
    title: 'Sito — prototipo interattivo',
    desc: 'Homepage marketing OpenEconomics.eu: hero, feature card, project card, footer.',
  },
  {
    href: 'kit/website-kit.html',
    title: 'Website Kit (showcase completo)',
    desc: 'Bundle materializzato da Figma dell’intero kit sito.',
  },
]
