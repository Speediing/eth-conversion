export const ethConversionReducer = (_: any, action: any) => {
  if (!action.value || isNaN(action.value)) return null;
  return Number(action.value * 1.0) / action.multiplier;
};
