---
title: 'Theming my new site - Part II'
date: '2020-01-01'
cover: './images/7.jpg'
category: ''
tags: ['this', 'that']
slug: 'test8'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

# Setting up a theme switcher or a theme toggler? Why not both?

Normally theme switchers are created via checkboxes by best practices. Theme switchers generally offer dark and light mode which are binary states. But I decided to make my website more fun by allowing an extra seasonal state which I could turn on or off when I wish to. To do this I will have to use radio buttons.

Gotcha Moment
As items are iterated through in a array map, certain conditions might get triggered on re-render that might not be expected when the code is first written. Take for example `[light, dark, seasonal]`. My initial state is dark. When mapping through this array, these were the conditions I was checking for:

1. darkstate is true and the current item is "dark" or
2. darkstate is false and the current item is "seasonal"
3. darkstate is false and the current item is "light"

   The initial render shows the radio button selected correctly. However when I try to select Seasonal, the light radio button was checked instead.
   My mistake was that in my mind I was thinking in terms of conditional step through isolated to the initial render where the state is dark. However as the state changed, the item is re-rendered when I click on seasonal, now darkstate is false and the initial item in the mapping loop is "light" and the condition is now true, so my seasonal theme is correctly applied eventhough my theme toggle is showing the wrong selected item. To fix this I have to also check if seasonal state is true
