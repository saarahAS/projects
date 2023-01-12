isPalindrome = (myString) => {
  // Place your code here

  return myString == myString.toLowerCase().split("").reverse().join("");
};

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
  "The Quick Brown Fox Jumps Over The Lazy Dog",
  "helloworld",
  "tacocat",
  "anna",
  "racecar",
  "dad",
  "level",
  "noon",
  "rotator",
  "tenet",
  "saippuakivikauppias",
  "hyperiondev",
  "rhythms",
];

let correctStrings = [false, false, true, true, true, true, true, true, true, true, true, false, false];

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
  let test = testStrings[strIdx];
  let correct = correctStrings[strIdx];

  let got = isPalindrome(test);

  if (got == correct) {
    console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
  } else {
    console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
  }
}
