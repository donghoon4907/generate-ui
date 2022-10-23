import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { useThemeMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";
import { GlobalStyle } from "../theme/globalstyles";
import { ThemeMode } from "../types/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { themeMode, onToggle } = useThemeMode();

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
