/** Versione del design system iniettata a build-time da Vite (define). */
declare const __DS_VERSION__: string

/** Motore grafici src/charts/oe-charts.js (script senza moduli: si registra su window). */
interface OEChartsApi {
  version: string
  types: string[]
  render(host: HTMLElement, spec: Record<string, unknown>): void
  mount(root?: ParentNode, data?: Record<string, unknown>): void
  fmt(v: number, dec?: number): string
}
interface Window { OECharts: OEChartsApi; OE_DATA?: Record<string, unknown> }
