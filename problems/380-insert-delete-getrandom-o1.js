var RandomizedSet = function () {
  this.set = [];
};

RandomizedSet.prototype.insert = function (val) {
  const found = this.set.find((v) => v === val);
  console.log("found - ", found);
  if (found !== undefined) return false;

  this.set.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  const idx = this.set.findIndex((v) => v === val);
  if (idx === -1) return false;

  this.set = this.set.filter((v) => v !== val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const length = this.set.length;
  return this.set[Math.floor(Math.random() * length)];
};
