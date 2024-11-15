import React from "react";

import user from "../assets/OurAgency/user.svg";

const OurAgency = () => {
  return (
    <div className="h-[80vh] flex flex-row">
      <div className="w-1/2 h-full flex flex-col justify-center items-start pl-20">
        <h2 className="text-6xl">
          Our <span className="text-orange-600">Agency</span>
        </h2>
        <p className="text-lg py-5">
          We believe in the power of data. Our analytics-driven approach allows{" "}
          <br />
          us to make informed decisions and optimize your marketing <br />{" "}
          efforts for maximum ROI. Let's turn your data into
          <br /> actionable insights. Tailored Solutions for your
          <br /> Business.
        </p>
        <button className=" mt-4 px-10 py-2 backdrop-blur-xl border-opacity-90 text-white bg-orange-500 shadow-lg drop-shadow-lg rounded-lg">
          Get Started
        </button>
      </div>
      <div className="w-1/2 h-[100%] flex items-center justify-center">
        <img src={user} className="h-[75%] hover:rotate-2 hover:scale-110 transition-all duration-500" alt="" />
      </div>
    </div>
  );
};

export default OurAgency;
