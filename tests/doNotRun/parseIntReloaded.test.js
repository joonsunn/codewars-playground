const parseInt = require("../../code_challenges/parseIntReloaded/parseIntReloaded");

describe("parseIntReloaded", () => {
  it("one", () => {
    expect(parseInt("one")).toBe(1);
  });
  it("twenty", () => {
    expect(parseInt("twenty")).toBe(20);
  });
  it("two hundred forty-six", () => {
    expect(parseInt("two hundred forty-six")).toBe(246);
  });
  it("one hundred and one", () => {
    expect(parseInt("one hundred and one")).toBe(101);
  });
  it("four hundred and twenty four", () => {
    expect(parseInt("four hundred and twenty four")).toBe(424);
  });
  it("two thousand", () => {
    expect(parseInt("two thousand")).toBe(2000);
  });
  it("seven thousand five hundred and fifty three", () => {
    expect(parseInt("seven thousand five hundred and fifty three")).toBe(7553);
  });
  it("twenty-six thousand three hundred and fifty-nine", () => {
    expect(parseInt("twenty six thousand three hundred and fifty nine")).toBe(
      26359
    );
  });
  it("ninety three thousand eight hundred and forty three", () => {
    expect(
      parseInt("ninety three thousand eight hundred and forty three")
    ).toBe(93843);
  });
  it("seventy-six thousand six hundred sixty-four", () => {
    expect(parseInt("seventy-six thousand six hundred sixty-four")).toBe(76664);
  });
  it("six hundred sixty-six thousand six hundred sixty-six", () => {
    expect(
      parseInt("six hundred sixty-six thousand six hundred sixty-six")
    ).toBe(666666);
  });
  it("five hundred eighty-nine thousand one hundred fifty-one", () => {
    expect(
      parseInt("five hundred eighty-nine thousand one hundred fifty-one")
    ).toBe(589151);
  });
});
