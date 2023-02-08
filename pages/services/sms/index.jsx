import React from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import Image from "next/image";

const Index = () => {
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
            {t["sms-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["soon"]}
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/undraw_message_sent_re_q2kl.svg" alt="services" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </main>
  );
};

export default Index;
