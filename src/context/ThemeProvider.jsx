import React from 'react';
import { ThemeProvider } from './ThemeContext';
import GlobalStyles from '../components/GlobalStyles';

const RootWrapper = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default RootWrapper;
