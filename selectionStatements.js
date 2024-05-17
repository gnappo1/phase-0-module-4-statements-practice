// Practice File: Selection Statements

// Problem 1: Using if/else if/else
//! Do not the following two lines of code
const num1 = 10;
const num2 = 10;
let result3;

// Modify the code below
if (num1 > num2) {
    result3 = "num1 is greater than num2";
} else if (num1 < num2) {
    result3 = "num2 is greater than num1";
} else {
    result3 = "num1 and num2 are equal";
}

// console.log the result
console.log("Problem 1:", result3);

//=======================================================

// Problem 2: Using ternary operator
//! Do not the following two lines of code
const num3 = 5;
const num4 = 7;

// Modify the code below
let result4 = num3 < num4 ? "num4 is greater than or equal to num3" : "num3 is greater than num4";

// console.log the result
console.log("Problem 2:", result4);

//=======================================================
// Problem 3: Using switch statement
//! Do not the following two lines of code
const dayOfWeek = "Thursday";
let dayType;

// Modify the code below
switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        dayType = "weekday";
        break;
    case "Saturday":
    case "Sunday":
        dayType = "weekend";
        break;
    default:
        dayType = "invalid day";
}

// console.log the result
console.log("Problem 3:", dayType);