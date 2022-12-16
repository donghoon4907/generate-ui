import type { AppProps } from "next/app";
import type { FC } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/globalstyles";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { useTheme } from "../hooks/useTheme";

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

interface Props extends AppProps {}

export const Layout: FC<Props> = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Nav />
        <MainContainer>
          <MainBody>
            <Component {...pageProps} />
          </MainBody>
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
};
