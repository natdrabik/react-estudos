import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ou '0.0.0.0', faz o Vite escutar em todas as interfaces de rede
    port: 5173,
    hmr: {
      clientPort: 443 // Garante a conexão segura (HTTPS) usada pelo Codespaces
    }
  }
});