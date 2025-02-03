import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: '/desert-greens/',
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  build: {
    outDir: 'publico',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
