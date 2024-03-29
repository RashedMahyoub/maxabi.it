import React, { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "../components";
import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import particles from "../utils/particles";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

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
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="نقدم لكم باقات تجارية وتنافسية مميزة تتناسب مع أفضل الخدمات المستخدمة في تكنولوجيا المعلومات"
        />
        <meta
          name="keywords"
          content="شركة تقنية , تقنية , تقنيه , استضافة مواقع , استضافة موقع , شركة هوست , شركة هوستنج , ويب هوستنج , دومين , حجز دومين , طلب دومين , تسجيل دومين , دومينات , تصميم مواقع , تصميم موقع , موقع الكتروني , برمجة مواقع , برمجة موقع , تصميم متجر , تصميم متاجر , متجر الكتروني , برمجة متجر , سيرفرات , شركة سيرفرات , سيرفر , سيرفر استضافة , حجز سيرفر , طلب سيرفر , سيرفر خاص , سيرفر كامل , سيرفرات مداره , سيرفر مدار , ادارة سيرفرات , سيرفرات VDS , سيرفر vds , سيرفرات vps , سيرفر VPS , طلب سيرفر vps , طلب vps , حجز vps , استضافة سعودية , استضافة سعودية رسمية , افضل استضافة سعودية , افضل شركة تصميم مواقع , تصميم موقع , تصميم متجر , متجر الكتروني , تصميم متاجر , افضل شركة تصميم, تصميم مواقع شركات, تصميم ويب سايت, تطبيقات الموبايل, برمجة مواقع, افضل استضافة مصرية, افضل شركة تصميم مصرية, افضل شركة برمجة سعودية ومصرية, تصميم مواقع انترنت, خدمات أعمال, حملات اعلانية على فيسبوك, حملات اعلانية على جوجل, تسويق الكتروني, ديجيتال ماركتنج, سوشيال ميديا, ادارة سوشيال ميديا, تسويق التواصل الاجتماعي, تصميم مواقع, تصميم مواقع انترنت, تصميم مواقع شركات , تسويق الكتروني على الانترنت, برمجة تطبيقات الهواتف الذكية, تطبيقات الجوال, تطبيقات الموبايل, برمجة تطبيقات الاندرويد, برمجة تطبيقات الايفون, استضافة , سيرفرات , سيرفرات مداره , ادارة سيرفرات , سيرفر , طلب سيرفر , حجز سيرفر , طلب استضافة , حجز استضافة , استضافة موقع , طلب vps , سيرفر vps , سيرفرات VDS , سيرفر vds , سيرفرات vps , سيرفر VPS , استضافة سعودية , استضافة سعودية رسمية , افضل استضافة سعودية , افضل تصميم مواقع , تصميم , تصميم شركات , تصميم ويب سايت , تطبيقات الموبايل , برمجة مواقع , افضل استضافة مصرية , افضل شركة تصميم مصرية , افضل شركة برمجة سعودية ومصرية, افضل شركة تصميم في القاهرة, افضل شركة تصميم في الرياض, افضل شركة تسويق في الرياض, افضل شركة تسويق في القاهرة, افضل شركة تسويق سعودية, افضل شركة تسويق مصرية "
        />
        <meta name="author" content="شركة تقنية | Technology IT" />
        <meta name="robots" content="follow, index" />
        <meta
          itemProp="name"
          content="شركة تقنية لتكنولوجيا المعلومات و استضافة المواقع و السيرفرات و VPS و تصميم و تطوير و برمجة المواقع و المتاجر الالكترونية و تطبيقات الجوال و الحملات الاعلانية و التسويق الالكتروني و برامج و انظمة ادارة الشركات"
        />
        <meta
          itemProp="description"
          content="شركة تقنية , افضل شركة تصميم وبرمجة وتطبيقات الموبايل والتسويق الالكتروني والحملات الاعلانية وادارة صفحات السوشيال ميديا في المملكة العربية السعودية, افضل شركة في المدينة المنورة, في التجمع, شركة تسويق الكتروني , شركة ديجيتال ماركتينج , شركة اعلانات جوجل , اعلانات فيس بوك , اعلانات تويتر , ادارة التواصل الاجتماعي"
        />
        <title>مكسبي لتقنية المعلومات | Maxabi IT</title>
      </Head>

      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

      <Particles id="tsparticles" options={particles} init={particlesInit} loaded={particlesLoaded} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
