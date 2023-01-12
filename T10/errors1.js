// This example program is meant to demonstrate errors.

// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program."); //syntax error: added ()
console.log("\n"); // 2x syntax error: added () + small 'c' for console

let ageStr = "24"; // syntax error: changed "==" to "=" & run-time error: removed "years old" (NaN)
let age = Number(ageStr); //syntax error: added "let" & run-time error(type): replaced "Integer" with "Number"
console.log("I'm " + age + " years old."); //logical error: spacing in sentence
let three = 3; // run-time error(type): removed ""

let answerYears = age + three;

//The following line does not seem necessary to the final output
console.log("The total number of years: " + answerYears); //syntax: added () + removed "" from answerYears & logical error: space after ":"
let answerMonths = answerYears * 12 + 6; //syntax error: added "let" + changed variable to "answerYears" & logical error: calculation: +6
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old"); // syntax error: added ()

//HINT, 330 months is the correct answer
