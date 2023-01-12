// Task 3

//  a loop that goes through an array and outputs my favourite vehicle

const favouriteVehicle = "MERCEDES";
const vehicles = ["FORD", "MERCEDES", "VOLKSWAGAN", "TOYOTA", "PORSCHE"];

for (let i = 0; i < vehicles.length; i++) {
  if (vehicles[i] == favouriteVehicle) {
    console.log(`The ${vehicles[i]} IS my favourite vehicle.`);
  } else {
    console.log(`The ${vehicles[i]} is not my favourite vehicle.`);
  }
}
