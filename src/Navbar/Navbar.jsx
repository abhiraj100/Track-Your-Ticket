import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] mx-auto ">
      <div className="container mx-auto flex flex-col items-baseline md:items-baseline lg:flex-row md:justify-between lg:items-start lg:justify-between space-y-2 p-4 lg:p-1">
        {/* left side  */}
        <div className="flex md:flew-row space-x-6 md:space-x-10">
          <img src="./logo.png" className="w-[140px] h-[100px]" />
          <ul className="flex flex-col md:flex-row space-x-4 items-center text-[20px] md:text-[24px] lg:text-[28px]">
            <li >Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign in</li>
          </ul>
        </div>
        {/* right side  */}
        <div className="flex flex-row items-center space-x-4 mt-4">
          <div className="mr-10 bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] px-3 py-1  border-[#3A6EA5] rounded-tl-xl rounded-tr-xl  rounded-bl-xl ">
            <p className="text-white text-[24px] md:text-[28px]">Get Started</p>
          </div>
          <div className="w-[2px] h-[80px] bg-gray-400"></div>
          <div className="px-2 flex items-center">ENG{" "}<IoIosArrowDown /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
