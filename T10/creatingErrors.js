//Task 2

// a programme with 2 syntax (compilation) errors, a run-time error and a logical error

num1 = 5; //syntax: missing "const" or "let"
const num2 = 3;
let num2 = 4; //run-time error (type): re-assigned a const variable

let total = (num1 = num2); // logical error: typo: wrote = instead of +
console.log(`The total of num1 and num2 = ${Total}.`); //syntax: capital T in total
