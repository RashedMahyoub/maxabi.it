import React from "react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";
import Link from "next/link";
import { AboutCard } from "../../components";
import { FcBinoculars, FcBullish, FcCollect } from "react-icons/fc";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div>
      <main className="mt-40">
        <div className="max-w-7xl mx-auto p-5 text-center content-center">
          <div className={`text-yellow-500 text-5xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}>
            {t.who}
          </div>
          <div className={`text-white text-xl font-bold mt-10`}>{t["about-text-1"]}</div>
          <div className={`text-white text-xl font-bold mt-3`}>{t["about-text-2"]}</div>
          <div className={`text-white text-xl font-bold mt-3`}>{t["about-text-3"]}</div>
          <Link href="/services/" passHref>
            <button className="lg:w-52 mx-auto px-9 py-4 my-5 text-base font-bold transition-colors duration-200 rounded-md block bg-gray-700 hover:bg-gray-800 text-blue-300">
              {t.start}
            </button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-20 p-5 mt-28 lg:mt-40">
          <AboutCard
            icon={<FcBinoculars className="mx-auto" size={100} />}
            title={t.vision}
            description={t["vision-text"]}
          />
          <AboutCard
            icon={<FcCollect className="mx-auto" size={100} />}
            title={t.mission}
            description={t["mission-text"]}
          />
          <AboutCard
            icon={<FcBullish className="mx-auto" size={100} />}
            title={t.value}
            description={t["value-text"]}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
