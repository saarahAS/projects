// Task 1

// request user input
// if UC  print "__ is an upppercase letter"
// if LC print "__ is a lowercase letter"
// if number, print "__ is a number"
// if none then "NaN/letter"

let userInput = prompt(
  "Please enter an uppercase letter, lowercase letter or number."
);

if (Number.isInteger(Number(userInput))) {
  //converted prompt to be read as a Number
  console.log(`${userInput} is a number.`);
} else if (userInput.toUpperCase() == userInput.toLowerCase()) {
  console.log(`${userInput} is not a number or a letter`);
} else if (userInput == userInput.toUpperCase()) {
  console.log(`${userInput} is an uppercase letter.`);
} else if (userInput == userInput.toLowerCase()) {
  console.log(`${userInput} is a lowercase letter.`);
}
