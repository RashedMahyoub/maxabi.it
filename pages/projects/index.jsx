import React, { useState } from "react";
import { useRouter } from "next/router";
import en from "../../locale/en";
import ar from "../../locale/ar";
import { ProjectCard } from "../../components";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import projects from "../../utils/projects";

const Index = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState({});
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;

  return (
    <main className="mt-40">
      <div className="max-w-7xl mx-auto text-center mt-10 p-5">
        <div className="text-yellow-500 text-5xl font-bold mt-10 uppercase">{t["projects"]}</div>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-5 p-5 mt-10">
        <AnimateSharedLayout type="crossfade">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              layoutId={`${i}`}
              onClick={() => {
                setSelectedId(`${i}`);
                setItem(project);
              }}
            >
              <ProjectCard
                title={locale === "en" ? project.titleEn : project.title}
                icon={<project.icon className="text-white h-10 w-10" />}
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className={`fixed inset-0 z-10 m-auto flex flex-col bg-gray-800 p-5 rounded-lg ${
                  item.small ? "lg:h-60 h-96" : "lg:h-96 h-120"
                } lg:w-150 mx-2 lg:m-auto`}
              >
                <div className="text-right">
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="text-white hover:text-yellow-500 hover:rotate-180 transform transition duration-300"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>
                <motion.div className="flex flex-col lg:flex-row flex-1 mt-2">
                  <motion.div className="mb-5 lg:mb-0 h-36 lg:w-48 flex items-center">
                    <motion.img className="m-auto max-h-full max-w-full" src={item.img} />
                  </motion.div>

                  <motion.div className="flex-1 text-center lg:px-3 flex flex-col m-auto">
                    <motion.h3 className="mt-3 lg:mt-0 text-blue-500 text-2xl font-bold">
                      <strong>{locale === "en" ? item.titleEn : item.title}</strong>
                    </motion.h3>
                    <motion.h5 className="text-white text-md">
                      <strong>{locale === "en" ? item.descriptionEn : item.description}</strong>
                    </motion.h5>
                    <motion.div>
                      {item.android ? (
                        <a href={item.android} target="_blank" rel="noopener noreferrer">
                          <button className="lg:w-52 mx-auto w-auto px-9 py-2 my-5 text-base font-bold transition-colors duration-200 rounded-md block bg-yellow-400 hover:bg-yellow-500 text-black">
                            Google Play
                          </button>
                        </a>
                      ) : null}

                      {item.website ? (
                        <a href={item.website} target="_blank" rel="noopener noreferrer">
                          <button className="lg:w-52 mx-auto w-auto px-9 py-2 my-5 text-base font-bold transition-colors duration-200 rounded-md block bg-blue-400 hover:bg-blue-500 text-white">
                            {" "}
                            Website{" "}
                          </button>
                        </a>
                      ) : null}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </main>
  );
};

export default Index;
