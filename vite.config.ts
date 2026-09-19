import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const appVersion = process.env.GITHUB_SHA?.slice(0, 7) ?? 'local';

export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/',
  define: {
    __APP_VERSION__: JSON.stringify(appVersion)
  }
});
