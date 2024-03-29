import commonjs from "@rollup/plugin-commonjs";

import resolve from "@rollup/plugin-node-resolve";

import typescript from '@rollup/plugin-typescript';

import autoprefixer from 'autoprefixer'

import dts from "rollup-plugin-dts";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from 'rollup-plugin-postcss'

import {
  terser
} from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        // preserveModules: true,
        file: 'dist/index.js',
        format: "cjs",
        sourcemap: true,
      },
      {
        // preserveModules: true,
        file: 'dist/index.es.js',
        format: "esm",
        sourcemap: true,
      }
    ],
    plugins: [
      postcss({
        extract: true,  // extracts to `${basename(dest)}.css`
        plugins: [autoprefixer()],
        writeDefinitions: true,
        // modules: { ... }
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser()
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{
      file: "dist/types.d.ts",
      format: "es",
    }],
    plugins: [dts()],
  }
];