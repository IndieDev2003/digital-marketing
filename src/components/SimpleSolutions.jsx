import React from "react";

import chair from "../assets/SimpleSolutions/chair.svg";

const SimpleSolutions = () => {
  return (
    <div className="h-[70vh] w-full flex flex-row bg-orange-300 rounded-lg">
      <div className="w-1/2 h-full">
        <img src={chair} className="object-cover object-center h-[100%] hover:-rotate-6 hover:scale-110 transition-all duration-500" alt="" />
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-center">
        <h2 className="text-5xl font-semibold">
          Simple <span className="text-orange-600">Solutions !</span>
        </h2>
        <p className="text-gray-700 text-xl">
          We understand that no two bussiness <br /> alike. That's why we take
          the <br /> time to understand.
        </p>

        {/* Steps */}
        <div className="flex gap-5 items-center mb-1">
          <h2 className="text-xl bg-orange-600 px-[18px] py-2 rounded-full font-semibold text-white">1</h2>
          <div className=" flex flex-col">
            <h3 className="text-xl font-medium">Contact Us</h3>
            <p>Contact us to boost your brand visibility.</p>
          </div>
        </div>
        {/* Consult */}
        <div className="flex gap-6 items-center mb-1">
          <h2 className="text-xl bg-orange-600 px-4 py-2 rounded-full font-semibold text-white">2</h2>
          <div className=" flex flex-col">
            <h3 className="text-xl font-medium">Consult</h3>
            <p>Always avaliable to answer your questions.</p>
          </div>
        </div>
        {/* Place Order */}
        <div className="flex gap-6 items-center mb-1">
          <h2 className="text-xl bg-orange-600 px-4 py-2 rounded-full font-semibold text-white">3</h2>
          <div className=" flex flex-col">
            <h3 className="text-xl font-medium">Place Order</h3>
            <p>Buy our package today to proceed.</p>
          </div>
        </div>
        {/* Payment */}
        <div className="flex gap-6 items-center mb-1">
          <h2 className="text-xl bg-orange-600 px-4 py-2 rounded-full font-semibold text-white">4</h2>
          <div className=" flex flex-col">
            <h3 className="text-xl font-medium">Payment</h3>
            <p>We receives payments in all type of banking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSolutions;
