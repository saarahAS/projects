// Task 1

// Temperature metric converter inlcuding Celcius, Farenheit and Kelvin

/* 3 user requests:
1. converting from : C, F, K
2. number to convert
3. convert to: C, F, K
example output: -273°C is 0K */

let fromTemp = prompt("Please enter the metric you are converting from?\nC\nF\nK").toUpperCase();

let temperature = Number(prompt("Please enter the number to convert."));
if (Number.isInteger(temperature) == false) {
  // if temperature input is NaN, show error
  alert("Invalid entry. Please refresh browser and try again");
}

let toTemp = prompt("Which metric would you like to convert the temperature to?\nC\nF\nK").toUpperCase();

let finalTemp = " ";
let degrees = "\u00B0";

switch (toTemp) {
  case "C":
    switch (fromTemp) {
      case "F":
        finalTemp = (temperature - 32) * (5 / 9);
        break;

      case "K":
        finalTemp = temperature - 273.15;
        break;

      case "C": // in case user inputs same metric in "toTemp" and "fromTemp"
        finalTemp = temperature;
        break;

      default: // error if unexpected input
        console.log("Error: Invalid entry. Please refresh browser and try again.");
        break;
    }
    break;

  case "F":
    switch (fromTemp) {
      case "C":
        finalTemp = temperature * (9 / 5) + 32;
        break;

      case "K":
        finalTemp = temperature * (9 / 5) - 459.67;
        break;

      case "F":
        finalTemp = temperature;
        break;

      default:
        console.log("Error: Invalid entry. Please refresh browser and try again.");
        break;
    }
    break;

  case "K":
    switch (fromTemp) {
      case "C":
        finalTemp = temperature + 273.15;
        break;

      case "F":
        finalTemp = (temperature + 459.67) * (5 / 9);
        break;

      case "K":
        finalTemp = temperature;
        break;

      default:
        console.log("Error: Invalid entry. Please refresh browser and try again.");
        break;
    }

    break;

  default:
    console.log("Error: Invalid entry. Please refresh browser and try again.");
    break;
}

console.log(`${temperature}${degrees}${fromTemp} is ${finalTemp.toFixed(2)}${degrees}${toTemp}`);
