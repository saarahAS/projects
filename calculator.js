// Task 3

// calculator for 2 user inputted numbers

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
//converting string to number
let number1 = Number(prompt("Please enter your first number:"));
let number2 = Number(prompt("Please enter your second number:"));
let operation = prompt("Please enter your operation of choice: add, subtract, multiply, divide");
let result;
let operator;

switch (operation) {
  case "add":
  case "+":
    result = add(number1, number2);
    operator = "+";
    break;

  case "subtract":
  case "-":
    result = subtract(number1, number2);
    operator = "-";
    break;

  case "multiply":
  case "*":
    result = multiply(number1, number2);
    operator = "*";
    break;

  case "divide":
  case "/":
    result = divide(number1, number2);
    operator = "/";
    break;

  //to handle unexpected input
  default:
    console.log("Operation not identified. Please refresh and try again.");
    break;
}
//protect against invalid entries
if (operator != undefined && !Number.isNaN(result)) {
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}
