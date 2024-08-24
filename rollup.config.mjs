import terser from '@rollup/plugin-terser';

export default [
    {
        input: "popup/popup.js",
        watch: {
            include: 'popup/**',
            clearScreen: false
        },
        output: {
            file: 'build/popup.min.js',
            format: 'iife',
            sourcemap: 'inline',
        },
        plugins: [terser()]
    },
    {
        input: "scripts/content.js",
        output: {
            file: 'build/content.min.js',
            format: 'iife',
            sourcemap: 'inline',
        },
        watch: {
            include: 'scripts/**',
            clearScreen: false
        },
        plugins: [terser()]
    },
];