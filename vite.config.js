import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-plugin-preserve-directives";

// Default mode builds the library; `--mode demo` builds the demo app
// (index.html + src/App.tsx) into dist-demo for static hosting (e.g. Vercel).
export default defineConfig(({ mode }) => {
  const isDemo = mode === "demo";

  return {
    server: {
      // Allow the dev server to be reached over the private Tailscale tailnet
      // (leading dot matches any host under it). Scoped on purpose - do not
      // widen this to `true`, which would accept any Host header.
      allowedHosts: [".taile7f725.ts.net"],
    },
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
            // The Next-only SSR registry needs its own entry: it is no longer
            // re-exported from the barrel, so nothing reachable from
            // src/lib/index.ts would pull it into the output otherwise. It
            // backs the `cherry-styled-components/next` subpath export.
            entry: {
              index: "src/lib/index.ts",
              "styled-components/registry":
                "src/lib/styled-components/registry.tsx",
            },
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
