import '../styles/globals.css';
import posthog from "posthog-js";
import { CssBaseline } from "@material-ui/core";
import Head from "next/head";
import { ApolloProvider } from '@apollo/client';
import { Provider } from "react-redux";
import { useEffect } from "react";
import PrimaryLayout from "../src/common/components/layout/PrimaryLayout/primary-layout";
import AuthProvider from "../src/modules/auth/provider/auth-provider";
import { store } from "../src/store";
import { client } from '../src/common/graphql/client';

function IRP({ Component, pageProps }) {
  const isAuthEnabled = true;
  return (
    <>
      <Head>
        <title>X-stack</title>
      </Head>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Provider store={store}>
          {isAuthEnabled ? (
            <AuthProvider>
              <PrimaryLayout Component={Component} pageProps={pageProps} />
            </AuthProvider>
          ) : (
            <PrimaryLayout Component={Component} pageProps={pageProps} />
          )}

        </Provider>
      </ApolloProvider>
    </>
  );
}

export default IRP;
