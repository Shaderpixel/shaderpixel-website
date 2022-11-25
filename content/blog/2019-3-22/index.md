---
title: 'Setting up my new site in Gatsby - Part I'
date: '2019-03-22'
cover: './images/7.jpg'
coverAlt: 'some image'
coverCredit: 'Image credit'
category: ''
tags: ['this', 'that']
excerpt: 'A preview of my first post'
summary: 'blog summary...TLDR'
---

# Getting Started

Research into Gatsby
background in Wes Bos's Advanced React course that used another SSR framework called React.js reference Syntax.fm podcast (how to embed) TLDR: Next.js content is build on demand whereas code in Gatsby is compiled on build time. Will create another post on pros and cons. Both utilizes react underhood. Gatsby also uses Redux. utilizes plugins for plug and play

## Research & Resources

Went through Gatsby Tutorial, video on Egghead.io, poured over Gatsby Documentations, looked at plugin ecosystem. Being a developer with a passion for design, looked into CSS frameworks and CSS options. Liking Tailwind.css a lot. However, after being spoilt by our really accessible and well built framework at work, I was looking to replicate something similar at the very base layer that allows me to specify the modular scale that I wish to use to ensure vertical rhythm. Another thing that I really want in my website is fluid typography (link to smashing article by Mike) which I have used on my old site. I know I could link an external stylesheet but I think my mindset needed to change because we are working in a React + Gatsby environment where things could be specified in a layout wrapper that is going to be utilized on every page. Found Jason Lengstorf's [Gatsby + Tailwind w/Emotion demo implementation](https://github.com/jlengstorf/gatsby-tailwind-demo), Muharjir's [Gatsby Tailwind and Emotion Starter](https://github.com/muhajirdev/gatsby-tailwind-emotion-starter/blob/master/src/components/layout.js) that is also based upon Jason's demo, along with Brad's [fluid typography plugin for Tailwind](https://github.com/bradlc/tailwindcss-fluid/). Super excited.

### Resources

https://github.com/gatsbyjs/gatsby/tree/master/examples
