import { defineConfig } from "@pandacss/dev";
import { recipes } from "./theme/recipes";

export default defineConfig({
  preflight: true,

  include: ["./**/*.{js,jsx,ts,tsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  exclude: ["node_modules"],

  theme: {
    recipes,
  },
  jsxFramework: "react",
  jsxFactory: "panda",
  outdir: "styled-system",
});
