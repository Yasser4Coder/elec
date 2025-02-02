import React, { useState } from "react";
import "../firebase";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

const closeRegistrations = true;

const JoinForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [faculty, setFaculty] = useState("");
  const [skilles, setSkilles] = useState("");
  const [areasOfInterest, setAreasOfInterest] = useState([]);
  const [WhyUS, setWhyUS] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const db = getFirestore();

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setAreasOfInterest((prev) => {
      if (prev.includes(value)) {
        return prev.filter((interest) => interest !== value); // Remove if already selected
      } else if (prev.length < 3) {
        return [...prev, value]; // Add if less than 3 selected
      } else {
        return prev; // Keep as is if 3 are already selected
      }
    });
  };

  const checkIfSubmittedRecently = async () => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const lastSubmission = querySnapshot.docs[0].data().timestamp;
      const now = Timestamp.now();
      const differenceInHours = (now.seconds - lastSubmission.seconds) / 3600;

      if (differenceInHours < 24) {
        return true; // User has submitted in the last 24 hours
      }
    }

    return false; // No recent submission
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    // // close reg
    // setLoading(false);
    // setError("We are sorry the registrations are closed");
    // // here all

    if (areasOfInterest.length < 1) {
      setError("Please select one area of interest.");
      setLoading(false);
      return;
    }

    try {
      const recentlySubmitted = await checkIfSubmittedRecently();

      if (recentlySubmitted) {
        setError("You can only submit one application.");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "users"), {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        areasOfInterest: areasOfInterest,
        skills: skilles,
        WhyUS: WhyUS,
        Faculty: faculty,
        timestamp: Timestamp.now(), // Store the current time of submission
      });

      setLoading(false);
      setMessage("Welcome to Our Crew!");

      setTimeout(() => {
        setMessage(false);
      }, 4000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <section
      id="join"
      className="w-full font-popinFont flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-yellow-100 via-blue-100 to-green-100 overflow-hidden relative"
    >
      {loading && (
        <div className="center-loading-spinner flex items-center justify-center">
          <div className="loader"></div>
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
              values="M0,50 Q25,25 50,50 T100,50; M0,50 Q25,75 50,50 T100,50; M0,50 Q25,25 50,50 T100,50"
            />
          </path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-dtFont mt-[40px] font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-[#2563EB] mb-4">
            Join Our Crew!
          </h2>
          <p className="text-xl text-gray-600">
            Connect with fellow enthusiasts and spark your electrical
            engineering journey!
          </p>
        </div>

        <div className="max-w-5xl relative p-[40px] mx-auto backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
          close the registrations
          {closeRegistrations && (
            <div className="absolute w-full h-full flex items-center justify-center left-0 top-0 bg-[#f1f1f1ad]">
              <div className="p-[20px] w-[80%] text-center font-bold text-[red] text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl rotate-[-25deg] bg-[white] border-[4px] rounded-lg border-[red]">
                Registrations are closed.
              </div>
            </div>
          )}
          <form className="flex flex-col gap-[15px]" onSubmit={handleSubmit}>
            {/* Form content remains the same */}
            <div className=" flex flex-col sm:flex-row gap-[60px] h-full">
              <div className="flex w-full flex-col items-center justify-between gap-[20px] sm:gap-[30px]">
                <div className="flex flex-col w-full gap-[15px]">
                  <label
                    htmlFor="full-name"
                    className="flex items-center gap-[10px] text-black"
                  >
                    *Full Name :
                  </label>
                  <input
                    required
                    placeholder="Enter your full name..."
                    type="text"
                    id="full-name"
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-[45px] bg-[#EEEEEE] rounded-md px-[15px]"
                  />
                </div>
                <div className="flex w-full flex-col gap-[15px]">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-[10px] text-black"
                  >
                    *Email :
                  </label>
                  <input
                    required
                    placeholder="info@xyz.com"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[45px] bg-[#EEEEEE] rounded-md px-[15px]"
                  />
                </div>
                <div className="flex w-full flex-col gap-[15px]">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-[10px] text-black"
                  >
                    *Phone Number :
                  </label>
                  <input
                    required
                    placeholder="0666666666"
                    type="number"
                    id="email"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-[45px] bg-[#EEEEEE] rounded-md px-[15px]"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col min-h-full gap-[15px]">
                <label
                  htmlFor="skills"
                  className="flex items-center gap-[10px] text-black"
                >
                  areas of interest :
                </label>
                <div className="py-[20px] grid grid-flow-col-1 min-h-[87.5%] sm:grid-cols-2 gap-[20px] flex-wrap bg-[#EEEE]">
                  {[
                    "WEB DEVELOPMENT",
                    "ROBOTICS",
                    "ELECTRONICS",
                    "AI",
                    "GRAPHIC DESIGN",
                    "UI UX DESIGN",
                    "PHOTOGRAPHY",
                    "CYBER SECURITY",
                    "VIDEO EDITING",
                    "APP DEVELOPMENT",
                  ].map((interest) => (
                    <div
                      key={interest}
                      className="pl-[15px] flex items-center gap-[15px]"
                    >
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        value={interest}
                        onChange={handleCheckboxChange}
                        checked={areasOfInterest.includes(interest)}
                        disabled={
                          !areasOfInterest.includes(interest) &&
                          areasOfInterest.length >= 2
                        }
                      />
                      <label>{interest}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-[60px]">
              <div className="w-full flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[15px]">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-[10px] text-black"
                  >
                    Faculty :
                  </label>
                  <input
                    placeholder="Enter faculty name ..."
                    type="text"
                    onChange={(e) => setFaculty(e.target.value)}
                    className="h-[45px] bg-[#EEEEEE] rounded-md px-[15px]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-[15px]">
                <label
                  htmlFor="skills"
                  className="flex items-center gap-[10px] text-black"
                >
                  Your Skills :
                </label>
                <input
                  placeholder="Other Skills..."
                  type="text"
                  id="skills"
                  onChange={(e) => setSkilles(e.target.value)}
                  className="h-[45px] bg-[#EEEEEE] rounded-md px-[15px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              <label
                htmlFor="whyus"
                className="flex items-center gap-[10px] text-black"
              >
                WHY DO YOU WANT TO JOIN US? :
              </label>
              <textarea
                placeholder="I want to join ELEC :"
                id="whyus"
                onChange={(e) => setWhyUS(e.target.value)}
                className="h-[150px] bg-[#EEEE] rounded-lg px-[15px] py-[5px]"
              />
            </div>

            <button className="bg-blue font-dtFont font-semibold flex items-center justify-center gap-[10px] text-center py-[13px] rounded-lg text-white">
              SEND REGISTRATION
            </button>

            {message && (
              <div className="text-[#008000] w-full flex items-center justify-center">
                {message}
              </div>
            )}
            {error && (
              <div className="text-[#FF0000] w-full flex items-center justify-center">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
