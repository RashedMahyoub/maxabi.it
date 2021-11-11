import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Particles from "react-tsparticles";
import { ReviewsSlider, ContactsDialog, TeamSlider } from "../components";
import ar from "../locale/ar";
import en from "../locale/en";
import particles from "../utils/particles";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
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
      <Particles id="tsparticles" options={particles} init={particlesInit} loaded={particlesLoaded} />

      <main className="mt-32">
        <div className="max-w-7xl h-96 mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
          <div
            className={`col-span-2 flex flex-col justify-center text-center ${
              locale === "en" ? "mr-10 lg:text-left" : "ml-10 lg:text-right"
            }`}
          >
            <div className="text-7xl font-bold text-yellow-400 my-5" data-aos="fade-right">
              {t.website}
            </div>
            <div className="text-2xl font-bold text-light my-5" data-aos="fade-right">
              {t["intro-text"]}
            </div>
            <button
              onClick={() => setShowDialog(true)}
              className="lg:w-52 w-auto px-9 py-4 my-5 text-base font-bold transition-colors duration-200 rounded-md block bg-gray-700 hover:bg-gray-800 text-blue-300"
            >
              {t.start}
            </button>
          </div>
          <div className="flex justify-center align-middle relative h-full">
            <Image
              className="animate-up-down"
              src="/maksabi.png"
              alt="intro"
              layout="fill"
              objectFit="contain"
              data-aos="fade-left"
            />
          </div>
        </div>

        <div className="mt-48"></div>
        <div className="text-yellow-500 my-14 text-center text-4xl font-bold" data-aos="fade-up">
          {t["customers-review"]}
        </div>

        <ReviewsSlider />

        <div className="mt-36"></div>
        <div className="text-yellow-500 my-14 text-center text-4xl font-bold" data-aos="fade-up">
          {t.team}
        </div>

        <TeamSlider />
      </main>

      <ContactsDialog isOpen={showDialog} onHide={() => setShowDialog(false)} />
    </div>
  );
}
