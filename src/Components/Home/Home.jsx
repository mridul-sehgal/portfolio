import Header from "../Header";
import PageWrapper from "../PageWrapper/PageWrapper";
import hero from "../../resources/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      " a Developer",
      " a Programmer",
      " a Designer",
      " an Engineer",
      " a Gamer",
    ],
    loop: true,
  });

  return (
    <PageWrapper>
      {/* extra large screen display xl */}
      <div className="hidden xl:block xl:w-screen xl:h-screen xl:bg-[#0F0F0F]">
        <Header />
        <div className="grid grid-cols-2 text-start">
          <div className="col-span-1 ml-52 mt-28">
            <p className="text-white text-3xl mb-4">
              Just
              <span className="text-[#64CCC5] font-kodeMono">
                {text}
                <Cursor />
              </span>
            </p>
            <p className="text-white font-kodeMono text-6xl">Hello I am</p>
            <p className="text-[#64CCC5] font-kodeMono text-6xl">
              Mridul Sehgal
            </p>
            <p className="font-kodeMono text-white mt-6">
              {`Hi! Welcome to my place, well I am just a developer, programmer, 
            and designer with a passion for crafting innovative solutions. As an engineer, 
            I thrive on solving challenges, and in my downtime, I enjoy gaming for fun and inspiration..`}
            </p>

            <div className="flex items-center justify-start mt-6 gap-8">
              <button className="hover:bg-[#64ccc5] hover:text-black text-[#64ccc5] text-xl py-2 px-4 font-semibold rounded-xl border-2 border-[#64ccc5]">
                <a
                  href="\Resume_Mridul_Sehgal.pdf"
                  download="Resume_Mridul_Sehgal.pdf"
                >
                  Download Resume
                </a>
              </button>
              <button>
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <div className="w-3/4 ml-20">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* large screen display */}
      <div className="hidden lg:block xl:hidden lg:w-screen lg:h-screen bg-[#0F0F0F]">
        <Header />
        <div className="grid grid-cols-2 text-start">
          <div className="col-span-1 ml-36 mt-14">
            <p className="text-white text-2xl mb-3">
              Just
              <span className="text-[#64CCC5] font-kodeMono">
                {text}
                <Cursor />
              </span>
            </p>
            <p className="text-white font-kodeMono text-4xl">Hello I am</p>
            <p className="text-[#64CCC5] font-kodeMono text-4xl">
              Mridul Sehgal
            </p>
            <p className="font-kodeMono text-white text-sm mt-4">
              {`Hi! Welcome to my place, well I am just a developer, programmer, 
            and designer with a passion for crafting innovative solutions. As an engineer, 
            I thrive on solving challenges, and in my downtime, I enjoy gaming for fun and inspiration..`}
            </p>

            <div className="flex items-center justify-start mt-6 gap-8">
              <button className="hover:bg-[#64ccc5] hover:text-black text-[#64ccc5] py-2 px-3 font-semibold rounded-xl border-2 border-[#64ccc5]">
                <a
                  href="\Resume_Mridul_Sehgal.pdf"
                  download="Resume_Mridul_Sehgal.pdf"
                >
                  Download Resume
                </a>
              </button>
              <button>
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#64ccc5] text-4xl hover:text-white"
                  />
                </a>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <div className="w-3/4 ml-20">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* medium screen display */}
      <div className="hidden md:block lg:hidden xl:hidden md:w-screen md:h-screen bg-[#0F0F0F]">
        <Header />
        <div className="text-center">
          <div className="col-span-1 px-10 mt-4">
            <p className="text-white text-5xl mb-3">
              Just
              <span className="text-[#64CCC5] font-kodeMono">
                {text}
                <Cursor />
              </span>
            </p>
            <p className="text-white font-kodeMono text-5xl">Hello I am</p>
            <p className="text-[#64CCC5] font-kodeMono text-5xl">
              Mridul Sehgal
            </p>
            <div className="flex justify-center items-center">
              <div className="w-2/3">
                <img src={hero} alt="" />
              </div>
            </div>
            <p className="font-kodeMono text-white text-lg mt-4 px-4">
              {`Hi! Welcome to my place, well I am just a developer, programmer, 
            and designer with a passion for crafting innovative solutions. As an engineer, 
            I thrive on solving challenges, and in my downtime, I enjoy gaming for fun and inspiration..`}
            </p>

            <div className="flex items-center justify-center mt-6 gap-8">
              <button className="hover:bg-[#64ccc5] hover:text-black text-2xl text-[#64ccc5] py-2 px-3 font-semibold rounded-xl border-2 border-[#64ccc5] ">
                <a
                  href="\Resume_Mridul_Sehgal.pdf"
                  download="Resume_Mridul_Sehgal.pdf"
                >
                  Download Resume
                </a>
              </button>
              <button>
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[#64ccc5] text-5xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#64ccc5] text-5xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#64ccc5] text-5xl hover:text-white"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* small screen display */}
      <div className=" md:hidden lg:hidden xl:hidden w-dvw h-dvh bg-[#0F0F0F]">
        <Header />
        <div className="text-center">
          <div className="col-span-1 px-4 mt-4">
            <p className="text-white text-2xl mb-3">
              Just
              <span className="text-[#64CCC5] font-kodeMono">
                {text}
                <Cursor />
              </span>
            </p>
            <p className="text-white font-kodeMono text-2xl">Hello I am</p>
            <p className="text-[#64CCC5] font-kodeMono text-3xl">
              Mridul Sehgal
            </p>
            <div className="flex justify-center items-center">
              <div className="w-4/4">
                <img src={hero} alt="" />
              </div>
            </div>
            <p className="font-kodeMono text-white text-xs mt-4 px-1">
              {`Hi! Welcome to my place, well I am just a developer, programmer, 
            and designer with a passion for crafting innovative solutions. As an engineer, 
            I thrive on solving challenges, and in my downtime, I enjoy gaming for fun and inspiration..`}
            </p>

            <div className="flex items-center justify-center mt-6 gap-8">
              <button className="hover:bg-[#64ccc5] hover:text-black text-xs text-[#64ccc5] py-2 px-3 font-semibold rounded-xl border-2 border-[#64ccc5] ">
                <a
                  href="\Resume_Mridul_Sehgal.pdf"
                  download="Resume_Mridul_Sehgal.pdf"
                >
                  Download Resume
                </a>
              </button>
              <button>
                {" "}
                <a href="https://github.com/mridul-sehgal" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[#64ccc5] text-2xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/mridul-sehgal-937754238/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#64ccc5] text-2xl hover:text-white"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/mridul_sehgal14/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#64ccc5] text-2xl hover:text-white"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
