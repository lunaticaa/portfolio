import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // esbuild: {
  //   legalComments: "none",
  // },
  // build: {
  //   sourcemap: false,
  // },
  // server: {
  //   headers: {
  //     "Content-Security-Policy": "script-src 'self'; object-src 'none';",
  //   },
  // },
});
