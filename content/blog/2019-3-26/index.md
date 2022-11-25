---
title: 'Setting up my new site in Gatsby - Part V'
date: '2019-03-26'
cover: './images/7.jpg'
category: ''
tags: ['this', 'that']
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

# Figuring out Styles (continued)

Decision: Stick with Tailwind 0.7.4 for now so that I can keep testing things out especially with fluid typography and other things.

`babel-plugin-tailwind-components` allows us to use `tw` template tags to process CSS classes inside of `@emotion/core` css template tags or `@emotion/styled` styled component template tags.

Installed and configured Brad's [Fluid typography utilities plugin for Tailwind CSS](https://github.com/bradlc/tailwindcss-fluid/). Suddenly occured to me this plugin is not what I want because it replaces the existing Tailwind text size utility classes to be just the fluid classes. This is because it is taking over the textSizes config object and disabling the core textSizes module. What I want is setting the fluid typography in the global scope and let that affect the textSizes config in Tailwind. Which means I have to use the Global Emotion component and then adjust Tailwind's textSizes config :()

## Global styles in Emotion.js

Global styles in Emotion can be done via the Global component provided by [@emotion/core](https://www.gatsbyjs.org/docs/creating-global-styles/#how-to-add-global-styles-in-gatsby-using-css-in-js). A good place to insert the Global component will be in a layout component.

## Server Side Rendering (SSR) without Emotion-server

SSR now works out of the box with Emotion v10 when using just `@emotion/core` and `@emotion/styled` ([Emotion Documentation](https://emotion.sh/docs/ssr)). Yay!

## Style Plugins that I need

[`gatsby-plugin-postcss`](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/?=)
https://github.com/gatsbyjs/gatsby/issues/5778 setting up post css Plugins
postCss plugins that I will need:

- postcss-preset-env
- postcss-normalize
