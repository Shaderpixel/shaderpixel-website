import { css } from '@emotion/core';
import { sizingVar } from './variables';

export default css`
  /* Variable Font Size Interpolation */
  :root {
    font-size: ${sizingVar.minFontSize}em;
    line-height: ${sizingVar.ms3};
  }

  @media screen and (min-width: ${sizingVar.minLerpWidth}em) {
    :root {
      font-size: calc(
        ${sizingVar.minFontSize}em +
          (${sizingVar.maxFontSize} - ${sizingVar.minFontSize}) *
          (
            (100vw - ${sizingVar.minLerpWidth}em) /
              (${sizingVar.maxLerpWidth} - ${sizingVar.minLerpWidth})
          )
      );
    }
  }

  @media screen and (min-width: ${sizingVar.maxLerpWidth}em) {
    :root {
      font-size: ${sizingVar.maxFontSize}em;
    }
  }
`;
