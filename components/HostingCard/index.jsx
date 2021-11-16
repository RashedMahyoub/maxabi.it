import { useRouter } from "next/router";
import React from "react";
import ar from "../../locale/ar";
import en from "../../locale/en";

const HostingCard = ({ plan, onClick, line, type }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <div
      className={`text-center my-5 lg:my-0 
      ${line ? "lg:border-r lg:border-b-0 lg:pr-5 border-b border-gray-600" : ""}
      ${type === 5 ? "border-t border-gray-600 lg:border-r" : ""}
      `}
    >
      <div className="rounded-t-md p-3">
        <div className="rounded-full mx-auto bg-white h-10 w-10 flex justify-center items-center">
          <plan.icon className="text-gray-900" />
        </div>
        <div className="font-bold text-white mt-3 text-2xl flex-1">{locale === "en" ? plan.titleEn : plan.title}</div>
      </div>

      {
        {
          1: (
            <div className="p-3 text-gray-400">
              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ram}</div>
                <div className="text-primary">{plan.ram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.cpu}</div>
                <div className="text-primary">{plan.cpu}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.domain}</div>
                <div className="text-primary">{plan.domain}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.vram}</div>
                <div className="text-primary">{plan.vram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.space}</div>
                <div className="text-primary">{plan.space}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.email}</div>
                <div className="text-primary">{plan.eMail}</div>
              </div>
            </div>
          ),
          2: (
            <div className="p-3 text-gray-500">
              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t["email-acc"]}</div>
                <div className="text-primary">{plan.email}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.addon}</div>
                <div className="text-primary">{plan.addon}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.spaces}</div>
                <div className="text-primary">{plan.space}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.mssql}</div>
                <div className="text-primary">{plan.sql}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.memory}</div>
                <div className="text-primary">{plan.memory}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.subdomains}</div>
                <div className="text-primary">{plan.subdomain}</div>
              </div>
            </div>
          ),
          3: (
            <div className="p-3 text-gray-400">
              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ram}</div>
                <div className="text-primary">{plan.ram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.cpu}</div>
                <div className="text-primary">{plan.cpu}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.traffic}</div>
                <div className="text-primary">{plan.traffic}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.space}</div>
                <div className="text-primary">{plan.space}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.domain}</div>
                <div className="text-primary">{plan.domain}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.email}</div>
                <div className="text-primary">{plan.eMail}</div>
              </div>
            </div>
          ),
          4: (
            <div className="p-3 text-gray-400">
              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.processor}</div>
                <div className="text-primary">{plan.processor}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ram}</div>
                <div className="text-primary">{plan.ram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.hdd}</div>
                <div className="text-primary">{plan.hdd}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.uplink}</div>
                <div className="text-primary">{plan.uplink}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.traffic}</div>
                <div className="text-primary">{plan.traffic}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ip}</div>
                <div className="text-primary">{plan.ips}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.management}</div>
                <div className="text-primary">{plan.management}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div className="text-primary">{plan.software}</div>
              </div>
            </div>
          ),
          5: (
            <div className="p-3 text-gray-400">
              <div className="text-yellow-500 font-bold text-center mb-3 text-3xl">{plan.title}</div>

              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.cpu}</div>
                <div className="text-primary">{plan.cpu}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ram}</div>
                <div className="text-primary">{plan.ram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.traffic}</div>
                <div className="text-primary">{plan.traffic}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.storage}</div>
                <div className="text-primary">{plan.storage}</div>
              </div>
            </div>
          ),
          6: (
            <div className="p-3 text-gray-400">
              <div className="text-yellow-500 font-bold text-center mb-3 text-3xl">{plan.title}</div>

              <div className="text-white font-bold text-left mb-1 text-3xl">
                {plan.price} <span className="text-xs">{t.monthly}</span>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.cpu}</div>
                <div className="text-primary">{plan.cpu}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.ram}</div>
                <div className="text-primary">{plan.ram}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.traffic}</div>
                <div className="text-primary">{plan.traffic}</div>
              </div>

              <div className="flex justify-between pt-1 border-t border-dashed border-gray-600 mb-2">
                <div>{t.hdd}</div>
                <div className="text-primary">{plan.hdd}</div>
              </div>
            </div>
          ),
        }[type]
      }

      <button
        className="p-3 w-full transition duration-300 text-center font-bold text-white hover:bg-blue-500"
        onClick={onClick}
      >
        {t.order}
      </button>
    </div>
  );
};

export default HostingCard;
