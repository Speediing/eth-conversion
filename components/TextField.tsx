import React from "react";

const TextField = () => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-green-500  bg-gray-800 focus:border-green-500 block w-full  pr-12 sm:text-sm border-gray-600 rounded-md text-white"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-300 sm:text-sm" id="price-currency">
            ETH
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextField;
