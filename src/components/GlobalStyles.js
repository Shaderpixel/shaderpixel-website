import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import React from 'react';
import globalFontSizing from '../styles/globalFontSizing';

const GlobalStyles = withTheme(props => (
  <Global
    styles={css`
      ${globalFontSizing} /*composition*/
      /* a {
        color: ${props.theme.fontColor};
        text-decoration: underline;
      } */
      .lock-scroll {
        overflow: hidden !important;
      }
    `}
  />
));

export default GlobalStyles;
