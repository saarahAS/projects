const wordArray = [
  "butterfly",
  "cat",
  "pigeon",
  "dog",
  "tiger",
  "maggot",
  "snake",
  "rabbit",
  "lion",
  "parrot",
];

//function to determine if word length equals 6 letters, will return true/fasle
function is6Letters(word) {
  if (word.length === 6) {
    return true;
  } else {
    return false;
  }
}

//Higher-order funtion to take in array and a function to build new array of words that returned 'true' in callback function
function myFilterFunction(wordArray, callbackFunction) {
  const resultArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    //calls function on each word, push to array if function returned true
    if (callbackFunction(wordArray[i]) == true) {
      resultArray.push(wordArray[i]);
    }
  }
  return resultArray;
}
// example usage
console.log("6 letter words:");
console.log(myFilterFunction(wordArray, is6Letters));

// Extra Example to test function
function is5Letters(word) {
  if (word.length === 5) {
    return true;
  } else {
    return false;
  }
}
console.log("\nTest: 5 letter words:");
console.log(myFilterFunction(wordArray, is5Letters));
