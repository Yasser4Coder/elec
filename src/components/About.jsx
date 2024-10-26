import React from "react";
import { Cpu } from "lucide-react";
import { FaBrain } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { ImBooks } from "react-icons/im";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className=" container mx-auto flex items-center justify-center">
        <div className="flex gap-[20px] items-center flex-col">
          <h2 className="text-4xl DtFont mt-[40px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#18aeed] mb-4">
            ABOUT ELEC CLUB
          </h2>
          <div className="grid grid-cols-1 mb-[80px] md:grid-cols-3 gap-8">
            <div className="about-card p-[30px] border-[1px] transition-all duration-300 transform hover:scale-105 rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <FaBrain className="mr-2" />
                  AI
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="border-[1px] about-card transition-all duration-300 transform hover:scale-105 p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <SiCyberdefenders className="mr-2" />
                  Cyber security
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="border-[1px] about-card transition-all duration-300 transform hover:scale-105 p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <FaCode className="mr-2" />
                  DEV
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="border-[1px] about-card transition-all duration-300 transform hover:scale-105 p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <Cpu className="mr-2" />
                  Elec Lab
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="border-[1px] about-card transition-all duration-300 transform hover:scale-105 p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <FiPenTool className="mr-2" />
                  Design
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="border-[1px] about-card transition-all duration-300 transform hover:scale-105 p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-xl text-[#18aeed]">
                  <ImBooks className="mr-2" />
                  Elec Office
                </h1>
              </div>
              <p className="text-[#000000a2]">
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
