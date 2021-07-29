// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(500, 600));

// // CODEWARS 1 - 10
// const multiTable = (number) => {
//   let table = "";

//   for (let i = 1; i < 11; i++) {
//     table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
//   }

//   return table;
// };

// console.log(multiTable(8))

// JAVASCRIPT REVIEW OF METHODS
// const arr1 = [5, 12, 8, 130, 44];

// let index = 2;
// console.log(
//   `Using an index of ${index} the item returned is ${arr1.at(index)}`
// );

// // # => 8

// // MDN PRACTICE reduce()
// // # => 10
// const arr1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr1.reduce(reducer));

// // # => 15
// console.log(arr1.reduce(reducer, 5));

// // concat()
// const arr1 = ["a", "b", "c"];
// const arr2 = ["d", "e", "f"];
// const arr3 = arr1.concat(arr2);

// console.log(arr3);
// // # => ['a', 'b', 'c', 'd', 'e', 'f']

// // EVERY()
// const belowThreshold = (currentValue) => currentValue < 40;

// const arr1 = [1, 30, 39, 29, 10, 13];

// console.log(arr1.every(belowThreshold));
// // # => true

///////////////////////////////////////
// FILTER()
///////////////////////////////////////
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);
// console.log(result);
// // OUTPUT: ['exuberant', 'destruction', 'present']

///////////////////////////////////////
// MAP()
///////////////////////////////////////
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const map1 = words.map((word) => word.length > 6);
// console.log(map1);
// // OUTPUT: [false, false, false, true, true, true]

// FIZZ BUZZ
// divisble by 3 = fizz
// div by 5 = buzz
// div by both 3 and 5 = fizzBuzz
// not divisble by 3 or 5 = input

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}
