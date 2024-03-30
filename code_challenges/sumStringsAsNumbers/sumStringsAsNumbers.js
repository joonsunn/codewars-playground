// https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript

function sumStrings(a, b) {
  let arrA = a.split("");
  let arrB = b.split("");

  let numStr = "";

  while (arrA.length > 0 || arrB.length > 0) {
    let aNum = arrA[arrA.length - 1] || 0;
    let bNum = arrB[arrB.length - 1] || 0;

    let numToAppend = parseInt(aNum) + parseInt(bNum);

    if (numToAppend >= 10) {
      numToAppend = numToAppend % 10;
      if (arrA.length === 1) {
        arrA.unshift("1");
      } else {
        arrA[arrA.length - 2] = (
          parseInt(arrA[arrA.length - 2]) + 1
        ).toString();
      }
    }
    numStr = numToAppend.toString() + numStr;
    arrA.pop();
    arrB.pop();
  }

  while (numStr[0] === "0") {
    numStr = numStr.slice(1);
  }

  return numStr;
}

module.exports = sumStrings;
