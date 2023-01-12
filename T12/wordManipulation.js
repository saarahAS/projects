// Task 2

//manipulating a user-inputted word by replacing characters with !, uppercase letters, reversing the word and retreiving the ascii value of the word

const word = prompt("Please enter a word:");

//replacing every other character with !
let lettersInWord = word.split("");
for (let i = 1; i < lettersInWord.length; i += 2) {
  lettersInWord[i] = "!";
}
console.log(`1. ${word} with !: ${lettersInWord.join("")}`);

//reversing the word
let reverseWord = word.split("").reverse().join("");
console.log(`2. ${word} reversed: ${reverseWord}`);

//replacing every 6th character with the corresponding uppercase letter
lettersInWord = word.split("");
for (let i = 5; i < lettersInWord.length; i += 6) {
  lettersInWord[i] = lettersInWord[i].toUpperCase();
}
console.log(`3. ${word} with Uppercase: ${lettersInWord.join("")}`);

//retreiving the ascii value of each character in the word
let letterCode = [];
for (let i = 0; i < word.length; i++) {
  letterCode[i] = word.charCodeAt(i);
}
console.log(`4. The ascii code for ${word}: ${letterCode.join(", ")}.`);
