/**
 * @title Valid Palindrome
 * @description A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.
 * @tags String, Two Pointers
 * @difficulty Easy
 */

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
