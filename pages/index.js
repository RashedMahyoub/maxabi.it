import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Particles from "react-tsparticles";
import ar from "../locale/ar";
import en from "../locale/en";
import particles from "../utils/particles";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  if (process.browser) {
    require("pathseg");
  }

  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles id="tsparticles" options={particles} init={particlesInit} loaded={particlesLoaded} />

      <main className="mt-32">
        <div className="max-w-7xl h-96 mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
          <div className={`col-span-2 flex flex-col justify-center ${locale === "en" ? "mr-10" : "ml-10"}`}>
            <div className="text-5xl font-bold text-yellow-400 my-3" data-aos="fade-right">
              {t.website}
            </div>
            <div className="text-xl font-bold text-light my-3" data-aos="fade-right">
              {t["intro-text"]}
            </div>
          </div>
          <div className="flex justify-center align-middle relative h-full">
            <Image src="/maksabi.png" alt="intro" layout="fill" objectFit="contain" />
          </div>
        </div>
      </main>
    </div>
  );
}
