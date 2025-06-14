import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ filename: 'dist/stats.html', open: true })],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@layouts': path.resolve(__dirname, './src/layouts/index.js'),
      '@templates': path.resolve(__dirname, './src/templates/index.js')
    },
  },
})
