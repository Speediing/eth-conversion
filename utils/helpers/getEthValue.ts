import BigNumber from "bignumber.js";

export const getEthValue = (val: number | null, multiplier: number) => {
  if (!val || isNaN(val)) return "";
  return new BigNumber(val).multipliedBy(multiplier).toString();
};
