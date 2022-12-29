import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizingVar, screensVar } from '../../styles/variables';
import backgroundClipImage from '../../../static/images/footer/Hawaii.min.jpg'; // TODO change it to use gatsby-background-image plugin
// TODO https://www.gatsbyjs.org/packages/gatsby-background-image/

/**
 ** EMOTION CLASSES
 */
const footer = theme => css`
  position: relative;
  padding-top: clamp(${sizingVar.ms23}em, 9.7vw, ${sizingVar.ms25}em);
  overflow: hidden;
`;

const footerBranding = css`
  position: absolute;
  font-family: Emberly, Georgia, Cambria, 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: ${sizingVar.ms23}em;
  line-height: 0.845;
  height: 0.71em;

  @media (min-width: ${screensVar.md}) {
    font-size: ${sizingVar.ms26}em;
  }
  @media (min-width: ${screensVar.lg}) {
    font-size: ${sizingVar.ms27}em;
  }
  @media (min-width: ${screensVar.xl}) {
    font-size: ${sizingVar.ms28}em;
  }

  @supports (font-variation-settings: normal) {
    font-family: 'Emberly VF', Georgia, Cambria, 'Times New Roman', Times, serif;
    font-variation-settings: 'wght' var(--text-header-wght),
      'wdth' var(--text-header-wdth);
    --text-header-wght: 700;
  }
`;

export default {
  footer,
  footerBranding,
};

/**
 ** STYLED COMPONENTS
 */
export const FooterContainer = styled.div`
  position: relative;
  bottom: -${sizingVar.ms13}em;

  &::before {
    content: '';
    position: absolute;
    top: -${sizingVar.ms12}em;
    height: 5em;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.themePrimary1};
    transform: skewY(-8.8deg);
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    top: -${sizingVar['ms-3']}em;
    height: 3em;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mutedThemePrimary1};
    transform: skewY(-7deg);
    z-index: -1;
  }
`;

export const FooterInnerContainer = styled.div`
  background-color: ${({ theme }) => theme.footerBackgroundColor};
  padding: 0 5% 5em;
  top: ${sizingVar['ms-7']}em;
  transform: skewY(-6deg);
  z-index: 1;

  @media (min-width: ${screensVar.md}) {
    padding: 0 5% calc(6em - 5vw);
  }
  @media (min-width: ${screensVar.lg}) {
    padding: 0 5% calc(7em - 5vw);
  }
  @media (min-width: ${screensVar.xl}) {
    padding: 0 5% clamp(calc(7em - 4vw), 5.5vw, 6em);
  }

  &::before {
    content: '© ${new Date().getFullYear()}';
    position: absolute;
    top: 5%;
    left: 2.5%;
    color: ${({ theme }) => theme.colors.themePrimary1};
    transform-origin: top left;
    transform: rotate3d(0,0,1,90deg) translate3d(18.5%, -50%, 0px) skewX(-6deg);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-size: ${sizingVar['ms-3']}em;

    @supports (font-variation-settings: normal) {
      font-family: 'InterVF', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
      font-variation-settings: 'wght' var(--text-wght), 'slnt' var(--text-slnt);
      --text-wght: 500;
    }

    @media (min-width: ${screensVar.lg}) {
      left: 1.25%;
    }

    @media (min-width: ${screensVar.xl}) {
      top: 2%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 58%;
    width: 100%;
    background-color: ${({ theme }) => theme.footerBackgroundColor};
  }
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  /* transform: translate3d(0, -25%, 0) skewY(6deg); */
  transform: translate3d(0, -2.8vw, 0) skewY(6deg);

  @media (min-width: ${screensVar.md}) {
    transform: translate3d(0, -4vw, 0) skewY(6deg);
  }
  @media (min-width: ${screensVar.lg}) {
    transform: translate3d(0, -3.5vw, 0) skewY(6deg);
  }
  @media (min-width: ${screensVar.xl}) {
    transform: translate3d(0, -4vw, 0) skewY(6deg);
  }
`;

export const FooterBrandingR = styled.div`
  color: ${({ theme }) => theme.footerBackgroundColor};
  top: calc(-0.571em - 5vw);
  right: calc(1.6em + 5vw);
  transform: translateX(50%);
  z-index: -2;
  ${({ theme }) => {
    if (theme.mode === 'dark') {
      return `
            background-image: url(${backgroundClipImage});
            background-color: ${theme.footerBackgroundColor};
            background-size: cover;
            background-position: 45% 0%;
            color: ${theme.colors.themePrimary1};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `;
    }
  }};

  @media (min-width: ${screensVar.md}) {
    top: calc(-0.56em - 5vw);
    right: calc(1.5em + 5vw);
  }
  @media (min-width: ${screensVar.lg}) {
    right: calc(1.535em + 5vw);
  }
  @media (min-width: ${screensVar.xl}) {
    top: calc(-0.571em - 5vw);
    right: calc(1.4em + 5vw);
  }
`;
export const FooterBrandingL = styled.div`
  color: ${({ theme }) => theme.colors.themePrimary1};
  top: calc(-0.05em - 5vw);
  right: calc(1.25em + 5vw);
  z-index: 1;
  transform: translateX(50%);

  @media (min-width: ${screensVar.md}) {
    top: calc(-0.115em - 5vw);
    right: calc(1.12em + 5vw);
  }
  @media (min-width: ${screensVar.lg}) {
    top: calc(-0.1em - 3.4vw);
    right: calc(1.2em + 5vw);
  }
  @media (min-width: ${screensVar.xl}) {
    top: calc(-0.1em - 5vw);
    right: calc(1.065em + 5vw);
  }
`;

export const FooterLinksGrid = styled.ul`
  position: relative;
  /* margin-left: auto; */
  display: grid;
  grid-template-areas:
    'mail twitter linkedin'
    'github codepen gitlab';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${sizingVar['ms-1']}em;

  svg {
    height: ${sizingVar.ms9}em;
    width: ${sizingVar.ms9}em;

    @media (min-width: ${screensVar.md}) {
      height: ${sizingVar.ms11}em;
      width: ${sizingVar.ms11}em;
    }

    @media (min-width: ${screensVar.lg}) {
      height: ${sizingVar.ms13}em;
      width: ${sizingVar.ms13}em;
    }

    .logo-background {
      fill: ${({ theme }) => theme.colors.themePrimary1};
    }

    .logo-foreground {
      fill: ${({ theme }) => theme.footerBackgroundColor};
    }
  }
  .githubIcon {
    grid-area: mail;
  }

  .twitterIcon {
    grid-area: twitter;
  }

  .linkedinIcon {
    grid-area: linkedin;
  }

  .githubIcon {
    grid-area: github;
  }

  .gitlabIcon {
    grid-area: gitlab;
  }

  .codepenIcon {
    grid-area: codepen;
  }
`;
