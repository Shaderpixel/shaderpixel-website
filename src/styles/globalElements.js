import { css } from '@emotion/core';
import { sizingVar } from './variables';

export default theme => css`
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    background-color: ${theme.backgroundColor};
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
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
    list-style: none;
  }

  ol[class],
  ul[class] {
    padding-left: 0;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
`;
