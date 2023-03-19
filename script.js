function getRow(grid, rindex) {
  return grid[rindex];
}

function getColumn(grid, cindex) {
  let column = [];
  for (let i = 0; i < 9; i++) {
    column.push(grid[i][cindex]);
  }
  return column;
}

function getSection(grid, x, y) {
  let yCor = y * 3;
  let xCor = x * 3;
  let section = [];
  for (j = yCor; j < yCor + 3; j++) {
    for (i = xCor; i < xCor + 3; i++) {
      section.push(grid[j][i]);
    }
  }
  return section;
}

// let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
//               [ 2,7,1,   9,6,3,   4,8,5 ],
//               [ 4,6,3,   5,8,1,   7,9,2 ],

//               [ 9,3,4,   6,1,7,   2,5,8 ],
//               [ 5,1,7,   2,3,8,   9,6,4 ],
//               [ 6,8,2,   4,5,9,   3,7,1 ],

//               [ 1,5,9,   8,7,4,   6,2,3 ],
//               [ 7,4,6,   3,2,5,   8,1,9 ],
//               [ 3,2,8,   1,9,6,   5,4,7 ]];

// console.log (getColumn(puzzle, 0));
// console.log(getSection(puzzle,1,1))

function includes1to9(arr) {
  let numCheckArr = [];
  for (let i = 0; i < 9; i++) {
    if (numCheckArr.includes(arr[i])) {
      return false;
    } else {
      numCheckArr.push(arr[i]);
    }
  }
  return true;
  // if (arr.includes(1&&2&&3&&4&&5&&6&&7&&8&&9)){
  //     return true;
  // }
  // else{
  //     return false;
  // }
}
function sudokuChecker(grid) {
  for (let i = 0; i < 9; i++) {
    row = getRow(grid, i);
    if (!includes1to9(row)) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    column = getColumn(grid, j);
    if (!includes1to9(column)) {
      return false;
    }
  }
  for (let k = 0; k < 3; k++) {
    for (let p = 0; p < 3; p++) {
      section = getSection(grid, k, p);
      if (!includes1to9(section)) {
        return false;
      }
    }
  }
  return true;
}
let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

console.log(sudokuChecker(puzzle));
