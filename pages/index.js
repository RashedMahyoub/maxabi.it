import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ar from "../locale/ar";
import en from "../locale/en";
import { ReviewsSlider, ContactsDialog, TeamSlider } from "../components";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div>
      <main className="mt-32">
        <div className="max-w-7xl lg:h-96 mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
          <div
            className={`col-span-2 flex flex-col justify-center text-center ${
              locale === "en" ? "lg:mr-10 lg:text-left" : "lg:ml-10 lg:text-right"
            }`}
          >
            <div className="text-5xl font-bold text-yellow-400 my-5" data-aos="fade-right">
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
              fill
              style={{ objectFit: "contain" }}
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
