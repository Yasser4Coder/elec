import React, { useState, useEffect } from "react";

import project0 from "../images/PROJECT-0.png";
import co from "../images/CO.png";
import startUpCity from "../images/startup0.png";
import des from "../images/des.png";
import elec from "../images/photo_2024-10-19_19-19-49-removebg-preview.png";

import co1 from "../images/co-scape/f15.png";
import co2 from "../images/co-scape/f16.png";
import co3 from "../images/co-scape/f17.png";
import co4 from "../images/co-scape/f18.png";
import co5 from "../images/co-scape/f19.png";
import co6 from "../images/co-scape/f20.png";

import p1 from "../images/p0/01.png";
import p2 from "../images/p0/01.png";
import p3 from "../images/p0/02.png";
import p4 from "../images/p0/07.png";
import p5 from "../images/p0/10.png";

import s1 from "../images/startupcity/1.jpg";
import s2 from "../images/startupcity/2.jpg";
import s3 from "../images/startupcity/3.jpg";
import s4 from "../images/startupcity/4.jpg";
import s5 from "../images/startupcity/5.jpg";

import d1 from "../images/designersDay/1.jpg";
import d2 from "../images/designersDay/2.jpg";
import d3 from "../images/designersDay/3.jpg";
import d4 from "../images/designersDay/4.jpg";
import d5 from "../images/designersDay/5.jpg";
import d6 from "../images/designersDay/6.jpg";

import w1 from "../images/workshops/1.png";
import w2 from "../images/workshops/2.png";
import w3 from "../images/workshops/3.jpg";
import w4 from "../images/workshops/4.jpg";
import w5 from "../images/workshops/5.jpg";
// Import Swiper styles

import { CalendarIcon } from "lucide-react";

import amroun from "../images/nextEvent/od3.png";
import EventCard from "./EventCard";

const coImages = [co1, co2, co3, co4, co5, co6];
const poImages = [p1, p2, p3, p4, p5];
const startUpImages = [s1, s2, s3, s4, s5];
const designersDay = [d1, d2, d3, d4, d5, d6];
const workshops = [w1, w3, w4, w2, w5];

