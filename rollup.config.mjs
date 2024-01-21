import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [{
  input: './src/index.ts',
  type: "module",
  budleConfigAsCjs: true,
  output: {
    file: 'dist/index.js',
    name: 'md3-react',
    format: 'umd'
  },
//   exclude: ["my-app"],
  plugins: [  nodeResolve(), commonjs(),typescript({exclude: "./my-app/**"}),
]
}, {
    input: "dist/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "umd" }],
    plugins: [dts({compilerOptions: {emitDeclarationOnly: true, declaration: true, declarationDir: './dist/index.d.ts'}})],
  },];