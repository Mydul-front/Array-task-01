// const colors = ["red", "blue", "green", "yellow", "orange"];
// let color = colors.reverse();
// console.log(color);

// // task 2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// console.log(evenNumbers);
// again
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumber = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumber.push(numbers[i]);
//   }
// }
// console.log(evenNumber);

// task-3
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// var result = [];
// for (let name of numbers) {
//   result = result + name;
// }
// console.log(result);

// task-3
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// var results = numbers.join("");
// console.log(results);

// task-4
// const statement = "I am a hard working person";
// const reverseing = statement.split(" ").reverse().join(" ");
// console.log(reverseing);

// const statement = "I am a hard working person";
// let total = statement.split(" ").reverse().join(" ");
// console.log(total);

// const numbers = [67, 56, 3, 4, 5, 8, 1, 2, 33];
// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// const numbers = [67, 56, 3, 4, 5, 8, 1, 2, 33];
// let number = numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(number);

// const SchoolDetails = {
//   schoolName: "Mydul Islam School and collage",
//   "total Students": 12345,
//   department: {
//     firstDep: "cse",
//     secDep: "eee",
//     thirdDep: "cmt",
//   },
// };
// SchoolDetails["total Students"] = 456782;
// // console.log(SchoolDetails);
// console.log(SchoolDetails.department.secDep);

// const names = ["miran", "mim", "ab"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length % 2 == 0) {
//     console.log(names[i]);
//   }
// }

// break proyog

// const names = ["miran", "mim", "mydul", "ayan", "mimi"];
// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   if (names[i] === "mydul") {
//     continue;
//   }
//   console.log(names[i]);
// }
// let modulas = [];
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     modulas.push(i);
//   }
// }
// console.log(modulas);

// const names = ["mydul", "miran", "mimi", "mim", "Shakib Khan"];
// let bigData = names[0];
// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   if (names[i].length > bigData.length) {
//     bigData = names[i];
//   }
// }
// console.log(bigData);

// akti array er moddhe boro nam / boro index ta ninnoy koro

const heros = ["helk", "supperMan", "spaiderMan", "batman", "shakib khan"];
let lergestName = [];
for (let i = 0; i < heros.length; i++) {
  //   console.log(heros[i]);
  if (heros[i].length > lergestName.length) {
    lergestName = heros[i];
  }
}
console.log(lergestName);

/* atai niyom */
