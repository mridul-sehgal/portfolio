import Header from "../Header";
import mod from "../../resources/mod.jpeg";
import sinter from "../../resources/sinter.png";
import PageWrapper from "../PageWrapper/PageWrapper";
import finter from "../../resources/finter.png";
const Experience = () => {
  return (
    <PageWrapper>
      {/* extra large screen size */}
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden xl:block">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          EXPERIENCE
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-lg">
          Leveraging diverse professional experiences to deliver innovative
          solutions and drive impactful results across projects
        </div>

        <div className="mt-16 mx-20 border-2 p-8 ">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2">
              <img src={mod} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Ministry of Defence – WESEE, TANCS Department | New Delhi |
                January 2025 – Present
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Led the development of 6+ responsive front-end modules using
                  React.js, Ant Design, HTML, and CSS, ensuring layout
                  consistency across devices and contributing to a 40%
                  improvement in accessibility metrics..
                </li>
                <li>
                  Built interactive geospatial tools using Leaflet.js, including
                  editable circular overlays and MMSI-based vessel highlighting,
                  enhancing situational awareness and improving efficiency for
                  200+ internal users
                </li>
                <li>
                  AImplemented 6 key security upgrades based on vulnerability
                  assessments, such as input validation, file upload
                  restrictions, CAPTCHA, request throttling and code obfuscation
                  ,strengthening the application against common threats.
                </li>
                <li>
                  Redesigned the Savior-net platform UI/UX, streamlining
                  navigation and reducing friction, which led to a 50% faster
                  task completion rate while preserving design consistency with
                  Ant Design.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-20 border-2 p-8">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2">
              <img src={sinter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                02.Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                elPixala (Powered by TiX Global Ventures) | Delhi | July 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Coded responsive front-end interfaces for 3 client projects,
                  developing 6+ pages and 9 reusable components with React.js,
                  HTML, CSS, and JavaScript from detailed Figma designs; ensured
                  consistent performance across various screen sizes.
                </li>
                <li>
                  Integrated RESTful APIs to sync UI components with backend
                  data, improving data accuracy and reducing frontend-backend
                  latency by 30%.
                </li>
                <li>
                  Refactored legacy code for scalability and maintainability,
                  reducing redundancy and improving overall performance by 40%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-20 border-2 p-8 ">
          <div className="grid grid-cols-10 gap-36 ">
            <div className="w-60 col-span-2">
              <img src={finter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                03. Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Localitaz Geofencing Innovations | Delhi | March 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Engineered a prototype e-commerce front end by assembling six
                  core pages (Login, Home, Contact, Product, Billing, Address)
                  with HTML, CSS, and JavaScript; embedded an interactive map on
                  the Address page to enrich user interaction
                </li>
                <li>
                  Converted Figma designs into responsive, pixel-accurate
                  layouts compatible with desktops, tablets, and mobile devices.
                </li>
                <li>
                  Delivered production-ready UI components with precise
                  alignment to design specs, independently managing tasks and
                  quickly adapting to new tools and workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* large screen size */}
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden lg:block xl:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          EXPERIENCE
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-lg">
          Leveraging diverse professional experiences to deliver innovative
          solutions and drive impactful results across projects
        </div>

        <div className="mt-16 mx-12 border-2 p-8  ">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={mod} alt="" />
            </div>
            <div className="col-span-3 ">
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Ministry of Defence – WESEE, TANCS Department | New Delhi |
                January 2025 – Present
              </p>
              <ul className="text-white text-wrap list-disc ">
                <li>
                  Led the development of 6+ responsive front-end modules using
                  React.js, Ant Design, HTML, and CSS, ensuring layout
                  consistency across devices and contributing to a 40%
                  improvement in accessibility metrics..
                </li>
                <li>
                  Built interactive geospatial tools using Leaflet.js, including
                  editable circular overlays and MMSI-based vessel highlighting,
                  enhancing situational awareness and improving efficiency for
                  200+ internal users
                </li>
                <li>
                  AImplemented 6 key security upgrades based on vulnerability
                  assessments, such as input validation, file upload
                  restrictions, CAPTCHA, request throttling and code obfuscation
                  ,strengthening the application against common threats.
                </li>
                <li>
                  Redesigned the Savior-net platform UI/UX, streamlining
                  navigation and reducing friction, which led to a 50% faster
                  task completion rate while preserving design consistency with
                  Ant Design.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-12 border-2 p-8">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={sinter} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                02.Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                elPixala (Powered by TiX Global Ventures) | Delhi | July 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Coded responsive front-end interfaces for 3 client projects,
                  developing 6+ pages and 9 reusable components with React.js,
                  HTML, CSS, and JavaScript from detailed Figma designs; ensured
                  consistent performance across various screen sizes.
                </li>
                <li>
                  Integrated RESTful APIs to sync UI components with backend
                  data, improving data accuracy and reducing frontend-backend
                  latency by 30%.
                </li>
                <li>
                  Refactored legacy code for scalability and maintainability,
                  reducing redundancy and improving overall performance by 40%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-12 border-2 p-8 ">
          <div className="grid grid-cols-4 gap-32 ">
            <div className="w-52 col-span-1">
              <img src={finter} alt="" />
            </div>
            <div className="col-span-3">
              <p className="text-white text-3xl mb-2">
                {" "}
                03. Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Localitaz Geofencing Innovations | Delhi | March 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Engineered a prototype e-commerce front end by assembling six
                  core pages (Login, Home, Contact, Product, Billing, Address)
                  with HTML, CSS, and JavaScript; embedded an interactive map on
                  the Address page to enrich user interaction
                </li>
                <li>
                  Converted Figma designs into responsive, pixel-accurate
                  layouts compatible with desktops, tablets, and mobile devices.
                </li>
                <li>
                  Delivered production-ready UI components with precise
                  alignment to design specs, independently managing tasks and
                  quickly adapting to new tools and workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* medium screen size */}
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono hidden md:block lg:hidden xl:hidden">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          EXPERIENCE
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-lg">
          Leveraging diverse professional experiences to deliver innovative
          solutions and drive impactful results across projects
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className=" flex flex-col items-center">
            <div className="w-60 my-6 ">
              <img src={mod} alt="" />
            </div>
            <div>
              <p className="text-white text-3xl mb-2">
                {" "}
                01. Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Ministry of Defence – WESEE, TANCS Department | New Delhi |
                January 2025 – Present
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Led the development of 6+ responsive front-end modules using
                  React.js, Ant Design, HTML, and CSS, ensuring layout
                  consistency across devices and contributing to a 40%
                  improvement in accessibility metrics..
                </li>
                <li>
                  Built interactive geospatial tools using Leaflet.js, including
                  editable circular overlays and MMSI-based vessel highlighting,
                  enhancing situational awareness and improving efficiency for
                  200+ internal users
                </li>
                <li>
                  AImplemented 6 key security upgrades based on vulnerability
                  assessments, such as input validation, file upload
                  restrictions, CAPTCHA, request throttling and code obfuscation
                  ,strengthening the application against common threats.
                </li>
                <li>
                  Redesigned the Savior-net platform UI/UX, streamlining
                  navigation and reducing friction, which led to a 50% faster
                  task completion rate while preserving design consistency with
                  Ant Design.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8">
          <div className="flex flex-col items-center">
            <div className="w-60 my-6">
              <img src={sinter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                02.Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                elPixala (Powered by TiX Global Ventures) | Delhi | July 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Coded responsive front-end interfaces for 3 client projects,
                  developing 6+ pages and 9 reusable components with React.js,
                  HTML, CSS, and JavaScript from detailed Figma designs; ensured
                  consistent performance across various screen sizes.
                </li>
                <li>
                  Integrated RESTful APIs to sync UI components with backend
                  data, improving data accuracy and reducing frontend-backend
                  latency by 30%.
                </li>
                <li>
                  Refactored legacy code for scalability and maintainability,
                  reducing redundancy and improving overall performance by 40%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className="flex flex-col items-center">
            <div className="w-60 my-6">
              <img src={finter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-3xl mb-2">
                {" "}
                03. Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  text-xl mb-4">
                Localitaz Geofencing Innovations | Delhi | March 2024
              </p>
              <ul className="text-white list-disc ">
                <li>
                  Engineered a prototype e-commerce front end by assembling six
                  core pages (Login, Home, Contact, Product, Billing, Address)
                  with HTML, CSS, and JavaScript; embedded an interactive map on
                  the Address page to enrich user interaction
                </li>
                <li>
                  Converted Figma designs into responsive, pixel-accurate
                  layouts compatible with desktops, tablets, and mobile devices.
                </li>
                <li>
                  Delivered production-ready UI components with precise
                  alignment to design specs, independently managing tasks and
                  quickly adapting to new tools and workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* small screen size */}
      <div className="w-screen pb-14 bg-[#0F0F0F] font-kodeMono md:hidden block ">
        <Header />
        <div className="text-center font-kodeMono text-5xl font-semibold text-[#64ccc5]">
          EXPERIENCE
        </div>

        <div className="text-center mt-3 text-white font-kodeMono text-lg">
          Leveraging diverse professional experiences to deliver innovative
          solutions and drive impactful results across projects
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className=" flex flex-col items-center">
            <div className="w-60 my-6 ">
              <img src={mod} alt="" />
            </div>
            <div>
              <p className="text-white text-xl mb-2">
                {" "}
                01. Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  mb-4">
                Ministry of Defence – WESEE, TANCS Department | New Delhi |
                January 2025 – Present
              </p>
              <ul className="text-white list-disc text-xs ">
                <li>
                  Led the development of 6+ responsive front-end modules using
                  React.js, Ant Design, HTML, and CSS, ensuring layout
                  consistency across devices and contributing to a 40%
                  improvement in accessibility metrics..
                </li>
                <li>
                  Built interactive geospatial tools using Leaflet.js, including
                  editable circular overlays and MMSI-based vessel highlighting,
                  enhancing situational awareness and improving efficiency for
                  200+ internal users
                </li>
                <li>
                  AImplemented 6 key security upgrades based on vulnerability
                  assessments, such as input validation, file upload
                  restrictions, CAPTCHA, request throttling and code obfuscation
                  ,strengthening the application against common threats.
                </li>
                <li>
                  Redesigned the Savior-net platform UI/UX, streamlining
                  navigation and reducing friction, which led to a 50% faster
                  task completion rate while preserving design consistency with
                  Ant Design.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8">
          <div className="flex flex-col items-center">
            <div className="w-60 my-6">
              <img src={sinter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
                02.Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]   mb-4">
                elPixala (Powered by TiX Global Ventures) | Delhi | July 2024
              </p>
              <ul className="text-white list-disc text-xs">
                <li>
                  Coded responsive front-end interfaces for 3 client projects,
                  developing 6+ pages and 9 reusable components with React.js,
                  HTML, CSS, and JavaScript from detailed Figma designs; ensured
                  consistent performance across various screen sizes.
                </li>
                <li>
                  Integrated RESTful APIs to sync UI components with backend
                  data, improving data accuracy and reducing frontend-backend
                  latency by 30%.
                </li>
                <li>
                  Refactored legacy code for scalability and maintainability,
                  reducing redundancy and improving overall performance by 40%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-8 border-2 p-8 ">
          <div className="flex flex-col items-center">
            <div className="w-60 my-6">
              <img src={finter} alt="" />
            </div>
            <div className="col-span-8">
              <p className="text-white text-xl mb-2">
                {" "}
                03. Frontend Web Developer Intern
              </p>
              <p className="text-[#64ccc5]  mb-4">
                Localitaz Geofencing Innovations | Delhi | March 2024
              </p>
              <ul className="text-white list-disc text-xs ">
                <li>
                  Engineered a prototype e-commerce front end by assembling six
                  core pages (Login, Home, Contact, Product, Billing, Address)
                  with HTML, CSS, and JavaScript; embedded an interactive map on
                  the Address page to enrich user interaction
                </li>
                <li>
                  Converted Figma designs into responsive, pixel-accurate
                  layouts compatible with desktops, tablets, and mobile devices.
                </li>
                <li>
                  Delivered production-ready UI components with precise
                  alignment to design specs, independently managing tasks and
                  quickly adapting to new tools and workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;
