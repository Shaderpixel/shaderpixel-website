import { css } from '@emotion/core';
import { sizingVar } from './variables';

export default css`
  /* CSS Custom Properties */
  :root {
    --text-wght: 400;
    --text-slnt: 0;
    --text-header-wdth: 300;
    --safe-area-inset-bottom: env(
      safe-area-inset-bottom,
      0.1vh
    ); /*TODO use this when creating bottom mobile header */
  }
`;
