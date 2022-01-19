import { ethConversionReducer } from "../../utils/reducers/ethConversionReducer";

describe("Test The Conversion Reducer after entering text", () => {
  test("test entering 1 with a 1000 multiplier", () => {
    expect(ethConversionReducer(null, { value: 1, multiplier: 1000 })).toBe(
      0.001
    );
  });

  test("test entering a decimal .001 with a 1000000 multiplier", () => {
    expect(
      ethConversionReducer(null, { value: 0.001, multiplier: 1000000 })
    ).toBe(1e-9);
  });

  test("test clearing the form", () => {
    expect(
      ethConversionReducer(null, { value: null, multiplier: 1000000 })
    ).toBe(null);
  });
});
