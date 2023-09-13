import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
	// optimizeDeps: {
	// 	exclude: ["@mdi/react", "@mdi/js"],
	// },
	plugins: [tsconfigPaths()],
});
