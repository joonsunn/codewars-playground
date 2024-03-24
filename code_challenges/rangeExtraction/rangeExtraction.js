// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
  let arrayList = [...list];
  let stringToBeReturned = "";
  let rangeLength = 0;

  for (const [index, item] of arrayList.entries()) {
    if (stringToBeReturned === "") {
      stringToBeReturned = stringToBeReturned.concat(item.toString());
    } else {
      if (index > 0) {
        if (item - arrayList[index - 1] === 1) {
          if (index !== arrayList.length - 1) {
            rangeLength++;
          } else {
            if (rangeLength > 0) {
              stringToBeReturned = stringToBeReturned.concat(
                `-${item.toString()}`
              );
            } else {
              stringToBeReturned = stringToBeReturned.concat(
                `,${item.toString()}`
              );
            }
          }
        } else {
          if (rangeLength === 1) {
            stringToBeReturned = stringToBeReturned.concat(
              `,${arrayList[index - 1].toString()}`
            );
          } else if (rangeLength > 1) {
            stringToBeReturned = stringToBeReturned.concat(
              `-${arrayList[index - 1].toString()}`
            );
          }
          stringToBeReturned = stringToBeReturned.concat(`,${item.toString()}`);
          rangeLength = 0;
        }
      }
    }
  }
  return stringToBeReturned;
}

module.exports = solution;
