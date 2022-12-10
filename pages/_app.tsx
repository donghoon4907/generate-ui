import type { AppProps, AppContext } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { getCookie } from "cookies-next";

import { useThemeMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";
import { GlobalStyle } from "../theme/globalstyles";
import { ThemeMode } from "../types/theme";
import { ContextProvider } from "../context";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { COOKIE_THEME_KEY } from "../lib/cookies-next/key";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const MainContainer = styled.div`
  padding-left: 88px;
  width: 100%;

  ${({ theme }) => theme.breakPoint.lg} {
    padding-left: 0;
    padding-top: 50px;
  }
`;

const MainBody = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.breakPoint.lg} {
    height: calc(100vh - 50px);
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { loadedTheme } = pageProps as { loadedTheme: ThemeMode };

  const { themeMode, onToggle } = useThemeMode(loadedTheme);

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header themeMode={themeMode} toggle={onToggle} />
          <Nav themeMode={themeMode} toggle={onToggle} />
          <MainContainer>
            <MainBody>
              <Component {...pageProps} />
            </MainBody>
          </MainContainer>
        </Container>
      </ThemeProvider>
    </ContextProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const { req, res } = ctx;

  const loadedTheme = getCookie(COOKIE_THEME_KEY, { req, res });

  pageProps = { ...pageProps, loadedTheme };

  return {
    pageProps
  };
};

export default MyApp;
