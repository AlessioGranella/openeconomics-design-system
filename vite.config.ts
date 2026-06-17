import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// UI kit / documentazione del design system OpenEconomics.
// base relativo: la pagina funziona servita da qualsiasi sottocartella
// (locale, GitHub Pages /design-system/, ecc.) senza riconfigurare i path.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
