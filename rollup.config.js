import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";
import typescript from '@rollup/plugin-typescript';

export default [{
  input: './src/index.ts',
  type: "module",
  budleConfigAsCjs: true,
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
//   exclude: ["my-app"],
  plugins: [typescript({exclude: "./my-app/**"}),
  nodeResolve()]
}, {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },];