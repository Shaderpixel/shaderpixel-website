/**
 * Allow a plugin to wrap the root element.
 * This is useful to set up any Provider components that will wrap your
 * application. For setting persistent UI elements around pages use
 * wrapPageElement.
 * https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
 *
 * Also this code needs to appear in gatsby-ssr.js otherwise it won't work in production
 * https://github.com/gatsbyjs/gatsby/issues/11494#issuecomment-460058623
 */

import React from 'react';
import RootWrapper from './src/context/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
);
