import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { solutions } from "../../utils/links";
import en from "../../locale/en";
import ar from "../../locale/ar";
import ContactsDialog from "../ContactsDialog";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [state, setState] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  const handleScroll = () => {
    window.scrollY > 20 ? setState("bg-gray-800 rounded-lg mt-1") : setState("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Change language
  const changeLanguage = () => {
    const loc = locale === "en" ? "ar" : "en";
    router.replace(router.pathname, router.asPath, { locale: loc });
  };

  return (
    <Popover className="relative">
      <div className="fixed top-0 w-full z-20">
        <div className={`max-w-7xl lg:mx-auto px-4 mx-1 sm:px-6 transition ease-in-out duration-300 ${state}`}>
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex-1 flex items-center lg:justify-start justify-between">
              <div className={`flex justify-start ${locale === "en" ? "mr-8" : "ml-8"}`}>
                <Link href="/" passHref>
                  <div>
                    <span className="sr-only">{t.website}</span>
                    <div className="relative h-12 w-16 sm:h-16 cursor-pointer">
                      <Image priority src="/Logo.png" layout="fill" objectFit="contain" alt="Logo" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-yellow-500" : "text-white",
                          locale === "ar" ? "mx-4" : "",
                          "group rounded-md inline-flex items-center text-base font-bold hover:text-yellow-500"
                        )}
                      >
                        <span>{t.services}</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-yellow-500" : "text-white",
                            "ml-2 h-5 w-5 group-hover:text-yellow-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 h-96 overflow-y-auto">
                              {solutions.map((item) => (
                                <Link key={item.name} href={item.href} passHref>
                                  <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer">
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <div className="mx-4">
                                      <p className="text-base font-bold text-gray-900">
                                        {locale === "en" ? item.name : item.nameAr}
                                      </p>
                                      <p className="mt-1 text-xs text-gray-500">
                                        {locale === "en" ? item.description : item.descriptionAr}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              <div className="flow-root">
                                <div
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => setShowDialog(true)}
                                >
                                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{t["contact-us"]}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href="/about" passHref>
                  <div className="text-base cursor-pointer font-bold text-white hover:text-yellow-500">{t.about}</div>
                </Link>
                <Link href="/projects" passHref>
                  <div className="text-base cursor-pointer font-bold text-white hover:text-yellow-500">
                    {t.projects}
                  </div>
                </Link>
                <Link href="/blog" passHref>
                  <div className="text-base cursor-pointer font-bold text-white hover:text-yellow-500">{t.blog}</div>
                </Link>
              </Popover.Group>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                className={classNames(
                  locale === "en" ? "ml-8 " : "mr-8",
                  "px-4 py-2 rounded-sm shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
                )}
                onClick={changeLanguage}
              >
                {locale === "ar" ? "English" : "العربية"}
              </button>
            </div>
          </div>
        </div>

        {/* Small Screen Nav */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-end">
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link passHref key={item.name} href={item.href}>
                        <div className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                          <span className="mx-3 text-base font-bold text-gray-900">
                            {locale === "en" ? item.name : item.nameAr}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-3 gap-y-4 gap-x-3">
                  <Link href="/about" passHref>
                    <div className="text-sm cursor-pointer font-bold p-1 text-center text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                      {t.about}
                    </div>
                  </Link>
                  <Link href="/projects" passHref>
                    <div className="text-sm cursor-pointer font-bold p-1 text-center text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                      {t.projects}
                    </div>
                  </Link>
                  <Link href="/blog" passHref>
                    <div className="text-sm cursor-pointer font-bold p-1 text-center text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                      {t.blog}
                    </div>
                  </Link>
                </div>
                <button
                  style={{ width: "100%" }}
                  className="px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
                  onClick={changeLanguage}
                >
                  {locale === "ar" ? "English" : "العربية"}
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
        {/* Small Screen Nav */}
      </div>

      <ContactsDialog isOpen={showDialog} onHide={() => setShowDialog(false)} />
    </Popover>
  );
};

export default NavBar;
