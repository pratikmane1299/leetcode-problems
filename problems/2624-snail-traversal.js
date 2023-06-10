function snailTraversal(arr, row, col) {
  if (arr.length !== row * col) return [];

  const matrix = Array(row)
    .fill("")
    .map(() => Array(col).fill(""));

  let colIdx = 0,
    valIdx = 0,
    direction = "down";

  while (colIdx < col) {
    let rowIdx = 0;
    while (rowIdx < row) {
      matrix[direction === "up" ? row - 1 - rowIdx : rowIdx][colIdx] =
        arr[valIdx];

      rowIdx++;
      valIdx++;
    }
    direction = colIdx % 2 === 0 ? "up" : "down";
    colIdx++;
  }

  return matrix;
}

console.log(
  snailTraversal(
    [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
    5,
    4
  )
);
console.log(snailTraversal([1, 2, 3, 4], 1, 4));
console.log(snailTraversal([1, 3], 2, 2));
