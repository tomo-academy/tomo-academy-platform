import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        homepage: resolve(__dirname, 'pages/homepage.html'),
        about: resolve(__dirname, 'pages/about.html'),
        content: resolve(__dirname, 'pages/content.html'),
        support: resolve(__dirname, 'pages/support.html'),
        team: resolve(__dirname, 'pages/team.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
