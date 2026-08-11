import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 8003,
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
    }
  }
})
