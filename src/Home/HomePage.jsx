import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] py-10 pb-20 relative">
      <img
        src="./waves.png"
        className="absolute top-[100px] z-0 w-full object-cover"
        alt="Background Waves"
      />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-10 lg:space-y-0 p-6 lg:px-16 relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-[#3A6EA5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your tickets, automated and accelerated
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            "Streamline your IT operations with our{" "}
            <span className="text-[#4592E3] font-semibold">
              powerful ticketing system
            </span>
            . Fast, efficient, and easy to use."
          </p>
          <div className="mx-auto lg:mx-0">
            <button className="w-[180px] bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] text-white text-lg md:text-xl py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end flex-1">
          <img
            src="./Group10.png"
            className="lg:w-[460px] w-[350px] h-auto"
            alt="Illustration"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-6 py-6 mt-10">
        <img src="01.png" className="w-[120px] sm:w-[150px] lg:w-[200px] h-auto" alt="Brand 1" />
        <img src="02.png" className="w-[100px] sm:w-[140px] lg:w-[180px] h-auto" alt="Brand 2" />
        <img src="03.png" className="w-[120px] sm:w-[150px] lg:w-[200px] h-auto" alt="Brand 3" />
        <img src="04.png" className="w-[120px] sm:w-[150px] lg:w-[200px] h-auto" alt="Brand 4" />
        <img src="05.png" className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto" alt="Brand 5" />
      </div>
    </div>
  );
};

export default HomePage;

