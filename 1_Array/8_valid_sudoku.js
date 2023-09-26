// Problem: https://leetcode.com/problems/valid-sudoku/
// Difficulty: Medium

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  let seen = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let curr = board[r][c];
      let box = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

      if (curr !== ".") {
        if (
          seen.has(`${curr} is in row ${r}`) ||
          seen.has(`${curr} is in column ${c}`) ||
          seen.has(`${curr} is in box ${box}`)
        ) {
          return false;
        }

        seen.set(`${curr} is in row ${r}`, true);
        seen.set(`${curr} is in column ${c}`, true);
        seen.set(`${curr} is in box ${box}`, true);
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board));
