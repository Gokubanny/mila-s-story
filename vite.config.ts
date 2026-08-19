// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [
      nitro({
        preset: "static",
        output: {
          dir: ".output-static",
          publicDir: ".output-static/public",
        },
      }),
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});