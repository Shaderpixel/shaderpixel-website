import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizingVar, screensVar } from '../../styles/variables';
import { ThemeContext } from '../../context/ThemeContext';

/**
 ** STYLED COMPONENTS
 */
export const PaginationWrapper = styled.nav`
  ul {
    display: flex;
    gap: ${sizingVar['ms-2']}em;
    justify-content: flex-end;
    align-items: center;
    font-size: ${sizingVar['ms-1']}em;

    a {
      display: flex;
    }
  }
`;

/**
 ** EMOTION CLASSES
 */
const chevronIcon = theme => css`
  display: inline;
  fill: ${theme.linkColor};
  height: ${sizingVar.ms1}em;
  width: ${sizingVar.ms1}em;
  position: relative;
  vertical-align: text-top;

  &:hover,
  &:focus {
    fill: ${theme.linkColorActive};
  }
`;

export default {
  chevronIcon,
};
