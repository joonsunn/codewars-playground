function parseInt(string) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const numberKeys = Object.keys(numbers);
  const multiplicatives = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
  const multiplicativeKeys = Object.keys(multiplicatives);

  const splitByThousand = string.split("thousand");
  // console.log("splitByThousand");
  // console.log(splitByThousand);

  function getHundreds(string) {
    let number = 0;
    const cleanString1 = string.replace(/\sand/gim, "").replace(/-/gim, " ");
    const cleanString2 = cleanString1.split(" ");
    const stringArray = cleanString2.filter((item) => item !== "");
    // console.log("inner StringArray");
    // console.log(stringArray);
    while (stringArray.length > 0) {
      if (multiplicativeKeys.includes(stringArray[stringArray.length - 1])) {
        number +=
          numbers[stringArray[stringArray.length - 2]] *
          multiplicatives[stringArray[stringArray.length - 1]];

        stringArray.pop();
        stringArray.pop();
      } else {
        number += numbers[stringArray[stringArray.length - 1]];
        stringArray.pop();
      }
    }
    // console.log("number");
    // console.log(number);
    return number;
  }

  if (splitByThousand.length === 2) {
    const numberToBeReturned =
      getHundreds(splitByThousand[0]) * 1000 + getHundreds(splitByThousand[1]);
    return numberToBeReturned;
  } else {
    return getHundreds(string);
  }
}

module.exports = parseInt;
