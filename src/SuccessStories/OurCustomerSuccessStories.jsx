import React from "react";
import SuccessStories from "./SuccessStories";

const OurCustomerSuccessStories = () => {
  return (
    <div className="mx auto bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF]">
      <div className="mx-auto container flex flex-col justify-center space-y-6">
      <SuccessStories />
        {/* What makes our tool stand out! */}
        <div>
          {/* <h2 className="text-[35px] md:text-[50px] lg:text-[60px] text-center font-medium font-sans text-[#3A6EA5]"> */}
          <h2 className="text-[35px] text-center font-medium font-sans text-[#3A6EA5]">
            What makes our tool stand out!
          </h2>
          <p className="text-center">T-Rack is the trusted choice for organizations worldwide, offering customer-focused ticketing solutions that are reliable, scalable, and efficient.</p>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="md:w-[50%] p-4 flex justify-center">
              <img src="./Group 23.png" className="w-[400px] h-[250px]" />
            </div>
            <div className="flex flex-col  md:w-[50%] justify-center px-4 md:px-16">
              {/* <h3 className="text-[30px]  md:text-[48px] text-[#3A6EA5]">Dashboard Reports</h3> */}
              <h3 className="text-[30px] text-[#3A6EA5]">Dashboard Reports</h3>
              {/* <p className="text-[20px] text-[#3A6EA5]">
                Visualize your support operations in real-time. Track ticket
                status analyze performance,and identify trends with our
                intuitive dashboard.
              </p> */}
              <ul className="text-[17px] text-[#3A6EA5] list-disc">
                <li><span className="font-semibold">Real-Time Insights:</span> Gain a live view of your support operations with our dynamic dashboard.</li>
                <li><span className="font-semibold">Performance Tracking:</span> Monitor ticket status, analyze team productivity, and identify trends.</li>
                <li><span className="font-semibold">Actionable Analytics:</span> Generate custom reports to drive data-informed decisions.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-center">
                <img src="./ai.png" className="ml-16 md:ml-0 w-[70px] h-[70px]" />
              </div>
        </div>

        {/* Create Tickets  */}
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col  md:w-[55%] justify-center px-4 md:px-10 space-y-2">
              <h3 className="text-[30px] md:text-[30px] lg:text-[35px] text-[#3A6EA5]">
                Create tickets automatically with AI
              </h3>
              <p className="text-[20px] text-[#3A6EA5] lg:pr-24">
                Our advanced AI algorithms analyze incoming requests, extract
                key information, and automatically create comprehensive ticket
                descriptions. This not only saves time for your support team but
                also ensures accuracy and consistency in ticket creation.
              </p>

            </div>
            <div className="lg:w-[45%] md:w-[60%] md:mt-20 lg:mt-0 p-4 lg:p-10 ">
              <img src="./Group 23.png" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomerSuccessStories;
