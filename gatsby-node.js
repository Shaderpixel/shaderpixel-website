/**
 * This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any)* */

exports.onCreateBabelConfig = ({ actions: { setBabelPreset } }) => {
  // setBabelPlugin({
  //   name: `babel-plugin-tailwind-components`,
  //   options: {
  //     config: `./tailwind.config.js`,
  //     format: `auto`,
  //   },
  // });
  setBabelPreset({
    name: '@emotion/babel-preset-css-prop',
    options: {
      autoLabel: true,
      labelFormat: '[local]',
    },
  });
};
