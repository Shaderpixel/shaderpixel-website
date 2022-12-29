import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { sizingVar, screensVar } from '../../styles/variables';
import { ThemeContext } from '../../context/ThemeContext';
import bulletIcon from '../../../static/icons/bullet.svg';

/**
 ** EMOTION CLASSES
 */
const blogPrevNext = css`
  font-size: ${sizingVar['ms-1']}em;
  position: relative;
  overflow: hidden;
  &:hover {
    .blog-hoverText {
      transform: translate3d(0, 0, 0);
    }
  }
`;
const blogChevronIcon = theme => css`
  display: inline;
  fill: ${theme.linkColor};
  height: ${sizingVar.ms1}em;
  width: ${sizingVar.ms1}em;
  position: relative;
  vertical-align: text-top;
`;
const hoverText = theme => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: transform 920ms cubic-bezier(0.86, 0, 0.4, 1.03);
  font-size: ${sizingVar.ms4}em;
  background-color: ${theme.backgroundColor};
`;
const hoverTextNext = css`
  justify-content: flex-end;
  transform: translate3d(-100%, 0, 0);
`;
const hoverTextPrev = css`
  justify-content: flex-start;
  transform: translate3d(100%, 0, 0);
`;
const blogArrowIcon = theme => css`
  fill: ${theme.linkColor};
  height: ${sizingVar.ms6}em;
  width: ${sizingVar.ms6}em;
`;
const blogArrowIconRight = css`
  margin-left: ${sizingVar['ms-11']}em;
`;
const blogArrowIconLeft = css`
  margin-right: ${sizingVar['ms-11']}em;
`;
const blogTagIcon = theme => css`
  grid-area: blog-tags;
  fill: ${theme.fontColor};
  height: ${sizingVar.ms2}em;
  width: ${sizingVar.ms2}em;
  align-self: center;
`;
const blogTags = css`
  grid-area: blog-tags;
  margin-left: ${sizingVar.ms7}em;
  margin-top: ${sizingVar['ms-10']}em;
`;
const blogTOC = theme => css`
  font-size: ${sizingVar['ms-1']}em;
  li {
    line-height: 1.4;
    margin-bottom: ${sizingVar['ms-9']}em;
  }

  li > p {
    margin-bottom: ${sizingVar['ms-11']}em;
  }

  li > ul {
    font-size: ${sizingVar['ms-1']}em;
  }

  p + ul li {
    padding-left: ${sizingVar['ms-2']}em;
    a {
      position: relative;

      &::before {
        content: '';
        display: inline-block;
        mask-image: url(${bulletIcon});
        mask-position: center;
        mask-size: contain;
        mask-repeat: no-repeat;
        height: ${sizingVar['ms-9']}em;
        width: ${sizingVar['ms-9']}em;
        background-color: ${theme.linkColor};
        position: absolute;
        left: -${sizingVar['ms-2']}em;
        top: ${sizingVar['ms-10']}em;
        transition: background-color 250ms ease-out;
      }

      &:hover {
        &::before {
          background-color: ${theme.linkColorActive};
        }
      }
    }
  }
`;

export default {
  blogPrevNext,
  blogChevronIcon,
  hoverText,
  hoverTextNext,
  hoverTextPrev,
  blogArrowIcon,
  blogArrowIconRight,
  blogArrowIconLeft,
  blogTagIcon,
  blogTags,
  blogTOC,
};

/**
 ** EMOTION KEYFRAMES
 */
const flappingRibbon = keyframes`
  from, 3%, 43%, 51%, 100%, to {
    transform: rotateX(0);
  }

  11% {
    transform: rotate3d(1, 0, 0,28deg);
  }

  31% {
    transform: rotateX(-10deg);
  }

  60% {
    transform: rotateX(34deg);
  }

  76% {
    transform: rotateX(-14deg);
  }

  92% {
    transform: rotateX(10deg);
  }
92% {
    transform: rotateX(-4deg);
  }
