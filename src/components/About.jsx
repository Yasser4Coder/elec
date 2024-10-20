import React from "react";
import { Cpu, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <div className=" container mx-auto">
        <div className="flex gap-[20px] items-center flex-col">
          <h2 className="text-4xl mt-[40px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#2563EB] mb-4">
            About Elec Club
          </h2>
          <div className="grid grid-cols-1 mb-[80px] md:grid-cols-3 gap-8">
            <div className="bg-white p-[30px] border-[1px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Users className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="bg-white border-[1px] p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Cpu className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="bg-white border-[1px] p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Lightbulb className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="bg-white border-[1px] p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Lightbulb className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="bg-white border-[1px] p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Lightbulb className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
                Connect with fellow electronics enthusiasts and build lasting
                friendships.
              </p>
            </div>
            <div className="bg-white border-[1px] p-[30px] rounded-lg border-[#18aeed]">
              <div className="mb-[15px]">
                <h1 className="flex items-center text-[#18aeed]">
                  <Lightbulb className="mr-2" />
                  Community
                </h1>
              </div>
              <p>
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
