import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Starry/', // 👈 required for GitHub Pages
  plugins: [react()],
})
