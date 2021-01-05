import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Get rid of your procastinations." />
          <meta name="keywords" content="Keywords" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icon-192x192.png"
            rel="icon"
            type="image/png"
            sizes="192x192"
          />
          <link
            href="/favicon.ico"
            rel="icon"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#2563EB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
