import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    target: 'es2015',
    minify: 'esbuild',
    ssr: false,
    sourcemap: false
  },
  server: {
    port: 8080,
    host: true
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})
