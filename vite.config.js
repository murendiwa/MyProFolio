
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  base: '/MyProFolio/',
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  build: {
    assetsInlineLimit: 100_000_000,
  },
})
