function topKElements(nums, k) {
  const countMap = new Map();

  for (const no of nums) {
    if (countMap.has(no)) {
      countMap.set(no, countMap.get(no) + 1);
    } else {
      countMap.set(no, 1);
    }
  }

  return [...countMap.keys()]
    .sort((a, b) => countMap.get(b) - countMap.get(a))
    .slice(0, k);
}

console.log(topKElements([1, 1, 1, 2, 2, 3], 2));
console.log(topKElements([1], 1));
