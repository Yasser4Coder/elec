import { ZapIcon, BoltIcon } from "lucide-react";
import img1 from "../images/elecTeam/Card-1.png";
import img2 from "../images/elecTeam/Card-2.png";
import img3 from "../images/elecTeam/Card-3.png";
import img4 from "../images/elecTeam/Card.png";
import img5 from "../images/elecTeam/Card-4.png";
import img6 from "../images/elecTeam/Card-5.png";
import img7 from "../images/elecTeam/Card-6.png";
import img8 from "../images/elecTeam/Card-7.png";
import img9 from "../images/elecTeam/Card-8.png";
import img10 from "../images/elecTeam/Card-9.png";
import img11 from "../images/elecTeam/Card-10.png";
import img12 from "../images/elecTeam/Card-11.png";
const OurTeam = () => {
  return (
    <section
      id="members"
      className="w-full font-popinFont bg-[#111827] py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-100 to-blue-100 overflow-hidden relative"
    >
      {/* Animated circuit illustrations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M10,30 Q30,5 50,30 T90,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
          M10,30 Q30,5 50,30 T90,30;
          M10,60 Q30,35 50,60 T90,60;
          M10,40 Q30,65 50,40 T90,40;
          M10,30 Q30,5 50,30 T90,30
        "
            />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className=" container flex justify-center flex-wrap gap-3 mx-auto">
          <img src={img4} alt="" width={310} />
          <img src={img1} alt="" width={310} />
          <img src={img2} alt="" width={310} />
          <img src={img3} alt="" width={310} />
          <img src={img5} alt="" width={310} />
          <img src={img6} alt="" width={310} />
          <img src={img7} alt="" width={310} />
          <img src={img8} alt="" width={310} />
          <img src={img9} alt="" width={310} />
          <img src={img10} alt="" width={310} />
          <img src={img11} alt="" width={310} />
          <img src={img12} alt="" width={310} />
        </div>
      </div>

      {/* Floating icons */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-[#60A5FA] opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {i % 2 === 0 ? <BoltIcon size={24} /> : <ZapIcon size={24} />}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
