"use strict";

// Example Data 1

var payRate = 12.50;
var hoursWorked = 20;
var overtimeHours = hoursWorked - 20;

var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);

if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
}

else {
    overtimeHours = 0;
}

console.log("The gross pay would be: $" + grossPay.toFixed(2) + 
            " and overtime hours worked would be " + overtimeHours + ".");

// Example Data 2 

var payRate = 25.00;
var hoursWorked = 40;
var overtimeHours = hoursWorked - 40;
            
var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);
            
if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
}
            
else {
        overtimeHours = 0;
}
            
console.log("The gross pay would be: $" + grossPay.toFixed(2) + 
            " and overtime hours worked would be " + overtimeHours + ".");

// Example Data 3

var payRate = 17.30;
var hoursWorked = 45;
var overtimeHours = hoursWorked - 40;

var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);

if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
}

else {
        overtimeHours = 0;
}

console.log("The gross pay would be: $" + grossPay.toFixed(2) + 
            " and overtime hours worked would be " + overtimeHours + ".");


