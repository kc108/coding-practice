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

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

//   if (input % 3 === 0) return "Fizz";

//   if (input % 5 === 0) return "Buzz";

//   return input;
// }

///////////////////////////////
// mosh examples
// Math.floor(1.3)
// 12 points -> suspended
//////////////////////////////
// checkSpeed(71);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) console.log("Ok");
//   else {
//     let points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) console.log("Licensed suspended");
//     else console.log("Points", points);
//   }
// }

// // FIND()
// const arr1 = [5, 12, 8, 130, 44];

// const found = arr1.find((element) => element > 10);
// console.log(found);

// // CODE WARS EXERCISES JAVASCRIPT - FRIDAY, JULY 30th
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");

//     const message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }

// const isActive = true;
// const name = 'Mosh'; // Truthy
// const name = ''; // False
// // Falsy = undefined, null, '', false, NaN

// if (name) console.log('Hello';)

// // create function counts the number of truthy values
// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// CODE WARS PRACTICE 1: remove an exclamation mark from the end of a string. Assume that the input data is always a string, no need to verify it.

// function remove(s) {
//   return s[s.length - 1] === "!" ? s.slice(0, -1) : s;
// }

// // slice()
// const animals = ["cat", "dog", "bird", "rat", "raven"];

// console.log(animals.slice(2)); // # -> ['bird', 'rat', 'raven']
// console.log(animals.slice(2, 4)); // # -> ['bird', 'rat']
