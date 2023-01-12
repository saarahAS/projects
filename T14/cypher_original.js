// Capstone Project

// cypher where each letter is replaced with the 15th letter after it

let message = "Merry Christmas!";
let encodedMessage = "";
function toCode(char) {
  if (char.toUpperCase() === char.toLowerCase()) {
    return char.charCodeAt(0);
  } else if (char === char.toUpperCase()) {
    let upperCaseCode = char.charCodeAt(0) + 15;
    if (upperCaseCode > 90) {
      return upperCaseCode - 26;
    } else {
      return upperCaseCode;
    }
  } else if (char === char.toLowerCase()) {
    let lowerCaseCode = char.charCodeAt(0) + 15;
    if (lowerCaseCode > 122) {
      return lowerCaseCode - 26;
    } else {
      return lowerCaseCode;
    }
  }
}

for (let i = 0; i < message.length; i++) {
  let asciiValue = toCode(message[i]);
  encodedMessage += String.fromCharCode(asciiValue)
}
console.log(encodedMessage)

