import React from "react";

const OurCustomerSuccessStories = () => {
  return (
    <div className="mx auto bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF]">
      <div className="mx-auto container flex flex-col justify-center space-y-6">
        <div className="">
          <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-center font-medium font-sans text-[#3A6EA5]">
            Our Customer Success Stories
          </h2>
          <div className="bg-gradient-to-t from-[#EDF7FD] to-[#FFFFFF] w-[80%] flex flex-col md:flex-row justify-center items-center mx-auto ">
            <div className="flex flex-col space-y-8  lg:px-6 md:w-[60%]">
              <h2 className="text-[20px] md:text-[28px] font-sans text-black pt-10">
                Affy Cloud's expertise transformed our real estate website,
                elevating user experience and driving sales. Their optimized
                solutions are the perfect fit for our growing business!
              </h2>
              <h2 className="text-[20px] md:text-[28px] font-sans text-black pb-10">
                Faster response times Improved ticket resolution rates Enhanced
                team collaboration Data-driven decision making
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center pt-10 pb-10 md:w-[40%] bg-[#4592E32E] rounded-2xl overflow-hidden relative">
              <div>
                <img src="./06.png" className="w-[300px] h-[120px]" />
                <img src="./eleganza.png" className="w-[290px] h-[170px]" />
              </div>
            </div>
          </div>
        </div>
        {/* What makes our tool stand out! */}
        <div>
          <h2 className="text-[35px] md:text-[50px] lg:text-[60px] text-center font-medium font-sans text-[#3A6EA5]">
            What makes our tool stand out!
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%] p-4 lg:p-10">
              <img src="./Group 23.png" />
            </div>
            <div className="flex flex-col  md:w-[50%] justify-center px-4 md:px-16">
              <h3 className="text-[30px]  md:text-[48px] text-[#3A6EA5]">Dashboard Reports</h3>
              <p className="text-[20px] text-[#3A6EA5]">
                Visualize your support operations in real-time. Track ticket
                status analyze performance,and identify trends with our
                intuitive dashboard.
              </p>
            </div>
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
              <div>
                <img src="./adobe illustrator icon.png" className="ml-16 md:ml-0 lg:w-[120px] lg:h-[120px]" />
              </div>
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
