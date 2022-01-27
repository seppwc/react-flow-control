import typescript from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import ts from 'typescript';

export default {
  input: './src/index.ts',
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: `./dist/${pkg.module}`,
      format: 'es',
      sourcemap: false,
    },
    {
      file: `./dist/${pkg.main}`,
      format: 'cjs',
      sourcemap: false,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss(),
    typescript({
      transpiler: 'typescript',
      tsconfig: (resolvedConfig) => ({
        ...resolvedConfig,
        sourceMap: false,
        declaration: true,
        declarationMap: false,
      })}),
    terser({
      output: {
        comments: false,
      },
    }),
    copy({
      targets: [
        { src: 'LICENSE', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (content) => {
            const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(
              content.toString()
            );
            return JSON.stringify(keep, null, 2);
          },
        },
      ],
    }),
  ],
};
