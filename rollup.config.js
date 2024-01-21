import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  budleConfigAsCjs: true,
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [nodeResolve(), typescript()]
};