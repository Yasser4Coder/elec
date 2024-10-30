import React from "react";
import img from "../images/p0/1.png";

const Memories = () => {
  return (
    <div className="min-h-screen flex mb-[100px] mt-[40px] flex-col">
      <div className="title container min-w-full">
        <h2 className="text-4xl font-dtFont float-end mt-[40px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#2563EB] mb-2">
          Memories
        </h2>
      </div>
      <div className="elec-bg w-full min-h-full">
        <div className=" flex w-full items-center">
          <div className="h-[5px] w-[300px] bg-blue"></div>
          <div className=" w-[250px] h-[250px] rounded-full border-[5px] border-blue">
            <img
              src={img}
              alt=""
              className=" rounded-full w-full h-full bg-contain p-[6px]"
            />
          </div>
          <div className="h-[5px] top-[30%] flex-1 w-full bg-blue"></div>
        </div>
        <div className=" flex w-full items-center">
          <div className="h-[5px] flex-1 w-full bg-blue"></div>

          <div className=" w-[280px] h-[280px] rounded-full border-[5px] border-blue">
            <img
              src={img}
              alt=""
              className=" rounded-full w-full h-full bg-contain p-[6px]"
            />
          </div>
          <div className="h-[5px]  w-[300px] bg-blue"></div>
        </div>
        <div className=" flex w-full items-center">
          <div className="h-[5px] w-[300px] bg-blue"></div>
          <div className=" w-[280px] h-[280px] rounded-full border-[5px] border-blue">
            <img
              src={img}
              alt=""
              className=" rounded-full w-full h-full bg-contain p-[6px]"
            />
          </div>
          <div className="h-[5px] top-[30%] flex-1 w-full bg-blue"></div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
