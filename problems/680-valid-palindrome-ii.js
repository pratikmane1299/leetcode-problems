function reverse(str) {
  let i = str.length - 1;
  let rev = "";
  while (i >= 0) {
    rev = rev + str[i];
    i--;
  }

  return rev;
}

function validPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(0, i) + s.substring(i + 1);
    if (subStr === reverse(subStr)) {
      return true;
    }
  }

  return false;
}

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
