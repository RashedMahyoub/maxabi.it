import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Review = ({ name, message, onPrev, onNext, hasPrev, hasNext }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="p-4 bg-gray-800 rounded-xl lg:w-150  mx-3 lg:mx-0">
      {locale === "en" ? (
        <FaQuoteRight className="float-right" color="silver" size={20} />
      ) : (
        <FaQuoteLeft className="float-left" color="silver" size={20} />
      )}

      <div className="font-bold my-3 text-blue-500 text-xl">{name}</div>

      <p className="text-white">{message}</p>

      <div className={`flex mt-3 ${locale === "en" ? "justify-end" : "justify-start"}`}>
        {hasPrev && (
          <BsChevronLeft className="text-white hover:text-yellow-500 cursor-pointer" size={20} onClick={onPrev} />
        )}
        {hasNext && (
          <BsChevronRight className="text-white hover:text-yellow-500 cursor-pointer" size={20} onClick={onNext} />
        )}
      </div>
    </div>
  );
};

export default Review;
