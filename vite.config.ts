import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Portfoliowk/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    outDir: "docs",
  },
})
