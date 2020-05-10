import { css } from '@emotion/core';
import { sizingVar } from './variables';

export default theme => css`
  /* Generic Box-sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: ${theme.fontColor};
  }
  /* Generic Attributes */
  *:not([role='dialog'])[hidden] {
    display: none !important;
  }

  /* Do not set dialogs to display: none by default
 https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/ */
  [role='dialog'][hidden] {
    display: block !important;
    visibility: hidden !important;
  }

  :disabled {
    cursor: not-allowed !important;
    opacity: 0.7;
  }

  @media not all, screen and (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0s !important;
      scroll-behavior: auto !important;
    }
  }
`;
