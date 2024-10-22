import React, { useState } from "react";
import logo from "../images/photo_2024-10-19_19-19-49.jpg";
import setting from "../images/setting.png";
import { Link } from "react-scroll";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black fixed border-b-[1px] border-Charcoal w-full z-50 overflow-hidden">
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
            <img src={logo} alt="logo" className="w-[50px] h-[60px]" />
            <h1 className="text-white text-2xl font-bold">Elec Club</h1>
          </Link>

          {/* Links for Desktop */}
          <div className="links hidden md:flex items-center gap-[25px]">
            <Link
              to="home"
              className="text-white text-lg linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-white text-lg linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="event"
              className="text-white text-lg linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Events
            </Link>
            <Link
              to="activities"
              className="text-white text-lg linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Activities
            </Link>
            <Link
              to="members"
              className="text-white text-lg linkes-hover font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            >
              Members
            </Link>
            <Link
              to="join"
              className="text-white cursor-pointer bg-blue cursor-pointLink text-lg font-semibold py-[7px] px-[25px] bg-blue-500 rounded-xl hover:bg-blue-600 transition-all"
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
