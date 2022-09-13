import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="connect-src 'self' vitals.vercel-insights.com"
          />
          <meta charSet="utf-8" />
          <meta name="title" content="Fabrizio Tessaro" />
          <meta
            name="description"
            content="Hey! I'm Fabrizio Tessaro, a fullstack developer. This is my personal portfolio. Here you can see my work and contact me. "
          />
          <meta
            name="keywords"
            content="Fabrizio Tessaro, portfolio, github, frontend developer, fullstack developer"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="/seo-bg.png" />
          <meta property="og:title" content="Fabrizio Tessaro" />
          <meta
            property="og:description"
            content="Hey! I'm Fabrizio Tessaro, a fullstack developer. This is my personal portfolio. Here you can see my work and contact me."
          />
          <meta property="og:image" content="/seo-bg.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://portfolio.fabriziotessaro.vercel.app/"
          />
          <meta property="twitter:title" content="Fabrizio Tessaro" />
          <meta
            property="twitter:description"
            content="Hey! I'm Fabrizio Tessaro, a fullstack developer. This is my personal portfolio. Here you can see my work and contact me."
          />
          <meta property="twitter:image" content="/seo-bg.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
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