/**
 *
 * @param {Number} seconds
 * @returns
 */

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;

  const years = Math.floor(seconds / YEAR);
  const days = Math.floor((seconds % YEAR) / DAY);
  const hours = Math.floor(((seconds % YEAR) % DAY) / HOUR);
  const minutes = Math.floor((((seconds % YEAR) % DAY) % HOUR) / MINUTE);
  const secondsRemaining = (((seconds % YEAR) % DAY) % HOUR) % MINUTE;

  const yearString = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const dayString = days > 0 ? `${days} day${days > 1 ? "s" : ""}` : "";
  const hourString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
  const minuteString =
    minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "";
  const secondString =
    secondsRemaining > 0
      ? `${secondsRemaining} second${secondsRemaining > 1 ? "s" : ""}`
      : "";

  const and =
    +(years > 0) +
    +(days > 0) +
    +(hours > 0) +
    +(minutes > 0) +
    +(secondsRemaining > 0);

  const timeStrings = [
    secondString,
    minuteString,
    hourString,
    dayString,
    yearString,
  ];
  let returnString = "";
  for (let string of timeStrings) {
    if (!!string) {
      if (returnString === "") {
        returnString = string;
      } else if (
        and > 1 &&
        returnString !== "" &&
        !returnString.includes("and")
      ) {
        returnString = string + " and " + returnString;
      } else {
        returnString = string + ", " + returnString;
      }
    }
  }

  return returnString;
}

module.exports = formatDuration;
