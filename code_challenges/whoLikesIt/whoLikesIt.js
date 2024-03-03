// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  let nameList = "";
  switch (names.length) {
    case 0:
      nameList = "no one";
      break;

    case 1:
      nameList = `${names[0]}`;
      break;

    case 2:
      nameList = `${names[0]} and ${names[1]}`;
      break;

    case 3:
      nameList = `${names[0]}, ${names[1]} and ${names[2]}`;
      break;

    default:
      nameList = `${names[0]}, ${names[1]} and ${names.length - 2} others`;
      break;
  }
  return `${nameList} ${names.length > 1 ? "like" : "likes"} this`;
}

module.exports = likes;

// console.log(likes([]));
// console.log(likes(["James"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Lewis"]));
