import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' };

export default [
    {
        input: [pkg.source, 'src/custom-RHF.ts'],
        external: Object.keys(pkg.dependencies),
        output: [
            {
                name: 'niceformHook',
                // file: pkg.main,
                format: 'cjs',
                sourcemap: true,
                exports: 'named',
                dir: 'dist',
                entryFileNames: '[name].cjs.js'
               
            },
            {
                name: 'niceformHook',
                // file: pkg.module,
                format: 'esm',
                sourcemap: true,
                exports: 'named',
                dir: 'dist',
                entryFileNames: '[name].esm.mjs'
                
            }
        ],
        plugins: [
            resolve(),
            PeerDepsExternalPlugin(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                rootDir: 'src'
            })
        ]
    }
]