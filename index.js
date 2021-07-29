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
