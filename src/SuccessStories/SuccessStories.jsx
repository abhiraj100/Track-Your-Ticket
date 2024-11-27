import React from "react";

const data = [
  {
    img: "01.png",
    title: "Threads",
    desc: '"Automate Support Tickets for Instant Resolution!"',
  },
  {
    img: "02.png",
    title: "Stock Mint",
    desc: '"Optimize Your Ticketing System for Peak Performance!"',
  },
  {
    img: "03.png",
    title: "Eleganza",
    desc: '"Streamline Support, Maximize Efficiency"',
  },
  {
    img: "04.png",
    title: "Estetico",
    desc: '"Empower Your Workflow with Smart Ticketing Solutions!"',
  },

];

const SuccessStories = () => {
  return (
    <div className="mx-auto bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF] py-10">
      <div className="mx-auto container flex flex-col space-y-6">
        {/* Header Section */}
        <div className="text-center">
          {/* <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-medium font-sans text-[#3A6EA5]"> */}
          <h2 className="text-[30px]  font-medium font-sans text-[#3A6EA5]">
            Our Customer Success Stories
          </h2>
          <p className="text-[20px] font-medium font-sans text-black">
            Explore real-world testimonials of businesses that have transformed
            their support operations with T-Rack.
          </p>
        </div>

        {/* Row Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 w-[300px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-[#3A6EA5]">{item.title}</h3>
              <p className="text-center text-sm text-black mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;




// import React from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// const SuccessStories = () => {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       };

//   return (
//     <div className="mx-auto bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF]">
//       <div className="mx-auto container flex flex-col justify-center space-y-6">
//         {/* Header Section */}
//         <div className="flex flex-col">
//           <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-center font-medium font-sans text-[#3A6EA5]">
//             Our Customer Success Stories
//           </h2>
//           <p className="text-[20px] text-center font-medium font-sans text-black">
//             Explore real-world testimonials of businesses that have transformed
//             their support operations with T-Rack.
//           </p>
//         </div>

//         {/* Slider Section */}
//         <div className="slider-container ">
//           <Slider {...settings}>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
//             <div className="flex flex-col">
//             <img  src="01.png"/>
//             </div>
            
//           </Slider>
//         </div>

//         {/* What Makes Our Tool Stand Out Section */}
//         <div>
//           <h2 className="text-[35px] md:text-[50px] lg:text-[60px] text-center font-medium font-sans text-[#3A6EA5]">
//             What makes our tool stand out!
//           </h2>
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-[50%] p-4 lg:p-10">
//               <img src="./Group 23.png" alt="Dashboard Reports" />
//             </div>
//             <div className="flex flex-col md:w-[50%] justify-center px-4 md:px-16">
//               <h3 className="text-[30px] md:text-[48px] text-[#3A6EA5]">
//                 Dashboard Reports
//               </h3>
//               <p className="text-[20px] text-[#3A6EA5]">
//                 Visualize your support operations in real-time. Track ticket
//                 status, analyze performance, and identify trends with our
//                 intuitive dashboard.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Create Tickets Section */}
//         <div>
//           <div className="flex flex-col md:flex-row">
//             <div className="flex flex-col md:w-[55%] justify-center px-4 md:px-10 space-y-2">
//               <h3 className="text-[30px] md:text-[30px] lg:text-[35px] text-[#3A6EA5]">
//                 Create tickets automatically with AI
//               </h3>
//               <p className="text-[20px] text-[#3A6EA5] lg:pr-24">
//                 Our advanced AI algorithms analyze incoming requests, extract
//                 key information, and automatically create comprehensive ticket
//                 descriptions. This not only saves time for your support team but
//                 also ensures accuracy and consistency in ticket creation.
//               </p>
//               <div>
//                 <img
//                   src="./adobe illustrator icon.png"
//                   className="ml-16 md:ml-0 lg:w-[120px] lg:h-[120px]"
//                   alt="Illustrator Icon"
//                 />
//               </div>
//             </div>
//             <div className="lg:w-[45%] md:w-[60%] md:mt-20 lg:mt-0 p-4 lg:p-10">
//               <img src="./Group 23.png" alt="AI Ticket Creation" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;
