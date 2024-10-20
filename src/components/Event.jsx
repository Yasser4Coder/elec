import React, { useState, useEffect } from "react";
import { CalendarIcon, ZapIcon } from "lucide-react";

const Event = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2024-10-29T08:00:00");

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
      className="w-full py-12 md:py-24 lg:py-32 bg-[#111827] overflow-hidden relative"
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
            stroke="currentColor"
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
            <h1 className="text-5xl text-center sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#18aeed] via-[#f2f2f2] to-[#18aeed] animate-gradient">
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
                  <span className="text-3xl font-bold text-[#3B82F6]">
                    {item.value}
                  </span>
                  <span className="text-sm text-[#71717A]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md perspective-1000">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9333EA] to-[#3B82F6] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-[#1F2937] ring-1 ring-[#0F172A] rounded-lg leading-none flex items-top justify-start space-x-6 transform transition duration-500 hover:scale-105 hover:rotate-1">
                <ZapIcon className="w-8 h-8 text-[#9333EA]" />
                <div className="space-y-2">
                  <p className="text-[#F1F5F9] font-semibold">
                    Circuit Design Workshop
                  </p>
                  <p className="text-[#CBD5E1] text-sm">
                    Learn the fundamentals of circuit design
                  </p>
                  <div className="flex items-center text-[#94B8A3] text-xs">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>Saturday, November 15, 2023 | 2:00 PM - 5:00 PM</span>
                  </div>
                  <p className="text-[#CBD5E1] text-sm">
                    <strong>Location:</strong> Engineering Building, Room 301
                  </p>
                  <button className="w-full py-[15px] rounded-lg bg-[#1E88E5] hover:bg-[#1976D2] text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                    Register Now
                  </button>
                </div>
              </div>
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
