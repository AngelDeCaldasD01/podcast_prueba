import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  mode: 'development',

  build: {
    assetsDir: '.',
    sourcemap: true,
    minify: false
  },
  server: {
    open: true,
    port: 8080
  },
  preview: {
    port: 3001
  }
});
