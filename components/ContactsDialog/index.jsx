import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const ContactsDialog = ({ isOpen, onHide }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onHide}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 flex justify-between">
                <strong>{t["contact-us"]}</strong>
                <AiFillCloseCircle
                  className="w-6 mx-1 cursor-pointer transition-all ease-in-out duration-500 hover:text-yellow-500"
                  size={20}
                  onClick={onHide}
                />
              </Dialog.Title>
              <div className="mt-5">
                <div className="flex my-2">
                  <HiLocationMarker size={20} />
                  <div className="text-sm flex-1 mx-2">{t["maxabi-loc"]}</div>
                </div>
                <div className="flex my-2">
                  <HiPhone size={20} />
                  <div className="text-sm flex-1 mx-2">+966535603895</div>
                </div>
                <div className="flex my-2">
                  <HiMail size={20} />
                  <div className="text-sm flex-1 mx-2">maxabi.it@gmail.com</div>
                </div>
              </div>

              <form
                className="grid grid-cols-1 gap-6 mt-5"
                action="https://formspree.io/f/xdoylkgk"
                method="post"
                dir={locale === "en" ? "ltr" : "rtl"}
              >
                <label className="block">
                  <span className="text-gray-700">{t.emails}</span>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-sm bg-gray-100 border-transparent  focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder={t.emails}
                    name="_replyto"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">{t["enter-message"]}</span>
                  <textarea
                    rows="5"
                    className="mt-1 block w-full rounded-sm bg-gray-100 border-transparent  focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder={t["enter-message"]}
                    name="message"
                    required
                  />
                </label>
                <div className="mt-1">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    {t.send}
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactsDialog;
