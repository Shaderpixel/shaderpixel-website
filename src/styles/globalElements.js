import { css } from '@emotion/react';
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
  figure.u-blockquoteWrapper {
    position: relative;
    padding: ${sizingVar.ms0}em;
    background-image: linear-gradient(
        45deg,
        ${theme.blockquoteBackground1},
        ${theme.blockquouteBackground2}
      ),
      url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 6V5zm1 5v1H5z' fill='${encodeURIComponent(
        theme.blockquouteFill
      )}' fill-opacity='.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`;
