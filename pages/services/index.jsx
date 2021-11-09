import React from "react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return <div></div>;
};

export default Index;
