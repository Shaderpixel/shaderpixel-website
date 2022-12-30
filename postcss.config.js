const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const postCssPreset = require('postcss-preset-env');
const postCssImport = require('postcss-import');

module.exports = {
  plugins: [
    postCssImport,
    tailwindcss,
    autoprefixer,
    postCssPreset({ stage: 1 }),
  ],
};
