import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { reviews } from "../../utils/links";
import Review from "../Review";

const ReviewsSlider = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [current, setCurrent] = useState(reviews[0]);
  const router = useRouter();
  const { locale } = router;

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const _handlePrev = async (i) => {
    setIsShowing((prev) => false);
    setCurrent(reviews[i - 1]);
    await delay(500);
    setIsShowing((prev) => true);
  };

  const _handleNext = async (i) => {
    setIsShowing((prev) => false);
    setCurrent(reviews[i + 1]);
    await delay(500);
    setIsShowing((prev) => true);
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center align-middle h-72" data-aos="fade-up">
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Review
          name={locale === "en" ? current.nameEn : current.name}
          message={locale === "en" ? current.messageEn : current.message}
          onPrev={() => _handlePrev(current.id)}
          onNext={() => _handleNext(current.id)}
          hasNext={current.id < reviews.length - 1}
          hasPrev={current.id > 0}
        />
      </Transition>
    </div>
  );
};

export default ReviewsSlider;
