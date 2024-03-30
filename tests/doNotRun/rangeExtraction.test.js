const solution = require("../../code_challenges/rangeExtraction/rangeExtraction");

describe("Default Range Extraction Test Package", () => {
  it("Push one integer", () => {
    const returnArray = solution([5]);
    expect(returnArray).toBe("5");
  });
  it("Push two integers", () => {
    const returnArray = solution([5, 8]);
    expect(returnArray).toBe("5,8");
  });
  it("Detection of non-range individual numbers", () => {
    const returnArray = solution([-6, -3, 5, 7, 9]);
    expect(returnArray).toBe("-6,-3,5,7,9");
  });
  it("Detection of non-range individual numbers", () => {
    const returnArray = solution([1, 3, 5]);
    expect(returnArray).toBe("1,3,5");
  });
  it("Range detection of positive integers in range", () => {
    const returnArray = solution([3, 4, 5]);
    expect(returnArray).toBe("3-5");
  });
  it("Range detection of negative integers in range", () => {
    const returnArray = solution([-3, -2, -1, 0, 1]);
    expect(returnArray).toBe("-3-1");
  });

  it("Should pass sample tests", () => {
    const returnArray = solution([
      -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
    ]);
    expect(returnArray).toBe("-6,-3-1,3-5,7-11,14,15,17-20");
  });
  it("Should pass sample tests ending with short sequence", () => {
    const returnArray = solution([
      -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
      23, 24,
    ]);
    expect(returnArray).toBe("-6,-3-1,3-5,7-11,14,15,17-20,23,24");
  });
});
