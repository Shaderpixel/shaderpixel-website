---
title: 'Typography'
date: '2020-01-05'
cover: '7.jpg'
category: ''
tags: ['this', 'that', 'computer']
slug: 'test2'
excerpt: 'Adding fonts to the site'
summary: 'blog summary...TLDR'
---

# How to add fonts to Gatsby

Throwing error in FF Error: downloadable font: rejected by sanitizer and Chrome: Failed to decode downloaded font: http://localhost:8000/Inter-roman.var.woff2

Network tab in Chrome is saying that the file is downloaded fine with type of font which is correct but FF's network tab gave me a more accurate picture, it says that type is HTML..how is that possible

When I tried to reference a font file using URL(‘path-to-font.woff’) Gatsby thinks that the file is a html!!!!

## Ways to add font:

See evernote for screenshots

https://github.com/gatsbyjs/gatsby/issues/2583

1. Create a folder for fonts with a css file with the @font-face declarations then import that css file into the jsx that you need it.
   - gatsby-source--example/src/fonts/font.css
2. with CSS-in-JS, Import each of the font files and reference it in the template string!
   _ https://github.com/emotion-js/emotion/issues/984#issuecomment-489097371
   _ https://github.com/gatsbyjs/gatsby/issues/2583#issuecomment-340722928 \*
   https://www.gatsbyjs.org/packages/gatsby-plugin-preload-fonts/?=preload#gatsby-plugin-preload-fonts
3. Use plugins
   - Typography.js https://alligator.io/gatsbyjs/custom-fonts-in-gatsby/#typographyjs
   - Typefaces.js https://alligator.io/gatsbyjs/custom-fonts-in-gatsby/#typefaces.js
   - gatsby-web-font-loader (using the web font loader by Typekit) https://dev.to/iangloude/4-steps-to-self-hosted-fonts-in-gatsby-aj2

## Increasing performance

Add link rel preload https://www.gatsbyjs.org/packages/gatsby-plugin-preload-fonts/?=preload#gatsby-plugin-preload-fonts, but if font files are already self-hosted then and bundled in Webpack so no additional network request is made as part of routes. So the font-preload-cache.json asset is empty.

### https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-preload-fonts

If an asset isn't showing up, this is likely due to its route not being scraped properly. To insure that the route in question is being scraped, you have a couple options. First, routes that don't show up under the allSitePage query on your site's GraphQL server will not be scraped.

If you're still having trouble, you can run gatsby-preload-fonts with a lower log level to view what paths it's visiting in real time.

# mac/linux

LOG_LEVEL=info npm run preload-fonts

# windows

set LOG_LEVEL=info & npm run preload-fonts

Available log levels include info, debug, warn, error, and silent, respectively.

## Converting font files into WOFF/WOFF2

Google has a [neat little package](https://github.com/google/woff2) that allows us to convert font files into Woff2 format.

After you have downloaded the repo, follow the instructions on your choice of building and installing the package. Since I already have Brotli previously installed via Brew, I followed that set of instructions. Once the package has been installed, I have to add the path to the installed binaries to my _.bash_profile_ so that I can call the command `woff2_compress` and `woff2_decompress` from my terminal every time.

```bash
# use Googles Woff2 to create Woff2 files from OTF and TTF files
export PATH="$PATH:/path_to_the_downloaded_package/woff2/out"
```

## Bonus Round

### Use of static folder

In general, when adding assets to the site we want to import them into the JS files so that webpack can optimize them. However there might be times when we want to add the assets outside of the module system. The static folder allows us to do that. You can create a folder named static at the root of your project. Every file you put into that folder will be copied into the public folder. See [Using the Static Folder](https://www.gatsbyjs.org/docs/static-folder/)

### Enabling ligatures for Fira Code

Ligatures for fonts can be turned on using the `font-variant-ligatures` CSS rule. See MDN documentation on [font-variant-ligatures](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures).

## Resources

https://alligator.io/gatsbyjs/custom-fonts-in-gatsby

https://www.shakacode.com/blog/optimizing-google-fonts-on-gatsby-sites/
https://markoskon.com/extremely-fast-load-time-with-gatsby-and-self-hosted-fonts/

Font testing tool: https://wakamaifondue.com/
