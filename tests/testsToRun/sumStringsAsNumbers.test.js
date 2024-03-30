const sumStrings = require("../../code_challenges/sumStringsAsNumbers/sumStringsAsNumbers");

describe("Default sumStringsAsNumbers Test Package", () => {
  it("simple test", () => {
    const sum = sumStrings("123", "456");
    expect(sum).toBe("579");
  });
  it("simple test", () => {
    const sum = sumStrings("8797", "45");
    expect(sum).toBe("8842");
  });
  it("simple test", () => {
    const sum = sumStrings("9567", "800");
    expect(sum).toBe("10367");
  });
  it("simple test", () => {
    const sum = sumStrings("99", "1");
    expect(sum).toBe("100");
  });
  it("simple test", () => {
    const sum = sumStrings("08567", "00103");
    expect(sum).toBe("8670");
  });
  it("simple test", () => {
    const sum = sumStrings(
      "712569312664357328695151392",
      "8100824045303269669937"
    );
    expect(sum).toBe("712577413488402631964821329");
  });
});
