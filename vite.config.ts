import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["gsap", "gsap/ScrollTrigger", "locomotive-scroll"],
  },
  build: {
    commonjsOptions: {
      include: [
        "gsap",
        "gsap/ScrollTrigger",
        "locomotive-scroll",
        /node_modules/,
      ],
    },
  },
});
