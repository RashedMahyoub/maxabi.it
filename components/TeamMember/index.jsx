import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

const TeamMember = ({ name, message, image, job, onPrev, onNext, hasPrev, hasNext }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="p-4 bg-gray-800 rounded-xl" style={{ width: 600 }}>
      <div className="w-24 h-24 relative mx-auto">
        <Image className="rounded-full" src={image} alt={name} layout="fill" objectFit="cover" />
      </div>

      <div className="font-bold my-3 text-blue-500 text-xl text-center">{name}</div>

      <p className="text-gray-400 text-sm font-bold text-center mb-3">{job}</p>

      <p className="text-white text-center">{message}</p>

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

export default TeamMember;
