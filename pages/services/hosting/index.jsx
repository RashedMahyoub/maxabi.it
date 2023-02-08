import React from "react";
import { useRouter } from "next/router";
import en from "../../../locale/en";
import ar from "../../../locale/ar";
import { shared, dedicated, cloud, vps } from "../../../utils/hosting";
import { Tab } from "@headlessui/react";
import { HostingCard } from "../../../components";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-10 p-5">
        <div className="col-span-2">
          <div
            className={`text-yellow-500 text-2xl font-bold uppercase ${locale === "en" ? "tracking-widest" : ""}`}
            data-aos="fade-right"
          >
            {t["hosting-title"]}
          </div>
          <div className="text-white text-xl font-bold mt-10" data-aos="fade-right">
            {t["hosting-intro"]}
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <Image src="/undraw_server_cluster_jwwq.svg" alt="services" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-2xl font-bold mt-10">{t["hosting-plan-title"]}</div>
      </div>

      {/* Shared Hosting */}
      <div className="max-w-7xl mx-auto p-5 mt-28 lg:mt-40">
        <div className="text-white text-md my-5 font-bold" data-aos="fade-right">
          {t["shared-hosting-intro"]}
        </div>
        <div className="text-yellow-400 text-3xl font-bold my-5" data-aos="fade-right">
          {t["shared-hosting-title"]}
        </div>
        <div className="text-white text-md my-5 font-bold mb-10" data-aos="fade-right">
          {t["shared-hosting-description"]}
        </div>

        <div className="sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-gray-900 bg-opacity-25 rounded-xl">
              {shared.map((host) => (
                <Tab
                  key={host.titleEn}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-bold text-blue-400 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected ? "bg-gray-800 shadow" : "text-blue-100 hover:text-white"
                    )
                  }
                >
                  {locale === "en" ? host.titleEn : host.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {shared.map((host, idx) => (
                <Tab.Panel key={idx}>
                  <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-gray-900 bg-opacity-25 rounded-xl">
                      {host.plans.map((plan) => (
                        <Tab
                          key={plan.title}
                          className={({ selected }) =>
                            classNames(
                              "w-full py-2.5 text-sm leading-5 font-bold text-blue-400 rounded-lg",
                              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                              selected ? "bg-gray-800 shadow" : "text-blue-100 hover:text-white"
                            )
                          }
                        >
                          {locale === "en" ? plan.titleEn : plan.title}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                      {host.plans.map((p, idx) => {
                        if (p.plans) {
                          return (
                            <Tab.Panel key={idx}>
                              <Tab.Group>
                                <Tab.List className="flex p-1 space-x-1 bg-gray-900 bg-opacity-25 rounded-xl">
                                  {p.plans.map((plan) => (
                                    <Tab
                                      key={plan.title}
                                      className={({ selected }) =>
                                        classNames(
                                          "w-full py-2.5 text-sm leading-5 font-bold text-blue-400 rounded-lg",
                                          "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                          selected ? "bg-gray-800 shadow" : "text-blue-100 hover:text-white"
                                        )
                                      }
                                    >
                                      {locale === "en" ? plan.titleEn : plan.title}
                                    </Tab>
                                  ))}
                                </Tab.List>
                                <Tab.Panels className="mt-2">
                                  {p.plans.map((p, idx) => (
                                    <Tab.Panel key={idx} className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
                                      {p.sale && (
                                        <div className="my-5 text-yellow-400 text-xl font-bold text-center">
                                          {p.sale}
                                        </div>
                                      )}
                                      <div className="md:grid md:grid-cols-4 md:gap-3">
                                        {p.packages.map((pack, i) => (
                                          <HostingCard
                                            type={p.type}
                                            line={i !== p.packages.length - 1}
                                            key={pack.nameEn}
                                            plan={pack}
                                            onClick={() => window.open(p.url, "_blank")}
                                          />
                                        ))}
                                      </div>
                                    </Tab.Panel>
                                  ))}
                                </Tab.Panels>
                              </Tab.Group>
                            </Tab.Panel>
                          );
                        } else {
                          return (
                            <Tab.Panel key={idx} className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
                              {p.sale && (
                                <div className="my-5 text-yellow-400 text-xl font-bold text-center">{p.sale}</div>
                              )}
                              <div className="md:grid md:grid-cols-4 md:gap-3">
                                {p.packages.map((pack, i) => (
                                  <HostingCard
                                    type={p.type}
                                    line={i !== p.packages.length - 1}
                                    key={pack.nameEn}
                                    plan={pack}
                                    onClick={() => window.open(p.url, "_blank")}
                                  />
                                ))}
                              </div>
                            </Tab.Panel>
                          );
                        }
                      })}
                    </Tab.Panels>
                  </Tab.Group>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      {/* Shared Hosting */}

      {/* Dedicated Hosting */}
      <div className="max-w-7xl mx-auto p-5 mt-28 lg:mt-40">
        <div className="text-white text-md font-bold" data-aos="fade-right">
          {t["dedicated-servers-intro"]}
        </div>
        <div className="text-yellow-400 text-3xl font-bold my-5" data-aos="fade-right">
          {t["dedicated-servers-title"]}
        </div>
        <div className="text-white text-md font-bold mb-10" data-aos="fade-right">
          {t["dedicated-servers-description"]}
        </div>

        <div className="text-red-500 text-center text-2xl my-16 font-bold" data-aos="fade-up">
          {t["dedicated-servers-single"]}
        </div>

        <div className="sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-gray-900 bg-opacity-25 rounded-xl">
              {dedicated[0].plans.map((host) => (
                <Tab
                  key={host.titleEn}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-bold text-blue-400 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected ? "bg-gray-800 shadow" : "text-blue-100 hover:text-white"
                    )
                  }
                >
                  {locale === "en" ? host.titleEn : host.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {dedicated[0].plans.map((p, idx) => (
                <Tab.Panel key={idx} className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
                  <div className="md:grid md:grid-cols-2 md:gap-3">
                    {p.packages.map((pack, i) => (
                      <HostingCard
                        type={p.type}
                        line={i !== p.packages.length - 1}
                        key={pack.title}
                        plan={pack}
                        onClick={() => window.open(p.url, "_blank")}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="text-red-500 text-center text-2xl my-16 font-bold" data-aos="fade-up">
          {t["dedicated-servers-dual"]}
        </div>

        <div className="sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-gray-900 bg-opacity-25 rounded-xl">
              {dedicated[1].plans.map((host) => (
                <Tab
                  key={host.titleEn}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-bold text-blue-400 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected ? "bg-gray-800 shadow" : "text-blue-100 hover:text-white"
                    )
                  }
                >
                  {locale === "en" ? host.titleEn : host.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {dedicated[1].plans.map((p, idx) => (
                <Tab.Panel key={idx} className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
                  <div className="md:grid md:grid-cols-2 md:gap-3">
                    {p.packages.map((pack, i) => (
                      <HostingCard
                        type={p.type}
                        line={i !== p.packages.length - 1}
                        key={pack.title}
                        plan={pack}
                        onClick={() => window.open(p.url, "_blank")}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      {/* Dedicated Hosting */}

      {/* Cloud Hosting */}
      <div className="max-w-7xl mx-auto p-5 mt-28 lg:mt-40">
        <div className="text-white text-md font-bold" data-aos="fade-right">
          {t["cloud-servers-intro"]}
        </div>
        <div className="text-yellow-400 text-3xl font-bold my-5" data-aos="fade-right">
          {t["cloud-servers-title"]}
        </div>
        <div className="text-white text-md font-bold mb-10" data-aos="fade-right">
          {t["cloud-servers-description"]}
        </div>

        <div className="sm:px-0">
          <div className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
            <div className="md:grid md:grid-cols-3 md:gap-3">
              {cloud.map((p, i) => (
                <HostingCard
                  type={5}
                  line={i !== cloud.length - 1}
                  key={i}
                  plan={p}
                  onClick={() => window.open(p.url, "_blank")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Cloud Hosting */}

      {/* VPS Hosting */}
      <div className="max-w-7xl mx-auto p-5 mt-28 lg:mt-40">
        <div className="text-white text-md font-bold" data-aos="fade-right">
          {t["vps-intro"]}
        </div>
        <div className="text-yellow-400 text-3xl font-bold my-5" data-aos="fade-right">
          {t["vps-title"]}
        </div>
        <div className="text-white text-md font-bold mb-10" data-aos="fade-right">
          {t["vps-description"]}
        </div>

        <div className="sm:px-0">
          <div className="bg-gray-800 rounded-xl p-3" data-aos="fade-up">
            <div className="md:grid md:grid-cols-3 md:gap-3">
              {vps.map((p, i) => (
                <HostingCard
                  type={6}
                  line={i !== vps.length - 1}
                  key={i}
                  plan={p}
                  onClick={() => window.open(p.url, "_blank")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* VPS Hosting */}
    </main>
  );
};

export default Index;
