function calPoints(operations) {
  const records = [];
  for (const operation of operations) {
    if (operation === "C") {
      records.pop();
    } else if (operation === "D") {
      records.push(Number(records[records.length - 1]) * 2);
    } else if (operation === "+") {
      const sum = records
        .slice(-2)
        .reduce((sum, val) => (sum += Number(val)), 0);
      records.push(sum);
    } else {
      records.push(Number(operation));
    }
  }

  return records.reduce((sum, val) => (sum += Number(val)), 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
