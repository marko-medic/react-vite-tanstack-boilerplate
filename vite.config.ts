// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/@assets"),
      "@pages": path.resolve(__dirname, "src/@pages"),
      "@utils": path.resolve(__dirname, "src/@utils"),
      "@storage": path.resolve(__dirname, "src/@storage"),
      "@constants": path.resolve(__dirname, "src/@constants"),
      "@http": path.resolve(__dirname, "src/@http"),
      "@hooks": path.resolve(__dirname, "src/@hooks"),
      "@routes": path.resolve(__dirname, "src/@routes"),
    }
  }
});
