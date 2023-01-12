let printValuesOf = (jsObject, keys) => {
  // removed = in "i <="
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[key]); //changed index 'k' to 'key'
  }
};

let simpsonsCatchphrases = {
  lisa: "BAAAAAART!",
  bart: "Eat My Shorts!",
  marge: "Mmm~mmmmm",
  homer: "d'oh!", //changed outer '' to ""
  maggie: "(Pacifier Suck)",
};

printValuesOf(simpsonsCatchphrases, ["lisa", "bart", "homer"]); // made multiple keys into single array

// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined
