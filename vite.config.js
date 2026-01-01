// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/COFFEE-CAFE/'  // <-- THIS IS CRUCIAL FOR GH PAGES
});
