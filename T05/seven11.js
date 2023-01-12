// Task 1

// request user to input a number --> store variable
// determine if input is divisible by 7&11, 7, or 11
// create if statement
/* output:
    "[input] is divisible by both 7 and 11."
    "[input] is divisible by 11."
    "[input] is divisible by 7."
    "[input] is divisible by neither 7 or 11." */

let number = prompt("Please enter a number.");

if (number % 7 == 0 && number % 11 == 0) {
    console.log(`${number} is divisible by 7 and 11.`);

} else if (number % 7 == 0 && number % 11 !== 0) {
    console.log(`${number} is divisible by 7.`);

} else if (number % 7 !== 0 && number % 11 == 0) {
    console.log(`${number} is divisible by 11.`);

} else {
    console.log(`${number} is divisible by neither 7 nor 11.`);
}