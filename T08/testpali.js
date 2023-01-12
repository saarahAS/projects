// Task 1

// a program that detemines if a user-inputted word is a palindrome

/* request user to enter a word
create while loop to determine if word is a palindrome
output whether word is palindrome or not */

let word = "madam"; //prompt("Please enter a word.")
let wordNew = "";
let i = 0;

// while (i < wordLength) {
//   if (word[i] == word[wordLength - i - 1]) {
//     isPalindrome = true;
//   } else {
//     isPalindrome = false;
//   }

//   i += 1;
// }

// if (isPalindrome == true) {
//   console.log(`${word} is a palindrome`);
// } else {
//   console.log(`${word} is not a palindrome`);
// }

while (i < word.length) {
  wordNew += word[word.length - i - 1];
  console.log(wordNew);
  i++;
}

if (word == wordNew) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
