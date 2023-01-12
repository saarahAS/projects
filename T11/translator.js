// Task 3

/* creat a map with 10 key value pairs
english = key, translated = value
ask user wht they would like translated 
when input = a key, output value */

let coloursMap = new Map();
// dictionary of colours from English to Afrikaans
coloursMap.set("red", "rooi");
coloursMap.set("blue", "bloe");
coloursMap.set("yellow", "geel");
coloursMap.set("green", "groen");
coloursMap.set("purple", "pers");
coloursMap.set("orange", "oranje");
coloursMap.set("pink", "pienk");
coloursMap.set("white", "wit");
coloursMap.set("black", "swart");
coloursMap.set("brown", "bruin");

let colourTranslation = prompt("Please enter a colour in English that you would like translated to Afrikaans.").toLowerCase();

//check if inputted value is in the colour map
if (coloursMap.has(colourTranslation) == true) {
  //extracting the value of the value of the inputted key
  console.log(`The Afrikaans word for the colour ${colourTranslation} is ${coloursMap.get(colourTranslation)}.`);
} else {
  console.log("This colour is not in our dictionary. Please choose another colour to translate.");
}
