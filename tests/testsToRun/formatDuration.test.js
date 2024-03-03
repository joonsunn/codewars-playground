const formatDuration = require("../../code_challenges/formatDuration/formatDuration");

describe("Default WhoLikesIt Test Package", () => {
  it("1", () => {
    expect(formatDuration(1)).toBe("1 second");
  });
  it("62", () => {
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
  });
  it("120", () => {
    expect(formatDuration(120)).toBe("2 minutes");
  });
  it("3600", () => {
    expect(formatDuration(3600)).toBe("1 hour");
  });
  it("3662", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
  });
  it("now", () => {
    expect(formatDuration(0)).toBe("now");
  });
  it("2788178", () => {
    expect(formatDuration(2788178)).toBe(
      "32 days, 6 hours, 29 minutes and 38 seconds"
    );
  });
  it("2788178", () => {
    expect(formatDuration(132030240)).toBe(
      "4 years, 68 days, 3 hours and 4 minutes"
    );
  });
});
