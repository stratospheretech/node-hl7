import { defineConfig } from "tsdown";
import { fileURLToPath } from "node:url";

const sourcemap = process.env.NODE_ENV === "development";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    outDir: "lib/cjs",
    dts: false,
    clean: true,
    splitting: false,
    minify: !sourcemap,
    sourcemap: sourcemap,
    target: "esnext",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    outDir: "lib/esm",
    dts: false,
    splitting: false,
    minify: !sourcemap,
    sourcemap: sourcemap,
    target: "esnext",
    alias: {
      "@": "./src",
    }
  },
  {
    entry: ["src/index.ts"],
    outDir: "lib/types",
    dts: {
      only: true,
    },
    alias: {
      "@": "./src",
    }
  },
]);
