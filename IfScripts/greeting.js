"use strict";

// let is changeable 
// const is not changeable

let currentHour = 1300;
let greeting;

if (currentHour <= 1000) {
    greeting = "Good Morning!";
}

// else if (currentHour = 1000 - 1700) {
//   greeting = "Good day!";
// }

else if (currentHour >= 1700) {
  greeting = "Good Evening!";
}

else {
  greeting = "Good Day!";
}

console.log(greeting)