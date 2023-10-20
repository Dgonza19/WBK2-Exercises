"use strict";

var payRate = 12.50;
var hoursWorked = 20;
var overtimeHours = hoursWorked - 20;

var grossPay = (payRate * hoursWorked) + (overtimeHours * payRate * 1.5);

if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 20;
}

else {
    overtimeHours = 0;
}

console.log("The gross pay would be: $" + grossPay.toFixed(2) + 
            " and overtime hours worked would be " + overtimeHours + ".");

let annualGrossPay = grossPay * 52;
let taxRate;

if (annualGrossPay <= 12000) {
  taxRate = annualGrossPay * .05;
}

else if (annualGrossPay <= 24999.99) {
  taxRate = annualGrossPay * .10;
}

else if (annualGrossPay <= 74999.99) {
  taxRate = annualGrossPay * .15;
}

else {
  taxRate = annualGrossPay * .20;
}

console.log("Your annual gross pay is $" + annualGrossPay + 
            ". You filed as single. The tax rate is at 10%, leaving you with a tax withholding of $" + taxRate + ".");