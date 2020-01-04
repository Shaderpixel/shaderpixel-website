import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import globalFontSizing from '../styles/globalFontSizing';
import globalGeneric from '../styles/globalGeneric';
import globalElements from '../styles/globalElements';

const GlobalStyles = withTheme(props => (
  <Global
    styles={css`
      ${emotionNormalize}
      ${globalGeneric}
      ${globalFontSizing}
      ${globalElements}
    `}
  />
));

export default GlobalStyles;
