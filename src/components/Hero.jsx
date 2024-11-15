import React from "react";

import doodle from "../assets/doodle.svg";

const Hero = () => {
  return (
    <div className="flex flex-row h-[80vh] w-full items-center relative ">
      {/* Left Side */}
      <div className="max-w-1/2">
        <h2 className="text-6xl font-semibold">
          We Create <br />
          <span className="text-orange-500">solutions</span> for <br />
          your bussiness
        </h2>
        <p className="text-gray-700 mt-2 text-xl">
          our team keeps a keen eye on emerging trends <br /> and technologies
          to ensure your marketing <br /> campaings remain cutting edge.
        </p>
        <button className=" mt-4 px-10 py-2 backdrop-blur-xl border-opacity-90 text-white bg-orange-500 shadow-lg drop-shadow-lg rounded-lg">
          Get Started
        </button>
      </div>
      {/* Right Side */}
      <div className="h-full w-1/2 flex  relative">
        <img
          src={doodle}
          className="object-cover object-center absolute -z-10 -top-10 bg-white"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
