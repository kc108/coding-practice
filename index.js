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

// //
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

/////////////////////////////////
// STATEMENTS AND EXPRESSIONS
/////////////////////////////////
// expressions produce values
// statements have actions to perform

/////////////////////////////////
// TERNARY OPERATORS
/////////////////////////////////
// const age = 23;
// age >= 18;
// //   ? console.log("I like to drink wine.")
//   : console.log("I like to drink water.");

/////////////////////////////////
// TERNARY OPERATOR EXAMPLE 2
/////////////////////////////////
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

/////////////////////////////////
// TERNARY OPERATOR EXAMPLE 3 - longer to write than the above example.
/////////////////////////////////
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }

// console.log(drink2);

/////////////////////////////////
// USING TERNARY OPERATOR IN A TEMPLATE LITERAL
/////////////////////////////////
// Ternary operator is not a replacement for an 'else...if' expression, it is great for making a quick decision
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

/////////////////////////////////
// CODING CHALLENGE #4
/////////////////////////////////
// const bill = 275;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

/////////////////////////////////
// JAVASCRIPT ES5, ES6 AND ESNEXT
/////////////////////////////////
// JavaScript, Brendan Eich created first version of JS in just 10 days. It was called Mocha, but already had many fundamental features of modern JS.
// Mocha changes to LiveScript, then to JS in order to attract Java developers. JS has almost nothing to do with Java.
// ES5 = Released in 2009
// ES6 = Released in 2015, many new features: the biggest update to the language ever. Official name is ES2015. ECMAScript changes to an annual release cycle in order to ship less features per update

/////////////////////////////////
// FUNCTIONS
/////////////////////////////////
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

/////////////////////////////////
// FUNCTIONS = ES6 arrow functions were added to ES6
/////////////////////////////////
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// // ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// /////////////////////////////////
// // FUNCTIONS CALLING OTHER FUNCTIONS
// /////////////////////////////////
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // CODING CHALLENGE - JS FUNDAMENTALS PART2
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5)); // # => 4

// // TEST DATA 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas); // # => 46 56

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win the trophy, ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win the trophy. ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas); // # => 46 56 ; 'No team wins...' becuz the points are not double of either team's score

////////////////////////////////////
// INTRO TO ARRAYS
////////////////////////////////////
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // ['Michael', 'Steven', 'Peter']

// // another way to create an Array
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
// // [1991, 1984, 2008, 2020]

// console.log(friends[0]); // 'Michael'
// console.log(friends[2]); // 'Peter'

// console.log(friends.length); // # => 3 (returns the number of elements in an array);

// console.log(friends[friends.length - 1]); // # => 'Peter'

// MUTATING THE ARRAY
// friends[2] = "Jay";
// console.log(friends); // # => ['Michael', 'Steven', 'Jay'];
// // Only primitive values are not immutable, arrays can be changed. This is becuz of the way JS stores things in memory
// // cannot replace the entire array // # => friends = ['Bob', 'Alice']

// const firstName = "Jonas";
// // friends is inserted from the array above!!!
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // ARRAY EXERCISE
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years1 = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); // NaN

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3); // 46 53 17

//////////////////////////////////////////////
// BASIC ARRAY OPERATION (METHODS)
//////////////////////////////////////////////
// ADDS ELEMENTS

// push() -> adds something to the end of an array
// unshift() -> adds something to the beginning of an array
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends); // # -> ["Michael", "Steven", "Peter", "Jay"]
// console.log(newLength); // # -> 4

// friends.unshift("John");
// console.log(friends); // # -> ["John" ,"Michael", "Steven", "Peter", "Jay"]

// // REMOVES ELEMENTS
// // pop() - last
// // can save to a variable to be used later
// const popped = friends.pop();
// console.log(popped);
// console.log(friends); // #-> ["John" ,"Michael", "Steven", "Peter"]

// // shift() - first
// friends.shift();
// console.log(friends); // # -> ["Michael", "Steven", "Peter"]

// // indexOf()
// // returns index at which an element is placed
// console.log(friends.indexOf("Steven")); // # -> 1
// console.log(friends.indexOf("Bob")); // # -> -1 because this is not in there

// friends.push(23);
// // includes() - this is an ES6 method, returns true or false
// console.log(friends.includes("Steven")); // true
// console.log(friends.includes("Bob")); // false
// console.log(friends.includes("23")); // false - because 23 is a string bc it uses strict equality

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

//////////////////////////////////////
// JS FUNDAMENTALS PART 2 - CODING CHALLENGE
//////////////////////////////////////
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // ES6 - arrow function version
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// // BONUSSSSS
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

//////////////////////////////////////
// INTRODUCTION TO OBJECTS
//////////////////////////////////////
// // array
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // object with key-value pairs, prop in objects return alphabetically but we access them with dot or bracket notation
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// // DOT VS. BRACKET NOTATION
// // dot notation
// console.log(jonas.lastName);

// // bracket notation
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = window.prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends."
//   );
// }

// ///////////////////////////////
// // OBJECT METHODS
// ///////////////////////////////
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Scmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // GOOD PRACTICE TO USE THIS INCASE SOMETHING CHANGES IN THE CODE
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   }

// };

//   // ...or, ...can also do this as a best practice
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// // SIMILAR TO THE BELOW FUNCTION
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// // EITHER OF THESE WILL WORK... ******** review ***********
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

// //for (...or example above)
// console.log(jonas.age);

/////////////////////////////////////////
// CODING CHALLENGE
/////////////////////////////////////////
// REMEMBER: BMI = mass / height ** 2 = mass / (height * height)
// mass in kg & height in meters

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi})
  is higher than ${john.fullName}'s BMI (${john.bmi})
  `);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi})
  `);
}
