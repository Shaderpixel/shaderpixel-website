import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import React from "react";
import themeDark from "../styles/themeDark";
import themeLight from "../styles/themeLight";
import themeSeasonal from "../styles/themeSeasonal";

const defaultContextData = {
  isSeasonal: false,
  seasonal: false,
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);
const useDarkMode = () => {
  const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;

  const [themeState, setThemeState] = React.useState({
    seasonal: false,
    dark: false,
    themeHasBeenSet: false,
  });

  React.useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    if (lsDark || supportsDarkMode()) {
      setThemeState({ seasonal: false, dark: true, themeHasBeenSet: true });
    } else {
      setThemeState({ seasonal: false, dark: false, themeHasBeenSet: true });
    }
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useDarkMode();
  const theme =
    // eslint-disable-next-line no-nested-ternary
    themeState.dark && !themeState.seasonal
      ? themeDark
      : !themeState.dark && themeState.seasonal
      ? themeSeasonal
      : themeLight;
  const toggleDark = e => {
    if (e.target.value !== "seasonal") {
      const dark =
        e.target.type.toLowerCase() === "checkbox"
          ? !themeState.dark
          : e.target.value === "dark";
      localStorage.setItem("dark", JSON.stringify(dark));
      setThemeState({ ...themeState, dark, seasonal: false });
    } else {
      const dark = false;
      setThemeState({ ...themeState, dark, seasonal: true });
    }
  };

  return (
    <div style={{ display: themeState.themeHasBeenSet ? "block" : "none" }}>
      <EmotionThemeProvider theme={theme}>
        <ThemeContext.Provider
          value={{
            isSeasonal: false, // turn on seasonal here
            seasonal: themeState.seasonal,
            dark: themeState.dark,
            toggleDark,
          }}
        >
          {children}
        </ThemeContext.Provider>
      </EmotionThemeProvider>
    </div>
  );
};

export { ThemeProvider, useTheme };
