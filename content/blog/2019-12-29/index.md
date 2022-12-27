---
title: 'Theming my new site - Part I'
date: '2019-12-29'
cover: '7.jpg'
category: ''
tags: ['this', 'that']
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

# Figuring out Styles

Had a difficult time today styling importing styles for my themeswitcher. Inspiration for my themeswitcher https://blog.logrocket.com/how-to-create-better-themes-with-css-variables-5a3744105c74/. Got me hung up on is that backslashes in unicode characters needs to be escaped in pseudo element content property otherwise the Emotion will fail silently and now generate all the CSS past that point. It took me awhile to realize what was happening.

Deciding between using Emotion's CSS prop versus using styled object syntax. Given that using the CSS template literals in emotion 10 no longer easily expose generated class names. So something like [composing variable names](https://github.com/emotion-js/emotion/issues/381#issuecomment-334601293) to achieve BEM class names as shown in this comment is no longer as straight forward instead of getting the variable name right from the css template variable like in previous Emotion versions, it stores an object and the class name is in the object key called name and can then be used by doing `` className=`css-${var.name}__input` ``. It feels clunky to me. I decided to instead use styled object syntax.

It allows me to create a custom class name for the styled component but also use traditional class names that is wrapped up inside of the styled object syntax.

Also discovered that sass-like built-in helper functions are not present in CSS-in-JS libraries by default. What a bummer. IT is available through another package called PolishedJs. Thank you guys!

## Resources

[Emotion Patterns](https://github.com/emotion-js/emotion/issues/287)
[Emotion Best Practices.](https://github.com/emotion-js/emotion/issues/381)
This quote from Kye Hoberger stood out to me
[`When it comes to this situation I think to myself, "How many times am I going to style this element?" If it's more than once, I make a styled component. If I'm going to just style this element one time, most of the time I'm just using the css prop.`](https://github.com/emotion-js/emotion/issues/381#issuecomment-334668837)
Source:

Polished JS

[5 things you didn’t know you can do in CSS-in-JS
](https://blog.logrocket.com/5-things-you-can-do-in-css-in-js-that-you-didnt-know-about-c422fb67ceb6/)
