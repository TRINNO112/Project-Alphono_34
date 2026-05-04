import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react-simple-maps', 'prop-types']
  },
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify CSS
    cssMinify: true,
    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router-vendor'
          if (id.includes('framer-motion')) return 'motion-vendor'
          if (id.includes('recharts') || id.includes('victory-vendor') || id.includes('d3-shape') || id.includes('d3-scale')) return 'charts-vendor'
          if (id.includes('d3-geo') || id.includes('react-simple-maps') || id.includes('topojson')) return 'maps-vendor'
          if (id.includes('lucide-react')) return 'icons-vendor'
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('prop-types')) return 'utils-vendor'
          if (id.includes('react-helmet-async')) return 'helmet-vendor'
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) return 'react-vendor'
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      // Tree-shaking optimizations
      treeshake: {
        moduleSideEffects: ['*.css'],
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    // Target modern browsers
    target: 'es2020',
    // Minify with oxc (Vite 8 / rolldown default)
    minify: 'oxc',
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Report bundle size
    reportCompressedSize: true
  },
  // Drop console logs in production via oxc
  oxc: {
    transform: {
      drop: ['console', 'debugger'],
    },
  },
  // Server optimizations
  server: {
    fs: {
      strict: false
    }
  }
})
