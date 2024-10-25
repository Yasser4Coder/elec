import { ZapIcon, UserIcon, BoltIcon } from "lucide-react";
import yasser from "../images/2--.jpg";
import TahaLaib from "../images/4----.jpg";
import yazid from "../images/3 ))).jpg";
import Lina from "../images/IMG_9282.jpg";
import Mohamed from "../images/1 .jpg";
import taha from "../images/taha.jpg";
import khalil from "../images/khalil.jpg";
import chourouk from "../images/chourouk.jpg";
import issra from "../images/issra.jpg";
const members = [
  {
    name: "Taha Rouabhi",
    role: "President",
    avatar: taha,
  },
  {
    name: "Khalil Benchebha",
    role: "Vice President HR team manager",
    avatar: khalil,
  },
  {
    name: "Taha Laib",
    role: "Vice President ER team manager",
    avatar: TahaLaib,
  },
  {
    name: "Mohamed Lazili",
    role: "Elec Lab Manager",
    avatar: Mohamed,
  },
  {
    name: "Yazid Bekkai",
    role: "Dev Team Manager Mobile developer",
    avatar: yazid,
  },
  {
    name: "Chourouk Mihoubi",
    role: "General Secretary",
    avatar: chourouk,
  },
  {
    name: "Yasser Benseghier",
    role: "Dev Team Manager Web Developer",
    avatar: yasser,
  },
  {
    name: "Lina Abderrahim",
    role: "Media Team Manager",
    avatar: Lina,
  },

  {
    name: "Israa Benaros",
    role: "Finance Team Manager",
    avatar: issra,
  },
  {
    name: "chaba",
    role: "Finance Team Manager",
    avatar: "",
  },
  {
    name: "",
    role: "Finance Team Manager",
    avatar: "",
  },
];
const OurTeam = () => {
  return (
    <section
      id="members"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-100 to-blue-100 overflow-hidden relative"
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#2563EB] mb-4">
            Meet Our Elec Team
          </h2>
          <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
            The bright sparks behind our club's success!
          </p>
        </div>

        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-[#BFDBFE] mb-4 overflow-hidden relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#3B82F6]/70">
                      <UserIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#4B5563]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
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
