// Task 3

// a multiple choice quiz that ends when the user answers correctly or does not wish to answer again

/* ask user mcq
if correct ==> "correct!" + end
if incorrect => ask: try again?
if  "Y" => ask mcq again
if "N" => end */

let answer;
let retry;

do {
  answer = prompt("What colour is the sky?\na. purple\nb. pink\nc. blue\nd. yellow\nPlease type the correct letter: a, b, c, or d.").toLowerCase();

  if (answer == "c") {
    // stops programme from continuing if correct
    retry = "n";
    console.log(`${answer} is correct!`);

    //if input is invalid, ask again
  } else if (answer != "a" && answer != "b" && answer != "c" && answer != "d") {
    retry = "y";
  } else {
    retry = prompt("Incorrect answer. Would you like to try again?\nPlease enter: yes or no").toLowerCase();
  }
} while (retry == "yes" || retry == "y");
