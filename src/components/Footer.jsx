import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeToggler from './ThemeToggler';
import { useTheme } from '../context/ThemeContext';

const Footer = props => {
  // TODO add scroll sticky and slim state
  const themeContext = useTheme();
  return (
    <header>
      <p>This is a header</p>
      {themeContext && !themeContext.isSeasonal ? (
        <ThemeSwitcher
          data-testid="theme-switch"
          htmlFor="theme-switch"
          isDark={themeContext.dark}
          themeContext={themeContext}
        />
      ) : (
        <ThemeToggler
          data-testid="theme-toggle"
          htmlFor="theme-toggle"
          isDark={themeContext.dark}
          isSeasonal={themeContext.isSeasonal}
          themeContext={themeContext}
        />
      )}
    </header>
  );
};

export default Header;
