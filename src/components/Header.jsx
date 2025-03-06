import React, { useState } from "react";
import logo from "../images/photo_2024-10-19_19-19-49-removebg-preview.png";
import ElecClub from "../images/elecClub.png";
import setting from "../images/setting.png";
import { Link } from "react-scroll";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-dtFont relative overflow-hidden border-b-[1px] bg-[#111827] border-[#18adedaf]">
      {/* Circle Animation */}
      <div className="Elec-circle absolute z-50 bottom-[-6px] flex items-center">
        <div className="h-[3px] line w-[80px]  bg-blue"></div>
        <div className="w-[10px] h-[12px] rounded-full bg-blue"></div>
      </div>

      <div className="container mx-auto py-[10px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            className="logo cursor-pointer flex items-center gap-[10px]"
          >
            <img src={logo} alt="logo" width={40} />
            <img src={ElecClub} alt="" width={60} />
          </Link>

          {/* Links for Desktop */}
          <div className="links hidden md:flex items-center gap-[20px] lg:gap-[40px]">
            <Link
              to="home"
              className="text-white text-md linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-white text-md linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="event"
              className="text-white text-md linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Events
            </Link>
            <Link
              to="members"
              className="text-white text-md linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Members
            </Link>
            <Link
              to="apps"
              className="text-white text-md linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Our App
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-[20px]">
            <Link
              to="join"
              className=" py-[6px] cursor-pointer px-[30px] flex items-center gap-[5px] rounded-xl bg-[#18aeed] border-[#18aeed] text-white border-[2px] font-semibold hover:bg-[#18aeed] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Join
            </Link>
          </div>

          {/* Settings Icon for Mobile */}
          <div className="md:hidden">
            <img
              src={setting}
              alt="settings"
              className="cursor-pointer w-[30px] h-[30px]"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {/* Side Menu for Mobile (appears from the right) */}
      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[250px] h-full bg-blue text-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center p-6 space-y-6">
          <Link
            onClick={toggleMenu}
            to="home"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="about"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="event"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            Events
          </Link>
          <Link
            onClick={toggleMenu}
            to="activities"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            Activities
          </Link>
          <Link
            onClick={toggleMenu}
            to="members"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            Members
          </Link>
          <Link
            onClick={toggleMenu}
            to="apps"
            className="text-lg font-semibold cursor-pointer hover:text-gray transition-colors"
          >
            Our App
          </Link>
          <Link
            onClick={toggleMenu}
            to="join"
            className="text-lg font-semibold text-black py-[10px] px-[30px] bg-gray rounded-xl hover:bg-gray transition-all"
          >
            Join
          </Link>
        </div>
      </div>
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
