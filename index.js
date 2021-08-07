// // // // function isLandscape(width, height) {
// // // //   return width > height;
// // // // }

// // // // console.log(isLandscape(500, 600));

// // // // // CODEWARS 1 - 10
// // // // const multiTable = (number) => {
// // // //   let table = "";

// // // //   for (let i = 1; i < 11; i++) {
// // // //     table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
// // // //   }

// // // //   return table;
// // // // };

// // // // console.log(multiTable(8))

// // // // JAVASCRIPT REVIEW OF METHODS
// // // // const arr1 = [5, 12, 8, 130, 44];

// // // // let index = 2;
// // // // console.log(
// // // //   `Using an index of ${index} the item returned is ${arr1.at(index)}`
// // // // );

// // // // // # => 8

// // // // // MDN PRACTICE reduce()
// // // // // # => 10
// // // // const arr1 = [1, 2, 3, 4];
// // // // const reducer = (accumulator, currentValue) => accumulator + currentValue;
// // // // console.log(arr1.reduce(reducer));

// // // // // # => 15
// // // // console.log(arr1.reduce(reducer, 5));

// // // // // concat()
// // // // const arr1 = ["a", "b", "c"];
// // // // const arr2 = ["d", "e", "f"];
// // // // const arr3 = arr1.concat(arr2);

// // // // console.log(arr3);
// // // // // # => ['a', 'b', 'c', 'd', 'e', 'f']

// // // // // EVERY()
// // // // const belowThreshold = (currentValue) => currentValue < 40;

// // // // const arr1 = [1, 30, 39, 29, 10, 13];

// // // // console.log(arr1.every(belowThreshold));
// // // // // # => true

// // // ///////////////////////////////////////
// // // // FILTER()
// // // ///////////////////////////////////////
// // // // const words = [
// // // //   "spray",
// // // //   "limit",
// // // //   "elite",
// // // //   "exuberant",
// // // //   "destruction",
// // // //   "present",
// // // // ];

// // // // const result = words.filter((word) => word.length > 6);
// // // // console.log(result);
// // // // // OUTPUT: ['exuberant', 'destruction', 'present']

// // // ///////////////////////////////////////
// // // // MAP()
// // // ///////////////////////////////////////
// // // // const words = [
// // // //   "spray",
// // // //   "limit",
// // // //   "elite",
// // // //   "exuberant",
// // // //   "destruction",
// // // //   "present",
// // // // ];

// // // // const map1 = words.map((word) => word.length > 6);
// // // // console.log(map1);
// // // // // OUTPUT: [false, false, false, true, true, true]

// // // // FIZZ BUZZ
// // // // divisble by 3 = fizz
// // // // div by 5 = buzz
// // // // div by both 3 and 5 = fizzBuzz
// // // // not divisble by 3 or 5 = input

// // // // const output = fizzBuzz(false);
// // // // console.log(output);

// // // // function fizzBuzz(input) {
// // // //   if (typeof input !== "number") return NaN;
// // // //   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

// // // //   if (input % 3 === 0) return "Fizz";

// // // //   if (input % 5 === 0) return "Buzz";

// // // //   return input;
// // // // }

// // // ///////////////////////////////
// // // // mosh examples
// // // // Math.floor(1.3)
// // // // 12 points -> suspended
// // // //////////////////////////////
// // // // checkSpeed(71);

// // // // function checkSpeed(speed) {
// // // //   const speedLimit = 70;
// // // //   const kmPerPoint = 5;

// // // //   if (speed < speedLimit + kmPerPoint) console.log("Ok");
// // // //   else {
// // // //     let points = Math.floor((speed - speedLimit) / kmPerPoint);
// // // //     if (points >= 12) console.log("Licensed suspended");
// // // //     else console.log("Points", points);
// // // //   }
// // // // }

// // // // // FIND()
// // // // const arr1 = [5, 12, 8, 130, 44];

// // // // const found = arr1.find((element) => element > 10);
// // // // console.log(found);

// // // // // CODE WARS EXERCISES JAVASCRIPT - FRIDAY, JULY 30th
// // // // showNumbers(10);

// // // // function showNumbers(limit) {
// // // //   for (let i = 0; i <= limit; i++) {
// // // //     if (i % 2 === 0) console.log(i, "EVEN");
// // // //     else console.log(i, "ODD");

// // // //     const message = i % 2 === 0 ? "EVEN" : "ODD";
// // // //     console.log(i, message);
// // // //   }
// // // // }

// // // // const isActive = true;
// // // // const name = 'Mosh'; // Truthy
// // // // const name = ''; // False
// // // // // Falsy = undefined, null, '', false, NaN

// // // // if (name) console.log('Hello';)

// // // // // create function counts the number of truthy values
// // // // function countTruthy(array) {
// // // //   let count = 0;
// // // //   for (let value of array) if (value) count++;
// // // //   return count;
// // // // }

