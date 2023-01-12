// Task 2

//request inputs for 4 sides and 4 corners
/* determine wther the shape is a square, rectangle,
rhombus or parallelogram

square = equal sides, corners = 90
rectangle = opposite sides equal, corners = 90
rhombus = all sides equal, opposite angles equal (none = 90, total = 360)
parallelogram = opposite sides equal, opposite angles equal (none = 90, total = 360) */

let side1 = prompt("Please enter a side 1");
let side2 = prompt("Please enter a side 2");
let side3 = prompt("Please enter a side 3");
let side4 = prompt("Please enter a side 4");

let corner1 = Number(prompt("Please enter a corner 1")); // converted to Number so they can be added to check if total of corners is 360
let corner2 = Number(prompt("Please enter a corner 2"));
let corner3 = Number(prompt("Please enter a corner 3"));
let corner4 = Number(prompt("Please enter a corner 4"));

// square
if (side1 == side2 && side2 == side3 && side3 == side4 && side4 == side1 && corner1 == 90 && corner2 == 90 && corner3 == 90 &&
    corner4 == 90) {
    console.log(`Your quadrilateral is a square`);

    // rectangle
} else if (side1 == side3 && side2 == side4 && side1 !== side2 && corner1 == 90 && corner2 == 90 && corner3 == 90 &&
    corner4 == 90) {
    console.log(`Your quadrilateral is a rectangle`);

    //rhombus    
} else if (side1 == side2 && side2 == side3 && side3 == side4 && side4 == side1 && corner1 == corner3 && corner2 == corner4
    && corner1 !== 90 && corner2 !== 90 && corner1 + corner2 + corner3 + corner4 == 360) {
    console.log(`Your quadrilateral is a rhombus`);

    //parallelogram    
} else if (side1 == side3 && side2 == side4 && side1 !== side2 && corner1 == corner3 && corner2 == corner4
    && corner1 !== 90 && corner2 !== 90 && corner1 + corner2 + corner3 + corner4 == 360) {
    console.log(`Your quadrilateral is a parallelogram`);
}