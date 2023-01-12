// Task 1

// Guest list creator with max length

/* prompt: input names of guests 
if more than 10, alert: "you have already added 10 to list" - break
is less than  10, add inputted name to array 
output list */

let guestList = [];
let guestName;
const MAX_GUEST_LIST = 10;

while ((guestName = prompt("Please enter a name to add to your guest list.\nPress cancel if you have no more names to add."))) {
  if (guestList.length == MAX_GUEST_LIST) {
    alert("You have already added 10 people to your guest list");
    break;
  } else {
    guestList.push(guestName);
  }
}

console.log(guestList);
