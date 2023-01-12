// Capstone Project

// Cypher where each letter is replaced with the 15th letter after it

const Z_ASCII = 90; // 90 is the max value for uppercase
const z_ASCII = 122; // 122 is the max value for lowercase
const CYPHER = 15; // Encoding characters with 15 letters after inputted character
const ALPHABET_LENGTH = 26;

function toCode(char) {
  let encodedChar = char.charCodeAt(0);
  // For spaces and punctuation to remain the same in encoded message
  if (char.toUpperCase() === char.toLowerCase()) {
    return encodedChar;
  }
  encodedChar = encodedChar + CYPHER;
  // To create cycle - looping from Z/z back to A/a
  if (
    (char === char.toUpperCase() && encodedChar > Z_ASCII) ||
    (char === char.toLowerCase() && encodedChar > z_ASCII)
  ) {
    return encodedChar - ALPHABET_LENGTH;
  }
  return encodedChar;
}

function encode(message) {
  let encodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let asciiValue = toCode(message[i]);
    encodedMessage += String.fromCharCode(asciiValue);
  }
  return encodedMessage;
}

console.log(encode("Welcome to my Capstone Project!"));
console.log(encode("This is a secret message."));
console.log(encode("Happy holidays :)"));
