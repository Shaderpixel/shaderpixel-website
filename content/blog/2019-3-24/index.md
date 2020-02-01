---
title: "Setting up my new site in Gatsby - Part III"
date: "2019-03-24"
cover: "7.jpg"
category: ""
tags: ["this", "that"]
excerpt: "A preview of my third post"
---

# Notes on Folder Structure

Aside from notes on project structure that can be found in the [documentations](https://www.gatsbyjs.org/docs/gatsby-project-structure/), here are my own notes from looking at starter recipes:

## Folders

- `/content` - This folder contains the content of your site e.g. `/content/assets` to contain your images or `/content/blog` to contain the markdown files for your blog posts
- `/data` - This folder can contain local data for your application e.g. `/data/SiteConfig.js`. The data stored in here should be safe to be published to a repo. Information such as third party API keys should be stored inside .env files and should not be commited to a repo.
- `/static` - This folder contains files useful to the site such as favicons for the site and robots.txt

# Figuring out Passing data

## Getting Site Metadata into Components

Was trying to figure out how to get site metadata into my layout component: Should I query my siteMetadata using GraphQL or import the SiteConfig.js directly into the layout file. Either way would allow a single source of truth since the siteMetadata exported from gatsby-config.js uses the values imported from SiteConfig.js.

According to Kyle Matthews in this [comment](https://github.com/gatsbyjs/gatsby/issues/1781#issuecomment-322475987) reading siteMetadata values by importing graphql-config.js is a bad idea since the file can contain more information than needed. Instead he recommended reading off a separate data file like SiteConfig.js.

So I guess its down to preference. I would like to stick with using GraphQL for pulling data (and making my own life difficult). It does feel a more cumbersome having to write the GraphQL query, import and use the StaticQuery component versus using a simple import of the SiteConfig.js and having the information within the file be immediately available. I will stick to GraphQL for now until it becomes unwieldy.

## Sourcing data from local filesystem using gatsby-source-filesystem

[From Gatsby's documentation](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=gatsby-source)

> A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

> The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.

> You can have multiple instances of this plugin to read source nodes from different locations on your filesystem.

# Thoughts

- Is it best practice to have more than one layout component? maybe one that provides default styling like fluid typography, then another one that provides page layout based on content type, e.g. blog with a side bar nav vs a portfolio one that doesn't have it

# TODO

- /static
  -- update sitemap path in robots.txt
  -- generate logo for light and dark theme inside
