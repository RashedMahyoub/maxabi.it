import React from "react";

const MarketingCard = ({ icon, text, small }) => {
  return (
    <div
      className="p-4 bg-gray-800 rounded-xl my-5 lg:my-0 
    hover:shadow-lg transform transition duration-300 hover:scale-110 grid grid-cols-6 gap-10"
    >
      <div className="rounded-full bg-gray-400 bg-opacity-25 h-16 w-16 flex justify-center items-center">{icon}</div>
      <div className={`text-gray-400 px-5 col-span-5 flex items-center ${small ? "text-md" : "text-lg"} font-bold`}>
        {text}
      </div>
    </div>
  );
};

export default MarketingCard;
