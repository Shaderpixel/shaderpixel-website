import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizingVar, screensVar } from '../../styles/variables';

/**
 ** STYLED COMPONENTS
 */
export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: max-content 2fr max-content;
  grid-template-areas:
    'logo . themeToggler'
    'navRegion navRegion navRegion';

  @media (min-width: ${screensVar['2xs']}) {
    grid-template-areas:
      'logo navRegion themeToggler'
      'logo navRegion .';
  }

  .logo {
    &-link-container {
      grid-area: logo;
    }

    height: ${sizingVar.ms7}em;
    width: ${sizingVar.ms7}em;
    transform-origin: bottom center;
    transition: ${({ theme }) =>
      `transform ${theme.transitionTime}ms ease-out`};

    @media (min-width: ${screensVar['2xs']}) {
      margin-bottom: ${sizingVar['ms-10']}em;
      height: ${sizingVar.ms10}em;
      width: ${sizingVar.ms10}em;
    }

    @media (min-width: ${screensVar.sm}) {
      margin-bottom: ${sizingVar['ms-10']}em;
      height: ${sizingVar.ms12}em;
      width: ${sizingVar.ms12}em;
    }

    @media (min-width: ${screensVar.md}) {
      height: ${sizingVar.ms14}em;
      width: ${sizingVar.ms14}em;
    }
    @media (min-width: ${screensVar.lg}) {
      height: ${sizingVar.ms16}em;
      width: ${sizingVar.ms16}em;
    }
  }

  #logo {
    &-border {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }

    &-circle-fill {
      transition: ${({ theme }) => `fill ${theme.transitionTime}ms ease-out`};
      fill: ${({ theme }) => theme.footerBackgroundColor};
    }

    &-R {
      transition: ${({ theme }) => `fill ${theme.transitionTime}ms ease-out`};
      fill: ${({ theme }) => theme.colors.themeLight1};
    }

    &-L {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }
  }
`;

export const HeaderNav = styled.nav`
  grid-area: navRegion;
  align-self: center;
  margin-top: ${sizingVar['ms-2']}em;

  @media (min-width: ${screensVar['2xs']}) {
    margin-top: 0;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    justify-content: space-between;
    font-weight: 500;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-size: ${sizingVar['ms-4']}em;
    @supports (font-variation-settings: normal) {
      --text-wght: 400;
      --text-slnt: -4;
    }

    @media (min-width: ${screensVar['2xs']}) {
      font-size: ${sizingVar['ms-3']}em;
      justify-content: flex-start;
    }

    @media (min-width: ${screensVar.md}) {
      font-size: ${sizingVar['ms-1']}em;
    }

    li {
      a {
      }
    }
  }
`;

/**
 ** EMOTION CLASSES
 */
const header = theme => css`
  /* background-color: ${theme.footerBackgroundColor}; */
`;

const headroomStyles = theme => css`
  .headroom {
    background-color: ${theme.headerBackgroundColor};
    border-bottom: 1px solid ${theme.siteNavBorder};
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: ${sizingVar['ms-1']}em;
    padding-bottom: ${sizingVar['ms-5']}em;
    transition: padding ${theme.transitionTime}ms ease-out;
  }
  .headroom--unfixed {
    position: relative;
    /*transform: translate3d(0, -17%, 0) skewY(-2deg);*/
  }

  .headroom:not([class*='headroom--unfixed']) {
    .logo {
      transform: scale3d(0.85, 0.85, 0.85);
    }
  }

  .headroom--scrolled {
    transition: transform 280ms ease-out;
    padding-top: ${sizingVar['ms-5']}em;
    padding-bottom: ${sizingVar['ms-8']}em;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translate3d(0, -117%, 0);
  }
  .headroom--pinned {
    position: fixed;
  }
`;

const themeSwitcherStyles = theme => css`
  margin-left: auto;
`;

const logoLinkStyles = theme => css`
&:hover {
    .logo {
      #logo {
    /*&-border {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }*/

    &-circle-fill {
      fill: ${theme.colors.themeLight1};
    }

    &-R {
      fill: ${theme.footerBackgroundColor};
    }

   /* &-L {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }*/
  }
  }
}

`;

const navLinkStyles = theme => css`
  position: relative;
  display: block;
  transition: color 600ms ease-out;
  margin: 0 0.25em;
  white-space: pre;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 110%;
    min-width: ${sizingVar.ms13}em;
    background-color: ${theme.linkColor};
    height: 2px;
    transform: skewX(310deg) scale3d(0, 0, 0);
    transition: transform 300ms ease-in-out, background-color 600ms ease-out;
  }

  &::before {
    top: -1px;
    left: 0;
    transform-origin: left center;

    @media (min-width: ${screensVar.xs}) {
      top: 0;
    }
  }

  &::after {
    bottom: 0;
    right: 0;
    transform-origin: right center;
  }

  &:hover {
    &::before,
    &::after {
      transform: skewX(310deg) scale3d(1, 1, 1);
      background-color: ${theme.highlightBgColor};
    }
  }
`;

export default {
  header,
  headroomStyles,
  themeSwitcherStyles,
  logoLinkStyles,
  navLinkStyles,
};
