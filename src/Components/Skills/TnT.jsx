import git from "../../resources/git.png";
import gith from "../../resources/gith.png";
import fgm from "../../resources/fgm.png";
import vsc from "../../resources/vsc.png";

const TnT = () => {
  return (
    <>
      <div className="hidden xl:block">
        {" "}
        <p className="text-white text-5xl text-center mb-10">
          Tools and Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="items-center w-40 h-40 border-2 p-5">
            <img src={git} alt="" />
          </div>
          <div className="w-40 h-40 border-2 px-5 py-4">
            <img src={gith} alt="" />
          </div>
          <div className="w-40 h-40 border-2 p-5">
            <img src={vsc} alt="" />
          </div>
          <div className="w-40 h-40 border-2 p-5">
            <img src={fgm} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden">
        {" "}
        <p className="text-white text-5xl text-center mb-10">
          Tools and Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="items-center w-28 h-28 border-2 p-5">
            <img src={git} alt="" />
          </div>
          <div className="w-28 h-28 border-2 px-5 py-4">
            <img src={gith} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={vsc} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={fgm} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden" >
        <p className="text-white text-6xl text-center mb-10">
          Tools and Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="items-center w-56 h-56 border-2 p-5">
            <img src={git} alt="" />
          </div>
          <div className="w-56 h-56 border-2 px-5 py-4">
            <img src={gith} alt="" />
          </div>
          <div className="w-56 h-56 border-2 p-5">
            <img src={vsc} alt="" />
          </div>
          <div className="w-56 h-56 border-2 p-5">
            <img src={fgm} alt="" />
          </div>
        </div>
      </div>

      <div className="block md:hidden" >
        <p className="text-white text-3xl text-center mb-10">
          Tools and Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="items-center w-28 h-28 border-2 p-5">
            <img src={git} alt="" />
          </div>
          <div className="w-28 h-28 border-2 px-5 py-4">
            <img src={gith} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={vsc} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={fgm} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TnT;
