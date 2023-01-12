

// Task 1

// a program that detemines if a user-inputted word is a palindrome

/* request user to enter a word
create while loop to determine if word is a palindrome
output whether word is palindrome or not */

let word = "abcda"; //prompt("Please enter a word.").toLowerCase()
let i = 0;
let wordNew = "";
let isPalindrome = true;

// while (i < word.length) {
//   if (word[i] !== word[word.length - i - 1]) {
//     isPalindrome = false;
//   }
//   i++;
// }

// if (isPalindrome == true) {
//   console.log(`${word} is a palindrome.`);
// } else {
//   console.log(`${word} is not a palindrome.`);
// }

while (i < word.length) {
  wordNew += word[word.length - i - 1];
  i++;
}

if (word == wordNew) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
