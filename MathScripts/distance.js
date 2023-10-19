"use strict"; 

// input
var x1 = 1;
var y1 = 3;
var x2 = 3;
var y2 = 1;

// formula 
// d = Math.sqrt((x2-x1)²+(y2-y1)²)

var xDistance = 3 - 1
var yDistance = 1 - 3

// calculations
// var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
distance = Math.ceil(distance);

// output
// console.log("The distance between points: " + distance.toFixed(2));
console.log("The distance between points: " + distance);