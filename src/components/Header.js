import React from 'react';
import ThemeToggler from './ThemeToggler';
import { useTheme } from '../context/ThemeContext';

const Header = props => {
  // TODO add scroll sticky and slim state
  const themeContext = useTheme();
  console.log(themeContext);
  return (
    <header>
      <p>This is a header</p>
      {themeContext && Object.keys(themeContext).length > 0 ? (
        <ThemeToggler
          data-testid="darkmode-switch"
          htmlFor="darkmode-switch"
          isDark={themeContext.dark}
          themeContext={themeContext}
        />
      ) : null}
    </header>
  );
};

export default Header;
