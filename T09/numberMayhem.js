// Task 1

//while loop to output countdown from 20 to 0
i = 0;

while (i <= 20) {
  console.log(20 - i);
  i++;
}

//for loop to display even numbers between 1-20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//while loop to produce * pattern
let count = 5;
let string = ""; // empty string to build pattern in
i = 0;

while (i < count) {
  string += "*";
  console.log(`${string}`);
  i++;
}
