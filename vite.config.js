import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function stablePortfolioAssetNames() {
  return {
    name: "stable-portfolio-asset-names",
    generateBundle(_, bundle) {
      for (const [fileName, output] of Object.entries(bundle)) {
        const facadeModuleId = output.type === "chunk" ? output.facadeModuleId?.replace(/\\/g, "/") : "";

        if (facadeModuleId?.endsWith("/src/main.jsx") && fileName !== "assets/main.js") {
          delete bundle[fileName];
          output.fileName = "assets/main.js";
          bundle["assets/main.js"] = output;
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), stablePortfolioAssetNames()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        app: "src/main.jsx"
      },
      output: {
        entryFileNames: "assets/main.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith(".css") ? "assets/main.css" : "assets/[name][extname]"
      }
    }
  }
});
