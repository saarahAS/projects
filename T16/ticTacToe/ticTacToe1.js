// Define arrays
const rowWin = [
  ["O", "O", "O"],
  ["", "", ""],
  ["", "", ""],
];

const colWin = [
  ["", "X", ""],
  ["", "X", ""],
  ["", "X", ""],
];

const diagonalWin = [
  ["", "", "O"],
  ["", "O", ""],
  ["O", "", ""],
];

const diagonalWinInverse = [
  ["X", "", ""],
  ["", "X", ""],
  ["", "", "X"],
];

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid) {
  console.table(grid);
  // Inverse Diagonal Win
  if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
    if (grid[0][0] == "X") {
      console.log("X Won: Inverse Diagonal Win");
    } else if (grid[0][0] == "O") {
      console.log("O Won: Inverse Diagonal Win");
    }
  }
  // Diagonal Win
  if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) {
    if (grid[0][2] == "X") {
      console.log("X Won: Diagonal Win");
    } else if (grid[0][2] == "O") {
      console.log("O Won: Diagonal Win");
    }
  }
  // Row win
  if (
    (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2]) ||
    (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) ||
    (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2])
  ) {
    if (grid[0][0] == "X" || grid[1][0] == "X" || grid[2][0] == "X") {
      console.log("X Won: Row Win");
    } else if (grid[0][0] == "O" || grid[1][0] == "O" || grid[2][0] == "O") {
      console.log("O Won: Row Win");
    }
  }
  // Column win
  if (
    (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) ||
    (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) ||
    (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2])
  ) {
    if (grid[0][0] == "X" || grid[0][1] == "X" || grid[0][2] == "X") {
      console.log("X Won: Column Win");
    } else if (grid[0][0] == "O" || grid[0][1] == "O" || grid[0][2] == "O") {
      console.log("O Won: Column Win");
    }
  }
}
evaluatePlay(diagonalWinInverse);
evaluatePlay(diagonalWin);
evaluatePlay(rowWin);
evaluatePlay(colWin);
