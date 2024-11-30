import React from "react";

const Speciality = () => {
  return (
    <div className="mx-auto bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF]">
      <div className="container mx-auto flex flex-col py-8 px-4">
        <div className="md:w-[60%] flex flex-col mx-auto items-center justify-center text-center space-y-4">
          <h2 className="text-[30px] text-[#3A6EA5] font-sans">What makes our tool special?</h2>
          <p className="text-[17px] text-black">
            T-rack has empowered over 7,500 organizations by delivering customer-driven knowledge management solutions. Here’s why we stand out:
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:mt-10 md:space-x-8">
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <ul className="list-disc text-[#3A6EA5] marker:text-[#3A6EA5] text-[16px] pl-8 space-y-4">
              <li>
                <span className="font-semibold">Customer-Centric Development: </span>
                We build features based on your feedback and needs.
              </li>
              <li>
                <span className="font-semibold">Seamless User Experience: </span>
                Our platform is designed to be intuitive and easy to use, reducing onboarding time.
              </li>
              <li>
                <span className="font-semibold">Scalable Solutions: </span>
                Whether you're a small team or a large enterprise, we scale with your growth.
              </li>
              <li>
                <span className="font-semibold">Continuous Improvement: </span>
                We regularly update our platform to ensure it meets the highest standards.
              </li>
              <li>
                <span className="font-semibold">Reliable Support: </span>
                Our dedicated support team is here to assist you every step of the way.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img src="puz.png" className="w-[300px] md:w-[400px] h-auto object-contain" alt="Specialty Image" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col-reverse md:flex-row mt-8">
          <div className="flex flex-col space-y-4 w-full md:w-1/2 mt-6 md:mt-0 pl-10">
            <h2 className="text-[#3A6EA5] text-[30px] md:text-[40px]">Contact us!</h2>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="text-black">Full Name*</label>
                <br />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full md:w-[450px] border border-[#C9C9C9] rounded-md p-2"
                />
              </div>
              <div>
                <label className="text-black">Work email*</label>
                <br />

                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-full md:w-[450px] border border-[#C9C9C9] rounded-md p-2"
                />
              </div>
              <div>
                <label className="text-black">Company name*</label>
                <br />

                <input
                  type="text"
                  placeholder="Enter your Company name"
                  className="w-full md:w-[450px] border border-[#C9C9C9] rounded-md p-2"
                />
              </div>
              <div>
                <label className="text-black">Phone number*</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Phone number"
                  className="w-full md:w-[450px] border border-[#C9C9C9] rounded-md p-2"
                />
              </div>
            </div>
            <button className="bg-gradient-to-l from-[#3A6EA5] to-[#4592E3] rounded-xl px-6 py-3 text-white text-[20px] md:text-[24px]">
              Submit
            </button>
            <div className="py-4">
              <ul className="space-y-2">
                <li className="text-[18px] md:text-[20px]">Stay up-to-date with the latest news, tips, and offers.</li>
                <li className="text-[18px] md:text-[20px]">Receive exclusive content and special discounts</li>
                <li className="text-[18px] md:text-[20px]">Be the first to know about new product launches.</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[40%]">
            <img src="contact.png" className="w-[250px] md:w-[350px] mt-6 md:mt-0" alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;



// import React from "react";

// const Speciality = () => {
//   return (
//     <div className="mx-auto bg-gradient-to-t from-[#EDF7FD]  to-[#FFFFFF]">
//       <div className="container mx-auto flex flex-col">
//         <div className="md:w-[60%] flex flex-col mx-auto items-center justify-center text-center">
//           {/* <h2 className="lg:text-[48px] text-[30px] text-[#3A6EA5] font-sans"> */}
//           <h2 className="text-[30px] text-[#3A6EA5] font-sans">
//             What makes our tool special?
//           </h2>
//           {/* <p className="lg:text-[20px] px-4 md:px-0  text-black"> */}
//           <p className="text-[17px] px-4 md:px-0  text-black">
//             T-rack has empowered over 7,500 organizations by delivering 
//             customer-driven knowledge management solutions. Here’s why we stand
//             out
//           </p>
//         </div>
//         {/* bottom part  */}
//         <div className="flex flex-col md:flex-row mt-4 md:mt-8">
//           <div className="w-[50%] p-4 flex justify-center">
//             <ul className="list-disc text-[#3A6EA5] marker:text-[#3A6EA5] text-[16px] pl-20 space-y-2 px-4">
//               <li>
//                 Customer-Centric Development:{" "}
//                 <span className="text-black">
//                   We build features based on your feedback and needs.
//                 </span>
//               </li>
//               <li>
//                 Seamless User Experience:{" "}
//                 <span className="text-black">
//                    Our platform is designed to be intuitive and easy to use,
//                   reducing onboarding time.
//                 </span>
//               </li>
//               <li>
//                 Scalable Solutions:{" "}
//                 <span className="text-black">
//                   Whether you're a small team or a large enterprise we scales
//                   with your growth.
//                 </span>
//               </li>
//               <li>
//                 Continuous Improvement:{" "}
//                 <span className="text-black">
//                   We regularly update our platform to ensure it meets the
//                   highest standards.
//                 </span>
//               </li>
//               <li>
//                 Reliable Support:{" "}
//                 <span className="text-black">
//                   Our dedicated support team is here to assist you every step of
//                   the way.
//                 </span>
//               </li>
//             </ul>
//           </div>
//           <div className="w-[50%] flex justify-center">
//             <img src="puz.png" className="w-[400px] h-[300px]" />
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto flex flex-col-reverse md:flex-row ">
//         <div className="flex flex-col space-y-4 w-[50%] mt-6 pl-10">
//           <h2 className="text-[#3A6EA5] text-[30px] md:text-[40px]">Contact us!</h2>
//           <div className="flex flex-col">
//             <label />
//             Full Name*
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="lg:w-[450px] md:w-[320px] w-[300px] border border-[#C9C9C9] rounded-md p-2"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label />
//             Work email*
//             <input
//               type="text"
//               placeholder="Enter your Email"
//               className="lg:w-[450px] md:w-[320px] w-[300px] border border-[#C9C9C9] rounded-md p-2"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label />
//             Company name*
//             <input
//               type="text"
//               placeholder="Enter your Company name"
//               className="lg:w-[450px] md:w-[320px] w-[300px] border border-[#C9C9C9] rounded-md p-2"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label />
//             Phone number*
//             <input
//               type="text"
//               placeholder="Enter your Phone number"
//               className="lg:w-[450px] md:w-[320px] w-[300px] border border-[#C9C9C9] rounded-md p-2"
//             />
//           </div>
//           <div>
//             <button className="bg-gradient-to-l from-[#3A6EA5] to-[#4592E3] rounded-tl-xl rounded-tr-xl rounded-bl-xl px-6  text-white md:text-[36px] text-[25px]">
//               Submit
//             </button>
//           </div>
//           <div className="pb-2 ">
//             <ul className="py-2 space-y-2 ">
//               <li className="text-[20px] md:text-[24px] text-sans w-[300px] md:w-[650px] lg:w-auto ">
//                 Stay up-to-date with the latest news, tips, and offers.
//               </li>
//               <li className="text-[20px] md:text-[24px] text-sans w-[300px] md:w-[650px] lg:w-auto">
//                 Receive exclusive content and special discounts
//               </li>
//               <li className="text-[20px] md:text-[24px] text-sans w-[300px] md:w-[650px] lg:w-auto">
//                 Be the first to know about new product launches.
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex   justify-center items-center lg:w-[40%] px-4">
//           <img src="contact.png" className="md:mt-[-200px] lg:mt-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Speciality;
