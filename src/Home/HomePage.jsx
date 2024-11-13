import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] py-10 pb-20 to-[#EDF7FD] mx-auto relative">
      <img src="./waves.png" className="absolute top-[100px] z-20" />
      <div className="container mx-auto flex flex-col items-baseline md:items-baseline lg:flex-row md:justify-between lg:items-start lg:justify-between space-y-2 p-4 lg:p-1">
        <div className="flex flex-col md:flex-row">
          {/* left side  */}
          <div className="flex flex-col ">
            <div className="w-[50%] flex flex-col md:pl-[45px] text-[#3A6EA">
              <p className="text-[#3A6EA5] text-[30px] md:text-[35px] lg:text-[60px]">
                Your tickets, automated and accelerated
              </p>
              <p className="text-[30px]">
                "Streamline your IT operations with our{" "}
                <span className="text-[#4592E3]">
                  powerful ticketing system
                </span>
                . Fast, efficient, and easy to use."
              </p>
              <div className="w-[180px] my-6 bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] px-4 py-1  border-[#3A6EA5] rounded-tl-xl rounded-tr-xl  rounded-bl-xl ">
                <p className="text-white text-[36px] md:text-[28px]">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="">
            <img
              src="./Group10.png"
              className="lg:w-[460px] w-[350px] h-[290px] lg:h-[330px] absolute right-[20px] lg:right-[100px]"
            />
          </div>
        </div>
      </div>
      {/* bottom part  */}
      {/* <div className="flex flex-row justify-between lg:pl-10 py-6">
        <img src="01.png" className="w-[200px] h-[100px]" />
        <img src="02.png" className=" flex items-center lg:w-[180px] lg:h-[80px] w-[150px] h-[60px] mt-4 md:mt-0" />
        <img src="03.png" className="w-[200px] h-[100px]" />
        <img src="04.png" className="w-[200px] h-[100px]" />
        <img src="05.png" className="w-[100px] h-[100px]" />
      </div> */}
    </div>
  );
};

export default HomePage;
