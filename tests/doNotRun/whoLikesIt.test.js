const likes = require("../../code_challenges/whoLikesIt/whoLikesIt");

describe("Default WhoLikesIt Test Package", () => {
  it("empty array should return 'no one likes this'", () => {
    const returnString = likes([]);
    expect(returnString).toBe("no one likes this");
  });

  it("one name", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });
  it("two names", () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });
  it("three names", () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });
  it("four names", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
  });
});
