import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
  host: '127.0.0.1', // Force IPv4
  port: 5173,
  strictPort: true,
  watch: {
    usePolling: true,
  },
    hmr: {
      overlay: true,    // Shows errors directly on your screen so you know if it crashed
    }
  }
})