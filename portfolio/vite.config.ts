import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React & ReactDOM
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI
          'ui-vendor': ['@radix-ui/react-label', '@radix-ui/react-slot', 'lucide-react', 'sonner'],
          // Forms
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Animation
          'animation-vendor': ['motion', 'lenis'],
          // EmailJS
          'email-vendor': ['@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
