import { css, Global } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import React from 'react';
import globalFontSizing from '../styles/globalFontSizing';
import globalGeneric from '../styles/globalGeneric';
import globalElements from '../styles/globalElements';
import prismThemeMod from '../styles/prismThemeMod';

import '../styles/css/tailwind.css';
import "prismjs/themes/prism-tomorrow.css"; // TODO can I choose which theme based on dark and light theme or is it easier to include it as part of my theme file?
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const GlobalStyles = withTheme(props => (
  <Global
    styles={css`
      ${globalGeneric}
      ${globalFontSizing}
      ${globalElements}
      ${prismThemeMod}
    `}
  />
));

export default GlobalStyles;
