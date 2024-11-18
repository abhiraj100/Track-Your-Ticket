import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [language, setLanguage] = useState("ENG");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] mx-auto shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-[140px] h-auto object-contain"
          />
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Features</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Sign in</li>
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


// import React from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] mx-auto ">
//       <div className="container mx-auto flex flex-col items-baseline md:items-baseline lg:flex-row md:justify-between lg:items-start lg:justify-between space-y-2 p-4 lg:p-1">
//         {/* left side  */}
//         <div className="flex md:flew-row space-x-6 md:space-x-10">
//           <img src="./logo.png" className="w-[140px] h-[100px]" />
//           <ul className="flex flex-col md:flex-row space-x-4 items-center text-[20px] md:text-[24px] lg:text-[28px]">
//             <li >Home</li>
//             <li>Features</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//             <li>Sign in</li>
//           </ul>
//         </div>
//         {/* right side  */}
//         <div className="flex flex-row items-center space-x-4 mt-4">
//           <div className="mr-10 bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] px-3 py-1  border-[#3A6EA5] rounded-tl-xl rounded-tr-xl  rounded-bl-xl ">
//             <p className="text-white text-[24px] md:text-[28px]">Get Started</p>
//           </div>
//           <div className="w-[2px] h-[80px] bg-gray-400"></div>
//           <div className="px-2 flex items-center">ENG{" "}<IoIosArrowDown /></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
