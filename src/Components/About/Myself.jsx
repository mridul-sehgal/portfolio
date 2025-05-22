const Myself = () => {
  return (
    <>
      {/* extra large screen view */}
      <div className="hidden xl:block ">
        <div className=" text-[#64ccc5]  text-3xl mt-4 p-4">Who am I?</div>
        <div>
          <ul className=" text-white text-justify ">
            <li className="my-4 px-8">
              Hii! I am Mridul , a final-year B.Tech student specializing in
              Electronics and Communication Engineering with a minor in Computer
              Science, I bring a unique fusion of technical proficiency and a
              solution-driven mindset. My journey is fueled by a passion for
              leveraging technology to design impactful solutions, with a
              particular focus on web development and emerging technologies.
            </li>
            <li className="my-4 px-8">
              With hands-on experience in a diverse range of tools and
              technologies—including HTML, CSS, JavaScript, React, Node.js,
              Express, MongoDB, Next.js, Tailwind CSS, TypeScript, and C/C++.I
              specialize in creating efficient, user-centric applications that
              blend functionality with innovation. My expertise enables me to
              navigate the full spectrum of development, from front-end
              interfaces to robust back-end systems.
            </li>
            <li className="px-8">
              What truly drives me is the opportunity to collaborate on
              innovative projects in dynamic environments. I thrive on
              challenges that push the boundaries of creativity and innovation,
              and I bring strong communication, adaptability, and
              problem-solving skills to every endeavor. Through internships and
              personal projects, I’ve honed my ability to turn complex ideas
              into tangible, impactful solutions while continuously learning and
              evolving in the ever-changing tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* large screen view */}
      <div className="hidden lg:block xl:hidden ">
        <div className=" text-[#64ccc5]  text-2xl mt-2 p-2">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-[13px]">
            <li className="my-1 px-6">
              Hii! I am Mridul , a final-year B.Tech student specializing in
              Electronics and Communication Engineering with a minor in Computer
              Science, I bring a unique fusion of technical proficiency and a
              solution-driven mindset. My journey is fueled by a passion for
              leveraging technology to design impactful solutions, with a
              particular focus on web development and emerging technologies.
            </li>
            <li className="my-2 px-6">
              With hands-on experience in a diverse range of tools and
              technologies—including HTML, CSS, JavaScript, React, Node.js,
              Express, MongoDB, Next.js, Tailwind CSS, TypeScript, and C/C++.I
              specialize in creating efficient, user-centric applications that
              blend functionality with innovation. My expertise enables me to
              navigate the full spectrum of development, from front-end
              interfaces to robust back-end systems.
            </li>
            <li className="px-6 mb-2">
              What truly drives me is the opportunity to collaborate on
              innovative projects in dynamic environments. I thrive on
              challenges that push the boundaries of creativity and innovation,
              and I bring strong communication, adaptability, and
              problem-solving skills to every endeavor. Through internships and
              personal projects, I’ve honed my ability to turn complex ideas
              into tangible, impactful solutions while continuously learning and
              evolving in the ever-changing tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* medium screen view */}
      <div className="hidden md:block lg:hidden xl:hidden ">
        <div className=" text-[#64ccc5] font-semibold  text-4xl mt-4 p-6 ">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-[17px]">
            <li className="my-2 px-6">
              Hii! I am Mridul , a final-year B.Tech student specializing in
              Electronics and Communication Engineering with a minor in Computer
              Science, I bring a unique fusion of technical proficiency and a
              solution-driven mindset. My journey is fueled by a passion for
              leveraging technology to design impactful solutions, with a
              particular focus on web development and emerging technologies.
            </li>
            <li className="my-2 px-6">
              With hands-on experience in a diverse range of tools and
              technologies—including HTML, CSS, JavaScript, React, Node.js,
              Express, MongoDB, Next.js, Tailwind CSS, TypeScript, and C/C++.I
              specialize in creating efficient, user-centric applications that
              blend functionality with innovation. My expertise enables me to
              navigate the full spectrum of development, from front-end
              interfaces to robust back-end systems.
            </li>
            <li className="px-6 mb-3">
              What truly drives me is the opportunity to collaborate on
              innovative projects in dynamic environments. I thrive on
              challenges that push the boundaries of creativity and innovation,
              and I bring strong communication, adaptability, and
              problem-solving skills to every endeavor. Through internships and
              personal projects, I’ve honed my ability to turn complex ideas
              into tangible, impactful solutions while continuously learning and
              evolving in the ever-changing tech landscape.
            </li>
          </ul>
        </div>
      </div>

      {/* small screen view */}
      <div className="block md:hidden ">
        <div className=" text-[#64ccc5] font-semibold  text-4xl mt-4 p-6 ">Who am I?</div>
        <div>
          <ul className=" text-white text-justify text-xs">
            <li className="my-2 px-6">
              Hii! I am Mridul , a final-year B.Tech student specializing in
              Electronics and Communication Engineering with a minor in Computer
              Science, I bring a unique fusion of technical proficiency and a
              solution-driven mindset. My journey is fueled by a passion for
              leveraging technology to design impactful solutions, with a
              particular focus on web development and emerging technologies.
            </li>
            <li className="my-2 px-6">
              With hands-on experience in a diverse range of tools and
              technologies—including HTML, CSS, JavaScript, React, Node.js,
              Express, MongoDB, Next.js, Tailwind CSS, TypeScript, and C/C++.I
              specialize in creating efficient, user-centric applications that
              blend functionality with innovation. My expertise enables me to
              navigate the full spectrum of development, from front-end
              interfaces to robust back-end systems.
            </li>
            <li className="px-6 mb-3">
              What truly drives me is the opportunity to collaborate on
              innovative projects in dynamic environments. I thrive on
              challenges that push the boundaries of creativity and innovation,
              and I bring strong communication, adaptability, and
              problem-solving skills to every endeavor. Through internships and
              personal projects, I’ve honed my ability to turn complex ideas
              into tangible, impactful solutions while continuously learning and
              evolving in the ever-changing tech landscape.
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Myself;
