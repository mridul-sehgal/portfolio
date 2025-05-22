import tailwind from "../../resources/tailwind.png";
import nextjs from "../../resources/nextjs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
const FEDL = () => {
  return (
    <>
      <div className="hidden xl:block">
        <p className="text-white text-5xl text-center mb-10">
          Front-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="w-40 h-40 text-center   border-2 p-7">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] text-[100px]"
            />
          </div>
          <div className="w-40 h-40 border-2 text-center p-7">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] text-[100px]"
            />
          </div>
          <div className="w-40 h-40 border-2 text-center p-7">
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#64ccc5]  text-[100px]"
            />
          </div>
          <div className="w-40 h-40 border-2 text-center p-7">
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] text-[100px]"
            />
          </div>

          <div className="items-center w-40 h-40 border-2 p-5">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-40 h-40 border-2 p-5">
            <img src={nextjs} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden">
        <p className="text-white text-5xl text-center mb-10">
          Front-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="w-28 h-28 text-center  border-2 p-4">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#64ccc5]  text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>

          <div className="items-center w-28 h-28 border-2 p-4">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-4">
            <img src={nextjs} alt="" />
          </div>
        </div>
      </div>

      
      <div className="hidden md:block lg:hidden">
        <p className="text-white text-6xl text-center mb-10">
          Front-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="w-56 h-56 text-center  border-2 p-5">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] text-[180px]"
            />
          </div>
          <div className="w-56 h-56 border-2 text-center p-5">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] text-[180px]"
            />
          </div>
          <div className="w-56 h-56 border-2 text-center p-5">
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#64ccc5]  text-[180px]"
            />
          </div>
          <div className="w-56 h-56 border-2 text-center p-5">
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] text-[180px]"
            />
          </div>

          <div className="items-center w-56 h-56 border-2 p-5">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-56 h-56 border-2 p-5">
            <img src={nextjs} alt="" />
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <p className="text-white text-4xl text-center mb-10">
          Front-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="w-28 h-28 text-center  border-2 p-4">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faJs}
              className="text-[#64ccc5]  text-[80px]"
            />
          </div>
          <div className="w-28 h-28 border-2 text-center p-4">
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#64ccc5] text-[80px]"
            />
          </div>

          <div className="items-center w-28 h-28 border-2 p-5">
            <img src={tailwind} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={nextjs} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FEDL;
