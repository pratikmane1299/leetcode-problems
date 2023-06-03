function divideString(s, k, fill) {
  let output = [];
  for (let i = 0; i < s.length; i += k) {
    let subStr = s.slice(i, i + k);
    if (subStr.length < k) {
      subStr += fill.repeat(k - subStr.length);
    }
    output.push(subStr);
  }

  return output;
}

console.log(divideString("abcdefghi", 3, "x"));
console.log(divideString("abcdefghij", 3, "x"));
