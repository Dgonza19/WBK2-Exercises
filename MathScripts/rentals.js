"use script";

// input
var numberOfPassengers = 38;
var seatCapacity = 15;
var vanDailyCost = 250;

// calculations
var numberOfVans = numberOfPassengers / seatCapacity;
var vanTotalCost = numberOfVans * vanDailyCost;
var vanSplitCost = vanTotalCost / numberOfPassengers;

vanTotalCost = Math.ceil(vanTotalCost);
vanSplitCost = Math.ceil(vanSplitCost);

// output
console.log("The total cost to rent the vans would be " + vanTotalCost + ".");
console.log("The split cost to rent the vans would be " + vanSplitCost + " per person.");  