/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
	this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.arr.includes(val)) {
		return false;
	}
	this.arr.push(val);
	return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!this.arr.includes(val)) {
		return false;
	}
  this.arr = this.arr.filter((item) => item !== val);
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	var len = this.arr.length - 1;
	var index = Math.floor(Math.random() * len);
	return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
