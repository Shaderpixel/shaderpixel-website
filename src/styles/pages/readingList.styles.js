import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizingVar, screensVar } from '../variables';
import linkIcon from '../../../static/icons/link.svg';

/**
 ** STYLED COMPONENTS
 */

export const CategoryCardContainer = styled.div`
  /* border: 7px solid transparent;
  border-radius: 20px; */
  padding: ${sizingVar.ms0}em ${sizingVar.ms0}em ${sizingVar['ms-9']}em;
  margin-bottom: ${sizingVar.ms5}em;
  /* background: linear-gradient(
        ${({ theme }) => `${theme.backgroundColor}, ${theme.backgroundColor}`}
      )
      padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => `${theme.borderColor}, ${theme.colors.themeBlue1}`}
      )
      border-box; */
`;

export const CategoryCardTitleContainer = styled.div`
  display: flex;
  gap: ${sizingVar['ms-2']}em;

  .categoryTagIcon {
    fill: ${({ theme }) => theme.headerColor};
    width: ${sizingVar.ms5}em;
    height: ${sizingVar.ms5}em;
    align-self: flex-start;
    transform: translateY(64%);
  }
`;

export const CategoryCardDetailContainer = styled.div`
  overflow-x: auto;

  ul {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(360px, 1fr)
    ); /* 360px baseed on smallest screen size as refeerence */
    grid-auto-rows: max-content;
    grid-gap: ${sizingVar.ms0}em;
    margin-bottom: ${sizingVar.ms0}em;

    li {
      padding: ${sizingVar['ms-5']}em ${sizingVar.ms3}em;
      border: 2px solid
        ${({ theme }) =>
          theme.mode === 'dark'
            ? theme.colors.midGray
            : theme.colors.themeSecondary1};
      border-radius: ${({ theme }) => theme.borderRadius};

      a {
        position: relative;

        &::before {
          content: '';
          display: inline-block;
          mask-image: url(${linkIcon});
          mask-position: center;
          mask-size: contain;
          mask-repeat: no-repeat;
          height: ${sizingVar['ms-3']}em;
          width: ${sizingVar['ms-3']}em;
          background-color: ${({ theme }) => theme.linkColor};
          position: absolute;
          left: -${sizingVar['ms-6']}em;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: background-color 250ms ease-out;
        }

        &:hover {
          &::before {
            background-color: ${({ theme }) => theme.linkColorActive};
          }
        }
      }

      p {
        margin-bottom: ${sizingVar['ms-8']}em;
      }
    }
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

/**
 ** EMOTION CLASSES
 */
const pillLink = theme => css`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.themeDark1};
  color: ${theme.colors.themeLight1};
  padding: calc(${sizingVar['ms-6']}em - 2px) calc(${sizingVar.ms0}em - 2px);
  border: 2px solid transparent;
  border-radius: ${sizingVar.ms5}em;
  width: max-content;
  gap: ${sizingVar['ms-5']}em;
  transition: all 250ms ease-out;

  .pillLinkTagIcon {
    fill: ${theme.colors.themePrimary2};
    width: ${sizingVar.ms1}em;
    height: ${sizingVar.ms1}em;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.mode === 'light'
      ? theme.colors.lightGray
      : theme.colors.midGray};
    border: 2px solid ${theme.colors.themeDark1};
    color: ${theme.mode === 'light'
      ? theme.borderColor
      : theme.colors.themeDark1};

    .pillLinkTagIcon {
      fill: ${theme.mode === 'light'
        ? theme.borderColor
        : theme.colors.themeDark1};
    }
  }
`;

const listContainer = css`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${sizingVar['ms-1']}em ${sizingVar.ms0}em;
`;

const navParentContainerStyles = (
  theme,
  navListExpanded,
  navScrollVh,
  isHeadroomPinned,
  headerElHeight
) =>
  css`
    position: sticky;
    top: 0;
    z-index: 1;
    /* todo add ref to detect the height of headroom */
    transform: ${isHeadroomPinned
      ? `translateY(${headerElHeight}px)`
      : 'translateY(0)'};
    transition: transform 280ms ease-in-out; /* this should match headroom's transition */
    background-color: ${theme.backgroundColor};

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-top: 80px solid
        ${theme.mode === 'light' ? theme.colors.midGray : theme.borderColor};
      border-right: 80px solid transparent;
    }

    &.isPinned {
      ${'' /* overflow: hidden; */}
    }

    &.navHeightLimit {
      &::after {
        content: ${!navListExpanded
          ? `''`
          : navScrollVh > sizingVar.maxNavListExpandedHeight
          ? `''`
          : 'initial'};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: ${sizingVar.ms11}em;
        background: linear-gradient(
          0deg,
          ${theme.backgroundColor} 25%,
          transparent 100%
        );
        z-index: 1;

        @media (min-width: ${screensVar.xl}) {
          height: ${sizingVar.ms1}em;
        }
      }
    }

    .visibility-toggle {
      color: ${theme.colors.regularFontBlack};
      position: absolute;
      bottom: 10px;
      right: 25px;
      z-index: 2;
      border-radius: 50%;
      background-color: ${theme.borderColor};
      padding: ${sizingVar['ms-11']}em;

      svg {
        fill: ${theme.mode === 'light'
          ? theme.colors.themePrimary2
          : theme.colors.themeDark1};
        height: ${sizingVar.ms5}em;
        width: ${sizingVar.ms5}em;
      }
    }
  `;

const navStyles = theme =>
  css`
    padding: ${sizingVar['ms-1']}em ${sizingVar.ms0}em;
  `;

// when nav not expanded, anchor top is equal to default nav collapsed height
// when nav expanded, anchor top is equal to offset height of container
const categoryAnchor = (theme, navCurrentVh) =>
  css`
    scroll-margin-top: calc(${navCurrentVh}vh + ${sizingVar['ms-6']}em);
  `;

export default {
  pillLink,
  listContainer,
  navStyles,
  navParentContainerStyles,
  categoryAnchor,
};
