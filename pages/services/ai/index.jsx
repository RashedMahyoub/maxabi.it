import React from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import Image from "next/image";
import { MarketingCard } from "../../../components";
import { GiPlatform } from "react-icons/gi";
import { BsCodeSlash, BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { GoVerified } from "react-icons/go";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-10 p-5 lg:h-96">
        <div className="col-span-2 flex flex-col justify-center">
          <div
            className={`text-yellow-500 text-2xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}
            data-aos="fade-right"
          >
            {t["ai-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["ai-intro"]}
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/ai-img.svg" alt="services" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["services"]}</div>
        <div className="text-white text-lg font-bold mt-10">{t["ai-contributions"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-5 p-5 mt-10">
        <MarketingCard icon={<Image src="/ai 1.svg" alt="1" height={40} width={40} />} text={t["ai-analysis"]} />
        <MarketingCard icon={<Image src="/ai-voice.svg" alt="1" height={40} width={40} />} text={t["ai-speak"]} />
        <MarketingCard icon={<Image src="/analyze 1.svg" alt="1" height={40} width={40} />} text={t["ai-data"]} />
        <MarketingCard icon={<Image src="/idea 1.svg" alt="1" height={40} width={40} />} text={t["ai-business"]} />
        <MarketingCard icon={<Image src="/analysis 1.svg" alt="1" height={40} width={40} />} text={t["ai-money"]} />
        <MarketingCard icon={<Image src="/coding (1) 1.svg" alt="1" height={40} width={40} />} text={t["ai-machine"]} />
      </div>
    </main>
  );
};

export default Index;
