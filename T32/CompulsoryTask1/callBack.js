// Code here for Compulsory Task 1

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    // logic  for incrementing the counter and outputting to the console every 1 second(1000ms)
    intervalID = setInterval(() => {
      counter ++
      console.log(counter)
    }, 1000
     
    );
}

// logic required to stop the counter using clearInterval()
function stopCounter() {
  clearInterval(intervalID)
}

let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop");

// callback function argument added to the event listener to start outputting the counter to the console
startButton.addEventListener("click", startCounter);

// callback function argument added to the event listener to stop the counter from outputting to the console
stopButton.addEventListener("click", stopCounter);
