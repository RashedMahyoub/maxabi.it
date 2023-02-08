import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";
import ContactsDialog from "../ContactsDialog";
import en from "../../locale/en";
import ar from "../../locale/ar";

const Footer = () => {
  const [showButton, setShowButton] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const handleScroll = () => {
    window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //Go to top
  const onclick = () => {
    window.scrollTo(0, 0);
  };

  const year = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <footer className="pt-10 sm:mt-10 p-2 lg:p-0">
      <div className="bg-gray-800 max-w-7xl mx-auto p-3 rounded-2xl mb-2">
        <div className="text-gray-800 flex flex-col md:flex-row flex-wrap justify-left max-w-6xl m-auto">
          {/* Col-1 */}
          <div className="px-2 md:w-1/2">
            <div className="relative h-36 w-60">
              <Image priority src="/Maxabi Logo.png" fill style={{ objectFit: "contain" }} alt="Logo" />
            </div>
            <iframe
              title="Maxabi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.03382681152073!2d39.656462379092545!3d24.432000807888066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95595c0e1d45%3A0xc3c94509fd270d7c!2z2YXZg9iz2KjZig!5e0!3m2!1sen!2ssa!4v1626073548562!5m2!1sen!2ssa"
              width="100%"
              height="140"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Col-2 */}
          <div className="p-5 md:w-1/4">
            {/* Col Title */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">{t.links}</div>

            {/* Links */}
            <Link href="/" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.home}
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.about}
              </div>
            </Link>
            <Link href="/projects" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.projects}
              </div>
            </Link>
            <Link href="/services" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.services}
              </div>
            </Link>
            <Link href="/policy" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.policy}
              </div>
            </Link>
            <Link href="/terms" passHref>
              <div className="my-3 block text-gray-300 hover:text-blue-500 text-sm font-medium duration-700 cursor-pointer">
                {t.terms}
              </div>
            </Link>
          </div>

          {/* Col-2 */}
          <div className="p-5 md:w-1/4">
            {/* Col Title */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">{t.contact}</div>
            <button
              className="px-4 py-2 rounded-sm shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={() => setShowDialog((dialog) => true)}
            >
              {t["contact-us"]}
            </button>

            <hr className="mt-5 border-gray-500" />

            <a href="https://www.dimofinf.net/en" target="_blank" rel="noopener noreferrer">
              <div className="relative h-20 w-36">
                <Image priority src="/dimofinf.png" alt="Logo" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="text-light text-sm">
                <strong>{t["hosting-dimo"]}</strong>
              </p>
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
              border-t border-gray-500 text-gray-400 text-sm 
              flex-col-reverse md:flex-row max-w-6xl"
          >
            <div className="mt-2 text-center">
              {year} © {t.copyright}
            </div>

            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="https://twitter.com/maxabi_it" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter
                  className="w-6 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
                  size={18}
                />
              </a>
              <a href="https://wa.me/966535603895" target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp
                  className="w-6 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
                  size={18}
                />
              </a>
              <a href="https://www.instagram.com/maxabi.it/" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram
                  className="w-6 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showButton ? (
        <div id="back-to-top" className="relative z-10">
          <button
            onClick={onclick}
            className="rounded-full bg-blue-500 p-1 hover:bg-blue-700 transition-all ease-in-out duration-500 fixed bottom-20 right-10"
            title="Back to Top"
            style={{ display: "block" }}
          >
            <BsChevronUp size={24} color="white" />
          </button>
        </div>
      ) : null}

      <ContactsDialog isOpen={showDialog} onHide={() => setShowDialog(false)} />
    </footer>
  );
};

export default Footer;
