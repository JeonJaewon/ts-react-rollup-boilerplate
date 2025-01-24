import typescript from "@rollup/plugin-typescript"
import swc from "rollup-plugin-swc3"

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es",
  },
  plugins: [
    swc({
      exclude: /node_modules/, // default
      tsconfig: "tsconfig.json", // default
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
  ],
}
