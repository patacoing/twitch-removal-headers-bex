import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

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
        },
        watch: {
            include: 'popup/**',
            clearScreen: false
        },
        plugins: [
            typescript(),
            terser()
        ],
    },
    {
        input: "scripts/content.ts",
        output: {
            file: 'build/content.min.js',
            format: 'iife',
            sourcemap: 'inline',
        },
        watch: {
            include: 'scripts/**',
            clearScreen: false
        },
        plugins: [
            typescript(),
            terser()
        ],
    },
];