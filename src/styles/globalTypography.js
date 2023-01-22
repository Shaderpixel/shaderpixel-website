import { css } from '@emotion/react';
import { sizingVar } from './variables';
import fonts from './fonts';

export default theme => css`
  /*-----------------------
   Font Loading
  -----------------------*/
  /* SERIF */
  @font-face {
    font-family: 'InterVF';
    font-weight: 100 900;
    font-stretch: 85% 100%;
    font-style: oblique 0deg 10deg;
    font-display: swap;
    src:
      url(${fonts.interVF}) format('woff2 supports variations'),
      url(${fonts.interVF}) format('woff2-variations'),
      url(${fonts.interVF}) format('woff2');
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
    font-weight: 400;
    font-display: swap;
    src: url(${fonts.emberlyRegular}) format('woff2');
  }
/*  @font-face {
    font-family: 'Emberly';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.emberlyMedium}) format('woff2');
  }
  @font-face {
    font-family: 'Emberly';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(${fonts.emberlyBoldMedium}) format('woff2');
  } */
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
    font-size: ${sizingVar.minFontSize}rem;
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
   * Font-family is not moved inside of Tailwind customTypographyBase or customTypographyUtilities plugins because it can't handle @support and causes layout shift when saving in Gatsby develop and commons.css suddenly takes precendence
  -----------------------*/
  body {
    & .u-text-stroke {
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
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
  .u-display-5,
  .u-display-6 {

    &.u-text-stroke {
      font-family: Emberly, Georgia, Cambria, 'Times New Roman', Times, serif;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.headerColor};

    &.u-text-stroke {
      -webkit-text-stroke-color: ${theme.headerColor};
    }
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

  /* PARAGRAPH INTRO TEXT */
  p.intro {
    font-size: ${sizingVar.ms3}em;
  }


  /*-----------------------
   Typography utilities
  -----------------------*/
  /* This is added here because it needs theme */
  .u-text-stroke {
    -webkit-text-stroke-width: 1px;
    color: transparent;
  }
`;
