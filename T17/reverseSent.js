//Task 1

// reversing a word using recursion

let reversed = ""; //empty string to build reversed word in
const mySentence = "This is my reversed sentence!";

reverseSentence(mySentence, mySentence.length - 1); //calling function
console.log(reversed);

//parameters of function
function reverseSentence(sentence, position) {
  //stop recursion after all letters are complete
  if (position < 0) {
    return;
  }

  reversed += sentence[position]; // building empty reverse string
  reverseSentence(sentence, position - 1); //looping back to function selecting previous letter
}
