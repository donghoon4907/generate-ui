import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { useThemeMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";
import { GlobalStyle } from "../theme/globalstyles";
import { ThemeMode } from "../types/theme";
import { ContextProvider } from "../context";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const MainContainer = styled.div`
  padding-left: 88px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  ${({ theme }) => theme.breakPoint.lg} {
    padding-left: 0;
    padding-top: 50px;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { themeMode, onToggle } = useThemeMode();

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header themeMode={themeMode} toggle={onToggle} />
          <Nav themeMode={themeMode} toggle={onToggle} />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
