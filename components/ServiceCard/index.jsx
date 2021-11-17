import React from "react";
import Link from "next/link";

const ServiceCard = ({ href, icon, title, description }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <div
          className="p-4 bg-gray-800 rounded-xl
        my-5 lg:my-0 cursor-pointer
        hover:shadow-lg transform transition duration-300 hover:scale-110"
        >
          <div className="rounded-full bg-gray-400 bg-opacity-25 h-16 w-16 relative m-3">{icon}</div>
          <div className="font-bold my-7 text-blue-500 text-2xl">{title}</div>
          <p className="text-gray-400">{description}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className="p-4 bg-gray-800 rounded-xl my-5 lg:my-0
        hover:shadow-lg transform transition duration-300 hover:scale-110"
      >
        <div className="rounded-full bg-gray-400 bg-opacity-25 h-16 w-16 relative m-3">{icon}</div>
        <div className="font-bold my-7 text-blue-500 text-2xl">{title}</div>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  }
};

export default ServiceCard;
