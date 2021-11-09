import React, { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "../components";
import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      dir={router.locale === "en" ? "ltr" : "rtl"}
      className={router.locale === "en" ? "font-Rubik" : "font-Tajawal"}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ar-sa" />
        <link rel="apple-touch-icon" href="/vercel.png" />
        <meta name="keywords" content="متجر الكتروني، سيارات، بيع، شراء" />
        <meta name="author" content="متجر الكتروني | E-commerce" />
        <meta name="robots" content="follow, index" />
      </Head>

      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
