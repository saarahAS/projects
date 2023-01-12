// An Email Simulation
/*
create your email class here
*/

class Email {
  constructor(emailContents, fromAddress) {
    this.fromAddress = fromAddress;
    this.emailContents = emailContents;
    this.hasBeenRead = false;
    this.isSpam = false;
  }

  markAsRead() {
    this.hasBeenRead = true;
  }

  markAsSpam() {
    this.isSpam = true;
  }
}

const inbox = [];

function addEmail(emailContents, fromAddress) {
  //make new email object
  let email = new Email(emailContents, fromAddress);
  //push object into inbox array
  inbox.push(email);
}

function getCount() {
  //number of emails in inbox
  return inbox.length;
}

function getEmail(index) {
  // return contents of email
  let email = inbox[index];
  //mark email as read
  email.markAsRead();
  return email.emailContents;
}

// return list of unread emails
function getUnreadEmails() {
  // learnt array.filter from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  return inbox.filter((email) => email.hasBeenRead == false);
}

function getSpamEmails() {
  // return list of emails marked as spam
  return inbox.filter((email) => email.isSpam == true);
}

function deleteEmail(index)
//delete email at user inputted index
 return inbox = inbox.splice[index, 1]

//-------------------------------
userChoice = "";
while (userChoice != "7") {
  userChoice = "3"; //prompt(
  //     "What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?"
  //   );
  if (userChoice == "1") {
    let selectEmail = prompt("Please enter the number of the email you would like to read.")
	//console.log(getEmail[response])

  } else if (userChoice == "2") {
    let selectEmail = prompt("Please enter the number of the email you would like to mark as spam.")
	// markAsSpam()
  } else if (userChoice == "3") {
    //	prompt: type email contents
	//prompt: from email address
	//addEmail()
  } else if (userChoice == "4") {
    let selectEmail = prompt("Please enter the number of the email you would like to delete.")
	//delete[response]
  } else if (userChoice == "5") {
	console.log(inbox.getSpamEmails())
  } else if (userChoice == "6") {
    console.log(getUnreadEmails())
  } else if (userChoice == "7") {
    console.log("Goodbye");
  } else {
    console.log("Oops - incorrect input");
  }
}
