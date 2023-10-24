"use strict";

let departmentCode = 18;
let departmentName;

switch (departmentCode) {
    case 0:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName = "Human Resources";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relations";
        break;
}

console.log(`The code ${departmentCode} is for department ${departmentName}`);
        // concatenate a string using ${someVariable}