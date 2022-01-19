import { getEthValue } from "../../utils/helpers/getEthValue";

describe("Test The Eth Value Getter", () => {
  test("test an eth value of 1 with a 1000 multiplier", () => {
    expect(getEthValue(1, 1000)).toBe("1000");
  });
  test("test an decimal eth value of .001 with a 1000 multiplier", () => {
    expect(getEthValue(0.001, 1000)).toBe("1");
  });
  test("test an empty form", () => {
    expect(getEthValue(null, 1000)).toBe("");
  });
});
