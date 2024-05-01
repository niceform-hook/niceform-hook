import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import terser from '@rollup/plugin-terser';

import pkg from './package.json' assert { type: 'json' };

const plugins = [
    resolve(),
    PeerDepsExternalPlugin(),
    commonjs(),
    typescript({
        tsconfig: './tsconfig.json',
    })
]

const compress = terser({
    output: { comments: false },
    compress: {
      drop_console: true,
    },
})
export default [
    {
        input: pkg.source,
        external: Object.keys(pkg.dependencies),
        output: [
            {
                name: 'niceformHook',
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
                exports: 'named',
                compact: true
               
            }
        ],
        plugins: plugins.concat(compress)
    },
    {
        input: pkg.source,
        external: Object.keys(pkg.dependencies),
        output: [
            {
                name: 'niceformHook',
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
                exports: 'named',
                compact: true
            }
        ],
        plugins
    },
    {
        input: {
            'customRHF/cjs/index': 'src/hooks/useForm/index.ts'
        },
        external: Object.keys(pkg.dependencies),
        output: [
            {
                name: 'niceformHook',
                format: 'cjs',
                exports: 'named',
                dir: 'dist',
                entryFileNames: '[name].cjs.js',
                compact: true
            }
        ],
        plugins: plugins.concat(compress)
    },
    {
        input: {
            'customRHF/index': 'src/hooks/useForm/index.ts'
        },
        external: Object.keys(pkg.dependencies),
        output: [
            {
                name: 'niceformHook',
                format: 'esm',
                sourcemap: true,
                exports: 'named',
                dir: 'dist',
                entryFileNames: '[name].esm.mjs',
                compact: true
            }
        ],
        plugins: plugins.concat(
            generatePackageJson({
                outputFolder: 'dist/customRHF',
                baseContents: {
                    sideEffects: false,
                    main: "cjs/index.cjs.js",
                    module: "index.esm.mjs",
                    types: "./index.d.ts",
                },
            })
        )
    }
]