// // // // CODE WARS PRACTICE 1: remove an exclamation mark from the end of a string. Assume that the input data is always a string, no need to verify it.

// // // // function remove(s) {
// // // //   return s[s.length - 1] === "!" ? s.slice(0, -1) : s;
// // // // }

// // // // // slice()
// // // // const animals = ["cat", "dog", "bird", "rat", "raven"];

// // // // console.log(animals.slice(2)); // # -> ['bird', 'rat', 'raven']
// // // // console.log(animals.slice(2, 4)); // # -> ['bird', 'rat']

// // // // IMPORT CONCEPTS JS
// // // // //1
// // // // const favFood = ["chocolate", "avocado", "honey crisp", "bouchey"];
// // // // console.log(...favFood);

// // // // //2 FOR ... OF ITERATOR
// // // // const toolBox = ["hammer", "screwdriver", "saw"];
// // // // for (const item of toolBox) {
// // // //   console.log(item);
// // // // }

// // // // //3 INCLUDES() - returns true or false
// // // // const garage = ["BMW", "AUDI", "VOLVO"];
// // // // const findCar = garage.includes("BMW");
// // // // console.log(findCar); // # -> true

// // // // // 4 some() - checks if some elements exists and returns true/false
// // // // const age = [16, 14, 18];
// // // // age.some(function (person) {
// // // //   return person >= 18; // # -> true
// // // // });

// // // // // with ES6 you have Arrow functions
// // // // age.some((person) => person >= 18);

// // // // // 5 EVERY() - checks every item and returns true or false
// // // // const age = [15, 20, 41];
// // // // age.every((person) => person >= 18); // # -> false

// // // //6 filter() - creates a new array with all elements that pass the test
// // // // const prices = [25, 30, 15, 55, 40, 10];

// // // // console.log(prices.filter((price) => price >= 30)); // # -> [30, 55, 40]

// // // // // 7 MAP() - similar to filter() in terms of returning a new array. However, the only difference is that it is used to modify items
// // // // const productPriceList = [200, 350, 1500, 5000];

// // // // console.log(productPriceList.map((item) => item * 0.75));
// // // // // # -> [150, 262.50, 1125, 3750]

// // // // 8 reduce() - can be used to transform an array into something else, which could be an integer, an object, a chain of promises ...etc. For practical reasons, a simple use case would be to sum a list of integers. In short, it "reduces" the whole array into one value.
// // // const weeklyExpenses = [200, 350, 1500, 5000, 450, 680, 350];

// // // // weeklyExpenses.reduce(function(first, last) {
// // // //     return first + last;
// // // // });

// // // // ES6
// // // console.log(weeklyExpenses.reduce((first, last) => first + last));

// // // // code wares - remove '!' from the end of the sentence
// // // const remove = s => s.replace(/!+$/, '');

// // /////////////////////////////////
// // // javascript practice - afternoon
// // /////////////////////////////////
// // // const sentence = "The quick brown fox jumps over the lazy dog.";

// // // const index = 4;

// // // console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

// // /////////////////////////////////
// // // javascript practice - sat afternoon
// // /////////////////////////////////

// // const movie = {
// //   title: "a",
// //   releaseYear: 2018,
// //   rating: 4.5,
// //   director: "b",
// // };

// // showProperties(movie);

// // function showProperties(obj) {
// //   for (let key in obj) console.log(key);
// //   if (typeof obj[key] === "string") console.log(key, obj[key]);
// // }

// // FOR ... IN LOOPS
// // for, while, do-while, for...in, and for...of loops

// // FOR IN - used to display all properties in loop
// const person = {
//   name: "Mosh",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]); // # -> name Mosh age 30

// // dot notation
// person.name;

// // bracket notation
// person["name"];

// const colors = ["red", "green", "blue"];

// for (let index in colors) console.log(index, colors[index]); // # -> 0 red 1 green 2 blue

// // FOR ... OF LOOP - you don't have to deal with the index USED WITH AN ARRAY
// for (let color of colors) console.log(color); // # -> red green blue

// // ANOTHER EXAMPLE COMPARING FOR...IN VS. FOR...OF LOOPS
// let arr = ["el1", "el2", "el3"];

// arr.addedProp = "arrProp";

// // elKey are the property keys
// for (let elKey in arr) {
//   console.log(elKey);
// }
// // # -> 0 1 2 addedProp

// // for (let elValue of arr) {
// //   console.log(elValue);
// // }
// // # -> el1 el2 el3

// //
// function getRealFloor(n) {
//   return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }

// // ...or
// const getRealFloor = (n) => {
//   if (n >= 13) return n - 2;
//   if (n > 0) return n - 1;
//   return n;
// };

// complete js course 2021: from zero to export!
// saturday 7/7/2021
// SWITCH OPERATORS, can also use an IF...ELSE

// const day = "wednesday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

//
