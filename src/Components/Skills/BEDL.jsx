import node from "../../resources/Node.png";
import mongodb from "../../resources/mongodb.png";
import express from "../../resources/Express.png";

const BEDL = () => {
  return (
    <>
      <div className="hidden xl:block">
        <p className="text-white text-5xl text-center mb-10">
          Back-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="items-center w-40 h-40 border-2 p-5">
            <img src={node} alt="" />
          </div>
          <div className="w-40 h-40 border-2 p-5">
            <img src={express} alt="" />
          </div>
          <div className="w-40 h-40 border-2 p-5">
            <img src={mongodb} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block xl:hidden"> 
         <p className="text-white text-5xl text-center mb-10">
          Back-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-16">
          <div className="items-center w-32 h-32 border-2 p-5">
            <img src={node} alt="" />
          </div>
          <div className="w-32 h-32 border-2 p-5">
            <img src={express} alt="" />
          </div>
          <div className="w-32 h-32 border-2 p-5">
            <img src={mongodb} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden"> 
         <p className="text-white text-6xl text-center mb-10">
          Back-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-12">
          <div className="items-center w-56 h-56 border-2 p-5">
            <img src={node} alt="" />
          </div>
          <div className="w-56 h-56 border-2 p-5">
            <img src={express} alt="" />
          </div>
          <div className="w-56 h-56 border-2 p-5">
            <img src={mongodb} alt="" />
          </div>
        </div>
      </div>

      <div className="block md:hidden"> 
         <p className="text-white text-3xl text-center mb-10">
          Back-End Technologies
        </p>
        <div className="grid grid-cols-3 items-center gap-3">
          <div className="items-center w-28 h-28 border-2 p-5">
            <img src={node} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={express} alt="" />
          </div>
          <div className="w-28 h-28 border-2 p-5">
            <img src={mongodb} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BEDL;
