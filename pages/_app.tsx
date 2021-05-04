import '../styles/globals.css'
import {CssBaseline} from "@material-ui/core";
import Head from "next/head";
import { ApolloProvider } from '@apollo/client';
import PrimaryLayout from "../src/common/components/layout/PrimaryLayout/PrimaryLayout";
import AuthProvider from "../src/modules/auth/provider/AuthProvider";
import {Provider} from "react-redux";
import {store} from "../src/store";
import { client } from '../src/common/graphql/client';

function XStack({ Component, pageProps }) {
  return(
      <>
        <Head>
          <title>X-stack</title>
        </Head>
        <CssBaseline />
        <ApolloProvider client={client}>
            <Provider store={store}>
                <AuthProvider>
                    <PrimaryLayout Component={Component} pageProps={pageProps} />
                </AuthProvider>
            </Provider>
        </ApolloProvider>
      </>
      )
}

export default XStack;
