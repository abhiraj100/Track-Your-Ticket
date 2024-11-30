import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] py-10 pb-20 relative overflow-hidden">
      {/* Background Waves */}
      <img
        src="./waves.png"
        className="absolute top-[100px] z-0 w-full h-auto object-cover"
        alt="Background Waves"
      />

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 px-4 lg:px-16 relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-[#3A6EA5] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug">
            Your tickets, automated and accelerated
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl">
            "Streamline your IT operations with our{" "}
            <span className="text-[#4592E3] font-semibold">
              powerful ticketing system
            </span>
            . Fast, efficient, and easy to use."
          </p>
          <div className="mx-auto lg:mx-0">
            <button className="w-[180px] bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] text-white text-lg md:text-xl py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end flex-1">
          <img
            src="./Group10.png"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[460px] max-w-full h-auto"
            alt="Illustration"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto flex flex-wrap justify-center gap-6 items-center pt-10 px-4">
        <img
          src="01.png"
          className="w-[100px] sm:w-[140px] md:w-[160px] h-auto"
          alt="Brand 1"
        />
        <img
          src="02.png"
          className="w-[80px] sm:w-[100px] md:w-[110px] h-auto"
          alt="Brand 2"
        />
        <img
          src="03.png"
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
          alt="Brand 3"
        />
        <img
          src="04.png"
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
          alt="Brand 4"
        />
      </div>
    </div>
  );
};

export default HomePage;



// import React from "react";

// const HomePage = () => {
//   return (
//     <div className="bg-gradient-to-t from-[#FFFFFF] to-[#EDF7FD] py-10 pb-20 relative">
//       <img
//         src="./waves.png"
//         className="absolute top-[100px] z-0 w-full object-cover"
//         alt="Background Waves"
//       />
      
//       <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-10 lg:space-y-0 p-4 lg:px-16 relative z-10">
//         {/* Left Section */}
//         <div className="flex-1 flex flex-col space-y-6 text-center lg:text-left">
//           <h1 className="text-[#3A6EA5] text-lg sm:text-3xl md:text-4xl lg:text-4xl  font-medium leading-tight">
//             Your tickets, automated and accelerated
//           </h1>
//           {/* <p className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl"> */}
//           <p className="text-gray-700 text-xl">
//             "Streamline your IT operations with our{" "}
//             <span className="text-[#4592E3] font-semibold">
//               powerful ticketing system
//             </span>
//             . Fast, efficient, and easy to use."
//           </p>
//           <div className="mx-auto lg:mx-0">
//             <button className="w-[180px] bg-gradient-to-t from-[#3A6EA5] to-[#4592E3] text-white text-lg md:text-xl py-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-lg">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex justify-center lg:justify-end flex-1">
//           <img
//             src="./Group10.png"
//             className="lg:w-[460px] w-[350px] h-auto"
//             alt="Illustration"
//           />
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="container mx-auto flex flex-row justify-center gap-10 items-center pt-10 ">
//         <img src="01.png" className="w-[160px]  h-auto" alt="Brand 1" />
//         <img src="02.png" className="w-[110px]  h-auto" alt="Brand 2" />
//         <img src="03.png" className="w-[160px]  h-auto" alt="Brand 3" />
//         <img src="04.png" className="w-[160px]  h-auto" alt="Brand 4" />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

