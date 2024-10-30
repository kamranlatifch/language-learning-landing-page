import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allows access from other devices
    port: 5173, // Optional, specify the port if needed
  },
});
