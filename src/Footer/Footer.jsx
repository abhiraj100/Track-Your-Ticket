import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#EDF7FD] mx-auto ">
        <div className="container mx-auto bg-[#EDF7FD] pt-8 pb-28 px-8 ">
          <div className="sm:grid sm:grid-cols-2 md:flex md:flex-row justify-between">
          {/* <div className="grid  grid-cols-5  justify-between"> */}
            {/* first div  */}
            <div className="md:w-[25%] md:mt-0 mt-4 flex flex-col  ">
              <div className="flex flex-row items-center space-x-1">
                <div className="">
                  <img src="./sym.png" className="w-[25px] h-[25px]  " />
                </div>
                <div className="text-[34.19px] text-black font-I">T-rack</div>
              </div>
              <div className="md:mt-2 lg:mt-10">
                <p className="text-black text-[18px] font-semibold font-instrument">
                  Start your 7-day free trial
                </p>
                <p className="text-[#3D3D3D] text-[14px] text-justify font-instrument">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  vehicula condimentum.
                </p>
              </div>
            </div>
            {/* second div  */}
            <div className="md:w-[15%] md:mt-0 mt-4 flex justify-center">
              <ul className="space-y-4">
                <li className="text-black font-bold text-[14px]">Features</li>
                <li className="text-[#666666] text-[14px]">Budgeting</li>
                <li className="text-[#666666] text-[14px]">Savings</li>
                <li className="text-[#666666] text-[14px]">Accounts</li>
                <li className="text-[#666666] text-[14px] flex items-center ">Secured Data <span className="ml-2">
                    <div className="w-[14px] relative h-[14px] rounded-full bg-[#FFF0EB]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#FF4B0E] absolute top-[40%] left-[35%]"></div>
                    </div>
                </span></li>
              </ul>
            </div>
            {/* third div  */}
            <div className="md:w-[15%] md:mt-0 mt-4 flex justify-center">
              <ul className="space-y-4">
                <li className="text-black font-bold text-[14px]">Solutions</li>
                <li className="text-[#666666] text-[14px]">
                  Financial Planing
                </li>
                <li className="text-[#666666] flex items-center text-[14px]">Vario FinAI <span className="ml-2">
                    <div className="w-[14px] relative h-[14px] rounded-full bg-[#FFF0EB]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#FF4B0E] absolute top-[40%] left-[35%]"></div>
                    </div>
                </span></li>
                <li className="text-[#666666] text-[14px]">Security</li>
                <li className="text-[#666666] text-[14px]">Fraud Detections</li>
              </ul>
            </div>
            {/* fourth div  */} 
            <div className="md:w-[15%] md:mt-0 mt-4 flex justify-center">
              <ul className="space-y-4">
                <li className="text-black font-bold text-[14px]">Resources</li>
                <li className="text-[#666666] text-[14px]">Blog </li>
                <li className="text-[#666666] text-[14px]">Community</li>
                <li className="text-[#666666] text-[14px]">Tutorials</li>
                <li className="text-[#666666] text-[14px] flex items-center">Monitoring <span className="ml-2">
                    <div className="w-[14px] relative h-[14px] rounded-full bg-[#FFF0EB]">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#FF4B0E] absolute top-[40%] left-[35%]"></div>
                    </div>
                </span></li>
              </ul>
            </div>
            {/* fifth div  */}
            <div className="md:w-[15%] md:mt-0 mt-4 flex justify-center">
              <ul className="space-y-4">
                <li className="text-black font-bold text-[14px]">Social</li>
                <li className="text-[#666666] text-[14px] flex items-center  ">
                  Instagram <FaArrowRight className="ml-2" />
                </li>
                <li className="text-[#666666] text-[14px] flex items-center">
                  Linkedin <FaArrowRight className="ml-2" />{" "}
                </li>
                <li className="text-[#666666] text-[14px] flex items-center">
                  Twitter <FaArrowRight className="ml-2" />
                </li>
                <li className="text-[#666666] text-[14px] flex items-center">
                  Facebook <FaArrowRight className="ml-2" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className=" mx-auto bg-[#F5F5F5]  ">
        <div className="container mx-auto p-2">
          <div className="flex flex-row items-center justify-between">
            <div className="text-[#666666] text-[12px]">
              ©2024 Vario All Rights Reserved.
            </div>
            <div className="flex flex-row items-center ">
              <ul className="text-[#666666] space-x-14 flex flex-row text-[12px]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies Settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
