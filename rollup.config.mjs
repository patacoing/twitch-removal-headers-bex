import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import polyfillNode from 'rollup-plugin-polyfill-node';

const plugins = [
    resolve({
        browser: true,
        preferBuiltins: false
    }),
    commonjs(),
    polyfillNode(),
    typescript(),
    terser()
];

const globals = {
    "webextension-polyfill": "browser",    
}

export default [
    {
        input: "popup/popup.ts",
        watch: {
            include: 'popup/**',
            clearScreen: false
        },
        output: {
            file: 'build/popup.min.js',
            format: 'iife',
            sourcemap: 'inline',
            globals,
        },
        watch: {
            include: 'popup/**',
            clearScreen: false
        },
        plugins,
    },
    {
        input: "scripts/content.ts",
        output: {
            file: 'build/content.min.js',
            format: 'iife',
            sourcemap: 'inline',
            globals,
        },
        watch: {
            include: 'scripts/**',
            clearScreen: false
        },
        plugins,
    },
];