import TextField from "../components/TextField";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useReducer } from "react";
import { EthConversions } from "../utils/constants/EthConversions";
import { ethConversionReducer } from "../utils/reducers/ethConversionReducer";
import { getEthValue } from "../utils/helpers/getEthValue";

export const ConversionArea = () => {
  let [ethState, setEthState] = useReducer(ethConversionReducer, null);

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl mt-6">
          <TextField
            value={getEthValue(ethState, 1)}
            handleChange={setEthState}
            label="Eth"
            multiplier={1}
          />
        </div>
      </div>
      <div className="w-full px-4 pt-7 bg-black">
        <div className="w-full max-w-lg p-2 mx-auto rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                  <span>Conversions</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  {EthConversions.map((unit) => {
                    return (
                      <TextField
                        key={unit.label}
                        value={getEthValue(ethState, unit.multiplier)}
                        handleChange={setEthState}
                        label={unit.label}
                        multiplier={unit.multiplier}
                      />
                    );
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default ConversionArea;
