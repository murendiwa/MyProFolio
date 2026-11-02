import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// viteSingleFile bundles everything (JS, CSS, fonts, photo) into one dist/index.html.
// Handy for previews. Remove it if you would rather ship separate files.
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: { assetsInlineLimit: 100_000_000 },
})
