---
title: 'Using Emotion CSS Prop'
date: '2020-04-21'
cover: './images/7.jpg'
coverAlt: 'some image'
coverCredit: 'Image credit'
category: 'Gatsby Development'
tags: ['this', 'that']
# slug: 'test10'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

## How to pass multiple CSS classes to the CSS Prop

Class names containing emotion styles from the className prop override css prop styles.
Class names from sources other than emotion are ignored and appended to the computed emotion class name.

https://emotion.sh/docs/css-prop#style-precedence
`css={class1, class2}`
class1 and class2 is created via the CSS template literals: css`...`

