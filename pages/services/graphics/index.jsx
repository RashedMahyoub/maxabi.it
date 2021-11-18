import React from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import Image from "next/image";
import { MarketingCard } from "../../../components";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-10 p-5 lg:h-96">
        <div className="flex flex-col justify-center">
          <div
            className={`text-yellow-500 text-5xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}
            data-aos="fade-right"
          >
            {t["graphic-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["graphic-intro"]}
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/undraw_3d_modeling_h60h.svg" alt="services" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["maxabi-services"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-5 p-5 mt-10">
        <MarketingCard
          icon={<Image src="/motion-graphic.png" alt="1" height={40} width={40} />}
          text={t["motion-graphics"]}
        />
        <MarketingCard
          icon={<Image src="/video-editing.png" alt="1" height={40} width={40} />}
          text={t["video-montage"]}
        />
        <MarketingCard icon={<Image src="/3d-modeling.png" alt="1" height={40} width={40} />} text={t["3d-modeling"]} />
        <MarketingCard icon={<Image src="/cartoons.png" alt="1" height={40} width={40} />} text={t["3d-catroon"]} />
        <MarketingCard icon={<Image src="/visual-effects.png" alt="1" height={40} width={40} />} text={t["VFX"]} />
        <MarketingCard icon={<Image src="/ux.png" alt="1" height={40} width={40} />} text={t["graphic-title"]} />
      </div>
    </main>
  );
};

export default Index;
