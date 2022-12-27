---
title: 'Theming my new site - Part III'
date: '2020-01-04'
category: ''
cover: '7.jpg'
tags: ['this', 'that']
slug: 'test9'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

# Reverting Tailwind CSS setup

While styling the labels for my theme toggler/switcher component, I was trying to use the TailwindCSS utility class `.sr-only` via the Tailwind macro. Upon saving, it gave me an error `ReferenceError: _tailwindUtils is not defined` Granted that my Tailwind CSS is on v1.0.0 Alpha4.

Decided to research into this issue and someone also ran into it https://github.com/bradlc/babel-plugin-tailwind-components/issues/40

After looking at the issues reported in the babel-plugin-tailwind-components repo and reading some of the comments in the [issue](https://github.com/bradlc/babel-plugin-tailwind-components/issues/20) that I had created, I got the sense that the repo owner is currently focused on other projects and with Tailwind v2 around the corner, I am conjecturing that Brad is waiting for things to become more stable on the Tailwind end before continue working on the Babel plugin. This made sense since the Tailwind configurations and codebase had changed significantly in v1.

In the meantime while going through the issue thread that I created for [Tailwind v1 compatibility](https://github.com/bradlc/babel-plugin-tailwind-components/issues/20#issuecomment-568795055), I came across this comment which suggested using PurgeCSS (gatsby-plugin-purgecss) along with one of the recommended ways of importing Tailwind. This involves using PostCSS,along with creating a stylesheet that will be imported globally (through my GlobalStyles component). This global stylesheet will contain the needed Tailwind directives. Then the PurgeCSS plugin will then strip out unused CSS classes. This seems to work only in production (by running Gatsby Build, Gatsby Serve and inspecting the source.) I decided to go with this route for the time being, since the whole point of using the tailwind-macro and the babel-plugin-tailwind-components was to reduce unused framework classes.

The same comment also mentioned a [Classnames](https://github.com/JedWatson/classnames) package. This package allows conditional inclusion of classnames via an object notation passed to the package method which will be conditionally flattened and joined into a string. Even though it is already possible to do conditional checks on whether to include a certain class using ES6 template literals (e.g. `className={`\${props.isDark ? 'darkTheme' : 'lightTheme'}`}`), you can see how quickly this makes the className prop unwieldy when you have multiple conditionally included class names. The Classnames package also offer variations of the same method that can dedupe classes passed to it and also work with style JS variables imported as [CSS Modules](https://github.com/css-modules/css-modules).

Since tailwind-base directive already includes an opinionated Normalize.css, I removed the emotion-normalize package and its import from my GlobalStyles component.

##Vendor prefixing
Autoprefixer is a common tool in the front-end developer's pocket when it comes to ensuring styles are compatible with the browsers that they are developing for. While investigating whether I can change the amount of vendor prefixing outputted in my stylesheets, I discovered that Emotion uses Stylis which being a lightweight framework, [doesn't provide the capability to allow prefixes via Browserslist](https://github.com/emotion-js/emotion/issues/522). That being said, its not a huge deal since the amount of CSS outputted is comparable to 'Latest 2 versions' rule. Therefore, if I were to include some custom CSS not through Emotion, do I need to install my own autoprefixer setup via PostCSS?

[Gatsby reads browserslist configuration](https://www.gatsbyjs.org/docs/browser-support/) through whatever ways that Browserslist gets its configuration: a browserslist config file, a directive in package.json ... .Changing these values will modify your JavaScript (via babel-preset-env) and your CSS (via autoprefixer) output.

TO DO SO:
Apparently I can add cssnano and autoprefixer though it seems like my css rules are already being prefixed. need to test changing config inside of the browserlist config file.. https://github.com/emotion-js/emotion/issues/522

Resources:

https://github.com/taylorbryant/gatsby-starter-tailwind
https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/

https://dev.to/changoman/the-right-way-to-add-tailwind-css-to-gatsby-with-purge-css-nej
