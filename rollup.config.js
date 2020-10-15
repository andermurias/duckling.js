import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'duckling',
      file: pkg.browser,
      format: 'umd',
      plugins: [terser()],
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled',
      }),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'},
    ],
    external: [
      'core-js/modules/es.array.iterator',
      'core-js/modules/es.map',
      'core-js/modules/es.object.to-string',
      'core-js/modules/es.string.iterator',
      'core-js/modules/web.dom-collections.iterator',
      'core-js/modules/es.array.concat',
      'core-js/modules/es.array.for-each',
      'core-js/modules/es.object.keys',
      'core-js/modules/web.dom-collections.for-each',
      'core-js/modules/es.array.index-of',
      'core-js/modules/es.array.map',
      'core-js/modules/es.regexp.exec',
      'core-js/modules/es.string.replace',
      'gsap/all',
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled',
      }),
    ],
  },
];
