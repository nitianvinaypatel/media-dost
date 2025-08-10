import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: false, // Allow fallback to another port if 3001 is taken
    open: true, // This will automatically open the browser
    host: true, // This will expose the server to your network
  },
  // Add clear error overlay
  clearScreen: false,
  resolve: {
    alias: {
      '@': '/src', // This allows you to use @ to refer to the src directory
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
