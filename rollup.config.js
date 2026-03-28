import typescript from "@rollup/plugin-typescript";
import { readdirSync } from "fs";

// Build per-brand entry map for individual chunks
const logoEntries = readdirSync("./src/logos")
  .filter((f) => f.endsWith(".tsx"))
  .reduce((acc, file) => {
    const name = file.replace(".tsx", "");
    acc[`logos/${name}`] = `src/logos/${name}.tsx`;
    return acc;
  }, {});

export default [
  // Main CJS bundle
  {
    input: "src/index.ts",
    output: { file: "dist/index.js", format: "cjs", exports: "named" },
    external: ["react", "react-native"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  // Main ESM bundle (tree-shakeable)
  {
    input: "src/index.ts",
    output: { file: "dist/index.esm.js", format: "esm" },
    external: ["react", "react-native"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  // Individual per-brand chunks (for /logos/* subpath imports)
  {
    input: logoEntries,
    output: { dir: "dist", format: "esm", entryFileNames: "[name].js" },
    external: ["react", "react-native"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
