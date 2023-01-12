// Task 2

//Find index of word in array using recursive function

// function to find if word is in array and find its index
function searchIndex(array, value, index) {
  if (array[index] == value) {
    return index;
  } else if (index > array.length) {
    return -1; // if word isn't in array return -1
  }
  return searchIndex(array, value, index + 1);
}

// function to log word and its index to console
function printIndex(array, word) {
  const index = searchIndex(array, word, 0);
  if (index == -1) {
    console.log(`${word} not in array`);
  } else {
    console.log(`${word} was found at index ${index}`);
  }
}

const dataArray = ["java", "html", "javascript", "css"];
printIndex(dataArray, "java");
printIndex(dataArray, "html");
printIndex(dataArray, "javascript");
printIndex(dataArray, "css");
printIndex(dataArray, "python"); // testing with word not in array
