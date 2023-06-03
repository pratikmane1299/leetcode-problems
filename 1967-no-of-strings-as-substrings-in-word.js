function numOfStrings(patterns, word) {
  let count = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.indexOf(patterns[i]) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"));
console.log(numOfStrings(["a", "a", "a"], "ab"));
