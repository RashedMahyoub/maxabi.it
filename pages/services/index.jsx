import React from "react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";
import Image from "next/image";
import { ServiceCard } from "../../components";
import { solutions } from "../../utils/links";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div>
      <main className="mt-40">
        <div className="max-w-7xl h-96 mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
          <div
            className={`col-span-2 flex flex-col justify-center text-center ${
              locale === "en" ? "mr-10 lg:text-left" : "ml-10 lg:text-right"
            }`}
          >
            <div className="text-5xl font-bold text-yellow-400 my-5" data-aos="fade-right">
              {t["maxabi-services"]}
            </div>
            <div className="text-2xl font-bold text-light my-5" data-aos="fade-right">
              {t["servies-text"]}
            </div>
          </div>
          <div className="flex justify-center align-middle relative h-full">
            <Image src="/services.svg" alt="intro" layout="fill" objectFit="contain" data-aos="fade-left" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-5 text-center content-center mt-28 lg:mt-40">
          <div className={`text-yellow-400 text-5xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}>
            {t.services}
          </div>
        </div>

        <div className="max-w-7xl mx-auto md:grid md:grid-cols-4 md:gap-5 p-5 mt-10">
          {solutions.map((item) => (
            <ServiceCard
              key={item.name}
              href={item.href}
              icon={<item.icon className="text-white mx-auto h-16 w-16 absolute -bottom-4 -left-4" />}
              title={locale === "en" ? item.name : item.nameAr}
              description={locale === "en" ? item.description : item.descriptionAr}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
