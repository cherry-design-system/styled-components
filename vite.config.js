import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";

// Default mode builds the library; `--mode demo` builds the demo app
// (index.html + src/App.tsx) into dist-demo for static hosting (e.g. Vercel).
export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";

  return {
    plugins: [
      react({
        plugins: [
          [
            "@swc/plugin-styled-components",
            {
              displayName: true,
              ssr: true,
            },
          ],
        ],
      }),
      !isDemo && dts({ include: ["src/lib", "src/vite-env.d.ts"] }),
    ].filter(Boolean),
    build: isDemo
      ? {
          outDir: "dist-demo",
        }
      : {
          // Keep any demo-only public/ assets out of the published library dist.
          copyPublicDir: false,
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
  };
});
