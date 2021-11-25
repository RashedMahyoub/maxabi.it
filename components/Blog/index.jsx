import { useRouter } from "next/router";
import React from "react";

const Blog = ({ title, titleEn, date, children }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="bg-gray-800 rounded-md p-5">
      <div className="flex justify-between">
        <div className="text-2xl text-blue-500 font-bold mb-4">{locale === "en" ? titleEn : title}</div>
        <div className="text-sm text-gray-500">{date.toLocaleString()}</div>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Blog;
