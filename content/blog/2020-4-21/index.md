---
title: 'Setting up my Blog'
date: '2020-04-21'
cover: './images/7.jpg'
coverAlt: 'some image'
coverCredit: 'Image credit'
category: 'something'
tags: ['this', 'that']
slug: 'test11'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

## Passing arguments to a Page Query in Gatsby

When a page is created dynamically from this blog post template in gatsby-node.js, you can provide an object as part of the page’s context. Keys in the context object that match up with arguments in the page query (in this case: "title"), will be used as variables. Variables are prefaced with $, so passing a title property will become $title in the query.

[How to add query variables to a page query](https://www.gatsbyjs.org/docs/page-query/#how-to-add-query-variables-to-a-page-query)
