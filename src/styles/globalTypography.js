import { css } from '@emotion/core';
import { sizingVar } from './variables';
import fonts from './fonts';

export default css`
  /*-----------------------
   Font Loading
  -----------------------*/
  /* SERIF */
  @font-face {
    font-family: 'InterVF';
    font-weight: 100 900;
    font-stretch: 85% 100%;
    font-display: swap;
    src: local('Inter'),
      url(${fonts.interVF}) format('woff2 supports variations'),
      url(${fonts.interVF}) format('woff2-variations');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.interRegular}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.interItalic}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.interMedium}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.interMediumItalic}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.interBold}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.interBoldItalic}) format('woff2');
  }

  /* SANS SERIF */
  @font-face {
    font-family: 'Emberly VF';
    font-weight: 100 900;
    font-stretch: 85% 100%; //TODO: Is this setup correctly
    font-display: swap;
    font-style: normal;
    src: url(${fonts.emberlyVF}) format('woff2 supports variations'),
      url(${fonts.emberlyVF}) format('woff2-variations');
  }

  @font-face {
    font-family: 'Emberly VF';
    font-weight: 100 900;
    font-stretch: 85% 100%;
    font-display: swap;
    font-style: italic;
    src: url(${fonts.emberlyVFItalic}) format('woff2 supports variations'),
      url(${fonts.emberlyVFItalic}) format('woff2-variations');
  }

  @font-face {
    font-family: 'Emberly';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.emberlyBold}) format('woff2');
  }
  @font-face {
    font-family: 'Emberly';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(${fonts.emberlyBoldItalic}) format('woff2');
  }
  @font-face {
    font-family: 'Emberly';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${fonts.emberlyExtraBold}) format('woff2');
  }
  @font-face {
    font-family: 'Emberly';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(${fonts.emberlyExtraBoldItalic}) format('woff2');
  }

  /* MONOTYPE */
  @font-face {
    font-family: 'Fira Code VF';
    font-weight: 300 700;
    font-stretch: 85% 100%; // TODO how does this work?
    font-style: normal;
    font-display: swap;
    src: url(${fonts.firaCodeVF}) format('woff2 supports variations'),
      url(${fonts.firaCodeVF}) format('woff2-variations');
  }

  @font-face {
    font-family: 'Fira Code';
    src: url(${fonts.firaCodeLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${fonts.firaCodeRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${fonts.firaCodeMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url(${fonts.firaCodeBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /*-----------------------
   Variable Font Size Interpolation
  -----------------------*/
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

  /*-----------------------
   FONT SETTING
  -----------------------*/
  * {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';

    @supports (font-variation-settings: normal) {
      font-family: 'InterVF', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
      font-variation-settings: 'wght' var(--text-wght), 'slnt' var(--text-slnt);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .u-display-1,
  .u-display-2,
  .u-display-3,
  .u-display-4,
  .u-display-5 {
    font-family: Emberly, Georgia, Cambria, 'Times New Roman', Times, serif;

    @supports (font-variation-settings: normal) {
      font-family: 'Emberly VF', Georgia, Cambria, 'Times New Roman', Times,
        serif;
      font-variation-settings: 'wght' var(--text-wght),
        'wdth' var(--text-header-wdth);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${sizingVar.ms0};
  }

  pre,
  code,
  .u-code {
    font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-variant-ligatures: contextual;
    @supports (font-variation-settings: normal) {
      font-family: 'Fira Code VF', monospace;
      font-variation-settings: 'wght' var(--text-wght);
    }
  }

  /*-----------------------
   Element Font Styling
  -----------------------*/
  /* HEADERS */
  h1 {
    font-size: ${sizingVar.ms20}em;
  }

  h2 {
    font-size: ${sizingVar.ms18}em;
  }

  h3 {
    font-size: ${sizingVar.ms16}em;
  }

  h4 {
    font-size: ${sizingVar.ms14}em;
  }

  h5 {
    font-size: ${sizingVar.ms12}em;
  }

  h6 {
    font-size: ${sizingVar.ms10}em;
  }

  /* ITALICS AND STRONGS */
  em {
    font-style: italic;
    --text-slnt: -10;
  }

  b,
  strong {
    --font-wght: 700;
  }

  /* SMALL */
  small {
    font-size: ${sizingVar['ms-3']}em;
  }

  /* PARAGRAPH INTRO TEXT */
  p.intro {
    font-size: ${sizingVar.ms3}em;
  }
`;
