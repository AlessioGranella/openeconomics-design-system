/* =========================================================================
   OpenEconomics — Design Tokens (mirror JS dei custom property CSS)
   Fonte di verità dei valori: styles/colors_and_type.css
   Questo file serve dove il CSS non arriva: grafici (chart.js, ecc.),
   canvas, logica TS. Tenere allineato al CSS.
   ========================================================================= */

export const bluette = {
  50: '#EFE5FF',
  100: '#D9C1FF',
  200: '#B991FF',
  300: '#A16AFF',
  400: '#8742FF',
  500: '#6E1AFF',
  600: '#5902EE',
  700: '#4400B3', // primary brand
  800: '#340088',
  900: '#270065', // dark sections / footer
} as const

export const lime = {
  50: '#EFFFDC',
  100: '#DFFFBB',
  200: '#D5FFA4',
  300: '#C9FF8C',
  400: '#B9FF69', // signature lime
  500: '#91FF15',
  600: '#7FF100',
  700: '#67C300',
  800: '#458300',
  900: '#315C01',
} as const

export const gray = {
  0: '#FFFFFF',
  100: '#F1F1F1',
  200: '#E7E7E7',
  300: '#D2D2D2',
  400: '#AFAFAF',
  500: '#999999',
  600: '#6E6E6E',
  700: '#545454',
  800: '#2C2C2C',
  900: '#000000',
} as const

/* Palette secondarie — SOLO per data viz, usare con parsimonia (2–3 colori/grafico). */
export const dataviz = {
  magenta: { 400: '#FF8DFF', 500: '#FF4EFF', 600: '#FF00FF', 700: '#C300C3', 800: '#920092', 900: '#600060' },
  blu:     { 400: '#6161FF', 500: '#3A3AFF', 600: '#0000FF', 700: '#0000A1', 800: '#000068', 900: '#000035' },
  yellow:  { 400: '#FFF751', 500: '#FFF300', 600: '#F4E900', 700: '#595700', 800: '#403E00', 900: '#262500' },
  green:   { 400: '#3FFFA5', 500: '#00FF88', 600: '#00E279', 700: '#00542D', 800: '#003F22', 900: '#002D18' },
  cyan:    { 400: '#83FFFF', 500: '#61FFFF', 600: '#00FFFF', 700: '#005B5B', 800: '#004646', 900: '#003535' },
} as const

/* Token semantici (specchio di --oe-* in CSS) */
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  bg: '#FFFFFF',
  bgElev: gray[100],
  bgTint: bluette[50],
  bgDark: bluette[900],
  bgAccent: bluette[700],
  fg: '#000000',
  fgSoft: gray[700],
  fgMuted: gray[500],
  fgInverse: '#FFFFFF',
  accent: bluette[700],
  accentStrong: bluette[900],
  accentSoft: bluette[50],
  pop: lime[400],
  stroke: '#000000',
  strokeSoft: gray[300],
  link: bluette[700],
  linkHover: bluette[900],
} as const

/* Sequenza consigliata per serie multiple nei grafici (max 2–3 insieme).
   Primari come base; i secondari entrano solo quando aiutano la lettura. */
export const chartSeries = [
  bluette[700],
  lime[500],
  dataviz.magenta[600],
  dataviz.cyan[600],
  dataviz.yellow[600],
  dataviz.green[600],
  dataviz.blu[600],
] as const

export const font = {
  serif: '"Hedvig Letters Serif", "Source Serif Pro", Georgia, serif',
  sans: '"Atkinson Hyperlegible Next", -apple-system, "Helvetica Neue", Arial, sans-serif',
  mono: '"Atkinson Hyperlegible Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
} as const

export const space = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 7: 32, 8: 40, 9: 52, 10: 64, 11: 80, 12: 120,
} as const

/* Scala spacing nominale (da Figma) — specchio di --oe-space-xxs … 3xl */
export const spacing = {
  xxs: 4, xs: 8, s: 16, m: 24, l: 32, xl: 40, '2xl': 48, '3xl': 64,
} as const

export const radius = 0 // sistema a spigolo vivo: tutti i raggi sono 0

export const layout = {
  maxWidth: 1760,
  pagePad: 80,
  pagePadMobile: 24,
  colGap: 40,
} as const

/* Sistema a griglia (da Figma) — specchio di --oe-grid-* */
export const grid = {
  max: 1440,
  gutter: 24,
  margin: 12,
  cols: { xl: 12, l: 12, m: 8, s: 4 },
} as const

/* Breakpoint — specchio di --oe-bp-* */
export const breakpoint = {
  xxl: 1440,
  xl: 1200,
  l: 992,
  m: 768,
} as const

/** Dimensione minima testo nel sistema: nessun testo sotto i 12px. */
export const minFontSize = 12

/* Formattazione numeri: IT con raggruppamento migliaia "." e decimale ",".
   Usare sempre useGrouping:"always" (vedi nota design system). */
export function formatNumber(
  value: number,
  locale: 'it-IT' | 'en-US' = 'it-IT',
  decimals = 0,
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: 'always',
  }).format(value)
}
