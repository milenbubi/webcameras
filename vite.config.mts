import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react()
    ],

    build: {
      outDir: "./dist",
      minify: "terser",
      cssMinify: true,
      terserOptions: {
        mangle: true,
        compress: true,
        module: true,
        keep_classnames: false,
        keep_fnames: false,
        format: {
          comments: false
        }
      },

      rollupOptions: {
        output: {
          minifyInternalExports: true,
          inlineDynamicImports: false,
          assetFileNames: "vendor/e/[hash].[ext]",
          entryFileNames: "vendor/h/[hash].js",

          chunkFileNames: ({ exports: data = [], name }) => {
            if (Array.isArray(data) && data.length) {
              return "vendor/" + data
                .slice(0, 8)
                .map((d) => d.toLowerCase())
                .join("")
                .replace("$", "f") +
                "/[hash].js";
            }
            else {
              return "vendor/" + (name?.[3] || "$") + "/[hash].js";
            }
          },

          manualChunks: (id) => {
            if (id?.includes("node_modules")) {
              const moduleName = id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();

              return moduleName;
            }
            else {
              return null;
            }
          }
        }
      }
    }
  };
});