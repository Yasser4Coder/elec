import {
  CpuIcon,
  RocketIcon,
  BrainIcon,
  LightbulbIcon,
  WrenchIcon,
} from "lucide-react";

const activities = [
  {
    name: "Circuit Design Workshops",
    icon: CpuIcon,
    description: "Learn to design and build your own circuits",
  },
  {
    name: "Robotics Projects",
    icon: RocketIcon,
    description: "Create autonomous robots and participate in competitions",
  },
  {
    name: "AI & Machine Learning",
    icon: BrainIcon,
    description: "Explore the intersection of AI and electrical engineering",
  },
  {
    name: "Energy Efficiency Hackathons",
    icon: LightbulbIcon,
    description: "Develop innovative solutions for energy conservation",
  },
  {
    name: "Industry Site Visits",
    icon: WrenchIcon,
    description: "Tour leading tech companies and power plants",
  },
];

const Activities = () => {
  return (
    <section
      id="activities"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#111827] overflow-hidden relative"
    >
      {/* Animated circuit board background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M10,90 Q90,90 90,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
          M10,90 Q90,90 90,10;
          M10,10 Q90,10 90,90;
          M50,10 Q10,50 50,90;
          M10,90 Q90,90 90,10
        "
            />
          </path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#18aeed] via-[#f2f2f2] to-[#18aeed] animate-gradient">
            Electrifying Activities
          </h1>
          <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
            Spark your curiosity with our high-voltage events!
          </p>
        </div>

        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-[#1F2937] rounded-xl border-[#42A5F5] hover:border-[#1E88E5] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(66,153,225,0.5)]"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E3A8A] mb-4 flex items-center justify-center">
                    <activity.icon className="w-8 h-8 text-[#42A5F5]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#42A5F5] mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-[#A1A1AA]">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing electric currents */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#42A5F5] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px 2px rgba(66, 153, 225, 0.7)",
            animation: `glow ${2 + Math.random() * 4}s linear infinite`,
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes glow {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(0);
          }
          50% {
            opacity: 1;
            transform: scale(1) translateY(-20px);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translateY(-40px);
          }
        }
      `}</style>
    </section>
  );
};

export default Activities;
