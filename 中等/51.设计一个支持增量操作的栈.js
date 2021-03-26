/**
 * @param {number} maxSize
 */
 var CustomStack = function (maxSize) {
	this.maxSize = maxSize;
	this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
	if (this.arr.length < this.maxSize) {
		this.arr.push(x);
		console.log(this.arr);
	}
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!this.arr.length) {
    return -1
  } else {
    const deleteNumber = this.arr.pop();
    return deleteNumber
  }

};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
	this.arr = this.arr.map((item, index) => {
		if (index + 1 <= k) {
			item = item + val;
		}
    return item
	});
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
