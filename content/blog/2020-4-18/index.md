---
title: 'Setting up my Blog'
date: '2020-04-18'
cover: './images/7.jpg'
category: ''
tags: ['this', 'that']
slug: 'test3'
excerpt: 'A preview of my fifth post'
summary: 'blog summary...TLDR'
---

## Related to the floating Table of Contents

While researching into some unrelated issue while dealing with markdown's frontmatter query results, I came across [jonniebigodes's code related to checking if viewport is mobile](https://github.com/gatsbyjs/gatsby/issues/13814#issuecomment-489217851)

```javascript

export default class PostTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
  }
  /**
    * it's best apply the check on both lifecycle methods or some errors
    * will pop up, as all the pages/routes are generated in node in gatsby, so the access to those apis don't exist like window for instance
    */
  componentDidMount(){

    if (typeof window!=='undefined'){
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    }
  }
  componentWillUnmount(){
    if (typeof window!=='undefined'){
      window.removeEventListener('resize',this.handleResize)
    }
  }

  handleResize=()=>{
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render(){
    // the variable extracted through destructuring from the state
    const {mobile}= this.state
    const expanded = !mobile;
    //
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    ...
```

This will come in handy when deciding how to position the table of content on mobile! Another improvement to the code would be to use window.matchMedia instead? resize observer is method for observing and reacting to changes to sizes of DOM elements. Matchmedia is for the window
