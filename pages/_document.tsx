import { Html, Head, Main, NextScript } from "next/document";

const Document = () =>{
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content="BandSharePotal"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-slate-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;