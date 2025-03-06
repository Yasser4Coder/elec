import React from "react";
import { ChevronRight } from "lucide-react";
import BgAnimation from "./BgAnimation";
import logo from "../images/elecBlueLogo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import icon from "../images/app/icon.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" bg-[#111827] font-popinFont relative min-h-[100vh] pt-[20px] overflow-hidden flex items-center justify-center"
    >
      <div className=" hidden lg:block absolute right-0 top-[20%]">
        <svg
          width="120"
          height="210"
          viewBox="0 0 201 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M247.004 15.9858C256.53 20.1603 265.804 25.178 274.713 31.0789C277.76 33.1208 278.559 37.2614 276.441 40.2729C274.433 43.0536 270.559 43.8095 267.705 41.9167C259.414 36.4239 250.754 31.7002 241.882 27.8189C186.265 3.50691 120.852 10.8582 73.1461 49.3021C22.51 90.0859 1.30553 159.121 19.3312 222.763C20.267 226.062 18.3858 229.527 15.1281 230.615C11.6425 231.745 7.90959 229.715 6.93161 226.188C-12.4396 157.653 10.4602 83.2884 65.0782 39.3072C116.5 -2.29131 187.085 -10.2311 247.004 15.9858ZM54.9524 270.993C57.8173 256.532 48.4563 242.443 33.962 239.578C19.4677 236.712 5.42182 246.076 2.5576 260.575C-0.307292 275.035 9.05375 289.124 23.5481 291.989C38.0424 294.855 52.0875 285.453 54.9524 270.993Z"
            fill="#1CB5E0"
          />
        </svg>
      </div>
      <div className=" hidden lg:block absolute left-0 bottom-[20%]">
        <svg
          width="120"
          height="210"
          viewBox="0 0 174 271"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-61.9844 261.876C-71.756 258.944 -81.3326 255.248 -90.6035 250.744C-93.776 249.182 -94.8458 245.59 -92.9336 242.765C-91.116 240.151 -87.3048 239.178 -84.3347 240.623C-75.7059 244.816 -66.7618 248.301 -57.6606 251.026C-0.612331 268.089 64.1076 256.427 109.12 218.719C156.9 178.714 173.472 116.097 151.296 61.3434C150.145 58.5047 151.791 55.2976 154.966 54.0797C158.366 52.8066 162.222 54.303 163.43 57.3396C187.271 116.306 169.361 183.762 117.824 226.904C69.3151 267.691 -0.52143 280.281 -61.9844 261.876ZM112.598 21.5858C110.699 34.5775 120.962 46.2739 135.6 47.6572C150.237 49.0404 163.62 39.6646 165.516 26.6393C167.416 13.6475 157.153 1.95112 142.515 0.567882C127.877 -0.815358 114.498 8.59405 112.598 21.5858Z"
            fill="#1CB5E0"
          />
        </svg>
      </div>
      <div className=" container mx-auto">
        <div className="relative">
          <div className=" absolute w-full h-full">
            <BgAnimation />
          </div>
          <motion.div
            className="flex flex-col items-center text-center gap-[20px]"
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logo}
              width={180.65}
              alt=""
              className="mb-5 mx-auto z-10"
            />
            <svg
              className="responsive-svg z-10 w-[350px] sm:w-[407px] h-[57px] xl:w-[507px] xl:h-[57px]"
              width="507"
              height="57"
              viewBox="0 0 607 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.7766 9.52174V25.1576H49.0694V33.4891H8.7766V47.7554H54.3936V56.087H0V1.19021H54.409V9.52174H8.7766ZM79.0357 47.2989H122.075V56.087H70.2591V1.19021H79.0357V47.2989ZM144.983 9.52174V25.1576H185.276V33.4891H144.983V47.7554H190.6V56.087H136.191V1.19021H190.6V9.52174H144.983ZM202.768 29.462V27.538C202.768 13.0924 211.115 0 237.721 0C259.417 0 271.462 9.97825 272.245 20.9511H262.685C261.657 14.5435 252.006 9.14672 237.721 9.14672C219.048 9.14672 211.729 16.6467 211.729 27.538V29.462C211.729 40.3533 219.048 47.8533 237.721 47.8533C253.648 47.8533 260.706 42.6359 262.593 35.4946H272.153C270.434 47.1196 261.044 57 237.721 57C211.115 57 202.768 43.9076 202.768 29.462ZM320.731 29.462V27.538C320.731 13.0924 329.078 0 355.684 0C377.38 0 389.425 9.97825 390.208 20.9511H380.648C379.62 14.5435 369.969 9.14672 355.684 9.14672C337.011 9.14672 329.692 16.6467 329.692 27.538V29.462C329.692 40.3533 337.011 47.8533 355.684 47.8533C371.611 47.8533 378.669 42.6359 380.556 35.4946H390.116C388.397 47.1196 379.007 57 355.684 57C329.078 57 320.731 43.9076 320.731 29.462ZM416.722 47.2989H459.761V56.087H407.945V1.19021H416.722V47.2989ZM470.195 30.6522L470.624 1.38585H480.184V30.6522C480.184 40.3533 486.475 47.2011 502.141 47.2011C518.328 47.2011 524.097 40.7935 524.097 30.6522L524.527 1.38585H534.086V29.3804C534.086 43.288 529.176 57 502.156 57C475.534 57 470.195 43.9076 470.195 30.6522ZM552.253 1.19021H588.066C597.456 1.19021 605.88 5.29891 605.88 15.4565V16.1902C605.88 24.7826 601.323 26.9022 600.034 27.538C600.801 28.2717 607 29.2826 607 37.9565V39.3261C607 50.5761 597.364 56.0707 583.754 56.0707H552.253V1.19021ZM588.066 22.5163C594.357 22.5163 596.935 21.3261 596.935 16.2065V15.4728C596.935 12.6359 594.863 10.3532 588.066 10.3532H561.03V22.5163H588.066ZM583.754 46.9402C594.433 46.9402 598.039 42.3587 598.039 39.3424V37.9728C598.039 32.4946 593.39 32.2989 583.754 32.2989H561.03V46.9402H583.754Z"
                fill="url(#paint0_linear_5_1658)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5_1658"
                  x1="384.353"
                  y1="114.072"
                  x2="-83.2294"
                  y2="-299.063"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00D2FF" />
                  <stop offset="1" stop-color="#3A7BD5" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-2xl z-10 mb-8 max-w-2xl mx-auto text-white">
              On Another level !
            </p>
            <Link
              to="join"
              className=" py-[10px] cursor-pointer px-[30px] flex items-center gap-[5px] rounded-xl bg-transparent border-[#18aeed] text-[#18aeed] border-[2px] font-semibold hover:bg-[#18aeed] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Join Now <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <img
              src={icon}
              alt=""
              className="max-w-[20%] md:max-w-[140px] rounded-2xl"
            />
            <Link
              to="apps"
              rel="noopener noreferrer"
              className=" py-[10px] mb-[60px] text-sm sm:text-2xl cursor-pointer px-[13px] flex items-center gap-[5px] rounded-xl bg-transparent border-[#18aeed] text-[#18aeed] border-[2px] font-semibold hover:bg-[#18aeed] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              تحميل التطبيق
              <ChevronRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