`;

/**
 ** STYLED COMPONENTS
 */
export const BlogArticle = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: ${screensVar.sm}) {
    display: grid;
    grid-template-areas: 'blog-hero-area blog-hero-area' 'blog-sidebar-1 blog-sidebar-1' 'blog-content-area blog-content-area' 'blog-sidebar-2 blog-sidebar-3';
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${screensVar.lg}) {
    grid-template-areas: 'blog-hero-area blog-hero-area' 'blog-content-area blog-sidebar-1' 'blog-content-area blog-sidebar-2' 'blog-content-area blog-sidebar-3';
    grid-template-rows: auto 1fr min-content min-content;
    grid-template-columns: 1fr minmax(min-content, 12em);
    grid-column-gap: ${sizingVar.ms0}em;
  }
  @media (min-width: ${screensVar.lg}) {
    grid-template-columns: max-content minmax(min-content, max-content);
    grid-column-gap: ${sizingVar.ms8}em;
  }
`;
export const BlogHero = styled.section`
  position: relative;
  grid-area: blog-hero-area;
`;
export const BlogFrontmatter = styled.div`
  display: grid;
  margin-top: ${sizingVar.ms11}em;
  margin-bottom: ${sizingVar.ms10}em;
  grid-template-areas:
    'blog-date blog-category'
    'blog-date blog-title'
    'blog-date blog-tags';
  grid-template-columns: ${sizingVar.ms10}em 1fr;

  @media (min-width: ${screensVar.md}) {
    margin-top: ${sizingVar.ms14}em;
    margin-bottom: ${sizingVar.ms14}em;
    grid-column-gap: ${sizingVar.ms0}em;
  }
`;
export const BlogTitle = styled.h1`
  grid-area: blog-title;
  margin-bottom: 0;
  color: ${({ theme }) => theme.accentFontColor};
`;
export const BlogDate = styled.time`
  grid-area: blog-date;
  padding-left: 0.65ch;
  letter-spacing: 0.22ch;
  transform: rotate3d(0, 0, 1, 90deg) translateY(-100%);
  transform-origin: top left;
  height: fit-content;
  color: ${({ theme: { colors } }) => colors.regularFontBlack};
  z-index: 1;
`;
export const BlogDecorativeRibbon = styled.div`
  grid-area: blog-date;
  background-color: ${({ theme: { colors } }) => colors.themePrimary1};
  height: 140%;
  top: -46%;
  position: relative;
  width: 38px;

  @media (min-width: ${screensVar.md}) {
    height: 160%;
    top: -66%;
    width: 44px;
  }
`;
export const BlogDecorativeRibbonTail = styled.div`
  grid-area: blog-date;
  position: relative;
  bottom: -80%;
  height: 28%;
  width: 38px;

  @media (min-width: ${screensVar.md}) {
    width: 44px;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 1000px;

    & > div {
      top: 0;

      div {
        top: 95%; // avoid joining lines from showing
      }

      div div div div {
        top: 83%;
        background: none;
        border-top: 0px solid transparent;
        border-right: 19px solid
          ${({ theme: { colors } }) => colors.themePrimary1};
        border-bottom: 0.8em solid transparent;
        border-left: 19px solid
          ${({ theme: { colors } }) => colors.themePrimary1};
        height: 0;
        width: 0;
        filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.125))
          drop-shadow(0 1px 0px rgba(0, 0, 0, 0.12))
          drop-shadow(0 2px 0px rgba(0, 0, 0, 0.1175))
          drop-shadow(0 3px 0px rgba(0, 0, 0, 0.115))
          drop-shadow(0 4px 1px rgba(0, 0, 0, 0.1))
          drop-shadow(0 5px 1px rgba(0, 0, 0, 0.08))
          drop-shadow(0 6px 2px rgba(0, 0, 0, 0.06))
          drop-shadow(0 7px 1px rgba(0, 0, 0, 0.04));

        @media (min-width: ${screensVar.md}) {
          border-right-width: 22px;
          border-left-width: 22px;
        }
      }
    }

    div {
      height: 50%;
      width: 100%;
      position: absolute;
      background-color: ${({ theme: { colors } }) => colors.themePrimary1};
      transform: rotateX(0deg);
      transform-style: preserve-3d;
      transform-origin: 50% 0;
      animation: ${flappingRibbon} 14s cubic-bezier(0.8, 0.02, 0.51, 0.91) 250ms
        infinite;
      perspective: 1000px;
    }
  }
`;
export const BlogCategory = styled.a`
  grid-area: blog-category;
  font-size: ${sizingVar.ms1}em;
  --text-wght: 400;
  @media (min-width: ${screensVar.md}) {
    font-size: ${sizingVar.ms4}em;
  }
`;
export const BlogNavContainer = styled.section`
  /* grid-area: ${({ toc }) => (toc ? 'blog-sidebar-1' : 'auto')}; */
  grid-area: blog-sidebar-1;
`;
export const BlogNavContainerContent = styled.div`
  top: 0;
  position: sticky;
`;
export const BlogContent = styled.section`
  grid-area: blog-content-area;

  ul,
  ol {
    list-style-position: outside;
    padding-left: ${sizingVar.ms0}em;
  }

  ul {
    list-style-type: disc;

    > ul {
      list-style-type: circle;

      > ul {
        list-style-type: square;
      }
    }
  }

  ol {
    list-style-type: decimal;
  }

  /* adding text inside markdown lists becomes paragraph */
  li p {
    margin-bottom: 0;
  }
`;
// styled Gatsby Link
export const PrevPostLink = styled(props => <Link {...props} />)`
  /* grid-area: ${({ toc }) => (toc ? 'blog-sidebar-2' : 'blog-sidebar-1')}; */
  grid-area: blog-sidebar-2;
`;
// styled Gatsby Link
export const NextPostLink = styled(props => <Link {...props} />)`
  grid-area: blog-sidebar-3;
  @media (min-width: ${screensVar.sm}) {
    text-align: right;
  }
  @media (min-width: ${screensVar.lg}) {
    text-align: left;
  }
`;
