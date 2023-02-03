// An Email Simulation

// class definition for Email with 4 attributes
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

// empty array to store emails
const inbox = [];

function addEmail(emailContents, fromAddress) {
  //make new email object
  let email = new Email(emailContents, fromAddress);
  //push object into inbox array
  inbox.push(email);
}

function getCount() {
  //number of emails in inbox is length of inbox array
  return inbox.length;
}

// fucntion to return contents of email
function getEmail(index) {
  let email = inbox[index];
  // catch error if number user inputted does not exist
  if (email == undefined) {
    alert("Email not found.");
  }
  //mark email as read
  email.markAsRead();
  return email;
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

function deleteEmail(index) {
  //delete email at user inputted index by removing it from array
  inbox.splice(index, 1);
}

//-------------------------------
userChoice = "";
while (userChoice != "7") {
  userChoice = prompt(
    "What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?"
  );
  // 1. read email
  if (userChoice == "1") {
    let selectEmail = Number(
      prompt("Please enter the number of the email you would like to read.")
    );
    email = getEmail(selectEmail);
    alert(`From: ${email.fromAddress}\nEmail contents: ${email.emailContents}`);

    // 2. mark as spam
  } else if (userChoice == "2") {
    let selectEmail = Number(
      prompt(
        "Please enter the number of the email you would like to mark as spam."
      )
    );
    email = getEmail(selectEmail);
    email.markAsSpam();

    // 3. send email
  } else if (userChoice == "3") {
    //prompt: email address and contents then calls addEmail() fucntion to add it to the inbox array
    let emailContents = prompt("Please type your email contents into the box.");
    let fromAddress = prompt("Please type your email address.");
    addEmail(emailContents, fromAddress);

    // 4. delete email
  } else if (userChoice == "4") {
    let selectEmail = Number(
      prompt("Please enter the number of the email you would like to delete.")
    );
    deleteEmail(selectEmail);

    // 5. view spam emails
  } else if (userChoice == "5") {
    alert(JSON.stringify(getSpamEmails()));

    // 6. view unread emails
  } else if (userChoice == "6") {
    alert(JSON.stringify(getUnreadEmails()));

    // 7. quit
  } else if (userChoice == "7") {
    alert("Goodbye");

    // 8. to catch any errors
  } else {
    alert("Oops - incorrect input");
  }
}
