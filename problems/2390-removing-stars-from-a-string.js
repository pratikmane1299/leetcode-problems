function removeStars(s) {
  let str = "";

  for (let i = 0; i, s.length; i++) {
    if (s[i] === "*") {
      str += str.substring();
    }
    if (s[i] !== "") {
      str += s[i];
    }
  }
}

console.log(removeStars("leet**cod*e"));
