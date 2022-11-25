const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const postCssImport = require('postcss-preset-env');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    postCssImport({ stage: 1 }),
    // require(`cssnano`)({
    //   preset: `default`,
    // }),
  ],
};
