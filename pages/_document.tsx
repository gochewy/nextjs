import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isAuthEnabled = true;
    console.log("potatoes", isAuthEnabled);
    return (
      <Html>
        {isAuthEnabled ? (
          <Head>
            <script type="application/javascript" src="http://localhost:9001/auth/js/keycloak.js" />
          </Head>
        ) : <Head />}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
