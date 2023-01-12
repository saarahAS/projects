// Task 1

// retrieving the total, maximum, minimum, average and median of 10 user inputs

let numberList = [];
let total = 0;

for (let i = 0; i < 10; i++) {
  let number = prompt(`Please enter 10 whole or decimal numbers. 
  ${numberList}`);
  number = parseFloat(number); //changing string from prompt to numbers
  numberList.push(number);
  total += number;
}

let max = Math.max(...numberList);
let indexOfMax = numberList.indexOf(max);

let min = Math.min(...numberList);
let indexOfMin = numberList.indexOf(min);

let averageNumber = (total / numberList.length).toFixed(2);

let sortedList = numberList.slice(); //copying array before sorting into ascending order so it doesn't replace original array
sortedList.sort((a, b) => a - b); // learnt from: https://stackoverflow.com/questions/33676888/javascript-sorting-numbers
let median = ((sortedList[4] + sortedList[5]) / 2).toFixed(2); //indices 4 & 5 are the middle numbers of the array length of 10

console.log(`The sum of the inputted numbers is ${total}.
The index of the maximum of the inputted numbers is ${indexOfMax}
The index of the minimum of the inputted numbers is ${indexOfMin}.
The average of the inputted numbers is ${averageNumber}.
The median of the inputted numbers is ${median}.`);
