disappearString = (myString, toErase) => {
  // Place your code here
  for (let i = 0; i < toErase.length; i++) {
    myString = myString.replace(toErase[i], "");
  }
  return myString;
};

// DO NOT EDIT BELOW THIS LINE
let testStrings = ["the quick brown fox jumps over the lazy dog", "hello world", "software engineering is fun", "i like javascript", "clown case", "rhythms"];

let stringToDisappear = "aeiou";

let correctStrings = ["th qck brwn fox jumps over the lzy dog", "hll world", "sftwr engneering is fn", " lik jvascript", "clwn cs", "rhythms"];

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
  let test = testStrings[strIdx];
  let correct = correctStrings[strIdx];

  let got = disappearString(test, stringToDisappear);

  if (got == correct) {
    console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
  } else {
    console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
  }
}
