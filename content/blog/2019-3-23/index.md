---
title: "Setting up my new site in Gatsby - Part II"
date: "2019-03-23"
category: ""
tags: ["this", "that"]
excerpt: "A preview of my second post"
---

# Getting Started with a Starter Recipe

Sometimes getting started with a new stack is difficult, even after you have gone through the documentations. Sometimes this presents a paralysis where I try to plan everything out in my head and paper. But end of the day, those things are just ideas, thoughts, plans. Time to put them into action instead of deliberating every possible outcomes or roadblocks that I might encounter. This is the part where I enjoy the most because it involves problem solving.

First off, I tried to check Gatsby's very well documented website. Right on the [.org homepage](https://www.gatsbyjs.org) (the [.com site](https://www.gatsbyjs.com/) is geared towards business) I saw a starter recipe called gatsby-starter-advanced. I took a look at the scope of the starter recipe and it was everything that I wanted for my new site. It includes packages for building blogs, SEO, images and media, sitemap, twitter and much more. It was definitely a good starting point. For now this is exactly what I need to get started. Once I get the blog portion going I am hoping to also include my portfolio into the website as well but I do not foresee it much more complicated than setting up the same structure of how blog post markdowns will be created.

I am a learner, I can't take something at face value and use it without digging underneath the hood. It's how I learn and I think this is a good opportunity to get a good understanding of how all these advanced plugin work together. Also even after going through the tutorials and Egghead.io's video, I believe in practice makes perfect. So I decided to just replicate only the package.json from the the recipe and slowly build up the folder structure and files for a skeletal project structure, that will allow me to build upon what I have learnt from the tutorials.

# TIL:

- Information put in the siteMetadata such as title, siteURL, description are not automatically pulled in by Gatsby to build your site's metatags. They can be queried using GraphQL queries, and since all the siteMetadata is stored in a separate file, I could also pull it in via an import
- Site titles are set on a per page basis to allow flexibility of creating contextual site titles, and that meets SEO standards of having unique and meaningful site titles, seems like to postfix the current relevant title with the actual site title
- Layout components are useful to house things that needs to be on a global scope and used per content type on a much higher level. We have templates for content types that can be templated and they can still be wrapped by layout components. Lastly we have reusable sub-components can go into both layout and template components.
- There are two general ways to create pages in Gatsby:
  -- Create pages programmatically from data for templated content using the CreatePages API
  -- Create a new file in the pages folder for one off pages such as the homepage (index.js) or the about page
