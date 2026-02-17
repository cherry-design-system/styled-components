import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "Cherry",
      formats: ["es"],
    },
    minify: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "styled-components",
        "polished",
        "lucide-react",
        "next/navigation",
      ],
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src/lib",
        entryFileNames: "[name].js",
      },
    },
  },
});
