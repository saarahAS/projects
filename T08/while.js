// Task 2

// average calculator for user-inputted numbers, exit with -1

/* request user to input number
repeat request unless input is -1
calculate avg. of inputs (without -1) */

let num = Number(prompt("Enter a number."));
let count = 0;
let total = 0;

// if input is -1, exit loop
while (num != -1) {
  count++;
  total += num;
  num = Number(prompt("Enter a number"));
}
let average = total / count;

console.log(average);
