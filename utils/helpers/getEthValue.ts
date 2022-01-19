export const getEthValue = (val: number | null, multiplier: number) => {
  if (!val || isNaN(val)) return "";
  return (Number(val) * multiplier).toString();
};
