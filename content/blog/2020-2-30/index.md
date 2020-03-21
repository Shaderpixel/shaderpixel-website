---
title: "Setting up my Blog"
date: "2020-01-04"
cover: "7.jpg"
category: ""
tags: ["this", "that"]
slug: "test10"
excerpt: "A preview of my fifth post"
---

# Acceptance Criteria

## Table of Contents

Need a floating ToC (Table of Contents)

https://github.com/gatsbyjs/gatsby/issues/6896#issuecomment-499972360

While searching for a pre-made solution, I came across the deprecated [gatsby-remark-toc](https://github.com/DSchau/gatsby-remark-toc) plugin that mentions that the gatsby-transformer-remark already exposes a tableOfContents field that is accessible via GraphQL.

When querying this field, the returned value is already a nicely markedup string for an unordered list that looks something like this `<ul>\n<li><a href=\"#autoprefixer-setup\">Autoprefixer setup</a></li>\n<li><a href=\"#setting-up-prismjs-for-code-examples\">Setting up PrismJS for code examples</a></li>\n<li>\n<p><a href=\"#modularize-gatsby-oncreatenode-and-createpages-methods\">Modularize Gatsby onCreateNode and createPages methods</a></p>\n<ul>\n<li><a href=\"#oncreatenode\">onCreateNode</a></li>\n<li><a href=\"#createpages\">createPages</a></li>\n</ul>\n</li>\n</ul>`

It also nests child items in another unordered list. What I would have to do is convert the string back into HTML and then wrap it in a nav element per the acceptance criteria. To convert a string back into HTML, I came across [David Walsh's blog](https://davidwalsh.name/convert-html-stings-dom-nodes) on how to do so using the more performant contextualFragment method vs DomParser. I have used his resources multiple times throughout my development career and have come to respect the code bits and advices that he put out. If you haven't come across his blogs, I highly recommend them as they are often insightful and well written.
