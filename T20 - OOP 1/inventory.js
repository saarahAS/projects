//OOP 1

// An inventory of shoes that you can edit, search for items in, sort and extract information from using class constructors, functions and methods

class Shoes {
  constructor(name, code, quantity, value) {
    this.name = name;
    this.code = code;
    this.quantity = quantity;
    this.value = value;
  }

  //methods to edit any aspect of the shoe class
  set editedName(newName) {
    this.name = newName;
  }
  set editedCode(newCode) {
    this.code = newCode;
  }
  set editedQuantity(newQuantity) {
    this.quantity = newQuantity;
  }
  set editedvalue(newvalue) {
    this.value = newvalue;
  }
}

// 5 instance of Shoes class
shoe1 = new Shoes("aldo", 1111, 60, 29.99);
shoe2 = new Shoes("vans", 2222, 50, 59.99);
shoe3 = new Shoes("boss", 3333, 40, 39.99);
shoe4 = new Shoes("nike", 4444, 30, 69.99);
shoe5 = new Shoes("puma", 5555, 20, 49.99);

//pushing 5 instances into array
let shoesArray = [];
shoesArray.push(shoe1, shoe2, shoe3, shoe4, shoe5);
console.log("Original array of shoe types:");
console.log(shoesArray);

//inserting new line for readbility in log
console.log("\n");

console.log("Searching array for item:");
//function to search for any shoe in array
function findShoeByName(shoes, name) {
  let found = shoes.find((shoe) => shoe.name == name);
  console.log(
    `${name} is found in list. Here are the details: ${JSON.stringify(found)}`
  );
}

let found = findShoeByName(shoesArray, "nike");

console.log("\n");

//sorting array in ascending order of price
console.log("Sorting array in ascending order of price:");
console.log(shoesArray.sort((a, b) => a.value - b.value));

console.log("\n");

//extracting highest price from final index of sorted array (ascending by price)
console.log(
  `Details for shoe type with highest value per item: ${JSON.stringify(
    shoesArray[shoesArray.length - 1]
  )}`
);

//extracting lowest price from 0th index of sorted array (ascending by price)
console.log(
  `Details for shoe type with lowest value per item: ${JSON.stringify(
    shoesArray[0]
  )}`
);

console.log("\n");

//calling 'setter' method to edit each aspect of shoe class on each shoe
//edited name of shoe1 - logging before and after to console
console.log("Examples of editing various aspects of the instances:");
console.log("Edit name:");
console.log(`Shoe1 original: ${JSON.stringify(shoe1)}`); //learnt JSON.stringify from: https://tutorial.eyehunts.com/js/console-log-shows-object-object-json-stringify/
shoe1.editedName = "bing";
console.log(`Shoe1 edited: ${JSON.stringify(shoe1)}`);

console.log("\n");

//edited product code of shoe2 - logging before and after to console
console.log("Edit code:");
console.log(`Shoe2 original: ${JSON.stringify(shoe2)}`);
shoe2.editedCode = "9999";
console.log(`Shoe2 edited: ${JSON.stringify(shoe2)}`);

console.log("\n");

//edited quantity of shoe3 - logging before and after to console
console.log("Edit quantity:");
console.log(`Shoe3 original: ${JSON.stringify(shoe3)}`);
shoe3.editedQuantity = "100";
console.log(`Shoe3 edited: ${JSON.stringify(shoe3)}`);

console.log("\n");

//edited value per item of shoe4 - logging before and after to console
console.log("Edit value:");
console.log(`Shoe4 original: ${JSON.stringify(shoe4)}`);
shoe4.editedvalue = "99.99";
console.log(`Shoe4 edited: ${JSON.stringify(shoe4)}`);

console.log("\n");
