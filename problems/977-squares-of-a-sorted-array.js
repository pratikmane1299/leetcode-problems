function sortedSquares(nums) {
  const squaredArr = [];

  for (let no of nums) {
    squaredArr.push(+Math.abs(no * no));
  }

  return squaredArr.sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
