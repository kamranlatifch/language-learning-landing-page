import { defineConfig } from 'vite';

export default defineConfig({
  base: '/language-learning-landing-page/',
  server: {
    host: true, // Allows access from other devices
    port: 5173, // Optional, specify the port if needed
  },
});
