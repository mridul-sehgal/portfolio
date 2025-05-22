import { NavLink } from "react-router-dom";
import logo from "./../resources/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* extra large screen size */}

      <div className="hidden xl:block bg-[#0F0F0F] py-8 px-36">
        <div className="flex justify-between items-center font-kodeMono px-6 py-3 rounded-2xl">
          <div className="w-20 ">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center justify-center gap-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-xl underline underline-offset-8"
                  : " text-white font-medium text-lg hover:text-[#64CCC5]"
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-xl underline underline-offset-8"
                  : " text-white font-medium text-lg hover:text-[#64CCC5]"
              }
            >
              Technical Skills
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-xl underline underline-offset-8"
                  : " text-white font-medium text-lg  hover:text-[#64CCC5]"
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-xl underline underline-offset-8"
                  : " text-white font-medium text-lg  hover:text-[#64CCC5]"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-xl underline underline-offset-8"
                  : " text-white font-medium text-lg  hover:text-[#64CCC5]"
              }
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>

      {/* large screen size */}

      <div className="hidden lg:block xl:hidden bg-[#0F0F0F] py-8 px-24">
        <div className="flex justify-between items-center font-kodeMono px-6 py-3 rounded-2xl">
          <div className="w-16 ">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center justify-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-base underline underline-offset-8"
                  : " text-white font-medium text-base hover:text-[#64CCC5]"
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-base underline underline-offset-8"
                  : " text-white font-medium text-base hover:text-[#64CCC5]"
              }
            >
              Technical Skills
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-base underline underline-offset-8"
                  : " text-white font-medium text-base hover:text-[#64CCC5]"
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-base underline underline-offset-8"
                  : " text-white font-medium text-base hover:text-[#64CCC5]"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-base underline underline-offset-8"
                  : " text-white font-medium text-base hover:text-[#64CCC5]"
              }
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>

      {/* medium size screen */}

      <div className="hidden md:block lg:hidden xl:hidden bg-[#0F0F0F] py-8 px-12">
        <div className="flex justify-between items-center font-kodeMono px-6 py-3 rounded-2xl">
          <div className="w-12 ">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center justify-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-sm underline underline-offset-8"
                  : " text-white font-medium text-sm hover:text-[#64CCC5]"
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-sm underline underline-offset-8"
                  : " text-white font-medium text-sm hover:text-[#64CCC5]"
              }
            >
              Technical Skills
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-sm underline underline-offset-8"
                  : " text-white font-medium text-sm hover:text-[#64CCC5]"
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-sm underline underline-offset-8"
                  : " text-white font-medium text-sm hover:text-[#64CCC5]"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#64CCC5] font-medium text-sm underline underline-offset-8"
                  : " text-white font-medium text-sm hover:text-[#64CCC5]"
              }
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>

      {/* small sreen size */}
      <div className=" md:hidden lg:hidden xl:hidden bg-[#0F0F0F] py-3 px-1">
        <div className="flex justify-between items-center font-kodeMono px-6 py-3 rounded-2xl">
          <div className="w-12 ">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#64ccc5] text-2xl hover:text-white"
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

                <div className="text-right py-2 px-3">
                  <FontAwesomeIcon
                  onClick={() => setOpen(false)}
                  icon={faXmark}
                  className="text-3xl relative text-[#64ccc5]"
                />
                </div>
                
                <div className="flex flex-col justify-center items-center gap-5">
                  <p className="font-extrabold text-3xl text-[#64ccc5] underline underline-offset-8">
                    Explore More
                  </p>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold text-2xl text-[#64ccc5] underline underline-offset-8"
                        : " text-[#64ccc5] font-semibold text-2xl"
                    }
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold text-2xl text-[#64ccc5] underline underline-offset-8"
                        : " text-[#64ccc5] font-semibold text-2xl"
                    }
                  >
                    Technical Skills
                  </NavLink>
                  <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold text-2xl text-[#64ccc5] underline underline-offset-8"
                        : " text-[#64ccc5] font-semibold text-2xl"
                    }
                  >
                    Experience
                  </NavLink>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold text-2xl text-[#64ccc5] underline underline-offset-8"
                        : " text-[#64ccc5] font-semibold text-2xl"
                    }
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold text-2xl text-[#64ccc5] underline underline-offset-8"
                        : " text-[#64ccc5] font-semibold text-2xl"
                    }
                  >
                    Contact Me
                  </NavLink>
                </div>
              </motion.div>
            </div>
          </div>
        ) : null}
      </div>
      
    </>
  );
}

export default Header;
