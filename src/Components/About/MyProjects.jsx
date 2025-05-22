import { Link } from "react-router-dom";
import tsp from "../../resources/tsp.png";
import cb from "../../resources/cb.png";
const MyProjects = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block">
        <div className=" text-[#64ccc5] text-3xl mt-4 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-8 mt-4">
          Developed ChatterBox, a real-time chat application using the MERN
          stack, Socket.IO, and MongoDB Atlas, featuring instant messaging, live
          status updates, and secure authentication with JWT. Built The Sorting
          Visualizer, an interactive simulation tool with Next.js and
          TypeScript, showcasing the step-by-step execution of five major
          sorting algorithms with customizable settings. These projects
          highlight my skills in full-stack development, real-time
          communication, algorithm visualization, and responsive front-end
          design.
        </div>

        <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-48 h-48 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-48 h-48 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div>

        <Link to="/projects">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* large screen view */}
      <div className="hidden lg:block xl:hidden">
        <div className=" text-[#64ccc5] text-2xl mt-3 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-[13px]">
          Developed ChatterBox, a real-time chat application using the MERN
          stack, Socket.IO, and MongoDB Atlas, featuring instant messaging, live
          status updates, and secure authentication with JWT. Built The Sorting
          Visualizer, an interactive simulation tool with Next.js and
          TypeScript, showcasing the step-by-step execution of five major
          sorting algorithms with customizable settings. These projects
          highlight my skills in full-stack development, real-time
          communication, algorithm visualization, and responsive front-end
          design.
        </div>

        <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-44 h-44 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-44 h-44 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div>

        <Link to="/projects">
          <div className="text-end mx-12  text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden">
        <div className=" text-[#64ccc5] text-4xl mt-5 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-lg">
          Developed ChatterBox, a real-time chat application using the MERN
          stack, Socket.IO, and MongoDB Atlas, featuring instant messaging, live
          status updates, and secure authentication with JWT. Built The Sorting
          Visualizer, an interactive simulation tool with Next.js and
          TypeScript, showcasing the step-by-step execution of five major
          sorting algorithms with customizable settings. These projects
          highlight my skills in full-stack development, real-time
          communication, algorithm visualization, and responsive front-end
          design.
        </div>

        <div className="flex mt-6 items-center justify-center gap-6 ">
          <div className=" w-56 h-56 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-56 h-56 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div>

        <Link to="/projects">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>

      {/* small screen view */}
      <div className="block md:hidden">
        <div className=" text-[#64ccc5] text-4xl mt-5 p-1">
          What have I coded so far?
        </div>
        <div className=" text-white text-justify px-6 mt-3 text-xs">
          Developed ChatterBox, a real-time chat application using the MERN
          stack, Socket.IO, and MongoDB Atlas, featuring instant messaging, live
          status updates, and secure authentication with JWT. Built The Sorting
          Visualizer, an interactive simulation tool with Next.js and
          TypeScript, showcasing the step-by-step execution of five major
          sorting algorithms with customizable settings. These projects
          highlight my skills in full-stack development, real-time
          communication, algorithm visualization, and responsive front-end
          design.
        </div>

        <div className="flex flex-col mt-6 items-center justify-center gap-4 ">
          <div className=" w-56 h-56 border-2 p-3 ">
            {" "}
            <img src={cb} alt="" />
          </div>
          <div className=" w-56 h-56 border-2 p-3">
            {" "}
            <img src={tsp} alt="" />
          </div>
        </div>

        <Link to="/projects">
          <div className="text-end mx-12 my-4 text-xl text-[#64ccc5] hover:underline hover:underline-offset-2 ">
            {" "}
            See More{" "}
          </div>
        </Link>
      </div>
    </>
  );
};

export default MyProjects;
