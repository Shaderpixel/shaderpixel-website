import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { sizingVar, screensVar } from '../../styles/variables';

/**
 ** STYLED COMPONENTS
 */
export const AboutHeader = styled.div`
  display: flex;
  margin-top: ${sizingVar.ms13}em;
  margin-bottom: ${sizingVar.ms10}em;

  @media (min-width: ${screensVar.md}) {
    margin-top: ${sizingVar.ms18}em;
    margin-bottom: ${sizingVar.ms14}em;
  }

  h1 {
    position: relative;

    &::before {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) =>
        theme.mode === 'light'
          ? theme.colors.themePrimary1
          : theme.colors.themeSlate};
      content: '';
      bottom: 0;
    }
  }

  .portrait {
    flex: 0 1 25%;

    /* to keep original height instead of flexed height */
    /*img {
      height: initial;
    }*/
  }

  h1 {
    flex: 1;
  }
`;

export const PropertyCardContainer = styled.div`
  display: flex;
  gap: ${sizingVar.ms3}em;
  margin-bottom: ${sizingVar.ms8}em;
`;

export const PropertyCardIconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.themePrimary1};
  height: 100%;
  padding: ${sizingVar['ms-5']}em;

  svg {
    height: ${sizingVar.ms9}em;
    width: ${sizingVar.ms9}em;
    fill: ${({ theme }) =>
      theme.mode === 'light' ? theme.fontColor : theme.backgroundColor};
    stroke: ${({ theme }) =>
      theme.mode === 'light' ? theme.fontColor : theme.backgroundColor};
  }
`;

export const PropertyCardDetailContainer = styled.div`
  h2 {
    font-size: ${sizingVar.ms1}em;
    text-transform: uppercase;
    letter-spacing: initial;
    font-weight: 500;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

/**
 ** EMOTION CLASSES
 */
const pasttimeIcon = theme => css`
  stroke-miterlimit: 10;
`;

export default {
  pasttimeIcon,
};
