// Task 1 and 2

// Guest list creator with maximum length and replace function

let guestList = [];
let guestName;
const MAX_GUEST_LIST = 10;

//
while ((guestName = prompt(`Please enter a name to add to your guest list.\nPress cancel if you have no more names to add.\nCurrent guest list:\n${guestList.join(", ")}`))) {
  guestName = guestName.toLowerCase();
  if (guestList.length < MAX_GUEST_LIST) {
    //to add guest names
    guestList.push(guestName);
  } else {
    //to replace a name
    let replaceChoice = prompt(`You have already added 10 guests. Would you like to replace one? Enter y/n: \nCurrent guest list:\n${guestList.join(", ")}`);
    // in case user clicks cancel
    if (replaceChoice != null) {
      replaceChoice = replaceChoice.toLowerCase();
    }

    if (replaceChoice == "y" || replaceChoice == "yes") {
      let replaceName = prompt(`Who would you like to replace? \nCurrent guest list:\n${guestList.join(", ")}`);
      if (guestList.includes(replaceName)) {
        let indexOfReplaceName = guestList.indexOf(replaceName);
        guestList.splice(indexOfReplaceName, 1);
        guestList.push(guestName);
      } else {
        // in case name to replace is not present in array
        alert("Invalid entry. Please try again");
      }
    } else {
      break;
    }
  }
}
console.log(guestList);
