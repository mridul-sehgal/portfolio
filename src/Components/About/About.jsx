import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import Header from "../Header";
import Myself from "./Myself";
import Myskills from "./Myskills";
import MyExp from "./MyExp";
import MyProjects from "./MyProjects";
import MyEducation from "./MyEducation";
import MyExtras from "./MyExtras";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  const [element, setElement] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper>
      {/* extra large screen view */}
      <div className="w-screen h-screen hidden xl:block bg-[#0F0F0F] font-kodeMono">
        <Header />
        <div className="text-center text-5xl font-semibold text-[#64ccc5] ">
          ABOUT ME
        </div>
        <div className="grid grid-cols-10 m-10 gap-10 ">
          <div className="col-span-2 text-[#64ccc5] border-2 border-[#64ccc5] text-2xl text-center rounded-3xl">
            <div
              onClick={() => setElement(0)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold rounded-t-3xl"
            >
              Myself
            </div>
            <div
              onClick={() => setElement(1)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Skills
            </div>
            <div
              onClick={() => setElement(2)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Experience
            </div>
            <div
              onClick={() => setElement(3)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Projects
            </div>
            <div
              onClick={() => setElement(4)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Education
            </div>
            <div
              onClick={() => setElement(5)}
              className="py-6 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold rounded-b-3xl"
            >
              Extras
            </div>
          </div>

          <div className="col-span-8 border-2 border-[#64ccc5] text-center rounded-3xl">
            {element === 0 ? (
              <Myself />
            ) : element === 1 ? (
              <Myskills />
            ) : element === 2 ? (
              <MyExp />
            ) : element === 3 ? (
              <MyProjects />
            ) : element === 4 ? (
              <MyEducation />
            ) : (
              <MyExtras />
            )}
          </div>
        </div>
      </div>

      {/* large screen view */}
      <div className="w-screen h-screen hidden lg:block xl:hidden bg-[#0F0F0F] font-kodeMono">
        <Header />
        <div className="text-center text-3xl font-semibold text-[#64ccc5] ">
          ABOUT ME
        </div>
        <div className="grid grid-cols-10 m-3 gap-5 ">
          <div className="col-span-2 text-[#64ccc5] border-2 border-[#64ccc5] text-xl text-center rounded-xl">
            <div
              onClick={() => setElement(0)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold rounded-t-xl"
            >
              Myself
            </div>
            <div
              onClick={() => setElement(1)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Skills
            </div>
            <div
              onClick={() => setElement(2)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Experience
            </div>
            <div
              onClick={() => setElement(3)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Projects
            </div>
            <div
              onClick={() => setElement(4)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold"
            >
              Education
            </div>
            <div
              onClick={() => setElement(5)}
              className="py-5 cursor-pointer hover:bg-[#64ccc5] hover:text-black hover:font-semibold rounded-b-xl"
            >
              Extras
            </div>
          </div>

          <div className="col-span-8 border-2 border-[#64ccc5] text-center rounded-xl">
            {element === 0 ? (
              <Myself />
            ) : element === 1 ? (
              <Myskills />
            ) : element === 2 ? (
              <MyExp />
            ) : element === 3 ? (
              <MyProjects />
            ) : element === 4 ? (
              <MyEducation />
            ) : (
              <MyExtras />
            )}
          </div>
        </div>
      </div>

      {/* medium screen view */}
      <div className="w-screen h-screen hidden md:block lg:hidden xl:hidden bg-[#0F0F0F] font-kodeMono ">
        <Header />
        <div className="text-center text-5xl font-semibold text-[#64ccc5] ">
          ABOUT ME
        </div>
        <div className=" m-3 ">
          <div className="flex justify-center my-4 ">
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#64ccc5] text-3xl hover:text-white border-2 m-2 border-[#64ccc5] p-2"
              onClick={() => setOpen(true)}
            />
          </div>

          <div className=" mx-4 border-2 border-[#64ccc5] text-center rounded-xl">
            {element === 0 ? (
              <Myself />
            ) : element === 1 ? (
              <Myskills />
            ) : element === 2 ? (
              <MyExp />
            ) : element === 3 ? (
              <MyProjects />
            ) : element === 4 ? (
              <MyEducation />
            ) : (
              <MyExtras />
            )}
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

                <div className="flex flex-col justify-center items-center gap-5">
                  <p className="font-extrabold text-4xl underline underline-offset-8 text-[#64ccc5]">
                    Explore More
                  </p>
                  <div
                    onClick={() => setElement(0)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Myself
                  </div>
                  <div
                    onClick={() => setElement(1)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Skills
                  </div>
                  <div
                    onClick={() => setElement(2)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Experience
                  </div>
                  <div
                    onClick={() => setElement(3)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Projects
                  </div>
                  <div
                    onClick={() => setElement(4)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Education
                  </div>
                  <div
                    onClick={() => setElement(5)}
                    className="font-extrabold text-4xl my-1 text-[#64ccc5]"
                  >
                    Extras
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </div>

      {/* small screen view */}
      <div className="w-screen h-screen block md:hidden bg-[#0F0F0F] font-kodeMono ">
        <Header />
        <div className="text-center text-5xl font-semibold text-[#64ccc5] ">
          ABOUT ME
        </div>
        <div className=" m-3 ">
          <div className="flex justify-center my-4 ">
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#64ccc5] text-3xl hover:text-white border-2 m-2 border-[#64ccc5] p-4"
              onClick={() => setOpen(true)}
            />
          </div>

          <div className=" mx-4 border-2 border-[#64ccc5] text-center rounded-xl p-2">
            {element === 0 ? (
              <Myself />
            ) : element === 1 ? (
              <Myskills />
            ) : element === 2 ? (
              <MyExp />
            ) : element === 3 ? (
              <MyProjects />
            ) : element === 4 ? (
              <MyEducation />
            ) : (
              <MyExtras />
            )}
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

                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="font-extrabold text-xl underline underline-offset-8 text-[#64ccc5]">
                    Explore More
                  </p>
                  <div
                    onClick={() => setElement(0)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Myself
                  </div>
                  <div
                    onClick={() => setElement(1)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Skills
                  </div>
                  <div
                    onClick={() => setElement(2)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Experience
                  </div>
                  <div
                    onClick={() => setElement(3)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Projects
                  </div>
                  <div
                    onClick={() => setElement(4)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Education
                  </div>
                  <div
                    onClick={() => setElement(5)}
                    className="font-extrabold text-xl my-1 text-[#64ccc5]"
                  >
                    Extras
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </div>
    </PageWrapper>
  );
};

export default About;
