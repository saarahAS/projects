// A distance/time/speed calculator that takes in user input

//using a try-catch block to handle any user-inputted errors
try {
  let metric = prompt(
    "Would you like to calculate distance, time or speed? Please input: d, t or s."
  ).toLowerCase();

  switch (metric) {
    case "d":
      calculateDistance();
      break;

    case "t":
      calculateTime();
      break;

    case "s":
      calculateSpeed();
      break;

    // if an invalid or no letter is inputted, will throw error
    default:
      throw "Invalid input. Please refresh and try again.";
  }
  // to print error message
} catch (err) {
  console.error(err);
}

function calculateDistance() {
  let time = Number(prompt("Please enter time in seconds"));
  // to ensure input is a number
  if (isNaN(time)) {
    throw "Invalid: input is not a number";
  }
  let speed = Number(prompt("Please enter speed in metres per second."));
  if (isNaN(speed)) {
    throw "Invalid: input is not a number";
  }
  console.log(`The distance is ${speed} x ${time} = ${speed * time}m.`);
}

function calculateTime() {
  let distance = Number(prompt("Please enter distance in metres"));
  if (isNaN(distance)) {
    throw "Invalid: input is not a number";
  }
  // to avoid "infinity" as a response
  if (distance == 0) {
    throw "Can't divide by 0. Please try again.";
  }

  let speed = Number(prompt("Please enter speed in metres per second"));
  if (isNaN(speed)) {
    throw "Invalid: input is not a number";
  }
  if (speed == 0) {
    throw "Can't divide by 0. Please try again.";
  }

  console.log(`The time is ${distance}/${speed} = ${distance / speed}s.`);
}

function calculateSpeed() {
  let distance = Number(prompt("Please enter distance in metres"));
  if (isNaN(distance)) {
    throw "Invalid: input is not a number";
  }
  if (distance == 0) {
    throw "Can't divide by 0. Please try again.";
  }
  let time = Number(prompt("Please enter time in seconds"));
  if (isNaN(time)) {
    throw "Invalid: input is not a number";
  }
  if (time == 0) {
    throw "Can't divide by 0. Please try again.";
  }
  console.log(`The speed is ${distance}/${time} = ${distance / time}m/s.`);
}
