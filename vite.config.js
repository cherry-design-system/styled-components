import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), dts()],
	build: {
		lib: {
			entry: "src/lib/index.ts",
			name: "Cherry",
			formats: ["es", "umd"],
			fileName: "cherry",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
