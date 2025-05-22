import mod from "../../resources/mod.jpeg";
import sinter from "../../resources/sinter.png";
import finter from "../../resources/finter.png";
import { Link } from "react-router-dom";
const MyExp = () => {
  return (
    <>
      {/* extra larg screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-8 mt-4">
          With hands-on experience across various domains, I have contributed to
          impactful projects during my internships at the Ministry of Defence,
          elPixala, and Localitaz Geofencing Innovations. I have developed and
          enhanced user interfaces, optimized application performance, and
          collaborated with teams to ensure seamless project delivery. My
          experience includes resolving complex bugs, refactoring code for
          scalability, and implementing modern web development practices. These
          opportunities have strengthened my skills in front-end and back-end
          development, debugging, and problem-solving, while fostering a
          collaborative and solution-oriented approach to challenges.
        </div>

        <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div>

        <Link to="/experience">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*larg screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-[13px]">
          With hands-on experience across various domains, I have contributed to
          impactful projects during my internships at the Ministry of Defence,
          elPixala, and Localitaz Geofencing Innovations. I have developed and
          enhanced user interfaces, optimized application performance, and
          collaborated with teams to ensure seamless project delivery. My
          experience includes resolving complex bugs, refactoring code for
          scalability, and implementing modern web development practices. These
          opportunities have strengthened my skills in front-end and back-end
          development, debugging, and problem-solving, while fostering a
          collaborative and solution-oriented approach to challenges.
        </div>

        <div className="flex mt-6 items-center justify-center gap-4 ">
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div>

        <Link to="/experience">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-lg">
          With hands-on experience across various domains, I have contributed to
          impactful projects during my internships at the Ministry of Defence,
          elPixala, and Localitaz Geofencing Innovations. I have developed and
          enhanced user interfaces, optimized application performance, and
          collaborated with teams to ensure seamless project delivery. My
          experience includes resolving complex bugs, refactoring code for
          scalability, and implementing modern web development practices. These
          opportunities have strengthened my skills in front-end and back-end
          development, debugging, and problem-solving, while fostering a
          collaborative and solution-oriented approach to challenges.
        </div>

        <div className="flex mt-6 items-center justify-center gap-4 ">
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div>

        <Link to="/experience">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/*small screen view */}
      <div className="block md:hidden">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          Where have I worked before?
        </div>
        <div className=" text-white text-justify px-6 mt-2 text-xs">
          With hands-on experience across various domains, I have contributed to
          impactful projects during my internships at the Ministry of Defence,
          elPixala, and Localitaz Geofencing Innovations. I have developed and
          enhanced user interfaces, optimized application performance, and
          collaborated with teams to ensure seamless project delivery. My
          experience includes resolving complex bugs, refactoring code for
          scalability, and implementing modern web development practices. These
          opportunities have strengthened my skills in front-end and back-end
          development, debugging, and problem-solving, while fostering a
          collaborative and solution-oriented approach to challenges.
        </div>

        <div className="flex flex-col mt-6 items-center justify-center gap-4 ">
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={mod} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3 ">
            {" "}
            <img src={sinter} alt="" />
          </div>
          <div className=" w-36 h-36 border-2 p-3">
            {" "}
            <img src={finter} alt="" />
          </div>
        </div>

        <Link to="/experience">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyExp;
