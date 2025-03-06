import React from "react";
import appbg from "../images/app/2900419 1.png";
import icon from "../images/app/icon.png";
import leftPhone from "../images/app/iphone-14-pro-mockup-v16-isometric 1.png";
import rightPhone from "../images/app/iphone-14-pro-mockup-v16-isometric copy 1.png";
import light from "../images/app/Group.png";

import { ChevronRight } from "lucide-react";

const AppSection = () => {
  return (
    <section
      id="apps"
      className="relative flex items-center justify-center md:items-start min-h-[100vh] w-full"
    >
      <img
        src={light}
        className=" absolute left-[6%] sm:max-w-[6%] max-w-[15%] top-0"
        alt=""
      />
      <img
        src={appbg}
        className=" absolute w-full h-full object-cover"
        alt=""
      />

      <div className="w-full md:w-[990px] md:mt-[80px] relative z-10 flex flex-col gap-[50px] py-[20px] items-center">
        <img
          src={leftPhone}
          className=" sm:absolute max-w-[43%] sm:max-w-[30%] top-[90px] left-[20px] md:left-0"
          alt=""
        />
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          تطبيق فطورك هنا
        </h1>
        <img
          src={icon}
          alt=""
          className="max-w-[20%] md:max-w-[140px] rounded-2xl"
        />
        <a
          href="https://drive.google.com/file/d/19PwDLYQCfUxsL2xouH8DAFbIOvUyYSp9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className=" py-[10px] text-sm sm:text-2xl cursor-pointer px-[13px] flex items-center gap-[5px] rounded-xl bg-transparent border-[#18aeed] text-[#18aeed] border-[2px] font-semibold hover:bg-[#18aeed] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          تحميل التطبيق
          <ChevronRight className="ml-2 h-6 w-6" />
        </a>
        <img
          src={rightPhone}
          className=" sm:absolute max-w-[43%] sm:max-w-[30%]  top-[125px] right-[20px] md:right-0"
          alt=""
        />
      </div>
    </section>
  );
};

export default AppSection;
