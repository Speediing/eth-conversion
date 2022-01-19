import React from "react";

type TextFieldProps = {
  value: string;
  handleChange: any;
  label: string;
  multiplier: number;
};
const TextField = ({
  value,
  handleChange,
  label,
  multiplier,
}: TextFieldProps) => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="number"
          name="price"
          id="price"
          className="focus:ring-green-500  bg-gray-800 focus:border-green-500 block w-full  pr-12 sm:text-sm border-gray-600 rounded-md text-white"
          placeholder="0.00"
          aria-describedby="price-currency"
          value={value}
          onChange={(x) => handleChange({ value: x.target.value, multiplier })}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-300 sm:text-sm" id="price-currency">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextField;
