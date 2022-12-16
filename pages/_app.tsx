import type { AppProps, AppContext } from "next/app";
import { getCookie } from "cookies-next";

import { ThemeMode } from "../types/theme";
import { ContextProvider } from "../context";
import constants from "../constants";
import { Layout } from "../components/Layout";

function MyApp(props: AppProps) {
  const { themeMode } = props.pageProps as { themeMode: ThemeMode };

  return (
    <ContextProvider context={{ themeMode }}>
      <Layout {...props} />
    </ContextProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const { req, res } = ctx;

  const themeMode = getCookie(constants.key.cookie, { req, res });

  pageProps = { ...pageProps, themeMode };

  return {
    pageProps
  };
};

export default MyApp;
