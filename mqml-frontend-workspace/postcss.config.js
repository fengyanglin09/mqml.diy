module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        '@tailwindcss/postcss': {}, // ✅ Ensure this is included
        autoprefixer: {},
    },
};
