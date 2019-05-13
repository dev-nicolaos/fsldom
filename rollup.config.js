import { terser } from 'rollup-plugin-terser';
import { version } from './package.json';

const input = 'src/fsldom.js';

const banner = `/* FSLDOM */
/* Version: ${version} */
/* Author: Nicolaos Skimas */
/* License: MIT */
/* https://github.com/dev-nicolaos/fsldom */
`;

const preamble = `/* FSLDOM v${version} | MIT License | github.com/dev-nicolaos/fsldom */`;

const tOptions = {
  output: {preamble},
};

export default [
  {
    input,
    output: {
      file: `dist/${version}/fsldom.js`,
      name: 'fD',
      format: 'iife',
      banner,
    },
  },
  {
    input,
    output: {
      file: `dist/${version}/fsldom.min.js`,
      name: 'fD',
      format: 'iife',
    },
    plugins: [terser(tOptions)],
  },
  {
    input,
    output: {
      file: `dist/${version}/fsldom-es.js`,
      format: 'esm',
      banner,
    },
  },
  {
    input,
    output: {
      file: `dist/${version}/fsldom-es.min.js`,
      format: 'esm',
    },
    plugins: [terser(tOptions)],
  },
  {
    input,
    output: {
      file: `dist/${version}/fsldom-cjs.js`,
      format: 'cjs',
      banner,
    },
  },
  {
    input,
    output: {
      file: `dist/${version}/fsldom-cjs.min.js`,
      format: 'cjs',
    },
    plugins: [terser(tOptions)],
  },
];
