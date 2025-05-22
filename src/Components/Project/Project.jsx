import Header from "../Header";
import tsp from "../../resources/tsp.png";
import cb from "../../resources/cb.png";
import PageWrapper from "../PageWrapper/PageWrapper";

const Experience = () => {
  return (
    <PageWrapper>
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden xl:block">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-20 border-2 p-8 ">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2">
              <img src={cb} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                ChatterBox : Real-Time Chat Application
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO,
                Tailwind CSS, MongoDB Atlas, Postman
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Architected a full-stack real-time chat platform supporting up
                  to 15 simultaneous users, with secure login, registration, and
                  logout features using JWT authentication, session control,
                  password encryption, and single-device login enforcement.
                </li>
                <li>
                  Enabled real-time, bi-directional messaging using Socket.IO,
                  allowing instant delivery and live presence updates,
                  emoji-based activity indicators, and smooth communication
                  backed by RESTful APIs and a cloud-hosted MongoDB Atlas
                  database
                </li>
                <li>
                  Crafted a responsive, interactive UI with React.js and
                  Tailwind CSS, optimizing the UI to function flawlessly on both
                  desktop and tablet screens.; tested 20+ backend endpoints via
                  Postman to validate performance and API reliability.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://chatterbox-2oyw.onrender.com/login"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-20 border-2 p-8">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2">
              <img src={tsp} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                02. The Sorting Visualizer
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: Next.js, Tailwind CSS , TypeScript
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Programmed a sorting simulator for five algorithms (Merge,
                  Quick, Bubble, Insertion, Selection) handling 100+ visual bars
                  per run.
                </li>
                <li>
                  Included user controls for algorithm choice, bar quantity, and
                  animation speed to help visualize sorting behavior.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/mridul-sehgal/sortingVisualizer"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden lg:block xl:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-12 border-2 p-8 ">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={cb} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                ChatterBox : Real-Time Chat Application
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO,
                Tailwind CSS, MongoDB Atlas, Postman
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Architected a full-stack real-time chat platform supporting up
                  to 15 simultaneous users, with secure login, registration, and
                  logout features using JWT authentication, session control,
                  password encryption, and single-device login enforcement.
                </li>
                <li>
                  Enabled real-time, bi-directional messaging using Socket.IO,
                  allowing instant delivery and live presence updates,
                  emoji-based activity indicators, and smooth communication
                  backed by RESTful APIs and a cloud-hosted MongoDB Atlas
                  database
                </li>
                <li>
                  Crafted a responsive, interactive UI with React.js and
                  Tailwind CSS, optimizing the UI to function flawlessly on both
                  desktop and tablet screens.; tested 20+ backend endpoints via
                  Postman to validate performance and API reliability.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://chatterbox-2oyw.onrender.com/login"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-12 border-2 p-8">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={tsp} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                02. The Sorting Visualizer
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: Next.js, Tailwind CSS , TypeScript
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Programmed a sorting simulator for five algorithms (Merge,
                  Quick, Bubble, Insertion, Selection) handling 100+ visual bars
                  per run.
                </li>
                <li>
                  Included user controls for algorithm choice, bar quantity, and
                  animation speed to help visualize sorting behavior.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/mridul-sehgal/sortingVisualizer"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden md:block lg:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={cb} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                ChatterBox : Real-Time Chat Application
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO,
                Tailwind CSS, MongoDB Atlas, Postman
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Architected a full-stack real-time chat platform supporting up
                  to 15 simultaneous users, with secure login, registration, and
                  logout features using JWT authentication, session control,
                  password encryption, and single-device login enforcement.
                </li>
                <li>
                  Enabled real-time, bi-directional messaging using Socket.IO,
                  allowing instant delivery and live presence updates,
                  emoji-based activity indicators, and smooth communication
                  backed by RESTful APIs and a cloud-hosted MongoDB Atlas
                  database
                </li>
                <li>
                  Crafted a responsive, interactive UI with React.js and
                  Tailwind CSS, optimizing the UI to function flawlessly on both
                  desktop and tablet screens.; tested 20+ backend endpoints via
                  Postman to validate performance and API reliability.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://chatterbox-2oyw.onrender.com/login"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                02. The Sorting Visualizer
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Stack: Next.js, Tailwind CSS , TypeScript
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Programmed a sorting simulator for five algorithms (Merge,
                  Quick, Bubble, Insertion, Selection) handling 100+ visual bars
                  per run.
                </li>
                <li>
                  Included user controls for algorithm choice, bar quantity, and
                  animation speed to help visualize sorting behavior.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/mridul-sehgal/sortingVisualizer"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono md:hidden block ">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          PROJECTS
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-xl">
          Transforming Ideas into Functional and Innovative Solutions Through My
          Projects
        </div>

        <div className="mt-16 mx-8 border-2 p-4 ">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={cb} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
                ChatterBox : Real-Time Chat Application
              </p>
              <p className="text-[#64ccc5]   mb-4">
                Stack: MERN (MongoDB, Express.js, React.js, Node.js), Socket.IO,
                Tailwind CSS, MongoDB Atlas, Postman
              </p>
              <ul className="text-white text-sm list-disc ">
                <li>
                  Architected a full-stack real-time chat platform supporting up
                  to 15 simultaneous users, with secure login, registration, and
                  logout features using JWT authentication, session control,
                  password encryption, and single-device login enforcement.
                </li>
                <li>
                  Enabled real-time, bi-directional messaging using Socket.IO,
                  allowing instant delivery and live presence updates,
                  emoji-based activity indicators, and smooth communication
                  backed by RESTful APIs and a cloud-hosted MongoDB Atlas
                  database
                </li>
                <li>
                  Crafted a responsive, interactive UI with React.js and
                  Tailwind CSS, optimizing the UI to function flawlessly on both
                  desktop and tablet screens.; tested 20+ backend endpoints via
                  Postman to validate performance and API reliability.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://chatterbox-2oyw.onrender.com/login"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-4">
          <div className="flex flex-col items-center ">
            <div className="w-60 my-6">
              <img src={tsp} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
                02. The Sorting Visualizer
              </p>
              <p className="text-[#64ccc5]   mb-4">
                Stack: Next.js, Tailwind CSS , TypeScript
              </p>
              <ul className="text-white list-disc text-sm ">
                <li>
                  Programmed a sorting simulator for five algorithms (Merge,
                  Quick, Bubble, Insertion, Selection) handling 100+ visual bars
                  per run.
                </li>
                <li>
                  Included user controls for algorithm choice, bar quantity, and
                  animation speed to help visualize sorting behavior.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://github.com/mridul-sehgal/sortingVisualizer"
                  target="_blank"
                  className="text-[#64ccc5]  text-2xl hover:underline hover:underline-offset-2 "
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
