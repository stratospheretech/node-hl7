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
    minify: !sourcemap,
    sourcemap: sourcemap,
    target: "esnext",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  {
    entry: ["src/hl7.ts"],
    format: ["cjs"],
    outDir: "lib/cjs",
    dts: false,
    clean: false,
    minify: !sourcemap,
    sourcemap: sourcemap,
    target: "esnext",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  {
    entry: ["src/hl7.ts"],
    format: ["esm"],
    outDir: "lib/esm",
    dts: false,
    minify: !sourcemap,
    sourcemap: sourcemap,
    target: "esnext",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  {
    entry: ["src/index.ts"],
    outDir: "lib/types",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  {
    entry: ["src/hl7.ts"],
    outDir: "lib/types",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
]);
