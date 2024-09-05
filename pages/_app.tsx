import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <title>MusicStream</title>
        <meta
          name="description"
          content="MusicStream is a music app combining songs with personalized apology messages. Designed with a Blossom theme, it offers a unique way to express regret and reconcile. Simple, elegant, and heartfelt, StreamVerse aims to mend relationships through music and meaningful messages."
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
