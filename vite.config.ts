import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hotReload from "@xatom/wf-app-hot-reload";
// https://vite.dev/config/
export default defineConfig({
  plugins: [hotReload(), react()],
  base: "./", // This is important for the webflow extension to work
});
