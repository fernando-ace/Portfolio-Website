import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Website/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/main.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith(".css") ? "assets/main.css" : "assets/[name][extname]"
      }
    }
  }
});
