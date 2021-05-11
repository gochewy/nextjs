import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import config from '../../chewy.json';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isAuthEnabled = config.modules.auth.enabled;
    return (
      <Html>
        {isAuthEnabled ? (
          <Head>
            <script type="application/javascript" src="http://localhost:9001/auth/js/keycloak.js" />
          </Head>
        ) : null}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
