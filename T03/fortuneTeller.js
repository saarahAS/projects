// Compulsory Task 2

let mothersName = prompt("Please enter your mother's name");
let streetName = prompt("Please enter the name of the street you grew up on");
let favColour = prompt("Please enter your favourite colour as a child");
let currentAge = prompt("Please enter your current age");
let chooseNumber = prompt("Please enter a number between 1-10");


let yearsUntilMarriage = (currentAge/chooseNumber);
let yearsUntilMarriageRounded = Math.round(yearsUntilMarriage);
amountKids = (currentAge%chooseNumber);
hairColour = (currentAge - chooseNumber); 

let childString     
if (amountKids == 1) {
    childString = "child"
} else {
  childString = "children"
}



console.log(`In ${chooseNumber} years, you are going to meet your best friend named ${mothersName}` +
` ${streetName}. You will get married in ${yearsUntilMarriageRounded} years and have ${amountKids}` +
` ${childString}. In ${hairColour} years, you are going to dye your hair ${favColour}.`);