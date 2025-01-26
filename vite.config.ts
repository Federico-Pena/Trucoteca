import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      manifest: {
        name: "Trucoteca",
        short_name: "Truco",
        theme_color: "#3cff0041",
        background_color: "#3cff0041",
        display: "standalone",
        scope: "/",
        start_url: ".",
        lang: "es",
        icons: [
          {
            src: "/icons/favicon.ico",
            type: "image/x-icon",
            sizes: "16x16 32x32"
          },
          {
            src: "/icons/icon-192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icons/icon-512.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "/icons/icon-192-maskable.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable"
          },
          {
            src: "/icons/icon-512-maskable.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable"
          }
        ]
      }
    })
  ]
});
