import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/STARR/', // 👈 required for GitHub Pages
  plugins: [react()],
  server: {
    host: true, // 👈 allows access from phone via local IP
  },
})
