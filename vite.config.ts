import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: './src/entry.ts',
      name: 'PhonyphoneComponents',
      fileName: () => 'remoteEntry.js',
      formats: ['iife'],
    },
    rollupOptions: {
      // React is provided by the PhonyPhone host at runtime via window globals.
      // This avoids duplicating React and ensures hooks work correctly.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: '__phonyphone_react__',
          'react-dom': '__phonyphone_react_dom__',
        },
      },
    },
  },

  base: './',
})
