import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { useThemeMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";
import { GlobalStyle } from "../theme/globalstyles";
import { ThemeMode } from "../types/theme";
import { ContextProvider } from "../context";
import { Nav } from "../components/Nav";

const Container = styled.div`
  display: flex;
  position: relative;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { themeMode, onToggle } = useThemeMode();

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Nav themeMode={themeMode} toggle={onToggle} />
        </Container>
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
