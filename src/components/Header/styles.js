import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { sizingVar, screensVar } from '../../styles/variables';

/**
 ** EMOTION CLASSES
 */
const header = theme => css`
  /* background-color: ${theme.headerFooterColor}; */
`;

const headroomStyles = theme => css`
  .headroom {
    background-color: ${theme.headerFooterColor};
    border-bottom: 3px solid ${theme.colors.themePrimary1};
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: ${sizingVar.ms12}em;
    padding-bottom: ${sizingVar['ms-10']}em;
  }
  .headroom--unfixed {
    position: relative;
    transform: translate3d(0, -17%, 0) skewY(-2deg);
  }

  .headroom:not([class*='headroom--unfixed']) {
    .logo {
      transform: scale3d(0.85, 0.85, 0.85);
    }
  }

  .headroom--scrolled {
    transition: transform 280ms ease-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translate3d(0, -117%, 0) skewY(-2deg);
  }
  .headroom--pinned {
    position: fixed;
    transform: translate3d(0, -26%, 0) skewY(-2deg);
  }
`;

const themeSwitcherStyles = theme => css`
  margin-left: auto;
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
    top: 0;
    left: 0;
    transform-origin: left center;
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
      background-color: ${theme.headerFooterLinkColorActive};
    }
  }
`;

export default {
  header,
  headroomStyles,
  themeSwitcherStyles,
  navLinkStyles,
};

/**
 ** STYLED COMPONENTS
 */
export const HeaderContent = styled.div`
  display: flex;
  transform: skewY(2deg);

  .logo {
    height: ${sizingVar.ms12}em;
    width: ${sizingVar.ms12}em;
    margin-bottom: ${sizingVar['ms-10']}em;
    transition: ${({ theme }) =>
      `transform ${theme.transitionTime}ms ease-out`};

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
      fill: ${({ theme }) => theme.headerFooterColor};
    }

    &-R {
      fill: ${({ theme }) => theme.colors.themeLight1};
    }

    &-L {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }
  }
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    flex-flow: row wrap;
    text-transform: uppercase;
    justify-content: space-evenly;
    font-weight: 500;
    @supports (font-variation-settings: normal) {
      --text-wght: 500;
      --text-slnt: -4;
    }

    li {
      a {
      }
    }
  }
`;
