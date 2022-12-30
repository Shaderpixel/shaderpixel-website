const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const postCssPreset = require('postcss-preset-env');

module.exports = {
  plugins: [tailwindcss, autoprefixer, postCssPreset({ stage: 1 })],
};
