import { withTheme, css, Global } from '@emotion/react';
import React from 'react';
import globalCssVars from '../styles/globalCssVars';
import globalTypography from '../styles/globalTypography';
import globalGeneric from '../styles/globalGeneric';
import globalElements from '../styles/globalElements';
import globalSpacing from '../styles/globalSpacing';
import prismThemeMod from '../styles/prismThemeMod';

import '../styles/css/tailwind.css';
import 'prismjs/themes/prism-tomorrow.css'; // TODO can I choose which theme based on dark and light theme or is it easier to include it as part of my theme file?
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const GlobalStyles = withTheme(({ theme }) => (
  <Global
    styles={css`
      ${globalCssVars}
      ${globalGeneric(theme)}
      ${globalTypography(theme)}
      ${globalElements(theme)}
      ${globalSpacing}
      ${prismThemeMod}
    `}
  />
));

export default GlobalStyles;
