import BigNumber from "bignumber.js";

export const ethConversionReducer = (_: any, action: any) => {
  if (!action.value || isNaN(action.value)) return null;
  return new BigNumber(action.value * 1.0)
    .dividedBy(action.multiplier)
    .toNumber();
};
