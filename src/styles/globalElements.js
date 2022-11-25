import { css } from '@emotion/core';
import { sizingVar } from './variables';

export default theme => css`
  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    background-color: ${theme.backgroundColor};
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  img:not([alt]) {
    filter: blur(10px);
  }

  ol[class],
  ul[class] {
    &:not([class*='u-list-']) {
      list-style: none;
      padding-left: 0;
    }
  }

  li {
    &::marker {
      color: ${theme.borderColor};
    }
  }

  a {
    word-break: break-word;
  }

  a:not([class]):not(.u-no-link-style) /* .u-no-link-style is needed cause sometimes we don't want link style but it also doesn't need a class so u-no-link-style is placebo */
 {
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    color: ${theme.linkColor};
    transition: color ${theme.transitionTime}ms ease-out;

    &:hover,
    &:focus {
      color: ${theme.linkColorActive};
    }
  }

  header {
    a {
      color: ${theme.headerLinkColor};

      &:hover,
      &:active {
        color: ${theme.headerLinkColorActive};
      }
    }
  }

  footer {
    a {
      color: ${theme.footerLinkColor};

      &:hover,
      &:active {
        color: ${theme.footerLinkColorActive};
      }
    }
  }
`;
