import React from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import Image from "next/image";
import { ServiceCard } from "../../../components";
import { GiPlatform } from "react-icons/gi";
import { BsCodeSlash, BsFillBarChartFill, BsLaptop } from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
        <div className="col-span-2">
          <div
            className={`text-yellow-500 text-2xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}
            data-aos="fade-right"
          >
            {t["web-service-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["web-service-description"]}
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/undraw_static_website_0107.svg" alt="services" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["web-service-intro-title"]}</div>
        <div className="text-white text-xl font-bold mt-10">{t["web-service-intro-text"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-5 p-5 mt-10">
        <ServiceCard
          icon={<GiPlatform className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-platform"]}
          description={t["platform-text"]}
        />
        <ServiceCard
          icon={<BsFillBarChartFill className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-init"]}
          description={t["init-text"]}
        />
        <ServiceCard
          icon={<AiOutlineRadarChart className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-analysis"]}
          description={t["analysis-text"]}
        />
        <ServiceCard
          icon={<MdDesignServices className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-design"]}
          description={t["design-text"]}
        />
        <ServiceCard
          icon={<BsCodeSlash className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-coding"]}
          description={t["coding-text"]}
        />
        <ServiceCard
          icon={<BsLaptop className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
          title={t["web-dev"]}
          description={t["dev-text"]}
        />
      </div>
    </main>
  );
};

export default Index;
