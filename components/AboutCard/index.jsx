import React from "react";

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-3xl text-center my-5 lg:my-0">
      {icon}
      <div className="font-bold my-5 text-blue-500 text-2xl">{title}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default AboutCard;
