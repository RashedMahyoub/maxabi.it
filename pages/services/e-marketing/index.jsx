import React, { useState } from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import Image from "next/image";
import { MarketingCard, MarketingPackage, ContactsDialog } from "../../../components";
import { IoLogoSnapchat } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

const Index = () => {
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl lg:h-96 mx-auto md:grid md:grid-cols-2 md:gap-10 p-5">
        <div className="flex flex-col justify-center">
          <div
            className={`text-yellow-500 text-5xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}
            data-aos="fade-right"
          >
            {t["marketing-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["marketing-intro"]}
          </div>
          <button
            onClick={() => setShowDialog(true)}
            className="lg:w-52 w-auto px-9 py-4 my-5 text-base font-bold transition-colors duration-200 rounded-md block bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            {t.start}
          </button>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/undraw_social_dashboard_k-3-pt.svg" alt="services" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["marketing-services"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-2 p-5 mt-10">
        <MarketingCard icon={<GoVerified className="text-white h-10 w-10" />} text={t["marketing-snapchat"]} />
        <MarketingCard icon={<BsInstagram className="text-white h-10 w-10" />} text={t["marketing-instagram"]} />
        <MarketingCard small icon={<IoLogoSnapchat className="text-white h-10 w-10" />} text={t["marketing-snapAd"]} />
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["packages"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-40 p-5 mt-10">
        <MarketingPackage
          title={t["silver-package"]}
          description={t["silver-package-text"]}
          price={t["silver-package-money"]}
        />
        <MarketingPackage
          title={t["gold-package"]}
          description={t["gold-package-text"]}
          price={t["gold-package-money"]}
        />
      </div>

      <ContactsDialog isOpen={showDialog} onHide={() => setShowDialog(false)} />
    </main>
  );
};

export default Index;
