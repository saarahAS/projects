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
//additional array to test for a winning play
const draw = [
  ["X", "", ""],
  ["", "X", ""],
  ["", "", "O"],
];

function evaluatePlay(grid) {
  console.table(grid);

  // checking which of the following 4 types of wins (will return 'undefined' and move to next line until true statement is found)
  let winner =
    isInverseDiagonalWin(grid) ||
    isDiagonalWin(grid) ||
    isRowWin(grid) ||
    isColWin(grid);
  // to check who won (if there is a winner)
  if (winner) {
    const loser = winner == "X" ? "O" : "X"; // Ternary operator learnt from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    console.log(`${winner} Won`);
    console.log(`${loser} lost`);
  } else {
    console.log("No winner: it's a draw");
  }
}

function isInverseDiagonalWin(grid) {
  // checking if all boxes in diagonal line are the same
  if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
    const letter = grid[0][0];
    // checking if a letter is present
    if (letter) {
      return letter;
    }
  }
}

function isDiagonalWin(grid) {
  if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) {
    const letter = grid[0][2];
    if (letter) {
      return letter;
    }
  }
}

function isRowWin(grid) {
  // loop to iterate through each row in grid
  for (let row = 0; row < grid.length; row++) {
    if (grid[row][0] == grid[row][1] && grid[row][1] == grid[row][2]) {
      const letter = grid[row][0];
      if (letter) {
        return letter;
      }
    }
  }
}

function isColWin(grid) {
  // loop to iterate through each column in grid
  for (let col = 0; col < grid.length; col++) {
    if (grid[0][col] == grid[1][col] && grid[1][col] == grid[2][col]) {
      const letter = grid[0][col];
      if (letter) {
        return letter;
      }
    }
  }
}

evaluatePlay(diagonalWinInverse);
evaluatePlay(diagonalWin);
evaluatePlay(rowWin);
evaluatePlay(colWin);
evaluatePlay(draw);