const Event = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2024-11-13T10:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="event"
      className="flex justify-center font-popinFont py-12 md:py-24 lg:py-32 bg-[#111827] overflow-hidden relative"
    >
      {/* Animated circuit background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 100,100 0,100 Z"
            fill="none"
            stroke="#18aeed"
            strokeWidth="0.5"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,0 L100,0 100,100 0,100 Z;
              M0,50 L50,0 100,50 50,100 Z;
              M50,0 L100,0 100,100 0,100 Z;
              M0,0 L100,0 100,100 0,100 Z
            "
            />
          </path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-between space-y-12">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-dtFont text-center sm:text-6xl font-bold mb-6 text-transparent bg-clip-text text-white">
              Next Elec Event
            </h1>
            <p className="max-w-[600px] text-center text-[#A1A1AA] md:text-xl">
              Prepare to be shocked by knowledge at our upcoming Circuit Design
              Workshop!
            </p>
            <div className="pt-4 flex justify-center space-x-4">
              {[
                { label: "Days", value: days },
                { label: "Hours", value: hours },
                { label: "Minutes", value: minutes },
                { label: "Seconds", value: seconds },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#18aeed]">
                    {item.value}
                  </span>
                  <span className="text-sm text-[#71717A]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className=" container mx-auto">
            <div className="w-full perspective-1000">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-[#1F2937] ring-1 ring-[#0F172A] rounded-lg leading-none flex items-center flex-col lg:flex-row gap-[60px] xl:gap-[90px] items-top justify-start space-x-6 transform transition duration-500 hover:scale-105 hover:rotate-1">
                  <div className="event-card-event min-w-[360px] min-h-[360px] overflow-hidden max-w-[360px] max-h-[360px] xl:min-w-[420px] xl:max-w-[420px] xl:min-h-[420px] xl:max-h-[420px] border-blue rounded-xl border-[2px]">
                    <img
                      src={amroun}
                      className="w-full h-full object-cover rounded-xl"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2 flex flex-col gap-[18px] xl:gap-[32px]">
                    <p className="text-[#F1F5F9] text-2xl xl:text-3xl font-semibold">
                      The Open Day
                    </p>
                    <div className=" flex flex-col gap-[8px]">
                      <p className="text-[#CBD5E1] overflow-y-auto event-card-p text-sm xl:text-lg sm:h-[150px] lg:h-[202px] xl:h-[240px] 2xl:h-[200px]">
                        Elec Open Day 2024 An exciting event that offers a rich
                        experience in technology, innovation, and creativity. We
                        work on a variety of fields, including AI, design,
                        coding, and more. With interactive activities,
                        innovative project displays, and plenty of networking
                        opportunities, this event is designed for those
                        passionate about learning, growth, and exploring the
                        endless possibilities within the tech world. Join us to
                        connect with a crew eager to collaborate and discover
                        new opportunities.
                      </p>
                      <div className="flex flex-col gap-[4px]">
                        <div className="flex items-center text-[#94B8A3] text-lg xl:text-xl">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          <span>
                            Saturday, November 15, 2023 | 2:00 PM - 5:00 PM
                          </span>
                        </div>
                        <p className="text-[#CBD5E1] text-md xl:text-lg">
                          <strong>Location:</strong> Engineering Building, Room
                          301
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-[15px] rounded-lg bg-[#1E88E5] hover:bg-[#1976D2] text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative pt-[120px]">
            <div className=" absolute line-center h-[90%] sm:h-[77%] z-[-1] w-[3px] bg-[#18aeed]"></div>
            <div>
              <h1 className="text-5xl font-dtFont text-center sm:text-6xl font-bold mb-6 text-transparent bg-clip-text text-white">
                Previous Elec Events
              </h1>
            </div>
            <div className="flex mt-[80px] flex-col gap-[120px]">
              <EventCard
                title={"Project-0"}
                location={"MBU - M'sila"}
                desc={
                  "The ultimate test of skills and teamwork. Project 0 challenged participants with AI, design, and cybersecurity tasks that grew in complexity in every  wave ,pushing teams to innovate and collaborate under pressure. An intense yet rewarding experience crafted for those ready to step up their game."
                }
                date={"April, 25, 2024"}
                image={project0}
                images={poImages}
              />
              <EventCard
                title={"CO-Scape"}
                images={coImages}
                date={"February 15, 2024"}
                location={"ENSTI - Annaba"}
                desc={
                  "Organized by: Elec Msila, Alpha ESI, and Zenith Annaba An adventurous, crime-themed event blending the thrill of discovery with real-world challenges in cybersecurity, artificial intelligence, marketing, and UI/UX design... Participants navigated various thematic rooms, solving complex puzzles and technical challenges designed to push boundaries and foster creativity."
                }
                image={co}
              />
              <EventCard
                title={"Startup City Hackathon"}
                date={"July 7, 2023"}
                location={"MBU - M'sila"}
                desc={
                  "Organized by: Elec Club & Inc Club, A high-energy 58-hour hackathon where 8 teams competed to bring innovative startup ideas to life. This evennt was organised to challenge the participant  problem-solving skills, and promote collaboration in a perfect creative environment."
                }
                image={startUpCity}
                images={startUpImages}
              />
              <EventCard
                title={"Designer's Day"}
                desc={
                  "A one-day event crafted for budding designers. The morning focused on theoretical knowledge to build a solid foundation in design principles. In the afternoon, participants dove into hands-on workshops, exploring essential tools like Photoshop and Illustrator to bring creative ideas to life."
                }
                date={"February, 16, 2023"}
                location={"MBU - M'sila"}
                image={des}
                images={designersDay}
              />
              <EventCard
                title={"Elec Work Shops"}
                location={"MBU - M'sila & Online"}
                desc={
                  "Our club offers a variety of interactive workshops, both online and on-site, that delve into design, coding, AI, and electronics. These sessions are designed to equip members with practical skills and hands-on experience in diverse tech fields."
                }
                image={elec}
                images={workshops}
              />
            </div>
          </div>
        </div>

        {/* Animated electric sparks */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#3B82F6] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `spark ${1 + Math.random() * 2}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spark {
          0% {
            transform: scale(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Event;
