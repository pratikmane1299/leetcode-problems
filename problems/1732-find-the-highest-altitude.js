function largestAltitude(gain) {
  const length = gain.length;

  let alts = [0];

  for (let i = 0; i < length; i++) {
    alts.push(alts[alts.length - 1] + gain[i]);
  }

  return Math.max(...alts);
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
