import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Ecommerce Listing Page</title>
          {this.props.styleTags}
          <link rel="stylesheet" href="static/global.css" />
        </Head>

        <body>
          <Main className="test" />
          <NextScript />
        </body>
      </html>
    );
  }
}
