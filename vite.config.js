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
        manualChunks: {
          // React and React DOM
          'react-vendor': ['react', 'react-dom'],
          // React Router
          'router-vendor': ['react-router-dom'],
          // Framer Motion
          'motion-vendor': ['framer-motion'],
          // Recharts (heavy charting library)
          'charts-vendor': ['recharts'],
          // D3 and map libraries
          'maps-vendor': ['d3-geo', 'react-simple-maps', 'topojson-client'],
          // Lucide icons
          'icons-vendor': ['lucide-react'],
          // Other utilities
          'utils-vendor': ['clsx', 'tailwind-merge', 'prop-types'],
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
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      format: {
        comments: false
      }
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Report bundle size
    reportCompressedSize: true
  },
  // Server optimizations
  server: {
    fs: {
      strict: false
    }
  }
})
