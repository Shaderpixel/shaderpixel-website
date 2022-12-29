import { css } from '@emotion/react';
import { sizingVar } from './variables';

export default css`
  /* CSS Custom Properties */
  :root {
    --text-wght: 300;
    --text-slnt: 0;
    --text-header-wdth: 94; /* 100 is default */
    --text-header-wght: 400;
    --safe-area-inset-bottom: env(
      safe-area-inset-bottom,
      0.1vh
    ); /*TODO use this when creating bottom mobile header */
  }
`;
