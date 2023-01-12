// Task 1

// a program that detemines if a user-inputted word is a palindrome

/* request user to enter a word
create while loop to determine if word is a palindrome:
create reversed string - check if input and reversed input are equal
if equal - it is a palindrome */

const word = prompt("Please enter a word").toLowerCase();
let wordReverse = ""; // emtpy string to create backwards string inside
i = 0;

while (i < word.length) {
  wordReverse += word[word.length - i - 1];
  i++;
}
if (word == wordReverse) {
  console.log(`${word} is a palindrome!`);
} else {
  console.log(`${word} is not a palindrome.`);
}
