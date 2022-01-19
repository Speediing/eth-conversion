import React from "react";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="lg:text-center">
        <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">
          Eth Conversion Tool
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enter your value below
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
          Ether or ETH is often used in different denominations of its currency,
          such as Wei for interacting with smart contracts and Gwei for
          calculating gas prices. Use my Unit Converter to easily convert
          between them!
        </p>
      </div>
    </div>
  );
};
export default Header;
