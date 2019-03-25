---
title: "Setting up my new site in Gatsby - Part III"
date: "2019-03-25"
category: ""
tags: ["this", "that"]
excerpt: "A preview of my third post"
---

# Figuring out Styles

## Emotion.js

Gatsby-plugin-emotion: https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/

Having used Styled Components once in my prior React project, naturally I was curious what are the differences between Emotion and Styled Components. Styled Components seem to have a larger user base at this point which may point to longevity of the project, however Emotion is smaler, faster, and have flexible ways of adding CSS to components. Eventhough I really liked how Kye explained the use of css-in-js is just a tradeoff (you can read more about it here)[https://github.com/emotion-js/emotion/issues/113#issuecomment-357045927] but I have some reservations about his thoughts about (ways of CSS implementations)[https://github.com/emotion-js/emotion/issues/113#issuecomment-364565430]. It might be one thing about providing multiple ways of achieving common goal of style setting. But at the end of the day, having too many different ways of doing the same thing would only lead to fragmentation of practices. Do we as a developer community need so many options? Unless those options are there because of certain scenarios that limit the use of other style setting methods, I think having a best practice should be the way to go. For one, having a developer community gathering around best practices allows for quicker adoption and maintainability down the road.
https://github.com/emotion-js/emotion/issues/113
https://github.com/jsjoeio/styled-components-vs-emotion
https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md

## Tailwind.css

Tailwind is a utility-based framework that doesn't come with any prebuilt theme and components. Let's faced it a lot of times developers/designers have an idea of what they want and typically create their own component and themes. So CSS frameworks such as Bootstrap and Foundation comes with unnecessary bloat that never make it into the final product.

Tailwind includes Normalize 8.0.0. To use of Tailwind, we needs a config file placed in the project root named tailwind.js

## Combination of the two

Tailwind with Emotion demo: https://github.com/jlengstorf/gatsby-tailwind-demo

TODO: To use Tailwind with Emotion we need the babel-plugin-tailwind-components package. To incorporate that into Gatsby's babel config, we use the setBabelPlugin API inside of gatsby-node.js. Ofcourse we also need our tailwind.config.js

# Thoughts

Fluid Typography can be added via a plain old CSS stylesheet, via Emotions way of global styles, or via a Tailwind plugin. Another thing that is important to me is implementation of vertical rhythm via the use of a modular scale.
Guess now I just have to test it out.

# TODO
