function transpose(matrix) {
	const m = matrix.length,
    n = matrix[0].length;
  const transposedMatrix = [];
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < m; j++) {
      col.push("");
    }
    transposedMatrix.push(col);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
