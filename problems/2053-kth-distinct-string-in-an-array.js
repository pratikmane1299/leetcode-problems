function kthDistinct(arr, k) {
  const uniqueCountMap = new Map();

  for (const str of arr) {
    if (uniqueCountMap.has(str)) {
      uniqueCountMap.set(str, uniqueCountMap.get(str) + 1);
    } else uniqueCountMap.set(str, 1);
  }

  const unique = Array.from(uniqueCountMap.keys()).filter(
    (key) => uniqueCountMap.get(key) === 1
  );

  if (unique.length >= k) {
    return unique[k - 1];
  }

  return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
