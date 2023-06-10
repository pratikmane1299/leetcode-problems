function checkUnique(start, end, s) {
  const set = new Set();
  for (let k = start; k < end; k++) {
    if (set.has(s[k])) {
      return false;
    } else {
      set.add(s[k]);
    }
  }

  return true;
}

function lengthOfLongestSubstring(s) {
  // if (s === "") return 0;
  // if (s.length === 1) return 1;

  // let totalSubstrs = [];

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (checkUnique(i, j, s)) {
        count = Math.max(count, j - i + 1);
      }
    }
  }

  return count;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
// console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));
