import React from "react";
import { Zap, ChevronRight } from "lucide-react";
import BgAnimation from "./BgAnimation";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" bg-[#111827] h-[100vh] overflow-hidden flex items-center justify-center"
    >
      <div className=" container mx-auto">
        <div className="text-center relative flex flex-col items-center gap-[20px]">
          <div className=" absolute w-full h-full">
            <BgAnimation />
          </div>
          <Zap className="w-24 h-24 text-[#18aeed] animate-pulse mb-8 mx-auto" />
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#18aeed] via-[#f2f2f2] to-[#18aeed] animate-gradient">
            Elec Club
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Spark your passion for electronics and join the most electrifying
            club on campus!
          </p>
          <Link
            to="join"
            className=" py-[10px] cursor-pointer px-[30px] flex items-center gap-[5px] rounded-xl bg-[#18aeed] text-black hover:bg-[#f2f2f2] hover:text-[#18aeed] transition-all duration-300 transform hover:scale-105"
          >
            Join Now <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
