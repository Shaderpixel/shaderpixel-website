---
title: "Theming my new site - Part III5"
date: "2020-01-04"
cover: "7.jpg"
category: ""
tags: ["this", "that"]
slug: "test10"
excerpt: "A preview of my fifth post"
---

# Autoprefixer setup

Inline styles do not receive prefixes from Autoprefixer (https://stackoverflow.com/questions/43783963/do-inline-styles-get-autoprefixed)

For now most of my styling will be done via a mixture of Emotion and Tailwind utility classes, but if ever the need arises to include my custom stylesheet, I have autoprefixer setup with a Browserlists configuration with the directive of `last 2 versions`.
