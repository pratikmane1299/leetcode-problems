function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  let reversedString = "";
  let i = s.length - 1;
  while (i >= 0) {
    reversedString += s[i];
    i--;
  }

  return reversedString === s;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("A man, a plan, a canal: +=-)}[?/.#$^&!%*Panama"));
// console.log(
//   isPalindrome(
//     "A man, a plan, a canal: +=-)}[?/.#$^&!%*Panama 1e34242333  3242432"
//   )
// );
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome(" "));
console.log(isPalindrome("ab_a"));
