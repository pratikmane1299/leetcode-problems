function containsDuplicateII() {
  const indicesMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (indicesMap[nums[i]]) {
      indicesMap[nums[i]] = [...indicesMap[nums[i]], i];
    } else indicesMap[nums[i]] = [i];
  }

  for (const no in indicesMap) {
    if (indicesMap[no].length >= 2) {
      const indices = indicesMap[no];
      for (let i = 0; i < indices.length; i++) {
        for (let j = i + 1; j <= indices.length - 1; j++) {
          if (Math.abs(indices[i] - indices[j]) <= k) return true;
        }
      }
    }
  }

  return false;
}

console.log(containsDuplicateII([1, 2, 3, 1], 3));
console.log(containsDuplicateII([1, 0, 1, 1], 1));
console.log(containsDuplicateII([1, 2, 3, 1, 2, 3], 2));
