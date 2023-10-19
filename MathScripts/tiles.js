"use script";

// input
var area = 13 * 19;
var tilesPerBox = 12;
var additionalBoxes = .10

// calculations
var boxesNeeded = Math.ceil(area / tilesPerBox * 1);
var additionalBoxesNeeded = Math.ceil(area / tilesPerBox * 1) * additionalBoxes;

// output
console.log("You will need " + boxesNeeded + " boxes of tiles.");
console.log("You will need an additional " +additionalBoxesNeeded + " boxes of tiles.");