import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as { version: string }

// UI kit / documentazione del design system OpenEconomics.
// base relativo: la pagina funziona servita da qualsiasi sottocartella
// (locale, GitHub Pages /openeconomics-design-system/, e le sottocartelle
// di versione /vX.Y.Z/) senza riconfigurare i path.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  define: {
    __DS_VERSION__: JSON.stringify(pkg.version),
  },
})
