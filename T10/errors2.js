// This example program is meant to demonstrate errors.

// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

// syntax: added "" + ; & logical: changed "L" to "l"
let animal = "lion";
// syntax: removed indentation
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = "4";

//syntax: added "let", `, $, ; and changed spelling of variables & logical: switched variable positions
let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.`;

//syntax: added == & logical: changed to 4 legs
if (numberOfLegs == 4) {
  //syntax: add brackets + variable name spelling
  console.log(fullSpec);
}
