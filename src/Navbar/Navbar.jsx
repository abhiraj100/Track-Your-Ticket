import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [language, setLanguage] = useState("ENG");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-[140px] h-auto object-contain"
          />
          <ul className="flex flex-col md:flex-row w-[800px] justify-center items-center p-2 sm:bg-gray-100 md:bg-transparent space-y-2 md:space-y-0 md:space-x-6 text-[18px] md:text-[20px] lg:text-[22px] font-normal text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Our Clients</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-row items-center space-x-6 mt-4 md:mt-0">
          {/* Get Started Button */}
          <button className="bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] px-4 py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl text-white text-[18px] md:text-[20px] shadow-md hover:shadow-lg">
            Get Started
          </button>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[2px] h-[50px] bg-gray-300"></div>

          {/* Language Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <span className="text-[18px] md:text-[20px]">{language}</span>
              {dropdownOpen ? (
                <IoIosArrowUp size={20} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageChange("ENG")}
                >
                  English
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguageChange("Hindi")}
                >
                  Hindi
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
