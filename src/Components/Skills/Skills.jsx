import { useState } from "react";
import Header from "../Header";
import RCW from "./RCW";
import FEDL from "./FEDL";
import BEDL from "./BEDL";
import ProgLang from "./ProgLang";
import TnT from "./TnT";
import PageWrapper from "../PageWrapper/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Skills = () => {
  const [element, setElement] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper>
      <div className="w-screen h-screen hidden xl:block bg-[#0F0F0F]">
        <Header />
        <div className="font-kodeMono mt-8 grid grid-cols-11 gap-8 mx-36">
          <div className="col-span-5">
            <p className="text-[#64ccc5] text-6xl mb-4 text-center">
              My Skill Set
            </p>
            <p className="text-white text-sm text-center">
              Here are the technologies, tools, and coursework that shape my
              expertise as a developer. From front-end to back-end and
              everything in between, these skills drive my ability to build
              creative and efficient solutions.
            </p>
            <div className="my-8 flex flex-col items-center">
              <div
                onClick={() => setElement(0)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5] text-lg cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Front-end Technologies
              </div>
              <div
                onClick={() => setElement(1)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5] text-lg cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Back-end Technologies
              </div>
              <div
                onClick={() => setElement(2)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5] text-lg cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Programming Languages
              </div>
              <div
                onClick={() => setElement(3)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5] text-lg cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Tools and Technologies
              </div>
              <div
                onClick={() => setElement(4)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5] text-lg cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Relevant Course Work
              </div>
            </div>
          </div>

          <div className="w-[1px] mx-10 bg-gray-500"></div>

          <div className="col-span-5">
            {element === 0 ? (
              <FEDL />
            ) : element === 1 ? (
              <BEDL />
            ) : element === 2 ? (
              <ProgLang />
            ) : element === 3 ? (
              <TnT />
            ) : (
              <RCW />
            )}
          </div>
        </div>
      </div>

      <div className="w-screen h-screen hidden lg:block xl:hidden bg-[#0F0F0F]">
        <Header />
        <div className="font-kodeMono grid grid-cols-11 gap-8 mx-20">
          <div className="col-span-5">
            <p className="text-[#64ccc5] text-4xl mb-3 text-center">
              My Skill Set
            </p>
            <p className="text-white text-xs text-center">
              Here are the technologies, tools, and coursework that shape my
              expertise as a developer. From front-end to back-end and
              everything in between, these skills drive my ability to build
              creative and efficient solutions.
            </p>
            <div className="my-8 flex flex-col items-center">
              <div
                onClick={() => setElement(0)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Front-end Technologies
              </div>
              <div
                onClick={() => setElement(1)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Back-end Technologies
              </div>
              <div
                onClick={() => setElement(2)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Programming Languages
              </div>
              <div
                onClick={() => setElement(3)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Tools and Technologies
              </div>
              <div
                onClick={() => setElement(4)}
                className="w-96 text-center border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
              >
                Relevant Course Work
              </div>
            </div>
          </div>

          <div className="w-[1px] mx-10 bg-gray-500"></div>

          <div className="col-span-5">
            {element === 0 ? (
              <FEDL />
            ) : element === 1 ? (
              <BEDL />
            ) : element === 2 ? (
              <ProgLang />
            ) : element === 3 ? (
              <TnT />
            ) : (
              <RCW />
            )}
          </div>
        </div>
      </div>

      <div className="w-screen h-screen hidden md:block lg:hidden bg-[#0F0F0F]">
        <Header />
        <div className="font-kodeMono  mx-10">
          <div className="col-span-5">
            <p className="text-[#64ccc5] text-6xl mb-3 text-center">
              My Skill Set
            </p>
            <p className="text-white text-lg text-center">
              Here are the technologies, tools, and coursework that shape my
              expertise as a developer. From front-end to back-end and
              everything in between, these skills drive my ability to build
              creative and efficient solutions.
            </p>

            <div className="flex justify-center my-4 ">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#64ccc5] text-4xl hover:text-white border-2 m-2 border-[#64ccc5] p-2"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>

          {open ? (
            <div className="w-dvw h-dvh absolute top-0 left-0 bg-transparent backdrop-blur-md">
              <div className=" w-dvw h-dvh flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 7 }}
                  className="bg-black border-2 border-[#64ccc5] w-4/5 h-2/4 rounded-3xl"
                >
                  <div className="text-right pb-1 pt-3 px-4">
                    <FontAwesomeIcon
                      onClick={() => setOpen(false)}
                      icon={faXmark}
                      className="text-4xl relative text-[#64ccc5]"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="font-extrabold text-4xl underline underline-offset-8 mb-5 text-[#64ccc5]">
                      Explore More
                    </p>
                    <div
                      onClick={() => setElement(0)}
                      className="w-96 text-center text-lg font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
                    >
                      Front-end Technologies
                    </div>
                    <div
                      onClick={() => setElement(1)}
                      className="w-96 text-center text-lg font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
                    >
                      Back-end Technologies
                    </div>
                    <div
                      onClick={() => setElement(2)}
                      className="w-96 text-center text-lg font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
                    >
                      Programming Languages
                    </div>
                    <div
                      onClick={() => setElement(3)}
                      className="w-96 text-center text-lg font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
                    >
                      Tools and Technologies
                    </div>
                    <div
                      onClick={() => setElement(4)}
                      className="w-96 text-center text-lg font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-2 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-4 "
                    >
                      Relevant Course Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : null}

          <div className="w-[1px] mx-10 bg-gray-500"></div>

          <div className="col-span-5">
            {element === 0 ? (
              <FEDL />
            ) : element === 1 ? (
              <BEDL />
            ) : element === 2 ? (
              <ProgLang />
            ) : element === 3 ? (
              <TnT />
            ) : (
              <RCW />
            )}
          </div>
        </div>
      </div>

      <div className="w-screen h-screen block md:hidden bg-[#0F0F0F]">
        <Header />
        <div className="font-kodeMono  mx-4">
          <div className="col-span-5">
            <p className="text-[#64ccc5] text-3xl mb-3 text-center">
              My Skill Set
            </p>
            <p className="text-white text-xs text-center">
              Here are the technologies, tools, and coursework that shape my
              expertise as a developer. From front-end to back-end and
              everything in between, these skills drive my ability to build
              creative and efficient solutions.
            </p>

            <div className="flex justify-center my-2 ">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#64ccc5] text-xl hover:text-white border-2 m-2 border-[#64ccc5] p-2"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>

          {open ? (
            <div className="w-dvw h-dvh absolute top-0 left-0 bg-transparent backdrop-blur-md">
              <div className=" w-dvw h-dvh flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 7 }}
                  className="bg-black border-2 border-[#64ccc5] w-4/5 h-2/4 rounded-3xl"
                >
                  <div className="text-right pb-1 pt-3 px-4">
                    <FontAwesomeIcon
                      onClick={() => setOpen(false)}
                      icon={faXmark}
                      className="text-4xl relative text-[#64ccc5]"
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="font-extrabold text-2xl underline underline-offset-8 mb-5 text-[#64ccc5]">
                      Explore More
                    </p>
                    <div
                      onClick={() => setElement(0)}
                      className="w-72 text-center text-sm font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-1 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-1 "
                    >
                      Front-end Technologies
                    </div>
                    <div
                      onClick={() => setElement(1)}
                      className="w-72 text-center text-sm font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-1 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-1 "
                    >
                      Back-end Technologies
                    </div>
                    <div
                      onClick={() => setElement(2)}
                      className="w-72 text-center text-sm font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-1 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-1  "
                    >
                      Programming Languages
                    </div>
                    <div
                      onClick={() => setElement(3)}
                      className="w-72 text-center text-sm font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-1 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-1  "
                    >
                      Tools and Technologies
                    </div>
                    <div
                      onClick={() => setElement(4)}
                      className="w-72 text-center text-sm font-bold border-2 rounded-2xl border-[#64ccc5] text-[#64ccc5]  cursor-pointer py-1 px-8 hover:text-black hover:font-semibold hover:bg-[#64ccc5] mb-1  "
                    >
                      Relevant Course Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : null}

          <div className="w-[1px] mx-10 bg-gray-500"></div>

          <div className="col-span-5">
            {element === 0 ? (
              <FEDL />
            ) : element === 1 ? (
              <BEDL />
            ) : element === 2 ? (
              <ProgLang />
            ) : element === 3 ? (
              <TnT />
            ) : (
              <RCW />
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
