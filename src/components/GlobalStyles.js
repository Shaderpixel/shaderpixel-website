import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import React from 'react';
import globalFontSizing from '../styles/globalFontSizing';
import globalGeneric from '../styles/globalGeneric';
import globalElements from '../styles/globalElements';

import '../styles/css/tailwind.css';

const GlobalStyles = withTheme(props => (
  <Global
    styles={css`
      ${globalGeneric}
      ${globalFontSizing}
      ${globalElements}
    `}
  />
));

export default GlobalStyles;
