import React from "react";

const MarketingPackage = ({ title, description, price }) => {
  return (
    <div
      className="p-4 bg-gray-800 rounded-3xl my-5 lg:my-0 
    hover:shadow-lg transform transition duration-300 hover:scale-110 text-center flex flex-col justify-center"
    >
      <div className="font-bold my-3 text-yellow-400 text-3xl">{title}</div>
      <div className="text-gray-400 my-10 text-2xl font-bold">{description}</div>
      <div className="text-red-400 mt-10 text-3xl font-bold">{price}</div>
    </div>
  );
};

export default MarketingPackage;
