import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';
import themeDark from '../styles/themeDark';
import themeLight from '../styles/themeLight';
import themeSeasonal from '../styles/themeSeasonal';
import { screensVar } from '../styles/variables';

const defaultContextData = {
  isSeasonal: false,
  seasonal: false,
  dark: false,
  toggleDark: () => {},
  screenWidth: '',
  headerElHeight: 0,
  setHeaderElHeight: () => {},
  isHeadroomPinned: false,
  setIsHeadroomPinned: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);
const useDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    seasonal: false,
    dark: false,
    themeHasBeenSet: false,
  });

  React.useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    const lsDark = localStorage.getItem('dark') === 'true';
    if (lsDark || prefersDarkMode) {
      setThemeState({ seasonal: false, dark: true, themeHasBeenSet: true });
    } else {
      setThemeState({ seasonal: false, dark: false, themeHasBeenSet: true });
    }
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useDarkMode();
  const [isHeadroomPinned, setIsHeadroomPinned] = React.useState(false);
  const [headerElHeight, setHeaderElHeight] = React.useState(0);
  const mobileMq = `screen and (max-width: ${screensVar.xs})`;
  const [screenWidth, setScreenWidth] = React.useState();
  const theme =
    // eslint-disable-next-line no-nested-ternary
    themeState.dark && !themeState.seasonal
      ? themeDark
      : !themeState.dark && themeState.seasonal
      ? themeSeasonal
      : themeLight;
  const toggleDark = e => {
    if (e.target.value !== 'seasonal') {
      const dark =
        e.target.type.toLowerCase() === 'checkbox'
          ? !themeState.dark
          : e.target.value === 'dark';
      localStorage.setItem('dark', JSON.stringify(dark));
      setThemeState({ ...themeState, dark, seasonal: false });
    } else {
      const dark = false;
      setThemeState({ ...themeState, dark, seasonal: true });
    }
  };

  React.useEffect(() => {
    // set initial value
    const mobileMediaWatcher = window.matchMedia(mobileMq);
    setScreenWidth(mobileMediaWatcher.matches ? 'mobile' : 'notMobile');

    // event listener callback
    function updateScreenWidthState(e) {
      setScreenWidth(e.matches ? 'mobile' : 'notMobile');
    }

    mobileMediaWatcher.addEventListener('change', updateScreenWidthState);

    // clean up after ourselves
    return function cleanup() {
      mobileMediaWatcher.removeEventListener('change', updateScreenWidthState);
    };
  }, [mobileMq]);

  return (
    <div style={{ display: themeState.themeHasBeenSet ? 'block' : 'none' }}>
      <EmotionThemeProvider theme={theme}>
        <ThemeContext.Provider
          value={{
            isSeasonal: false, // turn on seasonal here
            seasonal: themeState.seasonal,
            dark: themeState.dark,
            toggleDark,
            screenWidth,
            isHeadroomPinned,
            setIsHeadroomPinned,
            headerElHeight,
            setHeaderElHeight,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </EmotionThemeProvider>
    </div>
  );
};

export { ThemeProvider, useTheme, ThemeContext };
