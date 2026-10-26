import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is deployed under /prospecting-museum-guide/ on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/prospecting-museum-guide/',
})
