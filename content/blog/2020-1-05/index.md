---
title: 'Theming my new site - Part IV'
date: '2020-01-04'
cover: './images/7.jpg'
category: ''
tags: ['this', 'that']
slug: 'test1'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

# Autoprefixer setup

Inline styles do not receive prefixes from Autoprefixer (https://stackoverflow.com/questions/43783963/do-inline-styles-get-autoprefixed)

For now most of my styling will be done via a mixture of Emotion and Tailwind utility classes, but if ever the need arises to include my custom stylesheet, I have autoprefixer setup with a Browserlists configuration with the directive of `last 2 versions`.

# Setting up PrismJS for code examples

One of the reasons for my blog is to highlight code examples used I came across or discovered while trying to solve a particular problem. It helps me keep a record of what I have learnt in the past and also as means to share this knowledge with you.

# Modularize Gatsby onCreateNode and createPages methods

Gatsby exposes a few APIs that allows developers to customize things that go into its build process. The full list of the APIs can be viewed here.
A number of useful APIs include onCreateBabelConfig which as the name suggests lets you alter Babel's configuration via two Redux actions: setBabelPlugin and setBabelPreset.

Other two useful and common APIs developers will touch include onCreateNode [REASON] and createPages if you wish to create pages programmatically.

## onCreateNode

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## createPages

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
