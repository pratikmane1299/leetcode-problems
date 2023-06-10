var MyHashMap = function() {
    this.hashMap = {};
};

MyHashMap.prototype.put = function(key, value) {
	this.hashMap[key] = value;
};

MyHashMap.prototype.get = function(key) {
  return this.hashMap[key.toString()] !== undefined
    ? this.hashMap[key.toString()]
    : -1;
};

MyHashMap.prototype.remove = function(key) {
  delete this.hashMap[key];
};

 
// Your MyHashMap object will be instantiated and called as such:
var obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
obj.get(1);
obj.get(3);
