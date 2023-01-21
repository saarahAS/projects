// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

// setInterval() function takes in startCounter() to increase counter every second (1000ms) and outputs it to the console
let startCounter = function () {
  counter++;
  console.log(counter);
};
intervalID = setInterval(startCounter, 1000);

function stopCounter() {
  // add the logic required to stop the counter
  // using clearInterval()
  clearInterval(intervalID);
}

let startButton = document
  .getElementById("start")
  .addEventListener("click", startCounter);
let stopButton = document.getElementById("stop");

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console
//startButton.addEventListener("click", startCounter);

// the event listener is missing a callback function argument
// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);
