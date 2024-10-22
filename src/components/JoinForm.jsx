import React from "react";
import "../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import { useState } from "react";
import {
  ZapIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  RocketIcon,
} from "lucide-react";

const JoinForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [areasOfInterest, setAreasOfInterest] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await addDoc(collection(db, "users"), {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        areasOfInterest: areasOfInterest,
      });
      setLoading(false);
      setMessage("Wellcom to Our Crew!");
      setTimeout(() => {
        setMessage(false);
      }, 4000);
    } catch (error) {
      setError(error.message); // Display error message if sign-up fails
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };
  return (
    <section
      id="join"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-100 via-blue-100 to-green-100 overflow-hidden relative"
    >
      {loading && (
        <div className="center-loading-spinner flex items-center justify-center">
          <div class="loader"></div>
        </div>
      )}

      {/* Animated circuit paths */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,50 Q25,25 50,50 T100,50;
              M0,50 Q25,75 50,50 T100,50;
              M0,50 Q25,25 50,50 T100,50
            "
            />
          </path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl mt-[40px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#2563EB] mb-4">
            Join Our Crew!
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow enthusiasts and spark your electrical
            engineering journey!
          </p>
        </div>

        <div className="max-w-xl p-[40px] mx-auto bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center text-xl font-bold mb-[20px]">
            Membership Application
          </div>
          <form className=" flex flex-col gap-[15px]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[15px]">
              <label
                htmlFor="full-name"
                className="flex items-center gap-[10px] text-[#2196F3]"
              >
                <UserIcon /> Full Name
              </label>
              <input
                required
                type="text"
                id="full-name"
                onChange={(e) => setFullName(e.target.value)}
                className="h-[40px] border-[1px] border-blue rounded-lg px-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <label
                htmlFor="email"
                className="flex items-center gap-[10px] text-[#2196F3]"
              >
                <MailIcon />
                Email
              </label>
              <input
                required
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="h-[40px] border-[1px] border-blue rounded-lg px-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <label
                htmlFor="phone"
                className="flex items-center gap-[10px] text-[#2196F3]"
              >
                <PhoneIcon />
                Phone Number
              </label>
              <input
                required
                type="number"
                id="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-[40px] border-[1px] border-blue rounded-lg px-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <label
                htmlFor="phone"
                className="flex items-center gap-[10px] text-[#2196F3]"
              >
                <RocketIcon />
                Areas of Interest
              </label>
              <textarea
                required
                id="interest"
                onChange={(e) => setAreasOfInterest(e.target.value)}
                className="h-[120px] border-[1px] border-blue rounded-lg px-[15px] py-[5px]"
              ></textarea>
            </div>
            <button className=" bg-blue flex items-center justify-center gap-[10px] text-center py-[13px] rounded-lg text-white">
              <ZapIcon />
              Power Up My Membership!
            </button>
            {message && (
              <div className="text-[#008000] w-full flex items-center justify-center">
                {message}
              </div>
            )}
            {error && (
              <div
                className="text-[#FF0000]"
                w-full
                flex
                items-center
                justify-center
              >
                {error}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Floating electrical components */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-blue-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {["⚡", "🔌", "💡", "🔋", "🔬", "⚙️"][i]}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
};

export default JoinForm;
