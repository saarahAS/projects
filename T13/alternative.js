alternativeString = (myString) => {
  // Place your code here
  splitString = myString.toLowerCase().split("");
  for (let i = 0; i < splitString.length; i += 2) {
    splitString[i] = splitString[i].toUpperCase();
  }
  return splitString.join("");
};

// DO NOT EDIT BELOW THIS LINE
let testStrings = ["Hello World", "Hello", "HELLO", "Software Engineering is Fun", "I like Javascript", "clown case"];

let correctStrings = ["HeLlO WoRlD", "HeLlO", "HeLlO", "SoFtWaRe eNgInEeRiNg iS FuN", "I LiKe jAvAsCrIpT", "ClOwN CaSe"];

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
  let test = testStrings[strIdx];
  let correct = correctStrings[strIdx];

  let got = alternativeString(test);

  if (got == correct) {
    console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
  } else {
    console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
  }
}
