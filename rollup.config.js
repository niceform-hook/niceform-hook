import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' };

export default [
    {
        input: pkg.source,
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourceMap: true
            },
            {
                file: pkg.module,
                format: 'esm',
                sourceMap: true
            }
        ],
        plugins: [
            resolve(),
            PeerDepsExternalPlugin(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json'
            }),
        ]
    }
]