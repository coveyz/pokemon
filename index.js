/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // this.maxLength = capacity;
  // this.map = {}; // {Key: {value, time}}
  // this.time = 0;
  // this.curCapacity = 0;
  this.capacity = capacity;
  this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value
  }

  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  else if (this.cache.size >= this.capacity) {
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey)
  }

  this.cache.set(key, value);
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


var lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1))
lRUCache.put(3, 3);
console.log(lRUCache.get(2))
lRUCache.put(4, 4);
console.log(lRUCache.get(1))
console.log(lRUCache.get(3))
console.log(lRUCache.get(4))

// var lRUCache = new LRUCache(2);
// console.log(lRUCache.get(2))
// lRUCache.put(2, 6);
// console.log(lRUCache.get(1))
// lRUCache.put(1, 5);
// lRUCache.put(1, 2);
// console.log(lRUCache.get(1))
// console.log(lRUCache.get(2))