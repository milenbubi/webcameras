import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";



export default defineConfig(({ command, mode }) => {
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
        keep_fnames: true,
        format: {
          comments: false
        }
      },

      rollupOptions: {
        output: {
          minifyInternalExports: true,
          inlineDynamicImports: false,
          entryFileNames: "vendor/[hash].js"
        }
      }
    }
  };
});