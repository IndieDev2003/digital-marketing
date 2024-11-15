import React from "react";

const NavBar = () => {
  return (
    <div className="py-5 flex flex-row w-full items-center justify-between">
      <h2>Brand Buzz</h2>
      <div className="flex flex-row gap-6">
        <p className="font-medium text-orange-500">Home</p>
        <p className="font-medium text-gray-700">About Us</p>
        <p className="font-medium text-gray-700">Services</p>
        <p className="font-medium text-gray-700">Contact Us</p>
        <p className="font-medium text-gray-700">Blog</p>
      </div>
      <button className="px-3 py-1 border-2 border-gray-300 backdrop-blur-xl border-opacity-90 text-white bg-orange-500 shadow-lg drop-shadow-lg rounded-lg">
        Sign Up
      </button>
    </div>
  );
};

export default NavBar;
