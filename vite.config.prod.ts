import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react(), splitVendorChunkPlugin()],
  mode: 'development',

  build: {
    assetsDir: '.',
    sourcemap: true,
    minify: true
  },
  server: {
    open: true,
    port: 3000
  },
  preview: {
    port: 3001
  }
});
